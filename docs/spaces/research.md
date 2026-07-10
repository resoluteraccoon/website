---
sidebar_position: 1
pagination_next: spaces/skills-development
---

# Research

## Why We Research

Vulnerabilities are not found by accident. They are found by people who know where to look, how to look, and what to look for. Research is the systematic expansion of that knowledge.

We do not research for papers. We research for capability. Every project must answer: *What can we do now that we couldn't do before?*

## Research Areas

### Vulnerability Discovery
- **Fuzzing Infrastructure** — AFL++, LibFuzzer, Honggfuzz, custom mutators, grammar-based fuzzing, structure-aware fuzzing
- **Static Analysis** — CodeQL, Semgrep custom rules, abstract interpretation, symbolic execution (angr, KLEE)
- **Binary Analysis** — Decompilation (Ghidra, IDA, Binary Ninja), deobfuscation, control flow recovery, type recovery
- **Logic Vulnerabilities** — Business logic flaws, authorization bypasses, race conditions, state machine violations

### Exploit Development
- **Mitigation Bypass** — ASLR, CFI, PAC, CET, Shadow Stacks, MTE, CHERI
- **Heap Exploitation** — glibc, jemalloc, tcmalloc, Windows heap, kernel heap
- **Kernel Exploitation** — Linux, Windows, macOS, *BSD, hypervisors
- **Hardware/Firmware** — Side channels, Rowhammer, Spectre/Meltdown variants, DMA attacks, JTAG/UART/SPI

### Detection & Defense
- **Detection Engineering** — Sigma, YARA, SNORT, Zeek, eBPF, OSQuery
- **Threat Hunting** — Hypothesis-driven, MITRE ATT&CK mapping, behavioral analytics
- **Secure Architecture** — Zero trust, least privilege, segmentation, secrets management, supply chain
- **Incident Response** — Triage, containment, eradication, recovery, forensics (disk, memory, network, cloud)

## The Research Process

### 1. Problem Definition
What is the gap? What is the unanswered question? What capability is missing?
Write it as a falsifiable hypothesis.

### 2. Literature Survey
Systematic. Exhaustive. Every paper, every blog, every tool, every talk. Map the territory. Find the borders.

### 3. Methodology
Design the experiment. Build the infrastructure. Define success metrics. Plan for failure modes.

### 4. Execution
Iterate. Document everything. Fail fast. Record negative results — they are data.

### 5. Artifact Production
Every research project produces:
- **Tool/Exploit/Detector** — Working code, documented, tested
- **Technical Report** — Hypothesis, methodology, results, limitations, future work
- **Teaching Session** — 20-minute explanation for peers
- **Detection/Mitigation** — If offensive, the defense. If defensive, the bypass.

### 6. Dissemination
Internal first. Then: conference talks, blog posts, CVE advisories, vendor coordination, open source release.

## Current Projects

- **Kernel Fuzzing Framework** — Structure-aware fuzzing for Linux kernel syscalls with custom mutators
- **TLS 1.3 Downgrade Detection** — Passive detection of version rollback and cipher forcing
- **Supply Chain Integrity** — Reproducible builds verification for critical dependencies
- **eBPF Rootkit Detection** — Behavioral analysis of eBPF program lifecycle

## Standards

- No "future work" sections without concrete next steps.
- No claims without reproducible artifacts.
- No solo research — every project has a reviewer, a teaching obligation, and a defense component.
- Ethics review for dual-use research. No publication of weaponized exploits without vendor coordination.

---

**Previous:** [Public Speaking →](/docs/spaces/public-speaking)
**Back to Spaces:** [Spaces →](/docs/spaces)