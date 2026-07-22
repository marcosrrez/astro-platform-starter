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

## 3b. The quality bar — what makes a spotlight *worthy*

Correct and safe is the floor, not the goal. A spotlight worth someone's ten
minutes clears this bar. Before writing, decide how this piece will meet it:

- **A sharp angle, not a topic.** "Sleep and mental health" is a topic. "Why the
  night you can't sleep is often built during the day" is an angle. Lead with a
  specific claim or tension the reader hasn't already heard a hundred times.
- **Earn the hook.** Open with a concrete, recognizable moment or a genuinely
  surprising finding — not a dictionary definition or "In today's fast-paced
  world." The reader should feel *seen* or *surprised* in the first two sentences.
- **Specific beats general.** Name the study, the number, the mechanism. "Research
  shows exercise helps" is forgettable; "an umbrella review of 97 reviews found
  exercise rivaled therapy for mild-to-moderate depression" is not. Every section
  should teach something a smart friend couldn't have guessed.
- **Honest nuance builds trust.** Say what the evidence *doesn't* show, who it
  doesn't apply to, and where researchers disagree. Effect sizes, limitations, and
  "this is correlational" are features, not hedges. Never oversell.
- **One throughline.** The hook, the research, the practices, and the takeaways
  should all serve a single idea. If a section doesn't advance it, cut it.
- **Practices that actually fit a life.** Applications must be specific, realistic,
  and tied to the mechanism you explained — not generic wellness bullet points.
- **A human voice.** Warm, curious, direct. Short sentences among long ones. No
  jargon without translation, no filler, no AI throat-clearing.
- **The Chesterton–Lewis lens.** Edit the framing through the worldview in
  `BRAND_GUIDE.md` → "Editorial Worldview": wonder over mere mechanism, gratitude,
  the dignity of the person against reductionism, real goods (Lewis's "Tao"), longing
  (*Sehnsucht*) taken seriously, humility before mystery, no chronological snobbery,
  first things first, hope in the miraculous ordinary. Keep it **latent, never preached**
  — no scripture, no doctrine-as-fact, welcoming to skeptics and believers alike — and
  **never bend the evidence to fit it.** The lens shapes emphasis and interpretation, not
  the data.
- **A title a human editor would write.** Plain, specific, and honest to the
  finding. Readers distrust content that reads as AI-generated, and headlines are
  the first tell. Avoid the formulas that scream machine: "The [Noun] Almost No
  One [Verb]s," "Why [X] Is the [Superlative] [Thing]," "The Surprising Science
  of…," or a title stuffed with em-dashes. Prefer a plain declarative claim
  ("Exercise treats depression about as well as therapy") or a concrete question.

**Anti-patterns that fail the bar:** an invented or vaguely-gestured study;
round-number stats with no source; a listicle with no argument; "studies show"
without which study; practices disconnected from the science; an AI-formula or
generic-wellness-blog title; padding to hit a length.

## 4. Write the article

Create `src/content/blog/<slug>.md`. Follow `.templates/article-template.md`, the
quality bar above, and the structure in `BRAND_GUIDE.md`:

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

## 6. Push the branch and surface a PR link

```bash
git add src/content/blog/
git commit -m "content: add research spotlight — <title>"
git push -u origin HEAD
```

> **Note on PR creation:** the automated weekly session runs **without** GitHub
> MCP tools or the `gh` CLI, so it cannot open the PR itself. That is by design —
> a human opens and reviews the PR. `git push` prints a "Create a pull request"
> URL; if it doesn't, construct one:
>
> ```
> https://github.com/marcosrrez/astro-platform-starter/compare/main...<branch>?expand=1
> ```
>
> Surface that URL in the final report. If you *do* have GitHub tools available
> (e.g. running this manually from a full session), you may open the PR directly.

**Never merge.** A human reviews and publishes.

## 7. Report

Summarize: the topic chosen, why it was chosen, the sources used (so a reviewer
can spot-check citations), a one-line credibility check confirming every specific
claim is backed by a linked source, and the PR / compare URL.

---

*This pipeline is invoked automatically once a week by a scheduled Routine (see
the repository's Claude configuration). It can also be run manually at any time
by pointing a session at this file.*
