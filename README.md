# My Flock — Planning & Feedback Repo

> **What is this?** This is NOT a code project. This is a shared space where we plan, preview, and refine the **My Flock** feature before any real development begins. Everything here is meant to be looked at, discussed, and changed based on your feedback.

---

## What's In This Folder

| File / Folder | What It Is | How to Use It |
|---|---|---|
| `README.md` | This file — your guide to everything here | You're reading it now! |
| `flock_plan.md` | The full feature plan written in plain English | Open it in any text editor or on GitHub to read through the feature details |
| `flock_mockup.jsx` | Interactive screen mockups of the app | Follow the **"Viewing the Mockups"** steps below to see them in your browser |
| `viewer/` | A pre-built mockup viewer | Used to run the mockups locally — setup instructions below |

---

## Reading the Feature Plan

The file `flock_plan.md` describes everything about My Flock in plain language — what it does, who uses it, and how it works. You can read it by:

- **On GitHub:** Just click the file name. GitHub will display it nicely formatted.
- **On your computer:** Open it with any text editor (TextEdit on Mac, Notepad on Windows), or any Markdown viewer.

---

## Viewing the Mockups

The mockups let you click through the screens to see how the app would look and feel. To view them, you'll need to run a few one-time setup commands on your computer. Don't worry — I'll walk you through every step. Just follow along and copy/paste the commands exactly as shown.

### Before You Start — Opening the Terminal

You'll need to use the **Terminal** app to run a few commands. Here's how to find it:

**On a Mac:**
1. Press **⌘ Command + Space** to open Spotlight Search.
2. Type **Terminal** and press **Enter**.
3. A window will open with a blinking cursor — that's the Terminal. You'll paste commands here.

**On Windows:**
1. Press the **Windows key** on your keyboard.
2. Type **Command Prompt** and click on it when it appears.
3. A black window will open with a blinking cursor — that's where you'll paste commands.

> **Tip:** You can keep Terminal open the whole time. When the instructions say "paste this command," just click inside the Terminal window and paste it (on Mac: **⌘ Command + V**, on Windows: **right-click** in the window to paste), then press **Enter** to run it.

---

### First-Time Setup (Do This Once)

#### Step 1 — Install Node.js

Node.js is a free tool that lets your computer run the mockups. You only need to install it once.

1. Go to **https://nodejs.org** in your web browser.
2. Click the big green **"LTS"** button to download the installer.
3. Open the downloaded file and follow the on-screen instructions to install it (just click "Next" / "Continue" through the prompts — the default settings are fine).

To confirm it worked, open Terminal (see above) and paste this command, then press **Enter**:

```
node --version
```

You should see a version number like `v20.x.x`. If you do, you're good to move on.

> **If you see an error** like "command not found," try closing Terminal and opening it again. If it still doesn't work, try restarting your computer and then opening Terminal and running the command again. The installer sometimes needs a restart to finish setting things up.

#### Step 2 — Navigate to the Viewer Folder

Now you need to tell Terminal where this project lives on your computer. You'll do this with a `cd` command, which stands for "change directory" — it's like double-clicking into a folder, but in text form.

**If this repo folder is on your Desktop and named `my-flock`:**

- **Mac:**
  ```bash
  cd ~/Desktop/my-flock/viewer
  ```
- **Windows:**
  ```bash
  cd %USERPROFILE%\Desktop\my-flock\viewer
  ```

**If it's somewhere else**, replace the path with wherever you downloaded or saved this folder. The key is that you end up inside the `viewer` folder that's part of this repo.

> **How to check you're in the right place:** After running the `cd` command, paste this and press Enter:
> ```
> ls
> ```
> (On Windows, use `dir` instead of `ls`.)
>
> You should see files like `package.json`, `vite.config.js`, and a `src` folder. If you see those, you're in the right spot.

#### Step 3 — Install Dependencies

While still in the `viewer` folder in Terminal, paste this command and press **Enter**:

```bash
npm install
```

This will download everything the mockup viewer needs to run. You'll see a bunch of text scroll by — that's normal. It may take a minute or two. When it's done, you'll see your blinking cursor again.

> **If you see warnings** (yellow text that says "WARN"), that's usually fine — warnings are not errors. As long as you don't see red "ERR!" messages, you're good.

#### Step 4 — Add the Mockup File

Now you need to copy the mockup file into the viewer. You can do this either way:

**Option A — Using Terminal (from the repo's root folder, one level up from viewer):**

- **Mac:**
  ```bash
  cd ..
  cp flock_mockup.jsx viewer/src/App.jsx
  ```
- **Windows:**
  ```bash
  cd ..
  copy flock_mockup.jsx viewer\src\App.jsx
  ```

**Option B — Do it manually (easiest if you're not comfortable with Terminal):**

1. Find `flock_mockup.jsx` in this folder (the main project folder, not inside `viewer`).
2. Make a copy of it.
3. Rename the copy to `App.jsx`.
4. Open the `viewer` folder, then the `src` folder inside it.
5. Drop your renamed `App.jsx` file in there, replacing the file that's already there.

---

### Viewing the Mockups (Do This Anytime)

Once setup is done, this is all you need to do to see the mockups. Open Terminal and navigate to the `viewer` folder:

- **Mac:**
  ```bash
  cd ~/Desktop/my-flock/viewer
  ```
- **Windows:**
  ```bash
  cd %USERPROFILE%\Desktop\my-flock\viewer
  ```

Then run:

```bash
npm run dev
```

Your terminal will show something like:

```
  Local:   http://localhost:5173/
```

**Hold ⌘ Command (Mac) or Ctrl (Windows) and click that link**, or just copy it and paste it into your web browser (Chrome, Safari, etc.). You'll see the interactive mockups. Click through the numbered buttons at the top to see each screen.

**To stop it**, go back to Terminal and press **Ctrl + C** (this is the same on both Mac and Windows — use the **Ctrl** key, not ⌘ Command).

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
| Open Terminal (Mac) | Press **⌘ Command + Space**, type **Terminal**, press **Enter** |
| Open Command Prompt (Windows) | Press **Windows key**, type **Command Prompt**, click it |
| Install Node.js | Download from https://nodejs.org |
| Go to the viewer folder (Mac) | `cd ~/Desktop/my-flock/viewer` |
| Go to the viewer folder (Windows) | `cd %USERPROFILE%\Desktop\my-flock\viewer` |
| Install dependencies (once) | `npm install` |
| Add mockup file (once) | Copy `flock_mockup.jsx` → `viewer/src/App.jsx` |
| View mockups | `npm run dev` — then open the link it shows you |
| Stop the viewer | Press `Ctrl + C` in Terminal |

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
| **Terminal** | The app on your computer where you type commands (called "Command Prompt" on Windows) |