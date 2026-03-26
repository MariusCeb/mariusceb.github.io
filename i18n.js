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
    'proj.c6.tag':    'Frontend Development',
    'proj.c7.tag':    'SaaS Development',
    'proj.c8.tag':    'PWA Development',
    'proj.c9.tag':    'PWA Development',
    'proj.count':     '10 PROJECTS',

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
    'dk.f1.dsc':  'Vertical striped bands — black, deep red, and anthracite grey — are rendered on a Canvas element. Each stripe has independent sinusoidal oscillation: two overlapping frequencies control lateral swing, and a slower pulse controls thickness. Colors are sampled pixel-by-pixel from the venue\'s real branding imagery.',
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
    'fl.next':    'Fontara →',

    /* ── FONTARA ─────────────────────────────────────── */
    'fn.crumb':   'CEBAN MARIUS / PROJECTS / <span>FONTARA</span>',
    'fn.tag':     '07 — Frontend Development',
    'fn.lead':    'A live typography playground for designers and developers — 175+ Google Fonts loaded on demand, 7 real-world layout previews, compare mode for side-by-side pairing evaluation, full typography controls, keyboard shortcuts, and a shareable URL that encodes your exact configuration. Built with React, TypeScript, and Zustand.',
    'fn.role':    'Designer & Developer',
    'fn.status':  'Live',
    'fn.what.p1': '<strong>Fontara is a browser-based typography lab.</strong> Pick a heading font and a body font from 175+ Google Fonts, set the typographic scale, adjust spacing and weight, and see the result rendered live inside 7 real-world layout contexts: a startup landing page, a portfolio, a restaurant site, an editorial article, an e-commerce product page, a SaaS dashboard, and a pure type specimen sheet. Every control updates the preview instantly — no page reloads, no compile steps, no signup.',
    'fn.what.p2': 'The entire application state — fonts, weights, scale ratios, spacing, layout, viewport — is encoded into the URL hash. Copy the link and the exact configuration restores on any device. Fonts load on demand via dynamic link injection from Google Fonts, so only the fonts you are actually viewing hit the network.',
    'fn.what.p3': 'Two modes extend the core workflow. Compare splits the canvas into two fully independent panels — each with its own font pairing — so you can evaluate two combinations on the same layout at the same time. The Export modal generates a production-ready CSS snippet with the Google Fonts @import and all typographic variables defined as CSS custom properties.',
    'fn.why.p1':  'Choosing font pairings is one of the most frustrating parts of early design work. You find a heading font you like, open Google Fonts in another tab, load a candidate body font, paste some text into a doc, and try to imagine how it will feel on a real page. The feedback loop is broken — too many steps between idea and result.',
    'fn.why.p2':  '<strong>Fontara collapses that loop.</strong> It loads any Google Font in milliseconds, renders it inside actual layout contexts — not Lorem Ipsum on a white page — and lets you see how the pairing behaves at real scale: tight headings, long-form body copy, captions, labels. The curated pairing suggestions reduce the search space further: pick a heading font and the body picker surfaces fonts that are known to pair well with it based on actual design conventions.',
    'fn.why.p3':  'The shareable URL was a deliberate product choice. A typography pairing is only useful if you can share it — with a collaborator, a client, or future you. Encoding all state into a compact base64 hash means no database, no accounts, no server-side logic. Just a link that works.',
    'fn.f1.ttl':  '7 Real-World Layout Previews',
    'fn.f1.dsc':  'Each of the 7 layouts is a self-contained React component rendering a realistic, content-rich UI context. Startup: a SaaS landing page with hero, subheading, and feature list. Portfolio: a designer\'s case-study page with header text and project grid. Restaurant: a dark atmospheric layout with a menu section. Article: long-form editorial copy with pull quotes and captions. E-commerce: a product detail page with pricing and description. Dashboard: a SaaS analytics interface with metric cards and data tables. TypeScale: a pure typographic specimen — every heading level (H1–H5), body, and small text rendered together so you can evaluate the full scale relationship at a glance. Switching layouts is instant and keyboard-mapped to keys 1–7. The preview theme (light or dark) toggles independently with D.',
    'fn.f2.ttl':  'Compare Mode',
    'fn.f2.dsc':  'Pressing C splits the preview into two panels, each running a fully independent font pairing. The active panel — the one the sidebar is currently editing — is highlighted with a subtle border. Toggle between panels from the sidebar or by clicking directly in the preview. This lets you run a proper typographic side-by-side comparison without switching tabs or taking screenshots: the same layout, the same content, two different pairings, visible simultaneously. Compare mode is disabled on mobile where there is not enough horizontal space, and falls back automatically to single-panel preview.',
    'fn.f3.ttl':  'Typography Controls & Save Pairing',
    'fn.f3.dsc':  'Beyond the font pickers, four controls refine the typographic system: Base font size (px), Scale ratio (the multiplier between heading levels — Minor Third 1.2, Major Third 1.25, Perfect Fourth 1.33, Perfect Fifth 1.5, Golden Ratio 1.618), Line height, and Letter spacing for headings and body independently. Fonts with variable axis support expose a Weight slider that moves across the full optical range. The Save pairing button stores the current combination to localStorage under a named slug — duplicates are prevented — and the saved list appears in the sidebar for one-click recall. The Export CSS modal generates a copy-ready snippet: Google Fonts @import, all type levels as CSS custom properties, and a live type scale preview inside the modal showing actual pixel sizes for H1 through small text.',
    'fn.f4.ttl':  'Keyboard Shortcuts & Shareable URL',
    'fn.f4.dsc':  'A complete keyboard layer sits on top of the UI. Keys 1–7 switch layouts; P enters Preview mode; C enters Compare mode; D toggles the preview theme between light and dark; ⌘K (Ctrl+K on Windows) opens the heading font picker; ⌘⇧K opens the body font picker; arrow keys navigate the font list inside the picker with live preview on each selection; ? opens the full shortcut reference panel. The Share button encodes the entire application state — fonts, weights, scale, spacing, layout, viewport — into a compact base64 hash appended to the URL. Opening this link on any device restores the exact configuration: no server, no database, no account required. The URL is kept short by using abbreviated JSON keys before base64 encoding.',
    'fn.out.p1':  'A complete browser-based typography tool: 175+ Google Fonts browsable by category (Sans, Serif, Display, Script, Mono) and searchable by name; curated pairing suggestions that surface compatible body fonts for any given heading font; 7 independent layout previews (Startup, Portfolio, Restaurant, Article, E-commerce, Dashboard, TypeScale); editable preview text — click any heading or body copy in the canvas to edit in place and see your own content in the chosen typeface; compare mode with two independent panels; typography controls for base size, scale ratio, line height, and letter spacing; variable font weight slider; save pairing to localStorage; export CSS with Google Fonts import and CSS custom properties; keyboard shortcuts for all primary actions; and a shareable URL that encodes the full configuration. Fully responsive — the sidebar becomes a slide-in drawer on mobile.',
    'fn.out.p2':  'The most interesting technical challenge was the URL state system. Encoding a complete typography configuration — two font names, two weights, five numeric parameters, the current layout, and the viewport — into a URL short enough to actually be shareable required compressing the JSON key names to single characters before base64 encoding. The decode path also needs to be resilient: malformed or truncated hashes must fail silently and fall back to defaults. <strong>The font picker keyboard navigation with live preview on each arrow key press</strong> — loading a new Google Font on every keystroke without lag — required careful debouncing and prioritising fonts that are already cached in the browser.',
    'fn.next':    'Fontara Widget →',

    /* ── FONTARA WIDGET ─────────────────────────────────── */
    'fw.crumb':   'CEBAN MARIUS / PROJECTS / <span>FONTARA WIDGET</span>',
    'fw.tag':     '08 — SaaS Development',
    'fw.lead':    'A commercial browser widget and Chrome extension that injects a real-time typography control panel into any live website — 310+ Google Fonts, WCAG contrast checker, undo/redo, export to CSS/JSON/Tailwind/Figma tokens, and a complete SaaS backend with Stripe payments, license key management, and device fingerprinting. Built with Vite, TypeScript, Next.js 14, Prisma, and Neon PostgreSQL.',
    'fw.role':    'Designer & Developer',
    'fw.status':  'Live',
    'fw.github':  'Private',
    'fw.what.p1': '<strong>Fontara Widget is a commercial browser typography tool — a self-contained JavaScript widget that injects into any live website</strong> and lets designers, developers, and agencies test and apply font pairings directly on their own content. Unlike a typography playground that uses dummy layouts, the widget overlays real-time controls on top of the user\'s actual product, so every font decision is made in context.',
    'fw.what.p2': 'The widget ships as a single IIFE bundle — no framework, no dependencies — that loads via a script tag with a license key attribute, a bookmarklet, or a Chrome extension. On activation it mounts a floating control panel with six element groups (H1, H2, H3, H4–6, Body, Buttons, Nav), full typography sliders (size, line-height, letter-spacing, word-spacing), a color picker, variable font axes (stretch, italic), custom CSS selectors, and lazy-loaded font previews for 310+ Google Fonts across 6 categories. Every change is applied live via injected style tags using !important to override host page styles.',
    'fw.what.p3': 'The PRO license unlocks saved named presets synced to the backend via the user\'s license key, and export to 5 formats: full CSS with Google Fonts @import, JSON, Tailwind config snippet, CSS custom properties, and Figma token JSON. A WCAG contrast checker evaluates text color legibility in real time. The keyboard shortcut overlay (?), undo/redo stack (50 snapshots, Ctrl+Z/Y), and draggable dock round out the interaction model.',
    'fw.why.p1':  'Testing typography on Lorem Ipsum on a white canvas is not the same as seeing a font on your actual navigation bar, your hero headline, your product card. The feedback loop between "I picked this font" and "I can see how it looks on my product" is broken when your tool and your product are in different tabs.',
    'fw.why.p2':  '<strong>Fontara Widget closes that gap entirely.</strong> Because it injects directly into any live website, every typography decision is made on real content, in real context: the actual line lengths, the actual spacing constraints, the actual surrounding UI. The widget targets the elements already on the page — h1, p, nav a, button — and overrides them in place, so what you see in the panel is what you\'ll ship.',
    'fw.why.p3':  'The Chrome extension removes even the script-injection step. One click injects the widget on any page. The device fingerprinting and license system allow the same key to work on up to 4 devices for commercial licenses, without storing any personally identifiable information — the fingerprint is a non-reversible FNV-1a hash of browser characteristics.',
    'fw.f1.ttl':  'Zero-Dependency IIFE Architecture',
    'fw.f1.dsc':  'The widget is compiled by Vite into a single IIFE (Immediately Invoked Function Expression) bundle. No React, no Vue, no external runtime — every component, state manager, and CSS rule is written in vanilla TypeScript and DOM manipulation. The final build is a single file that executes on load, creates the dock and panel via document.createElement, injects a style tag for all widget CSS using CSS custom properties for theming, and mounts the font preview lazy-loader via IntersectionObserver. This architecture means the widget runs on any page — with any framework, any bundler, any stack — without dependency conflicts or version mismatches. Vite\'s IIFE format with esbuild minifier keeps the output small and fast. The production build also runs through javascript-obfuscator to make reverse engineering prohibitively difficult, then prepends a copyright banner.',
    'fw.f2.ttl':  'FNV-1a Device Fingerprinting & License Verification',
    'fw.f2.dsc':  'License keys (format: FTPR-XXXXX-XXXXX-XXXXX-XXXXX, unambiguous 23-char alphabet) are verified against a Next.js backend. Device fingerprinting uses a lightweight FNV-1a (Fowler–Noll–Vo) 32-bit hash: the hash is seeded at 2166136261 and processes each character of the combined userAgent + language + screen resolution + timezone + platform string with XOR and a 16777619 prime multiplier. The resulting 32-bit integer is encoded to base36 and truncated to 7 characters. This is not cryptographic — it is a deterministic identifier used only to count unique devices per license and enforce the activation limit (1 for Personal, 4 for Commercial). The backend stores fingerprints in a Postgres activation table; the verify endpoint runs an atomic transaction to prevent race conditions when multiple tabs register simultaneously. License results are cached in localStorage for 24 hours with a 6-day offline grace period.',
    'fw.f3.ttl':  'WCAG Contrast Checker & Full Typography Controls',
    'fw.f3.dsc':  'The contrast checker computes WCAG 2.1 relative luminance for any two hex colours. Relative luminance converts RGB channels to linear light values via gamma correction (values ≤ 0.04045 divide by 12.92; values above raise to the 2.4 power after a 1/1.055 scale offset) then weights them 0.2126R + 0.7152G + 0.0722B. Contrast ratio is (L1 + 0.05) / (L2 + 0.05) where L1 > L2, tested against WCAG AA (≥ 4.5:1 normal text, ≥ 3:1 large text) and AAA (≥ 7:1 normal text). Typography controls cover font size (12–96px), font weight, line-height (0.8–2.5 unitless), letter-spacing (−0.1 to 0.1em), word-spacing (−0.05 to 0.2em), font-stretch (75–125% for variable fonts), font-style (normal / italic), text-transform, and text color via an HSV picker. The undo/redo system deep-clones the full element-group state object via JSON serialization at each mutation and keeps 50 snapshots in two stacks.',
    'fw.f4.ttl':  'Chrome Extension — Manifest V3 & OffscreenCanvas',
    'fw.f4.dsc':  'The Chrome extension (Manifest V3) bundles the compiled widget IIFE and injects it on demand via the Scripting API. The popup checks if #fontara-dock exists on the active tab via chrome.scripting.executeScript to determine state (active / inactive) and renders the correct UI. The background service worker draws the toolbar icon at runtime using OffscreenCanvas: a rounded purple rectangle is drawn via quadratic Bezier curves on a 2D canvas context, "Fa" text is rendered in white Bold Arial, and the ImageData is passed to chrome.action.setIcon() for all four sizes (16, 32, 48, 128px). This avoids shipping pre-rendered PNG files for the icon — it is generated programmatically from the same brand colour as the widget (#7c3aed). The remove button in the popup removes #fontara-dock and #fontara-styles from the DOM, cleanly unmounting the widget without a page reload. Extension permissions: scripting, activeTab, storage.',
    'fw.out.p1':  'A complete commercial SaaS product: the Fontara Widget IIFE bundle (310+ fonts across 6 categories — sans-serif, serif, display, handwriting, monospace, experimental; 35 curated pairings with 8 PRO-exclusive combinations; 5 export formats — CSS, JSON, Tailwind, CSS custom properties, Figma tokens; WCAG contrast checker; 50-snapshot undo/redo; draggable dock; keyboard shortcuts overlay; dark mode; variable font axes; custom CSS selectors; lazy font previews via IntersectionObserver); the Fontara PRO Next.js 14 app hosted at app.fontara.it on Vercel, backed by Neon PostgreSQL via Prisma ORM; a Stripe payment flow with two live one-time price plans (Personal €29, Commercial €89), webhook-driven license generation, and automatic license revocation on refund via charge.refunded event; Resend transactional email for license delivery; a device dashboard at /dashboard for users to manage activations; the Chrome extension (Manifest V3); and an obfuscated production widget with copyright banner injected at build time.',
    'fw.out.p2':  'The most technically involved piece was the license verification architecture. A widget running on arbitrary third-party websites must verify its license key without exposing it in a way that can be trivially shared — but it also cannot do heavy cryptography client-side. <strong>The solution is a cached, fingerprinted server call:</strong> the key and device fingerprint are sent to the backend, the backend enforces the per-device limit transactionally, and the result is cached in localStorage for 24 hours with a 6-day offline grace period. This means the widget works offline while still enforcing limits for honest users. Building an entire payment-to-license pipeline — Stripe webhook → key generation → email → activation → device counting — end to end as a solo developer required deeply understanding each integration point: not just calling APIs, but handling webhook idempotency, atomic database transactions, race condition prevention, and graceful degradation when any step fails.',
    'fw.next':    'GymLog →',

    /* ── GYMLOG ──────────────────────────────────────────── */
    'gl.crumb':   'CEBAN MARIUS / PROJECTS / <span>GYMLOG</span>',
    'gl.tag':     '09 — PWA Development',
    'gl.lead':    'A mobile-first PWA workout tracker — day-based training organization, exercise cards with sets/reps/weight logging, customizable rest timers with circular progress, and a volume history chart. Zero frameworks, zero dependencies, fully offline.',
    'gl.role':    'Designer & Developer',
    'gl.status':  'Live ↗',
    'gl.what.p1': '<strong>GymLog is a personal workout companion built to run natively on mobile, installed from the browser to the home screen.</strong> Training sessions are organized by day — Monday through Sunday — with exercise cards that track multiple sets per exercise. Each set row captures reps and weight; tapping the check button marks it green and fades the inputs. A summary counter shows completed sets at a glance.',
    'gl.what.p2': 'Each exercise card also has a built-in rest timer button. Tapping it opens a circular countdown panel — default 90 seconds, adjustable in 15-second steps. When the timer completes, the circle turns green and the device vibrates. A compact mini bar at the bottom of the screen persists while the timer runs, so you can log the next exercise without losing track of the rest.',
    'gl.why.p1':  'Most gym apps require an account, a subscription, or constant network access. GymLog runs entirely on <code>localStorage</code> — no server, no login, no sync. Opening it is as fast as any native app because it ships as a PWA with a Service Worker that caches all assets after the first load.',
    'gl.why.p2':  '<strong>The design constraint was simplicity.</strong> A gym floor is a hostile UX environment: sweaty hands, no time, short attention spans. Every interaction had to be reachable in one tap. The large input fields, the green flash on set completion, the persistent mini timer bar — all exist to reduce cognitive load while lifting.',
    'gl.f1.ttl':  'Day-Based Training Organization',
    'gl.f1.dsc':  'Seven day pills (MON–SUN) scroll horizontally at the top of the workout view. The active day is highlighted in red. Each day stores its own exercise list independently in localStorage. Exercises are added via a bottom sheet modal — name, muscle group, and technique — and persist across sessions. A PR (personal record) gold badge appears automatically on any exercise set that matches or beats the previous best weight.',
    'gl.f2.ttl':  'Rest Timer & Progress Chart',
    'gl.f2.dsc':  'The circular rest timer uses an SVG <code>stroke-dasharray</code> / <code>stroke-dashoffset</code> technique to draw the countdown arc. Duration is configurable per-session; the default is 90 seconds. A mini timer bar with a pulsing red dot persists at the bottom of the workout view while counting, so navigation between exercises never interrupts the rest. The Progress tab renders a bar chart of weekly volume (total weight × reps) for any exercise, loaded dynamically from localStorage history.',
    'gl.out.p1':  'A complete PWA workout tracker: 7-day training log, exercise CRUD with muscle group and technique, multi-set logging with reps and weight, set completion with green highlight, PR badge for new personal records, circular rest timer with adjustable duration and haptic feedback, persistent mini timer bar, per-exercise notes, progress bar chart with exercise selector, dark/light mode, JSON backup export/import, and a dismissible install-to-home-screen prompt.',
    'gl.out.p2':  '<code>localStorage</code> performance on mobile degrades noticeably when re-serializing large nested objects on every keypress. Debouncing the input handlers — only persisting after a 300ms pause — eliminated the lag. Building the circular progress indicator without a charting library required understanding SVG coordinate geometry and the relationship between stroke-dasharray and the circle circumference (2πr). <strong>The mini timer bar, added midway through development, turned out to be the single most impactful UX decision</strong>: without it, users lost count of rest time the moment they scrolled down to log the next set.',
    'gl.next':    'Blocco →',

    /* ── BLOCCO ──────────────────────────────────────────── */
    'bl.crumb':   'CEBAN MARIUS / PROJECTS / <span>BLOCCO</span>',
    'bl.tag':     '10 — PWA Development',
    'bl.lead':    'A mobile-first PWA note-taking app — reminders with quick capture, rich idea cards with markdown support, checklists with item-level progress, drag-to-reorder via long press, color labels, search, and a 30-day trash recovery system. Zero frameworks, fully offline.',
    'bl.role':    'Designer & Developer',
    'bl.status':  'Live ↗',
    'bl.what.p1': '<strong>Blocco is a personal notebook designed to be added to the iOS/Android home screen and used like a native app.</strong> The interface has four tabs: Prom (reminders), Idee (ideas), Liste (checklists), and Cestino (trash). The quick capture bar at the top of the Prom tab lets you add a reminder in one tap and Enter — no modal, no sheet, no friction. Ideas and checklists use a floating [+] FAB that opens a bottom sheet modal.',
    'bl.what.p2': 'All three note types share a common card shell: color label border (6 colors), pin-to-top, edit, and soft delete that moves the item to the Cestino tab instead of destroying it immediately. Items in the trash display an expiration countdown and can be individually restored, permanently deleted, or bulk-cleared. The trash is also automatically purged on boot for items older than 30 days.',
    'bl.why.p1':  'iOS Notes and Google Keep require accounts and cloud sync. Blocco stores everything in <code>localStorage</code> — opening it loads instantly with all data intact, offline from the first visit. The PWA install prompt makes it indistinguishable from a native app once on the home screen.',
    'bl.why.p2':  '<strong>The monospace aesthetic was a deliberate choice.</strong> IBM Plex Mono gives the app a minimal, terminal-like feel that signals precision and intentionality. The bracket-based action buttons — <code>[pin]</code>, <code>[edit]</code>, <code>[del]</code> — reinforce this language. It is a notebook that feels like it was built for people who care about how things look.',
    'bl.f1.ttl':  'Four Note Types & Color Labels',
    'bl.f1.dsc':  'Prom are circular-check reminders: tapping the circle slides the card out with a CSS translate animation and removes it from the array — completed, not deleted. Idee are free-form notes with an optional title and markdown rendering (<code>**bold**</code>, <code>_italic_</code>). Liste are checklists with a live done/total counter and an inline "add item" input row at the bottom. All types support 6 color label dots (red, orange, yellow, green, blue, purple) that render as a 2.5px left border on the card. Tapping any note body opens a full-screen reading overlay.',
    'bl.f2.ttl':  'Drag-to-Reorder via Long Press',
    'bl.f2.dsc':  'Long-pressing any card for 420ms creates a ghost clone (slightly scaled and rotated) that follows the finger. The original card fades to 18% opacity. Moving the ghost over another card marks it with a dashed outline. Releasing commits the reorder by splicing the source item out of its position and inserting it at the target index. The <code>elementFromPoint</code> trick — hiding the ghost for one frame before hit-testing — is the key to finding the drop target without an additional overlay element. Touch events only; desktop mouse drag is not implemented.',
    'bl.out.p1':  'A complete PWA note-taking app: 4 sections (Prom, Idee, Liste, Cestino), quick capture bar for instant reminders, rich cards with optional title, markdown bold/italic, 6 color labels, pin-to-top, edit modal, drag-to-reorder with ghost preview, focus/reading overlay, global search with live filtering across all three content sections, statistics header showing item counts, trash with 30-day TTL, restore and permanent-delete actions, bulk trash clear, backup export/import as JSON, dark/light mode toggle, customizable user name, and Twemoji for consistent emoji rendering across devices.',
    'bl.out.p2':  'Building touch drag-and-drop without a library is deceptively nuanced. The 420ms long-press threshold had to be precisely tuned: too short and normal scrolls trigger ghost creation; too long and it feels sluggish. The 9-pixel movement threshold that cancels the timer before it fires was the solution — it distinguishes "user is scrolling" from "user is holding still". <strong>The reading focus overlay — a tap on the note text that expands it to near-full screen — was a late addition that changed how the app feels entirely</strong>: it transformed Blocco from a list-management tool into something closer to a real notebook.',
    'bl.next':    'Donkey Joe →',
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
    'about.subtitle':   'CON BASE IN ITALIA — DISPONIBILE OVUNQUE',
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
    'proj.c6.tag':    'Sviluppo Frontend',
    'proj.c7.tag':    'Sviluppo SaaS',
    'proj.c8.tag':    'Sviluppo PWA',
    'proj.c9.tag':    'Sviluppo PWA',
    'proj.count':     '10 PROGETTI',

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
    'pz.why.p1':  'I menu PDF sono frustranti su mobile, impossibili da cercare e lenti da aggiornare. La pizzeria aveva bisogno di una soluzione che caricasse in un secondo, funzionasse offline e potesse essere aggiornata direttamente in HTML senza CMS o abbonamenti.',
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
    'sr.lead':    'Una landing page completa per un salone di parrucchieri a Ravenna — vetrina servizi, galleria a mosaico interattiva, CTA prenotazione, Google Maps integrato e un\'esperienza mobile-first con menu overlay a schermo intero e barra CTA mobile.',
    'sr.role':    'Designer & Sviluppatore',
    'sr.status':  'Online ↗',
    'sr.what.p1': '<strong>Serenamente è un salone di parrucchieri — donna &amp; uomo — in Via Bovini 28, Ravenna.</strong> Il sito presenta l\'identità del salone attraverso un\'estetica calda e tipograficamente ricca con Cormorant Garamond (serif) abbinato a Jost (sans-serif): un tono calmo ed elevato che rispecchia il nome del brand.',
    'sr.what.p2': 'Il sito copre l\'intero percorso dalla scoperta alla prenotazione: hero a schermo intero con il tagline del salone, griglia 6 servizi con prezzi, anteprima galleria a mosaico che rimanda alla pagina galleria dedicata, sezione "Chi siamo" con citazione del brand, CTA prenotazione con telefono e orari, e una mappa Google Maps live integrata.',
    'sr.why.p1':  'Il salone si affidava interamente al passaparola e a un account Instagram. I potenziali nuovi clienti non avevano modo di sfogliare i servizi, controllare i prezzi o trovare l\'indirizzo senza contattare direttamente. Una presenza web professionale era necessaria.',
    'sr.why.p2':  'Il design doveva trasmettere <strong>sofisticazione femminile e calma</strong> senza sembrare freddo. Il calore proveniva dal colore terracotta, dagli sfondi crema morbidi e dal carattere Cormorant Garamond. La funzionalità è arrivata rendendo il numero di telefono e la CTA prenotazione impossibili da non vedere su mobile.',
    'sr.f1.ttl':  'Anteprima Galleria a Mosaico',
    'sr.f1.dsc':  'Un mosaico CSS grid a 6 celle con spanning asimmetrico — la prima cella occupa 2 colonne e 2 righe per la gerarchia visiva. Ogni cella ha zoom al passaggio del mouse sulla foto, un overlay con gradiente e un\'etichetta che appare in hover. Cliccando qualsiasi cella si naviga alla pagina galleria dedicata. Div segnaposto vengono mostrati se mancano immagini — nessun layout rotto.',
    'sr.f2.ttl':  'Esperienza Mobile-First',
    'sr.f2.dsc':  'Su mobile, la nav desktop è sostituita da un pulsante hamburger animato che attiva un menu overlay a schermo intero con animazioni di ingresso scaglionate sui link. Una barra mobile persistente nella parte inferiore dello schermo mostra il numero di telefono del salone e un pulsante "Prenota" — un tocco per chiamare, sempre visibile. Questa è stata l\'aggiunta UX più impattante per un business fisico.',
    'sr.out.p1':  'Landing page completa (hero, griglia servizi, anteprima galleria, chi siamo, prenotazione, mappa, social, footer) più una pagina galleria dedicata separata. Animazioni di rivelazione allo scroll con IntersectionObserver in tutto il sito. Completamente responsive — menu overlay mobile separato, barra CTA mobile in basso e layout griglia adattati a 480px e 900px.',
    'sr.out.p2':  'Progettare per un\'attività di servizi con clientela prevalentemente femminile richiede un linguaggio visivo fondamentalmente diverso da un prodotto tech. Tipografia serif, colori caldi, spazio bianco generoso e transizioni morbide comunicano fiducia e cura — <strong>non solo estetica, ma segnali di conversione</strong>. La barra CTA mobile, aggiunta a tarda fase dello sviluppo, ha semplificato drasticamente il percorso dalla scoperta al contatto.',
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
    'fl.next':    'Fontara →',

    /* ── FONTARA ─────────────────────────────────────── */
    'fn.crumb':   'CEBAN MARIUS / PROGETTI / <span>FONTARA</span>',
    'fn.tag':     '07 — Sviluppo Frontend',
    'fn.lead':    'Un laboratorio di tipografia live per designer e developer — 175+ Google Fonts caricati su richiesta, 7 anteprime di layout reali, modalità confronto per valutare affiancati due abbinamenti di font, controlli tipografici completi, scorciatoie da tastiera e un URL condivisibile che codifica la tua configurazione esatta. Costruito con React, TypeScript e Zustand.',
    'fn.role':    'Designer & Sviluppatore',
    'fn.status':  'Live',
    'fn.what.p1': '<strong>Fontara è un laboratorio tipografico nel browser.</strong> Scegli un font per i titoli e uno per il corpo da 175+ Google Fonts, imposta la scala tipografica, regola spaziatura e peso, e vedi il risultato renderizzato in tempo reale in 7 contesti di layout reali: una landing page startup, un portfolio, un sito ristorante, un articolo editoriale, una pagina prodotto e-commerce, una dashboard SaaS e un foglio specimen tipografico puro. Ogni controllo aggiorna l\'anteprima istantaneamente — nessun ricaricamento, nessuna fase di build, nessuna registrazione.',
    'fn.what.p2': 'L\'intero stato dell\'applicazione — font, pesi, rapporti di scala, spaziatura, layout, viewport — è codificato nell\'hash dell\'URL. Copia il link e la configurazione esatta si ripristina su qualsiasi dispositivo. I font si caricano su richiesta tramite iniezione dinamica di link da Google Fonts, quindi solo i font effettivamente visualizzati accedono alla rete.',
    'fn.what.p3': 'Due modalità estendono il flusso principale. Confronto divide il canvas in due pannelli completamente indipendenti — ciascuno con il proprio abbinamento di font — per valutare due combinazioni sullo stesso layout contemporaneamente. Il modal Esporta CSS genera uno snippet CSS pronto per la produzione con il @import Google Fonts e tutte le variabili tipografiche come CSS custom properties.',
    'fn.why.p1':  'Scegliere gli abbinamenti di font è una delle parti più frustranti del lavoro di design iniziale. Trovi un font titolo che ti piace, apri Google Fonts in un\'altra scheda, carichi un font corpo candidato, incolli del testo in un documento e cerchi di immaginare come sembrerà su una pagina reale. Il ciclo di feedback è rotto — troppi passaggi tra l\'idea e il risultato.',
    'fn.why.p2':  '<strong>Fontara contrae quel ciclo.</strong> Carica qualsiasi Google Font in millisecondi, lo renderizza in contesti di layout reali — non Lorem Ipsum su una pagina bianca — e ti permette di vedere come si comporta l\'abbinamento a scala reale: titoli compatti, testo corpo lungo, didascalie, etichette UI. I suggerimenti di abbinamento curati riducono ulteriormente lo spazio di ricerca: scegli un font titolo e il selettore corpo mostra immediatamente i font che lo complementano bene in base a convenzioni di design reali.',
    'fn.why.p3':  'L\'URL condivisibile è stata una scelta di prodotto deliberata. Un abbinamento tipografico è utile solo se puoi condividerlo — con un collaboratore, un cliente o il te futuro. Codificare tutto lo stato in un hash base64 compatto significa nessun database, nessun account, nessuna logica server. Solo un link che funziona.',
    'fn.f1.ttl':  '7 Anteprime di Layout Reali',
    'fn.f1.dsc':  'Ognuno dei 7 layout è un componente React autonomo che renderizza un contesto UI realistico e ricco di contenuti. Startup: una landing page SaaS con hero, sottotitolo e lista funzionalità. Portfolio: la pagina di un case study con testo header e griglia progetti. Restaurant: un layout scuro e atmosferico con sezione menu. Article: testo editoriale lungo con citazioni e didascalie. E-commerce: pagina prodotto con prezzi e descrizione. Dashboard: un\'interfaccia analytics SaaS con schede metriche e tabelle dati. TypeScale: uno specimen tipografico puro — ogni livello di titolo (H1–H5), corpo e testo piccolo renderizzati insieme per valutare la relazione di scala completa a colpo d\'occhio. Il cambio di layout è istantaneo e mappato da tastiera ai tasti 1–7. Il tema dell\'anteprima (chiaro o scuro) si alterna indipendentemente con D.',
    'fn.f2.ttl':  'Modalità Confronto',
    'fn.f2.dsc':  'Premere C divide l\'anteprima in due pannelli, ciascuno con un abbinamento di font completamente indipendente. Il pannello attivo — quello che la sidebar sta modificando — è evidenziato da un bordo sottile. Puoi alternare tra i pannelli dalla sidebar o cliccando direttamente nell\'anteprima. Questo permette un vero confronto tipografico affiancato senza cambiare scheda o fare screenshot: lo stesso layout, lo stesso contenuto, due abbinamenti diversi, visibili contemporaneamente. La modalità confronto è disabilitata su mobile dove non c\'è abbastanza spazio orizzontale, e torna automaticamente all\'anteprima a pannello singolo.',
    'fn.f3.ttl':  'Controlli Tipografici e Salvataggio Abbinamento',
    'fn.f3.dsc':  'Oltre ai selettori di font, quattro controlli perfezionano il sistema tipografico: Dimensione base del font (px), Rapporto di scala (il moltiplicatore tra i livelli di titolo — Terza Minore 1.2, Terza Maggiore 1.25, Quarta Perfetta 1.33, Quinta Perfetta 1.5, Sezione Aurea 1.618), Altezza riga, e Spaziatura tra le lettere per titoli e corpo in modo indipendente. I font con supporto per assi variabili espongono uno slider Peso che si muove attraverso l\'intero range ottico. Il pulsante Salva abbinamento memorizza la combinazione corrente nel localStorage con uno slug con nome — i duplicati sono impediti — e la lista salvata appare nella sidebar per il richiamo con un clic. Il modal Esporta CSS genera uno snippet pronto per la copia: @import Google Fonts, tutti i livelli come CSS custom properties, e un\'anteprima della scala tipografica nel modal che mostra le dimensioni in pixel reali da H1 al testo piccolo.',
    'fn.f4.ttl':  'Scorciatoie da Tastiera e URL Condivisibile',
    'fn.f4.dsc':  'Un livello completo di tastiera si sovrappone all\'interfaccia. I tasti 1–7 cambiano layout; P entra in modalità Anteprima; C entra in modalità Confronto; D alterna il tema dell\'anteprima tra chiaro e scuro; ⌘K (Ctrl+K su Windows) apre il selettore font titolo; ⌘⇧K apre il selettore font corpo; i tasti freccia navigano la lista font nel selettore con anteprima live su ogni selezione; ? apre il pannello di riferimento scorciatoie completo. Il pulsante Condividi codifica l\'intero stato dell\'applicazione — font, pesi, scala, spaziatura, layout, viewport — in un hash base64 compatto aggiunto all\'URL. Aprendo questo link su qualsiasi dispositivo si ripristina la configurazione esatta: nessun server, nessun database, nessun account richiesto.',
    'fn.out.p1':  'Uno strumento tipografico completo nel browser: 175+ Google Fonts sfogliabili per categoria (Sans, Serif, Display, Script, Mono) e ricercabili per nome; suggerimenti di abbinamento curati che mostrano font corpo compatibili per qualsiasi font titolo selezionato; 7 anteprime di layout indipendenti (Startup, Portfolio, Restaurant, Article, E-commerce, Dashboard, TypeScale); testo anteprima modificabile — clicca qualsiasi titolo o testo corpo nel canvas per modificarlo in place e vedere il tuo contenuto nel carattere scelto; modalità confronto con due pannelli indipendenti; controlli tipografici per dimensione base, rapporto di scala, altezza riga e spaziatura tra lettere; slider peso font variabile; salvataggio abbinamento nel localStorage; esportazione CSS con import Google Fonts e CSS custom properties; scorciatoie da tastiera per tutte le azioni principali; e URL condivisibile che codifica la configurazione completa. Completamente responsive — la sidebar diventa un drawer a scomparsa su mobile.',
    'fn.out.p2':  'La sfida tecnica più interessante è stato il sistema di stato URL. Codificare una configurazione tipografica completa — due nomi di font, due pesi, cinque parametri numerici, il layout corrente e il viewport — in un URL abbastanza corto da essere effettivamente condivisibile ha richiesto di comprimere i nomi delle chiavi JSON a singoli caratteri prima della codifica base64. Il percorso di decodifica deve anche essere resiliente: hash malformati o troncati devono fallire in silenzio e tornare ai valori predefiniti. <strong>La navigazione da tastiera nel selettore font con anteprima live a ogni pressione del tasto freccia</strong> — caricare un nuovo Google Font a ogni battitura senza ritardi — ha richiesto un debouncing attento e la priorità ai font già in cache nel browser.',
    'fn.next':    'Fontara Widget →',

    /* ── FONTARA WIDGET ─────────────────────────────────── */
    'fw.crumb':   'CEBAN MARIUS / PROGETTI / <span>FONTARA WIDGET</span>',
    'fw.tag':     '08 — Sviluppo SaaS',
    'fw.lead':    'Un widget browser commerciale ed estensione Chrome che inietta un pannello di controllo tipografico in tempo reale in qualsiasi sito web live — 310+ Google Fonts, controllo contrasto WCAG, undo/redo, export in CSS/JSON/Tailwind/Figma token, e un backend SaaS completo con pagamenti Stripe, gestione licenze e fingerprinting del dispositivo. Costruito con Vite, TypeScript, Next.js 14, Prisma e Neon PostgreSQL.',
    'fw.role':    'Designer & Sviluppatore',
    'fw.status':  'Live',
    'fw.github':  'Privato',
    'fw.what.p1': '<strong>Fontara Widget è uno strumento tipografico browser commerciale — un widget JavaScript autonomo che si inietta in qualsiasi sito web live</strong> e permette a designer, developer e agenzie di testare e applicare abbinamenti di font direttamente sui propri contenuti. A differenza di un playground tipografico con layout di prova, il widget sovrappone controlli in tempo reale al prodotto reale dell\'utente, così ogni decisione sui font viene presa nel contesto giusto.',
    'fw.what.p2': 'Il widget è distribuito come singolo bundle IIFE — nessun framework, nessuna dipendenza — che si carica tramite un tag script con attributo chiave di licenza, un bookmarklet o un\'estensione Chrome. All\'attivazione monta un pannello di controllo mobile con sei gruppi di elementi (H1, H2, H3, H4–6, Body, Buttons, Nav), slider tipografici completi (dimensione, altezza riga, spaziatura lettere, spaziatura parole), selettore colore, assi font variabili (stretch, corsivo), selettori CSS personalizzati e anteprime font lazy-loaded per 310+ Google Fonts in 6 categorie. Ogni modifica viene applicata in tempo reale tramite tag style iniettati con !important per sovrascrivere gli stili della pagina host.',
    'fw.what.p3': 'La licenza PRO sblocca preset salvati con nome, sincronizzati al backend tramite la chiave di licenza dell\'utente, ed export in 5 formati: CSS completo con @import Google Fonts, JSON, snippet di configurazione Tailwind, CSS custom properties e JSON di token Figma. Un controllo contrasto WCAG valuta la leggibilità del colore del testo in tempo reale. L\'overlay delle scorciatoie da tastiera (?), lo stack undo/redo (50 istantanee, Ctrl+Z/Y) e il dock trascinabile completano il modello di interazione.',
    'fw.why.p1':  'Testare la tipografia su Lorem Ipsum su una tela bianca non è la stessa cosa di vedere un font sulla tua barra di navigazione reale, sul tuo titolo hero, sulla tua scheda prodotto. Il ciclo di feedback tra "ho scelto questo font" e "posso vedere come appare sul mio prodotto" è rotto quando il tuo strumento e il tuo prodotto sono in tab diverse.',
    'fw.why.p2':  '<strong>Fontara Widget chiude completamente quel divario.</strong> Poiché si inietta direttamente in qualsiasi sito web live, ogni decisione tipografica viene presa su contenuti reali, in contesto reale: le lunghezze di riga effettive, i vincoli di spaziatura reali, l\'interfaccia circostante reale. Il widget punta agli elementi già presenti nella pagina — h1, p, nav a, button — e li sovrascrive in place, così ciò che vedi nel pannello è ciò che pubblicherai.',
    'fw.why.p3':  'L\'estensione Chrome elimina persino il passaggio di iniezione dello script. Un clic inietta il widget su qualsiasi pagina. Il fingerprinting del dispositivo e il sistema di licenza permettono alla stessa chiave di funzionare su un massimo di 4 dispositivi per le licenze commerciali, senza memorizzare informazioni personali identificabili — il fingerprint è un hash FNV-1a non reversibile delle caratteristiche del browser.',
    'fw.f1.ttl':  'Architettura IIFE Senza Dipendenze',
    'fw.f1.dsc':  'Il widget è compilato da Vite in un singolo bundle IIFE (Immediately Invoked Function Expression). Nessun React, nessun Vue, nessun runtime esterno — ogni componente, gestore di stato e regola CSS è scritto in TypeScript vanilla e manipolazione DOM. Il build finale è un singolo file che si esegue al caricamento, crea il dock e il pannello tramite document.createElement, inietta un tag style per tutti gli stili del widget usando CSS custom properties per il tema, e monta il lazy-loader delle anteprime font via IntersectionObserver. Questa architettura significa che il widget funziona su qualsiasi pagina — con qualsiasi framework, bundler o stack — senza conflitti di dipendenze. Il formato IIFE di Vite con il minificatore esbuild mantiene l\'output piccolo e veloce. Il build di produzione viene anche processato da javascript-obfuscator per rendere il reverse engineering particolarmente difficile, poi precede un banner copyright.',
    'fw.f2.ttl':  'Fingerprinting FNV-1a e Verifica Licenza',
    'fw.f2.dsc':  'Le chiavi di licenza (formato: FTPR-XXXXX-XXXXX-XXXXX-XXXXX, alfabeto non ambiguo da 23 caratteri) vengono verificate su un backend Next.js. Il fingerprinting del dispositivo usa un hash FNV-1a (Fowler–Noll–Vo) a 32 bit: l\'hash parte da 2166136261 e processa ogni carattere della stringa combinata userAgent + lingua + risoluzione schermo + fuso orario + piattaforma con XOR e un moltiplicatore primo 16777619. L\'intero a 32 bit risultante viene codificato in base36 e troncato a 7 caratteri. Non è sicurezza crittografica — è un identificatore deterministico usato solo per contare i dispositivi unici per licenza e applicare il limite di attivazione (1 per Personale, 4 per Commerciale). Il backend memorizza i fingerprint in una tabella activation Postgres; l\'endpoint verify esegue una transazione atomica per prevenire race condition. I risultati vengono memorizzati nella cache localStorage per 24 ore con 6 giorni di tolleranza offline.',
    'fw.f3.ttl':  'Controllo Contrasto WCAG e Controlli Tipografici',
    'fw.f3.dsc':  'Il controllo contrasto calcola la luminanza relativa WCAG 2.1 per due colori hex qualsiasi. La luminanza relativa converte i canali RGB in valori di luce lineare via correzione gamma (valori ≤ 0,04045 divisi per 12,92; valori superiori elevati alla potenza 2,4 dopo scalatura 1/1,055) e li pondera come 0,2126R + 0,7152G + 0,0722B. Il rapporto di contrasto è (L1 + 0,05) / (L2 + 0,05) dove L1 > L2, verificato contro WCAG AA (≥ 4,5:1 testo normale, ≥ 3:1 testo grande) e AAA (≥ 7:1 testo normale). I controlli tipografici coprono: dimensione font (12–96px), peso font, altezza riga (0,8–2,5 senza unità), spaziatura lettere (−0,1 a 0,1em), spaziatura parole (−0,05 a 0,2em), font-stretch (75–125% per font variabili), font-style (normale / corsivo), text-transform e colore testo via selettore HSV. Il sistema undo/redo clona in profondità l\'oggetto stato dei gruppi di elementi tramite serializzazione JSON ad ogni mutazione e mantiene 50 istantanee in due stack.',
    'fw.f4.ttl':  'Estensione Chrome — Manifest V3 e OffscreenCanvas',
    'fw.f4.dsc':  'L\'estensione Chrome (Manifest V3) incorpora il widget IIFE compilato e lo inietta tramite la Scripting API su richiesta. Il popup controlla se #fontara-dock esiste nella tab attiva tramite chrome.scripting.executeScript per determinare lo stato (attivo / inattivo) e mostra l\'interfaccia appropriata. Il service worker in background disegna l\'icona della toolbar a runtime usando OffscreenCanvas: un rettangolo viola arrotondato viene disegnato tramite curve di Bezier quadratiche su un contesto canvas 2D, il testo "Fa" viene renderizzato in bianco Arial Bold, e l\'ImageData viene passato a chrome.action.setIcon() per tutte e quattro le dimensioni (16, 32, 48, 128px). Questo evita di distribuire file PNG pre-renderizzati — l\'icona viene generata programmaticamente dallo stesso colore brand del widget (#7c3aed). Il pulsante rimuovi nel popup elimina #fontara-dock e #fontara-styles dal DOM, smontando il widget senza ricaricare la pagina. Permessi: scripting, activeTab, storage.',
    'fw.out.p1':  'Un prodotto SaaS commerciale completo: il bundle IIFE Fontara Widget (310+ font in 6 categorie — sans-serif, serif, display, handwriting, monospace, sperimentale; 35 abbinamenti curati con 8 combinazioni esclusive PRO; 5 formati di export — CSS, JSON, Tailwind, CSS custom properties, Figma token; controllo contrasto WCAG; undo/redo a 50 istantanee; dock trascinabile; overlay scorciatoie da tastiera; modalità scura; assi font variabili; selettori CSS personalizzati; anteprime font lazy via IntersectionObserver); l\'app Next.js 14 Fontara PRO su app.fontara.it su Vercel, supportata da Neon PostgreSQL tramite Prisma ORM; flusso di pagamento Stripe con due piani live una tantum (Personale €29, Commerciale €89), generazione licenze tramite webhook, e revoca automatica al rimborso tramite evento charge.refunded; email transazionale Resend; dashboard dispositivi su /dashboard; l\'estensione Chrome (MV3); e widget di produzione obfuscato con banner copyright.',
    'fw.out.p2':  'Il pezzo tecnicamente più complesso è stata l\'architettura di verifica delle licenze. Un widget eseguito su siti di terze parti deve verificare la propria chiave senza esporla in modo da poter essere banalmente condivisa — ma non può fare crittografia pesante lato client. <strong>La soluzione è una chiamata server memorizzata nella cache con fingerprint:</strong> la chiave e il fingerprint del dispositivo vengono inviati al backend, il backend applica il limite per dispositivo in modo transazionale, e il risultato viene memorizzato in localStorage per 24 ore con 6 giorni di tolleranza offline. Questo significa che il widget funziona anche offline, applicando comunque i limiti per gli utenti onesti. Costruire un\'intera pipeline da pagamento a licenza — webhook Stripe → generazione chiave → email → attivazione → conteggio dispositivi — end-to-end da solo ha richiesto una comprensione profonda di ogni punto di integrazione: non solo chiamare API, ma gestire idempotenza dei webhook, transazioni atomiche, prevenzione delle race condition e degradazione controllata quando un passaggio fallisce.',
    'fw.next':    'GymLog →',

    /* ── GYMLOG ──────────────────────────────────────────── */
    'gl.crumb':   'CEBAN MARIUS / PROGETTI / <span>GYMLOG</span>',
    'gl.tag':     '09 — Sviluppo PWA',
    'gl.lead':    'Un\'app di tracciamento allenamenti PWA mobile-first — organizzazione per giorno, schede esercizi con serie/ripetizioni/peso, timer di recupero con progresso circolare e grafico della cronologia volume. Zero framework, zero dipendenze, completamente offline.',
    'gl.role':    'Designer & Sviluppatore',
    'gl.status':  'Online ↗',
    'gl.what.p1': '<strong>GymLog è un\'app di allenamento personale pensata per girare nativamente su mobile, installata dal browser alla schermata home.</strong> Le sessioni di allenamento sono organizzate per giorno — lunedì-domenica — con schede esercizi che tracciano più serie per esercizio. Ogni riga serie raccoglie ripetizioni e peso; toccare il pulsante di spunta lo segna verde e sfuma gli input. Un contatore mostra le serie completate a colpo d\'occhio.',
    'gl.what.p2': 'Ogni scheda esercizio ha anche un pulsante timer di recupero integrato. Toccandolo si apre un pannello con conto alla rovescia circolare — default 90 secondi, regolabile in passi da 15 secondi. Al termine, il cerchio diventa verde e il dispositivo vibra. Una mini barra compatta in fondo allo schermo persiste mentre il timer gira, così puoi registrare il prossimo esercizio senza perdere il conto del recupero.',
    'gl.why.p1':  'La maggior parte delle app palestra richiede un account, un abbonamento o accesso continuo alla rete. GymLog gira interamente su <code>localStorage</code> — nessun server, nessun login, nessuna sincronizzazione. Aprirla è veloce come qualsiasi app nativa perché è distribuita come PWA con un Service Worker che mette in cache tutte le risorse dopo il primo caricamento.',
    'gl.why.p2':  '<strong>Il vincolo di design era la semplicità.</strong> La sala pesi è un ambiente UX ostile: mani sudate, poco tempo, concentrazione ridotta. Ogni interazione doveva essere raggiungibile in un tocco. I grandi campi di input, il flash verde al completamento della serie, la mini barra timer persistente — esistono tutti per ridurre il carico cognitivo durante l\'allenamento.',
    'gl.f1.ttl':  'Organizzazione Allenamento per Giorno',
    'gl.f1.dsc':  'Sette pillole giorno (LUN–DOM) scorrono orizzontalmente in cima alla vista allenamento. Il giorno attivo è evidenziato in rosso. Ogni giorno memorizza la propria lista di esercizi in modo indipendente nel localStorage. Gli esercizi vengono aggiunti tramite un modal bottom sheet — nome, gruppo muscolare e tecnica — e persistono tra le sessioni. Un badge oro PR (personal record) appare automaticamente su qualsiasi serie che eguaglia o supera il peso precedente migliore.',
    'gl.f2.ttl':  'Timer di Recupero e Grafico Progressi',
    'gl.f2.dsc':  'Il timer di recupero circolare usa la tecnica SVG <code>stroke-dasharray</code> / <code>stroke-dashoffset</code> per disegnare l\'arco del conto alla rovescia. La durata è configurabile per sessione; il default è 90 secondi. Una mini barra timer con punto rosso pulsante persiste in fondo alla vista allenamento durante il conto, così la navigazione tra gli esercizi non interrompe mai il recupero. La tab Progressi renderizza un grafico a barre del volume settimanale (peso totale × ripetizioni) per qualsiasi esercizio, caricato dinamicamente dalla cronologia nel localStorage.',
    'gl.out.p1':  'Un tracciatore di allenamento PWA completo: registro allenamenti a 7 giorni, CRUD esercizi con gruppo muscolare e tecnica, registrazione multi-serie con ripetizioni e peso, completamento serie con evidenziazione verde, badge PR per nuovi record personali, timer di recupero circolare con durata regolabile e feedback tattile, mini barra timer persistente, note per esercizio, grafico a barre dei progressi con selettore esercizio, modalità scura/chiara, backup JSON esporta/importa e prompt di installazione alla schermata home.',
    'gl.out.p2':  'Le prestazioni di <code>localStorage</code> su mobile degradano notevolmente quando si ri-serializzano grandi oggetti annidati a ogni pressione di tasto. Il debouncing degli handler di input — salvando solo dopo una pausa di 300ms — ha eliminato il ritardo. Costruire l\'indicatore di progresso circolare senza una libreria di grafici ha richiesto di capire la geometria delle coordinate SVG e la relazione tra stroke-dasharray e la circonferenza del cerchio (2πr). <strong>La mini barra timer, aggiunta a metà dello sviluppo, si è rivelata la singola decisione UX più impattante</strong>: senza di essa, gli utenti perdevano il conto del tempo di recupero nel momento in cui scorrevano verso il basso per registrare la serie successiva.',
    'gl.next':    'Blocco →',

    /* ── BLOCCO ──────────────────────────────────────────── */
    'bl.crumb':   'CEBAN MARIUS / PROGETTI / <span>BLOCCO</span>',
    'bl.tag':     '10 — Sviluppo PWA',
    'bl.lead':    'Un\'app di note PWA mobile-first — promemoria con acquisizione rapida, schede idee ricche con supporto markdown, liste di controllo con progresso per voce, riordino tramite pressione lunga, etichette colore, ricerca e sistema di recupero dal cestino a 30 giorni. Zero framework, completamente offline.',
    'bl.role':    'Designer & Sviluppatore',
    'bl.status':  'Online ↗',
    'bl.what.p1': '<strong>Blocco è un taccuino personale progettato per essere aggiunto alla schermata home iOS/Android e usato come un\'app nativa.</strong> L\'interfaccia ha quattro tab: Prom (promemoria), Idee, Liste e Cestino. La barra di acquisizione rapida in cima alla tab Prom permette di aggiungere un promemoria in un tocco e Invio — nessun modal, nessun foglio, nessuna attesa. Idee e liste usano un FAB [+] mobile che apre un bottom sheet.',
    'bl.what.p2': 'Tutti e tre i tipi di nota condividono lo stesso involucro card: bordo etichetta colore (6 colori), appunta in cima, modifica ed eliminazione soft che sposta l\'elemento nella tab Cestino invece di distruggerlo subito. Gli elementi nel cestino mostrano un conto alla rovescia di scadenza e possono essere ripristinati individualmente, eliminati definitivamente o cancellati in blocco. Il cestino viene anche purgato automaticamente all\'avvio per gli elementi più vecchi di 30 giorni.',
    'bl.why.p1':  'Note di iOS e Google Keep richiedono account e sincronizzazione cloud. Blocco memorizza tutto in <code>localStorage</code> — aprirla carica istantaneamente tutti i dati, offline dal primo accesso. Il prompt di installazione PWA la rende indistinguibile da un\'app nativa una volta sulla schermata home.',
    'bl.why.p2':  '<strong>L\'estetica monospace era una scelta deliberata.</strong> IBM Plex Mono dà all\'app un aspetto minimale, terminale, che segnala precisione e intenzionalità. I pulsanti azione tra parentesi — <code>[pin]</code>, <code>[edit]</code>, <code>[del]</code> — rinforzano questo linguaggio. È un taccuino che sembra costruito per persone che si preoccupano dell\'aspetto delle cose.',
    'bl.f1.ttl':  'Quattro Tipi di Nota ed Etichette Colore',
    'bl.f1.dsc':  'I Prom sono promemoria con cerchio di spunta: toccare il cerchio fa scivolare la card con un\'animazione CSS translate e la rimuove dall\'array — completata, non eliminata. Le Idee sono note libere con titolo opzionale e rendering markdown (<code>**grassetto**</code>, <code>_corsivo_</code>). Le Liste sono liste di controllo con un contatore live fatto/totale e una riga di input inline "aggiungi voce" in fondo. Tutti i tipi supportano 6 puntini etichetta colore (rosso, arancione, giallo, verde, blu, viola) che si renderizzano come un bordo sinistro da 2,5px sulla card. Toccare il corpo di qualsiasi nota apre un overlay di lettura a schermo intero.',
    'bl.f2.ttl':  'Riordino tramite Pressione Lunga',
    'bl.f2.dsc':  'Tenere premuta una card per 420ms crea un clone fantasma (leggermente scalato e ruotato) che segue il dito. La card originale si sfuma all\'18% di opacità. Muovere il fantasma su un\'altra card la segna con un bordo tratteggiato. Il rilascio conferma il riordino estraendo l\'elemento dalla sua posizione e inserendolo all\'indice di destinazione. Il trucco <code>elementFromPoint</code> — nascondere il fantasma per un frame prima dell\'hit-test — è la chiave per trovare il target di rilascio senza un elemento overlay aggiuntivo. Solo eventi touch; il drag con mouse desktop non è implementato.',
    'bl.out.p1':  'Un\'app di note PWA completa: 4 sezioni (Prom, Idee, Liste, Cestino), barra di acquisizione rapida per promemoria istantanei, card ricche con titolo opzionale, grassetto/corsivo markdown, 6 etichette colore, appunta in cima, modal di modifica, riordino con ghost preview, overlay di lettura focus, ricerca globale con filtraggio live in tutte e tre le sezioni, intestazione statistiche con conteggi voci, cestino con TTL 30 giorni, azioni ripristina ed eliminazione definitiva, pulizia cestino in blocco, backup esporta/importa JSON, toggle modalità scura/chiara, nome utente personalizzabile e Twemoji per rendering emoji coerente su tutti i dispositivi.',
    'bl.out.p2':  'Costruire il drag-and-drop touch senza librerie è ingannevolmente sfumato. La soglia di pressione lunga da 420ms doveva essere calibrata con precisione: troppo corta e gli scroll normali attivano la creazione del fantasma; troppo lunga e sembra lenta. La soglia di movimento da 9 pixel che annulla il timer prima che scatti è stata la soluzione — distingue "l\'utente sta scorrendo" da "l\'utente sta fermo". <strong>L\'overlay di lettura focus — un tocco sul testo della nota che lo espande quasi a schermo intero — è stata un\'aggiunta tardiva che ha cambiato completamente la sensazione dell\'app</strong>: ha trasformato Blocco da uno strumento di gestione liste in qualcosa di più simile a un vero taccuino.',
    'bl.next':    'Donkey Joe →',
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
