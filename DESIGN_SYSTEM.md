# Florecer Mind Design System

## Brand Identity

**Mission**: Transform complex academic research into accessible, practical wisdom
**Feel**: Trustworthy, elegant, magazine-quality
**Inspiration**: The Atlantic, Scientific American, Kinfolk

---

## Typography

### Headings (Serif)
```astro
<h1 class="font-serif optical-align">Main Title</h1>
<h2 class="font-serif">Section Title</h2>
<h3 class="font-serif">Subsection Title</h3>
```

- **Font**: Crimson Pro
- **Use**: All headings, pull quotes, category badges
- **Feel**: Elegant, authoritative, magazine-quality

### Body Text (Sans-Serif)
```astro
<p class="font-sans leading-loose">Body paragraph...</p>
```

- **Font**: Inter
- **Use**: All body text, descriptions, metadata
- **Line-height**: 1.8 (loose) for optimal readability
- **Max-width**: 70ch for article content

---

## Colors

### Primary Palette
- **Primary Green**: `#2F5233` - Headers, links, CTAs
- **Sage Green**: `#A8B5A0` - Accents, category badges
- **Off-White**: `#FAFAF9` - Background

### Neutral Scale
- `neutral-900`: Body text (#171717)
- `neutral-700`: Secondary text (#404040)
- `neutral-600`: Metadata (#525252)
- `neutral-200`: Borders (#e5e5e5)
- `neutral-100`: Light backgrounds (#f5f5f5)

---

## Spacing System

### Vertical Rhythm
- **Small sections**: `py-12` (48px)
- **Standard sections**: `py-16` (64px)
- **Large sections**: `py-24` (96px)

### Content Spacing
- Paragraph margin: `my-6` (24px)
- Heading margin-top: `mt-12` (48px)
- Heading margin-bottom: `mb-6` (24px)

### Container Widths
- **Standard**: `max-w-4xl` (896px)
- **Article**: `max-w-3xl` (768px)
- **Wide**: `max-w-6xl` (1152px)

---

## Components

### Section Divider
```astro
<div class="section-divider"></div>
```
Elegant horizontal line, centered, 64px height

### Category Badge
```astro
<span class="category-badge bg-secondary/20 text-primary">
    Category Name
</span>
```

### Tag
```astro
<span class="tag bg-neutral-100 text-neutral-700 hover:bg-primary hover:text-white">
    #tag-name
</span>
```

### Card
```astro
<div class="p-8 border border-neutral-200 rounded-lg hover:border-primary card-hover">
    <!-- Content -->
</div>
```

### Button Primary
```astro
<a href="/path" class="btn btn-primary btn-lg">
    Button Text
</a>
```

### Button Outline
```astro
<a href="/path" class="btn btn-outline btn-lg border-2">
    Button Text
</a>
```

---

## Borders

### Style
- **Default**: `border-neutral-200` (hairline, elegant)
- **Hover**: `hover:border-primary`
- **Accent**: `border-l-4 border-primary` (left accent)

### Never Use
- ❌ Thick borders (border-2 except on buttons)
- ❌ Harsh colors
- ❌ Drop shadows (use subtle hover effects instead)

---

## Page Templates

### Standard Page Header
```astro
<section class="py-16">
    <h1 class="mb-8 font-serif optical-align">Page Title</h1>
    <p class="text-xl leading-loose text-neutral-700 font-sans max-w-3xl">
        Description text...
    </p>
</section>

<div class="section-divider"></div>
```

### Content Section
```astro
<section class="py-16">
    <h2 class="mb-10 font-serif">Section Title</h2>
    <!-- Content -->
</section>
```

### CTA Section
```astro
<section class="py-16">
    <div class="p-12 text-center rounded-lg bg-primary text-primary-content">
        <h2 class="mb-4 font-serif text-white">CTA Headline</h2>
        <p class="mb-8 text-lg font-sans text-white/90 max-w-2xl mx-auto">
            Description text...
        </p>
        <a href="/path" class="btn btn-lg bg-white text-primary hover:bg-neutral-100">
            CTA Button
        </a>
    </div>
</section>
```

---

## Blog Post Requirements

### Every Blog Post Must Have:
1. **Frontmatter**:
   - title, description, pubDate
   - category (one of 5 defined)
   - tags (2-5 tags)
   - sources, furtherReading, relatedVideos (at least one)

2. **Structure**:
   - ## The Research (opening section)
   - ### Key Findings (bullet list)
   - ## Practical Applications
   - ## Key Takeaways
   - ## For Counselors & Practitioners (if applicable)

3. **Styling** (automatic via template):
   - Serif headings
   - Sans body text
   - Optimal reading width
   - Section dividers
   - Sources & Resources section

---

## Links

### Style
```astro
<a href="/path" class="hover:underline">Link Text</a>
```

- No underline by default
- Underline on hover (2px thick)
- 3px offset from text
- Always use `transition-colors` or `transition-all`

### External Links
```astro
<a href="https://..." target="_blank" rel="noopener noreferrer">
    External Link
</a>
```

---

## Do's and Don'ts

### ✅ Do:
- Use generous whitespace
- Stick to 70ch reading width for articles
- Use section dividers between major sections
- Apply font-serif to ALL headings
- Apply font-sans to ALL body text
- Use hairline borders (border, not border-2)
- Add hover states to interactive elements
- Maintain vertical rhythm

### ❌ Don't:
- Use thick borders (except buttons)
- Mix fonts inconsistently
- Forget line-height (always leading-loose)
- Use drop shadows
- Create walls of text (break with headings)
- Use bright or harsh colors
- Skip section dividers

---

## Quick Reference

### Every New Page Should:
1. Start with `<section class="py-16">`
2. Use `<h1 class="font-serif optical-align">` for title
3. Add section dividers: `<div class="section-divider"></div>`
4. Use `font-sans` for all body text
5. Use `font-serif` for all headings
6. End with a CTA section if appropriate

### Every New Blog Post:
- Create `.md` file in `src/content/blog/`
- Add complete frontmatter (see template)
- Content automatically gets magazine styling
- All links must work (no placeholders!)

---

## Brand Voice in Design

The visual design should communicate:
- **Trust**: Clean typography, proper citations, elegant spacing
- **Accessibility**: Clear hierarchy, readable line-lengths, generous spacing
- **Sophistication**: Serif headings, refined details, magazine quality
- **Evidence-based**: Structured content, cited sources, professional presentation

---

*This design system ensures every page and article maintains the Florecer Mind brand.*
