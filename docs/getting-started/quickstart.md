---
sidebar_position: 2
pagination_prev: getting-started/index
pagination_next: getting-started/discord-github-crash-course
---

# Quick Start — 5 Minutes to Productive

> **Do this now. Don't read everything. Just execute.**

---

## 1. Discord (2 minutes)

| Step | Action |
|------|--------|
| 1 | [Join Server](https://discord.gg/resoluteraccoon) |
| 2 | Read `#rules-and-onboarding` completely |
| 3 | React ✅ on rules message → get `@Member` role |
| 4 | Post in `#introductions` (copy template below) |
| 5 | **Settings (gear icon) → Privacy & Safety → OFF:** "Allow DMs from server members", "Enable message requests" |
| 6 | **Settings → Notifications → "Only @mentions"** |
| 7 | **Settings → Appearance → Compact mode** |

**Introduction Template (copy/paste in `#introductions`):**
```
**Name/Handle:** 
**University/Dept:** 
**Year:** 
**Cyber Focus:** (web, pwn, crypto, rev, forensics, hardware, OSINT)
**Current Level:** (beginner / learning / competing)
**Why Resolute Raccoon:** 
**One thing you'll contribute:** 
```

---

## 2. GitHub (2 minutes)

| Step | Command |
|------|---------|
| 1 | [Create account](https://github.com) → verify email |
| 2 | Settings → 2FA → Authenticator app |
| 3 | Settings → SSH keys → New → paste `cat ~/.ssh/id_ed25519.pub` |
| 4 | `git config --global user.name "Your Name"` |
| 5 | `git config --global user.email "your@email.com"` |
| 6 | `git clone git@github.com:resoluteraccoon/website.git` |

**No SSH key yet?**
```bash
ssh-keygen -t ed25519 -C "your@email.com"
# Enter 3x → cat ~/.ssh/id_ed25519.pub → copy to GitHub
```

---

## 3. First PR (1 minute)

```bash
cd website
git checkout -b fix/first-typo
# Edit any .md file — fix a typo
git add .
git commit -m "fix: typo in homepage"
git push origin fix/first-typo
# Open PR on GitHub → base: main
# Post PR link in #github-feeds
```

---

## 4. Essential Channels to Watch

| Channel | Why |
|---------|-----|
| `#announcements` | Official priorities (pinned) |
| `#calendar` | Today's events |
| `#general` | Daily chat |
| `#practice-challenges` | CTF practice |
| `#readers-hub` | Current book |
| `#github-feeds` | What others are pushing |

---

## 5. Voice Setup (30 seconds)

1. Join `Study Room 1` (click 🔊)
2. Bottom-left: Mic icon → **Push-to-Talk** → set keybind (` ` backtick)
3. Test: Hold keybind → speak → green ring = working

---

## Done. You're Live.

**Next:** [Full Crash Course →](./discord-github-crash-course) when you have 30 minutes.

**Questions?** `#bot-commands` or ask in `#general`.

---

*Welcome to the dojo. The journey starts now.* 🦝