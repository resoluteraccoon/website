---
sidebar_position: 4
pagination_prev: hacker-club/hackathons
pagination_next: null
---

# Newsletter

**The Raccoon Report** — Weekly intelligence brief written by operators, for operators. No marketing fluff. No vendor pitches. Just: new techniques, active campaigns, tool releases, vulnerability analyses, and operational lessons from the field. Written in plain text. Encrypted in transit. Read in 5 minutes. Reference for months. Subscribe once. Stay sharp forever.

## What It Is

A weekly digest curated by the crew, for the crew. Every Friday. Plain text. No HTML. No tracking pixels. Just signal.

## What's Inside

### Active Campaigns
- Threat actor activity (APT, ransomware, initial access brokers)
- Infrastructure indicators (IPs, domains, certs, ASNs)
- TTPs observed in the wild (MITRE ATT&CK tagged)
- Attribution context (when available, with confidence levels)

### New Techniques
- Novel exploitation methods (from Project Zero, vendor blogs, conference slides, private research)
- Detection bypasses (EDR, AV, WAF, CSP, sandbox)
- Post-exploitation tradecraft (lateral movement, persistence, credential access, exfil)
- Tool updates (new features, rewritten modules, plugin ecosystems)

### Vulnerability Analyses
- Critical CVEs with: root cause, exploitability assessment, detection rules, mitigation priority
- 0-days in the wild (when public): what we know, what we don't, what to watch
- Patch analysis: what the diff actually changes, bypass potential

### Tool Releases
- New open-source tools worth adding to the arsenal
- Major updates to existing tools (breaking changes, new capabilities)
- Tool comparisons when categories get crowded

### Operational Lessons
- "We tried X. It failed because Y. Next time we'll Z."
- Red team: initial access that worked, pivot that didn't, cleanup that saved us
- Blue team: detection that fired, alert that fatigued, hunt that found it
- Purple team: the conversation that changed both sides

### Crew Announcements
- Upcoming events (hackathons, movie nights, conferences, webinars)
- Member milestones (first blood, new cert, paper published, job change)
- Recruitment cycles, learning pod formations, Refinery updates

## Format

```
THE RACCOON REPORT — Issue #XX — YYYY-MM-DD

=== ACTIVE CAMPAIGNS ===
[APT29] New GraphicalNeutrino variant targeting diplomatic entities in EU
  - IOCs: [hashed]
  - TTPs: T1566.002, T1059.001, T1021.004
  - Confidence: HIGH

[RANSOMWARE] LockBit 3.0 affiliate using CitrixBleed (CVE-2023-4966) for initial access
  - IOCs: [hashed]
  - Detection: Sigma rule #1247
  - Confidence: MEDIUM

=== NEW TECHNIQUES ===
- eBPF-based rootkit (BoomKit) — kernel persistence via ring-3 loader
  - Source: Black Hat USA 2024 slides
  - Detection: eBPF program load monitoring (falco rule #892)
  - Our take: High relevance for cloud workloads. Testing in lab this week.

- SAML assertion replay via encrypted assertion manipulation
  - Source: Private research (member: @handle)
  - Affected: ADFS, Okta, Azure AD (default configs)
  - Mitigation: Enforce ReplayCache, validate Audience/NotBefore/NotOnOrAfter strictly

=== VULNERABILITY ANALYSES ===
CVE-2024-XXXX — RCE in [Product] via deserialization gadget chain
  - Root cause: [Technical detail]
  - Exploitability: UNAUTHENTICATED / NETWORK / LOW COMPLEXITY
  - Detection: YARA rule #3421, Sigma rule #1248
  - Mitigation: Upgrade to X.Y.Z. WAF bypass likely via [vector].
  - Our exposure: [Internal asset inventory check]

=== TOOL RELEASES ===
- nuclei v3.0 — Template engine rewrite, code execution templates, GitHub Actions native
- pwn.college dojo update — New heap exploitation modules (glibc 2.38+)
- ghidra 11.2 — Decompiler improvements for ARM64, Swift, Go 1.22

=== OPERATIONAL LESSONS ===
[RED] Initial access via OAuth device code flow phishing worked on 3/5 targets.
  - Lesson: MFA doesn't stop device code flow. Conditional Access policies required.
  - Detection: Azure AD sign-in logs show "Device Code" auth method.

[BLUE] Sigma rule for WMI event subscription persistence fired 3x this week.
  - All 3 were legitimate admin activity. Rule tuned: exclude known admin accounts + scheduled tasks.
  - Lesson: Baseline before alert. Context > volume.

=== CREW ANNOUNCEMENTS ===
- Hackathon #7: Sat 2024-XX-XX 09:00 — Sun 2024-XX-XX 21:00. Theme: Satellite comms. Register by Wed.
- Movie Night: "Zero Days" — Fri 2024-XX-XX 20:00. Discord stage.
- @member handle — First blood on HackerOne program XYZ. $15k bounty. Respect.
- Refinery path optimization: Web App Security track shortened by 3 nodes. Check your dashboard.

---

PGP Key: [link] | Unsubscribe: [link] | Archive: [link]
```

## Subscription

- **Members:** Auto-subscribed. Delivered to `#raccoon-report` Discord channel + encrypted email.
- **Alumni:** Opt-in via Discord role. Same delivery.
- **Public:** Redacted version (no IOCs, no internal lessons) published to blog monthly.

## Contributing

Any member can submit an item by Thursday 23:59 UTC:
- Drop in `#raccoon-report-submissions` with: category, source, summary, why it matters, actionable takeaway
- Curators (rotating weekly) select, edit, format
- Your byline on every item you contribute

## Why Plain Text?

- Renders everywhere. Terminal, phone, encrypted email, air-gapped machine.
- No tracking. No fingerprinting. No "view in browser" nonsense.
- Version controllable. Diffable. Searchable. Scriptable.
- Respects your attention. No formatting distractions. Just words that matter.

---

**Previous:** [Hackathons →](/docs/hacker-club/hackathons)