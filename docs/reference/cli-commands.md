---
sidebar_position: 1
pagination_prev: user-guide/cli
pagination_next: null
---

# Reference: CLI Commands

Complete command reference for `rr` (Resolute Raccoon CLI). Run `rr --help` or `rr <command> --help` for inline usage.

## Global Flags
| Flag | Description |
|------|-------------|
| `--config <PATH>` | Config file path (default: `~/.config/rr/config.toml`) |
| `--json` | Output JSON (for scripting) |
| `--verbose` | Debug logging |
| `--no-color` | Disable ANSI colors |

---

## `rr auth` — Authentication

| Command | Description |
|---------|-------------|
| `rr auth login` | Open browser for Discord OAuth, store token |
| `rr auth logout` | Remove local token |
| `rr auth status` | Show current identity, pod, track, token expiry |
| `rr auth refresh` | Force token refresh |

---

## `rr learn` — Learning Path Management

| Command | Description |
|---------|-------------|
| `rr learn current` | Show active module, progress, validation status |
| `rr learn next` | Unlock and start next available module |
| `rr learn list [--domain=<domain>]` | List all modules, filter by domain |
| `rr learn prereqs <module-id>` | Show prerequisite graph for module |
| `rr learn info <module-id>` | Module details: resources, challenge, estimated time |
| `rr learn switch <track>` | Change track (red/blue/purple/research) — requires pod lead approval |

### Domain Codes
- `memcorr` — Memory Corruption (Binary Exploitation)
- `webapp` — Web Application Security
- `reveng` — Reverse Engineering
- `crypto` — Cryptography Engineering
- `netprot` — Network & Protocol Security
- `cloud` — Cloud & Container Security
- `mobile` — Mobile Security
- `hwfw` — Hardware & Firmware
- `mlsec` — ML/AI Security
- `detect` — Detection Engineering
- `ir` — Incident Response
- `arch` — Secure Architecture

---

## `rr submit` — Artifact Submission

```bash
rr submit --type=<type> --domain=<domain> [options]
```

### Types
| Type | Required Flags | Description |
|------|----------------|-------------|
| `code` | `--path` | Exploit, tool, detection rule, library |
| `teaching` | `--video` | 10-min recorded explanation |
| `paper` | `--pdf` | Annotated paper (Readers Club) |
| `finding` | `--program --writeup` | Bug bounty finding |
| `architecture` | `--pdf` | Threat model, STRIDE, ADR |

### Options
| Flag | Description |
|------|-------------|
| `--type <type>` | Artifact type (required) |
| `--domain <domain>` | Domain code (required) |
| `--path <path>` | Directory for code artifacts (must contain `README.md`, `tests/`) |
| `--video <path>` | Video file (max 500MB, H.264) |
| `--pdf <path>` | PDF file |
| `--program <slug>` | Bug bounty program (e.g., `hackerone/acme-corp`) |
| `--writeup <path>` | Markdown writeup |
| `--tags <csv>` | Additional tags for indexing |
| `--async` | Submit async (returns submission ID, polls in background) |
| `--draft` | Save as draft (not sent for review) |

### Example
```bash
rr submit --type=code --domain=memcorr --path=./unsorted-bin-attack/ \
  --tags="heap,glibc,unsorted-bin,mitigation-bypass"
```

---

## `rr path` — Path Computation

| Command | Description |
|---------|-------------|
| `rr path --target=<module-id>` | Show shortest path from current state to target |
| `rr path --target=<module-id> --all` | Show all paths (not just shortest) |
| `rr path --from=<module-id> --to=<module-id>` | Path between arbitrary nodes |

### Output
```
Current: memcorr/heap/fastbin-attack (validated)
Target:  memcorr/kernel/slab-exploitation

Path (4 nodes):
  1. memcorr/heap/unsorted-bin-attack      [locked]  ← next
  2. memcorr/heap/large-bin-attack         [locked]
  3. memcorr/kernel/slub-allocator-internals [locked]
  4. memcorr/kernel/slab-exploitation      [locked]

Estimated time: 6–8 weeks at 15 hrs/week
```

---

## `rr status` — Status & Radar

| Command | Description |
|---------|-------------|
| `rr status` | Summary: current module, recent submissions, pending reviews |
| `rr status --radar` | ASCII capability radar chart (12 domains) |
| `rr status --heatmap` | Dependency heatmap (validated/in-progress/blocked) |
| `rr status --log` | Recent activity log (last 30 days) |

---

## `rr search` — Refinery Search

```bash
rr search <query> [--tag=<tag>...] [--domain=<domain>] [--type=<type>]
```

| Flag | Description |
|------|-------------|
| `--tag` | Filter by tag (e.g., `mitigation`, `glibc`, `CVE-2024-XXXX`) |
| `--domain` | Filter by domain code |
| `--type` | Filter by concept type: `attack`, `defense`, `primitive`, `mitigation`, `protocol`, `tool` |
| `--limit` | Max results (default: 20) |

### Example
```bash
rr search "safe linking" --tag=mitigation --tag=glibc --domain=memcorr
```

---

## `rr review` — Review Management

| Command | Description |
|---------|-------------|
| `rr review pending` | List artifacts assigned to you for review |
| `rr review <submission-id>` | Open review interface (TUI) |
| `rr review history` | Your past review decisions |

### Review TUI Keys
| Key | Action |
|-----|--------|
| `j/k` | Navigate |
| `a` | Accept |
| `r` | Request revision (prompts for comment) |
| `e` | Escalate (senior reviewer needed) |
| `c` | Comment at cursor |
| `q` | Quit |

---

## `rr card` — Thumbnail Card Library

| Command | Description |
|---------|-------------|
| `rr card list [--category=<cat>]` | List your cards |
| `rr card show <id>` | Render card (ASCII) |
| `rr card quiz [--category=<cat>] [--count=<n>]` | Spaced repetition quiz |
| `rr card create` | Interactive card builder |
| `rr card import <path>` | Import from JSON/YAML |

### Categories
`memcorr`, `injection`, `authz`, `protocol`, `crypto`, `supplychain`, `cloud`, `hwfw`, `mlsec`

---

## `rr pod` — Learning Pod

| Command | Description |
|---------|-------------|
| `rr pod info` | Your pod: members, track, sync schedule |
| `rr pod sync` | Start weekly sync (opens Discord voice link) |
| `rr pod teach <topic>` | Log a teaching session (updates Refinery) |
| `rr pod blockers` | Report blockers for pod lead to triage |

---

## `rr doctor` — Diagnostics

| Command | Description |
|---------|-------------|
| `rr doctor` | Environment, auth, connectivity, API health |
| `rr doctor --verbose` | Full diagnostic dump (for support) |

### Checks Performed
- Rust toolchain version
- Config file validity
- Auth token validity & scopes
- API connectivity (REST + GraphQL WS)
- Disk space for artifact cache
- Video encoder (`ffmpeg`) availability
- Git version (for artifact versioning)

---

## `rr config` — Configuration

| Command | Description |
|---------|-------------|
| `rr config show` | Print effective config (merged defaults + user) |
| `rr config edit` | Open in `$EDITOR` |
| `rr config set <key> <value>` | Set single value |
| `rr config reset <key>` | Reset to default |

### Key Paths
```
member.handle
member.pod
member.track
submit.default_domain
submit.editor
submit.video_encoder
refinery.api_url
refinery.graphql_ws
notifications.discord
notifications.email
notifications.webhook
```

---

## Exit Codes
| Code | Meaning |
|------|---------|
| `0` | Success |
| `1` | General error |
| `2` | Invalid arguments |
| `3` | Authentication required/expired |
| `4` | Module locked (prerequisites not met) |
| `5` | Submission validation failed |
| `6` | Network/API error |
| `7` | Config error |

---

## Environment Variables
| Variable | Overrides |
|----------|-----------|
| `RR_CONFIG` | Config file path |
| `RR_API_URL` | Refinery API URL |
| `RR_AUTH_TOKEN` | Bearer token (CI/CD) |
| `RR_NO_COLOR` | Disable colors |
| `RR_VERBOSE` | Enable debug logging |

---

## Shell Completion
```bash
# Bash
rr completion bash > /etc/bash_completion.d/rr

# Zsh
rr completion zsh > "${fpath[1]}/_rr"

# Fish
rr completion fish > ~/.config/fish/completions/rr.fish
```

---

**Previous:** [User Guide →](/docs/user-guide/cli)