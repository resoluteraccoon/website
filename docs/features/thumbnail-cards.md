---
sidebar_position: 5
pagination_prev: features/refinery-ai
pagination_next: features/progress-tracker
---

# Thumbnail Cards

Visual pattern recognition at speed. Thumbnail Cards distill complex exploits, protocols, and architectures into single-glance references: attack flow, trust boundaries, data transformations, and failure modes. Build a mental library of 500+ cards. See the pattern. Name the vulnerability. Move to the next.

## What They Are

A Thumbnail Card is a **constrained visual summary** of a security concept. Fixed format. Consistent vocabulary. Designed for rapid recognition, not deep study.

```
┌─────────────────────────────────────────────┐
│  CARD #247  │  HEAP: UNSORTED BIN ATTACK    │
├─────────────────────────────────────────────┤
│                                             │
│    [malloc] ──► [unsorted bin] ──► [overlap]│
│       │              │            │         │
│       ▼              ▼            ▼         │
│   user data      bk pointer    arbitrary    │
│   chunk          overwrite     write        │
│                                             │
│  TRIGGER: free() consolidates into         │
│  unsorted bin with controlled bk           │
│                                             │
│  PRIMITIVE: write-what-where (1 QWORD)     │
│  CONSTRAINT: target must be writable       │
│  MITIGATION: safe-linking (glibc 2.32+)    │
│                                             │
│  TAGS: heap, glibc, malloc, write-what-    │
│        where, unsorted-bin, overlap        │
└─────────────────────────────────────────────┘
```

## Card Anatomy

Every card has exactly these fields:

| Field | Purpose | Format |
|-------|---------|--------|
| **ID & Title** | Unique reference | `#247 HEAP: UNSORTED BIN ATTACK` |
| **Flow Diagram** | Attack/data/transform sequence | ASCII or Mermaid, max 12 lines |
| **Trigger** | What initiates the primitive | One sentence |
| **Primitive** | What capability it gives | "write-what-where (1 QWORD)" |
| **Constraints** | When it works / doesn't | Bullet list, max 3 |
| **Mitigations** | Defenses that break it | Bullet list, max 3 |
| **Tags** | Searchable metadata | Category, subsystem, technique |

## Categories

### Memory Corruption (150+ cards)
- Stack: buffer overflow, format string, stack clash, ROP chain variants
- Heap: fastbin, unsorted bin, smallbin, largebin, tcache, House of *
- Type confusion: vtable hijack, bad cast, union abuse
- Integer: overflow, signedness, truncation, logic bugs

### Protocol & Network (100+ cards)
- TLS: handshake, record layer, certificate validation, downgrade
- HTTP: request smuggling, cache poisoning, header injection, desync
- DNS: cache poisoning, zone walking, tunneling, amplification
- Custom: proprietary binary protocols, IPC, RPC, gRPC, WebSocket

### Web Application (100+ cards)
- Injection: SQLi, NoSQLi, LDAPi, command, XPATH, template
- AuthZ: IDOR/BOLA, path traversal, SSRF, CSP bypass, CORS misconfig
- Client: XSS variants, CSRF, clickjacking, prototype pollution, DOM clobbering
- Logic: race conditions, business logic flaws, payment bypass, workflow bypass

### Cryptography (50+ cards)
- Symmetric: ECB, CBC padding oracle, CTR nonce reuse, GCM tag forgery
- Asymmetric: RSA padding oracle, ECDSA nonce reuse, DH parameter injection
- Hash: length extension, collision, preimage, KDF misuse
- Protocol: TLS, SSH, Signal, Noise, PAKE, OPRF

### System & Kernel (50+ cards)
- Linux: cred struct, file struct, namespace, capability, seccomp, eBPF
- Windows: token, handle, ALPC, ETW, kernel callback, PatchGuard
- Hardware: Spectre/Meltdown, Rowhammer, cache side channels, fault injection
- Virtualization: VM escape, hypercall, virtio, VMM bugs

### Cloud & Container (50+ cards)
- AWS: IAM privilege escalation, S3 misconfig, Lambda injection, STS abuse
- Kubernetes: RBAC, admission controller, container escape, etcd access
- CI/CD: GitHub Actions, GitLab CI, Jenkins, supply chain, secret leakage
- Serverless: cold start, event injection, permission boundary, VPC

## How You Build Them

### During Learning
Every module you complete in the Learning Hub requires **at least 3 Thumbnail Cards** as part of your validation artifact. You don't just "learn" the technique — you distill it.

### During Research
Every bug you find, every exploit you write, every paper you read in Readers Club — produces cards.

### During Hackathons
Every challenge solved = cards for the techniques used.

## The Mental Library

**Goal: 500+ cards memorized.**

Not "memorized" as rote. Memorized as **instant pattern recognition**.

You see a `free()` followed by a `malloc()` of same size in a binary → **Card #023: USE-AFTER-FREE** lights up.
You see a `strcpy` into a stack buffer → **Card #007: STACK BUFFER OVERFLOW**.
You see a JWT with `alg: none` → **Card #156: JWT ALGORITHM CONFUSION**.

The card is the **index entry** for the deep knowledge in your Refinery nodes. You see the pattern → you name it → you know the primitive, constraints, mitigations → you act.

## Card Review System

### Spaced Repetition
- **Daily:** 10 random cards (Anki-style, but in the club app)
- **Weekly:** 50 cards from your weakest category
- **Monthly:** Full deck shuffle — any card you can't explain in 15 seconds gets flagged for re-study

### Peer Testing
Weekly pod session: "Quiz me on heap cards." Partner shows trigger → you name card, primitive, constraint. Reverse: partner names card → you draw flow diagram from memory.

### Refinery Integration
When the AI Refinery updates a technique (new mitigation, new variant), affected cards get a **version bump**. You review the delta. Your mental library stays current.

## For Visitors

You can browse the public card gallery (first 50 cards). Full deck is members-only. The discipline of building and maintaining your deck is part of the membership.

---

**Previous:** [Refinery AI →](/docs/features/refinery-ai)  
**Next:** [Progress Tracker →](/docs/features/progress-tracker)