---
sidebar_position: 6
pagination_prev: features/thumbnail-cards
pagination_next: null
---

# Progress Tracker

What gets measured gets mastered. The Progress Tracker logs every lab completed, every exploit landed, every paper read, every hour trained — and visualizes your capability surface across 12 domains. No vanity metrics. No streaks. A living map of what you can actually do, backed by evidence.

## What It Tracks

### Capability Domains (12)
Your progress is mapped across 12 capability domains, each with sub-skills:

| Domain | Sub-Skills (Examples) |
|--------|----------------------|
| **Memory Corruption** | Stack overflow, heap exploitation, format strings, type confusion, integer bugs, ROP/JOP, kernel exploitation |
| **Web Application** | Injection, authZ, client-side, logic flaws, API security, deserialization, SSRF, XXE |
| **Network & Protocol** | TLS/SSL, HTTP/2/3, DNS, custom binary protocols, RPC, IPC, side channels |
| **Cryptography Engineering** | Symmetric, asymmetric, hash, KDF, protocol implementation, side channels, post-quantum |
| **Reverse Engineering** | Static analysis, dynamic analysis, obfuscation, packing, VM-based, deobfuscation |
| **Fuzzing & Program Analysis** | Coverage-guided, structure-aware, symbolic execution, static analysis, hybrid |
| **Cloud & Container** | AWS/Azure/GCP, Kubernetes, serverless, CI/CD, supply chain, identity |
| **Detection Engineering** | Sigma, YARA, Snort/Zeek, eBPF, OSQuery, behavioral analytics, false positive reduction |
| **Threat Intelligence** | Attribution, campaign tracking, IOC management, TTP mapping, intel sharing |
| **Incident Response** | Triage, containment, eradication, recovery, forensics (disk/memory/network/cloud) |
| **Secure Architecture** | Zero trust, least privilege, segmentation, secrets, threat modeling, supply chain |
| **Communication & Teaching** | Technical writing, public speaking, vulnerability reporting, mentoring, documentation |

### Evidence Types
Every data point in the tracker is backed by a **verifiable artifact**:

| Evidence Type | What It Proves | Verification |
|---------------|----------------|--------------|
| **Lab Completion** | Finished platform exercise | Screenshot + flag + writeup |
| **Code Artifact** | Implemented technique/tool | Repo link + CI passing + tests |
| **Teaching Recording** | Can explain to peer | 10-min video + peer sign-off |
| **Detection Rule** | Can detect the technique | Rule + test corpus (benign + malicious) |
| **Paper Annotation** | Read and understood source | Annotated PDF + concept map |
| **Conference Debrief** | Extracted actionable intel | 5 insights injected to Refinery |
| **Hackathon Artifact** | Performed under pressure | Code + post-mortem + demo recording |
| **Bug Bounty Finding** | Real-world impact | Program acknowledgment + writeup |

## The Visualization

### Capability Radar
Real-time radar chart across 12 domains. Each axis = domain. Distance from center = evidence-weighted mastery.

```
                    Memory Corruption
                         │
                         │    ●
                         │   ╱ ╲
                         │  ╱   ╲
                         │ ╱     ╲
        Web App ─────────●─────────●───────── Network
                         │ ╲     ╱
                         │  ╲   ╱
                         │   ╲ ╱
                         │    ●
                    Cryptography
```

### Evidence Timeline
Chronological log of every artifact submitted. Filterable by domain, evidence type, date range. Click any entry to see the artifact, reviewer comments, Refinery nodes unlocked.

### Prerequisite Graph
Your personal path through the Refinery. Completed nodes (green), in-progress (yellow), unlocked but not started (gray), locked (red). Shows exactly what stands between you and your target capability.

### Heatmap
GitHub-style contribution heatmap but for *capability evidence*. Green squares = days you submitted evidence. Intensity = number/weight of artifacts. No streaks. No guilt. Just pattern visibility.

## No Vanity Metrics

We explicitly **do not track**:

- ❌ Login streaks
- ❌ Time spent "studying" (passive consumption ≠ capability)
- ❌ Videos watched
- ❌ Pages read
- ❌ Badges, achievements, leaderboards (except hackathon scoreboards, which are operational)
- ❌ "Level" or "XP" abstractions

**We track:** Can you do the thing? Show the artifact. Next.

## How It Works

### Submission Flow
1. **Complete a validation challenge** in Learning Hub, or produce artifact in Hackathon/Research/Bug Bounty
2. **Submit via CLI** — `refinery submit --type=code --domain=memcorr --path=./exploit/`
3. **Automated checks** — Build passes, tests pass, sanitizers clean, linter clean
4. **Human review** — Assigned to a member who has mastered that domain
5. **Decision** — Accepted (unlocks downstream nodes) / Needs Revision (specific feedback)
6. **Refinery update** — Your graph updates. Radar updates. Heatmap updates.

### Reviewer Rotation
Reviews are distributed. You review for domains you've mastered. You get reviewed by those who've mastered yours. The system ensures:
- No reviewer reviews their own pod mates exclusively
- Load balanced across active members
- SLA: 48 hours for first review

### Privacy
Your tracker is **visible to your learning pod** (3–5 people) and **reviewers assigned to your submissions**. Not public. Not shared with visitors. You can opt-in to share specific artifacts (e.g., a blog post) publicly.

## Integration Points

### Learning Hub
Every module validation = tracker entry. The radar fills as you progress through tracks.

### Readers Club
Every paper discussed = annotation artifact. Concept maps injected to Refinery = domain progress.

### Hacker Club
Every hackathon = multiple artifacts (code, writeup, post-mortem, demo). Major radar jumps.

### Bug Bounty
Every valid finding = finding log entry + writeup + detection rule. Real-world evidence weighted highest.

### AI Refinery
Monitors your tracker. Detects:
- **Stalled domains** — No evidence in 30 days → suggests micro-challenge
- **Prerequisite gaps** — Target capability unlocks but upstream weak → suggests remediation
- **Path optimization** — New Refinery edges shorten your path → notifies you

## For Visitors

You see: **Anonymous aggregate statistics only.**
- "142 members. 3,847 artifacts submitted. 12 domains covered."
- "Median artifacts per member: 27"
- "Most active domain: Memory Corruption (42% of artifacts)"

You don't see individual trackers. Capability is not a spectator sport.

---

**Previous:** [Thumbnail Cards →](/docs/features/thumbnail-cards)