output "s3_bucket_name" {
  description = "Name of the S3 bucket"
  value       = aws_s3_bucket.install_page.id
}

output "s3_bucket_arn" {
  description = "ARN of the S3 bucket"
  value       = aws_s3_bucket.install_page.arn
}

output "cloudfront_distribution_id" {
  description = "ID of the CloudFront distribution"
  value       = aws_cloudfront_distribution.install_page.id
}

output "cloudfront_domain_name" {
  description = "Domain name of the CloudFront distribution"
  value       = aws_cloudfront_distribution.install_page.domain_name
}

output "iam_user_name" {
  description = "Name of the CI IAM user"
  value       = aws_iam_user.ci.name
}
