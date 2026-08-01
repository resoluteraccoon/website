---
sidebar_position: 2
pagination_prev: getting-started/index
pagination_next: getting-started/discord-setup
---

# GitHub Setup — Phone Only (5 Minutes)

> **Watch → Do → Done.** This is the only GitHub guide you need.

---

## Video: Create GitHub Account on Phone

<iframe width="100%" height="400" src="https://www.youtube.com/embed/8QqR3yR5z3Q" title="How to Create GitHub Account on Phone (2024)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

*Video: "How to Create GitHub Account on Phone" — 3 minutes*

---

## Step-by-Step (Copy This)

### 1. Open Browser on Phone
- Chrome / Safari / Firefox
- Go to: **github.com**

### 2. Sign Up
- Tap **"Sign up"** (top right)
- **Email:** Use your real email (you'll verify it)
- **Password:** Strong, unique (save in password manager)
- **Username:** Professional, lowercase, no numbers if possible
  - Good: `miracleomokaro`, `adebayo-sec`, `chike-dev`
  - Bad: `miracle123`, `hackerboi`, `user882`
- **Verify:** Solve the puzzle/captcha

### 3. Verify Email
- Check your email inbox
- Open email from GitHub
- Tap **"Verify email address"**
- Returns you to GitHub → **Signed in!**

### 4. Enable 2FA (DO THIS NOW)
- Tap your **profile icon** (top right) → **Settings**
- Scroll to **"Password and authentication"** → **Two-factor authentication**
- Tap **"Enable two-factor authentication"**
- Choose **"Authenticator app"** (not SMS)
- **Install:** Google Authenticator / Authy / Microsoft Authenticator
- Scan QR code with app
- Enter 6-digit code from app
- **Save recovery codes** (screenshot + store safe)

### 5. Add SSH Key (For Git from Termux/Phone)
**If using Termux (Linux on Android):**
```bash
# Install Termux from F-Droid (not Play Store)
pkg install git openssh
ssh-keygen -t ed25519 -C "your@email.com"
# Press Enter 3x (no passphrase for phone)
cat ~/.ssh/id_ed25519.pub
# Copy the output (starts with ssh-ed25519...)
```

**On GitHub (phone browser):**
- Profile icon → **Settings** → **SSH and GPG keys**
- **New SSH key** → Title: "My Phone" → Paste key → **Add SSH key**

### 6. Clone the Club Repo
**In Termux:**
```bash
git clone git@github.com:resoluteraccoon/website.git
cd website
# You're in!
```

**If not using Termux yet:** Just having the account + 2FA + SSH key = done for now.

---

## Checklist (Screenshot This)

- [ ] GitHub account created
- [ ] Email verified
- [ ] 2FA enabled (Authenticator app)
- [ ] Recovery codes saved
- [ ] SSH key added to GitHub
- [ ] Club repo cloned (optional, for later)

---

## Why This Matters

| Without GitHub | With GitHub |
|----------------|-------------|
| Invisible | Portfolio exists |
| No proof of work | Every commit = evidence |
| No collaboration | PRs, reviews, team projects |
| No job offers | Recruiters check profiles |

**Your GitHub profile IS your resume in this field.**

---

## Next: Discord

[**→ Set Up Discord Account (Phone Only)**](./discord-setup)