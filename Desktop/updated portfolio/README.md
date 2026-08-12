# AI Automation Portfolio

A recruiter-focused portfolio site for an AI Automation / Workflow Automation specialist,
built around Make.com, n8n and Zapier project case studies.

## File / Project Structure

```
portfolio/
├── index.html              # All page sections (hero, about, projects, contact, etc.)
├── css/
│   └── style.css           # Design tokens + all styling, mobile-first & responsive
├── js/
│   ├── data.js             # ⭐ EDIT THIS — your project data (cards + modal content)
│   └── main.js              # Rendering, filtering, modal, nav, scroll animations
└── assets/
    ├── resume/              # Put your CV PDF here
    ├── screenshots/         # Put workflow screenshots here
    └── icons/                # Optional: custom platform/tech icons
```

## Technologies Used

Plain HTML5, CSS3 (custom properties, CSS Grid/Flexbox, no framework), and vanilla
JavaScript (ES6) — no build step, no dependencies. Fonts: Space Grotesk, Inter, and
JetBrains Mono via Google Fonts.

## Files Created

- `index.html`
- `css/style.css`
- `js/data.js`
- `js/main.js`
- `assets/resume/`, `assets/screenshots/`, `assets/icons/` (empty, with placeholder notes)

## How to Run Locally

No build tools needed. Either:

1. Double-click `index.html` to open it directly in a browser, or
2. Serve it locally (recommended, avoids some browser file:// restrictions):
   ```bash
   cd portfolio
   python3 -m http.server 8000
   # then open http://localhost:8000
   ```

## How to Add a New Project

Open `js/data.js` and copy one project object inside the `PROJECTS` array, then edit its
fields (name, tagline, problem, solution, workflow steps, features, business value, tech,
links, screenshot). Save — the new project card and its modal appear automatically, no
other file needs to change.

```js
{
  id: "my-new-project",
  platform: "n8n", // "make" | "n8n" | "zapier"
  name: "Project Name",
  tagline: "One-line description for the card.",
  problem: "...",
  solution: "...",
  workflow: ["Trigger", "Step 2", "Step 3", "Action"],
  features: ["...", "..."],
  businessValue: ["..."],
  tech: ["n8n", "Webhooks"],
  links: { github: "", live: "" }, // leave "" to hide a button
  screenshot: "", // path to an image, or "" for a placeholder box
}
```

## Where to Add Your Real Info

| What | Where |
|---|---|
| Your name | `index.html` — `.nav-brand .brand-text`, hero, footer |
| GitHub link | `index.html` — search for `yourusername` (nav, hero, contact, footer) |
| LinkedIn link | `index.html` — `#contact` section and footer |
| Email | `index.html` — `#contact` section (`mailto:` link) |
| Location | `index.html` — About section "Based in" fact card |
| CV / Resume | Drop the PDF into `assets/resume/`, name it `your-cv.pdf` (or change `RESUME_URL` in `js/main.js`) |
| Real projects | `js/data.js` — replace the n8n and Zapier placeholder objects, edit the Make.com one if your actual project differs |
| Workflow screenshots | Drop images into `assets/screenshots/`, then set each project's `screenshot` field in `js/data.js` |

## Notes

- The **Make.com "Business Lead Automation"** project is filled in with the workflow shape
  you described (Trigger → Lead Data → Processing → Automated Action → Organized Output).
  Adjust the wording in `js/data.js` if any detail doesn't match your actual build.
- The **n8n and Zapier projects are placeholders** — no invented apps, integrations, or
  results were added. Replace them with your real projects before publishing.
- Proficiency is shown as text tags ("Working Knowledge" / "Hands-on Experience" / "Project
  Experience") rather than percentages, since no verified proficiency numbers were provided.
