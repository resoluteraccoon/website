---
sidebar_position: 4
pagination_prev: learnings/clean-code
pagination_next: learnings/readers-club
---

# Java for Beginners

Java done right: memory model, concurrency, JVM internals, and secure coding practices — not "Hello World" tutorials. Understand how the runtime actually works so you can audit, exploit, and harden enterprise systems. The language that runs the world's critical infrastructure. Bytecode manipulation. Agent-based instrumentation. Deserialization gadgets. You'll see it all.

## Why This Exists

Most Java courses teach syntax. We teach **the machine underneath**. You'll understand:
- How the JVM executes your code (and how to observe/alter it)
- Where the memory model leaks (and how attackers exploit it)
- What the compiler optimizes away (and what it must preserve)
- How to write Java that survives production — and how to break Java that doesn't

## Curriculum

### Unit 1: The JVM Execution Model (Weeks 1–2)
**Target:** Read bytecode, understand class loading, attach agents

- **Class File Format** — Constant pool, method tables, attributes, verification. Parse a `.class` by hand.
- **Class Loading** — Bootstrap, extension, application loaders. Parent delegation. Custom loaders. Isolation boundaries. Hot reloading.
- **Bytecode Instruction Set** — Stack machine. Local variables. Control flow. Method invocation (invokevirtual, invokespecial, invokestatic, invokeinterface, invokedynamic). `javap -c -v` fluency.
- **JVMTI & Agents** — `java.lang.instrument`. `premain`/`agentmain`. Bytecode transformation with ASM/ByteBuddy. Profiling, tracing, mutation.

**Lab:** Write a Java agent that instruments all `Servlet.service` calls to log request/response headers without modifying application code.

### Unit 2: Memory Model & Concurrency (Weeks 3–5)
**Target:** Spot data races, understand JMM guarantees, build thread-safe systems

- **JMM Fundamentals** — Happens-before, synchronization order, visibility, atomicity. `volatile`, `final`, `synchronized`, `Lock`, `VarHandle`.
- **Compiler & Hardware Reordering** — What `javac` reorders. What the JIT reorders. What the CPU reorders. Memory barriers. `Unsafe`/`VarHandle` fence methods.
- **Common Patterns** — Thread confinement, immutable objects, safe publication, thread-local storage, concurrent collections (`ConcurrentHashMap`, `CopyOnWriteArrayList`, `LongAdder`).
- **Advanced** — `StampedLock`, `CompletableFuture` internals, `ForkJoinPool` work stealing, virtual threads (Project Loom), structured concurrency.

**Lab:** Find and exploit a data race in a provided "thread-safe" cache implementation. Fix it with three different approaches. Benchmark each.

### Unit 3: Garbage Collection & Memory Management (Weeks 6–7)
**Target:** Tune GC, diagnose leaks, understand off-heap

- **Heap Organization** — Generations, regions (G1/ZGC/Shenandoah), TLABs, card tables, remembered sets.
- **GC Algorithms** — Serial, Parallel, CMS (deprecated), G1, ZGC, Shenandoah. Latency vs throughput tradeoffs. When to choose which.
- **GC Tuning** — Heap sizing, pause time targets, allocation rates, promotion rates. `jstat`, `jcmd GC.class_histogram`, `jmap`, JFR.
- **Off-Heap & Native** — `ByteBuffer` (direct vs heap), `Unsafe.allocateMemory`, JNI `NewDirectByteBuffer`, Panama `MemorySegment`. Leak detection.

**Lab:** Given a heap dump from a production OOM, identify the leak root cause, write a MAT/OQL query to quantify it, propose the fix.

### Unit 4: Serialization & Deserialization (Week 8)
**Target:** Understand the gadget chain ecosystem, build safe serialization

- **Java Serialization** — `ObjectOutputStream`/`ObjectInputStream`. `serialVersionUID`. `readObject`/`writeObject`/`readResolve`/`readReplace`. The `ObjectInputFilter` API (JEP 290).
- **Gadget Chains** — Commons Collections, Spring, Hibernate, Jackson, Rome, JRE internals. `ysoserial` anatomy. Why `readObject` is the danger zone.
- **Alternatives** — JSON (Jackson/Gson), Protobuf, Avro, CBOR, MessagePack. Schema evolution. Performance comparison.
- **Secure Deserialization** — Allowlists, `ObjectInputFilter`, signing, avoiding serialization entirely.

**Lab:** Deserialize a provided payload that achieves RCE via a Commons Collections gadget. Trace the gadget chain step by step. Write an `ObjectInputFilter` that blocks it while allowing legitimate traffic.

### Unit 5: Bytecode Engineering & Runtime Instrumentation (Week 9)
**Target:** Build tools that transform, analyze, or enforce at runtime

- **ASM** — `ClassVisitor`, `MethodVisitor`, `Label`, `Frame`, `StackMapTable`. Computing stack maps. `ClassReader`/`ClassWriter` `COMPUTE_FRAMES`.
- **ByteBuddy** — Higher-level DSL. `AgentBuilder`. `Advice`. `MethodDelegation`. Dynamic subclassing/redefinition.
- **Use Cases** — Profiling, coverage, mutation testing, security enforcement (e.g., forbid `Runtime.exec`), hot patching.
- **JFR & JMC** — Custom events. Continuous profiling. Flight recorder as observability backbone.

**Lab:** Build a ByteBuddy agent that rewrites all `Statement.executeQuery` calls to log the SQL and parameter values, without source modification.

### Unit 6: Secure Coding & Hardening (Week 10)
**Target:** Write Java that resists the attacks you've learned

- **Input Validation** — Allowlist, not denylist. `Pattern` with catastrophic backtracking avoidance. XML/XXE: `DocumentBuilderFactory` secure config. XPath injection.
- **Crypto** — JCA providers. `SecureRandom` seeding. `Cipher` modes (GCM, CCM). Key management (PKCS#12, HSM, cloud KMS). No `ECB`. No hardcoded keys.
- **Dependency Management** — `dependency-check` (OWASP), `ossindex`, `snyk`. SBOM (CycloneDX). Reproducible builds. `jlink` custom runtimes.
- **Container & Native** — `jlink` minimal images. GraalVM native-image: reflection config, JNI config, serialization config. `--initialize-at-build-time`.

**Lab:** Harden a vulnerable Spring Boot application: fix deserialization, add CSP, configure `ObjectInputFilter`, enable JFR security events, produce a `jlinked` runtime, build a native image.

## Prerequisites

- Comfortable with at least one systems language (C, Rust, Go, C++)
- Understands stack vs heap, pointers, virtual memory basics
- Basic concurrency concepts (thread, lock, race condition)
- Can read assembly (x86-64 or ARM64) at a basic level

If you don't have these, do **Mathematics for Programmers** (discrete math unit) and **Clean Code** (C/Rust track) first.

## How You'll Be Evaluated

Each unit ends with a **validation challenge**:
1. **Implementation** — Build the lab artifact. Code compiles, tests pass, no sanitizer warnings.
2. **Explanation** — 10-minute recorded walkthrough. A peer who hasn't done the unit must understand your approach.
3. **Refinery Injection** — Your solution (or a generalized library extracted from it) enters the Refinery as a prerequisite node for downstream modules.

## What This Unlocks

Completing this module unlocks:
- **JVM Internals Research** (spaces/research)
- **Enterprise Pentesting Track** (spaces/bug-bounty)
- **Agent/Tool Development** (skills-development/videography → tool demos)
- **Malware Analysis** (Java-based loaders, RATs, C2s)

---

**Previous:** [Clean Code →](/docs/learnings/clean-code)  
**Next:** [Readers Club →](/docs/learnings/readers-club)