---
sidebar_position: 1
pagination_prev: getting-started/quickstart
pagination_next: reference/cli-commands
---

# User Guide

Learn how to use our tools and resources effectively. This guide covers the CLI, the Refinery web interface, and the Discord bot — the three interfaces you'll interact with daily.

## The Three Interfaces

| Interface | Purpose | Access |
|-----------|---------|--------|
| **CLI (`rr`)** | Submit artifacts, query Refinery, manage learning path | All members (install via `cargo install resolute-raccoon-cli`) |
| **Refinery Web** | Visualize graph, browse curriculum, review artifacts | All members (SSO via Discord) |
| **Discord Bot (`@Refinery`)** | Quick queries, notifications, card review | All members in Discord |

---

## CLI Quick Start

### Installation
```bash
# Requires Rust 1.75+
cargo install resolute-raccoon-cli

# Verify
rr --version
rr doctor  # Checks environment, auth, connectivity
```

### Authentication
```bash
rr auth login
# Opens browser → Discord OAuth → returns token stored in ~/.config/rr/credentials.toml

rr auth status  # Shows current identity, pod, track
rr auth logout
```

### Core Commands

#### Submit Artifact
```bash
# Code artifact (exploit, tool, detection rule)
rr submit --type=code --domain=memcorr --path=./my-exploit/

# Teaching recording
rr submit --type=teaching --domain=webapp --video=./explaining-sqli.mp4

# Paper annotation
rr submit --type=paper --domain=crypto --pdf=./annotated-spectre.pdf

# Bug bounty finding
rr submit --type=finding --domain=webapp --program=hackerone/acme-corp --writeup=./writeup.md
```

#### Query Refinery
```bash
# What unlocks next?
rr path --target=kernel-exploitation

# Where am I?
rr status --radar

# Search concepts
rr search "heap feng shui"
rr search --tag=mitigation --tag=glibc
```

#### Learning Management
```bash
# Current module
rr learn current

# Start next module (if unlocked)
rr learn next

# Prerequisite check
rr learn prereqs --module=advanced-heap
```

### Configuration
```toml
# ~/.config/rr/config.toml
[member]
handle = "your-handle"
pod = "pod-7"
track = "red"

[submit]
default_domain = "memcorr"
editor = "nvim"
video_encoder = "ffmpeg"

[refinery]
api_url = "https://api.resoluteraccoon.org"
graphql_ws = "wss://api.resoluteraccoon.org/graphql"

[notifications]
discord = true
email = false
webhook = ""
```

---

## Refinery Web Interface

### Dashboard
- **Capability Radar** — Your 12-domain progress
- **Next Actions** — Prioritized: validation challenges, review duties, stalled domains
- **Refinery Graph** — Your personal path with completed/in-progress/locked nodes

### Curriculum Browser
- Filter by domain, track, difficulty
- See prerequisite chains
- One-click "Start Module" (if unlocked)
- Module page: resources, validation challenge, submitted artifacts, peer reviews

### Artifact Review
- Assigned reviews appear in "My Reviews"
- Side-by-side: artifact + rubric
- Comment inline (code), timestamp comments (video), highlight (PDF)
- Decision: Accept / Request Revision / Escalate

### Thumbnail Card Library
- Your cards + club shared library
- Spaced repetition scheduler
- Tag search, category filter
- "Quiz me" mode (partner or solo)

---

## Discord Bot (`@Refinery`)

### Quick Queries (in any channel)
```
@Refinery search "type confusion"
@Refinery card 247
@Refinery prereqs kernel-exploitation
@Refinery radar @your-handle
```

### Notifications (DM)
- Validation decision (accepted/revision)
- Review assignment
- Path optimization alert
- New paper in Readers Club
- Hackathon registration open
- Movie Night reminder (1 hour before)

### Card Review (in `#card-review` channel)
```
@Refinery quiz heap
→ Bot posts trigger diagram
→ You reply with card ID, primitive, constraint
→ Bot scores, updates spaced repetition
```

### Commands
| Command | Description |
|---------|-------------|
| `/refinery search <query>` | Search Refinery concepts |
| `/refinery card <id>` | Show card details |
| `/refinery radar [@user]` | Show capability radar |
| `/refinery path <target>` | Show path to target |
| `/refinery quiz <category>` | Start card quiz |
| `/refinery submit` | Quick artifact submit modal |

---

## Daily Workflow

### Morning (5 min)
```bash
rr status --radar        # Where am I?
rr learn current         # What's my active module?
```

### During Learning Session
```bash
# Work on validation challenge
# When ready:
rr submit --type=code --domain=memcorr --path=./solution/
```

### Evening (5 min)
```bash
# Check reviews
rr review pending

# Quick card review (or use Discord bot)
@Refinery quiz memcorr
```

### Weekly (Sunday, 30 min)
- Pod sync (Discord voice): What did you complete? What's blocked? What did you teach?
- Card review: 50 cards from weakest category
- Newsletter contribution: Drop one item in `#raccoon-report-submissions`

---

## Troubleshooting

| Issue | Resolution |
|-------|------------|
| `rr auth login` fails | Check Discord OAuth redirect URI matches `https://api.resoluteraccoon.org/auth/discord/callback` |
| Submit hangs | `rr doctor` → check network, API status. Large artifacts: `rr submit --async` |
| "Module locked" but prereqs done | `rr learn prereqs --module=X` → shows missing node. May be Refinery sync delay (5 min) |
| Discord bot not responding | Check `@Refinery` role permissions in server. DM bot directly to test. |
| Video upload fails | Max 500MB. Use `ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset fast output.mp4` |

---

## Getting Help

- **CLI issues:** `rr doctor --verbose` → paste output in `#cli-support`
- **Refinery web bugs:** Screenshot + steps in `#web-support`
- **Bot issues:** DM `@Refinery` with `debug` command
- **Learning questions:** Your pod first, then `#questions`
- **Urgent (security incident in club infra):** `@here` in `#security-ops` + DM Grand Chief Engineer

---

**Next:** [Reference: CLI Commands →](/docs/reference/cli-commands)