# Copilot instructions for "Design a Newspaper Layout"

Purpose
- Short, actionable guidance for AI coding agents editing this small static HTML/CSS project so changes are correct and test-friendly.

Big picture
- Single-page, static site: `index.html` and a stylesheet in the repo root.
- Layout is implemented using CSS Grid. The HTML currently contains the FreeCodeCamp-style test requirements as a commented checklist (keep these intact unless the user asks to remove them).

Key files
- `index.html` — the canonical source for required class names and HTML structure. Important classes: `newspaper-layout`, `title`, `feature-article`, `secondary-article`, `cover-image`, `small-article1`, `small-article2`, `small-article3`.
- `style.css` — present but empty. Note: `index.html` links to `styles.css` (plural). Either the HTML or the CSS filename must be reconciled when making edits.

Patterns & constraints discovered from the code
- Tests/requirements are embedded as HTML comments in `index.html`. They expect specific DOM structure and class names.
- CSS Grid areas must use the exact class names as grid-area identifiers. Example: an element with class `feature-article` should have `grid-area: feature-article;` in CSS.
- The layout expects three equal columns (use `grid-template-columns: repeat(3, 1fr);`) and rows arranged with `grid-template-areas` matching the class names listed above.

How to run / preview locally (no build system)
- There is no build, package.json, or tests in the repo. To preview in a browser from PowerShell, run a lightweight file server in the project directory:

  python -m http.server 8000

- Or use VS Code Live Server extension. Open `http://localhost:8000` and load `index.html`.

Editing rules for AI agents
- Preserve required class names and HTML structure from `index.html` — these are used by instructions/tests included in the file.
- Do not rename the `newspaper-layout` container or article class names unless the user requests it.
- If you add a stylesheet, ensure the link in `index.html` points to the correct filename (`styles.css` vs `style.css`). Note for reviewers: currently `index.html` -> `styles.css` but repo contains `style.css` (empty).
- Keep changes minimal and focused. This is an educational freeCodeCamp exercise; avoid adding frameworks or build tools.

Examples from this repo
- Required class list (must exist in DOM): `title`, `feature-article`, `secondary-article`, `cover-image`, `small-article1`, `small-article2`, `small-article3` — these are called out in the HTML comment block near the top of `index.html`.
- CSS expectations: the image inside `.cover-image` should use `max-width: 100%` to fit its grid area.

When to ask the user
- If you plan to rename or remove any of the required classes or the commented test checklist, confirm first.
- If you intend to add a build tool, tests, or external dependencies, ask before proceeding.

Next steps for a human or automated agent
- Align the stylesheet filename: either create `styles.css` with the intended rules or update `index.html` to reference `style.css`.
- Implement the CSS Grid rules in the stylesheet according to the comment checklist in `index.html`.

If anything in this file is unclear or you'd like the agent to make the stylesheet-filename fix automatically, tell me which option you prefer and I will update the project accordingly.
