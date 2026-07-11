---
sidebar_position: 2
pagination_prev: blog/technical-articles
pagination_next: blog/ctf-writeups
---

# Research

Original findings, novel techniques, and academic paper summaries—when they meet our standard.

## Our Standard

We do not publish summaries of papers we have not implemented. We do not speculate on techniques we have not tested. Every research piece on this site has been reproduced, extended, and validated in our environment. If it has not been built, it does not go live.

## Methodology

1. **Literature Survey** — Map the prior art. Read the papers. Understand the assumptions.
2. **Reproduction** — Build the environment. Run the exploit. Verify the claims.
3. **Extension** — What did they miss? What assumptions break? What new primitives emerge?
4. **Documentation** — Write the technical report. Include code. Include detection/mitigation.
5. **Injection** — Push findings into the Refinery. Update the curriculum.

## Research Categories

### Vulnerability Research
New vulnerability classes. Novel exploit primitives. Mitigation bypasses. Root cause analysis of high-impact CVEs.

### Detection Engineering
Novel Sigma/YARA/Snort rules. Coverage mapping. False positive reduction. Behavioral analytics that survive obfuscation.

### Tool Development
Tools that solve a real operational gap. Not "another scanner." Open sourced. Benchmarked. Maintained.

### Protocol Analysis
RFC deviations. Implementation divergences. State machine flaws. Cryptographic protocol weaknesses.

### Hardware/Firmware
Side channels. Fault injection. JTAG/UART/SPI exploitation. Bootloader vulnerabilities. Supply chain verification.

## Publication Criteria

A research piece is published when:
- [ ] Reproduction is complete and documented
- [ ] Extension produces a novel result (new primitive, broader applicability, practical bypass)
- [ ] Code is open source, builds cleanly, includes tests
- [ ] Detection/mitigation is provided and validated
- [ ] Peer reviewed by two members (one domain expert, one generalist)
- [ ] Injected into Refinery with correct graph edges

## Current Research Projects

*Projects appear here when they reach publication criteria. Work-in-progress lives in the internal Refinery.*

---

**Next:** [CTF Write-Ups →](/docs/blog/ctf-writeups)