---
sidebar_position: 5
pagination_prev: learnings/java-for-beginners
pagination_next: null
---

# Readers Club

Deep reading for deep thinkers. Curated papers, post-mortems, exploit writeups, and seminal texts — discussed, dissected, and distilled in weekly sessions. No summaries. No TL;DRs. You read the source. You bring the insight. The club sharpens the mind. From *Smashing the Stack* to Project Zero writeups — you'll know the lineage of every technique you use.

## Why This Exists

Security moves fast. Papers come out weekly. Blog posts daily. Exploits hourly. You cannot keep up by skimming. You keep up by **reading deeply** the few things that matter, and understanding them well enough to teach.

The Readers Club is our forced-depth mechanism. One paper per week. Read it. Annotate it. Argue with it. Discuss it. The compound effect: 52 papers a year, actually understood, becomes a mental model library no feed reader can give you.

## How It Works

### Weekly Rhythm

**Monday — Paper Announcement**
- Paper posted in `#readers-club` with: link, why it matters, prerequisites, focus questions
- You have the week to read. No pressure. But you *will* be cold-called in session.

**Thursday — Discussion Session (90 minutes)**
- **15 min:** Presenter (rotating) walks the paper's argument structure — not a summary, a *map*
- **45 min:** Open discussion. Every paragraph is fair game. "What does this assumption buy them?" "Where does this break in practice?" "What would a defender do differently?"
- **15 min:** Refinery injection — each person states one concept/technique/reference to inject into their Refinery nodes
- **15 min:** Next paper preview + volunteer presenter

**Friday — Artifact Due**
- Each member submits: annotated PDF (or markup file), 1-page concept map, 1 Refinery injection note
- Artifacts archived in the club Notion. Searchable. Cross-referenced.

### Selection Criteria

We read papers that meet at least two of:

| Criterion | What It Means |
|-----------|---------------|
| **Seminal** | The paper that introduced the technique/class/paradigm |
| **Operational** | Describes a real attack/defense/system used in the wild |
| **Foundational** | Builds a mental model used across domains (not point solution) |
| **Contrarian** | Challenges prevailing wisdom. Forces re-evaluation. |
| **Local Relevance** | Directly applicable to our research, bug bounty, or curriculum gaps |

### Categories We Cycle Through

1. **Memory Corruption & Exploitation** — Stack/heap/Type confusion, mitigations, bypasses
2. **Program Analysis & Verification** — Static, dynamic, symbolic, fuzzing, formal methods
3. **Cryptography & Protocol Security** — Implementation flaws, side channels, post-quantum
4. **Systems & Network Security** — Kernel, hypervisor, container, cloud, supply chain
5. **Web & Application Security** — Browser, logic flaws, authZ, deserialization, SSRF
6. **Hardware & Firmware** — Side channels, fault injection, bootloader, BMC, SoC
7. **ML/AI Security** — Poisoning, extraction, evasion, backdoors, alignment
8. **Post-Mortems & Incident Analysis** — Real breaches, root cause, detection gaps

### The "No Summary" Rule

You do not bring a summary. You bring:
- **Questions** — Genuine confusion. "I don't see how Section 3.2 follows from 3.1."
- **Objections** — "Their threat model excludes X. That's unrealistic because Y."
- **Extensions** — "If we relax assumption Z, we get attack W."
- **Connections** — "This is the same pattern as Paper Q from 2019, but applied to domain R."

If you didn't read it, you say so. No shame. You listen. You learn. You read it after.

## Current Semester Reading List

*List updates each semester. Past lists archived.*

| Week | Paper | Category | Presenter |
|------|-------|----------|-----------|
| 1 | *Smashing the Stack for Fun and Profit* (Aleph One, 1996) | Memory Corruption | — |
| 2 | *Once Upon a Free()* (Phrack 57) | Heap Exploitation | — |
| 3 | *Project Zero: The Art of Leaks* (Google, 2018) | Info Leaks | — |
| 4 | *Spectre Attacks* (Kocher et al., 2019) | Hardware | — |
| 5 | *Log4j: A Deep Dive* (Lunasec, 2021) | Supply Chain | — |
| 6 | *Fuzzing: Art, Science, and Engineering* (Manes et al., 2020) | Fuzzing | — |
| 7 | *SoK: SSL/TLS* (Somorovsky et al., 2017) | Crypto/Protocol | — |
| 8 | *Attacks on Container Isolation* (CVE-2019-5736 analysis) | Cloud/Container | — |
| ... | ... | ... | ... |

## Integration with Refinery

Every paper discussed becomes a **Refinery concept node** with:
- Paper reference (title, authors, venue, year, DOI/URL)
- Core contributions (extracted by presenter)
- Prerequisite concepts (mapped by group)
- Downstream techniques enabled (mapped by group)
- Local artifacts (exploit code, detection rules, teaching recordings from members)

When you later study *Heap Exploitation* in the Learning Hub, the *Once Upon a Free()* node is a prerequisite. You've already read it. You've already discussed it. You just need to validate.

## Joining

1. **Show up** — Thursday sessions are open. No application.
2. **Read the first paper** — *Smashing the Stack*. Come with questions.
3. **Present when ready** — Volunteer for a paper you're excited about.
4. **Stay** — The compounding only works if you stay.

## For Visitors

You're welcome to attend any session. No membership required. Just read the paper first. If you haven't, you're still welcome — but you'll listen more than speak. The discussions are technical, fast, and assume paper familiarity.

---

**Previous:** [Java for Beginners →](/docs/learnings/java-for-beginners)