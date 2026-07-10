---
sidebar_position: 8
pagination_prev: spaces/research
---
# Bug Bounty

## Why Bug Bounty

A bug bounty is not a lottery. It is a systematic capability.

You do not "try your luck." You apply a methodology. You map the attack surface. You prioritize by impact and exploitability. You automate the repetitive. You go deep where automation fails.

We do bug bounty because it is the purest test of the Refinery. Real targets. Real constraints. Real payouts that validate the skill.

## Our Methodology

### 1. Recon — The Foundation
- **Asset Discovery** — Subdomain enumeration (Amass, Subfinder, Assetfinder, Chaos), certificate transparency logs (crt.sh, Censys), DNS brute force, permutation scanning (AlterX, Gotator)
- **Technology Fingerprinting** — Nuclei templates, Wappalyzer, WhatWaf, custom headers analysis, SSL/TLS config (testssl.sh)
- **Content Discovery** — Feroxbuster, ffuf, Katana, gau, waybackurls, paramspider — mapped, deduplicated, prioritized
- **API Discovery** — Swagger/OpenAPI endpoints, GraphQL introspection, gRPC reflection, REST endpoint mapping

### 2. Threat Modeling — Prioritize by Impact
- **Attack Surface Scoring** — CVSS 4.0 + custom business impact weights
- **Component Risk** — Authenticated vs unauthenticated, public vs internal, legacy vs modern stack
- **Data Sensitivity** — PII, financial, credentials, intellectual property
- **Choke Points** — Authentication, authorization, payment, file upload, deserialization

### 3. Vulnerability Classes — Depth Over Breadth
We specialize. We do not spray.

**Web Application**
- SSRF (blind, via DNS/HTTP, cloud metadata, WAF bypass)
- SQLi (blind, time-based, OOB, WAF evasion, second-order)
- XSS (reflected, stored, DOM, mutation-based, CSP bypass)
- IDOR/BOLA (horizontal, vertical, mass assignment, GraphQL)
- Authentication/Authorization (OAuth/OIDC/SAML flaws, session fixation, JWT alg confusion)
- Deserialization (Java, .NET, PHP, Python, Node.js, Ruby, Go)
- Template Injection (SSTI — Jinja2, Twig, Freemarker, Velocity)
- Race Conditions (TOCTOU, limit overrun, coupon abuse)

**Infrastructure & Cloud**
- S3/GCS/Azure Blob misconfig (public, versioning, logging)
- IAM privilege escalation (AWS, GCP, Azure)
- Kubernetes (RBAC, pod escape, admission controller bypass)
- Serverless (Lambda/GCS/Cloud Functions permission issues)
- CI/CD (GitHub Actions, GitLab, Jenkins, secret leakage)

**Mobile & API**
- Certificate pinning bypass (Frida, Objection)
- Root/jailbreak detection bypass
- Local storage/Keychain/SharedPreferences leakage
- GraphQL (introspection, batching, aliasing, depth DoS)
- gRPC (reflection, protobuf deserialization)

**Client-Side & Supply Chain**
- DOM Clobbering, Prototype Pollution, PostMessage
- NPM/PyPI/RubyGems/Go module confusion, typo-squatting
- GitHub Actions/GitLab CI/CD injection
- Dependency confusion (internal package names)

### 4. Exploitation — Proof Before Report
- **Minimal Viable POC** — Single request that proves impact. No RCE for IDOR.
- **Impact Quantification** — Records exposed, accounts compromised, RCE achieved, data exfiltrated
- **Chaining** — Low + Medium = Critical. We document the chain.
- **WAF/Evasion** — Payload mutation, encoding, fragmentation, protocol-level evasion, header manipulation

### 5. Reporting — The Art of the Triage
**Title:** `[Critical] Unauthenticated SSRF in /api/v1/webhook leads to Cloud Metadata Access (AWS/GCP/Azure)`

**Body:**
```
## Summary
Unauthenticated SSRF in the webhook endpoint allows retrieval of cloud instance metadata, including IAM credentials.

## Affected Endpoint
POST /api/v1/webhook
Parameter: `callback_url`

## Steps to Reproduce
1. POST to /api/v1/webhook with callback_url=http://169.254.169.254/latest/meta-data/iam/security-credentials/
2. Observe response contains IAM role credentials
3. Use credentials to access S3/RDS/Secrets Manager

## Impact
- Full AWS account compromise via instance profile
- Access to all S3 buckets, RDS, Secrets Manager
- Lateral movement to connected accounts

## Evidence
[curl command]
[redacted response showing credential structure]

## Remediation
- Allowlist webhook domains
- Block RFC1918/link-local/metadata IPs at application and infrastructure layer
- Enforce IMDSv2 with token requirement
- Implement egress filtering

## References
- SSRF Prevention Cheat Sheet (OWASP)
- AWS IMDSv2 Documentation
```

## Our Standards

### No Low-Hanging Fruit Reports
We do not report:
- Missing security headers (unless CSP bypass)
- Cookie flags (unless session fixation exploitable)
- Information disclosure (unless actionable)
- Self-XSS (unless combined with CSRF/clickjacking)

### Quality Over Quantity
One Critical report > 50 Low reports.

### Ethics
- No testing out of scope.
- No data exfiltration beyond proof.
- No persistence. No lateral movement beyond proof.
- Responsible disclosure timeline respected.
- No public disclosure without vendor coordination.

## Platform Focus

| Platform | Focus |
|----------|-------|
| HackerOne | Enterprise, government, crypto |
| Bugcrowd | Enterprise, automotive, IoT |
| Intigriti | European, fintech, crypto |
| YesWeHack | European, public sector |
| Synack | Red team ops, continuous |
| Private Programs | Invite-only, high reward |

## Tooling We Build

- **Recon Pipeline** — Automated, scheduled, alerting on new subdomains/tech changes
- **Nuclei Template Library** — Custom templates for our target classes
- **POC Generator** — Template-based exploit generation from nuclei findings
- **Report Templater** — Structured report generation from finding schema
- **Scope Monitor** — Alerts on program scope changes, new assets, bonus changes

## The Bug Bounty Pipeline

Every member maintains:
1. **Active Programs** — 3–5 programs in active rotation
2. **Recon Schedule** — Weekly automated, monthly deep
3. **Finding Log** — Every finding (valid/duplicate/informative) logged with lesson
4. **Payout Tracking** — Expected vs actual, time-to-first-response, time-to-resolution
5. **Skill Gap Log** — "Failed to exploit X because I don't know Y" → Learning node created

## The Bug Bounty Debrief

Monthly. Mandatory.

Each member presents:
- **Best Finding** — The one that taught them the most
- **Worst Failure** — The one they missed, the WAF that stopped them, the logic they missed
- **New Technique** — A payload, a bypass, a tool, a workflow
- **Program Intelligence** — Scope changes, new contacts, triager behavior

This feeds the **Refinery**. The gaps become learning nodes. The techniques become shared tooling. The intelligence becomes program selection criteria.

---

**Previous:** [Skills Development →](/docs/spaces/skills-development)
**Next:** [Research →](/docs/spaces/research)