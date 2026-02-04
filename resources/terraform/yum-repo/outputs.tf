output "bucket_name" {
  description = "Name of the S3 bucket hosting the YUM repository"
  value       = aws_s3_bucket.yum_repo.id
}

output "bucket_arn" {
  description = "ARN of the S3 bucket"
  value       = aws_s3_bucket.yum_repo.arn
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID (needed for cache invalidation in CI)"
  value       = aws_cloudfront_distribution.yum_repo.id
}

output "cloudfront_domain_name" {
  description = "CloudFront domain name (use this in yum repo baseurl)"
  value       = aws_cloudfront_distribution.yum_repo.domain_name
}

output "yum_repo_baseurl" {
  description = "The baseurl for the YUM repository configuration"
  value       = "https://${aws_cloudfront_distribution.yum_repo.domain_name}"
}

output "iam_user_name" {
  description = "Name of the IAM user for CI/CD"
  value       = aws_iam_user.ci.name
}

output "iam_user_arn" {
  description = "ARN of the IAM user for CI/CD"
  value       = aws_iam_user.ci.arn
}
