---
sidebar_position: 3
pagination_prev: learnings/overview
pagination_next: learnings/java-for-beginners
---

# Clean Code

Code that survives contact with the enemy. Clean Code for operators: minimal attack surface, explicit contracts, zero undefined behavior, testable seams, and audit trails built in. Not "clean" for aesthetics — clean for survival. Every function is a choke point. Every module is a trust boundary. Write code that admits no ambiguity.

## Our Definition of Clean

**Clean code is code that:**
- Fails loudly and early when assumptions are violated
- Makes invalid states unrepresentable
- Can be audited by a stranger in 15 minutes
- Has no undefined behavior, no data races, no memory leaks
- Is testable at unit, integration, and property level
- Leaves a forensic trail when it executes

**Clean code is NOT:**
- Short functions for the sake of short functions
- Comments explaining what the code does (the code should show that)
- Design patterns applied without a threat model
- "Readable" at the expense of correct

## Principles

### 1. Explicit Contracts
Every function declares what it requires and what it guarantees.

```c
// Preconditions: buf != NULL, len > 0, buf is writable for len bytes
// Postconditions: returns bytes written, or -1 on error (errno set)
// Invariants: buf[0..returned-1] contains valid UTF-8
ssize_t write_utf8_safe(char *buf, size_t len, const char *input);
```

**Enforcement:** Assertions in debug, sanitizers in CI, formal verification where critical.

### 2. Invalid States Unrepresentable
Use the type system to make illegal states impossible to construct.

```rust
// Bad: String can be empty, invalid UTF-8, too long
fn process_username(name: String) -> Result<(), Error>

// Good: Type guarantees valid username
struct ValidUsername(NonEmpty<Utf8<MaxBytes<32>>>);
fn process_username(name: ValidUsername) { ... }
```

### 3. Zero Undefined Behavior
C/C++: Compile with `-Wall -Wextra -Wpedantic -Werror -fsanitize=address,undefined,thread`. Run under valgrind. Use MISRA/SEI CERT rules.
Rust: `unsafe` only with a safety proof comment. `#[forbid(unsafe_code)]` by default.
Go: Race detector always on in CI. `govet` + `staticcheck`.
Python: Type hints + mypy strict. No `eval`, `exec`, `pickle` on untrusted data.

### 4. Testable Seams
Dependencies are interfaces, not concretions. Time is injected. Randomness is injected. I/O is injected.

```go
// Bad: hardcoded time, hardcoded HTTP client
func IsTokenExpired(token string) bool {
    return time.Now().After(parseExpiry(token))
}

// Good: time injected, testable
type Clock interface { Now() time.Time }
func IsTokenExpired(token string, clock Clock) bool {
    return clock.Now().After(parseExpiry(token))
}
```

### 5. Audit Trails
Every security-relevant decision logs: who, what, when, why, with what authority.

```python
def authorize(action: str, resource: str, ctx: AuthContext) -> Decision:
    decision = policy_engine.decide(action, resource, ctx)
    audit_log.write({
        "timestamp": utc_now(),
        "principal": ctx.principal_id,
        "action": action,
        "resource": resource,
        "decision": decision.value,
        "policy_version": policy_engine.version,
        "reason": decision.reason,  # structured, not free text
    })
    return decision
```

## Language-Specific Guidelines

### C / C++
- No `malloc`/`free` in application code — use arenas, pools, RAII wrappers
- No raw pointers across module boundaries — use handles, indices, smart pointers
- Integer overflow: use `builtin_add_overflow`, checked arithmetic
- String handling: no `strcpy`, `strcat`, `sprintf` — use bounded, length-tracking APIs
- Concurrency: ThreadSanitizer clean. Lock hierarchy documented. No lock-free without proof.

### Rust
- `unsafe` blocks require `// SAFETY:` comment with proof sketch
- Prefer `Result<T, E>` over `Option<T>` for fallible operations (carries error context)
- `#[derive(Debug)]` on all public types. `Clone` only where semantically correct.
- Async: pinning understood. `Send`/`Sync` bounds explicit. No `.await` in hot paths without justification.

### Go
- Errors wrap with `%w` and custom types. `errors.Is`/`As` for handling.
- Context propagated everywhere. Cancellation respected.
- Interfaces defined in consumer package, not producer.
- Generics used for type-safe containers, not for premature abstraction.

### Python
- `mypy --strict` passes. No `Any` without `# type: ignore` justification.
- `dataclasses`/`pydantic` for structured data. No naked dicts across boundaries.
- Async: `asyncio` primitives only. No mixing sync/async without explicit bridging.
- Dependencies pinned. `pip-audit` in CI. No `eval`/`exec`/`pickle` on external data.

## Review Checklist

Every PR passes this checklist before merge:

- [ ] **Contracts**: Every public function has pre/post/invariant documented
- [ ] **Types**: Invalid states unrepresentable? `unsafe` justified?
- [ ] **Memory**: No leaks, no UAF, no double-free, no OOB
- [ ] **Concurrency**: No data races. Lock order documented. No deadlock cycles.
- [ ] **Error handling**: All fallible ops checked. Error context preserved.
- [ ] **Tests**: Unit tests for logic. Property tests for invariants. Integration tests for seams.
- [ ] **Audit trail**: Security decisions logged with structured context.
- [ ] **Dependencies**: Minimal. Pinned. No known CVEs. License compatible.
- [ ] **Documentation**: README for module. Architecture decision record for non-obvious choices.

## Integration with Refinery

Every module you write becomes a **Refinery library node**. It is:
1. Versioned (semver)
2. Documented (contracts, tests, audit trail)
3. Indexed by capability (what it does, what it requires, what it guarantees)
4. Available as a prerequisite for downstream modules
5. Subject to continuous re-evaluation (AI Refinery checks for new CVEs, better alternatives)

Your code doesn't just "ship." It enters the ecosystem. The next cohort builds on it. The AI Refinery monitors it. You maintain it.

---

**Next:** [Java for Beginners →](/docs/learnings/java-for-beginners)