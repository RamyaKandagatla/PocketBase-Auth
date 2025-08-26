# PocketBase Auth – React Frontend
  A small React + Vite app that implements a Login, Register, and Dashboard with a PocketBase backend.
  Includes route protection, session persistence, responsive layout (mobile sidebar drawer), toasts, and a Terms & Conditions modal.

# Setup Instructions
  Requirements
      Node 18+ (tested on Node 22)
      npm 9+ (tested on npm 10)
  1) npm install
  2) Create a .env file in the project root and add below in the file:
      VITE_PB_URL=https://pb.devpgs.app
  3) npm run dev

# Assumptions
  Using PocketBase’s built-in users collection (email/password auth).
  The review instance at VITE_PB_URL is reachable and allows create for registration.
  No email verification step required by the assignment.
  Client-side app only (no custom server).
  Terms & Conditions text is static for this exercise.
  Session persistence via PocketBase’s default localStorage works for the reviewer.

# Issues Encountered
  1. If npx tailwindcss init -p fails, ensure Tailwind is installed as dev dependencies:
    npm i -D tailwindcss postcss autoprefixer
  2. White SVG logo on a white top bar can appear “invisible”; we add className="filter invert" to render it dark.
  3. Mobile sidebar could cause background scrolling; we explicitly lock body scroll when the drawer is open and use an overlay with proper z-index.

# Troubleshooting
  1. Tailwind classes not applying
    Check tailwind.config.js content globs include ./index.html and ./src/**/*.{ts,tsx}.
  2. Auth fails / 400 from PocketBase
    Confirm .env → VITE_PB_URL.
    Verify the users collection rules allow creating a user and email/password auth.
    Field-level errors from PB are shown inline (e.g., “password must be at least 8 characters”).
  3. Sidebar overlaps or page scrolls behind
    Ensure global CSS (overflow-x: hidden;) and that Dashboard.tsx applies scroll lock when the drawer is open.

