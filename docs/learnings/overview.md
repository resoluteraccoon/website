---
sidebar_position: 1
pagination_prev: null
pagination_next: learnings/mathematics-for-programmers
---

# Learnings Overview

The Learnings track is where theory meets steel. Five domains. No fluff. Mathematics for the exploit developer. Clean code that survives production. Java for the enterprise attacker. A readers club that dissects seminal papers weekly. Each module is a compressed transmission of hard-won knowledge — the kind that usually takes years of late nights, broken systems, and expensive mistakes to acquire.

## Philosophy

We don't teach "subjects." We teach **capabilities**.

Every learning module answers: *What can you do after this that you couldn't do before?* The answer is always concrete: write a fuzzer, audit a JVM, derive a crypto primitive, spot a gadget chain, teach the concept to a peer.

## The Five Domains

### [Mathematics for Programmers →](/docs/learnings/mathematics-for-programmers)
The math you actually need: discrete structures, linear algebra, probability, number theory, and computational complexity — taught through the lens of exploitation, cryptography, and systems programming. No proofs for proof's sake. Every theorem has a target. Elliptic curves for ECDSA. Lattices for post-quantum. Graph theory for binary analysis.

**Duration:** 15 weeks  
**Prerequisites:** High school algebra, basic programming  
**Output:** Implementation library per unit, application writeups, teaching recordings

### [Clean Code →](/docs/learnings/clean-code)
Code that survives contact with the enemy. Clean Code for operators: minimal attack surface, explicit contracts, zero undefined behavior, testable seams, and audit trails built in. Not "clean" for aesthetics — clean for survival. Every function is a choke point. Every module is a trust boundary. Write code that admits no ambiguity.

**Duration:** Ongoing (integrated into all coding tasks)  
**Prerequisites:** Basic C/Rust/Python/Go  
**Output:** Every module you write becomes a Refinery library node

### [Java for Beginners →](/docs/learnings/java-for-beginners)
Java done right: memory model, concurrency, JVM internals, and secure coding practices — not "Hello World" tutorials. Understand how the runtime actually works so you can audit, exploit, and harden enterprise systems. The language that runs the world's critical infrastructure. Bytecode manipulation. Agent-based instrumentation. Deserialization gadgets. You'll see it all.

**Duration:** 10 weeks  
**Prerequisites:** Programming fundamentals, comfort with C/Rust  
**Output:** Lab writeups, teaching sessions, Refinery prerequisite mapping

### [Readers Club →](/docs/learnings/readers-club)
Deep reading for deep thinkers. Curated papers, post-mortems, exploit writeups, and seminal texts — discussed, dissected, and distilled in weekly sessions. No summaries. No TL;DRs. You read the source. You bring the insight. The club sharpens the mind. From *Smashing the Stack* to Project Zero writeups — you'll know the lineage of every technique you use.

**Duration:** Ongoing (weekly sessions)  
**Prerequisites:** Varies by paper (announced in advance)  
**Output:** Annotated papers, discussion notes, Refinery concept injections

### Mathematics for Cybersecurity (Coming Q2 2026)
Advanced mathematical foundations for cryptographic engineering, zero-knowledge proofs, secure multi-party computation, and post-quantum cryptography. Pairing-based cryptography. Lattice trapdoors. MPC protocols. Formal verification with Coq/Isabelle.

## How Learning Works Here

### 1. Prerequisite Graph
Every module declares its prerequisites explicitly. You don't start Unit 3 of Mathematics without completing Unit 2. The Refinery enforces this — not to gatekeep, but to protect you from the illusion of understanding.

### 2. Derive, Don't Memorize
You don't memorize "buffer overflow = overwrite return address." You derive: "Stack grows down. Locals below return address. `strcpy` doesn't check bounds. Therefore: overwrite." You own the knowledge because you built it.

### 3. Prove It
Every unit ends with a **validation challenge**: a novel problem you solve using only the toolkit from that unit. No hints. Graded on correctness and elegance. If you can't solve it, you re-study. The graph respects competence, not time served.

### 4. Teach It
The final stage of every unit: explain one concept to the group in 10 minutes. Recorded. If a non-technical peer can't understand your explanation, you try again. Teaching is the final test of mastery.

### 5. Inject It
Your artifacts — implementations, writeups, teaching recordings — enter the Refinery. They become prerequisite nodes for downstream modules. Your work teaches the next cohort. The curriculum improves itself.

## Getting Started

1. **Pick your entry point** — Most start with *Mathematics for Programmers* (foundational) or *Clean Code* (immediately applicable)
2. **Check prerequisites** — Be honest. If you don't have them, do the prerequisite module first.
3. **Join the cohort** — Learning is social here. You're assigned a learning pod (3–5 people). You sync weekly. You teach each other.
4. **Produce artifacts** — Code, writeups, recordings. Push to the Refinery. Get reviewed. Iterate.
5. **Advance** — Validation challenge passed? Teaching session recorded? Next node unlocks.

## Support

- **Learning pods** — Your weekly sync group. Peer teaching, accountability, debugging help.
- **Office hours** — Senior members hold weekly open sessions for stuck points.
- **Refinery AI** — Monitors your progress, suggests resources, detects prerequisite gaps, alerts when your path optimizes.
- **No one learns alone** — If you're stuck for 48 hours, escalate. We unblock each other.

---

**Start Here:** [Mathematics for Programmers →](/docs/learnings/mathematics-for-programmers)