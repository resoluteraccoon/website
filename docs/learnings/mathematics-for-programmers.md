---
sidebar_position: 2
pagination_prev: learnings/overview
pagination_next: learnings/clean-code
---

# Mathematics for Programmers

The math you actually need: discrete structures, linear algebra, probability, number theory, and computational complexity — taught through the lens of exploitation, cryptography, and systems programming. No proofs for proof's sake. Every theorem has a target. Elliptic curves for ECDSA. Lattices for post-quantum. Graph theory for binary analysis.

## Why This Exists

Most "math for CS" courses teach math as abstract beauty. We teach math as **operational leverage**. You learn a concept because it lets you do something you couldn't do before — break a crypto implementation, optimize a fuzzer, prove a protocol secure, reverse a binary format.

## Curriculum Structure

### Unit 1: Discrete Structures (Weeks 1–3)
**Target:** Binary analysis, protocol state machines, SAT/SMT solving

- **Logic & Proof Systems** — Propositional, predicate, temporal logic. Natural deduction. Model checking basics. Application: specifying security properties for model checkers.
- **Set Theory & Relations** — Functions, equivalence, partial orders, lattices. Application: abstract interpretation, dataflow analysis, type systems.
- **Combinatorics & Counting** — Permutations, combinations, pigeonhole principle, inclusion-exclusion. Application: entropy estimation, keyspace analysis, collision probability.
- **Graph Theory** — Directed/undirected, weighted, DAGs, SCCs, dominator trees. Algorithms: DFS, BFS, topological sort, Dijkstra, Bellman-Ford, Kosaraju. Application: CFG analysis, call graphs, taint tracking, exploit chain construction.

### Unit 2: Number Theory & Cryptography (Weeks 4–7)
**Target:** Crypto implementation review, side-channel analysis, protocol verification

- **Modular Arithmetic** — Groups, rings, fields. Euler's theorem, Fermat's little theorem, Chinese Remainder Theorem. Application: RSA, Diffie-Hellman, ElGamal internals.
- **Primality & Factoring** — Miller-Rabin, Pollard's rho, quadratic sieve, NFS overview. Application: RSA key generation, weak key detection, CTF crypto.
- **Discrete Logarithm** — Baby-step giant-step, Pollard's rho, index calculus. Application: DSA/ECDSA nonce reuse, Diffie-Hellman attacks.
- **Elliptic Curves** — Group law, point addition, scalar multiplication, pairings. Curves: NIST P-256, Curve25519, secp256k1, BLS12-381. Application: ECDSA, EdDSA, BLS signatures, zk-SNARKs.
- **Lattice-Based Crypto** — LLL algorithm, SVP/CVP, LWE/RLWE, NTRU. Application: Post-quantum (Kyber, Dilithium), FHE, homomorphic encryption basics.

### Unit 3: Linear Algebra & Computation (Weeks 8–10)
**Target:** ML security, side-channel analysis, code optimization, SAT/SMT

- **Vector Spaces & Matrices** — Rank, nullspace, eigenvalues, SVD, QR decomposition. Application: PCA for anomaly detection, spectral clustering, spectral graph theory.
- **Finite Field Linear Algebra** — GF(2), GF(2^m). Application: AES mix columns, Reed-Solomon, CRC, polynomial arithmetic in crypto.
- **Numerical Methods** — Iterative solvers, condition number, stability. Application: gradient-based attacks, optimization in fuzzing, RL for exploit dev.

### Unit 4: Probability & Statistics (Weeks 11–13)
**Target:** Fuzzing strategies, anomaly detection, timing attacks, ML security

- **Probability Theory** — Random variables, distributions (uniform, normal, binomial, Poisson, geometric), expectation, variance, concentration inequalities (Markov, Chebyshev, Chernoff, Hoeffding). Application: fuzzing coverage estimation, false positive rates, statistical significance.
- **Bayesian Inference** — Prior, likelihood, posterior, conjugate priors, MCMC basics. Application: probabilistic program analysis, vulnerability scoring, threat modeling.
- **Hypothesis Testing** — p-values, power, multiple testing correction, sequential testing. Application: side-channel trace analysis, detector evaluation, A/B testing defenses.

### Unit 5: Computational Complexity (Weeks 14–15)
**Target:** Algorithm selection, hardness proofs, reduction techniques

- **Complexity Classes** — P, NP, co-NP, PSPACE, EXP, BPP, #P. Completeness, reductions (Karp, Cook, Turing). Application: proving problems hard, understanding SAT/SMT limits.
- **Parameterized Complexity** — FPT, W[1], kernelization. Application: bounded model checking, exploit generation with constraints.
- **Cryptographic Reductions** — Game-hopping, random oracle model, standard model. Application: reading security proofs, spotting flawed assumptions.

## How We Learn Each Unit

1. **Lecture + Problem Set** — Concepts introduced with security-motivated problems
2. **Implementation Lab** — Code the core algorithms (Montgomery multiplication, LLL, Gaussian elimination over GF(2), etc.)
3. **Application Exercise** — Apply to a real tool/protocol (e.g., implement ECDSA verification, break a weak RSA key, write a SAT encoding for a CFG property)
4. **Teaching Session** — Explain one concept to the group in 10 minutes. Recorded.
5. **Validation Challenge** — Solve a novel problem using the unit's toolkit. No hints. Graded on correctness and elegance.

## Prerequisites

- Basic programming (C/Python/Rust) — you must be able to implement algorithms
- High school algebra — we build from there
- Willingness to derive, not memorize

## Resources We Use

- **Concrete Mathematics** (Graham, Knuth, Patashnik) — discrete math bible
- **A Computational Introduction to Number Theory and Algebra** (Shoup) — free, rigorous, crypto-focused
- **Introduction to Modern Cryptography** (Katz & Lindell) — definitions, proofs, reductions
- **Mathematics for Machine Learning** (Deisenroth, Faisal, Ong) — linear algebra, probability, optimization
- **The Art of Computer Programming, Vol 2** (Knuth) — seminumerical algorithms, reference
- **Project Zero Blog**, **CryptoHack**, **Cryptopals** — applied practice

## Completion Artifact

For each unit, you produce:
- **Implementation library** — Clean, tested, documented code for the unit's core algorithms
- **Application writeup** — 2-page analysis of how the math applies to a real security problem
- **Teaching recording** — 10-minute explanation of one concept for a peer who knows prerequisites but not this topic

These artifacts enter the Refinery. They become prerequisite nodes for downstream modules (Exploit Development, Crypto Engineering, ML Security, Binary Analysis).

---

**Next:** [Clean Code →](/docs/learnings/clean-code)