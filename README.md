# Ashtu - Premium Creative Developer & Designer Portfolio

A premium, modern, and visually stunning developer portfolio website built using **pure, plain HTML5, CSS3, and ES6+ JavaScript**. It features a glassmorphic aesthetic design system, a dual-theme toggle (light & dark mode), a dynamic typing effect, scroll-activated animations, a filterable projects gallery, an interactive custom CLI terminal simulation, and a validated contact form.

---

## 🎨 Key Features

1. **Rich Aesthetics & Premium Design**: Elegant dark-slate theme defaults with colorful neon gradients, modern font typography (`Outfit` and `Inter`), and glassmorphism layouts (`backdrop-filter`).
2. **Dual Theme Switcher**: Fluid toggle between Light Mode and Dark Mode, saving preference in `localStorage`.
3. **Interactive Playground (Console CLI)**: A fully-functional terminal mock environment where users can enter queries (like `help`, `about`, `skills`, `projects`, `contact`, `theme light`, `secret`).
4. **Featured Projects Gallery**: Filterable project cards with category-based filtering, staggered entrance animations, and hover interactions.
5. **Form Validation & Modal Feedback**: Clean JavaScript form checking with live feedback and success visual trigger.
6. **Fully Responsive Layout**: Flexbox, CSS Grid, and custom breakpoint rules making the site scale down perfectly for tablets and mobile phones.
7. **Clean Code & SEO Optimization**: Semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<footer>`), descriptive meta headers, custom viewport, and explicit anchor titles.

---

## 🚀 Running Locally

Because the project is written in vanilla HTML, CSS, and JS, **no build systems, package managers, or server scripts are required**.

1. Download or clone this directory.
2. Open `index.html` in any modern web browser (Chrome, Safari, Firefox, Edge).
3. (Optional) Run a basic local server for local file testing:
   - Python 3: `python -m http.server 8000` (then open `http://localhost:8000`)
   - Node.js: `npx serve .`

---

## 📦 How to Upload to GitHub (Step-by-Step)

This project has been packaged specifically to be **GitHub-ready**. Follow these steps to host your portfolio online for free using **GitHub Pages**:

### Step 1: Create a new repository on GitHub
1. Log in to your account at [github.com](https://github.com).
2. Click the **New** repository button (green button on your dashboard).
3. Set your repository name (e.g., `my-portfolio`).
4. Make sure it is set to **Public** so GitHub Pages can host it.
5. Do **not** initialize it with a README, `.gitignore`, or License (as they are already provided in this package).
6. Click **Create repository**.

### Step 2: Initialize Git and upload the code
In your terminal or Git Bash inside this directory:

```bash
# Initialize git in the project directory
git init

# Add all files to staging
git add .

# Create the initial commit
git commit -m "feat: initial commit of premium portfolio"

# Rename default branch to main
git branch -M main

# Link your local repo to GitHub (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push code to GitHub
git push -u origin main
```

*(Note: Alternatively, you can upload files directly on the GitHub website by clicking "uploading an existing file" on your new repository page and dragging all files in.)*

### Step 3: Turn on GitHub Pages (with auto-deploy via GitHub Actions ✅)

This repository includes a pre-configured GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys your site to GitHub Pages on every push to `main`. This is the **recommended** approach — no manual rebuilds needed.

1. Go to your repository page on GitHub.
2. Click on the **Settings** tab.
3. In the left-hand sidebar under "Code and automation", click on **Pages**.
4. Under "Build and deployment", select **GitHub Actions** as the source.
5. That's it! The next time you push to `main`, the workflow will automatically run and deploy.

> **Alternative** (if you prefer branch-based deployment):
> Under "Build and deployment", select **Deploy from a branch** as the source, then choose `main` / `root` and click **Save**.

Your site will be live at:
`https://your_username.github.io/your_repo_name/`

#### How the Auto-Deploy Works

The workflow in `.github/workflows/deploy.yml`:
- **Triggers** on every `git push` to the `main` branch (or can be triggered manually from the Actions tab)
- **Checks out** your code
- **Configures** GitHub Pages settings
- **Uploads** the entire project as a static artifact
- **Deploys** it to GitHub Pages — usually live within 1–2 minutes

No build tools, no configuration — just push and it's live.
