# Content Templates

This directory contains templates that follow the **Florecer Mind Brand Guide** (`/BRAND_GUIDE.md`).

## Available Templates

### `article-template.md`
**Use for**: Creating new research-based blog articles

**How to use**:
1. Copy template to `src/content/blog/your-article-slug.md`
2. Fill in frontmatter (title, description, date, sources, etc.)
3. Replace placeholder text with your content
4. Keep the structure: Research → Explanation → Practical Applications
5. Use checkmarks (✓) for key research findings
6. Complete the checklist at the bottom before publishing

**Key sections**:
- Opening hook (relatable scenario)
- The Research (4-6 findings with checkmarks)
- Main concept explanation
- Practical Applications (step-by-step)
- For Counselors (if applicable)
- Key Takeaways
- Getting Started Today

### `component-template.astro`
**Use for**: Creating new UI components

**How to use**:
1. Copy template to `src/components/YourComponent.astro`
2. Define props interface
3. Add component markup using brand classes
4. Document usage in header comment
5. Complete checklist at bottom before committing

**Key requirements**:
- Use design tokens (colors, fonts, spacing)
- Include accessibility attributes
- Add transitions (300ms standard)
- Make responsive (mobile-first)
- Document props and usage

## Before Creating New Content

**Always**:
1. Read `/BRAND_GUIDE.md` first
2. Use the appropriate template
3. Follow the structure exactly
4. Complete the checklist
5. Test thoroughly

## Quick Reference

**Brand Colors**:
- Primary: `#2F5233` or `text-primary`, `bg-primary`
- Secondary: `#A8B5A0` or `text-secondary`, `bg-secondary`

**Typography**:
- Headings: `font-serif` (Crimson Pro)
- Body: `font-sans` (Inter)

**Common Classes**:
- Buttons: `btn btn-primary`, `btn btn-outline`
- Spacing: `my-16`, `py-8`, `gap-6`
- Transitions: `transition-all duration-300`

**Need Help?**
See `/BRAND_GUIDE.md` for complete guidelines.
