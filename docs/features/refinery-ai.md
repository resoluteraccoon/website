---
sidebar_position: 4
pagination_prev: features/locked-progression
pagination_next: features/thumbnail-cards
---

# Refinery AI

Refinery AI is your personal code reviewer, exploit analyst, and architecture critic — trained on the world's best offensive and defensive codebases. It doesn't autocomplete. It challenges. It finds the off-by-one. It spots the race condition. It asks: "What happens when this fails?" Your code leaves the refinery harder than it entered.

## What It Is

Not a coding assistant. A **code adversary**.

Refinery AI reviews every module you submit to the Refinery. It doesn't suggest completions. It suggests **breaks**:
- "This parser assumes null-termination. The protocol doesn't guarantee it."
- "This lock order violates the global hierarchy. Deadlock path: A→B→C→A"
- "This crypto implementation uses a static nonce. CTR mode collapses."
- "This error path leaks a file descriptor. Under load, you exhaust the table."

## How It Works

### 1. Continuous Ingestion
The Refinery AI monitors:
- CVE feeds (NVD, GitHub Security Advisories, vendor advisories)
- arXiv (cs.CR, cs.LG, stat.ML)
- Conference proceedings (USENIX, IEEE S&P, ACM CCS, NDSS, Black Hat, DEF CON)
- Vendor blogs (Google Project Zero, Microsoft Security Response, Cloudflare, etc.)
- GitHub (security advisories, dependency alerts, trending security repos)
- Threat intel feeds (AlienVault OTX, MISP, OpenCTI)

### 2. Grade & Filter
Every resource evaluated against our rubric:

| Criterion | Weight | Threshold |
|-----------|--------|-----------|
| Technical Accuracy | 30% | Zero tolerance for factual errors |
| Depth & First Principles | 25% | Must derive from atomic truths |
| Pedagogical Quality | 20% | Must teach, not just inform |
| Prerequisite Clarity | 15% | Must declare its dependencies |
| Currency | 10% | Must be current or explicitly versioned |

Below threshold → discarded. At threshold → human review queue.

### 3. Map & Integrate
Approved resources placed in the dependency graph:
- Better explanation of *heap feng shui* → replaces old node
- New ROP mitigation → new defense node linked to attack node
- Novel type confusion variant → new attack node linked to base class

The graph breathes. It's not static.

### 4. Update & Alert
When the graph changes:
- Your progress preserved
- Your path may optimize — shorter route to same mastery
- Critical CVE in mastered tech → targeted briefing: vuln, exploit, patch, detection, mitigation

Members who built the Refinery review every change. The system learns from their corrections.

## What It Does For You

### Code Review
Submit a PR → Refinery AI reviews for:
- Memory safety (UB, UAF, double-free, OOB, races)
- Crypto hygiene (modes, nonces, key management, side channels)
- Injection surfaces (SQL, command, LDAP, template, deserialization)
- AuthZ bypasses (IDOR, BOLA, privilege escalation paths)
- Error handling (does every fallible call check the result?)
- Audit trail (security decisions logged with context)

### Exploit Analysis
Feed it a crash → it classifies:
- Root cause (which instruction, which assumption violated)
- Exploitability (control flow hijack? info leak? DoS only?)
- Mitigation bypass (ASLR? CFI? PAC? CET? MTE?)
- Detection signature (Sigma, YARA, eBPF)
Design doc → it asks:

- Trust boundaries drawn? Where does data cross?
- Threat model explicit? STRIDE applied?
- Failure domains isolated? Blast radius bounded?
- Secrets management? Rotation? Revocation?
- Observability? Can you detect compromise in under 5 minutes?

## Built By Members, For Members

This is not a vendor product. We built it. We maintain it. We secure it.

The AI Refinery is itself a target. Adversarial inputs, data poisoning, model extraction — we apply our own security knowledge to harden the system that hardens us.

Members develop:
- Ingestion pipelines (distributed, resilient, observable)
- Grading models (fine-tuned, evaluated, red-teamed)
- Graph database (schema, queries, consistency guarantees)
- Alerting engine (deduplication, prioritization, escalation)
- Web interface (auth, authZ, audit logging)

Every component is a learning opportunity. Every incident is a case study.

## The Vision: A Living Curriculum

In five years, no human manually updates the curriculum. The Refinery will:

1. Detect a paradigm shift (e.g., post-quantum cryptography standardization)
2. Source definitive resources (NIST PQC standards, implementations, analyses)
3. Grade them
4. Restructure the *Cryptography* subtree
5. Alert every member on the old path: "Your path has been optimized. Here is the delta."

And the members will verify. And the Refinery will learn.

---

**Previous:** [Locked Progression →](/docs/features/locked-progression)  
**Next:** [Thumbnail Cards →](/docs/features/thumbnail-cards)