---
sidebar_position: 4
pagination_prev: blog/ctf-writeups
pagination_next: blog/tool-reviews
---

# Movie Night Write-Ups

Technical breakdowns of films we screen. What the film got right (and wrong).

## Our Approach

Every film we screen gets a write-up — not a review, but a technical autopsy. We separate the real from the fictional, then extract what teaches us. The goal is not film criticism. The goal is understanding compressed into two hours.

## Format

Every write-up follows this structure:

1. **The Premise** — What the film presents as its technical reality
2. **The Reality** — What actually works, what's fictional, what's exaggerated
3. **The Lessons** — What we can actually use. Detection ideas. Defense strategies. Mental models.
4. **The Scene-by-Scene** — Timestamped breakdown of key technical moments

## Film Categories

### Hacking Track
Technical cinema — documentaries and narratives that reveal system architecture, attacker psychology, vulnerability consequences, nation-state operations, hacktivism, underground history.

### Life-Themed Track
Films about the human condition under pressure. Whistleblowers, prosecutors, prodigies, communities. The cost of truth. The psychology of obsession. The architecture of resilience. These are not "break" films — they are the context that makes the technical work meaningful.

## Selection Criteria

We do not pick films because they're popular. We pick them because they teach.
- Historical significance (first depiction of X)
- Technical accuracy (gets the details right)
- Strategic depth (shows *why*, not just *how*)
- Philosophical weight (consequences, ethics, trade-offs)

## Example: The Social Network (2010)

**Premise:** Harvard student builds Facebook in dorm room, faces lawsuits.
**Reality:**
- Accurate: PHP/Apache/MySQL stack, early scaling pains, legal strategy
- Exaggerated: Coding speed, "hacking" the Phoenix Club database (simple SQL injection shown as elite)
- Fictional: The specific dialogue, timeline compression
**Lessons:**
- Move fast, break things → technical debt compounds
- Legal architecture matters as much as technical
- Scaling is a distributed systems problem, not a code problem

---

**Next:** [Tool Reviews →](/docs/blog/tool-reviews)