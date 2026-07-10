---
sidebar_position: 3
pagination_prev: blog/research
pagination_next: blog/movie-night-writeups
---

# CTF Write-Ups

Step-by-step solutions. Not just flags — the methodology.

## Recent Write-Ups

**DEF CON 31 Quals — `heap_golf`** — Heap exploitation with limited allocations. Freelist corruption, size manipulation, arbitrary write primitive construction.

**HTB University CTF — `kernel_rop`** — Kernel ROP chain construction on Ubuntu 22.04. KPTI bypass, cred struct location, commit_creds preparation.

**Google CTF 2024 — `wasm_escape`** — WebAssembly sandbox escape via type confusion. Module linking, memory.grow, table manipulation.

## Format

Every write-up follows this structure:

1. **Reconnaissance** — Binary analysis, protections, architecture, entry points
2. **Vulnerability Identification** — Root cause, trigger conditions, impact
3. **Exploitation Strategy** — Primitive construction, mitigation bypass, reliability
4. **Payload & Execution** — Final exploit chain, flag capture
5. **Mitigation & Detection** — How to patch, how to detect, Sigma/YARA rules
6. **Lessons Learned** — What this teaches about the vulnerability class

**[→ Movie Night Write-Ups →](/docs/blog/movie-night-writeups)**