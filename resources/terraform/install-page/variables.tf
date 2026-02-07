variable "aws_region" {
  description = "AWS region for all resources"
  type        = string
  default     = "eu-west-2"
}

variable "bucket_name" {
  description = "Name of the S3 bucket for the install page"
  type        = string
}

variable "iam_user_name" {
  description = "Name of the IAM user for CI/CD access"
  type        = string
  default     = "autonomi-install-page-ci"
}

variable "cloudfront_price_class" {
  description = "CloudFront price class"
  type        = string
  default     = "PriceClass_100"
}

variable "cloudfront_ttl" {
  description = "Default TTL for CloudFront cache (seconds)"
  type        = number
  default     = 300
}

variable "tags" {
  description = "Tags to apply to all resources"
  type        = map(string)
  default = {
    Project   = "autonomi"
    Component = "install-page"
    ManagedBy = "terraform"
  }
}
