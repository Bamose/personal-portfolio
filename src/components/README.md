# Portfolio Components

A modern, responsive portfolio built with Next.js and Tailwind CSS. Based on Brittany Chiang's portfolio design.

## Component Structure

### Main Components

#### `portfolio/Header.tsx`
The sticky sidebar header containing:
- Name and title
- Description
- Navigation (desktop only)
- Social media links

**Props:**
- `name`: string - Your name
- `title`: string - Your job title
- `description`: string - Brief description

#### `portfolio/About.tsx`
The about section with multiple paragraphs.

**Props:**
- `paragraphs`: string[] - Array of paragraph text (supports HTML)

#### `portfolio/Experience.tsx`
Work experience section with a list of experiences.

**Props:**
- `experiences`: ExperienceItemProps[] - Array of experience items
- `resumeLink?`: string - Optional link to full resume

#### `portfolio/Projects.tsx`
Projects section with a list of projects.

**Props:**
- `projects`: ProjectItemProps[] - Array of project items
- `archiveLink?`: string - Optional link to project archive

#### `portfolio/Footer.tsx`
Footer with credits and links.

### UI Components

#### `ui/TechTag.tsx`
Pill-shaped tag for technologies.

**Props:**
- `children`: React.ReactNode - Tag content

#### `ui/SectionHeading.tsx`
Sticky section heading that's visible on mobile.

**Props:**
- `children`: React.ReactNode - Heading text

#### `ui/ExternalLinkIcon.tsx`
Arrow icon for external links.

### Icon Components

#### `icons/SocialIcons.tsx`
Social media icons:
- `GitHubIcon`
- `InstagramIcon`
- `TwitterIcon`
- `LinkedInIcon`

## Color Scheme

Custom colors defined in `globals.css`:
- `background-dark`: #0a192f - Navy background
- `primary`: #64ffda - Teal accent
- `slate`: #8892b0 - Muted text
- `light-slate`: #a8b2d1 - Slightly lighter text
- `lightest-slate`: #ccd6f6 - Headings and highlights
- `light-navy`: #112240 - Hover backgrounds
- `lightest-navy`: #233554 - Additional UI elements

## Usage

1. Update the content in `src/data/portfolio.ts`
2. Customize colors in `src/app/globals.css`
3. Replace social media links in `src/components/portfolio/SocialLinks.tsx`

## Features

- ✅ Fully responsive layout
- ✅ Smooth scroll navigation
- ✅ Active section highlighting
- ✅ Hover effects on experience/project items
- ✅ External link indicators
- ✅ Accessible markup with ARIA labels
- ✅ TypeScript support
- ✅ Component-based architecture

