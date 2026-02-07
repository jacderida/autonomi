terraform {
  required_version = ">= 1.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

# -----------------------------------------------------------------------------
# S3 Bucket
# -----------------------------------------------------------------------------

resource "aws_s3_bucket" "install_page" {
  bucket = var.bucket_name
  tags   = var.tags
}

resource "aws_s3_bucket_versioning" "install_page" {
  bucket = aws_s3_bucket.install_page.id

  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_public_access_block" "install_page" {
  bucket = aws_s3_bucket.install_page.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "install_page_public_read" {
  bucket = aws_s3_bucket.install_page.id

  depends_on = [aws_s3_bucket_public_access_block.install_page]

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.install_page.arn}/*"
      }
    ]
  })
}

# -----------------------------------------------------------------------------
# CloudFront Distribution
# -----------------------------------------------------------------------------

resource "aws_cloudfront_origin_access_identity" "install_page" {
  comment = "OAI for ${var.bucket_name}"
}

resource "aws_cloudfront_distribution" "install_page" {
  enabled             = true
  is_ipv6_enabled     = true
  comment             = "Autonomi Install Page"
  default_root_object = "index.html"
  price_class         = var.cloudfront_price_class
  tags                = var.tags

  origin {
    domain_name = aws_s3_bucket.install_page.bucket_regional_domain_name
    origin_id   = "S3-${var.bucket_name}"

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.install_page.cloudfront_access_identity_path
    }
  }

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = "S3-${var.bucket_name}"
    viewer_protocol_policy = "redirect-to-https"
    compress               = true

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    min_ttl     = 0
    default_ttl = var.cloudfront_ttl
    max_ttl     = 86400
  }

  # Custom error response to serve index.html for any path
  custom_error_response {
    error_code         = 404
    response_code      = 200
    response_page_path = "/index.html"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}

# -----------------------------------------------------------------------------
# IAM User for CI/CD
# -----------------------------------------------------------------------------

resource "aws_iam_user" "ci" {
  name = var.iam_user_name
  tags = var.tags
}

resource "aws_iam_policy" "ci_install_page" {
  name        = "${var.iam_user_name}-policy"
  description = "Allow CI to publish install page to S3 and invalidate CloudFront"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "S3ReadWrite"
        Effect = "Allow"
        Action = [
          "s3:GetObject",
          "s3:PutObject",
          "s3:DeleteObject",
          "s3:ListBucket"
        ]
        Resource = [
          aws_s3_bucket.install_page.arn,
          "${aws_s3_bucket.install_page.arn}/*"
        ]
      },
      {
        Sid    = "CloudFrontInvalidation"
        Effect = "Allow"
        Action = [
          "cloudfront:CreateInvalidation",
          "cloudfront:GetInvalidation",
          "cloudfront:ListInvalidations"
        ]
        Resource = aws_cloudfront_distribution.install_page.arn
      }
    ]
  })
}

resource "aws_iam_user_policy_attachment" "ci_install_page" {
  user       = aws_iam_user.ci.name
  policy_arn = aws_iam_policy.ci_install_page.arn
}
