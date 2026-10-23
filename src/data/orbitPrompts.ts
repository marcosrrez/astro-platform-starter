export interface OrbitPrompt {
    id: string;
    essaySlug: string;
    essayTitle: string;
    sectionIndex: number; // 1-based section index where this prompt appears in-prose
    sectionLabel: string;
    category: 'Neuroscience Mechanism' | 'C.S. Lewis Synthesis' | 'Home & Playroom Practice' | 'Cross-Essay Interleaving';
    question: string;
    answer: string;
    anchor: string;
    contrastWithSlug?: string;
}

export const ORBIT_PROMPTS: OrbitPrompt[] = [
    // =========================================================================
    // ESSAY 1: Creaturely Mind at Four O'Clock (After-School Restraint Collapse)
    // =========================================================================
    {
        id: 'orb-d1-s1-threshold',
        essaySlug: 'creaturely-mind-at-four-oclock-restraint-collapse',
        essayTitle: "The Creaturely Mind at Four O'Clock",
        sectionIndex: 1,
        sectionLabel: 'I. The Paradox of the Threshold',
        category: 'Neuroscience Mechanism',
        question: 'Why does a child often hold their behavior together all day for a teacher at school, only to melt down within ten minutes of seeing a parent at 3:45 PM?',
        answer: 'Because the parent is the child\'s neurobiological safe harbor. All day in the classroom, the child spends finite prefrontal energy inhibiting impulses and filtering noise; crossing the threshold into Attachment Safety allows the exhausted nervous system to drop its armor (After-School Restraint Collapse).',
        anchor: 'C.S. Lewis Picture: In The Screwtape Letters, Lewis reminds us that humans are amphibians, half spirit and half animal. What looks like sudden disrespect at 4:00 PM is usually biological exhaustion meeting emotional safety.'
    },
    {
        id: 'orb-d1-s2-networks',
        essaySlug: 'creaturely-mind-at-four-oclock-restraint-collapse',
        essayTitle: "The Creaturely Mind at Four O'Clock",
        sectionIndex: 2,
        sectionLabel: 'II. The 45-Minute Buffer Zone & Brain Modes',
        category: 'Neuroscience Mechanism',
        question: 'Which two large-scale brain networks must trade places during the 45-minute after-school buffer zone, and what activity makes that switch possible?',
        answer: 'The brain must downshift from the Task-Positive Network (Focused Mode, driven by the dorsolateral prefrontal cortex) into the Default Mode Network (Diffuse Mode). Unstructured sensory play, outdoor movement, and quiet solitude trigger this network switch.',
        anchor: 'Home & Playroom Rule: Screen entertainment (fast-cut video or gaming) does not activate the restorative Default Mode Network; it continues bombarding visual and attentional circuits.'
    },
    {
        id: 'orb-d1-s3-catecholamines',
        essaySlug: 'creaturely-mind-at-four-oclock-restraint-collapse',
        essayTitle: "The Creaturely Mind at Four O'Clock",
        sectionIndex: 3,
        sectionLabel: 'III. Prefrontal Glucose & Catecholamine Chemistry',
        category: 'Neuroscience Mechanism',
        question: 'According to neuroscientist Amy Arnsten, what happens chemically in the prefrontal cortex after six hours of classroom self-regulation, and who takes over the steering wheel?',
        answer: 'Local synaptic levels of norepinephrine and dopamine shift out of their narrow optimal window (and local metabolic fuel drops), causing top-down prefrontal regulation to go offline while the amygdala and HPA axis take control.',
        anchor: 'C.S. Lewis Picture: When we scold a depleted child at four o\'clock for lacking willpower, we are whipping the horse when the horse has simply run out of oats.'
    },
    {
        id: 'orb-d1-s4-ten-minute-rule',
        essaySlug: 'creaturely-mind-at-four-oclock-restraint-collapse',
        essayTitle: "The Creaturely Mind at Four O'Clock",
        sectionIndex: 4,
        sectionLabel: 'IV. The Ten-Minute Homework Rule',
        category: 'Home & Playroom Practice',
        question: 'What is Harris Cooper and Denise Pope\'s evidence-based ceiling for effective nightly homework in elementary school, and what happens past that threshold?',
        answer: 'Roughly 10 minutes per grade level (e.g., 20 minutes for 2nd grade, 40 minutes for 4th grade). Beyond that ceiling in elementary school, additional homework yields near-zero academic gain while increasing cortisol and family conflict.',
        anchor: 'At the Kitchen Table: Protect the evening ceiling so homework serves mastery rather than exhausting the family bond.'
    },
    {
        id: 'orb-d1-s5-thalamus',
        essaySlug: 'creaturely-mind-at-four-oclock-restraint-collapse',
        essayTitle: "The Creaturely Mind at Four O'Clock",
        sectionIndex: 5,
        sectionLabel: 'V. Thalamic Sensory Gating',
        category: 'Neuroscience Mechanism',
        question: 'Why does a sock seam, a loud sibling, or a parent\'s rapid-fire questions ("How was school? What did you get on your spelling test?") feel physically painful to a child at 4:00 PM?',
        answer: 'Because the thalamic reticular nucleus (the brain\'s sensory gatekeeper) is fatigued and can no longer filter out background noise, tags, or multi-part verbal demands.',
        anchor: 'Clinical Practice: Replace multi-part interrogation at pickup with warm, low-demand physical presence and a snack.'
    },
    {
        id: 'orb-d1-s6-shypo',
        essaySlug: 'creaturely-mind-at-four-oclock-restraint-collapse',
        essayTitle: "The Creaturely Mind at Four O'Clock",
        sectionIndex: 6,
        sectionLabel: 'VI. Synaptic Homeostasis & Sleep',
        category: 'Home & Playroom Practice',
        question: 'Why does 15 minutes of morning review at 7:15 AM often accomplish what 90 minutes of tearful study at 8:00 PM could not?',
        answer: 'According to Tononi and Cirelli\'s Synaptic Homeostasis Hypothesis (SHY), slow-wave sleep prunes noisy synaptic clutter accumulated during the day while consolidating core memory traces, restoring fresh prefrontal capacity by morning.',
        anchor: 'Home Protocol: When a child hits cognitive bankruptcy at night, close the book early and use a 15-minute morning review after sleep.'
    },

    // =========================================================================
    // ESSAY 2: The Four-Brick Juggler & Wandering Lantern (Barbara Oakley)
    // =========================================================================
    {
        id: 'orb-d2-s1-working-memory',
        essaySlug: 'four-brick-juggler-wandering-lantern-barbara-oakley',
        essayTitle: 'The Four-Brick Juggler and the Wandering Lantern',
        sectionIndex: 1,
        sectionLabel: 'II. Working Memory & The Four-Brick Juggler',
        category: 'Neuroscience Mechanism',
        question: 'How many independent items can human working memory hold at once (Nelson Cowan\'s limit), and why does a parent\'s anxious sigh or raised voice instantly cause a child to forget a math step?',
        answer: 'Working memory holds only about 3 to 4 active slots at a time (fewer in young children). When a parent introduces social threat or frustration, defensive threat-monitoring steals 1 to 2 of those precious prefrontal slots, leaving the child with too few slots to compute the problem.',
        anchor: 'C.S. Lewis & Oakley Picture: A child is a four-brick juggler; barking louder instructions while they are juggling four bricks only tosses a fifth brick at their head.'
    },
    {
        id: 'orb-d2-s2-einstellung',
        essaySlug: 'four-brick-juggler-wandering-lantern-barbara-oakley',
        essayTitle: 'The Four-Brick Juggler and the Wandering Lantern',
        sectionIndex: 2,
        sectionLabel: 'III. Focused vs. Diffuse Mode & Einstellung',
        category: 'Neuroscience Mechanism',
        question: 'What is the Einstellung Effect, and why does forcing a stuck child to "stay in that chair until you finish" biologically prevent them from solving the problem?',
        answer: 'The Einstellung Effect is cognitive ruts: an initial flawed neural pathway in Focused Mode blocks alternative solutions. Only stepping away briefly into Diffuse Mode allows wide-ranging associative networks to bypass the blocked pathway.',
        anchor: 'C.S. Lewis Picture:Focused Mode is a narrow, high-intensity spotlight; Diffuse Mode is a soft lantern illuminating the whole room.'
    },
    {
        id: 'orb-d2-s3-chunking',
        essaySlug: 'four-brick-juggler-wandering-lantern-barbara-oakley',
        essayTitle: 'The Four-Brick Juggler and the Wandering Lantern',
        sectionIndex: 3,
        sectionLabel: 'IV. Neural Chunking vs. Illusion of Competence',
        category: 'Neuroscience Mechanism',
        question: 'How does neural chunking bypass the 4-slot working memory bottleneck, and why does passive re-reading create an "illusion of competence" instead of a true chunk?',
        answer: 'Chunking binds multiple separate steps into a single synchronized basal-ganglia/cortical trace that occupies only ONE slot of working memory. Passive re-reading merely recognizes familiar text on the page without forcing the brain to retrieve and fire the circuit from scratch.',
        anchor: 'Andy Matuschak & Oakley Rule: Only active retrieval practice (closing the book and explaining or solving from memory) builds durable neural chunks.'
    },
    {
        id: 'orb-d2-s4-insula-pomodoro',
        essaySlug: 'four-brick-juggler-wandering-lantern-barbara-oakley',
        essayTitle: 'The Four-Brick Juggler and the Wandering Lantern',
        sectionIndex: 4,
        sectionLabel: 'V. The Insular Cortex & Procrastination',
        category: 'Home & Playroom Practice',
        question: 'What brain region lights up when a child anticipates a dreaded worksheet, and how does shifting focus from "product" to a short "process" timer quiet that region?',
        answer: 'The anterior insular cortex (which processes visceral physical pain and disgust) activates during anticipation of a hard task. Committing to a brief, low-stakes process window ("Let\'s just sit with this calmly for 10 minutes, no matter how many we finish") quiets insular pain within ~20 seconds of starting.',
        anchor: 'Playroom & Home Connection: Just as Garry Landreth\'s playroom frees a child from evaluation, process-over-product frees the insula from performance dread.'
    },
    {
        id: 'orb-d2-s5-interleaved-d1-d2',
        essaySlug: 'four-brick-juggler-wandering-lantern-barbara-oakley',
        essayTitle: 'The Four-Brick Juggler and the Wandering Lantern',
        sectionIndex: 5,
        sectionLabel: 'VI. Cross-Essay Discrimination',
        category: 'Cross-Essay Interleaving',
        contrastWithSlug: 'creaturely-mind-at-four-oclock-restraint-collapse',
        question: 'INTERLEAVED CONTRAST (Essay 1 vs. Essay 2): At 4:15 PM your child is crying over a 5-step long-division problem. How do you distinguish Prefrontal Restraint Collapse (Essay 1) from Working Memory Slot Overflow / Einstellung (Essay 2), and how does your response differ?',
        answer: 'If the child just got home from 6 hours of school without a sensory buffer or snack, it is Restraint Collapse (Essay 1): pause academics for a 45-minute buffer zone. If the child is rested and fed but freezing on a multi-step problem, it is Working Memory Overflow or Einstellung (Essay 2): offload steps onto scratch paper or take a 5-minute Diffuse Mode walk.',
        anchor: 'Interleaved Clinical Wisdom: Never apply a cognitive scaffolding tool to a metabolically bankrupt nervous system, and never mistake a 4-slot working memory bottleneck for defiance.'
    },

    // =========================================================================
    // ESSAY 3: Grit Without Grimness (Angela Duckworth & C.S. Lewis on The Chest)
    // =========================================================================
    {
        id: 'orb-d3-s1-the-chest',
        essaySlug: 'grit-without-grimness-duckworth-cs-lewis-chest',
        essayTitle: 'Grit Without Grimness: Duckworth & C.S. Lewis on the Chest',
        sectionIndex: 1,
        sectionLabel: 'I. The Head, the Belly, and the Missing Chest',
        category: 'C.S. Lewis Synthesis',
        question: 'In C.S. Lewis\'s The Abolition of Man, why can the intellect ("The Head") never govern raw biological impulse ("The Belly") directly without "The Chest"?',
        answer: 'Because abstract cold reason has no motivational fuel of its own; without trained emotions, rightly ordered affections, and noble loves ("The Chest"), a child either collapses into raw impulse or complies only out of joyless fear.',
        anchor: 'Lewis Quote: "The head rules the belly through the chest, the seat of Magnanimity, of emotions organized by trained habit into stable sentiments."'
    },
    {
        id: 'orb-d3-s2-grit-vs-compliance',
        essaySlug: 'grit-without-grimness-duckworth-cs-lewis-chest',
        essayTitle: 'Grit Without Grimness: Duckworth & C.S. Lewis on the Chest',
        sectionIndex: 2,
        sectionLabel: 'II. Neurobiology of True Grit vs. Fearful Compliance',
        category: 'Neuroscience Mechanism',
        question: 'What is the neurobiological difference between a child who works hard out of Fearful Compliance versus a child who perseveres through True Grit?',
        answer: 'Fearful Compliance is driven by the amygdala and HPA axis (norepinephrine/cortisol threat avoidance), which narrows curiosity and leads to burnout. True Grit is powered by the mesolimbic and mesocortical dopamine pathway (ventral striatum to medial prefrontal cortex), which pairs effort with intrinsic meaning and mastery.',
        anchor: 'Clinical Diagnostic: Fearful compliance produces brittle perfectionism when watched; ordered affections produce resilient curiosity when nobody is watching.'
    },
    {
        id: 'orb-d3-s3-wise-parenting',
        essaySlug: 'grit-without-grimness-duckworth-cs-lewis-chest',
        essayTitle: 'Grit Without Grimness: Duckworth & C.S. Lewis on the Chest',
        sectionIndex: 3,
        sectionLabel: 'III. Duckworth\'s Wise Parenting Matrix',
        category: 'Home & Playroom Practice',
        question: 'In Angela Duckworth\'s Wise Parenting framework, what two dimensions combine to form "Wise Feedback," and what exact sentence captures both?',
        answer: 'High Warmth (unconditional attachment security) combined with High Standards (belief in the child\'s capability). The classic Wise Feedback script is: "I am giving you these specific adjustments because I have high standards and I know you are capable of reaching them, and I am right here with you."',
        anchor: 'Parenting Balance: High standards without warmth breeds anxiety; warmth without standards breeds fragility; warmth plus standards builds The Chest.'
    },
    {
        id: 'orb-d3-s4-deliberate-practice',
        essaySlug: 'grit-without-grimness-duckworth-cs-lewis-chest',
        essayTitle: 'Grit Without Grimness: Duckworth & C.S. Lewis on the Chest',
        sectionIndex: 4,
        sectionLabel: 'IV. Anders Ericsson & Deliberate Practice',
        category: 'Neuroscience Mechanism',
        question: 'According to Anders Ericsson, how does 20 minutes of Deliberate Practice differ from two hours of mindless repetition, and why does Deliberate Practice require recovery afterward?',
        answer: 'Deliberate Practice targets a single specific micro-skill just beyond current automaticity with immediate, non-shaming feedback. Because it demands peak prefrontal focus and oligodendrocyte myelination signaling, even world-class performers can sustain it only in short, bounded bouts followed by deep rest.',
        anchor: 'Home Application: Replace "Go practice piano for an hour" with "Let\'s play just measure 4 slowly three times until your left hand feels smooth, then go play outside."'
    },
    {
        id: 'orb-d3-s5-interleaved-d1-d2-d3',
        essaySlug: 'grit-without-grimness-duckworth-cs-lewis-chest',
        essayTitle: 'Grit Without Grimness: Duckworth & C.S. Lewis on the Chest',
        sectionIndex: 5,
        sectionLabel: 'V. Three-Essay Interleaved Synthesis',
        category: 'Cross-Essay Interleaving',
        contrastWithSlug: 'four-brick-juggler-wandering-lantern-barbara-oakley',
        question: 'INTERLEAVED SYNTHESIS (Essays 1, 2, & 3): How do Garry Landreth\'s "returning responsibility" in the playroom (Essay 3), Barbara Oakley\'s Neural Chunking (Essay 2), and the 45-Minute Buffer Zone (Essay 1) work together across a single afternoon?',
        answer: '1. First, the 45-Minute Buffer Zone (Essay 1) restores prefrontal catecholamines and vagal safety. 2. Next, a short 15-minute Deliberate Practice session with Wise Warmth + Returning Responsibility (Essay 3) engages the child\'s Chest without triggering threat. 3. Finally, active retrieval and play/sleep consolidate those steps into a single Neural Chunk (Essay 2).',
        anchor: 'The Whole Child: Rest the body first, warm the Chest second, and chunk the skill third.'
    },

    // =========================================================================
    // CLINICAL & NEUROSCIENCE ESSAYS ACROSS THE BLOG
    // =========================================================================
    {
        id: 'orb-reappraisal-1',
        essaySlug: 'cognitive-reappraisal-techniques',
        essayTitle: 'Cognitive Reappraisal: How Reframing Thoughts Changes Your Brain',
        sectionIndex: 1,
        sectionLabel: 'The Neuroscience of Reappraisal',
        category: 'Neuroscience Mechanism',
        question: 'When you practice Cognitive Reappraisal instead of Emotional Suppression, what happens between the prefrontal cortex and the amygdala on fMRI?',
        answer: 'Cognitive Reappraisal recruits the dorsolateral and ventrolateral prefrontal cortex to reinterpret the meaning of an event early in the emotion cycle, which down-regulates amygdala reactivity. Emotional Suppression tries to hide outward expression late in the cycle, which actually increases sympathetic stress and amygdala activation.',
        anchor: 'Clinical Takeaway: Reframing changes the upstream appraisal of a stressor; suppression merely puts a lid on a boiling pot.'
    },
    {
        id: 'orb-self-compassion-1',
        essaySlug: 'neuroscience-self-compassion',
        essayTitle: 'The Neuroscience of Self-Compassion: Why Being Kind to Yourself Works',
        sectionIndex: 1,
        sectionLabel: 'Threat Defense vs. Mammalian Caregiving System',
        category: 'Neuroscience Mechanism',
        question: 'Why does harsh self-criticism after a mistake impair learning, whereas Kristen Neff\'s Self-Compassion accelerates behavioral correction?',
        answer: 'Harsh self-criticism triggers the Threat-Defense System (amygdala, cortisol, and adrenaline), narrowing attention into shame or defensiveness. Self-compassion activates the Mammalian Caregiving System (oxytocin, endogenous opioids, and ventral vagal tone), keeping the prefrontal cortex online to examine the mistake honestly.',
        anchor: 'Cross-Essay Link: Self-compassion for adults is the exact inward equivalent of Duckworth\'s Wise Parenting (high warmth + honest growth).'
    },
    {
        id: 'orb-sleep-1',
        essaySlug: 'sleep-mental-health-connection',
        essayTitle: 'The Sleep-Mental Health Connection: More Bidirectional Than We Thought',
        sectionIndex: 1,
        sectionLabel: 'REM & Slow-Wave Emotional Calibration',
        category: 'Neuroscience Mechanism',
        question: 'By how much does amygdala reactivity to negative emotional stimuli increase after a single night of sleep deprivation (Matthew Walker\'s fMRI findings), and why?',
        answer: 'Amygdala reactivity surges by roughly 60% because sleep deprivation severs the functional connectivity brake between the medial prefrontal cortex and the amygdala, while loss of REM sleep prevents overnight noradrenergic emotional depotentiation.',
        anchor: 'Cross-Essay Link: Connects directly to Essay 1\'s Synaptic Homeostasis Hypothesis (SHY): sleep is both our synaptic janitor and our overnight emotional therapist.'
    },
    {
        id: 'orb-alliance-1',
        essaySlug: 'therapeutic-alliance-research',
        essayTitle: 'Why the Therapeutic Relationship Matters More Than Technique',
        sectionIndex: 1,
        sectionLabel: 'Bordin\'s Three-Part Alliance & Co-Regulation',
        category: 'Home & Playroom Practice',
        question: 'What are Edward Bordin\'s three components of the Working Therapeutic Alliance, and roughly how much more outcome variance does the alliance explain compared to specific therapeutic modality?',
        answer: '1. Shared agreement on Goals, 2. Shared agreement on Tasks, and 3. An authentic Emotional Bond. Across meta-analyses (Wampold, Norcross), the alliance accounts for roughly 7 to 8% of total outcome variance, several times larger than the ~1% difference between specific manualized techniques.',
        anchor: 'Playroom & Consultation Anchor: Safety in the relationship is the physiological prerequisite that allows any technique or skill to take root.'
    },
    {
        id: 'orb-neuroplasticity-1',
        essaySlug: 'neuroplasticity-daily-practices',
        essayTitle: 'Daily Practices That Promote Neuroplasticity',
        sectionIndex: 1,
        sectionLabel: 'BDNF, Hebbian Plasticity, and Focused Attention',
        category: 'Neuroscience Mechanism',
        question: 'Why does adult and childhood neuroplasticity require focused attention plus BDNF (Brain-Derived Neurotrophic Factor) rather than passive background exposure?',
        answer: 'Passive exposure does not release the acetylcholine and norepinephrine required to mark specific synapses for change. Focused attention highlights the active circuit, aerobic movement elevates BDNF ("Miracle-Gro" for synapses), and subsequent deep sleep cements the structural change.',
        anchor: 'Hebbian Principle: Neurons that fire together under focused attention wire together during subsequent rest.'
    },
    {
        id: 'orb-awe-1',
        essaySlug: 'awe-small-self-mental-health',
        essayTitle: 'Awe and the "Small Self": Why Feeling Tiny Can Be Huge for Mental Health',
        sectionIndex: 1,
        sectionLabel: 'Dacher Keltner & Default Mode Quieting',
        category: 'C.S. Lewis Synthesis',
        question: 'What happens to self-referential rumination in the Default Mode Network during moments of genuine awe, and how does this echo C.S. Lewis\'s view of humility?',
        answer: 'Experiences of awe quiet self-focused rumination in the Default Mode Network and lower pro-inflammatory cytokines (IL-6), shifting attention from anxious self-preoccupation to a vast, connected world.',
        anchor: 'C.S. Lewis Picture: Humility is not thinking less of yourself; it is thinking of yourself less because you are beholding something grander.'
    },
    {
        id: 'orb-mbsr-1',
        essaySlug: 'mindfulness-based-stress-reduction',
        essayTitle: 'Mindfulness-Based Stress Reduction: What 40 Years of Research Tells Us',
        sectionIndex: 1,
        sectionLabel: 'Decentering & Structural Plasticity',
        category: 'Neuroscience Mechanism',
        question: 'What is cognitive "decentering" in mindfulness research, and how does it change the relationship between a distressing thought and the autonomic nervous system?',
        answer: 'Decentering is the metacognitive capacity to observe thoughts and bodily sensations as passing mental events rather than literal truths or commands, preventing automatic sympathetic escalation.',
        anchor: 'Clinical Practice: Naming a feeling ("I notice my chest tightening") recruits the prefrontal cortex to soothe the limbic system.'
    },
    {
        id: 'orb-exercise-1',
        essaySlug: 'exercise-frontline-mental-health-treatment',
        essayTitle: 'Exercise as a Frontline Mental Health Treatment: What the Biggest Meta-Analyses Show',
        sectionIndex: 1,
        sectionLabel: 'Myokines, BDNF, and Mood Regulation',
        category: 'Neuroscience Mechanism',
        question: 'In large-scale meta-analyses (such as Singh et al. and Noetel et al.), how does regular structured physical movement compare to first-line psychotherapy and SSRIs for mild-to-moderate depression, and why?',
        answer: 'Structured movement shows comparable effect sizes (SMD ~ -0.4 to -0.6) by releasing skeletal muscle myokines, upregulating hippocampal BDNF, normalizing HPA-axis cortisol rhythms, and restoring dopaminergic reward sensitivity.',
        anchor: 'Cross-Essay Link: The embodied soul cannot be treated from the neck up alone; bodily movement feeds the very circuits needed for emotional regulation.'
    }
];
