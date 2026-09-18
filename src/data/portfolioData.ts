import type { Project, ServiceItem, ProcessStep, StudioInfo } from '../types';

export const studioInfo: StudioInfo = {
  designerName: "Varaprasad",
  studioName: "NIGHTOWL",
  tagline: "Art Direction. Print Mastery. Visual Impact.",
  location: "[CITY, COUNTRY]",
  email: "nightowldesigner26@gmail.com",
  phone: "+91 90102 75676",
  instagramUrl: "https://www.instagram.com/_NIGHT_OWL_THINK_OF_MOTLF",
  behanceUrl: "[BEHANCE URL]",
  whatsappUrl: "[WHATSAPP URL]",
  availability: "Available for select projects",
  heroHeadline: "Posters, campaigns, and visuals built to be noticed.",
  biography: [
    "Independent graphic designer and visual artist specializing in commercial advertising posters, outdoor flex banners, restaurant creatives, and high-impact social media campaigns.",
    "Driven by clean composition, bold product hierarchy, and meticulous color management to ensure every visual cuts through noise and converts across both large-format print and mobile feeds."
  ],
  strengths: [
    {
      title: "Commercial Advertising & Key Visuals",
      description: "Proven creative direction for automotive, luxury accessories, fashion, electronics, and culinary brands."
    },
    {
      title: "Large-Format Flex & Outdoor Banners",
      description: "Outdoor hoardings, promotional flex banners, gym media walls, and retail store displays engineered for distance readability."
    },
    {
      title: "High-CTR Social Media Creatives",
      description: "Dynamic promotional flyers, offer announcements (30%, 50% OFF), product showcases, and Instagram/Facebook ad formats."
    },
    {
      title: "Print Pre-Press & Substrate Calibration",
      description: "High-resolution CMYK preparation, bleed, color correction, spot separation, and vinyl flex substrate compatibility."
    }
  ],
  stats: [
    { label: "Posters & Creatives", value: "180+" },
    { label: "Print Production Run", value: "350K+" },
    { label: "Commercial Brands", value: "45+" },
    { label: "Client Satisfaction", value: "98%" }
  ]
};

export const projectsData: Project[] = [
  {
    id: "porsche-718-campaign",
    slug: "porsche-718-campaign",
    title: "Porsche 718 Cayman // Pure Drive",
    category: "Campaign Visuals",
    year: "2026",
    client: "[CLIENT NAME]",
    description: "Monolithic automotive campaign poster highlighting the sculptural profile and aerodynamic engineering of the Porsche 718 Boxster / Cayman.",
    coverImage: "/images/projects/artwork-15.jpg",
    images: [
      "/images/projects/artwork-15.jpg",
      "/images/projects/artwork-04.jpg"
    ],
    featured: true,
    accent: "ice",
    aspectRatio: "portrait",
    dimensions: "A1 / 594 × 841 mm // Outdoor Billboard",
    printSpec: "300 DPI // Spot Matte Lamination // Ultra HD Raster",
    challenge: "Deliver an automotive print poster that balances luxury sports heritage with modern editorial typography and studio reflections.",
    solution: "Structured a three-column detail inset framing the wheels, badge, and exhaust above a commanding road-contact perspective.",
    deliverables: ["Showroom Large-Format Posters", "Social Teaser Stills", "Press Advertisements", "Outdoor Flex Hoarding Adaptation"]
  },
  {
    id: "ford-mustang-legendary",
    slug: "ford-mustang-legendary",
    title: "Ford Mustang // Built to be Legendary",
    category: "Poster Design",
    year: "2026",
    client: "[CLIENT NAME]",
    description: "High-contrast urban muscle car poster celebrating the iconic 1964 heritage with aggressive typography and road-level studio lighting.",
    coverImage: "/images/projects/artwork-04.jpg",
    images: [
      "/images/projects/artwork-04.jpg",
      "/images/projects/artwork-15.jpg"
    ],
    featured: true,
    accent: "cobalt",
    aspectRatio: "portrait",
    dimensions: "24 × 36 inches Standard One-Sheet",
    printSpec: "Heavy Gloss Stock // High-Contrast Monochrome & Chrome",
    challenge: "Communicate raw American horsepower while maintaining clean, contemporary design appeal.",
    solution: "Used distressed bold typography angled behind the roofline with razor-sharp wheel rim callouts and asphalt ground shadows.",
    deliverables: ["Dealership Display Posters", "Digital Wallpaper Suite", "Merchandise Prints", "Social Story Templates"]
  },
  {
    id: "nike-air-jordan",
    slug: "nike-air-jordan",
    title: "Nike Air Jordan // Big Sale",
    category: "Social Media Campaign",
    year: "2026",
    client: "[CLIENT NAME]",
    description: "Energetic retail sneaker sale campaign pairing textured paper textures, dual-tone red-black split background, and oversized typographic brand anchor.",
    coverImage: "/images/projects/artwork-11.jpg",
    images: [
      "/images/projects/artwork-11.jpg",
      "/images/projects/artwork-05.jpg"
    ],
    featured: true,
    accent: "cobalt",
    aspectRatio: "portrait",
    dimensions: "1080 × 1080 px & A2 Print",
    printSpec: "RGB Retina // Press-Ready 300 DPI Retail Flyers",
    challenge: "Create immediate promotional urgency for retail sneaker drops without sacrificing premium streetwear aesthetics.",
    solution: "Crafted an oversized repeating 'NIKE' typographic watermark behind the sneaker with tactile paper creases and angled product elevation.",
    deliverables: ["Retail POS Window Decals", "Instagram Carousel Ads", "E-commerce Promo Banners", "Storefront Posters"]
  },
  {
    id: "iphone-16-pro-max",
    slug: "iphone-16-pro-max",
    title: "iPhone 16 Pro Max // Apple Intelligence",
    category: "Product Promotion",
    year: "2026",
    client: "[CLIENT NAME]",
    description: "Minimalist luxury tech showcase poster presenting the titanium finish and frontier A18 Pro architecture against textured parchment.",
    coverImage: "/images/projects/artwork-08.jpg",
    images: [
      "/images/projects/artwork-08.jpg",
      "/images/projects/artwork-16.jpg"
    ],
    featured: false,
    accent: "ice",
    aspectRatio: "portrait",
    dimensions: "500 × 700 mm Tech Retail Poster",
    printSpec: "Matte Velvet Touch // Warm Titanium Metallic Calibration",
    challenge: "Showcase dual perspectives of the flagship device with clear storage tiers and immediate booking callouts.",
    solution: "Arranged an overlapping front-and-back isometric alignment anchored by clean grotesque type and a dark circular acoustic halo.",
    deliverables: ["Authorized Retailer Posters", "Pre-Order Digital Banners", "Specs Sheet Graphics", "Social Feed Visuals"]
  },
  {
    id: "gucci-marmont-bag",
    slug: "gucci-marmont-bag",
    title: "Gucci GG Marmont // Small Shoulder Bag",
    category: "Product Promotion",
    year: "2025",
    client: "[CLIENT NAME]",
    description: "Editorial luxury fashion promotion featuring the quilted leather GG Marmont bag with multi-colorway swatches and boutique location details.",
    coverImage: "/images/projects/artwork-05.jpg",
    images: [
      "/images/projects/artwork-05.jpg",
      "/images/projects/artwork-17.jpg"
    ],
    featured: false,
    accent: "cobalt",
    aspectRatio: "portrait",
    dimensions: "A2 / 420 × 594 mm",
    printSpec: "Heavy Silk 350 GSM // Gold Foil Accents",
    challenge: "Present luxury price points and color variants in a clean boutique visual hierarchy.",
    solution: "Composed a 4-variant swatch gallery above the hero black leather bag, balanced by an understated monogram watermark.",
    deliverables: ["Mall Corridor Backlit Posters", "Magazine Advertorial Layout", "VIP Client Lookbook Spread", "Digital Ad Visuals"]
  },
  {
    id: "pro-fitness-gym",
    slug: "pro-fitness-gym",
    title: "Pro Fitness // Never Give Up",
    category: "Flex & Banner Design",
    year: "2025",
    client: "[CLIENT NAME]",
    description: "Monumental gym interior hoarding and outdoor billboard campaign encouraging fitness discipline and personal trainer enrollment.",
    coverImage: "/images/projects/artwork-10.jpg",
    images: [
      "/images/projects/artwork-10.jpg",
      "/images/projects/artwork-04.jpg"
    ],
    featured: true,
    accent: "ice",
    aspectRatio: "panoramic",
    dimensions: "12 × 4 m Flex Banner // Interior Standee",
    printSpec: "Heavy Duty 550 GSM PVC // Anti-Glare Matte Solvent",
    challenge: "Create an athletic, empowering poster designed to stand out within high-traffic fitness centers and street billboards.",
    solution: "Designed an aggressive typographic diagonal banner overlay across concrete gym architecture and barbell training equipment.",
    deliverables: ["Outdoor Gantry Flex Hoardings", "Gym Reception Posters", "Trainer Bio Display Boards", "Membership Campaign Flyers"]
  },
  {
    id: "grt-bridal-jewellery",
    slug: "grt-bridal-jewellery",
    title: "GRT Jewellers // Bridal Collection",
    category: "Event Branding",
    year: "2025",
    client: "[CLIENT NAME]",
    description: "Opulent festive and wedding promotional poster celebrating handcrafted heritage gold necklace suites with celebratory making-charge offers.",
    coverImage: "/images/projects/artwork-06.jpg",
    images: [
      "/images/projects/artwork-06.jpg",
      "/images/projects/artwork-05.jpg"
    ],
    featured: false,
    accent: "cobalt",
    aspectRatio: "portrait",
    dimensions: "B1 / 700 × 1000 mm Exhibition Print",
    printSpec: "Offset CMYK // Gold Lamination // Rich Royal Purple Calibration",
    challenge: "Blend traditional festive heritage with commercial 50% discount offers and retail branch contact information.",
    solution: "Engineered an arch-shaped dark vignette framing the bridal portrait and warm diya flame, accompanied by classical serif typography.",
    deliverables: ["Newspaper Front-Page Ads", "Showroom Standees", "Festival Bus Shelter Banners", "Social Greeting Creatives"]
  },
  {
    id: "cold-coffee-special",
    slug: "cold-coffee-special",
    title: "Taste the Special // Cold Coffee",
    category: "Poster Design",
    year: "2026",
    client: "[CLIENT NAME]",
    description: "Artisanal beverage promotional poster featuring swirling cream dynamics, floating roasted coffee beans, and warm caramel geometry.",
    coverImage: "/images/projects/artwork-03.jpg",
    images: [
      "/images/projects/artwork-03.jpg",
      "/images/projects/artwork-12.jpg"
    ],
    featured: false,
    accent: "ink",
    aspectRatio: "portrait",
    dimensions: "A2 / 420 × 594 mm Cafe Poster",
    printSpec: "300 DPI // Rich Warm Amber & Espresso Calibration",
    challenge: "Visually trigger sensory craving for a chilled coffee beverage during hot summer seasons.",
    solution: "Utilized bold western condensed type with distressed inline textures and levitating espresso beans framed by an amber arch.",
    deliverables: ["Cafe Counter Standees", "Drive-Thru Menu Board Posters", "Instagram Food Delivery Creatives", "Table Top Tent Cards"]
  },
  {
    id: "chicken-burger-promo",
    slug: "chicken-burger-promo",
    title: "Crispy Chicken Burger // 30% OFF",
    category: "Social Media Campaign",
    year: "2026",
    client: "[CLIENT NAME]",
    description: "Mouth-watering fast food promotional creative featuring crispy fried chicken, fresh lettuce, and flying bell peppers for delivery apps.",
    coverImage: "/images/projects/artwork-01.jpg",
    images: [
      "/images/projects/artwork-01.jpg",
      "/images/projects/artwork-13.jpg"
    ],
    featured: false,
    accent: "cobalt",
    aspectRatio: "portrait",
    dimensions: "1080 × 1080 px Social & A3 In-Store Poster",
    printSpec: "Vibrant Warm Yellow // High-Speed Food Photography Color Prep",
    challenge: "Generate high conversion clicks on food delivery platforms and foot-traffic orders.",
    solution: "Coupled expressive casual script headlines with a vibrant sunny background and clear discount badge annotations.",
    deliverables: ["Swiggy / Zomato Banner Ads", "Instagram Stories Suite", "Window Vinyl Stickers", "Print Menu Inserts"]
  },
  {
    id: "embark-perfume-men",
    slug: "embark-perfume-men",
    title: "Embark Perfume // Stand Out, Stay True",
    category: "Product Promotion",
    year: "2025",
    client: "[CLIENT NAME]",
    description: "Sophisticated fragrance campaign visual for 'My Time' Eau de Parfum, featuring aquatic splash vectors, raw stone plinth, and striped backdrop.",
    coverImage: "/images/projects/artwork-17.jpg",
    images: [
      "/images/projects/artwork-17.jpg",
      "/images/projects/artwork-16.jpg"
    ],
    featured: false,
    accent: "cobalt",
    aspectRatio: "portrait",
    dimensions: "A1 Exhibition / Retail Counter Visual",
    printSpec: "Deep Cyan to Obsidian Gradient // Matte Finish",
    challenge: "Convey the invigorating freshness and masculine sophistication of an ocean-inspired scent in a static print ad.",
    solution: "Positioned the glass fragrance flask on textured slate rock with frozen water droplet splashes and architectural vertical pinstripes.",
    deliverables: ["Department Store Fragrance Bay Displays", "Magazine Full-Page Ad", "Digital Social Campaign", "Tester Display Cards"]
  },
  {
    id: "titan-minimals-watch",
    slug: "titan-minimals-watch",
    title: "Titan Minimals // Quartz Analog",
    category: "Product Promotion",
    year: "2025",
    client: "[CLIENT NAME]",
    description: "Stealth black horological campaign poster highlighting the gunmetal finish, minimal dial markers, and 24-month warranty reassurance.",
    coverImage: "/images/projects/artwork-16.jpg",
    images: [
      "/images/projects/artwork-16.jpg",
      "/images/projects/artwork-08.jpg"
    ],
    featured: false,
    accent: "ice",
    aspectRatio: "portrait",
    dimensions: "A2 / 420 × 594 mm",
    printSpec: "Rich Deep Blacks // Metallic Brushed Dial Calibration",
    challenge: "Highlight clean minimalist watch aesthetics while ensuring price transparency and technical assurance.",
    solution: "Used theatrical top spotlighting on the watch pedestal with monospaced feature tags and a subtle Titan logo watermark.",
    deliverables: ["Titan World Store Posters", "E-commerce Landing Banner", "Social Ads Suite", "Print Catalogue Cover"]
  },
  {
    id: "jawa-motorcycle-dark",
    slug: "jawa-motorcycle-dark",
    title: "Jawa Motorcycles // Dark Edition",
    category: "Poster Design",
    year: "2025",
    client: "[CLIENT NAME]",
    description: "Moody, low-key automotive poster showcasing the classic bobber silhouette, leather saddle, and matte black engine finish.",
    coverImage: "/images/projects/artwork-09.jpg",
    images: [
      "/images/projects/artwork-09.jpg",
      "/images/projects/artwork-04.jpg"
    ],
    featured: false,
    accent: "ink",
    aspectRatio: "portrait",
    dimensions: "B2 / 500 × 707 mm Collector Poster",
    printSpec: "Uncoated Heavy Matte // Deep Obsidian Pigment",
    challenge: "Capture the nostalgic neo-retro bobber appeal without losing mechanical engine detail in deep shadows.",
    solution: "Calibrated edge rim highlights around the spoke wheels and teardrop fuel tank with classic badge stamp.",
    deliverables: ["Biker Club Screenprints", "Dealership Wall Murals", "Social Teaser Series", "Postcard Collector Packs"]
  },
  {
    id: "delicious-pizza-offer",
    slug: "delicious-pizza-offer",
    title: "Artisan Pizza // 20% OFF Special",
    category: "Social Media Campaign",
    year: "2026",
    client: "[CLIENT NAME]",
    description: "High-appetite promotional creative for gourmet woodfired pizza with fresh basil, pepperoni, and dynamic splash accents.",
    coverImage: "/images/projects/artwork-13.jpg",
    images: [
      "/images/projects/artwork-13.jpg",
      "/images/projects/artwork-14.jpg"
    ],
    featured: false,
    accent: "cobalt",
    aspectRatio: "portrait",
    dimensions: "1080 × 1080 px & Delivery Box Inserts",
    printSpec: "Food-Safe Box Inserts // Retina Social RGB",
    challenge: "Deliver immediate visual stoppage on mobile feeds for weekend pizza orders.",
    solution: "Centrally framed the oven-baked pie against a sweeping curved yellow backdrop with bold distressed brush lettering.",
    deliverables: ["Social Ad Campaigns", "Box Top Flyers", "Digital Menu Visuals", "Coupon Cards"]
  },
  {
    id: "tasty-noodles-promo",
    slug: "tasty-noodles-promo",
    title: "Tasty Noodles // 50% OFF",
    category: "Social Media Campaign",
    year: "2026",
    client: "[CLIENT NAME]",
    description: "Playful Asian street food creative showcasing a steaming bowl of noodles lifted by chopsticks with flying chili flakes.",
    coverImage: "/images/projects/artwork-14.jpg",
    images: [
      "/images/projects/artwork-14.jpg",
      "/images/projects/artwork-01.jpg"
    ],
    featured: false,
    accent: "cobalt",
    aspectRatio: "portrait",
    dimensions: "1080 × 1080 px Social Suite",
    printSpec: "Deep Olive Green // High Saturation Vegetable Tones",
    challenge: "Highlight fresh noodle texture and substantial discount percentage in a unified brand frame.",
    solution: "Integrated a vertical chopstick pull extending above the bowl, balanced by an organic cloud-shaped 50% discount badge.",
    deliverables: ["Instagram Post & Stories", "Food Delivery Thumbnails", "Storefront Poster", "Digital Menu Boards"]
  },
  {
    id: "lemon-juice-refresh",
    slug: "lemon-juice-refresh",
    title: "Fresh Lemon Juice // 100% Natural",
    category: "Poster Design",
    year: "2025",
    client: "[CLIENT NAME]",
    description: "Vibrant and refreshing juice poster featuring a chilled martini glass with lime splash, mint leaves, and ice cube crystals.",
    coverImage: "/images/projects/artwork-12.jpg",
    images: [
      "/images/projects/artwork-12.jpg",
      "/images/projects/artwork-07.jpg"
    ],
    featured: false,
    accent: "cobalt",
    aspectRatio: "portrait",
    dimensions: "A2 / 420 × 594 mm",
    printSpec: "High-Gloss Paper // Emerald Green & Citrus Yellow Calibration",
    challenge: "Create a pure, thirst-quenching visual statement for juice bars and summer pop-up stalls.",
    solution: "Built a circular white horizon anchoring an explosive mint-lemon splash on an emerald green gradient canvas.",
    deliverables: ["Juice Bar Counter Displays", "Summer Event Posters", "Social Media Announcements", "Kiosk Window Vinyl"]
  },
  {
    id: "birthday-cake-promo",
    slug: "birthday-cake-promo",
    title: "Delicious Birthday Cake // 50% OFF",
    category: "Social Media Campaign",
    year: "2025",
    client: "[CLIENT NAME]",
    description: "Elegant pastel bakery promotional poster showcasing a tiered pink hydrangea flower cake for celebration orders.",
    coverImage: "/images/projects/artwork-02.jpg",
    images: [
      "/images/projects/artwork-02.jpg",
      "/images/projects/artwork-07.jpg"
    ],
    featured: false,
    accent: "ice",
    aspectRatio: "portrait",
    dimensions: "1080 × 1080 px & Bakery Window Poster",
    printSpec: "Soft Rose Palette // 300 DPI Fine Art Reproduction",
    challenge: "Blend celebration bakery discounts with delicate artisanal sugar-flower craftsmanship.",
    solution: "Divided the background into two-tone dusty mauve and burgundy planes, framing the intricate petal texture of the cake.",
    deliverables: ["Bakery Window Posters", "Wedding & Birthday Catalogues", "Instagram Ad Creatives", "Order Voucher Cards"]
  },
  {
    id: "yummy-ice-cream",
    slug: "yummy-ice-cream",
    title: "Gourmet Ice Cream Shakes",
    category: "Product Promotion",
    year: "2025",
    client: "[CLIENT NAME]",
    description: "Sumptuous dessert parlor poster featuring dual stacked strawberry and chocolate sundaes with waffle sticks and Oreo toppings.",
    coverImage: "/images/projects/artwork-07.jpg",
    images: [
      "/images/projects/artwork-07.jpg",
      "/images/projects/artwork-12.jpg"
    ],
    featured: false,
    accent: "cobalt",
    aspectRatio: "portrait",
    dimensions: "A2 / 420 × 594 mm",
    printSpec: "High-Gloss Water Resistant Stock",
    challenge: "Stimulate instant sweet cravings with multi-layered confectionery textures.",
    solution: "Highlighted rich chocolate nut sprinkles and strawberry glaze against warm creamy background tones.",
    deliverables: ["Dessert Kiosk Standees", "Menu Board Inserts", "Social Media Promo Ads", "Digital Delivery Banners"]
  }
];

export const servicesData: ServiceItem[] = [
  {
    number: "01",
    title: "Poster Design",
    tagline: "Commercial, cultural, and promotional posters engineered for maximum street visibility.",
    description: "Custom exhibition, automotive, movie, and commercial product posters built on balanced visual hierarchy, striking focal compositions, and calibrated typography. Press-ready for offset, screenprint, or digital printing.",
    deliverables: ["Press-ready A0/A1/A2 PDFs", "Spot Gloss & Foil Separation Layers", "High-Res Master Files", "Realistic Presentation Mockups"],
    specs: "300 DPI // CMYK FOGRA39 // Bleed & Crop Marks Included"
  },
  {
    number: "02",
    title: "Flex & Banner Design",
    tagline: "Large-format outdoor hoardings and commercial banners engineered for distance reading.",
    description: "Oversized flex hoardings, motorway unipoles, gym media walls, and conference backdrops. Meticulously designed for distance perception, outdoor weather resistance, and high-impact contractor installation.",
    deliverables: ["Scaled Vector Artwork (1:10 or 1:1)", "High-Res TIF/PDF for Solvent Printing", "Grommet & Pole Pocket Specifications", "Site Preview Mockup"],
    specs: "Frontlit/Backlit 550 GSM PVC // UV Stable Inks // 150-300 DPI"
  },
  {
    number: "03",
    title: "Social Media Creatives",
    tagline: "High-converting promo flyers, discount campaigns, and social media suites.",
    description: "Scroll-stopping promotional creatives for Instagram, Facebook, and food delivery apps. From 30%/50% offer announcements to product drops, engineered to maximize engagement and order conversions.",
    deliverables: ["Multi-Ratio Suites (1:1, 4:5, 9:16)", "Figma/Photoshop Layered Master Kits", "High-Resolution JPEGs/PNGs", "Typography & Color Assets"],
    specs: "Retina RGB // Sub-500KB Optimized // Tested for Mobile Feeds"
  },
  {
    number: "04",
    title: "Campaign Visuals",
    tagline: "Comprehensive key visuals and marketing campaigns unifying print, digital, and retail.",
    description: "End-to-end visual campaigns for automotive launches, luxury accessories, and retail promotions. We establish the master key visual and roll it out across outdoor hoardings, retail POS, and digital channels.",
    deliverables: ["Master Key Visual (KV)", "Cross-Channel Style Guide", "Outdoor & Digital Adaptations", "Press & Media Kit Assets"],
    specs: "Multi-Platform Design System // Vector & Ultra-Res Raster"
  },
  {
    number: "05",
    title: "Event & Promotional Graphics",
    tagline: "Jewellery exhibitions, festival signage, credentials, and venue branding.",
    description: "From bridal jewellery exhibition posters to festival banners and retail standees. Creating cohesive tangible touchpoints that drive footfall and sales across retail showrooms and event halls.",
    deliverables: ["Standee & Backdrop Artworks", "Directional Signage", "Newspaper Advertisements", "Invitation Cards & Flyers"],
    specs: "Production-Calibrated // Direct Factory Vendor Handoff"
  },
  {
    number: "06",
    title: "Brand Collateral",
    tagline: "Stationery, product packaging sleeves, lookbooks, and retail marketing materials.",
    description: "Sophisticated print collateral that elevates consumer perception. Packaging sleeves, business cards, promotional lookbooks, and in-store menu suites designed with precision finishing.",
    deliverables: ["Packaging Sleeve Blueprints", "Stationery Suites", "Foil & Die-Cut Guidelines", "Digital PDF Portfolios"],
    specs: "Pantone Color Matching // Special Stock & Paper Selection"
  }
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Brief & Objectives",
    duration: "Day 01–02",
    description: "We analyze campaign goals, target audience, viewing distance, format requirements (Flex, Poster, or Social), and promotional offers to establish a focused creative brief.",
    keyAction: "Creative brief signoff & asset gathering"
  },
  {
    step: "02",
    title: "Art Direction & Concepts",
    duration: "Day 03–05",
    description: "Developing 2–3 distinct visual directions with typographic hierarchy, color moods, and product staging, presented in realistic contextual mockups.",
    keyAction: "Concept presentation & directional selection"
  },
  {
    step: "03",
    title: "Design & Collateral Rollout",
    duration: "Day 06–09",
    description: "Fleshing out the chosen direction into complete campaign collateral. Fine-tuning typography, dynamic crops, promotional discount badges, and multi-format adaptations.",
    keyAction: "Full collateral review & feedback iterations"
  },
  {
    step: "04",
    title: "Pre-Press & Refinement",
    duration: "Day 10–11",
    description: "Micro-adjustments to color profiles (CMYK vs RGB), resolution checks (300 DPI), bleed margins, and spot layers to guarantee zero printing surprises.",
    keyAction: "Color separation & proof verification"
  },
  {
    step: "05",
    title: "Master File Delivery",
    duration: "Day 12",
    description: "Packaging all master vectors, layered PSD files, press-ready PDFs, and web-optimized JPGs into an organized archive with print vendor specifications.",
    keyAction: "Production archive handoff & printing support"
  }
];
