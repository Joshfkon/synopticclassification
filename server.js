const express = require('express');
const Anthropic = require('@anthropic-ai/sdk');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname)));

const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY
});

const SCS_SYSTEM_PROMPT = `You are an expert librarian trained in the Synoptic Classification System (SCS), a modified Dewey Decimal system for private libraries.

## Core Principles

1. **Theory & History Integration**: The 900–908 block houses theoretical work transcending specific places/times.
2. **Regional Consolidation**: Everything about a specific place/time (political, military, diplomatic, economic) belongs in that region's section.
3. **Letter Suffixes**: Use letter suffixes for thematic material within chronological periods:
   - R = Reference/textbooks
   - V = Surveys (spanning works)
   - H = Historiography
   - P = Political commentary
   - E = Economic policy
   - T = Trade policy
   - S = Social policy
   - F = Foreign policy
   - C = Cultural/intellectual

## Key Classifications

**900-908 Theory Block:**
- 900 = Historiography & Philosophy of History
- 901.0 = General structural theory (Diamond, Koyama)
- 901.1 = Cliodynamics & cycles (Turchin, Goldstone)
- 901.2 = Collapse & decline (Tainter, Orlov)
- 901.3 = Institutional analysis (Olson, North, Acemoglu, Scott)
- 901.4 = Political economy of power (Kennedy, Smil, Landes, Ferguson, Yergin)
- 901.5 = Demographic models (Malthus, Clark)
- 903 = War Theory & Grand Strategy (Clausewitz, Sun Tzu, Luttwak, Liddell Hart)
- 904 = Geopolitics & International Systems (Mearsheimer, Zeihan, Brzezinski, Kaplan)
- 906 = State Formation & Institutions (Hobbes, Locke, Machiavelli, Fukuyama)
- 907 = Empire & Hegemony (Schumpeter, Ferguson's Colossus)
- 908 = Comparative & Bilateral Systems (Gaddis's Cold War, Nye)

**909.8x Contemporary World:**
- 909.85 = Demographic decline & aging
- 909.86 = Globalization & deglobalization
- 909.87 = Energy & resource transitions
- 909.89 = Futurism & projections

**576.8x Evolutionary Psychology:**
- 576.81 = Intelligence & psychometrics
- 576.82 = Human biodiversity
- 576.83 = Evolutionary psychology general
- 576.84 = Sociality, cooperation, kinship
- 576.85 = Sex, mating, pair-bonding
- 576.86 = Aggression, dominance, politics

**Regional History (examples):**
- 937 = Ancient Rome
- 940 = Europe
- 941 = British Isles
- 943 = Germany
- 947 = Russia/Soviet Union (947.085 = Post-Stalin Soviet, 947.086 = Post-Soviet)
- 949.5 = Byzantine/Greece
- 951 = China (951.07 = Reform era, 951.08 = Xi era)
- 952 = Japan
- 973 = United States (973R = reference, 973.922 = Kennedy, 973.926 = Reagan, etc.)

**US Presidential eras:**
- 973.921 = Truman/Eisenhower
- 973.922 = Kennedy
- 973.923 = Johnson
- 973.924 = Nixon/Ford
- 973.926 = Reagan
- 973.927 = Bush I
- 973.928 = Clinton
- 973.931 = Bush II
- 973.932 = Obama
- 973.933 = Trump
- 973.934 = Biden

## Decision Rules

1. If the book provides a theoretical LENS for interpreting other works → 900-908
2. If it's about a specific place/time → regional section (910-999)
3. If it's policy commentary within an era → add letter suffix (E, S, F, P, T, C)
4. If it's a reference/textbook → add R suffix
5. If it spans multiple eras → add V suffix or use base number
6. Evolutionary psychology → 576.8x (not scattered across 300s)
7. Military THEORY → 903; military HISTORY → regional
8. Political PHILOSOPHY → 906; political HISTORY → regional

When classifying, provide:
1. The SCS number
2. A brief explanation of why
3. 2-3 books that would be shelf neighbors`;

app.post('/api/classify', async (req, res) => {
    const { title, author, description } = req.body;

    if (!title) {
        return res.status(400).json({ error: 'Book title is required' });
    }

    const userPrompt = `Classify this book using the Synoptic Classification System:

**Title:** ${title}
${author ? `**Author:** ${author}` : ''}
${description ? `**Description/Summary:** ${description}` : ''}

Respond in this exact JSON format:
{
    "classification": "the SCS number (e.g., 901.2, 973.926S, 947.085F)",
    "explanation": "2-3 sentences explaining why this classification fits",
    "neighbors": "2-3 example books that would sit next to this on the shelf"
}`;

    try {
        const message = await anthropic.messages.create({
            model: 'claude-sonnet-4-20250514',
            max_tokens: 1024,
            system: SCS_SYSTEM_PROMPT,
            messages: [
                { role: 'user', content: userPrompt }
            ]
        });

        const responseText = message.content[0].text;
        
        // Parse JSON from response
        const jsonMatch = responseText.match(/\{[\s\S]*\}/);
        if (!jsonMatch) {
            throw new Error('Could not parse classification response');
        }
        
        const result = JSON.parse(jsonMatch[0]);
        res.json(result);

    } catch (error) {
        console.error('Classification error:', error);
        res.status(500).json({ 
            error: error.message || 'Failed to classify book' 
        });
    }
});

// Serve index.html for root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Synoptic Classification System running at http://localhost:${PORT}`);
});
