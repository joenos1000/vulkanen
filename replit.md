# Vulkanen Mors

## Overview

Vulkanen Mors is a community-focused web application built with the T3 Stack, showcasing a new chapter for Ørding. The project serves as an informational and promotional platform for a community space that focuses on creativity, movement, and collaboration. The application provides details about financing plans, current status, workshops (VÆRKsted), Velo Mors cycling initiative, core values, and contact information for the board.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **Technology**: Next.js 15 with App Router
- **Rationale**: Provides modern React features with built-in server-side rendering, optimal performance, and excellent developer experience
- **Key Features**: 
  - React Server Components for improved performance
  - File-based routing via app directory
  - Built-in optimization for images and fonts

### Styling Solution
- **Technology**: Tailwind CSS v4 with shadcn/ui components
- **Configuration**: Uses "new-york" style with custom theme variables and CSS variables enabled
- **Rationale**: Utility-first CSS framework allows rapid UI development with consistent design system
- **Animation**: GSAP (GreenSock Animation Platform) for advanced animations, particularly used in navigation and text typing effects

### Type Safety & Validation
- **Language**: TypeScript with strict mode enabled
- **Validation**: Zod schemas for runtime type validation
- **Environment Variables**: Managed through @t3-oss/env-nextjs for type-safe environment configuration

### API Layer
- **Technology**: tRPC v11
- **Rationale**: End-to-end type safety between client and server without code generation
- **Architecture**:
  - Server-side routers in `~/server/api/routers/`
  - Client-side React hooks via `@trpc/react-query`
  - Server-side rendering support with hydration helpers
  - SuperJSON for advanced data serialization (Dates, Maps, Sets, etc.)

### State Management
- **Technology**: TanStack Query (React Query) v5
- **Integration**: Tightly integrated with tRPC for data fetching and caching
- **Configuration**: 30-second stale time for SSR optimization

### Code Quality
- **Linting**: ESLint with Next.js config and TypeScript-ESLint
- **Formatting**: Prettier with Tailwind CSS plugin
- **Type Checking**: Strict TypeScript configuration with noUncheckedIndexedAccess

### Component Architecture
- **Pattern**: Functional components with React hooks
- **Custom Components**: 
  - `TextType`: Animated typing effect component with GSAP
  - `CardNav`: Expandable navigation with smooth animations
  - `Section`: Reusable section wrapper with consistent styling
  - `Navigation`: Sticky navigation with scroll-based active state
  - `Footer`: Site-wide footer with links and branding

### Font Strategy
- **Technology**: Next.js font optimization with Geist font family
- **Implementation**: Font variable (`--font-geist-sans`) for consistent typography

## External Dependencies

### Analytics
- **Service**: Vercel Analytics
- **Purpose**: Track page views and user interactions
- **Implementation**: Integrated in root layout

### Database/ORM
- **Note**: The application is scaffolded to support Drizzle ORM or Prisma (both mentioned in README), but no database schema or connection is currently implemented
- **Current State**: Uses in-memory mock data for the post router

### Third-Party Libraries
- **GSAP**: Professional-grade animation library for complex UI animations
- **Lucide React**: Icon library for consistent iconography
- **React Icons**: Additional icon sets (particularly GoArrowUpRight used in CardNav)
- **class-variance-authority**: Utility for managing component variants
- **clsx & tailwind-merge**: Class name utilities for conditional styling

### Development Environment
- **Port Configuration**: Development server runs on port 5000 with network access (0.0.0.0)
- **Scripts**: 
  - Separate format checking and writing commands
  - Combined check command for linting and type checking
  - Preview mode for production builds

### Deployment Target
- **Platform**: Optimized for Vercel deployment (based on T3 Stack documentation references)
- **Build Configuration**: Standard Next.js build process with optional environment validation skipping for Docker builds