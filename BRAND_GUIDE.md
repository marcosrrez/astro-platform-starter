# Florecer Mind Brand Guide

*Where Research Blooms into Wisdom*

---

## Table of Contents

1. [Brand Identity](#brand-identity)
2. [Visual Identity](#visual-identity)
3. [Typography](#typography)
4. [Components & Patterns](#components--patterns)
5. [Content Guidelines](#content-guidelines)
6. [Publication Checklist](#publication-checklist)

---

## Brand Identity

### Mission
Transform complex academic research into accessible, practical wisdom that empowers individuals and supports mental health professionals.

### Core Values
- **Evidence-Based**: Every claim backed by peer-reviewed research
- **Accessible**: No jargon, clear explanations, practical applications
- **Empowering**: Tools and insights readers can use immediately
- **Professional**: Magazine-quality content for both general readers and counselors

### Voice & Tone

**Voice** (always consistent):
- Warm but authoritative
- Curious and thoughtful
- Evidence-based without being academic
- Supportive without being patronizing

**Tone** (varies by context):
- **Articles**: Engaging, educational, conversational
- **CTAs**: Encouraging, value-focused, clear
- **UI Copy**: Concise, helpful, friendly

### Brand Personality
- Knowledgeable guide, not distant expert
- Bridge between academia and real life
- Growth-oriented and optimistic
- Grounded in science, focused on humanity

### Contact Information
- **Email**: marcos@getflorecer.com
- **Website**: https://getflorecer.com
- **Instagram**: @getflorecermind
- **Twitter/X**: @florecermind
- **LinkedIn**: /company/florecermind

---

## Visual Identity

### Color Palette

**Primary Colors**
```
Forest Green (Primary): #2F5233
- Use for: Headers, CTAs, links, key UI elements
- Represents: Growth, wisdom, grounding

Sage Green (Secondary): #A8B5A0
- Use for: Accents, subtle highlights, gradients
- Represents: Calm, balance, natural wisdom

Background Cream: #FAFAF9
- Use for: Main backgrounds, content areas
- Represents: Clarity, openness, simplicity
```

**Neutral Palette**
```
Text Primary: #1f1f1f (neutral-900)
Text Secondary: #525252 (neutral-700)
Text Tertiary: #737373 (neutral-600)
Borders/Dividers: #d4d4d4 (neutral-300)
Subtle Backgrounds: #f5f5f4 (neutral-100)
```

**Accent Colors** (for social media integrations)
```
Instagram: #E4405F
Twitter/X: #1DA1F2
LinkedIn: #0A66C2
Facebook: #1877F2
```

### Logo

**Design**: Minimalist seed sprouting
- Perfect circle seed (represents potential)
- Curved stem (represents growth)
- Single leaf (represents flourishing)

**Wordmark**:
- "FLORECER MIND" in bold, tracking-wide
- Tagline: "Where Research Blooms into Wisdom" in smaller text

**Usage**:
- Always maintain clear space around logo
- Use primary green color on light backgrounds
- Ensure readability at all sizes

### Design Tokens

```css
--primary: #2F5233
--secondary: #A8B5A0
--background: #FAFAF9

--font-serif: 'Crimson Pro'
--font-sans: 'Inter'

--spacing-unit: 0.25rem (4px)
--border-radius: 0.5rem (8px)
--transition-speed: 300ms
```

---

## Typography

### Typefaces

**Serif: Crimson Pro**
- Use for: Headings, article titles, category badges, elegant emphasis
- Weights: 400 (regular), 600 (semibold), 700 (bold)
- Characteristics: Classical, readable, authoritative

**Sans-serif: Inter**
- Use for: Body text, UI elements, navigation, buttons
- Weights: 400 (regular), 500 (medium), 600 (semibold)
- Characteristics: Modern, clean, highly legible

### Type Scale

```
h1: 2.5rem (40px) - Article titles
h2: 2rem (32px) - Major sections
h3: 1.5rem (24px) - Subsections
h4: 1.25rem (20px) - Minor headings
Body: 1rem (16px) - Main content
Large: 1.25rem (20px) - Article descriptions
Small: 0.875rem (14px) - Metadata, captions
Tiny: 0.75rem (12px) - Legal, fine print
```

### Line Height
- Headings: 1.2 - 1.3
- Body text: 1.75 (relaxed reading)
- UI elements: 1.5

### Letter Spacing
- Headings: 0.02em (wide)
- Category badges: 0.05em (wider)
- Body: Default
- All-caps text: 0.05em - 0.1em

---

## Components & Patterns

### Buttons

**Primary Button**
```html
<a href="/path" class="btn btn-primary">
  Button Text
  <svg><!-- Optional icon --></svg>
</a>
```
- Background: Primary green (#2F5233)
- Hover: Darker green (#244028)
- Subtle shadow on rest, elevated shadow on hover
- Transform: translateY(-1px) on hover
- Font: Sans-serif, 600 weight

**Outline Button**
```html
<a href="/path" class="btn btn-outline">Button Text</a>
```
- Border: 2px primary green
- Background: Transparent → Primary green on hover
- Text: Primary green → White on hover

### Checkmarks (Research Findings)

```html
<span class="checkmark-styled">✓</span>
```
- Circular badge with green gradient background
- 1.5em size, centered alignment
- Subtle border, hover scale effect
- Use for: Key research findings, verified facts

### Social Share Buttons

- Branded colors on hover (Twitter blue, LinkedIn blue, etc.)
- Rounded background hover state
- Consistent sizing: 5x5 icons with 2-unit padding
- Active state: scale(0.95)

### Newsletter CTA

```html
<div class="my-16 p-8 md:p-10 bg-gradient-to-br from-primary/5 to-secondary/5 border-l-4 border-primary rounded-r-lg">
  <!-- Gradient background, left border accent -->
</div>
```
- Use at end of articles
- Gradient from primary to secondary (subtle)
- Clear value proposition + CTA button

### Cards

- Subtle shadow: `shadow-sm`
- Hover effect: `shadow-xl` + `translateY(-4px)`
- Border radius: 0.5rem
- Transition: 300ms ease

---

## Content Guidelines

### Article Structure

Every article must include:

1. **Frontmatter** (YAML)
   ```yaml
   title: "Compelling, specific title"
   description: "1-2 sentence summary"
   pubDate: YYYY-MM-DD
   category: "Category Name"
   tags: ["tag1", "tag2", "tag3"]
   author: "Florecer Mind Research Team"
   sources: [list of peer-reviewed studies]
   furtherReading: [optional books/resources]
   relatedVideos: [optional educational videos]
   ```

2. **Opening Hook** (1-2 paragraphs)
   - Relatable scenario or surprising insight
   - Sets up the problem/question
   - Conversational tone

3. **The Research Section**
   - Lead with "## The Research"
   - 4-6 key findings with checkmarks (✓)
   - Each finding includes:
     - Study details (year, sample size, effect size)
     - Clear explanation of findings
     - Why it matters

4. **Explanation/Framework**
   - Break down concepts clearly
   - Use analogies and examples
   - Maintain scientific accuracy

5. **Practical Applications**
   - Lead with "## Practical Applications"
   - Step-by-step exercises or techniques
   - Realistic time commitments
   - Clear instructions

6. **For Counselors Section** (when relevant)
   - Lead with "## For Counselors & Practitioners"
   - Clinical applications
   - Assessment considerations
   - Integration tips

7. **Key Takeaways**
   - Bullet list of main points
   - Actionable summary

8. **Getting Started Today**
   - 1-4 simple next steps
   - Immediately actionable

### Writing Style

**DO:**
- Use active voice
- Write in second person for practical advice ("you can...")
- Break complex concepts into digestible pieces
- Include specific examples
- Cite studies with (Year, N=sample size) format
- Use checkmarks (✓) for research findings
- Define technical terms when first used

**DON'T:**
- Use academic jargon without explanation
- Make claims without research backing
- Use absolutist language ("always," "never") without evidence
- Write in first person (use "we" for Florecer Mind team)
- Create walls of text (break into sections)
- Use emoji (except in social media content)

### Citations Format

**In-text**:
```
✓ A 2012 meta-analysis of 20 studies (N=4,054) found...
```

**Sources section**:
```yaml
sources:
  - title: "Full study title"
    url: "https://doi.org/..."
    type: "study"
```

### Content Categories

- **Neuroscience**: Brain mechanisms, neural pathways
- **Mental Health**: Anxiety, depression, wellbeing
- **Daily Practices**: Mindfulness, sleep, habits
- **For Counselors**: Clinical applications, therapeutic techniques

### Tags

Use specific, searchable tags:
- Practice-focused: "mindfulness", "self-compassion", "sleep"
- Condition-focused: "anxiety", "depression", "stress"
- Audience-focused: "for-counselors", "daily-practices"
- Format-focused: "neuroscience", "research-spotlight"

---

## Publication Checklist

### Before Publishing (Articles)

**Content Quality**
- [ ] All claims backed by peer-reviewed research
- [ ] Sources cited in frontmatter with URLs
- [ ] No jargon without clear explanation
- [ ] Practical applications included
- [ ] "For Counselors" section (if applicable)
- [ ] Proofread for typos and clarity
- [ ] Article follows structural guidelines

**Formatting**
- [ ] Frontmatter complete (title, description, date, category, tags, sources)
- [ ] Checkmarks (✓) used for research findings
- [ ] Headings use proper hierarchy (H2, H3)
- [ ] Lists properly formatted
- [ ] Line breaks for readability
- [ ] Examples are specific and clear

**SEO & Discovery**
- [ ] Title is compelling and specific (50-60 characters)
- [ ] Description is clear and actionable (120-155 characters)
- [ ] 3-5 relevant tags included
- [ ] Category assigned correctly
- [ ] Image specified (or default will be used)

**Design & UX**
- [ ] Article renders correctly in preview
- [ ] Social share buttons work
- [ ] Newsletter CTA appears
- [ ] Reading progress bar functions
- [ ] All links open correctly

### Before Publishing (Components)

**Visual Consistency**
- [ ] Uses brand colors from design tokens
- [ ] Typography follows type scale
- [ ] Spacing uses consistent units (4px, 8px, 16px, etc.)
- [ ] Hover states defined with 300ms transitions
- [ ] Accessible (proper ARIA labels, semantic HTML)

**Interactive Elements**
- [ ] Buttons use `.btn` classes with proper variants
- [ ] Icons sized consistently (w-4, w-5, w-6)
- [ ] Social icons use branded colors on hover
- [ ] Focus states visible for keyboard navigation
- [ ] Loading/disabled states defined

**Responsive Design**
- [ ] Mobile-first approach
- [ ] Breakpoints: sm (640px), md (768px), lg (1024px)
- [ ] Touch targets at least 44px x 44px
- [ ] Text readable without zoom
- [ ] No horizontal scroll

### Before Deploying

**Technical**
- [ ] `npm run build` completes without errors
- [ ] No console errors in browser
- [ ] Images optimized
- [ ] Lighthouse score > 90 (performance, accessibility, SEO)

**Content**
- [ ] Sitemap regenerated (`npm run build`)
- [ ] New pages submitted to Google Search Console
- [ ] RSS feed updated
- [ ] Social media preview looks correct

**Git**
- [ ] Changes committed to feature branch
- [ ] Branch name follows convention: `claude/description-sessionID`
- [ ] Commit message is descriptive
- [ ] PR created with clear description
- [ ] PR reviewed and approved
- [ ] Merged to main

---

## Quick Reference

### Color Codes
| Use | Hex | Tailwind Class |
|-----|-----|----------------|
| Primary green | #2F5233 | `text-primary`, `bg-primary` |
| Sage green | #A8B5A0 | `text-secondary`, `bg-secondary` |
| Background | #FAFAF9 | `bg-neutral-50` |
| Text main | #1f1f1f | `text-neutral-900` |
| Text secondary | #525252 | `text-neutral-700` |

### Common Classes
```
Buttons: btn btn-primary, btn btn-outline, btn-lg, btn-sm
Containers: max-w-4xl mx-auto, px-4
Spacing: my-16, py-8, gap-6
Text: font-serif, font-sans, text-primary
Transitions: transition-all duration-300
```

### File Locations
```
Articles: src/content/blog/*.md
Components: src/components/*.astro
Styles: src/styles/globals.css
Layout: src/layouts/Layout.astro
Config: astro.config.mjs, tailwind.config.mjs
```

---

## Questions or Updates?

This brand guide is a living document. As Florecer Mind evolves, update this guide to reflect new patterns and decisions. When in doubt, refer to this guide to maintain consistency and quality.

**Remember**: Every element we publish represents our commitment to making research accessible and practical. Quality over quantity. Clarity over cleverness. Impact over impressiveness.

---

*Last updated: January 2026*
