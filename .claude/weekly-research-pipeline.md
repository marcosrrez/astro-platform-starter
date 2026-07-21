# Weekly Research Pipeline — Research Rescue Weekly

This document is the standalone playbook for producing one **Research Spotlight**
per week for Florecer Mind. It is written so a fresh Claude session (spawned by a
scheduled Routine, with no prior context) can execute it end to end.

**Output of one run:** a new, fully-cited Markdown article in `src/content/blog/`
plus a **pull request** targeting `main` for human review. Nothing is auto-published.

---

## 0. Guardrails (read first)

- **Never invent studies, statistics, sample sizes, or effect sizes.** Every
  specific claim ("a 2019 study of 4,054 people…") MUST correspond to a real,
  verifiable source that is linked in the article's `sources` frontmatter.
- If you cannot verify a claim with a real source, **reword it** to be general
  ("research consistently suggests…") or cut it. Credibility is the whole brand.
- This is a mental-health publication. Be careful and non-clinical. Do not give
  medical advice; frame practices as evidence-informed, not prescriptions.
- Read `/BRAND_GUIDE.md` before writing — it is the source of truth for voice,
  structure, and the publication checklist.

## 1. Set up the branch

```bash
git fetch origin main
git checkout -B claude/weekly-spotlight-$(date +%Y-%m-%d) origin/main
```

## 2. Choose a topic

Pick ONE specific, evidence-rich topic from counseling, neuroscience, cognitive
science, daily practices, or mental health. Prefer topics that:

- Have a strong, recent (last ~10 years) peer-reviewed evidence base.
- Are **not already covered** — list existing posts first:

  ```bash
  ls src/content/blog/
  ```

- Offer a concrete, practical takeaway readers can act on.

## 3. Research with real sources

1. Use web search to find **primary sources**: peer-reviewed studies, meta-analyses,
   or reputable institutional summaries (NIH/NIMH, APA, university .edu, Cochrane).
2. For each key claim you plan to make, capture: authors/year, what was measured,
   the actual finding, and a stable URL (prefer a DOI or PubMed/journal link).
3. Aim for **3–6 solid sources**. A meta-analysis or systematic review is worth
   more than five blog posts. Distinguish "study" vs "article" vs "book" in `type`.

## 4. Write the article

Create `src/content/blog/<slug>.md`. Follow `.templates/article-template.md` and
the structure in `BRAND_GUIDE.md`:

- **Frontmatter** matching the schema in `src/content/config.ts`:
  - `title`, `description` (120–155 chars), `pubDate` (this week's Monday),
    `category` (exactly one of: Neuroscience, Cognitive Science,
    Counseling & Therapy, Daily Practices, Mental Health), `tags` (3–5),
    `sources` (the real ones from step 3), optional `furtherReading`,
    `relatedVideos`.
- **Body:** opening hook → `## The Research` (with `### Key Findings`, using ✓
  bullets that each map to a real cited source) → `## Practical Applications`
  → `## For Counselors & Practitioners` (if relevant) → `## Key Takeaways`.
- Cite in-text as `(Author et al., Year)` and make sure every ✓ finding is
  backed by an entry in `sources`.
- Voice: warm but authoritative, no jargon without explanation, no emoji in body.

## 5. Self-check against the Publication Checklist

Run through the "Before Publishing (Articles)" checklist in `BRAND_GUIDE.md`.
Then verify the build:

```bash
npm install   # if node_modules is absent
npm run build
```

The build must pass (it validates frontmatter against the Zod schema). Fix any
schema or type errors before opening the PR.

## 6. Open a PR for review

```bash
git add src/content/blog/
git commit -m "content: add research spotlight — <title>"
git push -u origin HEAD
```

Then open a pull request against `main` using the GitHub tools. PR body should include:

- One-line summary of the spotlight and its category.
- The list of sources used, so a reviewer can spot-check citations quickly.
- A short "credibility check" confirming every specific claim is backed by a
  linked source.

**Do not merge.** A human reviews and publishes. Leave the PR open.

## 7. Report

Summarize: the topic chosen, why, the sources, and the PR link.

---

*This pipeline is invoked automatically once a week by a scheduled Routine (see
the repository's Claude configuration). It can also be run manually at any time
by pointing a session at this file.*
