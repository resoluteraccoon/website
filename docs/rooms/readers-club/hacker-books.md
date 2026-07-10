---
sidebar_position: 1
pagination_prev: rooms/readers-club
pagination_next: rooms/readers-club/non-fiction
---

# Hacker Books

Technical security books that build real capability. Not certification prep. Not compliance checklists. The books that teach you how systems break, how exploits work, and how to think like an attacker so you can defend like a pro.

## Selection Philosophy

We select for **exploit development depth**, **reverse engineering rigor**, and **systems understanding**. Every book here has been implemented from — not just read.

### Exploit Development & Memory Corruption
- **The Art of Exploitation (Jon Erickson)** — Stack, heap, format strings, shellcode. The gateway.
- **Hacking: The Art of Exploitation (2nd Ed)** — Same author, deeper. GDB, assembly, network exploits.
- **Practical Binary Analysis (Dennis Andriesse)** — ELF, PE, disassembly, control flow, obfuscation, instrumentation.
- **Advanced Windows Exploitation (Tarjei Mandt et al.)** — Kernel pool, UAF, type confusion, CFG, ACG, VBS.
- **Mac OS X and iOS Internals (Jonathan Levin)** — XNU, Mach, IOKit, sandbox, kernel exploitation on Apple Silicon.

### Reverse Engineering & Malware Analysis
- **Practical Malware Analysis (Sikorski & Honig)** — Static, dynamic, behavioral, anti-analysis, unpacking. The lab manual.
- **The IDA Pro Book (Chris Eagle)** — The disassembler. Graphs, FLIRT, scripting, decompiler, processor modules.
- **Ghidra Book (NCC Group)** — The NSA's RE platform. Decompiler, p-code, scripting, headless, extensions.
- **Rootkits and Bootkits (Matrosov et al.)** — UEFI, bootkits, firmware persistence, hardware implants.

### Cryptography Engineering
- **Serious Cryptography (Jean-Philippe Aumasson)** — AES, ChaCha20, Poly1305, RSA, ECC, TLS, Noise, post-quantum. Implementation-focused.
- **Real-World Cryptography (David Wong)** — Protocols, PAKE, OPRF, threshold signatures, secure messaging. What goes wrong in practice.
- **Cryptography Engineering (Ferguson, Schneier, Kohno)** — Design, protocols, side channels, random generation, key management.

### Network & Protocol Security
- **TCP/IP Illustrated, Vol 1 (Stevens)** — The protocol stack. Packet capture. Congestion. The foundation.
- **The Tangled Web (Michal Zalewski)** — Browser security model. Same-origin. CSP. CORS. HSTS. The web's immune system.
- **HTTP/2 & HTTP/3 Explained (Daniel Stenberg)** — Multiplexing, header compression, QUIC, 0-RTT. The modern transport.

### Specialized Domains
- **IoT Hacking (Various)** — Firmware extraction, UART/JTAG/SPI, radio protocols, BLE, Zigbee, LoRa.
- **Hardware Hacking (Huang, Grand, etc.)** — Glitching, fault injection, side channels, EM analysis, microprobing.
- **Cloud Security (Various)** — IAM, Kubernetes, serverless, container escape, supply chain, CSPM.

## How We Use These

Not reference shelves. **Workbenches.**

1. **Read the chapter.**
2. **Build the lab.** VM, container, hardware, cloud.
3. **Reproduce every example.** Type the code. Trace the execution. Break it intentionally.
4. **Extend it.** Change the target. Change the constraint. Change the mitigation.
5. **Document.** Write the detection rule. Write the mitigation. Teach it to the group.

A book on this shelf is not "done" until you have a working exploit, a detection rule, and a teaching session for each major technique.

---

**Previous:** [Readers Club →](/docs/rooms/readers-club)  
**Next:** [Non-fiction →](/docs/rooms/readers-club/non-fiction)