#!/usr/bin/env python3
"""Generate the Autonomi install page from a template.

Substitutes version and URL placeholders in the HTML template to produce the
final index.html for deployment.

Usage:
    python generate-install-page.py \
        --version 0.3.1 \
        --download-url "https://github.com/maidsafe/autonomi/releases/download/release-0.3.1" \
        --apt-domain apt.autonomi.com \
        --yum-domain yum.autonomi.com \
        --output index.html
"""

import argparse
import os
import sys


def main():
    parser = argparse.ArgumentParser(
        description="Generate the Autonomi install page from template"
    )
    parser.add_argument(
        "--version",
        required=True,
        help="Release version (e.g., 0.3.1)",
    )
    parser.add_argument(
        "--download-url",
        required=True,
        help="Base download URL for release assets",
    )
    parser.add_argument(
        "--apt-domain",
        required=True,
        help="Domain for the APT repository (e.g., apt.autonomi.com)",
    )
    parser.add_argument(
        "--yum-domain",
        required=True,
        help="Domain for the YUM repository (e.g., yum.autonomi.com)",
    )
    parser.add_argument(
        "--template",
        default=None,
        help="Path to the HTML template (default: auto-detect relative to script)",
    )
    parser.add_argument(
        "--output",
        default="index.html",
        help="Output file path (default: index.html)",
    )
    args = parser.parse_args()

    if args.template:
        template_path = args.template
    else:
        script_dir = os.path.dirname(os.path.abspath(__file__))
        template_path = os.path.join(
            script_dir,
            "..",
            "installer",
            "install-page",
            "index.html.template",
        )

    if not os.path.exists(template_path):
        print(f"Error: template not found at {template_path}", file=sys.stderr)
        sys.exit(1)

    with open(template_path, "r") as f:
        html = f.read()

    html = html.replace("{{VERSION}}", args.version)
    html = html.replace("{{DOWNLOAD_URL}}", args.download_url.rstrip("/"))
    html = html.replace("{{APT_REPO_DOMAIN}}", args.apt_domain)
    html = html.replace("{{YUM_REPO_DOMAIN}}", args.yum_domain)

    with open(args.output, "w") as f:
        f.write(html)

    print(f"Generated {args.output} for version {args.version}")


if __name__ == "__main__":
    main()
