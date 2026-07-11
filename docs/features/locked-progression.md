---
sidebar_position: 3
pagination_prev: features/curated-learning
pagination_next: features/refinery-ai
---

# Locked Progression

You don't skip steps. Locked Progression enforces prerequisite mastery before unlocking the next module. No jumping to exploit development without memory corruption fundamentals. No red teaming without OPSEC discipline. The gate isn't a quiz — it's a practical demonstration. Prove it, then proceed.

## How It Works

### The Dependency Graph
Every learning module declares its prerequisites explicitly. The Refinery builds a directed acyclic graph (DAG) of all capabilities. You see the full graph — all modules, all dependencies, all the way to your target capability.

### The Validation Gate
To unlock a module, you must pass its **validation challenge**:

| Challenge Type | Description |
|----------------|-------------|
| **Lab Completion** | Finish the source platform's lab with proof (screenshot + flag + writeup) |
| **Code Implementation** | Implement the technique from scratch (exploit script that works on a fresh target) |
| **Teaching Session** | 10-minute recorded explanation for a peer who hasn't done the module |
| **Detection Rule** | Write a Sigma/YARA rule for the technique (rule + test corpus: benign + malicious) |
| **Architecture Diagram** | Map the system, trust boundaries, data flows + threat model (STRIDE) |

### What Happens If You Fail
- **Attempt 1:** Reviewer gives specific feedback. You retry.
- **Attempt 2:** Pair with a member who passed. Co-work the gap.
- **Attempt 3:** Refinery suggests a prerequisite you missed. Go back, fill it, return.

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

**Result:** When your professor teaches buffer overflows, you've already exploited three variants, written the detection rule, and taught it to a peer. Theory and practice are the same track, traversed together.

## Why This Matters

- **No gaps** — You cannot reach "Advanced Heap Exploitation" without mastering "Fastbin Attack" which requires "malloc/free Internals" which requires "Linux Fundamentals"
- **No waste** — You never study something that doesn't connect to your target capability
- **No illusion** — The validation challenge is the same for everyone. If you pass, you *can* do it. If you can't, you don't advance.

---

**Previous:** [Curated Learning →](/docs/features/curated-learning)  
**Next:** [Refinery AI →](/docs/features/refinery-ai)