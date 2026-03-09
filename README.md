# My Flock — Planning & Feedback Repo

> **What is this?** This is NOT a code project. This is a shared space where we plan, preview, and refine the **My Flock** feature before any real development begins. Everything here is meant to be looked at, discussed, and changed based on your feedback.

---

## What's In This Folder

| File | What It Is | How to Use It |
|---|---|---|
| `README.md` | This file — your guide to everything here | You're reading it now! |
| `flock_plan.md` | The full feature plan written in plain English | Open it in any text editor or on GitHub to read through the feature details |
| `flock_mockup.jsx` | Interactive screen mockups of the app | Follow the **"Viewing the Mockups"** steps below to see them in your browser |

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

#### Step 2 — Create the Mockup Viewer

Open **Terminal** (Mac) or **Command Prompt** (Windows), then copy and paste these commands **one at a time**, pressing Enter after each:

```bash
cd ~/Desktop
npm create vite@latest flock-mockups -- --template react
cd flock-mockups
npm install
```

#### Step 3 — Add the Mockup File

Copy the `flock_mockup.jsx` file from this folder into the mockup viewer:

- **Mac:**
  ```bash
  cp flock_mockup.jsx ~/Desktop/flock-mockups/src/App.jsx
  ```
- **Windows:**
  ```bash
  copy flock_mockup.jsx %USERPROFILE%\Desktop\flock-mockups\src\App.jsx
  ```

Or just do it manually: find `flock_mockup.jsx` in this folder, rename a copy to `App.jsx`, and drop it into the `flock-mockups/src/` folder on your Desktop, replacing the file that's already there.

### Viewing the Mockups (Do This Anytime)

```bash
cd ~/Desktop/flock-mockups
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
- *"Audio — I want to record my own voice, not AI"*

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
| Create mockup viewer (once) | `cd ~/Desktop && npm create vite@latest flock-mockups -- --template react && cd flock-mockups && npm install` |
| Add mockup file (once) | Copy `flock_mockup.jsx` → `~/Desktop/flock-mockups/src/App.jsx` |
| View mockups | `cd ~/Desktop/flock-mockups && npm run dev` |
| Stop the viewer | Press `Ctrl + C` in the terminal |

---

## Glossary

A few terms you'll see in the plan, in case they're unfamiliar:

| Term | What It Means |
|---|---|
| **Flock Member** | Someone who follows a leader and receives their prayers in the app |
| **Flock Leader** | A minister, pastor, teacher, etc. who creates and publishes prayers |
| **Prayer Warrior** | The paid subscription tier that unlocks leader tools and premium voices |
| **QR Code** | That square barcode thing you scan with your phone camera |
| **TTS (Text-to-Speech)** | Technology that turns written text into spoken audio |
| **S3** | Amazon's cloud storage — where audio files live so anyone can listen |
| **SwiftUI** | Apple's toolkit for building iPhone apps (you don't need to worry about this) |
| **Segmented Control** | Those little toggle buttons at the top of a screen (like "My Prayers" / "Pray On It") |

---

*Last updated: March 2026. Everything here is a draft — your feedback shapes what gets built.*