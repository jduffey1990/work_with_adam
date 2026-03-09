# My Flock — Planning & Feedback Repo

> **What is this?** This is NOT a code project. This is a shared space where we plan, preview, and refine the **My Flock** feature before any real development begins. Everything here is meant to be looked at, discussed, and changed based on your feedback.

---

## What's In This Folder

| File / Folder | What It Is | How to Use It |
|---|---|---|
| `README.md` | This file — your guide to everything here | You're reading it now! |
| `flock_plan.md` | The full feature plan written in plain English | Open it in any text editor or on GitHub to read through the feature details |
| `flock_mockup.jsx` | Interactive screen mockups of the app | Follow the **"Viewing the Mockups"** steps below to see them in your browser |
| `viewer/` | A pre-built mockup viewer (React + Vite) | Used to run the mockups locally — setup instructions below |

---

## Reading the Feature Plan

The file `flock_plan.md` describes everything about My Flock in plain language — what it does, who uses it, and how it works. You can read it by:

- **On GitHub:** Just click the file name. GitHub will display it nicely formatted.
- **On your computer:** Open it with any text editor (TextEdit on Mac, Notepad on Windows), or any Markdown viewer.

---

## Viewing the Mockups

The mockups let you click through the screens to see how the app would look and feel. To view them, you'll need to run a couple of one-time setup commands on your computer. Don't worry — just copy and paste each line below.

### First-Time Setup (Do This Once)

#### Step 1 — Install Node.js

Node.js is a free tool that lets your computer run the mockups. Download and install it from:

👉 **https://nodejs.org** — click the big green **"LTS"** button, then run the installer.

To confirm it worked, open **Terminal** (Mac) or **Command Prompt** (Windows) and type:

```
node --version
```

You should see a version number like `v20.x.x`. If you do, you're good.

#### Step 2 — Install Dependencies

Open **Terminal** (Mac) or **Command Prompt** (Windows), navigate to the `viewer` folder inside this repo, and install the dependencies:

```bash
cd path/to/this-repo/viewer
npm install
```

Replace `path/to/this-repo` with wherever you downloaded or cloned this folder. For example, if it's on your Desktop:

```bash
cd ~/Desktop/my-flock/viewer
npm install
```

#### Step 3 — Add the Mockup File

Copy the `flock_mockup.jsx` file from the root of this repo into the viewer:

- **Mac:**
  ```bash
  cp flock_mockup.jsx viewer/src/App.jsx
  ```
- **Windows:**
  ```bash
  copy flock_mockup.jsx viewer\src\App.jsx
  ```

Or just do it manually: find `flock_mockup.jsx` in this folder, rename a copy to `App.jsx`, and drop it into the `viewer/src/` folder, replacing the file that's already there.

### Viewing the Mockups (Do This Anytime)

From the repo root:

```bash
cd viewer
npm run dev
```

Your terminal will show something like:

```
  Local:   http://localhost:5173/
```

Open that link in your browser (Chrome, Safari, etc.) and you'll see the interactive mockups. Click through the numbered buttons at the top to see each screen.

**To stop it**, go back to Terminal and press `Ctrl + C`.

---

## How to Give Feedback

The whole point of this repo is to get your honest input before we build anything. Here's how:

### Option A — Write It Down (Easiest)

Open `flock_plan.md` and jot your thoughts in the **"What We'd Love Your Feedback On"** section at the bottom. Save the file and send it back (email, text, whatever works).

### Option B — GitHub Issues (If We're Using GitHub)

If this repo is on GitHub, click the **Issues** tab at the top of the page and create a new issue for each piece of feedback. Use a clear title like:

- *"QR code — should we also support a share link?"*
- *"Naming — I prefer 'My Community' over 'My Flock'"*

### Option C — Just Tell Me

If the above feels like too much, just message or call me with your thoughts. I'll add them to the plan.

---

## Questions the Plan Is Asking You

These are pulled straight from the feature plan — no need to answer all of them, but any input helps:

1. **Does this match how you'd actually use it?** Would you show a QR code at youth group? At Sunday service? Both?
2. **Prayer frequency** — how often would you publish? Daily? Weekly? Tied to a specific event?
3. **Audio** — would you want AI voices reading your prayers, or would you prefer to record your own voice?
4. **Anything missing?** Are there things your community would need that aren't covered?
5. **Naming** — does "My Flock" / "Flock Leader" feel right, or would different words be more natural?
6. **Free access** — does it feel right that anyone can join and listen for free, with you covering the premium tier?

---

## Quick Reference — All Commands in One Place

| What | Command |
|---|---|
| Install Node.js | Download from https://nodejs.org |
| Install dependencies (once) | `cd viewer && npm install` |
| Add mockup file (once) | Copy `flock_mockup.jsx` → `viewer/src/App.jsx` |
| View mockups | `cd viewer && npm run dev` |
| Stop the viewer | Press `Ctrl + C` in the terminal |

---

## Glossary

A few terms you'll see in the plan, in case they're unfamiliar:

| Term | What It Means |
|---|---|
| **Flock Member** | Someone who follows a leader and receives their prayers in the app |
| **Flock Leader** | A minister, pastor, teacher, etc. who publishes prayers to their community |
| **QR Code** | A scannable square barcode — the leader shows it, members scan it to join |
| **Prayer Warrior** | The premium subscription tier required for Flock Leaders |
| **Text-to-Speech (TTS)** | Technology that reads prayer text aloud in a natural-sounding voice |