# Coding Standards

Version: 1.0

Project: Vivek Digital HQ

---

# Purpose

This document defines the engineering standards followed throughout the project.

Goals:

- Maintain a clean and scalable codebase.
- Keep components reusable.
- Separate data from presentation.
- Follow modern React and TypeScript best practices.
- Make onboarding easy for future contributors.

---

# Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React

---

# Folder Structure

```
apps/web/src/

components/
    layout/
    sections/
    shared/
    ui/

config/
data/
hooks/
lib/
styles/
types/
utils/
assets/
```

Never place unrelated files in the same directory.

---

# Component Rules

Each component should have a single responsibility.

Good:

```
Hero.tsx

Button.tsx

StatusBadge.tsx

TechChip.tsx
```

Bad:

```
Hero.tsx

Contains:
- Hero
- Navbar
- Footer
- Contact
```

---

# Component Naming

Components

```
PascalCase

Hero.tsx

ProjectCard.tsx

StatusBadge.tsx
```

Hooks

```
camelCase

useTheme.ts

useProjects.ts
```

Utilities

```
camelCase

formatDate.ts

slugify.ts
```

---

# File Naming

React Components

```
PascalCase.tsx
```

Utilities

```
camelCase.ts
```

Types

```
types.ts
```

---

# Data Layer

Never hardcode data inside components.

Incorrect

```tsx
<h1>Vivek Singh</h1>
```

Correct

```tsx
<h1>{profile.name}</h1>
```

All content belongs inside:

```
src/data/
```

Example

```
profile.ts

projects.ts

skills.ts

experience.ts

navigation.ts
```

---

# Styling

Use Tailwind CSS.

Avoid inline styles unless absolutely necessary.

Prefer utility classes.

Example

Good

```
className="rounded-xl bg-cyan-500 px-6 py-3"
```

Avoid

```tsx
style={{
 background:"#00ffff"
}}
```

---

# Colors

Background

```
#050816
```

Primary

```
Cyan
```

Accent

```
Blue
```

Text

```
White
```

Muted

```
Slate
```

---

# Typography

Heading hierarchy

```
H1

H2

H3

Paragraph
```

Maintain consistent spacing.

---

# Spacing

Preferred spacing

```
py-32

py-24

mb-12

gap-6

gap-8
```

Avoid arbitrary spacing unless required.

---

# Icons

Use

```
Lucide React
```

Do not mix multiple icon libraries.

---

# Animations

Use

```
Framer Motion
```

Keep animations subtle.

Avoid distracting effects.

Preferred

- Fade
- Slide
- Scale

Avoid

- Excessive rotations
- Flashing effects
- Large bouncing elements

---

# Buttons

Buttons should use the shared Button component.

Never create duplicate button styles.

---

# Cards

Cards should use the shared Card component.

Do not duplicate card styling.

---

# Layout

Always wrap page sections with

```
Container
```

Example

```tsx
<Container>

</Container>
```

---

# Imports

Group imports.

Example

```tsx
React Libraries

Third Party Libraries

Components

Hooks

Utilities

Data
```

---

# Comments

Only comment complex logic.

Avoid comments explaining obvious code.

Good

```tsx
// Calculate deployment success rate
```

Avoid

```tsx
// Button
```

---

# TypeScript

Avoid

```
any
```

Prefer

- interfaces
- type aliases
- strict typing

---

# Git Workflow

main

Production-ready code only.

feature/*

All development.

Example

```
feature/navbar

feature/projects

feature/github-api
```

Never develop directly on main.

---

# Commit Messages

Examples

```
feat: add hero section

feat: implement project cards

fix: resolve mobile navbar issue

style: improve spacing

docs: update architecture

refactor: simplify button component
```

---

# Pull Requests

Every PR should:

- Build successfully.
- Pass linting.
- Maintain formatting.
- Avoid unnecessary files.
- Keep components reusable.

---

# Performance

Always consider

- Lazy loading
- Responsive images
- Small bundle size
- Component reuse

---

# Accessibility

Every interactive element should have

- keyboard support
- visible focus state
- semantic HTML

Use

```
button

nav

section

main

header

footer
```

instead of generic divs whenever appropriate.

---

# Documentation

Every major feature should update

```
docs/
```

if architecture changes.

---

# Design Philosophy

This is not just a portfolio.

This is an engineering product.

Every section should demonstrate:

- engineering thinking
- clean architecture
- maintainability
- scalability
- attention to detail

The website should communicate software engineering maturity, not just visual design.

---

# Guiding Principles

Build for clarity.

Build reusable components.

Separate data from UI.

Prefer composition over duplication.

Keep code readable.

Optimize only when necessary.

Document architectural decisions.

Write code that future contributors can understand quickly.

---

End of Document
