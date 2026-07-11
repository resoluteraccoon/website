---
sidebar_position: 3
pagination_prev: blog/research
pagination_next: blog/movie-night-writeups
---

# CTF Write-Ups

Step-by-step solutions. Not just flags—the methodology.

## Our Approach

Every write-up is a teaching artifact. We do not post solutions to brag about flags. We post them to document the thinking process so others can learn the methodology. If the reader cannot reproduce the exploit from our explanation, the write-up has failed.

## Format

Every write-up follows this structure:

1. **Reconnaissance** — Binary analysis, protections, architecture, entry points
2. **Vulnerability Identification** — Root cause, trigger conditions, impact
3. **Exploitation Strategy** — Primitive construction, mitigation bypass, reliability
4. **Payload & Execution** — Final exploit chain, flag capture
5. **Mitigation & Detection** — How to patch, how to detect, Sigma/YARA rules
6. **Lessons Learned** — What this teaches about the vulnerability class

## Quality Bar

A write-up is published when:
- [ ] Exploit reproduces in a clean environment
- [ ] Every step is explained from first principles
- [ ] Code is annotated, not just dumped
- [ ] Mitigation addresses root cause, not symptoms
- [ ] Detection rule tested against benign corpus
- [ ] Peer reviewed by one member who did not solve the challenge

## Categories

- **Web** — SQLi, XSS, SSRF, IDOR, auth bypass, deserialization
- **Pwn** — Stack, heap, format string, UAF, type confusion, kernel
- **Reversing** — Obfuscation, packing, VM-based, anti-debug, anti-VM
- **Crypto** — Implementation flaws, side channels, protocol weaknesses
- **Forensics** — Disk, memory, network, artifact analysis
- **Misc** — OSINT, hardware, RF, stego, jailbreaks

---

**Next:** [Movie Night Write-Ups →](/docs/blog/movie-night-writeups)