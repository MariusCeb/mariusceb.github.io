/* ─────────────────────────────────────────────────────────────
   i18n.js — Portfolio Ceban Marius
   EN / IT language toggle
   Usage: add data-i18n="key" or data-i18n-html="key" to any element
   ───────────────────────────────────────────────────────────── */

const TRANSLATIONS = {

  /* ══════════════════════════════════════════════════════════
     ENGLISH
  ══════════════════════════════════════════════════════════ */
  en: {

    /* ── INDEX ──────────────────────────────────────────── */
    'avail':         'AVAILABLE FOR WORK',
    'nav.projects':  'PROJECTS',
    'nav.about':     'ABOUT ME',
    'nav.contact':   'CONTACT ME',
    'nav.cv':        'DOWNLOAD CV',
    'm.projects':    'PROJECTS',
    'm.about':       'ABOUT ME',
    'm.contact':     'CONTACT ME',
    'm.cv':          'DOWNLOAD CV',
    'contact.close': '_ CLOSE',
    'contact.h2':    "Let's talk.",
    'contact.copy':  '_ COPY EMAIL ADDRESS',
    'contact.copied':'_ COPIED!',
    'contact.note':  'Available for freelance projects,<br>collaborations and full-time roles.',

    /* ── SHARED (multiple pages) ────────────────────────── */
    'back.top':       '↑ TOP',
    'lightbox.close': '✕ CLOSE',
    'next.label':     'NEXT PROJECT',
    'back.projects':  '← PROJECTS',
    'section.what':   'What',
    'section.why':    'Why',
    'section.outcome':'Outcome',
    'meta.role':      'Role',
    'meta.year':      'Year',
    'meta.stack':     'Stack',
    'meta.status':    'Status',
    'meta.github':    'GitHub',
    'meta.live':      'Live Site',
    'meta.view_src':  'View Source ↗',
    'meta.open_site': 'Open Site ↗',
    'outcome.h1':     'What shipped',
    'outcome.h2':     'What I learned',

    /* ── ABOUT ──────────────────────────────────────────── */
    'about.crumb':      'CEBAN MARIUS / <span>ABOUT ME</span>',
    'about.eyebrow':    'ABOUT ME',
    'about.subtitle':   'BASED IN ITALY — AVAILABLE WORLDWIDE',
    'about.bio.label':  'Bio',
    'about.bio.p1':     '<strong>I\'m Ceban Marius</strong>, a web developer and designer focused on building clean, intentional digital experiences. I care about the details — the spacing, the motion, the way things feel when you use them.',
    'about.bio.p2':     'I work across the full stack but my passion sits at the intersection of design and code. I believe good software should feel as good as it works.',
    'about.bio.p3':     'When I\'m not building things I\'m studying new patterns, experimenting with interfaces, and thinking about how technology shapes the way we live.',
    'about.skills.lbl': 'Skills',
    'about.skill.ui.n': 'UI Design',
    'about.skill.ui.d': 'Figma, design systems, prototyping',
    'about.skill.fe.n': 'Frontend',
    'about.skill.fe.d': 'HTML, CSS, JS, React, TypeScript',
    'about.skill.mo.n': 'Motion',
    'about.skill.mo.d': 'CSS animations, transitions',
    'about.skill.be.n': 'Backend',
    'about.skill.be.d': 'PHP, Laravel, Node.js, REST APIs',
    'about.skill.br.n': 'Branding',
    'about.skill.br.d': 'Identity, typography, color',
    'about.skill.st.n': 'Strategy',
    'about.skill.st.d': 'UX research, product thinking',
    'about.exp.lbl':    'Experience',
    'about.exp0.role':  'Computer Science degree',
    'about.exp1.role':  'Web Developer & Designer',
    'about.exp1.year':  '2025 — NOW',
    'about.exp2.role':  'Software Programmer',
    'about.proc.lbl':   'Process',
    'about.proc0.ttl':  'Discover',
    'about.proc0.dsc':  'Understanding the problem space, users, and goals before touching any code.',
    'about.proc1.ttl':  'Design',
    'about.proc1.dsc':  'Wireframing, prototyping, and defining the visual language with intentional constraints.',
    'about.proc2.ttl':  'Build',
    'about.proc2.dsc':  'Translating design into clean, semantic code. Every interaction considered.',
    'about.proc3.ttl':  'Ship',
    'about.proc3.dsc':  'Deploying with confidence. Performance, accessibility, and detail all accounted for.',
    'about.cta.lbl':    'NEXT',
    'about.cta.ttl':    'See my projects →',

    /* ── PROJECTS ───────────────────────────────────────── */
    'proj.pg.label':  '_ PROJECTS',
    'proj.h1':        'PROJECTS.',
    'proj.subtitle':  'SELECTED WORK',
    'proj.c0.tag':    'Web Design & Development',
    'proj.c1.tag':    'Web Design & Development',
    'proj.c2.tag':    'Web Design',
    'proj.c3.tag':    'Frontend Development',
    'proj.c4.tag':    'Full Stack Development',
    'proj.c5.tag':    'Full Stack Development',
    'proj.count':     '06 PROJECTS',

    /* ── DONKEY JOE ─────────────────────────────────────── */
    'dk.crumb':   'CEBAN MARIUS / PROJECTS / <span>DONKEY JOE</span>',
    'dk.tag':     '01 — Web Design & Development',
    'dk.lead':    'An animated web experience for a bar & music venue in Ravenna — canvas-rendered animated backgrounds, explosive letter intro animations, and an interactive jukebox system for live event nights.',
    'dk.role':    'Designer & Developer',
    'dk.status':  'Live ↗',
    'dk.what.p1': '<strong>Donkey Joe is a full web experience for a bar and music venue at Via Argirocastro 26, Ravenna.</strong> The site opens with a cinematic animated intro sequence — the venue name explodes onto screen letter by letter from different directions — before fading into the main navigation UI.',
    'dk.what.p2': 'Once the intro completes, users land on a dark, atmospheric interface with three main routes: the food & drink menu, upcoming events, and opening hours & contacts. A jukebox button lets patrons queue their song of the night during live events.',
    'dk.why.p1':  'The venue had no digital presence. Standard templates felt generic for a bar with this much identity — striped walls, deep reds, low-lit atmosphere. The site needed to feel like walking through the door, not browsing a listing.',
    'dk.why.p2':  'The brief was clear: <strong>build something that captures the energy of the place the moment you open it.</strong> That meant animation-first design, not an afterthought.',
    'dk.f1.ttl':  'Animated Canvas Background',
    'dk.f1.dsc':  'Vertical striped bands — black, deep red, and antracite grey — are rendered on a Canvas element. Each stripe has independent sinusoidal oscillation: two overlapping frequencies control lateral swing, and a slower pulse controls thickness. Colors are sampled pixel-by-pixel from the venue\'s real branding imagery.',
    'dk.f2.ttl':  'Explosive Letter Intro',
    'dk.f2.dsc':  'Each letter of "DONKEY JOE" enters from a unique direction — top-left, directly above, top-right — using CSS custom properties set per-letter at runtime. After a short hold, they explode outward in reverse, and the main UI slides in. The whole sequence runs in under 3 seconds with no library dependencies.',
    'dk.out.p1':  'A complete, production-ready site: main landing with animated intro, food & drink menu page, events archive, contacts & hours section, and a Jukebox feature (separate page) where patrons can browse and queue songs live during event nights. Fully responsive — mobile layout collapses to a large-button grid for fast venue-floor use.',
    'dk.out.p2':  'Recreating brand assets in code demands obsessive precision — I measured stripe proportions and sampled colors directly from the physical venue photography. I also learned that <strong>Canvas-based animation has hidden performance traps</strong>: clearing the entire canvas each frame at high refresh rates, and replicating stripes 3× to handle wide viewports without seams, required careful profiling.',
    'dk.next':    'Uà Art&Pizza →',

    /* ── PIZZERIA ───────────────────────────────────────── */
    'pz.crumb':   'CEBAN MARIUS / PROJECTS / <span>UÀ ART&amp;PIZZA</span>',
    'pz.tag':     '02 — Web Design & Development',
    'pz.lead':    'A digital menu app for a Neapolitan pizzeria in Ravenna — 60+ pizzas across 9 categories, smart AND-logic ingredient filtering, sticky category navigation, and delivery info. Zero frameworks, instant load.',
    'pz.role':    'Designer & Developer',
    'pz.status':  'Live ↗',
    'pz.what.p1': '<strong>Uà Art&amp;Pizza is a Neapolitan pizzeria on Via Giuseppe Vitale 6, Ravenna.</strong> Their menu is extensive — over 60 items across 9 sections, from fried starters and classic Margherita to the signature "Pizze di Dante" triptych (Inferno, Purgatorio, Paradiso) and the chef\'s pick "La Divina Commedia".',
    'pz.what.p2': 'The digital menu replaces a static PDF with a scrollable, filterable, mobile-first experience. Each pizza card shows name, base sauce, toppings, and price. Delivery info and allergen notices are embedded directly in the page — no separate documents needed.',
    'pz.why.p1':  'PDF menus are frustrating on mobile, impossible to search, and slow to update. The pizzeria needed a solution that loaded in a second, worked offline-ready, and could be updated directly in HTML without a CMS or subscription.',
    'pz.why.p2':  'The ingredient filter addresses a real problem: <strong>customers with dietary restrictions or preferences have no way to quickly find compatible pizzas from a 60-item list.</strong> The AND-logic filter solves this — select "Tartufo" and "Burrata" and you instantly see only the pizzas containing both.',
    'pz.f1.ttl':  'AND-Logic Ingredient Filter',
    'pz.f1.dsc':  'A slide-up filter panel groups ingredients by type (base, dairy, meat, vegetables, fish). Selecting multiple ingredients shows only pizzas that contain all of them simultaneously — not just any one. Built in vanilla JS with fuzzy substring matching to handle variations like "Grana in Cottura" matching a filter for "Grana".',
    'pz.f2.ttl':  'Sticky Category Navigation',
    'pz.f2.dsc':  'A fixed secondary nav bar below the header contains scrollable category pills. As the user scrolls, an IntersectionObserver tracks the current section and highlights the matching pill, auto-scrolling it into view within the nav bar if off-screen. Clicking a pill smooth-scrolls to the section with correct offset for the double fixed header.',
    'pz.out.p1':  'A complete digital menu with 9 sections (Friggitoria, I Classici, Le Amici, Le Artistiche, Le Pizze di Dante, Calzoni Fritti, Focacce, Dolcezze, Bevande), an extras/additions grid, delivery banner, allergen notice, and footer. The ingredient filter covers 30+ filterable ingredients across 6 categories. No backend, no build step, instant loading on any network.',
    'pz.out.p2':  'IntersectionObserver-based nav tracking requires careful accounting for multi-layer fixed headers — offset calculations must factor in both the top nav and the category strip. I also learned that <strong>AND-logic filtering is significantly more useful than OR</strong> for ingredient-based selection: users want to find what fits all their constraints, not anything that matches any one of them.',
    'pz.next':    'Serenamente →',

    /* ── SERENAMENTE ────────────────────────────────────── */
    'sr.crumb':   'CEBAN MARIUS / PROJECTS / <span>SERENAMENTE</span>',
    'sr.tag':     '03 — Web Design',
    'sr.lead':    'A full landing page for a hair salon in Ravenna — services showcase, interactive mosaic gallery, booking CTA, embedded Google Maps, and a mobile-first experience with a full-screen overlay menu and floating call-to-action bar.',
    'sr.role':    'Designer & Developer',
    'sr.status':  'Live ↗',
    'sr.what.p1': '<strong>Serenamente is a hair salon — parrucchieri donna &amp; uomo — located at Via Bovini 28, Ravenna.</strong> The website presents the salon\'s identity through a warm, typographically rich aesthetic using Cormorant Garamond (serif) paired with Jost (sans-serif): a calm, elevated tone that reflects the brand name itself.',
    'sr.what.p2': 'The site covers the full discovery-to-booking journey: a full-screen hero with the salon tagline, a 6-service grid with pricing, a photo gallery preview mosaic linking to a dedicated gallery page, an "About" section with a brand quote, a booking CTA with phone and hours, and an embedded live Google Maps view.',
    'sr.why.p1':  'The salon relied entirely on word-of-mouth and an Instagram account. Potential new clients had no way to browse services, check prices, or find the address without messaging directly. A professional web presence was overdue.',
    'sr.why.p2':  'The design needed to convey <strong>calm, feminine sophistication</strong> without feeling cold. Warmth came from the terracotta accent colour, soft cream backgrounds, and the Cormorant Garamond typeface. Functionality came from making the phone number and booking CTA impossible to miss on mobile.',
    'sr.f1.ttl':  'Mosaic Gallery Preview',
    'sr.f1.dsc':  'A 6-cell CSS grid mosaic with asymmetric spanning — the first cell spans 2 columns and 2 rows for visual hierarchy. Each cell has hover zoom on the photo, a gradient overlay, and a label that fades in on hover. Clicking any cell navigates to the dedicated full gallery page. Placeholder divs are shown if images are missing — no broken layouts.',
    'sr.f2.ttl':  'Mobile-First Experience',
    'sr.f2.dsc':  'On mobile, the desktop nav is replaced by an animated hamburger button that triggers a full-screen overlay menu with staggered link entrance animations. A persistent floating bar at the bottom of the screen shows the salon\'s phone number and a "Prenota" button — one tap to call, always visible. This was the most impactful UX addition for a physical-service business.',
    'sr.out.p1':  'Full landing page (hero, services grid, gallery preview, about, booking, map, social, footer) plus a separate dedicated gallery page. IntersectionObserver-powered scroll animations throughout. Fully responsive — separate mobile menu overlay, floating bottom CTA bar, and adapted grid layouts at 480px and 900px breakpoints.',
    'sr.out.p2':  'Designing for a service business with a female-skewing clientele requires a fundamentally different visual language than a tech product. Serif typography, warm colours, generous whitespace, and soft transitions communicate trust and care — <strong>not just aesthetics, but conversion signals</strong>. The floating mobile CTA bar, added late in development, dramatically simplified the path from discovery to contact.',
    'sr.next':    'Space Blog →',

    /* ── SPACE BLOG ─────────────────────────────────────── */
    'sb.crumb':   'CEBAN MARIUS / PROJECTS / <span>SPACE BLOG</span>',
    'sb.tag':     '04 — Frontend Development',
    'sb.lead':    'A 3D z-axis tunnel navigation experiment — sections are stacked along the Z axis in CSS perspective space. Scrolling moves the camera forward through them, creating a "flying through space" effect with no libraries or frameworks.',
    'sb.role':    'Developer',
    'sb.status':  'Prototype ↗',
    'sb.what.p1': '<strong>Space Blog is a browser-based 3D navigation experiment.</strong> Instead of the standard vertical page scroll, sections are positioned at fixed intervals along the Z axis using CSS <code>translateZ</code> — at 0, −1000px, −2000px, and −3000px respectively. A JavaScript scroll listener advances the <code>perspective</code> container\'s camera position, creating the illusion of flying through a tunnel in space.',
    'sb.what.p2': 'The four sections contain: a hero title with Michroma monospace typeface, an image + text side-by-side content section, a vanilla JS image carousel, and a footer. Each section transitions smoothly with CSS easing on <code>transform</code> and <code>opacity</code> as it enters and exits the viewport.',
    'sb.why.p1':  'The goal was a pure CSS 3D challenge — no GSAP, no Three.js, no ScrollMagic. Could a convincing 3D page-travel effect be achieved using only browser-native perspective transforms and a handful of JavaScript lines?',
    'sb.why.p2':  '<strong>The constraint was the point.</strong> Understanding the browser\'s 3D rendering pipeline — stacking contexts, <code>transform-style: preserve-3d</code>, perspective origins, and the interaction between <code>overflow</code> and 3D — required reading the CSS spec rather than library docs.',
    'sb.f1.ttl':  'Z-Axis Perspective Navigation',
    'sb.f1.dsc':  'Sections are absolutely positioned at <code>translateZ(0)</code>, <code>translateZ(-1000px)</code>, <code>translateZ(-2000px)</code>, and <code>translateZ(-3000px)</code> within a container with <code>perspective: 1000px</code> and <code>transform-style: preserve-3d</code>. Scroll events update the container\'s Z-translation to move the camera forward. Each section box-shadows glow white for depth cueing.',
    'sb.f2.ttl':  'Vanilla JS Image Carousel',
    'sb.f2.dsc':  'Section 3 contains a custom carousel built without any library. The wrapper uses <code>display: flex</code> with <code>width: 300%</code> for three images. CSS <code>transition: transform</code> handles the slide animation. Previous/next buttons call a <code>moveSlide()</code> function that updates a current-index variable and translates the wrapper by multiples of <code>100% / numSlides</code>.',
    'sb.out.p1':  'A working 4-section 3D tunnel: fixed navbar, hero section with large Michroma title, image + description section, image carousel section, and footer. Fully responsive with perspective values adapted at 1024px, 768px, and 480px breakpoints. The effect runs at smooth 60fps on desktop without any canvas or WebGL.',
    'sb.out.p2':  'CSS 3D effects are deceptively fragile. <strong>Any ancestor element with <code>overflow: hidden</code> collapses the 3D rendering context entirely</strong>, flattening all children. Similarly, <code>transform-style: preserve-3d</code> must be set on every element in the ancestor chain — not just the root container. These are the kinds of bugs that documentation glosses over but cost hours of debugging.',
    'sb.next':    'UniShare →',

    /* ── UNISHARE ───────────────────────────────────────── */
    'us.crumb':   'CEBAN MARIUS / PROJECTS / <span>UNISHARE</span>',
    'us.tag':     '05 — Full Stack Development',
    'us.lead':    'A university collaboration platform — virtual classrooms with invite codes, dual-type post system (free materials vs. paid tutoring), role-based access control, and a subscription layer with mock payment flow. Built with Laravel, React, and Inertia.js.',
    'us.role':    'Full Stack Developer',
    'us.status':  'Portfolio Project ↗',
    'us.what.p1': '<strong>UniShare is an academic resource-sharing and collaboration platform for university students.</strong> Its tagline — "Connetti, Collabora, Riuscisci" (Connect, Collaborate, Succeed) — captures the core loop: students join virtual classrooms via a 6-character invite code, then share study materials for free or find paid tutoring sessions posted by classroom admins.',
    'us.what.p2': 'The platform distinguishes between two user roles. Regular students can upload notes, PDFs, and files (up to 10MB) as free "Materiale Condiviso" posts. Classroom admins (teachers or tutors) can additionally post "Annunci a Pagamento" — priced announcements for paid sessions or premium materials. All posts are searchable by title/content and sortable by date or price.',
    'us.why.p1':  'Students typically rely on fragmented channels — WhatsApp groups, shared Google Drive folders, Telegram threads — to exchange materials. These scatter resources across multiple platforms with no structure, no search, and no authority system to distinguish reliable sources from noise.',
    'us.why.p2':  'UniShare centralizes this in one authenticated space. <strong>The invite-code classroom model mirrors how university courses actually work</strong> — a professor creates the room, students join, and materials flow in both directions. The subscription layer adds a monetization dimension, simulating how a real platform would sustain itself.',
    'us.f1.ttl':  'Classroom System',
    'us.f1.dsc':  'Admins create virtual classrooms with a name and description. On creation, a unique 6-character alphanumeric join code is auto-generated. Users join by entering this code from the dashboard. Each classroom has its own post feed. Admins can edit or delete classrooms and posts via modal dialogs — non-admins can only view and create free posts.',
    'us.f2.ttl':  'Inertia.js Full Stack Bridge',
    'us.f2.dsc':  'Rather than building a separate REST API, UniShare uses Inertia.js to pass server-rendered Laravel data directly as React component props. This eliminates the need for API routes, fetch calls, and client-side state management for server data — Laravel controllers return Inertia responses that hydrate React pages as if they were standard server-rendered views, but with SPA navigation.',
    'us.out.p1':  'Full-stack application with: complete authentication system (login, register, password reset, email verification, profile settings), classroom CRUD with invite-code join flow, dual post type system with file uploads (stored via Laravel\'s disk abstraction), role-based access control via <code>isAdmin</code> flag, subscription middleware that gates access and redirects expired users to a mock payment page, CV validation loading screen, and a polished React marketing landing page with animated statistics using <code>react-countup</code> and IntersectionObserver scroll triggers.',
    'us.out.p2':  'Inertia.js is a genuinely different mental model for full-stack development — <strong>it collapses the frontend/backend boundary without sacrificing either side.</strong> Laravel handles routing, auth, validation, and data — React handles rendering and interactivity — and Inertia connects them transparently. The result is less boilerplate than a traditional SPA with a separate API, and more reactivity than a classic server-rendered app. For solo projects at this scope, it\'s the right tool.',
    'us.next':    'Flavory →',

    /* ── FLAVORY ─────────────────────────────────────── */
    'fl.crumb':   'CEBAN MARIUS / PROJECTS / <span>FLAVORY</span>',
    'fl.tag':     '06 — Full Stack Development',
    'fl.lead':    'A GPT-4o powered food-wine pairing SaaS — AI sommelier with local Italian DOC/DOCG recommendations, freemium usage model with live Stripe subscription at €9.99/month, searchable pairing history, and a full marketing landing page. Built with Node.js, Express, and the OpenAI API.',
    'fl.role':    'Designer & Developer',
    'fl.status':  'Live',
    'fl.what.p1': '<strong>Flavory is a full-stack SaaS application that acts as a personal AI sommelier.</strong> The public face is a polished marketing landing page with three sections — Funzionalità, Come funziona, Prezzi — built in Playfair Display with a crimson-cream palette that communicates premium and editorial before the user clicks anything. The navbar greets logged-in users by name and offers a direct "Vai all\'app →" CTA.',
    'fl.what.p2': 'Inside the app, users access a three-tab dashboard: Sommelier, Cronologia, and Abbonamento. The core feature presents two modes — "Ho il cibo" (I have the food, suggest a wine) and "Ho il vino" (I have the wine, suggest food). The user describes their meal in free text, enters their city or region for local recommendations, and sets a per-bottle budget via a slider from €5 to €150+. GPT-4o processes the input and returns named wines with DOC/DOCG appellations, pairing rationale, tasting notes, local availability by specific supermarket chain (Coop, Conad, Esselunga), and price estimates.',
    'fl.what.p3': 'The Cronologia tab stores the full history of past queries — each entry shows the dish, the wine preview, and a timestamp, and clicking it reopens the full result in the sommelier. A persistent status bar below the navbar shows remaining free requests as a dot indicator, with a "Sblocca illimitato" button that triggers the Stripe Checkout when the free tier is exhausted.',
    'fl.why.p1':  'The idea came from a real frustration: standing in a wine aisle with no idea which bottle pairs with what you are cooking tonight. Online guides are generic, sommelier courses take months, and asking supermarket staff is inconsistent. GPT-4o changes the calculus — it has enough vinology and Italian regional knowledge to give specific, credible recommendations in seconds.',
    'fl.why.p2':  'The local dimension was critical. Italian wine culture is intensely regional — a Sangiovese di Romagna from Cantina San Patrignano is a completely different recommendation from a generic Chianti. <strong>Naming specific DOC/DOCG producers and pointing to where they are sold nearby makes the output actually actionable</strong>, not just educational. A pairing you can act on tonight is worth infinitely more than one you cannot.',
    'fl.why.p3':  'The freemium model — 3 free queries, then €9.99/month via Stripe — was a deliberate product decision. It lowers the barrier to try, lets the quality of the AI output speak for itself, and creates a natural conversion moment. Building a real payment flow, not a mock, was as much about learning product architecture as about the feature itself.',
    'fl.f1.ttl':  'Typography & Design System',
    'fl.f1.dsc':  'Flavory\'s visual identity is built on a deliberate double-serif system. Playfair Display serves as the primary display typeface — its high-contrast thick-thin strokes and editorial character communicate the same sensibility found on a premium wine label or a fine-dining menu. The palette is equally restrained: deep crimson (#b22222) as the sole accent against a near-white cream (#fff2f2). This near-monochromatic warmth carries through every interactive surface: the custom dot cursor, text-selection highlight, login button, CTA background, hover states, and inline text emphasis. The result is a tight system — the sensation that every element was designed by the same hand, for the same purpose. The marketing sections reinforce this language at scale: the "Perché Flavory" feature list, the dark "Tre passi" section with its wave separator, and the dark CTA footer all speak the same visual dialect.',
    'fl.f2.ttl':  'AI Sommelier Interface',
    'fl.f2.dsc':  'The sommelier form collects three contextual inputs: a free-text meal description (anything from "pizza margherita" to a full multi-course menu), a city or region for local wine sourcing, and a per-bottle budget set via a range slider from €5 to €150+. A mode toggle at the top flips the pairing direction — "Ho il cibo" sends food → wine, "Ho il vino" sends wine → food. A camera icon in the textarea allows photo input for the meal. The left panel occupies roughly a third of the screen width; the right two-thirds is the output area, which shows a subtle wine-glass icon in its empty state and fills with the full recommendation when a query is submitted. The freemium counter sits in a persistent bar just below the tab navigation, showing remaining free requests as red dots alongside the "Sblocca illimitato" upsell button.',
    'fl.f3.ttl':  'GPT-4o Powered Recommendations',
    'fl.f3.dsc':  'The backend constructs a structured prompt from the user\'s three inputs — meal, location, budget — and sends it to the OpenAI GPT-4o API. The response is rendered in the right panel as a structured wine recommendation: each suggested wine includes its full DOC/DOCG appellation and producer name, a "Perché quest\'abbinamento" pairing rationale section, tasting characteristics, a "Dove trovarlo" section naming specific local supermarkets and enoteche, and a price estimate. For a query of "cappelletti al ragù" from Ravenna at €30, the model recommends a Sangiovese di Romagna Superiore DOC from Cantina San Patrignano — a real local producer. Getting this quality of output consistently required careful prompt engineering: the region parameter anchors the model to real Italian producers and prevents hallucinated appellations.',
    'fl.f4.ttl':  'Freemium Model & Stripe Subscription',
    'fl.f4.dsc':  'New users receive 3 free AI queries — tracked server-side and displayed in the UI as a dot indicator ("3 richieste gratuite rimaste"). When the limit is reached, "Sblocca illimitato" triggers a hosted Stripe Checkout session: branded with the Flavory name, priced at €9,99/month ("Flavory Mensile — addebito mensile"), with full card entry, promo code support, and Stripe Link for one-click payment. The integration is built server-side through Express: the backend creates the Checkout Session and returns the hosted URL — no card data ever touches the application server. Successful payment upgrades the user\'s subscription status in the database, lifting the request cap entirely.',
    'fl.out.p1':  'A complete SaaS product from landing to checkout: a marketing landing page with Perché Flavory feature list (Sommelier AI powered by GPT-4o, Locale & Regionale DOC/DOCG recommendations, Anche al Supermercato sourcing), a "Tre passi verso il vino perfetto" how-it-works section, a dark CTA footer, and a full footer with product, account, and legal columns. Inside the authenticated app: three-tab dashboard (Sommelier, Cronologia, Abbonamento), dual food/wine pairing mode, city and budget inputs, GPT-4o recommendation output with named producers and local sourcing, timestamped pairing history that reopens in the sommelier with one click, freemium request counter with live dot indicators, and a live Stripe Checkout subscription at €9.99/month. Authentication via JWT and bcryptjs on a Node.js/Express backend. Fully responsive — the entire app adapts to mobile with the same three-tab structure.',
    'fl.out.p2':  'The most technically demanding part was not the backend or the payment flow — it was the prompt. A wine recommendation needs specific structure to be useful: appellation, producer, pairing rationale, tasting notes, where to buy, price. Getting GPT-4o to produce all of this reliably — without hallucinating fake producers or inventing non-existent DOC labels — required significant iteration. <strong>The region parameter was the key unlock:</strong> anchoring the model to a specific Italian city forced it to name real local producers and actual supermarkets, transforming the output from generic wine-guide content into something genuinely actionable.',
    'fl.out.p3':  'The freemium design also taught me that paywall placement is a product decision with real consequences. Too early and you lose users before they experience the value; too late and the conversion moment feels abrupt. Three free queries was the number that felt right — enough to get one full meal recommendation and experience the quality, but not so many that there is no reason to subscribe. These are the kinds of decisions that have no technical solution; they require thinking like a product designer, not just a developer.',
    'fl.next':    'Donkey Joe →',
  },

  /* ══════════════════════════════════════════════════════════
     ITALIANO
  ══════════════════════════════════════════════════════════ */
  it: {

    /* ── INDEX ──────────────────────────────────────────── */
    'avail':         'DISPONIBILE',
    'nav.projects':  'PROGETTI',
    'nav.about':     'CHI SONO',
    'nav.contact':   'CONTATTI',
    'nav.cv':        'SCARICA CV',
    'm.projects':    'PROGETTI',
    'm.about':       'CHI SONO',
    'm.contact':     'CONTATTI',
    'm.cv':          'SCARICA CV',
    'contact.close': '_ CHIUDI',
    'contact.h2':    'Parliamo.',
    'contact.copy':  '_ COPIA INDIRIZZO EMAIL',
    'contact.copied':'_ COPIATO!',
    'contact.note':  'Disponibile per progetti freelance,<br>collaborazioni e posizioni full-time.',

    /* ── SHARED ─────────────────────────────────────────── */
    'back.top':       '↑ SU',
    'lightbox.close': '✕ CHIUDI',
    'next.label':     'PROGETTO SUCCESSIVO',
    'back.projects':  '← PROGETTI',
    'section.what':   'Cosa',
    'section.why':    'Perché',
    'section.outcome':'Risultato',
    'meta.role':      'Ruolo',
    'meta.year':      'Anno',
    'meta.stack':     'Stack',
    'meta.status':    'Stato',
    'meta.github':    'GitHub',
    'meta.live':      'Sito Web',
    'meta.view_src':  'Vedi Codice ↗',
    'meta.open_site': 'Apri Sito ↗',
    'outcome.h1':     'Cosa è stato rilasciato',
    'outcome.h2':     'Cosa ho imparato',

    /* ── ABOUT ──────────────────────────────────────────── */
    'about.crumb':      'CEBAN MARIUS / <span>CHI SONO</span>',
    'about.eyebrow':    'CHI SONO',
    'about.subtitle':   'BASATO IN ITALIA — DISPONIBILE OVUNQUE',
    'about.bio.label':  'Bio',
    'about.bio.p1':     '<strong>Sono Ceban Marius</strong>, un web developer e designer concentrato sulla creazione di esperienze digitali pulite e intenzionali. Curo i dettagli — la spaziatura, il movimento, la sensazione quando le usi.',
    'about.bio.p2':     'Lavoro su tutto lo stack ma la mia passione risiede all\'intersezione tra design e codice. Credo che un buon software debba essere bello da usare quanto funzionare bene.',
    'about.bio.p3':     'Quando non costruisco cose studio nuovi pattern, sperimento con le interfacce e rifletto su come la tecnologia plasma il modo in cui viviamo.',
    'about.skills.lbl': 'Competenze',
    'about.skill.ui.n': 'UI Design',
    'about.skill.ui.d': 'Figma, design system, prototipazione',
    'about.skill.fe.n': 'Frontend',
    'about.skill.fe.d': 'HTML, CSS, JS, React, TypeScript',
    'about.skill.mo.n': 'Motion',
    'about.skill.mo.d': 'Animazioni CSS, transizioni',
    'about.skill.be.n': 'Backend',
    'about.skill.be.d': 'PHP, Laravel, Node.js, REST API',
    'about.skill.br.n': 'Branding',
    'about.skill.br.d': 'Identità visiva, tipografia, colore',
    'about.skill.st.n': 'Strategia',
    'about.skill.st.d': 'Ricerca UX, product thinking',
    'about.exp.lbl':    'Esperienza',
    'about.exp0.role':  'Laurea in Informatica',
    'about.exp1.role':  'Web Developer & Designer',
    'about.exp1.year':  '2025 — OGGI',
    'about.exp2.role':  'Programmatore Software',
    'about.proc.lbl':   'Processo',
    'about.proc0.ttl':  'Scoperta',
    'about.proc0.dsc':  'Capire lo spazio del problema, gli utenti e gli obiettivi prima di scrivere codice.',
    'about.proc1.ttl':  'Design',
    'about.proc1.dsc':  'Wireframing, prototipazione e definizione del linguaggio visivo con vincoli intenzionali.',
    'about.proc2.ttl':  'Sviluppo',
    'about.proc2.dsc':  'Tradurre il design in codice pulito e semantico. Ogni interazione considerata.',
    'about.proc3.ttl':  'Rilascio',
    'about.proc3.dsc':  'Deploy con fiducia. Performance, accessibilità e cura del dettaglio.',
    'about.cta.lbl':    'SUCCESSIVO',
    'about.cta.ttl':    'Vedi i miei progetti →',

    /* ── PROJECTS ───────────────────────────────────────── */
    'proj.pg.label':  '_ PROGETTI',
    'proj.h1':        'PROGETTI.',
    'proj.subtitle':  'LAVORI SELEZIONATI',
    'proj.c0.tag':    'Web Design & Sviluppo',
    'proj.c1.tag':    'Web Design & Sviluppo',
    'proj.c2.tag':    'Web Design',
    'proj.c3.tag':    'Sviluppo Frontend',
    'proj.c4.tag':    'Sviluppo Full Stack',
    'proj.c5.tag':    'Sviluppo Full Stack',
    'proj.count':     '06 PROGETTI',

    /* ── DONKEY JOE ─────────────────────────────────────── */
    'dk.crumb':   'CEBAN MARIUS / PROGETTI / <span>DONKEY JOE</span>',
    'dk.tag':     '01 — Web Design & Sviluppo',
    'dk.lead':    'Un\'esperienza web animata per un bar e locale musicale a Ravenna — sfondi animati su Canvas, intro con lettere esplosive e sistema jukebox interattivo per le serate dal vivo.',
    'dk.role':    'Designer & Sviluppatore',
    'dk.status':  'Online ↗',
    'dk.what.p1': '<strong>Donkey Joe è un\'esperienza web completa per un bar e locale musicale in Via Argirocastro 26, Ravenna.</strong> Il sito si apre con una sequenza intro cinematografica — il nome del locale esplode sullo schermo lettera per lettera da direzioni diverse — per poi dissolversi nella UI di navigazione principale.',
    'dk.what.p2': 'Una volta completata l\'intro, l\'utente approda su un\'interfaccia scura e atmosferica con tre percorsi principali: menu cibo e bevande, eventi in programma, orari e contatti. Un pulsante jukebox permette ai clienti di accodare la propria canzone durante le serate dal vivo.',
    'dk.why.p1':  'Il locale non aveva presenza digitale. I template standard sembravano troppo generici per un bar con questa identità — muri a righe, rossi profondi, atmosfera soffusa. Il sito doveva trasmettere la sensazione di varcare la soglia, non di sfogliare un elenco.',
    'dk.why.p2':  'Il brief era chiaro: <strong>costruire qualcosa che catturi l\'energia del posto nel momento in cui lo si apre.</strong> Questo significava design animation-first, non un ripensamento.',
    'dk.f1.ttl':  'Sfondo Canvas Animato',
    'dk.f1.dsc':  'Bande verticali — nero, rosso scuro e antracite — vengono disegnate su un elemento Canvas. Ogni banda ha oscillazione sinusoidale indipendente: due frequenze sovrapposte controllano il movimento laterale, un impulso più lento controlla lo spessore. I colori sono campionati pixel per pixel dalle fotografie reali del locale.',
    'dk.f2.ttl':  'Intro con Lettere Esplosive',
    'dk.f2.dsc':  'Ogni lettera di "DONKEY JOE" entra da una direzione unica — in alto a sinistra, direttamente dall\'alto, in alto a destra — usando CSS custom properties impostate per lettera a runtime. Dopo una breve pausa, esplodono verso l\'esterno in senso inverso e la UI principale scorre in. L\'intera sequenza dura meno di 3 secondi senza dipendenze da librerie.',
    'dk.out.p1':  'Un sito completo e pronto per la produzione: landing con intro animata, pagina menu cibo e bevande, archivio eventi, sezione contatti e orari, e la funzionalità Jukebox (pagina separata) dove i clienti possono sfogliare e accodare canzoni dal vivo durante le serate. Completamente responsive — il layout mobile collassa in una griglia a grandi pulsanti per un uso rapido in sala.',
    'dk.out.p2':  'Ricreare asset di brand in codice richiede precisione ossessiva — ho misurato le proporzioni delle strisce e campionato i colori direttamente dalle fotografie del locale. Ho anche imparato che <strong>l\'animazione su Canvas ha trappole di performance nascoste</strong>: cancellare l\'intero canvas a ogni frame ad alta frequenza, e replicare le strisce 3× per coprire viewport larghi senza giunture, ha richiesto profiling attento.',
    'dk.next':    'Uà Art&Pizza →',

    /* ── PIZZERIA ───────────────────────────────────────── */
    'pz.crumb':   'CEBAN MARIUS / PROGETTI / <span>UÀ ART&amp;PIZZA</span>',
    'pz.tag':     '02 — Web Design & Sviluppo',
    'pz.lead':    'Un\'app menu digitale per una pizzeria napoletana a Ravenna — oltre 60 pizze in 9 categorie, filtro ingredienti intelligente con logica AND, navigazione sticky per categorie e info consegna. Zero framework, caricamento immediato.',
    'pz.role':    'Designer & Sviluppatore',
    'pz.status':  'Online ↗',
    'pz.what.p1': '<strong>Uà Art&amp;Pizza è una pizzeria napoletana in Via Giuseppe Vitale 6, Ravenna.</strong> Il menu è esteso — oltre 60 voci in 9 sezioni, dai fritti classici alla Margherita tradizionale fino al trittico "Pizze di Dante" (Inferno, Purgatorio, Paradiso) e alla specialità dello chef "La Divina Commedia".',
    'pz.what.p2': 'Il menu digitale sostituisce un PDF statico con un\'esperienza scorrevole, filtrabile e mobile-first. Ogni scheda pizza mostra nome, base, condimenti e prezzo. Info consegna e avvisi allergeni sono integrati direttamente nella pagina — nessun documento separato.',
    'pz.why.p1':  'I PDF da menu sono frustranti su mobile, impossibili da cercare e lenti da aggiornare. La pizzeria aveva bisogno di una soluzione che caricasse in un secondo, funzionasse offline e potesse essere aggiornata direttamente in HTML senza CMS o abbonamenti.',
    'pz.why.p2':  'Il filtro per ingredienti risolve un problema reale: <strong>i clienti con restrizioni alimentari o preferenze non hanno modo di trovare velocemente pizze compatibili su una lista di 60 voci.</strong> Il filtro AND risolve questo — seleziona "Tartufo" e "Burrata" e vedi solo le pizze che le contengono entrambe.',
    'pz.f1.ttl':  'Filtro Ingredienti con Logica AND',
    'pz.f1.dsc':  'Un pannello filtro a comparsa raggruppa gli ingredienti per tipo (base, latticini, carne, verdure, pesce). Selezionando più ingredienti vengono mostrate solo le pizze che li contengono tutti contemporaneamente — non solo uno qualsiasi. Costruito in vanilla JS con corrispondenza a sottostringa per gestire varianti come "Grana in Cottura" che corrisponde al filtro "Grana".',
    'pz.f2.ttl':  'Navigazione Sticky per Categorie',
    'pz.f2.dsc':  'Una barra nav secondaria fissa sotto l\'header contiene pillole di categoria scorrevoli. Mentre l\'utente scorre, un IntersectionObserver traccia la sezione corrente e evidenzia la pillola corrispondente, facendola scorrere automaticamente nella barra nav se fuori schermo. Cliccando una pillola si scorre dolcemente alla sezione con offset corretto per il doppio header fisso.',
    'pz.out.p1':  'Un menu digitale completo con 9 sezioni (Friggitoria, I Classici, Le Amici, Le Artistiche, Le Pizze di Dante, Calzoni Fritti, Focacce, Dolcezze, Bevande), griglia extra/aggiunte, banner consegna, avviso allergeni e footer. Il filtro ingredienti copre 30+ ingredienti filtrabili in 6 categorie. Nessun backend, nessun build step, caricamento immediato su qualsiasi rete.',
    'pz.out.p2':  'Il tracciamento nav con IntersectionObserver richiede un calcolo attento degli header fissi multi-livello — i calcoli dell\'offset devono considerare sia la nav principale che la barra categorie. Ho anche imparato che <strong>il filtro AND è significativamente più utile dell\'OR</strong> per la selezione degli ingredienti: gli utenti vogliono trovare ciò che soddisfa tutti i loro criteri, non qualcosa che ne corrisponda solo uno.',
    'pz.next':    'Serenamente →',

    /* ── SERENAMENTE ────────────────────────────────────── */
    'sr.crumb':   'CEBAN MARIUS / PROGETTI / <span>SERENAMENTE</span>',
    'sr.tag':     '03 — Web Design',
    'sr.lead':    'Una landing page completa per un salone di parrucchieri a Ravenna — vetrina servizi, galleria a mosaico interattiva, CTA prenotazione, Google Maps integrato e un\'esperienza mobile-first con menu overlay a schermo intero e barra CTA flottante.',
    'sr.role':    'Designer & Sviluppatore',
    'sr.status':  'Online ↗',
    'sr.what.p1': '<strong>Serenamente è un salone di parrucchieri — donna &amp; uomo — in Via Bovini 28, Ravenna.</strong> Il sito presenta l\'identità del salone attraverso un\'estetica calda e tipograficamente ricca con Cormorant Garamond (serif) abbinato a Jost (sans-serif): un tono calmo ed elevato che rispecchia il nome del brand.',
    'sr.what.p2': 'Il sito copre l\'intero percorso dalla scoperta alla prenotazione: hero a schermo intero con il tagline del salone, griglia 6 servizi con prezzi, anteprima galleria a mosaico che rimanda alla pagina galleria dedicata, sezione "Chi siamo" con citazione del brand, CTA prenotazione con telefono e orari, e una mappa Google Maps live integrata.',
    'sr.why.p1':  'Il salone si affidava interamente al passaparola e a un account Instagram. I potenziali nuovi clienti non avevano modo di sfogliare i servizi, controllare i prezzi o trovare l\'indirizzo senza contattare direttamente. Una presenza web professionale era necessaria.',
    'sr.why.p2':  'Il design doveva trasmettere <strong>sofisticazione femminile e calma</strong> senza sembrare freddo. Il calore proveniva dal colore terracotta, dagli sfondi crema morbidi e dal carattere Cormorant Garamond. La funzionalità è arrivata rendendo il numero di telefono e la CTA prenotazione impossibili da non vedere su mobile.',
    'sr.f1.ttl':  'Anteprima Galleria a Mosaico',
    'sr.f1.dsc':  'Un mosaico CSS grid a 6 celle con spanning asimmetrico — la prima cella occupa 2 colonne e 2 righe per la gerarchia visiva. Ogni cella ha zoom al passaggio del mouse sulla foto, un overlay con gradiente e un\'etichetta che appare in hover. Cliccando qualsiasi cella si naviga alla pagina galleria dedicata. Div segnaposto vengono mostrati se mancano immagini — nessun layout rotto.',
    'sr.f2.ttl':  'Esperienza Mobile-First',
    'sr.f2.dsc':  'Su mobile, la nav desktop è sostituita da un pulsante hamburger animato che attiva un menu overlay a schermo intero con animazioni di ingresso scaglionate sui link. Una barra flottante persistente nella parte inferiore dello schermo mostra il numero di telefono del salone e un pulsante "Prenota" — un tocco per chiamare, sempre visibile. Questa è stata l\'aggiunta UX più impattante per un business fisico.',
    'sr.out.p1':  'Landing page completa (hero, griglia servizi, anteprima galleria, chi siamo, prenotazione, mappa, social, footer) più una pagina galleria dedicata separata. Animazioni di rivelazione allo scroll con IntersectionObserver in tutto il sito. Completamente responsive — menu overlay mobile separato, barra CTA flottante in basso e layout griglia adattati a 480px e 900px.',
    'sr.out.p2':  'Progettare per un\'attività di servizi con clientela prevalentemente femminile richiede un linguaggio visivo fondamentalmente diverso da un prodotto tech. Tipografia serif, colori caldi, spazio bianco generoso e transizioni morbide comunicano fiducia e cura — <strong>non solo estetica, ma segnali di conversione</strong>. La barra CTA mobile flottante, aggiunta a tarda fase dello sviluppo, ha semplificato drasticamente il percorso dalla scoperta al contatto.',
    'sr.next':    'Space Blog →',

    /* ── SPACE BLOG ─────────────────────────────────────── */
    'sb.crumb':   'CEBAN MARIUS / PROGETTI / <span>SPACE BLOG</span>',
    'sb.tag':     '04 — Sviluppo Frontend',
    'sb.lead':    'Un esperimento di navigazione 3D sull\'asse Z — le sezioni sono impilate lungo l\'asse Z nello spazio di prospettiva CSS. Lo scroll muove la camera in avanti creando un effetto "volo nello spazio" senza librerie né framework.',
    'sb.role':    'Sviluppatore',
    'sb.status':  'Prototipo ↗',
    'sb.what.p1': '<strong>Space Blog è un esperimento di navigazione 3D nel browser.</strong> Invece del normale scroll verticale della pagina, le sezioni sono posizionate a intervalli fissi lungo l\'asse Z usando CSS <code>translateZ</code> — a 0, −1000px, −2000px e −3000px rispettivamente. Un listener di scroll JavaScript avanza la posizione della camera nel contenitore <code>perspective</code>, creando l\'illusione di volare attraverso un tunnel nello spazio.',
    'sb.what.p2': 'Le quattro sezioni contengono: un titolo hero con il carattere monospace Michroma, una sezione contenuto immagine + testo affiancati, un carosello immagini in vanilla JS e un footer. Ogni sezione transisce morbidamente con easing CSS su <code>transform</code> e <code>opacity</code> mentre entra ed esce dal viewport.',
    'sb.why.p1':  'L\'obiettivo era una sfida CSS 3D pura — niente GSAP, niente Three.js, niente ScrollMagic. Si poteva ottenere un convincente effetto di viaggio 3D usando solo trasformazioni di prospettiva native del browser e poche righe di JavaScript?',
    'sb.why.p2':  '<strong>Il vincolo era il punto.</strong> Capire il pipeline di rendering 3D del browser — stacking context, <code>transform-style: preserve-3d</code>, origini di prospettiva e l\'interazione tra <code>overflow</code> e il 3D — ha richiesto di leggere le specifiche CSS invece della documentazione delle librerie.',
    'sb.f1.ttl':  'Navigazione Prospettica sull\'Asse Z',
    'sb.f1.dsc':  'Le sezioni sono posizionate in assoluto a <code>translateZ(0)</code>, <code>translateZ(-1000px)</code>, <code>translateZ(-2000px)</code> e <code>translateZ(-3000px)</code> in un contenitore con <code>perspective: 1000px</code> e <code>transform-style: preserve-3d</code>. Gli eventi di scroll aggiornano la Z-translation del contenitore per muovere la camera in avanti. Il box-shadow di ogni sezione brilla di bianco per suggerire la profondità.',
    'sb.f2.ttl':  'Carosello Immagini in Vanilla JS',
    'sb.f2.dsc':  'La sezione 3 contiene un carosello personalizzato costruito senza librerie. Il wrapper usa <code>display: flex</code> con <code>width: 300%</code> per tre immagini. CSS <code>transition: transform</code> gestisce l\'animazione di scorrimento. I pulsanti precedente/successivo chiamano una funzione <code>moveSlide()</code> che aggiorna una variabile di indice corrente e trasla il wrapper per multipli di <code>100% / numSlides</code>.',
    'sb.out.p1':  'Un tunnel 3D funzionante a 4 sezioni: navbar fissa, sezione hero con grande titolo Michroma, sezione immagine + descrizione, sezione carosello immagini e footer. Completamente responsive con valori di prospettiva adattati a 1024px, 768px e 480px. L\'effetto gira a 60fps fluidi su desktop senza canvas né WebGL.',
    'sb.out.p2':  'Gli effetti CSS 3D sono ingannevolmente fragili. <strong>Qualsiasi elemento antenato con <code>overflow: hidden</code> collassa interamente il contesto di rendering 3D</strong>, appiattendo tutti i figli. Allo stesso modo, <code>transform-style: preserve-3d</code> deve essere impostato su ogni elemento nella catena ancestrale — non solo sul contenitore radice. Questi sono il tipo di bug che la documentazione glissa ma che costano ore di debugging.',
    'sb.next':    'UniShare →',

    /* ── UNISHARE ───────────────────────────────────────── */
    'us.crumb':   'CEBAN MARIUS / PROGETTI / <span>UNISHARE</span>',
    'us.tag':     '05 — Sviluppo Full Stack',
    'us.lead':    'Una piattaforma di collaborazione universitaria — classi virtuali con codici invito, sistema post a doppio tipo (materiali gratuiti vs. tutoring a pagamento), controllo accessi basato sui ruoli e abbonamento con flusso di pagamento simulato. Costruito con Laravel, React e Inertia.js.',
    'us.role':    'Full Stack Developer',
    'us.status':  'Progetto Portfolio ↗',
    'us.what.p1': '<strong>UniShare è una piattaforma di condivisione risorse accademiche e collaborazione per studenti universitari.</strong> Il suo tagline — "Connetti, Collabora, Riuscisci" — riassume il ciclo principale: gli studenti entrano in classi virtuali tramite un codice invito a 6 caratteri, poi condividono materiali di studio gratuitamente o trovano sessioni di tutoring a pagamento pubblicate dagli admin delle classi.',
    'us.what.p2': 'La piattaforma distingue due ruoli utente. Gli studenti normali possono caricare appunti, PDF e file (fino a 10MB) come post "Materiale Condiviso" gratuiti. Gli admin delle classi (professori o tutor) possono anche pubblicare "Annunci a Pagamento" — annunci con prezzo per sessioni a pagamento o materiali premium. Tutti i post sono ricercabili per titolo/contenuto e ordinabili per data o prezzo.',
    'us.why.p1':  'Gli studenti si affidano tipicamente a canali frammentati — gruppi WhatsApp, cartelle Google Drive condivise, thread Telegram — per scambiarsi materiali. Questi disperdono le risorse su più piattaforme senza struttura, senza ricerca e senza un sistema di autorità per distinguere fonti affidabili dal rumore.',
    'us.why.p2':  'UniShare centralizza tutto in uno spazio autenticato. <strong>Il modello delle classi con codice invito rispecchia il funzionamento reale dei corsi universitari</strong> — un professore crea la stanza, gli studenti entrano, e i materiali fluiscono in entrambe le direzioni. Il livello di abbonamento aggiunge una dimensione di monetizzazione, simulando come una piattaforma reale si sostiene.',
    'us.f1.ttl':  'Sistema delle Classi',
    'us.f1.dsc':  'Gli admin creano classi virtuali con nome e descrizione. Alla creazione viene generato automaticamente un codice di accesso alfanumerico unico a 6 caratteri. Gli utenti entrano inserendo questo codice dalla dashboard. Ogni classe ha il proprio feed di post. Gli admin possono modificare o eliminare classi e post tramite finestre modali — i non-admin possono solo visualizzare e creare post gratuiti.',
    'us.f2.ttl':  'Ponte Full Stack con Inertia.js',
    'us.f2.dsc':  'Invece di costruire un\'API REST separata, UniShare usa Inertia.js per passare i dati Laravel renderizzati lato server direttamente come prop dei componenti React. Questo elimina la necessità di route API, chiamate fetch e gestione dello stato lato client per i dati server — i controller Laravel restituiscono risposte Inertia che idratano le pagine React come se fossero view standard server-side, ma con navigazione SPA.',
    'us.out.p1':  'Applicazione full-stack con: sistema di autenticazione completo (login, registrazione, reset password, verifica email, impostazioni profilo), CRUD classi con flusso di accesso tramite codice invito, sistema post a doppio tipo con caricamento file (archiviati tramite l\'astrazione disco di Laravel), controllo accessi basato sui ruoli tramite flag <code>isAdmin</code>, middleware di abbonamento che limita l\'accesso e reindirizza gli utenti scaduti a una pagina di pagamento simulata, schermata di caricamento con validazione CV e una landing page React con statistiche animate usando <code>react-countup</code> e trigger di scroll con IntersectionObserver.',
    'us.out.p2':  'Inertia.js è un modello mentale genuinamente diverso per lo sviluppo full-stack — <strong>collassa il confine frontend/backend senza sacrificare nessuno dei due lati.</strong> Laravel gestisce routing, auth, validazione e dati — React gestisce il rendering e l\'interattività — e Inertia li connette in modo trasparente. Il risultato è meno boilerplate rispetto a una SPA tradizionale con API separata, e più reattività rispetto a un\'app classica server-side. Per progetti individuali di questo livello, è lo strumento giusto.',
    'us.next':    'Flavory →',

    /* ── FLAVORY ─────────────────────────────────────── */
    'fl.crumb':   'CEBAN MARIUS / PROGETTI / <span>FLAVORY</span>',
    'fl.tag':     '06 — Sviluppo Full Stack',
    'fl.lead':    'Un SaaS di abbinamento cibo-vino alimentato da GPT-4o — sommelier AI con raccomandazioni DOC/DOCG italiane locali, modello freemium con abbonamento Stripe a €9,99/mese, cronologia degli abbinamenti e landing page marketing completa. Costruito con Node.js, Express e le API OpenAI.',
    'fl.role':    'Designer & Sviluppatore',
    'fl.status':  'Live',
    'fl.what.p1': '<strong>Flavory è un\'applicazione SaaS full-stack che funziona da sommelier AI personale.</strong> La faccia pubblica è una landing page marketing curata con tre sezioni — Funzionalità, Come funziona, Prezzi — costruita in Playfair Display con una palette cremisi-crema che comunica premium ed editoriale prima ancora che l\'utente clicchi qualcosa. La navbar saluta gli utenti loggati per nome e offre una CTA diretta "Vai all\'app →".',
    'fl.what.p2': 'All\'interno dell\'app, gli utenti accedono a una dashboard a tre tab: Sommelier, Cronologia e Abbonamento. La funzionalità principale offre due modalità — "Ho il cibo" (ho il cibo, suggerisci un vino) e "Ho il vino" (ho il vino, suggerisci il cibo). L\'utente descrive il pasto in testo libero, inserisce la propria città o regione per raccomandazioni locali, e imposta un budget per bottiglia tramite uno slider da €5 a €150+. GPT-4o elabora l\'input e restituisce vini con denominazione DOC/DOCG, motivazione dell\'abbinamento, note di degustazione, reperibilità locale per catena di supermercati specifica (Coop, Conad, Esselunga) e stima del prezzo.',
    'fl.what.p3': 'La tab Cronologia memorizza l\'intera storia delle ricerche passate — ogni voce mostra il piatto, l\'anteprima del vino e un timestamp, e cliccandola riapre il risultato completo nel sommelier. Una barra di stato persistente sotto la navigazione mostra le richieste gratuite rimanenti come indicatori a punti, con un pulsante "Sblocca illimitato" che attiva il Checkout Stripe quando il livello gratuito si esaurisce.',
    'fl.why.p1':  'L\'idea è nata da una frustrazione reale: stare davanti allo scaffale dei vini senza idea di quale bottiglia si abbini a quello che stai cucinando stasera. Le guide online sono generiche, i corsi da sommelier durano mesi, e chiedere al personale del supermercato è inconsistente. GPT-4o cambia i presupposti — ha abbastanza conoscenza di enologia e delle denominazioni regionali italiane per dare raccomandazioni specifiche e credibili in pochi secondi.',
    'fl.why.p2':  'La dimensione locale era fondamentale. La cultura del vino italiano è intensamente regionale — un Sangiovese di Romagna della Cantina San Patrignano è una raccomandazione completamente diversa da un Chianti generico. <strong>Nominare produttori DOC/DOCG specifici e indicare dove si trovano nelle vicinanze rende l\'output effettivamente utilizzabile</strong>, non solo educativo. Un abbinamento su cui puoi agire stasera vale infinitamente di più di uno che non puoi applicare.',
    'fl.why.p3':  'Il modello freemium — 3 query gratuite, poi €9,99/mese via Stripe — è stata una decisione di prodotto deliberata. Abbassa la barriera per provare, lascia che la qualità dell\'output AI parli da sola e crea un momento di conversione naturale. Costruire un flusso di pagamento reale, non un mockup, è stato tanto un apprendimento sull\'architettura del prodotto quanto sulla funzionalità in sé.',
    'fl.f1.ttl':  'Tipografia e Sistema di Design',
    'fl.f1.dsc':  'L\'identità visiva di Flavory è costruita su un sistema double-serif deliberato. Playfair Display serve come typeface display principale — i suoi tratti spessi-sottili ad alto contrasto e il carattere editoriale comunicano la stessa sensibilità di un\'etichetta di vino premium o di un menu di ristorante fine. La palette è altrettanto contenuta: cremisi profondo (#b22222) come unico accento su uno sfondo crema quasi bianco (#fff2f2). Questo calore quasi monocromatico attraversa ogni superficie interattiva: il cursore personalizzato, l\'highlight della selezione, il pulsante login, lo sfondo CTA, gli stati hover e l\'enfasi inline nel testo. Il risultato è un sistema compatto — la sensazione che ogni elemento sia stato progettato dalla stessa mano, per lo stesso scopo. Le sezioni marketing rinforzano questo linguaggio su larga scala: la lista funzionalità "Perché Flavory", la sezione scura "Tre passi" con il suo separatore a onda e il footer CTA scuro parlano tutti lo stesso dialetto visivo.',
    'fl.f2.ttl':  'Interfaccia del Sommelier AI',
    'fl.f2.dsc':  'Il form del sommelier raccoglie tre input contestuali: una descrizione del pasto in testo libero (da "pizza margherita" a un menu completo con più portate), una città o regione per il sourcing locale del vino, e un budget per bottiglia impostato tramite uno slider da €5 a €150+. Un toggle di modalità in cima inverte la direzione dell\'abbinamento — "Ho il cibo" manda cibo → vino, "Ho il vino" manda vino → cibo. Un\'icona fotocamera nella textarea permette l\'input tramite foto del pasto. Il pannello sinistro occupa circa un terzo della larghezza dello schermo; i due terzi destri sono l\'area di output, che mostra una sottile icona di calice nel suo stato vuoto e si riempie con la raccomandazione completa quando una query viene inviata. Il contatore freemium si trova in una barra persistente appena sotto la navigazione a tab, mostrando le richieste gratuite rimanenti come punti rossi accanto al pulsante di upsell "Sblocca illimitato".',
    'fl.f3.ttl':  'Raccomandazioni Alimentate da GPT-4o',
    'fl.f3.dsc':  'Il backend costruisce un prompt strutturato dai tre input dell\'utente — pasto, posizione, budget — e lo invia alle API OpenAI GPT-4o. La risposta viene renderizzata nel pannello destro come raccomandazione enologica strutturata: ogni vino suggerito include la sua denominazione DOC/DOCG completa e il nome del produttore, una sezione "Perché quest\'abbinamento", caratteristiche di degustazione, una sezione "Dove trovarlo" con supermercati ed enoteche locali specifici, e una stima del prezzo. Per una query "cappelletti al ragù" da Ravenna a €30, il modello raccomanda un Sangiovese di Romagna Superiore DOC della Cantina San Patrignano — un produttore locale reale. Ottenere questa qualità di output in modo consistente ha richiesto una prompt engineering attenta: il parametro regione ancora il modello a produttori italiani reali e previene denominazioni inventate.',
    'fl.f4.ttl':  'Modello Freemium e Abbonamento Stripe',
    'fl.f4.dsc':  'I nuovi utenti ricevono 3 query AI gratuite — tracciate lato server e mostrate nell\'UI come indicatore a punti ("3 richieste gratuite rimaste"). Quando il limite viene raggiunto, "Sblocca illimitato" attiva una sessione Stripe Checkout ospitata: brandizzata con il nome Flavory, al prezzo di €9,99/mese ("Flavory Mensile — addebito mensile"), con inserimento carta completo, supporto codice promozionale e Stripe Link per pagamento con un clic. L\'integrazione è costruita lato server attraverso Express: il backend crea la Checkout Session e restituisce l\'URL ospitato — nessun dato di carta tocca mai il server applicativo. Il pagamento riuscito aggiorna lo stato dell\'abbonamento dell\'utente nel database, eliminando completamente il limite di richieste.',
    'fl.out.p1':  'Un prodotto SaaS completo dalla landing al checkout: landing page marketing con lista funzionalità Perché Flavory (Sommelier AI con GPT-4o, raccomandazioni DOC/DOCG Locale & Regionale, sourcing Anche al Supermercato), sezione "Tre passi verso il vino perfetto", footer CTA scuro e footer completo con colonne prodotto, account e legale. All\'interno dell\'app autenticata: dashboard a tre tab (Sommelier, Cronologia, Abbonamento), doppia modalità abbinamento cibo/vino, input città e budget, output raccomandazioni GPT-4o con produttori nominati e sourcing locale, cronologia abbinamenti con timestamp che si riapre nel sommelier con un clic, contatore richieste freemium con indicatori a punti live e abbonamento Stripe Checkout a €9,99/mese. Autenticazione via JWT e bcryptjs su backend Node.js/Express. Completamente responsive — l\'intera app si adatta al mobile con la stessa struttura a tre tab.',
    'fl.out.p2':  'La parte tecnicamente più impegnativa non è stato il backend né il flusso di pagamento — è stato il prompt. Una raccomandazione enologica ha bisogno di una struttura specifica per essere utile: denominazione, produttore, motivazione dell\'abbinamento, note di degustazione, dove comprare, prezzo. Far produrre tutto questo a GPT-4o in modo affidabile — senza inventare produttori falsi o denominazioni DOC inesistenti — ha richiesto iterazioni significative. <strong>Il parametro regione è stato lo sblocco chiave:</strong> ancorare il modello a una città italiana specifica lo ha costretto a nominare produttori locali reali e supermercati effettivi, trasformando l\'output da contenuto generico di guida enologica in qualcosa di genuinamente utilizzabile.',
    'fl.out.p3':  'Il design freemium mi ha anche insegnato che il posizionamento del paywall è una decisione di prodotto con conseguenze reali. Troppo presto e perdi gli utenti prima che sperimentino il valore; troppo tardi e il momento di conversione sembra brusco. Tre query gratuite era il numero che sembrava giusto — abbastanza per ottenere una raccomandazione completa e sperimentare la qualità, ma non così tante da non avere motivo di abbonarsi. Queste sono il tipo di decisioni che non hanno una soluzione tecnica; richiedono di pensare come un product designer, non solo come un developer.',
    'fl.next':    'Donkey Joe →',
  }
};

/* ─────────────────────────────────────────────────────────────
   Engine
   ───────────────────────────────────────────────────────────── */
(function () {

  function applyLang(lang) {
    var t = TRANSLATIONS[lang];
    if (!t) return;

    /* plain text swap */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var val = t[el.getAttribute('data-i18n')];
      if (val !== undefined) el.textContent = val;
    });

    /* innerHTML swap (elements containing <strong>, <br>, <code> etc.) */
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var val = t[el.getAttribute('data-i18n-html')];
      if (val !== undefined) el.innerHTML = val;
    });

    /* update <html lang="..."> */
    document.documentElement.setAttribute('lang', lang);

    /* update lang toggle button label */
    var btn = document.getElementById('lang-toggle-label');
    if (btn) btn.textContent = lang === 'en' ? 'IT' : 'EN';

    /* patch copy-email button so copyEmail() uses current-language strings */
    var copyBtn = document.getElementById('copyEmailBtn');
    if (copyBtn) {
      copyBtn.setAttribute('data-copy-label',   t['contact.copy']   || '_ COPY EMAIL ADDRESS');
      copyBtn.setAttribute('data-copied-label', t['contact.copied'] || '_ COPIED!');
    }
  }

  /* public toggle called by button onclick */
  window.toggleLang = function () {
    var next = (localStorage.getItem('lang') || 'en') === 'en' ? 'it' : 'en';
    localStorage.setItem('lang', next);
    applyLang(next);
  };

  function init() {
    applyLang(localStorage.getItem('lang') || 'en');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
