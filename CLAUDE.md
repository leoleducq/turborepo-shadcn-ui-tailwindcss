# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This is a Turborepo monorepo using pnpm as the package manager. Use these commands from the root directory:

- `pnpm dev` - Start development servers for all apps
- `pnpm build` - Build all apps and packages  
- `pnpm lint` - Run ESLint across all packages
- `pnpm format` - Format code using Prettier

For the docs app specifically (from `/apps/docs`):
- `pnpm dev` - Start Next.js dev server on port 3000
- `pnpm build` - Build the Next.js app
- `pnpm lint` - Lint the docs app

## Architecture

This is a Turborepo monorepo with the following structure:

### Apps
- `apps/docs` - Next.js application (main portfolio site) that imports from shared UI package

### Packages  
- `packages/ui` - Shared React component library powered by Shadcn/UI and Tailwind CSS
  - Exports components via `./components/*` 
  - Exports styles via `./globals.css`
  - Exports Tailwind config via `./tailwind.config`
- `packages/eslint-config` - Shared ESLint configurations
- `packages/typescript-config` - Shared TypeScript configurations

### Key Technologies
- **Turborepo** for monorepo orchestration and caching
- **Next.js 15** for the main app
- **Shadcn/UI** + **Tailwind CSS** for the UI system
- **TypeScript** throughout
- **pnpm** for package management (workspace setup)
- **Framer Motion** for animations
- **Lucide React** for icons

The UI package provides reusable components (Button, Card, etc.) that can be imported by apps using `@repo/ui/components/*`. The docs app appears to be a portfolio site with Projects and About sections.