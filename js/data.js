/* ------------------------------------------------------------------
   All course content lives here. Edit this file to update the site.
   Anything in [brackets] is a placeholder still to be filled in.
------------------------------------------------------------------- */

// Small helpers so each question below fits on a few lines
function hl(prompt, guess, guessValue, real, realValue, explain) {
  return { prompt: prompt, a: { label: 'Our guess', value: guessValue, display: guess }, b: { label: 'Real figure', value: realValue, display: real }, explain: explain };
}
function pick(options, prompt) {
  return function (title, answer, explain) { return { title: title, prompt: prompt, options: options, answer: answer, explain: explain }; };
}
var whichFile = pick(['index.html', 'styles.css', 'script.js'], 'Which file would you open?');
var gitTerm = pick(['Fork', 'Clone', 'Commit', 'Push', 'Pull Request', 'Merge'], 'Which GitHub term is this?');
var stackType = pick(['Point tool', 'Platform', 'Suite', 'Hub', 'AI copilot / agent'], 'Which type of tool is this?');
var adTool = pick(['TikTok', 'Meta', 'LinkedIn', 'YouTube', 'X'], 'Which ad manager does this feature belong to?');

window.COURSE = {
  objectives: [
    { title: 'Map the digital marketing platform landscape', text: 'Tell the 10 platform types apart and match a brand case to the right one.' },
    { title: 'Read the Singapore market in numbers', text: 'Use 2026 market figures to size channels and back up recommendations.' },
    { title: 'Explain how AI is changing marketing work', text: 'Compare the old way and the AI way across targeting, search and production.' },
    { title: 'Prototype with vibe coding and martech tools', text: 'Build and test a simple marketing tool without a development team.' }
  ],

  glance: [
    ['Programme', 'MSc Marketing Management & Digital'],
    ['Campus', 'ESSEC Asia-Pacific, Singapore'],
    ['Instructor', 'Madina Kalyayeva'],
    ['Format', '5 sessions · lectures, a guest lecture, a game after each class'],
    ['Assessment', 'Final group project: omni-channel campaign pitch, 50% of the grade · [Other assessment details]']
  ],

  // open: true = game playable; false = shows the "locked" page
  sessions: [
    { n: 1, date: '2 Oct 2026', title: 'Digital Marketing Platforms in the AI Era', format: 'Lecture', speaker: 'Madina Kalyayeva', open: true,
      summary: "The 10 types of digital marketing platforms, Singapore's 2026 numbers, and how AI is changing targeting, search and production." },
    { n: 2, date: '9 Oct 2026', title: 'Vibe Coding & Martech', format: 'Guest lecture + lecture', speaker: 'LaunchLab · Madina Kalyayeva', open: true,
      summary: "LaunchLab's Design → Build → Deploy workflow (Claude Design, Claude Code, GitHub, Vercel), then the martech stack: point tools, platforms, suites, hubs and AI agents." },
    { n: 3, date: '23 Oct 2026', title: 'Media Buying & Campaign Objectives', format: 'Lecture + final project brief', speaker: 'Madina Kalyayeva', open: true,
      summary: 'Organic vs paid social, why media agencies still matter in the AI era, the six Meta campaign objectives, and the brief for the final omni-channel group project.' },
    { n: 4, date: '30 Oct 2026', title: 'Building an AI Marketing Team', format: 'Guest lecture', speaker: 'Nick Goh · Inspiro Consulting', open: true,
      summary: 'A lite agentic workflow with Claude: a planning team and a production team of AI roles, run live on a luxury social media launch brief.' },
    { n: 5, date: '[Date]', title: '[Session 5 topic]', format: 'Lecture', speaker: 'Madina Kalyayeva', open: false, summary: '' }
  ],

  // readings.prof[session] / readings.guest[session] — url: '#' until real links are added
  readings: {
    prof: {
      1: [
        { kind: 'Slides', title: 'Digital Marketing Platforms in the AI Era — lecture slides', meta: 'Madina Kalyayeva · PDF', url: '#', action: 'Open' },
        { kind: 'Required', title: '[Required reading title]', meta: '[Author, year · source]', url: '#', action: 'Read' },
        { kind: 'Further', title: '[Further reading title]', meta: '[Author, year · source]', url: '#', action: 'Read' }
      ],
      2: [
        { kind: 'Slides', title: 'Digital Marketing Tools & Their Use for Marketers — lecture slides', meta: 'Madina Kalyayeva · PDF', url: '#', action: 'Open' },
        { kind: 'Required', title: '[Required reading title]', meta: '[Author, year · source]', url: '#', action: 'Read' }
      ],
      3: [
        { kind: 'Slides', title: 'Media Buying & Campaign Objectives — lecture slides', meta: 'Madina Kalyayeva · PDF', url: '#', action: 'Open' },
        { kind: 'Brief', title: 'Final group project: omni-channel campaign', meta: 'Madina Kalyayeva · in the session 3 slides', url: '#', action: 'Open' }
      ],
      5: [{ kind: 'Slides', title: '[Session 5 lecture slides]', meta: 'Madina Kalyayeva · PDF', url: '#', action: 'Open' }]
    },
    guest: {
      2: [
        { kind: 'Talk', title: 'Vibe coding: Claude Design, Claude Code, GitHub and Vercel', meta: 'LaunchLab · PDF', url: '#', action: 'Open' },
        { kind: 'Example', title: 'LaunchLab example site', meta: 'essec-homework.vercel.app', url: 'https://essec-homework.vercel.app/', action: 'Open' }
      ],
      4: [
        { kind: 'Talk', title: 'Building an AI Marketing Team: a lite agentic workflow with Claude', meta: 'Nick Goh · Yellow Pages · PDF', url: '#', action: 'Open' }
      ]
    }
  },

  // Session notes shown under Guest lectures, keyed by session number
  sessionNotes: {
    3: {
      tab: 'prof',
      analysis: [
        "Madina opened with the difference between organic and paid social. Organic content builds the brand voice and community, but in 2026 a post only reaches around 3–5% of Instagram followers and about 1% on Facebook. Paid social rents that reach: boosted posts, targeted and retargeting campaigns, creator partnership ads (Spark Ads, Meta partnership ads) and AI-automated campaigns such as Advantage+, Smart+ and Performance Max. It works fast, but only as long as you keep funding it. The winning approach combines both.",
        "The money is real: social ad spend is projected at US$338.75B worldwide in 2026, and in Singapore it grew 15.2% to US$588M in 2025, about a fifth of total ad spend. AI can now build, buy and optimise whole campaigns, but it optimises for the platform's own metrics and lacks context, strategy and creativity. The best formula is AI plus human expertise.",
        "Media agencies are changing rather than disappearing. Omnicom completed its acquisition of IPG in November 2025, GroupM became WPP Media, and every holding company now runs its own AI platform (WPP Open, Publicis Marcel, Omnicom Omni). As Meta, Google and TikTok automate the buy, agencies move towards strategy, data, creative and measurement; even ChatGPT Ads in Southeast Asia are sold through the big agency groups.",
        "The second part covered Meta's six campaign objectives (Awareness, Traffic, Engagement, Leads, App Promotion, Sales) mapped to the funnel. The objective is the GPS of a campaign: it decides how the algorithm optimises delivery, who sees the ad and how performance is measured. The session ended with the brief for the final group project."
      ],
      takeaways: [
        'Organic alone is not enough: platforms are pay-to-play, and organic reach is a few percent of your followers.',
        'Paid social only delivers while you fund it, so combine it with organic content that builds the relationship.',
        'Choose the objective first. It tells the algorithm how to optimise, who to reach and how to measure success.',
        'Match the objective to the funnel: Awareness at the top, Traffic, Engagement and Leads in the middle, Sales and App Promotion at the bottom.',
        "Platform AI optimises for the platform's metrics. Humans check what actually drove incremental sales.",
        'Agencies are shifting from buying media to strategy, data, creative and measurement, on their own AI platforms.',
        'Keep optimising: test creatives and audiences, watch CTR, CPA and ROAS, and avoid the classic mistake of the wrong objective.'
      ],
      project: [
        'Create an omni-channel digital campaign for a hypothetical new product or service from a brand of your choice.',
        'Use at least 2 digital platforms plus at least one AI component, and explain the human decisions around it.',
        'Plan a simulated US$100,000 budget by platform and funnel stage, keeping 10–15% as a test-and-learn reserve.',
        'Include a SMART objective, personas, a 3-month timeline and KPIs per funnel stage, with a plan to prove impact.',
        'Pitch: 20 minutes plus 5 minutes of Q&A in December 2026. The project counts for 50% of the grade.',
        'My group: D4, presenting on 16 December 2026, 2:30–2:55 PM.'
      ],
      take: [
        "This session connects everything else in the course: once you know that organic reach is a few percent and that the objective drives the algorithm, every platform session becomes a media-planning decision. The Meta objectives framework is simple but very practical, because choosing the wrong objective is the mistake that wastes budget before a campaign even starts.",
        "The most interesting tension is AI versus the agency. Platforms now automate targeting and creative, yet the agencies are consolidating and building their own AI platforms instead of disappearing. For the final project, that means the value we can show is the human layer: a clear objective, a budget we can justify, and a way to prove that the campaign caused the results."
      ]
    },
    4: {
      speaker: {
        name: 'Nick Goh',
        role: 'CEO, Inspiro Consulting · CMO, Yellow Pages Singapore',
        photo: 'img/nick-goh.jpg',
        bio: "Marketing strategist, business leader and AI practitioner. Nick led agency teams at Lowe & Partners and Euro RSCG (now Havas), working with brands such as SAP, Red Hat, Prudential and UOB. He holds an MSc in Marketing from King's College London, is a Fellow of the Chartered Institute of Marketing, trains at SMU Academy and SUTD Academy, and judges the Effie Awards Singapore and the Singapore Media Awards."
      },
      analysis: [
        "Nick opened with the industry context: agencies are consolidating (WPP folding Ogilvy, VML and AKQA into one creative company) while companies move budget towards AI. His answer for marketers is not one big chatbot, but a small team of AI roles, each with a single job, working in Claude.",
        "The planning team has three roles. The Brief Writer drafts the brief from the project context, the Brief Validator critiques it in a fresh chat (objective, audience, message, metric), and the Strategist turns the validated brief into a one-page Big Idea. The production team follows: a Designer / Art Director for key visuals, a Copywriter for the messaging hierarchy and channel copy, and a Reviewer who checks brand voice and fit with the brief.",
        "He then ran the chain live on a Louis Vuitton social media launch brief for a handbag called Terra. Claude, connected to Gmail, found the brief in the inbox and pulled out the key information. Skills such as the Marketing Brief Builder and the Creative Review Scorer did the work, and the key visuals were made with Higgsfield. A human approves each step and saves it to the project knowledge base. The final Instagram story scored 5.7/10 on the creative scorer (BBH, Ogilvy and McCann lenses); a tighter, craft-focused shot of a hand on the clasp scored 6.7/10."
      ],
      takeaways: [
        'Brief AI like a strategist would: detailed context, a clear role and the expected output in every conversation.',
        'Split the work into roles (writer, validator, strategist, designer, copywriter, reviewer) instead of asking one chat to do everything.',
        'Validate in a fresh chat: a new conversation gives the brief "fresh eyes" and catches what the writer missed.',
        'Skills package a method once (brief builder, creative review scorer) so the knowledge can be pulled into any chat in seconds.',
        'Connectors and triggers make it agentic: Claude can read a brief from Gmail and run on a schedule. For technical teams, n8n and Relevance AI can build the same agents.',
        'Keep a human in the loop: you approve each handoff and decide what goes into the knowledge base.',
        'Luxury is about craft. The best-scoring visual showed the craft of the product, not the setting.',
        'Before you send a prompt, ask the AI how it would be received.'
      ],
      take: [
        "The strongest idea of the session is that the workflow matters more than the tool. Writing a brief, validating it, and then producing the work is exactly how a good agency runs; Nick simply gave each role to an AI and kept the approvals human. That makes the method easy to copy for a small marketing team or a student project.",
        "The live scores were the most honest part: the first creative only reached 5.7/10, and the better shot came from going back to the brand truth (craft) rather than from a better prompt. AI speeds up the drafts, but judgement on strategy and taste still decides the quality. The open question for me is cost and control: running six roles, connectors and image tools needs clear brand guidelines and someone accountable for what gets published."
      ]
    }
  },

  /* Games, keyed by session number.
     Round types:
       'choice'      — pick one option.   { title, prompt, options[], answer, explain }
       'oldai'       — Old way or AI way? { statement, answer: 'old' | 'ai', explain }
       'higherlower' — is B higher or lower than A?
                       { prompt, a: { label, value, display }, b: { label, value, display }, explain }
     Rounds with no questions yet are listed on the hub but skipped when playing. */
  games: {
    1: {
      secondsPerQuestion: 20,
      takeaway: 'Platforms evolve quickly — stay updated and adapt to new tools in an AI-driven industry.',
      rounds: [
        { name: 'Platform Matchmaker', desc: 'Match each case to one of the 10 platform types', type: 'choice', points: 1,
          how: 'Read the case, pick the platform type. Beat the clock.',
          questions: [
            { title: "Agoda's 2025 Singapore flight ads, made in-house with GenAI (Veo, Runway, Kling)", prompt: 'Which platform type does this belong to?',
              answer: 'Social Media Marketing',
              explain: 'The ads ran on YouTube, Meta and TikTok, so this was the paid social example. GenAI was how they were produced; social feeds were where they ran.' },
            { title: 'La Roche-Posay beauty influencers hosting live Instagram tutorials in Singapore', prompt: 'Which platform type does this belong to?',
              answer: 'Influencer & Creator Marketing',
              explain: "Trusted creators give social proof. Singapore's influencer spend grew 12.9% to US$119M in 2025." },
            { title: "Cathay Pacific's blog of travel guides to Asian destinations", prompt: 'Which platform type does this belong to?',
              answer: 'Content Marketing & GenAI Production',
              explain: "Useful organic content that builds long-term engagement, and it's the kind of content AI answer engines quote." },
            { title: 'Zalora\'s "Wishlist Reminders"', prompt: 'Which platform type does this belong to?',
              answer: 'Email, CRM & Messaging',
              explain: 'Retention built on 1st-party data: a personalised nudge back to the items customers saved.' },
            { title: 'Lazada Google Ads targeting "best Ramadan discounts" in Indonesia', prompt: 'Which platform type does this belong to?',
              answer: 'Search: SEO, SEM & GEO',
              explain: 'Paid search (SEM) captures high-intent demand at the moment people are looking.' },
            { title: 'WPP Media × GrabAds using anonymised transaction + location signals across 6 SEA markets', prompt: 'Which platform type does this belong to?',
              answer: 'Programmatic & Retail Media',
              explain: 'Retail media puts ads next to real purchase data, planned and bought at scale.' },
            { title: "Guardian's Singapore beauty influencers embedding referral links in their vlogs", prompt: 'Which platform type does this belong to?',
              answer: 'Affiliate & Social Commerce',
              explain: 'Referral links mean pay-for-performance, which is the core of affiliate marketing.' },
            { title: 'Nestlé × Lazada piloting the LazzieChat AI shopping assistant', prompt: 'Which platform type does this belong to?',
              answer: 'Mobile Marketing & Super-apps',
              explain: "An AI assistant inside the super-app's own shopping experience (SG, MY, ID – Apr 2026)." },
            { title: 'Singapore Airlines × Salesforce Agentforce for customer service', prompt: 'Which platform type does this belong to?',
              answer: 'Marketing Automation & AI Agents',
              explain: 'Agentforce-powered AI tools scale customer service around the clock (Mar 2025).' },
            { title: 'Lazada using Adobe Analytics across Southeast Asia', prompt: 'Which platform type does this belong to?',
              answer: 'Marketing Analytics & Measurement',
              explain: 'Enterprise analytics across SEA. The more AI buys media for you, the more you need independent proof of what worked.' }
          ] },
        { name: 'Higher or Lower: Singapore 2026', desc: 'Market figures, head to head', type: 'higherlower', points: 1,
          how: 'Is the real figure higher or lower than our guess? Use the buttons or your ↑ ↓ keys.',
          questions: [
            hl("Share of Singapore's population using social media", '75%', 75, '90.6%', 90.6, '5.33 million users: almost everyone is reachable on social.'),
            hl('Share of adults (18+) in Singapore using social media', '99%', 99, '95.3%', 95.3, 'Very high, but not quite everyone.'),
            hl('Hours a week Singaporeans spend on social media', '10 h', 10, '~17 h', 17, "Across 7.4 platforms: that's over 2 hours a day."),
            hl('Singaporeans who use ChatGPT every month', '1 in 10', 10, '1 in 3', 33, 'AI assistants are now a mainstream channel for discovery.'),
            hl('Share of AI referral traffic in Singapore that comes from ChatGPT', '50%', 50, '75%+', 75, 'ChatGPT dominates AI referrals, so track it as a traffic source in your analytics.'),
            hl("Online adults in Singapore worried about what's real vs fake online", '85%', 85, '71.1%', 71.1, 'Still a large majority. Trust is the new currency: label AI content and protect authenticity.'),
            hl('Mobile connections in Singapore, as a % of the population', '100%', 100, '166%', 166, '9.79M connections: many people have more than one (work phone, tablet, smartwatch).'),
            hl('Singapore influencer marketing spend in 2025', 'US$200M', 200, 'US$119M', 119, "Up 12.9%: smaller than you might think, but growing fast."),
            hl('Video & live commerce share of SEA platform e-commerce GMV in 2025', '20%', 20, '32%', 32, "20% was last year's share. Shoppable video and LIVE are growing quickly."),
            hl('Click rate on search results WITH an AI summary (vs 15% without)', '15%', 15, '8%', 8, "Pew, 2025. When the AI answers first, people click less, so brands now compete to be cited (GEO).")
          ] },
        { name: 'Old Way vs AI Way', desc: 'How AI changes each workflow', type: 'oldai', points: 1,
          how: 'Old way or AI way? Use the buttons or your ← → keys.',
          questions: [
            { statement: 'Picking audiences by location, job title, interests, age', answer: 'old', explain: 'Manual targeting: you chose the audience yourself.' },
            { statement: 'Meta Advantage+, Google PMax, TikTok Smart+ find the audience; your creative is the targeting', answer: 'ai', explain: 'AI buying picks audience, placement and budget. You set the goals, data and creative.' },
            { statement: 'Search engines list links that users click', answer: 'old', explain: 'The classic "ten blue links" era.' },
            { statement: 'AI Overviews and ChatGPT answer first; brands compete to be cited (GEO)', answer: 'ai', explain: 'Search → Answers. Generative Engine Optimisation is about being the brand the AI names.' },
            { statement: 'One ad made per campaign', answer: 'old', explain: 'One idea, one execution.' },
            { statement: 'GenAI turns one idea into hundreds of ad versions', answer: 'ai', explain: 'Production → GenAI: Veo, Runway, Kling, Firefly and TikTok Symphony version ideas in days.' },
            { statement: 'Ads only in feeds and search results', answer: 'old', explain: 'The traditional ad inventory.' },
            { statement: 'Ads in Google AI Overviews (SG, Dec 2025) and ChatGPT Ads (SG, Sep 2026)', answer: 'ai', explain: 'AI answers have become a new kind of ad space.' }
          ] },
        { name: 'Bonus Question', desc: 'One final question, double points', type: 'choice', points: 2,
          how: 'One last question — worth double.',
          questions: [
            { title: 'Which benchmarking metric was added as the 8th, for the AI era?', prompt: 'Choose one.',
              options: ['AI Visibility', 'Engagement', 'Awareness', 'Relationship'],
              answer: 'AI Visibility',
              explain: 'AI Visibility = share of AI answers mentioning your brand, AI-assistant referral traffic, and sentiment in AI summaries.' }
          ] }
      ],
      // percentage thresholds → badge
      badges: [
        { min: 80, name: 'AI-Era Marketing Pro', message: "Impressive. You'd brief an agency on AI-era platforms tomorrow." },
        { min: 50, name: 'Platform Strategist', message: 'Solid grasp of the landscape — review the readings to close the gaps.' },
        { min: 0, name: 'Platform Explorer', message: 'A good start. Revisit the session slides and play again.' }
      ]
    },

    2: {
      secondsPerQuestion: 20,
      takeaway: 'Pick tools that share clean data with each other — AI is only as good as what it can connect to. Then ship it: Design → Build → Deploy.',
      rounds: [
        { name: 'Which File Do I Open?', desc: 'HTML is the words, CSS the look, JS the behaviour', type: 'choice', points: 1,
          how: 'index.html, styles.css or script.js? Pick the file you would edit.',
          questions: [
            whichFile('Change the text on your main button', 'index.html', 'The words people read live in the HTML.'),
            whichFile('Make that button orange', 'styles.css', 'Colours, fonts and spacing belong to CSS.'),
            whichFile("Make the button do something when it's clicked", 'script.js', 'Behaviour (clicks, typing, submit) is JavaScript, using addEventListener.'),
            whichFile('Stack the layout into one column on a phone', 'styles.css', 'A CSS media query changes the layout on small screens.'),
            whichFile('Add a new heading and paragraph to the About section', 'index.html', 'New structure (headings, paragraphs) goes in HTML.'),
            whichFile('Show "Correct!" when someone submits an answer', 'script.js', "Reacting to a submit is behaviour, so it's JS."),
            whichFile('Change the font of every heading on the site', 'styles.css', 'One CSS rule like h1, h2 { font-family: … } changes them all.'),
            whichFile("Keep track of a player's score", 'script.js', 'Stored values (state) that change while you play live in JS, like the score in this game.')
          ] },
        { name: 'Git & Deploy Lingo', desc: 'Fork, clone, commit, push, pull request, merge', type: 'choice', points: 1,
          how: 'Match each description to the right GitHub term.',
          questions: [
            gitTerm("Make your own copy of someone else's repo on your GitHub account", 'Fork', 'You can change a fork without affecting the original.'),
            gitTerm('Copy a repo from GitHub down onto your computer to edit the files locally', 'Clone', 'Clone = GitHub → your laptop.'),
            gitTerm("Save a snapshot of your changes with a short note. It's only on your computer for now.", 'Commit', 'A commit saves locally, NOT on GitHub yet.'),
            gitTerm('Send the commits saved on your computer up to GitHub', 'Push', 'Push updates the online copy, and Vercel then redeploys your site.'),
            gitTerm('Propose your changes and ask teammates to review them first', 'Pull Request', 'A PR is a request for review. Others can comment, suggest, approve or reject.'),
            gitTerm('Approve a pull request and combine it into the main version', 'Merge', 'Merging brings the reviewed changes into main.'),
            gitTerm("You're working solo on your own branch and you're confident. Fastest way to get it online?", 'Push', 'Direct action, no waiting for approval.'),
            gitTerm('Each one of these gets its own Vercel preview link', 'Pull Request', 'Your team can see the changes live before merging.')
          ] },
        { name: 'Build the Martech Stack', desc: 'Point tools, platforms, suites, hubs and AI agents', type: 'choice', points: 1,
          how: 'Point tool, platform, suite, hub, or the new AI layer?',
          questions: [
            stackType('Mailchimp for email campaigns', 'Point tool', 'Built for one specific marketing function.'),
            stackType('Meltwater or Brand24 for social listening', 'Point tool', 'Best in class for one job, and most now have built-in AI features.'),
            stackType('Salesforce Data 360 (formerly Data Cloud), a customer data platform', 'Platform', 'Covers a broad range in 1–2 areas, offered as services through an API.'),
            stackType('Oracle Eloqua, Adobe Marketo Engage, HubSpot', 'Suite', 'Several products from one provider, with integration built in (and now AI agents like HubSpot Breeze).'),
            stackType('A central portal unifying operations, collaboration, data integration and analytics', 'Hub', "Those are the hub's 4 capabilities."),
            stackType('Meta Business Agent answering questions and closing sales on WhatsApp', 'AI copilot / agent', 'Agents take a goal, plan the steps and act across tools (1M+ businesses, Jun 2026).'),
            stackType('ChatGPT, Claude or Gemini drafting your briefs, copy and reports', 'AI copilot / agent', 'Copilots help marketers work faster, sitting on top of the rest of the stack.'),
            stackType('Pro: quick to set up for one well-defined task. Con: one more vendor to manage.', 'Point tool', 'Classic point-tool trade-off.'),
            stackType('Pro: the provider handles integration. Con: add-on modules may not be best in class.', 'Suite', 'Suites trade best-in-class features for compatibility.'),
            stackType('Pro: custom apps and extensions via API. Con: dependence on a single vendor.', 'Platform', 'Flexible, but slower to implement and risky to rely on.')
          ] },
        { name: 'Whose Ad Tool Is It?', desc: 'TikTok, Meta, LinkedIn, YouTube or X', type: 'choice', points: 1,
          how: 'Each feature belongs to one ad manager. Which one?',
          questions: [
            adTool('Symphony: AI makes and translates videos', 'TikTok', 'TikTok Symphony also generates avatars and localises videos.'),
            adTool('Spark Ads: boost organic posts directly from creators', 'TikTok', "It turns creators' best posts into ads."),
            adTool('Advantage+ Creative: GenAI makes image, text & video variations', 'Meta', "Part of Meta's Advantage+ automation."),
            adTool('Business Agent: an AI agent selling on WhatsApp, IG & Messenger', 'Meta', 'Launched June 2026.'),
            adTool('Accelerate: AI builds and auto-optimises B2B campaigns', 'LinkedIn', "LinkedIn's AI campaign builder."),
            adTool('Lead Gen Forms: capture leads without users leaving the app', 'LinkedIn', 'A favourite for B2B lead generation.'),
            adTool("Thought Leader Ads: promote your employees' posts in the feed", 'LinkedIn', 'Brand and employee voices, boosted.'),
            adTool("Peak Points (Gemini): ads placed right after a video's most engaging moment", 'YouTube', 'AI chooses the moment when attention is highest.'),
            adTool('Skippable in-stream: skip after 5 sec, pay on a 30-sec view or a click', 'YouTube', 'The classic YouTube format.'),
            adTool('Grok writes ad copy & visuals from your URL, then reviews results', 'X', 'Grok inside X Ads Manager.')
          ] },
        { name: 'Bonus Question', desc: 'One final question, double points', type: 'choice', points: 2,
          how: 'One last question — worth double.',
          questions: [
            { title: 'Every time you ____ to GitHub, Vercel rebuilds your live site automatically', prompt: 'Which word fills the blank?',
              options: ['Push', 'Commit', 'Clone', 'Fork'],
              answer: 'Push',
              explain: 'Connect your repo to Vercel once. After that, every push redeploys the site, so you never upload anything by hand again.' }
          ] }
      ],
      badges: [
        { min: 80, name: 'Vibe-Coding Martech Pro', message: 'Design → Build → Deploy, and you know what goes in the stack.' },
        { min: 50, name: 'Stack Builder', message: 'You can talk tools with developers and martech vendors.' },
        { min: 0, name: 'Git Hatchling', message: 'A good start. Replay the lingo round and it will stick.' }
      ]
    },
    3: {
      secondsPerQuestion: 20,
      takeaway: 'The objective is the GPS: it tells the algorithm who to reach, how to optimise and how to measure.',
      rounds: [
        { name: 'Pick the Objective', desc: "Match each brief to one of Meta's six campaign objectives", type: 'choice', points: 1,
          how: 'Read the brief, pick the Meta objective. Beat the clock.',
          questions: [
            { title: 'Graff promotes a new jewellery collection to stay top-of-mind with high-value audiences', prompt: 'Which objective fits best?', options: ['Awareness', 'Traffic', 'Engagement', 'Leads', 'App Promotion', 'Sales'], answer: 'Awareness', explain: 'Brand Awareness optimises delivery to people likely to remember the brand: top of the funnel.' },
            { title: 'Club21 runs a sale and wants people to land on its online store', prompt: 'Which objective fits best?', options: ['Awareness', 'Traffic', 'Engagement', 'Leads', 'App Promotion', 'Sales'], answer: 'Traffic', explain: 'Traffic drives users to a destination. Landing Page Views only count people who actually load the page.' },
            { title: 'A wellness influencer wants more shares on a workout video', prompt: 'Which objective fits best?', options: ['Awareness', 'Traffic', 'Engagement', 'Leads', 'App Promotion', 'Sales'], answer: 'Engagement', explain: 'Post engagement optimises for likes, comments and shares.' },
            { title: 'Elemis collects enquiries through an Instant Form, without people leaving Instagram', prompt: 'Which objective fits best?', options: ['Awareness', 'Traffic', 'Engagement', 'Leads', 'App Promotion', 'Sales'], answer: 'Leads', explain: 'Instant Forms let users submit their details inside Facebook or Instagram.' },
            { title: 'A new mobile game wants as many downloads as possible', prompt: 'Which objective fits best?', options: ['Awareness', 'Traffic', 'Engagement', 'Leads', 'App Promotion', 'Sales'], answer: 'App Promotion', explain: 'App Installs targets users likely to download; App Events and retention come next.' },
            { title: 'A multi-brand store shows dynamic catalogue ads to past customers for a private sale', prompt: 'Which objective fits best?', options: ['Awareness', 'Traffic', 'Engagement', 'Leads', 'App Promotion', 'Sales'], answer: 'Sales', explain: 'Catalogue Sales shows relevant products to people who already know you: bottom of the funnel.' },
            { title: 'A B2B software company wants qualified prospects for its sales team', prompt: 'Which objective fits best?', options: ['Awareness', 'Traffic', 'Engagement', 'Leads', 'App Promotion', 'Sales'], answer: 'Leads', explain: 'B2B companies usually prioritise Leads, while e-commerce brands focus on Sales.' },
            { title: 'A brand wants more RSVPs for its launch event', prompt: 'Which objective fits best?', options: ['Awareness', 'Traffic', 'Engagement', 'Leads', 'App Promotion', 'Sales'], answer: 'Engagement', explain: 'Event Responses is part of the Engagement objective.' }
          ] },
        { name: 'Higher or Lower: Paid Social', desc: 'Reach, spend and benchmarks from the session', type: 'higherlower', points: 1,
          how: 'Is the real figure higher or lower than our guess? Use the buttons or your ↑ ↓ keys.',
          questions: [
            hl('Share of Instagram followers an organic post reaches in 2026', '10%', 10, '~3–5%', 4, 'Organic reach is the slow game. Paid media is the fast track to visibility.'),
            hl('Share of Facebook followers an organic post reaches in 2026', '5%', 5, '~1%', 1, 'Even lower than Instagram: platforms are pay-to-play.'),
            hl('Worldwide social media ad spend projected for 2026', 'US$250B', 250, 'US$338.75B', 338.75, 'Statista projection.'),
            hl('Singapore social media ad spend in 2025', 'US$400M', 400, 'US$588M', 588, 'Up 15.2% on the year.'),
            hl("Social media's share of Singapore's total ad spend (US$2.8B)", '1/3', 33, '~1/5', 20, 'About a fifth of all ad spend in Singapore goes to social.'),
            hl('Growth of digital ad spend across Asia-Pacific in 2026', '5%', 5, '8.3%', 8.3, 'eMarketer: budgets move to social, retail media and CTV.'),
            hl('Average TikTok engagement rate in 2026', '1%', 1, '2.60%', 2.6, 'Socialinsider 2026 benchmarks: TikTok leads by far.'),
            hl('Average Instagram engagement rate in 2026', '1.5%', 1.5, '0.48%', 0.48, 'Facebook is at 0.15% and X at 0.12%.'),
            hl('Revenue of Omnicom after its IPG acquisition', 'US$15B', 15, '~US$26B', 26, "The world's largest marketing holding company since Nov 2025.")
          ] },
        { name: 'Paid or Organic?', desc: 'Sort the activity', type: 'choice', points: 1,
          how: 'Is this paid or organic social? Pick one.',
          questions: [
            { title: 'Posting content regularly without boosting it', prompt: 'Paid or organic?', options: ['Organic', 'Paid'], answer: 'Organic', explain: 'Unpaid posts, videos and stories that engage the audience naturally.' },
            { title: 'Employees sharing company updates with their own networks', prompt: 'Paid or organic?', options: ['Organic', 'Paid'], answer: 'Organic', explain: 'Employee advocacy is organic.' },
            { title: "Running Spark Ads on a creator's TikTok video", prompt: 'Paid or organic?', options: ['Organic', 'Paid'], answer: 'Paid', explain: 'Creator partnership ads put budget behind creator content.' },
            { title: 'Retargeting people who visited your website', prompt: 'Paid or organic?', options: ['Organic', 'Paid'], answer: 'Paid', explain: 'Retargeting campaigns are paid.' },
            { title: 'Reposting photos your customers shared (UGC)', prompt: 'Paid or organic?', options: ['Organic', 'Paid'], answer: 'Organic', explain: 'Sharing UGC strengthens community involvement, at no media cost.' },
            { title: 'Launching a Meta Advantage+ campaign', prompt: 'Paid or organic?', options: ['Organic', 'Paid'], answer: 'Paid', explain: 'AI-automated campaigns are paid. The platform decides where the money goes, so measure it yourself.' },
            { title: 'Replying to comments and DMs in an authentic way', prompt: 'Paid or organic?', options: ['Organic', 'Paid'], answer: 'Organic', explain: 'Community management is the foundation of organic social.' },
            { title: 'Boosting a post that is already performing well', prompt: 'Paid or organic?', options: ['Organic', 'Paid'], answer: 'Paid', explain: 'A boosted post is the simplest form of paid social.' }
          ] },
        { name: 'Bonus Question', desc: 'One final question, double points', type: 'choice', points: 2,
          how: 'One last question — worth double.',
          questions: [
            { title: 'In the final group project, how much of the US$100,000 budget should you keep as a test-and-learn reserve?', prompt: 'Choose one.',
              options: ['10–15%', '0%', '5%', '25–30%'], answer: '10–15%',
              explain: 'The brief asks for a 10–15% reserve, plus the benchmark CPM, CPC or CPA you assumed and where it came from.' }
          ] }
      ],
      badges: [
        { min: 80, name: 'Media Buying Pro', message: 'Right objective, right funnel stage, right budget.' },
        { min: 50, name: 'Funnel Planner', message: 'You know where each objective sits. Replay the numbers round.' },
        { min: 0, name: 'Organic Rookie', message: 'A good start. Remember: the objective is the GPS.' }
      ]
    },
    4: {
      secondsPerQuestion: 20,
      takeaway: 'Give each AI one job, validate with fresh eyes, keep the approvals human, and remember that luxury is craft.',
      rounds: [
        { name: 'Who Does What?', desc: 'Match the task to the right role in the AI marketing team', type: 'choice', points: 1,
          how: 'Read the task, pick the role. Beat the clock.',
          questions: [
            { title: 'Drafts the marketing brief from the project context', prompt: 'Which role is this?', options: ['Brief Writer', 'Brief Validator', 'Strategist', 'Designer / Art Director', 'Copywriter', 'Reviewer'], answer: 'Brief Writer', explain: 'The first step of the planning team. Output: a draft brief.' },
            { title: 'Critiques the brief in a fresh chat: objective, audience, message, metric', prompt: 'Which role is this?', options: ['Brief Writer', 'Brief Validator', 'Strategist', 'Designer / Art Director', 'Copywriter', 'Reviewer'], answer: 'Brief Validator', explain: 'New chat, fresh eyes. Output: a verdict and the top fixes.' },
            { title: 'Turns the validated brief into a one-page Big Idea', prompt: 'Which role is this?', options: ['Brief Writer', 'Brief Validator', 'Strategist', 'Designer / Art Director', 'Copywriter', 'Reviewer'], answer: 'Strategist', explain: 'The Strategist digests the brief and shapes the Big Idea.' },
            { title: 'Creates the key visuals, using connectors such as Higgsfield', prompt: 'Which role is this?', options: ['Brief Writer', 'Brief Validator', 'Strategist', 'Designer / Art Director', 'Copywriter', 'Reviewer'], answer: 'Designer / Art Director', explain: 'Output: key visual concepts and assets.' },
            { title: 'Builds the messaging hierarchy and adapts it channel by channel', prompt: 'Which role is this?', options: ['Brief Writer', 'Brief Validator', 'Strategist', 'Designer / Art Director', 'Copywriter', 'Reviewer'], answer: 'Copywriter', explain: 'Output: channel-by-channel copy that follows the messaging hierarchy.' },
            { title: 'Checks the work against brand voice and confirms it delivers the brief and Big Idea', prompt: 'Which role is this?', options: ['Brief Writer', 'Brief Validator', 'Strategist', 'Designer / Art Director', 'Copywriter', 'Reviewer'], answer: 'Reviewer', explain: 'The last step of the chain. Output: edits and sign-off.' }
          ] },
        { name: 'Old Way vs AI Way', desc: 'The classic agency workflow against the agentic one', type: 'oldai', points: 1,
          how: 'Old way or AI way? Use the buttons or your ← → keys.',
          questions: [
            { statement: 'An account manager reads the client email and retypes the brief', answer: 'old', explain: 'Manual handoff from inbox to brief.' },
            { statement: 'Claude, connected to Gmail, finds the brief and pulls out the key information', answer: 'ai', explain: 'The email trigger from the live demo: a connector does the reading.' },
            { statement: 'A creative director scores the work in a review meeting', answer: 'old', explain: 'Judgement in the room, from one point of view.' },
            { statement: 'A Creative Review Scorer skill rates the work through BBH, Ogilvy and McCann lenses', answer: 'ai', explain: 'A skill packages the scoring method so it can be run on any execution.' },
            { statement: 'Re-explaining your method at the start of every new chat', answer: 'old', explain: 'Without skills, the knowledge lives only in your head.' },
            { statement: 'A Marketing Brief Builder skill pulls the method into any chat in seconds', answer: 'ai', explain: 'Pull one piece of knowledge into the chat for quick productivity.' },
            { statement: 'Briefs written and reviewed over several days of meetings', answer: 'old', explain: 'The classic planning cycle.' },
            { statement: 'A scheduled task runs the brief builder every day at a set time', answer: 'ai', explain: 'Triggers and schedules are what make the workflow agentic.' }
          ] },
        { name: 'Workflow Check', desc: 'What Nick showed in the live demo', type: 'choice', points: 1,
          how: 'Choose the right answer.',
          questions: [
            { title: 'Why validate the brief in a new chat?', prompt: 'Choose one.', options: ['A fresh chat gives the brief fresh eyes', 'It is cheaper', 'The first chat cannot read files', 'Claude forgets after one answer'], answer: 'A fresh chat gives the brief fresh eyes', explain: 'The validator should not inherit the writer\'s assumptions.' },
            { title: 'Who approves each handoff and saves it to the knowledge base?', prompt: 'Choose one.', options: ['You', 'The Reviewer', 'The Strategist', 'Claude, automatically'], answer: 'You', explain: 'Step 4 of the handoff chain: the human stays in the loop.' },
            { title: 'Which agent builder suits a technical, technology-driven team?', prompt: 'Choose one.', options: ['n8n', 'Canva', 'Higgsfield', 'Gmail'], answer: 'n8n', explain: 'n8n for technical teams; Relevance AI is the other option Nick mentioned.' },
            { title: 'What did the first 3-frame Instagram story score?', prompt: 'Choose one.', options: ['5.7/10', '6.7/10', '8.2/10', '4.1/10'], answer: '5.7/10', explain: 'A solid start, not a great one. The scorer gave clear fixes.' },
            { title: 'Which execution scored higher (6.7/10)?', prompt: 'Choose one.', options: ['A close-up of a hand on the clasp', 'A wider desert shot', 'A portrait without the bag', 'A text-only post'], answer: 'A close-up of a hand on the clasp', explain: 'The tactile detail showed the craft of the bag.' },
            { title: 'In luxury, what do things tend to be about?', prompt: 'Choose one.', options: ['Craft', 'Discounts', 'Volume', 'Trends'], answer: 'Craft', explain: 'Luxury tends to refer to things that are crafted.' }
          ] },
        { name: 'Bonus Question', desc: 'One final question, double points', type: 'choice', points: 2,
          how: 'One last question — worth double.',
          questions: [
            { title: 'What did Nick suggest asking the AI before you send a prompt?', prompt: 'Choose one.',
              options: ['How would this prompt be received?', 'Which model are you?', 'Can you answer faster?', 'Can you write it shorter?'], answer: 'How would this prompt be received?',
              explain: 'Let the AI check your brief before it does the work.' }
          ] }
      ],
      badges: [
        { min: 80, name: 'AI Team Lead', message: 'You could run the whole chain, from brief to sign-off.' },
        { min: 50, name: 'Brief Validator', message: 'Solid. Replay the workflow round to lock it in.' },
        { min: 0, name: 'Prompt Apprentice', message: 'A good start. One role, one job, fresh eyes.' }
      ]
    }
  },

  // The 10 platform types — default options for 'choice' questions that don't list their own
  platformTypes: ['Social Media Marketing', 'Influencer & Creator Marketing', 'Content Marketing & GenAI Production', 'Email, CRM & Messaging', 'Search: SEO, SEM & GEO', 'Programmatic & Retail Media', 'Affiliate & Social Commerce', 'Mobile Marketing & Super-apps', 'Marketing Automation & AI Agents', 'Marketing Analytics & Measurement']
};
