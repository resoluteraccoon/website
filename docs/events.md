---
sidebar_position: 1
pagination_prev: null
pagination_next: events/movie-nights
---

# Events

Events are where theory meets practice meets community. We don't just study security — we live it together.

## Why We Do Events

A club is not a library. You don't join to read alone. You join to build alongside people who will pull you up when you're stuck, call you out when you're slacking, and celebrate when you finally land that exploit. Our events are the heartbeat of that rhythm.

Every event we run serves one of three purposes:

1. **Sharpen technical skill** — Hands-on pressure. Real constraints. Real consequences.
2. **Deepen community trust** — You learn who shows up, who follows through, who teaches well.
3. **Expand the perimeter** — Bring in new perspectives. Connect with the broader ecosystem. Represent.

We don't do "networking events." We do the work together. The relationships form around the shared struggle.

## Movie Nights

Films shape minds. Each session has a *why* behind it — a reason it earns its place in our curriculum. Cinema compresses decades of history, strategy, and human drama into two hours. It lets us witness the consequences of decisions we haven't made yet. It lets us study the anatomy of failure and the architecture of breakthrough without paying the price ourselves.

We curate state-of-the-art hacking and life-themed films. After watching, we break down each scene — the hacks, the strategies, the social engineering, the tradecraft. We separate the real from the fictional. But we also ask: *what fiction has inspiration we can bring to reality?*

**How it works:**
- We watch together (online or in-person)
- We pause at key moments. We break down what just happened technically.
- We debate: Could it have been prevented? What would you have done differently?
- Two tracks: hacking films and life-themed films. Each selected for technical accuracy, pedagogical value, and cultural impact. We don't announce films in advance.

## Hackathons

A hackathon is not a coding competition. It is a pressure vessel.

You have 24–72 hours. You have a team. You have a problem. You have no excuses.

We hack because building under constraint reveals what you actually know. It exposes the gaps between theory and practice. It forces you to make decisions with incomplete information — the defining skill of a Cybersecuritist.

**Our philosophy:** Build to break. Break to learn. Learn to build better.

**Types we run:**
- **Internal CTF Hackathons** — Recurring. One challenge category per session (Web, Binary, Crypto, Forensics, Reversing, Misc). Scored. Ranked. Leaderboard is public.
- **Research Sprints** — Focused. One research question: "Can we bypass PAC on ARM64?" "Is this new WAF bypass generalizable?" "Can we automate this vulnerability class?" Output: working exploit, detection rule, blog post.
- **Tool-Building Weekends** — Deep work. A gap in our toolchain. "We need a better fuzzer for this protocol." "We need a visualization for this attack graph." Output: working tool, benchmarks, documentation.
- **Community CTFs** — We host. External teams invited. We design the challenges. We run the infrastructure. We mentor the participants. We learn by teaching.

**The standard:** No participation trophies. No "good effort." You either produced a working artifact or you didn't. The artifact must compile/run without manual intervention, pass the test suite we wrote for it, include a README a stranger can follow, and have a post-mortem document (what broke, what held, what you'd change with 2 more hours). If it doesn't meet the standard, it doesn't ship. You iterate until it does.

**Infrastructure:** We build our own platform. CTFd customized. Real-time scoreboard. Challenge deployment automated. Container orchestration with Kubernetes. Monitoring with Prometheus/Grafana. Logging with Loki. All built and maintained by members.

**The output:** Every hackathon produces code (open sourced, documented, benchmarked), writeups (technical depth, reproducible, educational), tools (added to the club arsenal, maintained), and people (sharper, more resilient, better at making decisions under pressure).

## Conferences

A conference is not a vacation. It is an intelligence operation.

You go to Black Hat, DEF CON, BSides, USENIX, IEEE S&P, ACM CCS, NDSS — not for the swag, not for the parties. You go for the briefings. The hallway conversations. The villages. The CTFs. The people who are five years ahead of where you are.

We attend as a crew. We split the tracks. We debrief nightly. We bring knowledge back to the Refinery.

**Our standards:**

*Before the conference:*
- Track mapping — Every member selects sessions mapped to their current learning nodes. No wandering.
- Speaker research — Read their papers. Watch their past talks. Know their work before you sit in their session.
- Meeting targets — Identify 3–5 people you need to talk to. Researchers, tool authors, hiring managers. Reach out beforehand.

*During the conference:*
- Note-taking protocol — Structured notes: concept, reference, action item. Not transcripts. Insights.
- Debrief — Every night, 30 minutes. Each member shares: top 3 things learned, 1 thing to implement, 1 person to follow up with.
- Village time — Lockpicking, RF, hardware, crypto, AI/ML — you spend at least 2 hours in a village outside your specialty.

*After the conference:*
- Knowledge injection — Within 72 hours, every member injects their top 5 insights into the Refinery. New resources. New contacts. New research directions.
- Teaching session — Each member runs a 20-minute internal session on their biggest takeaway.
- Follow-up — Email the speakers you connected with. Share your work. Ask the question you didn't get to ask.

**Conferences we target:**
- Tier 1 (annual): Major US Security Conference, Major Hacker Conference, Academic Security Symposium, Top Research Conferences
- Tier 2 (rotating): BSides (local and major), Industry Conference, Regional Security Conferences, Local/Regional (BSides Lagos, NaijaSecCon, CyberSec Nigeria — we build the African scene)
- Specialized: Hardware/Firmware, Exploitation, Reverse Engineering, Asian Security Conferences

**What we bring back:** Not swag. Not business cards. Actionable intelligence: new tools added to the shared arsenal, new detection rules written from briefings, new research directions injected into the Refinery, new contacts added to the network map.

**The rule:** If you attend a conference and the Refinery does not change, you did not attend correctly.

## Webinars

A conference is a firehose. A webinar is a scalpel.

Monthly. Focused. Deep. One topic. One expert. Two hours.

We run webinars because some topics demand sustained attention — not a 25-minute slot between hallway conversations. Some speakers cannot travel. Some topics are too niche for a general conference track. Some techniques are too new for a CFP cycle.

**Format:**
- 15 min — Context & threat landscape (why this matters now)
- 60 min — Technical deep dive (live demo, code walkthrough, architecture)
- 30 min — Q&A (no moderator filter — direct questions)
- 15 min — Internal debrief (members only: what do we implement?)

**Recording & archive:** Every webinar is recorded, transcribed, and indexed. The recording enters the Refinery within 24 hours. Members who missed it can watch at 2x speed and still inject insights.

**Topics we cover:**
- Technical deep dives: eBPF internals, modern kernel exploitation, cloud-native attack paths, hardware/firmware, cryptography engineering, AI/ML security
- Strategic & operational: Detection engineering, threat intelligence operations, incident response at scale, secure architecture, career & ethics

**How we select speakers:** We do not take volunteers. We hunt.
Criteria: Published novel research or tooling in last 12 months, can demonstrate live (not just slides), willing to share code/configs/scripts after, available for follow-up in our internal channel.
Sources: Conference speakers we missed, tool authors, bug bounty hunters with novel techniques, academic researchers with practical implementations, industry practitioners solving problems at scale.

**Member obligations:** Attendance is not optional. If you are in the club, you attend.
Pre-work: Read the speaker's last 3 papers/talks. Prepare 3 questions.
Post-work: Within 48 hours, inject 1 insight into the Refinery. Run a 10-minute teaching session for your learning pod.