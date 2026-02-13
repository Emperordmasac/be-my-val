# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript + Vite application using shadcn/ui components with Tailwind CSS v4. The project follows a modern component-driven architecture with path aliases for clean imports.

## Development Commands

### Core Commands
- `npm run dev` - Start development server with HMR
- `npm run build` - Type check with TypeScript and build for production
- `npm run lint` - Run ESLint on all files
- `npm run preview` - Preview production build locally

### Important Notes
- The build command runs `tsc -b` first for type checking before building with Vite
- Always run linting after modifying files (per user's global preferences)

## Project Structure

```
src/
├── App.tsx           # Root application component
├── main.tsx          # Application entry point with StrictMode and TooltipProvider
├── index.css         # Global styles and Tailwind configuration
├── components/
│   └── ui/           # shadcn/ui components (60+ components)
├── hooks/
│   └── use-mobile.ts # Custom hooks
└── lib/
    └── utils.ts      # Utility functions (cn helper)
```

## Architecture and Patterns

### Path Aliases
The project uses TypeScript path aliases configured in `tsconfig.json` and `vite.config.ts`:
- `@/*` maps to `./src/*`
- Component imports: `@/components/ui/button`
- Utils: `@/lib/utils`
- Hooks: `@/hooks/use-mobile`

### Component Structure
- All UI components are located in `src/components/ui/`
- Components use `class-variance-authority` (cva) for variant-based styling
- The `cn()` utility from `@/lib/utils` merges Tailwind classes using `clsx` and `tailwind-merge`
- Components follow shadcn/ui patterns with forwardRef and proper TypeScript typing

### Styling
- Tailwind CSS v4 with `@tailwindcss/vite` plugin
- CSS variables for theming (configured in `index.css`)
- Style: "new-york" variant of shadcn/ui
- Base color: neutral
- Dark mode support via `next-themes`

### shadcn/ui Configuration
Configuration in `components.json`:
- Components use Radix UI primitives
- Icon library: Lucide React
- No RSC (React Server Components)
- CSS variables enabled for theming

## Technology Stack

### Core
- React 19.2.0 with TypeScript
- Vite 7.3.1 for build tooling
- Tailwind CSS v4

### UI Libraries
- shadcn/ui components (extensive collection)
- Radix UI primitives
- Lucide React icons
- Base UI React

### Form & Validation
- react-hook-form 7.71.1
- @hookform/resolvers 5.2.2
- zod 4.3.6

### Other Key Dependencies
- date-fns 4.1.0 (date utilities)
- recharts 2.15.4 (charts)
- embla-carousel-react 8.6.0 (carousels)
- sonner 2.0.7 (toast notifications)
- cmdk 1.1.1 (command menu)

## TypeScript Configuration

The project uses TypeScript 5.9.3 with a composite project structure:
- `tsconfig.json` - Root configuration with path aliases
- `tsconfig.app.json` - App-specific configuration
- `tsconfig.node.json` - Node/build tooling configuration

## ESLint Configuration

Using flat config format (`eslint.config.js`):
- TypeScript ESLint with recommended rules
- React Hooks plugin
- React Refresh plugin for Vite HMR
- Ignores `dist/` directory
- Targets `**/*.{ts,tsx}` files

## Adding shadcn/ui Components

To add new shadcn/ui components:
```bash
npx shadcn@latest add <component-name>
```

The configuration in `components.json` ensures components are added to `src/components/ui/` with proper aliases.

## Development Workflow

1. When modifying components, ensure proper TypeScript types are used
2. Use the `cn()` utility for conditional className merging
3. Follow existing component patterns (forwardRef, VariantProps, etc.)
4. Run `npm run lint` after file modifications
5. Type check with `npm run build` before committing
