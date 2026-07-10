---
sidebar_position: 3
pagination_prev: spaces/learning-hub
pagination_next: spaces/ai-refinery
---
# First Principles

## The Atomic Unit of Our Learning

First principles thinking is not a technique. It is a discipline. It is the refusal to accept "because that's how it's done" as an answer.

## The Method

When you encounter a claim — "buffer overflows overwrite the return address" — you do not accept it. You interrogate it.

**Step 1: Identify the assumptions.**
- The stack exists.
- It grows downward.
- Local variables are allocated at lower addresses than the return address.
- `strcpy` copies until null terminator without checking destination size.
- The CPU fetches the return address from the stack on function return.

**Step 2: Verify each assumption from ground truth.**
- *Stack growth:* Read the ABI specification. x86-64 System V AMD64 ABI: "The stack grows downward."
- *Variable layout:* Compile a test program. Disassemble. Observe `rbp - 0x10` for locals, `rbp + 0x8` for return address.
- *`strcpy` behavior:* Read the C standard. "The `strcpy` function copies the string pointed to by `s2` (including the terminating null character) into the array pointed to by `s1`." No bounds check mentioned.
- *Return mechanism:* x86 `ret` instruction: "Pops the return address from the stack and jumps to it."

**Step 3: Derive the consequence.**
If I control `src` in `strcpy(dest, src)`, and `dest` is a local buffer at `rbp - 0x20`, and the return address is at `rbp + 0x8`, and `strcpy` writes past `dest` because it doesn't check bounds... then I can overwrite the return address. Control flow hijack achieved.

**Step 4: Test the derivation.**
Write the exploit. Get the shell. If it works, your derivation matches reality. If it fails, your model is wrong. Revise.

## Why This Matters

Memorization creates technicians. First principles creates engineers.

A technician knows *that* buffer overflows work. An engineer knows *why* — and can adapt when ASLR, stack canaries, CFI, or PAC change the terrain.

When a new mitigation appears — say, Pointer Authentication Codes (PAC) on ARM64 — the technician waits for a tutorial. The engineer asks: "What does PAC protect? The return address. How? It signs the pointer with a context-specific key. Where is the key? In the CPU register. Can I leak the key? Can I forge a signature? Can I bypass by jumping to an already-signed gadget?"

The engineer derives the bypass. The technician waits.

## The Discipline in Practice

Every learning unit in our Refinery begins with a **First Principles Prompt**:

> "Derive [concept] from [ground truth]. Do not use the word 'because' without a citation to a spec, a manual, or a test you can run."

You do not advance until you can:
1. State the ground truths.
2. Derive the mechanism.
3. Build a working demonstration.
4. Explain it to someone who knows the prerequisites but not this topic.

## No Shortcuts

There is no "first principles for beginners." There is only first principles. You start at the bottom. You derive everything. The graph is the same for everyone.

If you already know it, prove it. Submit the derivation, the demo, the teaching recording. Unlock the next node in hours.

The graph respects competence. It does not respect time served.

---
