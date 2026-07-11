---
sidebar_position: 2
pagination_prev: spaces/learning-hub
pagination_next: null
---

# Learning Hub Features

Every resource in our Learning Hub is hand-picked against a gold-standard criteria. We don't collect links — we curate pathways. Each module is locked until you prove mastery through labs and tests. No skipping. No shortcuts. Only forward.

## The Pathway Structure

### 1. Foundations (Prerequisite-Free Entry Points)
These modules require no prior Refinery nodes. Start here if you're new to the domain.

| Module | Source Platform | Focus | Validation |
|--------|-----------------|-------|------------|
| **Linux Fundamentals** | TryHackMe: Linux Fundamentals | CLI, filesystem, permissions, processes, networking basics | Deploy a hardened VM, document attack surface |
| **Networking Basics** | TryHackMe: Intro to Networking | OSI/TCP/IP, DNS, HTTP, TLS, Wireshark basics | PCAP analysis: extract credentials, map topology |
| **Web App Basics** | PortSwigger: Core Skills | Request/response, headers, cookies, encoding, devtools | Find and exploit reflected XSS in a lab app |

### 2. Offensive Fundamentals (Requires: Foundations)
Progressive tracks building core exploitation skills.

**Binary Exploitation Track** (Source: pwn.college)
- **Module 1:** Stack Smashing — Buffer overflows, ROP intro, ASLR bypass
- **Module 2:** Format Strings — Arbitrary read/write, GOT overwrite
- **Module 3:** Heap Intro — malloc/free internals, fastbin/unsorted bin attacks
- **Module 4:** Advanced Heap — House of Force, House of Spirit, Tcache poisoning
- **Module 5:** Kernel Exploitation — SLUB, UAF, race conditions, KPTI bypass

**Web Application Track** (Source: PortSwigger Academy)
- **Module 1:** Injection — SQLi, NoSQLi, LDAPi, command injection, WAF bypass
- **Module 2:** Auth & Session — Broken auth, session fixation, JWT flaws, OAuth/OIDC attacks
- **Module 3:** Access Control — IDOR/BOLA, path traversal, SSRF, CORS misconfig
- **Module 4:** Client-Side — XSS (stored, DOM, mutation), CSP bypass, clickjacking
- **Module 5:** Advanced — Deserialization, template injection, GraphQL, WebSockets

**Network & Infrastructure Track** (Source: TryHackMe + custom)
- **Module 1:** Recon & Enumeration — Passive/active, DNS, certificates, cloud metadata
- **Module 2:** Lateral Movement — SMB, WinRM, SSH, Pass-the-Hash, Kerberos delegation
- **Module 3:** Privilege Escalation — Linux (kernel, sudo, capabilities), Windows (token, services, DLL)
- **Module 4:** Persistence — Systemd, cron, WMI, scheduled tasks, Golden Ticket

### 3. Specialized Domains (Requires: Offensive Fundamentals)
Deep dives into focused capability areas.

| Domain | Modules | Validation Artifact |
|--------|---------|---------------------|
| **Reverse Engineering** | x86-64/ARM64 assembly, Ghidra/IDA, obfuscation, packing, VM-based | Full RE of a stripped, packed malware sample |
| **Cryptography Engineering** | Symmetric/asymmetric, TLS, side channels, implementations | Break a weak crypto implementation; write a correct one |
| **Cloud Security** | AWS/Azure/GCP IAM, container escape, serverless, CI/CD | Compromise a misconfigured multi-account AWS org |
| **Mobile Security** | Android/iOS internals, Frida/Objection, certificate pinning, root detection | Bypass all protections on a test app; extract secrets |
| **Hardware/Firmware** | UART/JTAG/SPI, bootloader, RTOS, baseband, fault injection | Extract firmware, find vuln, demonstrate exploit |

### 4. Blue Team / Detection (Parallel Track)
Runs alongside offensive tracks. Every offensive module has a detection counterpart.

- **Detection Engineering** — Sigma, YARA, Snort, Zeek, eBPF, OSQuery
- **Threat Hunting** — Hypothesis-driven, MITRE ATT&CK mapping, behavioral analytics
- **Incident Response** — Triage, containment, eradication, recovery, forensics (disk, memory, network, cloud)
- **Secure Architecture** — Zero trust, least privilege, segmentation, secrets, supply chain

## Locked Progression Mechanics

### How It Works
1. **You see the full graph** — All modules, all dependencies, all the way to your target capability
2. **You pick a target** — "I want to do kernel exploitation" or "I want to hunt in AWS"
3. **The Refinery computes your path** — Minimal prerequisite set. No extra nodes.
4. **You unlock one node at a time** — Complete validation → next node unlocks automatically
5. **No skipping** — If you think you know it, *prove it*. The validation challenge is the same for everyone.

### Validation Challenge Types
| Type | Description | Example |
|------|-------------|---------|
| **Lab Completion** | Finish the source platform's lab with proof | Screenshot + flag + writeup |
| **Code Implementation** | Implement the technique from scratch | Exploit script that works on a fresh target |
| **Teaching Session** | 10-min recorded explanation for a peer | Video + Refinery integration note |
| **Detection Rule** | Write a Sigma/YARA rule for the technique | Rule + test corpus (benign + malicious) |
| **Architecture Diagram** | Map the system, trust boundaries, data flows | Diagram + threat model (STRIDE) |

### What Happens If You Fail
- **First attempt:** Reviewer gives specific feedback. You retry.
- **Second attempt:** Pair with a member who passed. Co-work the gap.
- **Third attempt:** Refinery suggests a prerequisite you missed. Go back, fill it, return.

No shame. No penalty. The graph protects you from the illusion of competence.

## University Curriculum Integration

We map every CS and Cybersecurity course at Southern Delta University to Refinery nodes.

| University Course | Refinery Nodes Covered | Gap Filled By Club |
|-------------------|------------------------|-------------------|
| CSC 201: Programming I | Clean Code (C track), Linux Fundamentals | Exploit dev prerequisites |
| CSC 301: Data Structures | Discrete Math (graphs, trees), Binary Exploitation (heap) | Heap internals, allocator exploitation |
| CSC 350: Computer Networks | Networking Basics, Recon, Lateral Movement | PCAP analysis, protocol exploitation |
| CSC 401: Operating Systems | Kernel Exploitation, Linux Internals, Memory Management | Kernel exploitation, rootkits |
| CYB 301: Intro to Cybersecurity | Web App Basics, Injection, Auth | Full PortSwigger progression |
| CYB 402: Cryptography | Crypto Engineering, TLS, Side Channels | Implementation flaws, post-quantum |

**The result:** When your professor teaches buffer overflows, you've already exploited three variants, written the detection rule, and taught it to a peer. Theory and practice are the same track, traversed together.

## AI Refinery Integration

The Learning Hub is not static. The AI Refinery continuously:

1. **Monitors source platforms** — New pwn.college modules, new PortSwigger labs, new TryHackMe rooms
2. **Grades new content** — Applies the same 5-criterion rubric (Accuracy, Depth, Pedagogy, Prereqs, Currency)
3. **Updates the graph** — Inserts new nodes, adds edges, obsoletes superseded paths
4. **Notifies you** — "Your path to Kernel Exploitation has a new shortcut. Node `slub-allocator-internals` replaces `slab-basics` + `kmalloc-cache`. Delta: -2 hours."
5. **Preserves your progress** — Completed validations stay validated. Only *future* path optimizes.

## How to Start

1. **Join the Discord** — `#learning-hub` channel. Introduce yourself. State your background and target capability.
2. **Run the diagnostic** — A 30-minute practical assessment (Linux, networking, coding, debugging). No studying. Just shows where you are.
3. **Get your path** — The Refinery computes your personalized curriculum from diagnostic → target.
4. **Pick your first node** — Start the validation challenge. Ask for a buddy in `#learning-hub` if you want one.
5. **Submit, iterate, advance** — The rhythm of the club.

---

**Previous:** [Spaces →](/docs/spaces)  
**Next:** [First Principles →](/docs/spaces/first-principles)