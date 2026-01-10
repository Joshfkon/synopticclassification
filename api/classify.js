const Anthropic = require('@anthropic-ai/sdk');

const SCS_REFERENCE_DOC = `# The Synoptic Classification System (SCS)

A modified Dewey Decimal Classification for private libraries. Designed for browsing, not retrieval. For thinkers, not librarians.

*Synoptic: from Greek synoptikos, "seeing the whole together"*

---

## Governing Principles

### Principle 1: History & Theory Integration

The 900–908 block houses theoretical and comparative work that transcends specific places and times. This material provides the analytical lenses used to interpret historical events. Theory and history are not separate disciplines—they belong together.

Material migrates INTO this block from:
- 303 (social processes, social change)
- 320 (political science, when theoretical)
- 327 (international relations, when theoretical)
- 330 (economics, when theoretical)
- 355 (military science, when theoretical)

### Principle 2: Regional Consolidation

Everything about a specific place and time—political, military, diplomatic, economic—belongs in that place's regional section (910–999). Dewey's disciplinary silos retain only genuinely abstract, placeless material.

This means:
- A book on Jacksonian democracy → 973 (not 320)
- A book on Soviet military doctrine → 947 (not 355)
- A book on British mercantilist policy → 941 (not 330)
- Tocqueville's *Democracy in America* → 973 (not 320)
- Clausewitz's *On War* → 903 (theory, not tied to a campaign)
- A history of the Napoleonic Wars → 940.27 (not 355)

---

## The 900–908 Schema: History & Theory

| Number | Category | Description | Example Authors/Titles |
|--------|----------|-------------|----------------------|
| 900 | Historiography & Philosophy of History | How to think about history; metahistorical frameworks; philosophy of historical change | Spengler, Toynbee, Collingwood, Carr's *What Is History?* |
| 901 | Structural Theories & Cliodynamics | Models of historical change, cycles, collapse, institutional dynamics; see subdivisions below | |
| 901.0 | General structural theory | Broad synthetic works on how societies/civilizations work | Diamond's *Guns, Germs, and Steel*, Koyama's *How the World Became Rich* |
| 901.1 | Cliodynamics & cycles | Quantitative models, cyclical theories of history | Turchin, Goldstone |
| 901.2 | Collapse & decline | Theoretical frameworks for civilizational failure and systemic decline | Tainter, Diamond's *Collapse*, Orlov |
| 901.3 | Institutional analysis | How institutions shape historical outcomes; institutional sclerosis | Olson, North, Acemoglu, Scott's *Seeing Like a State* |
| 901.4 | Political economy of power | Intersection of economics and state power; fiscal-military states; hegemonic stability | Kennedy's *Rise and Fall*, Smil's *Energy and Civilization*, Landes, Ferguson's *Cash Nexus*, Yergin |
| 901.5 | Demographic models | Population dynamics as drivers of historical change | Malthus, Clark's *Farewell to Alms* |
| 902 | *Reserved* | Available for future use | |
| 903 | War Theory & Grand Strategy | Military theory, strategic thought, philosophy of war (not campaigns or operational history) | Clausewitz, Jomini, Sun Tzu, Luttwak, Boyd, Schelling, Freedman's *Strategy* |
| 904 | Geopolitics & International Systems | Theories of international order, geopolitical frameworks, systemic analysis of state competition | Mackinder, Mahan, Mearsheimer, Zeihan, Brzezinski, Kaplan, Waltz |
| 905 | *Reserved* | Available for future use | |
| 906 | State Formation & Institutions | How states form, regime theory, institutional development, political order | Hobbes, Locke, Fukuyama's *Origins of Political Order*, Huntington's *Political Order*, Tilly |
| 907 | Empire & Hegemony | Theories of imperial expansion, hegemonic competition, ideologies as historical forces | Schumpeter, Ferguson, Sowell's *Conquests and Cultures*, Doyle, Darwin's *After Tamerlane* |
| 908 | Comparative & Bilateral Systems | Works comparing multiple civilizations/states, or focused on relationships between powers (not reducible to one region) | Gaddis's *The Cold War*, Westad's *The Global Cold War*, Nye |

---

## The 909–999 Schema: Regional & Chronological History

Standard Dewey regional assignments are retained, with the understanding that ALL aspects of a region's history (political, military, diplomatic, economic) consolidate here.

| Range | Region |
|-------|--------|
| 909 | World history (surveys, global) |
| 910–919 | Geography & travel (retain or repurpose) |
| 920–929 | Biography (retain or repurpose) |
| 930–939 | Ancient world |
| 940–949 | Europe |
| 950–959 | Asia |
| 960–969 | Africa |
| 970–979 | North America |
| 980–989 | South America |
| 990–999 | Oceania & other |

### Chronological Subdivisions (applied within regional sections)

Where useful, apply chronological subdivisions after the regional number:

| Decimal | Era |
|---------|-----|
| .01–.09 | Historiography, theory, surveys of this region |
| .1 | Ancient / early |
| .2 | Medieval |
| .3 | Early modern (c. 1500–1789) |
| .4 | Long 19th century (1789–1914) |
| .5 | Early 20th century (1914–1945) |
| .6 | Cold War era (1945–1991) |
| .7 | Post–Cold War (1991–present) |

*Note: These subdivisions are flexible. For regions where standard Dewey already has sensible chronological breakdowns (e.g., 973.x for US history), retain those instead.*

---

## Thematic Subdivisions Within Chronological Periods

Standard Dewey already uses numeric subdivisions for chronological/presidential periods (e.g., 973.922 for Kennedy, 973.926 for Reagan). To avoid collision, use **letter suffixes** for thematic/commentary material that isn't narrative history.

### Three-Tier Structure for Regional Histories

Each regional history section follows a three-tier structure:

1. **XXXR** — Reference, textbooks, timeless institutional analysis (letter suffix R)
2. **XXX.YY** — Narrative history of that era (standard Dewey, no suffix)
3. **XXX.YY[letter]** — Thematic subdivisions within that era (letter suffix)

This ensures that textbooks and contemporary commentary don't interrupt the narrative historical flow.

### Letter Suffixes for Thematic Content

| Suffix | Content |
|--------|---------|
| R | Reference, textbooks, institutional analysis |
| V | Surveys, spanning works (surVey) |
| H | Historiography |
| P | Political commentary/analysis |
| E | Economic policy & debates |
| T | Trade & industrial policy |
| S | Social policy & domestic debates |
| F | Foreign policy & national security |
| C | Cultural & intellectual history |

### How It Works

**No suffix** = narrative history (what happened)
**Letter suffix** = thematic material (analysis, commentary, policy debates)

Examples:
- 973.924 → Narrative history of Nixon era
- 973.924P → Political commentary about Nixon era
- 973.924S → Social policy debates during Nixon era
- 973R → Reference/textbook on US government (timeless)
- 973V → Survey/spanning history of the US

### United States (973) Application

**Pre-chronological (timeless material):**

| Number | Content | Examples |
|--------|---------|----------|
| 973R | Reference, textbooks, institutional analysis | O'Connor/Sabato's *American Government*, Bryce's *American Commonwealth*, Morley's *Freedom and Federalism* |
| 973V | Surveys, spanning works | Gordon's *Rise and Fall of American Growth*, Cowan's *Social History of American Technology* |
| 973H | Historiography | |

**Standard Dewey 973.x chronological subdivisions (unchanged):**

| Number | Era |
|--------|-----|
| 973.1–.2 | Colonial period |
| 973.3 | Revolution & Founding (1775–1789) |
| 973.4 | Early Republic (1789–1809) |
| 973.5 | 1809–1845 |
| 973.6 | 1845–1861 |
| 973.7 | Civil War (1861–1865) |
| 973.8 | Reconstruction & Gilded Age (1865–1901) |
| 973.91 | Early 20th century (1901–1953) |
| 973.921 | Truman/Eisenhower |
| 973.922 | Kennedy |
| 973.923 | Johnson |
| 973.924 | Nixon/Ford |
| 973.925 | Ford |
| 973.926 | Reagan |
| 973.927 | Bush I |
| 973.928 | Clinton |
| 973.931 | Bush II |
| 973.932 | Obama |
| 973.933 | Trump |
| 973.934 | Biden |

**With letter suffixes for thematic material:**

| Number | Content | Examples |
|--------|---------|----------|
| 973.922 | Kennedy era, narrative | Schlesinger's *A Thousand Days* |
| 973.923 | LBJ era, narrative | Caro's *Master of the Senate*, *The Years of Lyndon Johnson* |
| 973.924 | Nixon era, narrative | Perlstein's *Nixonland*, Haldeman's *Diaries* |
| 973.924E | Nixon era, economic policy | Garten's *Three Days at Camp David* |
| 973.926 | Reagan era, narrative | Perlstein's *Reaganland* |
| 973.926S | Reagan era, social policy | Sowell's *Civil Rights: Rhetoric or Reality* |
| 973.926C | Reagan era, cultural | Doherty's *Radicals for Capitalism* |
| 973.927S | Bush I era, social policy | Sowell's *Compassion Versus Guilt* |
| 973.928T | Clinton era, trade policy | Bovard's *Fair Trade Fraud* |
| 973.932E | Obama era, economic policy | Sorkin's *Too Big to Fail*, Timiraos's *Trillion Dollar Triage* |
| 973.933T | Trump era, trade policy | Lighthizer's *No Trade Is Free* |
| 973.933S | Trump era, social policy | Kendi's *How to Be an Antiracist* |

### China (951) Application

**Pre-chronological:**

| Number | Content | Examples |
|--------|---------|----------|
| 951R | Reference, textbooks | |
| 951V | Surveys, spanning works | |
| 951H | Historiography | |

**Chronological subdivisions for China:**

| Number | Era |
|--------|-----|
| 951.01–.03 | Ancient & Imperial (to 1644) |
| 951.04 | Qing Dynasty (1644–1912) |
| 951.05 | Republic & Warlord era (1912–1949) |
| 951.06 | Mao era (1949–1976) |
| 951.07 | Reform era (1976–2012) |
| 951.08 | Xi era (2012–present) |

**With letter suffixes:**

| Number | Content | Examples |
|--------|---------|----------|
| 951.07 | Reform era, narrative | |
| 951.07E | Reform era, economic policy | Walter's *Red Capitalism* |
| 951.08 | Xi era, narrative | |
| 951.08P | Xi era, political | McGregor's *Xi Jinping: The Backlash* |
| 951.08E | Xi era, economic policy | Orlik's *China: The Bubble That Never Pops* |

### Russia/Soviet Union (947) Application

**Pre-chronological:**

| Number | Content | Examples |
|--------|---------|----------|
| 947R | Reference, textbooks | |
| 947V | Surveys, spanning works | Courtois's *Black Book of Communism* |
| 947H | Historiography | |

**Chronological subdivisions for Russia:**

| Number | Era |
|--------|-----|
| 947.01–.03 | Medieval Russia |
| 947.04 | Early modern / Romanov (to 1801) |
| 947.05–.07 | 19th century Imperial |
| 947.08 | Late Imperial & Revolution (1894–1922) |
| 947.084 | Stalin era (1924–1953) |
| 947.085 | Post-Stalin Soviet (1953–1991) |
| 947.086 | Post-Soviet Russia (1991–present) |

**With letter suffixes:**

| Number | Content | Examples |
|--------|---------|----------|
| 947.085 | Post-Stalin Soviet, narrative | Kotkin |
| 947.085E | Post-Stalin Soviet, economic | Shelton's *Coming Soviet Crash* |
| 947.085F | Post-Stalin Soviet, foreign/security | Luttwak's *Grand Strategy of the Soviet Union*, Alibek's *Biohazard*, Schecter's *Sacred Secrets* |
| 947.086 | Post-Soviet, narrative | Kotkin's *Armageddon Averted* |
| 947.086P | Post-Soviet, political | Sakwa's *Russian Politics and Society* |

### Europe (940) Application

**Pre-chronological:**

| Number | Content | Examples |
|--------|---------|----------|
| 940R | Reference, textbooks | |
| 940V | Surveys, spanning works | |
| 940H | Historiography | |

### Japan (952) Application

**Pre-chronological:**

| Number | Content | Examples |
|--------|---------|----------|
| 952R | Reference, textbooks | |
| 952V | Surveys, spanning works | |
| 952H | Historiography | |

**Chronological subdivisions:**

| Number | Era |
|--------|-----|
| 952.01–.02 | Ancient & Medieval |
| 952.03 | Tokugawa (1603–1868) |
| 952.04 | Meiji to WWII (1868–1945) |
| 952.05 | Postwar (1945–present) |

**With letter suffixes:**

| Number | Content | Examples |
|--------|---------|----------|
| 952.05 | Postwar, narrative | |
| 952.05E | Postwar, economic policy | Tabb's *Postwar Japanese System*, Kumon's *Political Economy of Japan*, Wood's *Bubble Economy* |

---

## The 909.8x Schema: Contemporary World History

Contemporary global phenomena that transcend regional boundaries belong here. This is where the post-WWII world order, demographic transition, globalization, and related developments live.

| Number | Category | Description | Example Authors/Titles |
|--------|----------|-------------|----------------------|
| 909.80 | Contemporary world history | General surveys of the modern era | |
| 909.81 | Post-WWII order (1945–1971) | Bretton Woods era, early Cold War as global system | |
| 909.82 | Late Cold War era (1971–1991) | Stagflation, neoliberal turn, Soviet decline | |
| 909.83 | Post-Cold War (1991–2008) | Unipolar moment, globalization's peak | |
| 909.84 | Crisis era (2008–present) | Financial crisis, populism, institutional stress | |
| 909.85 | Demographic decline & aging | Global fertility collapse, population aging, workforce shrinkage | Konstantinos's *Sleeping on a Volcano*, Goodhart's *Great Demographic Reversal*, Morland's *Human Tide*, Bricker's *Empty Planet*, Peterson's *Gray Dawn* |
| 909.86 | Globalization & deglobalization | Trade systems, supply chains, their unraveling | Zeihan's *End of the World Is Just the Beginning*, Thompson's *Disorder* |
| 909.87 | Energy & resource transitions | Energy systems, resource constraints, technological shifts | Smil's *How the World Really Works* |
| 909.88 | Reserved | | |
| 909.89 | Futurism & projections | Forward-looking analysis of global trends | Friedman's *Next 100 Years*, Postrel's *Future and Its Enemies* |

---

## The 576.8x Schema: Evolutionary Psychology & Human Biology

Evolutionary approaches to human behavior belong with biology (576, evolution), not scattered across sociology (301), psychology (150), or "social processes" (303). This block consolidates material on human nature, cognition, and behavior as products of evolution.

| Number | Category | Description | Example Authors/Titles |
|--------|----------|-------------|----------------------|
| 576.80 | Human evolution, general | Physical and behavioral evolution of humans | |
| 576.81 | Intelligence & psychometrics | IQ, cognitive ability, g-factor, measurement of intelligence | |
| 576.82 | Human biodiversity | Population differences, heritability of traits | Murray's *Human Diversity*, Clark's *Son Also Rises* |
| 576.83 | Evolutionary psychology, general | Evolution of mind, behavior, decision-making | Wright's *Moral Animal* |
| 576.84 | Sociality, cooperation, kinship | Evolution of social behavior, altruism, kin selection | Ridley's *Origins of Virtue*, Chapais's *Primeval Kinship* |
| 576.85 | Sex, mating, pair-bonding | Evolution of human sexuality and reproduction | Fisher's *Why We Love*, Diamond's *Why Is Sex Fun?* |
| 576.86 | Aggression, dominance, politics | Evolutionary roots of political behavior | Wade's *Origin of Politics*, Garcia's *Sex, Power, and Partisanship* |
| 576.87–.89 | Reserved | | |

### Migration Rules for 576.8x

Material migrates INTO this block from:
- 153 (Intelligence, mental processes)
- 155 (Differential psychology)
- 304.5 (Human ecology, sociobiology)
- 306.7 (Sexual behavior—when evolutionary)

---

## Migration Rules

### From 153 (Mental Processes & Intelligence)
- Intelligence, IQ, psychometrics → 576.81
- Cognitive ability, g-factor → 576.81
- Non-evolutionary cognitive science → remains 153

### From 304.5 (Human Ecology / Sociobiology)
- Evolutionary psychology → 576.83
- Sociobiology, kin selection → 576.84
- Human biodiversity → 576.82
- Demographic material → 909.85

### From 303 (Social Processes)
- Civilizational dynamics, social change theory → 901.0 or 901.1
- Collapse/decline theory → 901.2
- Institutional analysis → 901.3
- Specific to a place/time → appropriate 910–999 section

### From 320 (Political Science)
- Political philosophy as analytical lens → 900 or 906
- Regime theory, state formation → 906
- Ideology as historical force → 907
- Political history of a specific place → appropriate 910–999 section
- Normative political philosophy (Rawls, etc.) → remains 320 or discard

### From 327 (International Relations)
- IR theory, systemic analysis → 904
- Bilateral relationships (e.g., US-Soviet) → 908 if comparative; otherwise to dominant region
- Diplomatic history of a specific place/time → appropriate 910–999 section

### From 330 (Economics)
- Political economy of power, fiscal-military states → 901.4
- Economic models of growth/decline → 901.3 or 901.4
- Economic history of a specific place → appropriate 910–999 section
- Pure economics → remains 330

### From 355 (Military Science)
- Military theory, strategic thought → 903
- Military history of a specific place/time → appropriate 910–999 section
- Technical/doctrinal manuals → remains 355 or discard

---

## Edge Cases & Decision Rules

### Spanning Works
Books covering a region across all eras (e.g., a full history of Russia) use the .01–.09 subdivision for that region, or simply the base number without chronological subdivision.

Example: A complete history of Russia → 947.01 or just 947

### Bilateral/Multilateral Works
If a book is genuinely about the *relationship* between powers rather than either power individually, it goes to 908 (Comparative & Bilateral Systems).

Example: Gaddis's *The Cold War* → 908.6 (bilateral, Cold War era)

If the book has a clear "home" perspective, it goes to that region.

Example: Zubok's *A Failed Empire* (Soviet perspective on Cold War) → 947.6

### Theory vs. Application
When in doubt: if you'd use the book to *interpret* other books, it's theory (900–908). If it's a case study you'd *interpret using* theory, it's regional (910–999).

### Author's Intent vs. Your Use
Classify by how *you* use the book, not by the author's disciplinary affiliation or the publisher's categorization.

---

## Notation Format

Standard format: **[Class].[Subdivision][Letter] [Cutter]**

The letter suffix is optional—omit for narrative history, include for thematic material.

Examples:
- 576.83 WRI → Wright, *Moral Animal*
- 576.85 FIS → Fisher, *Why We Love*
- 901.1 TUR → Turchin, *War and Peace and War*
- 901.2 TAI → Tainter, *Collapse of Complex Societies*
- 901.3 OLS → Olson, *Rise and Decline of Nations*
- 901.4 KEN → Kennedy, *Rise and Fall of the Great Powers*
- 901.4 SMI → Smil, *Energy and Civilization*
- 903 CLA → Clausewitz, *On War*
- 904 ZEI → Zeihan, *Accidental Superpower*
- 909.85 KON → Konstantinos, *Sleeping on a Volcano*
- 909.86 LEV → Levinson, *The Box*
- 937 LUT → Luttwak, *Grand Strategy of the Roman Empire*
- 947.085 KOT → Kotkin (narrative)
- 947.085F LUT → Luttwak, *Grand Strategy of the Soviet Union* (foreign policy)
- 947.085E SHE → Shelton, *Coming Soviet Crash* (economic)
- 951.08P MCG → McGregor, *Xi Jinping: The Backlash* (political)
- 951.08E ORL → Orlik, *China: The Bubble That Never Pops* (economic)
- 952.05E TAB → Tabb, *The Postwar Japanese System* (economic)
- 973R OCO → O'Connor/Sabato, *American Government* (reference)
- 973R BRY → Bryce, *American Commonwealth* (reference)
- 973V GOR → Gordon, *Rise and Fall of American Growth* (survey)
- 973.5 TOC → Tocqueville, *Democracy in America* (narrative)
- 973.923 CAR → Caro, *Master of the Senate* (narrative)
- 973.924 PER → Perlstein, *Nixonland* (narrative)
- 973.924E GAR → Garten, *Three Days at Camp David* (economic)
- 973.926S SOW → Sowell, *Civil Rights: Rhetoric or Reality* (social policy)
- 973.928T BOV → Bovard, *Fair Trade Fraud* (trade policy)
- 973.932E SOR → Sorkin, *Too Big to Fail* (economic)
- 973.933T LIG → Lighthizer, *No Trade Is Free* (trade policy)
- 908.6 GAD → Gaddis, *The Cold War*`;

const SCS_SYSTEM_PROMPT = `You are an expert librarian trained in the Synoptic Classification System (SCS). Your job is to classify books according to the SCS schema.

Here is the complete SCS reference document:

${SCS_REFERENCE_DOC}

---

## Your Task

When given a book title, author, and optional description, you must:

1. Determine the correct SCS classification number
2. Explain your reasoning briefly (2-3 sentences)
3. Suggest 2-3 books that would be shelf neighbors

## Key Decision Rules

1. **Theory vs. Regional**: If the book provides a theoretical LENS for interpreting other works → 900-908. If it's about a specific place/time → regional section (910-999).

2. **Letter Suffixes**: Use letter suffixes for thematic/commentary material:
   - No suffix = narrative history
   - E = economic policy
   - S = social policy
   - F = foreign policy/security
   - P = political commentary
   - T = trade policy
   - C = cultural/intellectual
   - R = reference/textbook
   - V = survey/spanning work

3. **US Presidential Eras**: Match to the correct presidential period (973.922 = Kennedy, 973.926 = Reagan, etc.) and add letter suffix if it's commentary rather than narrative.

4. **Classify by Use**: Ignore publisher categorization. Ask: how would a serious reader USE this book?

Always respond with valid JSON in this exact format:
{
    "classification": "the SCS number (e.g., 901.2, 973.926S, 947.085F)",
    "explanation": "2-3 sentences explaining why this classification fits",
    "neighbors": "2-3 example books that would sit next to this on the shelf"
}`;

const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY
});

module.exports = async function handler(req, res) {
    console.log('[DEBUG] Received request:', req.method, req.url);
    console.log('[DEBUG] Request headers:', JSON.stringify(req.headers, null, 2));

    // Set CORS headers for all responses
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle CORS preflight
    if (req.method === 'OPTIONS') {
        console.log('[DEBUG] Handling OPTIONS preflight request');
        res.status(200).end();
        return;
    }

    // Only allow POST
    if (req.method !== 'POST') {
        console.log('[DEBUG] Method not allowed:', req.method);
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }

    console.log('[DEBUG] Request body:', JSON.stringify(req.body, null, 2));

    const { title, author, description } = req.body;

    if (!title) {
        console.log('[DEBUG] Missing title in request');
        res.status(400).json({ error: 'Book title is required' });
        return;
    }

    const userPrompt = `Classify this book using the Synoptic Classification System:

**Title:** ${title}
${author ? `**Author:** ${author}` : ''}
${description ? `**Description/Summary:** ${description}` : ''}

Respond with the JSON classification.`;

    console.log('[DEBUG] Sending request to Claude API...');
    console.log('[DEBUG] User prompt:', userPrompt);

    try {
        const message = await anthropic.messages.create({
            model: 'claude-sonnet-4-20250514',
            max_tokens: 1024,
            system: SCS_SYSTEM_PROMPT,
            messages: [
                { role: 'user', content: userPrompt }
            ]
        });

        console.log('[DEBUG] Claude API response received');
        console.log('[DEBUG] Stop reason:', message.stop_reason);
        console.log('[DEBUG] Usage:', JSON.stringify(message.usage));

        const responseText = message.content[0].text;
        console.log('[DEBUG] Raw response text:', responseText);

        // Parse JSON from response
        const jsonMatch = responseText.match(/\{[\s\S]*\}/);
        if (!jsonMatch) {
            console.error('[DEBUG] Failed to extract JSON from response');
            throw new Error('Could not parse classification response');
        }

        console.log('[DEBUG] Extracted JSON string:', jsonMatch[0]);

        const result = JSON.parse(jsonMatch[0]);
        console.log('[DEBUG] Parsed result:', JSON.stringify(result, null, 2));
        console.log('[DEBUG] Sending successful response');

        res.status(200).json(result);

    } catch (error) {
        console.error('[DEBUG] Classification error:', error.message);
        console.error('[DEBUG] Error stack:', error.stack);
        res.status(500).json({
            error: error.message || 'Failed to classify book'
        });
    }
};
