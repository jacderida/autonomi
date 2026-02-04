# YUM Repository Infrastructure

Terraform manifests for the Autonomi YUM/DNF repository hosted on AWS S3 + CloudFront.

## Architecture

```
                        ┌─────────────────┐
                        │   dnf/yum user  │
                        └────────┬────────┘
                                 │ HTTPS
                                 ▼
                        ┌─────────────────┐
                        │   CloudFront    │
                        │   Distribution  │
                        │   (CDN + HTTPS) │
                        │   TTL: 300s     │
                        └────────┬────────┘
                                 │ OAI
                                 ▼
                        ┌─────────────────┐
                        │   S3 Bucket     │
                        │ autonomi-yum-   │
                        │     repo        │
                        │                 │
                        │ repodata/       │
                        │   repomd.xml    │
                        │   repomd.xml.asc│
                        │   primary.xml.gz│
                        │   filelists.xml │
                        │   other.xml.gz  │
                        │ packages/       │
                        │   *.rpm         │
                        └─────────────────┘
                                 ▲
                                 │ s3 sync + CF invalidation
                        ┌─────────────────┐
                        │   IAM User      │
                        │ (CI/CD access)  │
                        │                 │
                        │ - s3:PutObject  │
                        │ - s3:GetObject  │
                        │ - s3:ListBucket │
                        │ - cf:Create-    │
                        │   Invalidation  │
                        └─────────────────┘
                                 ▲
                                 │
                        ┌─────────────────┐
                        │  GitHub Actions │
                        │  (publish-yum-  │
                        │   repo.yml)     │
                        └─────────────────┘
```

## Prerequisites

- [Terraform](https://www.terraform.io/downloads) >= 1.0
- AWS CLI configured with credentials that can create S3 buckets, CloudFront distributions, and IAM users
- An AWS account

## Usage

```bash
cd resources/terraform/yum-repo

# Initialize Terraform
terraform init

# Review the plan
terraform plan

# Apply (creates all resources)
terraform apply
```

## Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `bucket_name` | S3 bucket name | `autonomi-yum-repo` |
| `aws_region` | AWS region | `eu-west-2` |
| `cloudfront_price_class` | CDN price class | `PriceClass_100` (US/EU) |
| `cloudfront_ttl` | Default cache TTL (seconds) | `300` |
| `iam_user_name` | IAM user for CI/CD | `autonomi-yum-repo-ci` |
| `tags` | Resource tags | `Project=autonomi, Component=yum-repo` |

## Outputs

| Output | Description |
|--------|-------------|
| `bucket_name` | S3 bucket name |
| `cloudfront_distribution_id` | CloudFront ID (needed for CI cache invalidation) |
| `cloudfront_domain_name` | Domain name for yum repo baseurl |
| `yum_repo_baseurl` | Complete baseurl for .repo file configuration |
| `iam_user_name` | IAM user name |
| `iam_user_arn` | IAM user ARN |

## Post-Apply Steps

After `terraform apply`:

1. **Create access keys** for the IAM user:
   ```bash
   aws iam create-access-key --user-name autonomi-yum-repo-ci
   ```

2. **Add secrets to GitHub** (Settings > Secrets and variables > Actions):

   | Secret | Source |
   |--------|--------|
   | `YUM_REPO_AWS_ACCESS_KEY_ID` | Access key from step 1 |
   | `YUM_REPO_AWS_SECRET_ACCESS_KEY` | Secret key from step 1 |
   | `YUM_REPO_BUCKET_NAME` | `terraform output bucket_name` |
   | `YUM_REPO_CLOUDFRONT_DISTRIBUTION_ID` | `terraform output cloudfront_distribution_id` |
   | `YUM_REPO_REGION` | AWS region (e.g., `eu-west-2`) |
   | `YUM_REPO_DOMAIN` | `terraform output cloudfront_domain_name` |

   The existing `GPG_PRIVATE_KEY` and `GPG_PASSPHRASE` secrets are reused for signing.

3. **Upload the GPG public key** to the bucket root:
   ```bash
   aws s3 cp resources/keys/autonomi-signing-key.asc \
     s3://autonomi-yum-repo/autonomi-signing-key.asc \
     --content-type application/pgp-keys
   ```

4. Note the CloudFront domain:
   ```bash
   terraform output cloudfront_domain_name
   ```
   This is the URL users will use as the `baseurl` in their `.repo` file.

## End-User Setup

Once the infrastructure is deployed and the first release is published, users on
Fedora, RHEL, CentOS, or other RPM-based distributions can install the Autonomi
CLI suite with:

```bash
# Import the signing key
sudo rpm --import https://<cloudfront-domain>/autonomi-signing-key.asc

# Add the repository
sudo tee /etc/yum.repos.d/autonomi.repo <<EOF
[autonomi]
name=Autonomi Network CLI Suite
baseurl=https://<cloudfront-domain>
enabled=1
gpgcheck=1
gpgkey=https://<cloudfront-domain>/autonomi-signing-key.asc
EOF

# Install
sudo dnf install autonomi    # Fedora / RHEL 8+
# or
sudo yum install autonomi    # CentOS 7 / older RHEL
```

Replace `<cloudfront-domain>` with the actual CloudFront domain from `terraform output`.
