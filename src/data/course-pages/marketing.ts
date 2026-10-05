import type { CoursePage } from "./types";
import { aeo } from "./aeo";
import { digitalMarketing } from "./digital-marketing";
import { dropshippingEcommerce } from "./dropshipping-ecommerce";
import { geo } from "./geo";
import { googleAds } from "./google-ads";
import { graphicDesigning } from "./graphic-designing";
import { seo } from "./seo";
import { socialMediaMarketing } from "./social-media-marketing";
import { uiUxDesign } from "./ui-ux-design";

export const marketingCourses: CoursePage[] = [
  digitalMarketing,
  socialMediaMarketing,
  googleAds,
  seo,
  dropshippingEcommerce,
  geo,
  aeo,
  graphicDesigning,
  uiUxDesign,
  {
    slug: "wordpress",
    title: "WordPress Development Course",
    navLabel: "WordPress",
    group: "marketing",
    icon: "Globe",
    tagline:
      "Build fast, secure, SEO-ready business websites with WordPress, Elementor, WooCommerce and custom themes, and launch them on real hosting.",
    level: "Beginner",
    duration: "2–3 Months",
    eligibility: "12th pass or above; basic computer skills",
    overview: [
      "This course teaches you to design, build and maintain professional websites with WordPress, the most widely used content management system. You begin with themes, page builders and plugins, then move to WooCommerce, performance, security and an introduction to custom theme and plugin development with PHP.",
      "Projects are built for real businesses and deployed on live hosting. Classroom batches in Jalandhar and live online batches include mentor reviews, certification and placement assistance, and the skills also support freelance web design work.",
    ],
    gains: [
      "The ability to build complete business websites without starting from scratch each time",
      "Practical skills in Elementor, Gutenberg block editing and WooCommerce",
      "SEO, speed and security best practices built into every site",
      "Introductory PHP for custom themes, plugins and shortcodes",
      "TechCADD certification, live site portfolio and placement assistance",
    ],
    syllabus: [
      {
        title: "WordPress Setup and Hosting",
        summary:
          "Understand domains, hosting and how to install and configure WordPress correctly.",
        topics: [
          "Domains, DNS, hosting types and SSL",
          "Local development with LocalWP",
          "Installing WordPress and essential settings",
          "Dashboard, posts, pages, media and users",
          "Backups and staging environments",
        ],
      },
      {
        title: "Themes and Block Editor",
        summary:
          "Design layouts using modern block themes and the Gutenberg editor.",
        topics: [
          "Choosing and customising themes",
          "Gutenberg blocks, patterns and reusable blocks",
          "Full Site Editing and global styles",
          "Menus, widgets and navigation design",
          "Child themes for safe customisation",
        ],
      },
      {
        title: "Page Builders with Elementor",
        summary:
          "Build responsive, well-designed pages quickly using a visual builder.",
        topics: [
          "Elementor sections, containers and widgets",
          "Global colours, fonts and design systems",
          "Responsive design for mobile and tablet",
          "Popups, forms and dynamic content",
          "Landing pages that convert",
        ],
      },
      {
        title: "Plugins and Functionality",
        summary:
          "Extend a site with trusted plugins while keeping it fast and secure.",
        topics: [
          "Choosing and vetting plugins",
          "Contact forms with Contact Form 7 and WPForms",
          "Custom post types and Advanced Custom Fields",
          "Multilingual sites with Polylang or WPML",
          "Membership and booking plugin basics",
        ],
      },
      {
        title: "WooCommerce E-commerce",
        summary:
          "Set up an online store with products, payments, shipping and orders.",
        topics: [
          "Products, variations, categories and attributes",
          "Payment gateways such as Razorpay and PayU",
          "Shipping zones, taxes and GST invoice basics",
          "Order management and email notifications",
          "Coupons, abandoned cart and store analytics",
        ],
      },
      {
        title: "SEO, Speed and Security",
        summary:
          "Make every site search-friendly, quick to load and protected against common attacks.",
        topics: [
          "Yoast SEO and Rank Math configuration",
          "Caching, image optimisation and Core Web Vitals",
          "Security hardening and login protection",
          "Updates, maintenance plans and malware cleanup basics",
        ],
      },
      {
        title: "Custom Development with PHP",
        summary:
          "Go beyond templates with an introduction to theme and plugin development.",
        topics: [
          "WordPress template hierarchy and the Loop",
          "Actions, filters and hooks",
          "Building a simple custom plugin and shortcode",
          "REST API basics",
          "Version control with Git",
        ],
      },
      {
        title: "Capstone Website Launch and Career Preparation",
        summary:
          "Deliver a complete live website for a real client and prepare for interviews and freelance work.",
        topics: [
          "Requirement gathering and site planning",
          "Building, testing and launching on live hosting",
          "Client handover, training and maintenance documentation",
          "Portfolio, resume and mock interviews",
          "Freelance proposals and working with overseas clients",
        ],
      },
    ],
    tools: [
      "WordPress",
      "Elementor",
      "WooCommerce",
      "Gutenberg",
      "LocalWP",
      "Advanced Custom Fields",
      "Yoast SEO",
      "Rank Math",
      "Contact Form 7",
      "Git",
      "cPanel",
      "Figma",
    ],
    projects: [
      {
        title: "Business Website",
        text: "Build a multi-page responsive website for a local business with contact forms and Google Maps integration.",
        tags: ["WordPress", "Elementor", "Responsive"],
      },
      {
        title: "Portfolio and Blog Site",
        text: "Create a personal or agency site with a blog, custom post types and SEO configuration.",
        tags: ["Blog", "SEO", "ACF"],
      },
      {
        title: "WooCommerce Store",
        text: "Launch an online store with products, payment gateway, shipping and order emails.",
        tags: ["WooCommerce", "Payments", "E-commerce"],
      },
      {
        title: "Landing Page for a Campaign",
        text: "Design a high-converting landing page with tracking, forms and fast load time.",
        tags: ["Landing Page", "Conversion", "Speed"],
      },
      {
        title: "Custom Plugin",
        text: "Write a small PHP plugin that adds a shortcode and admin settings page.",
        tags: ["PHP", "Plugin", "Hooks"],
      },
      {
        title: "Site Speed and Security Makeover",
        text: "Improve an existing slow site with caching, image optimisation and security hardening, then report the changes.",
        tags: ["Performance", "Security", "Maintenance"],
      },
    ],
    careers: [
      {
        role: "WordPress Developer",
        work: "Builds and customises WordPress sites, themes and plugins.",
        hirers: "Web agencies, software companies and in-house digital teams",
      },
      {
        role: "Website Designer",
        work: "Designs and builds responsive sites using page builders.",
        hirers: "Digital agencies, design studios and startups",
      },
      {
        role: "WooCommerce Specialist",
        work: "Sets up and manages online stores, payments and shipping.",
        hirers: "E-commerce agencies and small and medium retail businesses",
      },
      {
        role: "Website Maintenance Executive",
        work: "Handles updates, backups, speed and security for client sites.",
        hirers: "Hosting companies, agencies and managed service providers",
      },
      {
        role: "Freelance Web Developer",
        work: "Delivers websites and maintenance plans directly to business clients.",
        hirers: "Self-employed work with local businesses, exporters and overseas clients",
      },
    ],
    whyNow: [
      "Small and medium businesses across Punjab and North India still need professional websites, and WordPress gives them a manageable, cost-conscious way to own their content.",
      "Modern WordPress with block themes, WooCommerce and strong SEO practices lets one developer deliver complete solutions, which suits both agency and freelance careers.",
    ],
    faqs: [
      {
        q: "Do I need coding knowledge to learn WordPress?",
        a: "No. The first half of the course is built around themes, blocks and Elementor. Introductory PHP is taught later for those who want to customise deeper.",
      },
      {
        q: "Will I learn to sell products online?",
        a: "Yes. A full module covers WooCommerce, including products, Razorpay and PayU payment setup, shipping, tax and order management.",
      },
      {
        q: "Will my projects be on real hosting?",
        a: "Yes. You deploy projects to live hosting with a domain and SSL, so you experience the complete launch process.",
      },
      {
        q: "Is this course useful for freelancing?",
        a: "Yes. The capstone covers client handover, maintenance plans and proposals, so you can begin freelance website work confidently.",
      },
    ],
    related: ["seo", "web-designing", "php-full-stack"],
  },
  {
    slug: "shopify",
    title: "Shopify E-commerce Course",
    navLabel: "Shopify",
    group: "marketing",
    icon: "ShoppingCart",
    tagline:
      "Set up, design and grow online stores with Shopify, from products, payments and themes to ads, SEO and dropshipping or export selling.",
    level: "Beginner",
    duration: "2–3 Months",
    eligibility: "12th pass or above; entrepreneurs and business owners welcome",
    overview: [
      "This course shows you how to launch and run a complete online store on Shopify. You learn store setup, product and collection management, theme customisation, payments and shipping, and then the marketing and analytics that bring in customers and repeat orders.",
      "It suits students, business owners, exporters and traders in Punjab who want to sell online in India or internationally. You build real stores in live projects with mentor reviews, and classroom and live online batches include certification and placement assistance.",
    ],
    gains: [
      "The ability to build a complete, professional Shopify store from scratch",
      "Skills in product setup, themes, apps, payments, shipping and taxes",
      "Store marketing with Google Shopping, Meta Ads, email and SEO",
      "Understanding of dropshipping, print on demand and export selling models",
      "TechCADD certification, a live store portfolio and placement assistance",
    ],
    syllabus: [
      {
        title: "E-commerce Foundations and Store Planning",
        summary:
          "Choose a niche and business model and plan a store around real customers.",
        topics: [
          "E-commerce models: own inventory, dropshipping, print on demand",
          "Niche and competitor research",
          "Brand name, logo and positioning basics",
          "Planning catalogue, collections and customer journey",
          "Legal basics: GST, business registration and policies",
        ],
      },
      {
        title: "Shopify Store Setup",
        summary:
          "Create and configure a Shopify store with the settings every store needs.",
        topics: [
          "Creating an account and understanding the Shopify admin",
          "Adding products, variants, media and inventory",
          "Collections, tags and navigation menus",
          "Domains, email and store policies",
          "Staff accounts and permissions",
        ],
      },
      {
        title: "Themes and Store Design",
        summary:
          "Design a store that looks trustworthy and converts on mobile first.",
        topics: [
          "Choosing and customising an Online Store 2.0 theme",
          "Sections, blocks and the theme editor",
          "Homepage, product page and collection page best practices",
          "Basics of Liquid templating for small edits",
          "Branding with Canva and Figma",
        ],
      },
      {
        title: "Payments, Shipping and Taxes",
        summary:
          "Set up the operations that let customers pay and receive orders reliably.",
        topics: [
          "Payment gateways including Razorpay, UPI and cash on delivery",
          "Shipping zones and courier partners such as Shiprocket",
          "GST settings and invoices",
          "Selling internationally with Shopify Markets and multiple currencies",
          "Returns, refunds and customer service workflows",
        ],
      },
      {
        title: "Apps, Automation and Dropshipping",
        summary:
          "Extend the store with the right apps and automate order handling.",
        topics: [
          "Evaluating and installing Shopify apps",
          "Dropshipping with DSers and supplier vetting",
          "Print on demand workflows",
          "Reviews, upsells and bundles",
          "Shopify Flow and basic automation",
        ],
      },
      {
        title: "Store Marketing and Growth",
        summary:
          "Drive traffic and sales through search, social and email.",
        topics: [
          "Shopify SEO: titles, collections and structured data",
          "Google Shopping and Merchant Center basics",
          "Meta Advantage+ shopping campaigns and catalogue setup",
          "Email and WhatsApp marketing with Klaviyo",
          "Abandoned cart recovery and retention",
        ],
      },
      {
        title: "Analytics and Conversion Optimisation",
        summary:
          "Read store data and improve the customer journey.",
        topics: [
          "Shopify Analytics and reports",
          "GA4 e-commerce tracking and Meta Pixel",
          "Funnel analysis and checkout optimisation",
          "Page speed and image optimisation",
        ],
      },
      {
        title: "Capstone Live Store and Career Preparation",
        summary:
          "Launch a complete live store and prepare for interviews and freelance work.",
        topics: [
          "End-to-end store build with products, design and payments",
          "Marketing launch plan with a mentor review",
          "Final presentation and store audit",
          "Portfolio, resume and mock interviews",
          "Freelance store setup packages and client onboarding",
        ],
      },
    ],
    tools: [
      "Shopify",
      "Shopify Markets",
      "Shiprocket",
      "Razorpay",
      "DSers",
      "Klaviyo",
      "Canva",
      "Google Merchant Center",
      "Meta Ads Manager",
      "Google Analytics 4",
      "Figma",
    ],
    projects: [
      {
        title: "Fashion or Lifestyle Store",
        text: "Build a complete branded store with collections, variants, custom theme sections and policies.",
        tags: ["Shopify", "Theme", "Branding"],
      },
      {
        title: "Dropshipping Store",
        text: "Set up a supplier-connected store using DSers and automate order forwarding.",
        tags: ["Dropshipping", "Automation", "Apps"],
      },
      {
        title: "Export-Ready Store",
        text: "Configure multi-currency selling and international shipping for a Punjab-made product line.",
        tags: ["Export", "Markets", "Shipping"],
      },
      {
        title: "Checkout and Payment Setup",
        text: "Integrate Razorpay, UPI and cash on delivery with GST-ready invoices and tested orders.",
        tags: ["Payments", "GST", "Checkout"],
      },
      {
        title: "Store Ad Campaigns",
        text: "Connect the catalogue to Google Merchant Center and Meta, then launch Shopping and Advantage+ campaigns.",
        tags: ["Google Shopping", "Meta Ads", "Catalogue"],
      },
      {
        title: "Email Retention Flows",
        text: "Create welcome, abandoned cart and post-purchase flows in Klaviyo and review their results.",
        tags: ["Klaviyo", "Email", "Retention"],
      },
    ],
    careers: [
      {
        role: "Shopify Developer",
        work: "Builds and customises stores, themes and app integrations.",
        hirers: "E-commerce agencies, D2C brands and web studios",
      },
      {
        role: "E-commerce Executive",
        work: "Manages catalogue, orders, promotions and daily store operations.",
        hirers: "Online retailers, manufacturers selling direct and marketplace sellers",
      },
      {
        role: "E-commerce Marketing Executive",
        work: "Runs ads, SEO and email campaigns to grow store sales.",
        hirers: "D2C brands, digital agencies and export houses",
      },
      {
        role: "Store Manager",
        work: "Oversees performance, inventory, customer service and growth plans for an online store.",
        hirers: "Growing D2C brands and multi-channel retailers",
      },
      {
        role: "Freelance E-commerce Consultant",
        work: "Sets up and improves Shopify stores for small business and overseas clients.",
        hirers: "Self-employed work with local manufacturers, exporters and international clients",
      },
    ],
    whyNow: [
      "Punjab's textile, sports goods, hosiery and handicraft makers can now sell directly to customers in India and abroad, and Shopify gives them a ready platform if they have someone who can run it.",
      "Shopify Markets and social commerce tools like Meta catalogues have made cross-border and mobile-first selling easier than ever, which raises demand for trained store builders.",
    ],
    faqs: [
      {
        q: "Do I need a product to start the course?",
        a: "No. You can build a practice store with sample or supplier products. If you already have a business, you can build your real store during the course.",
      },
      {
        q: "Do I need coding skills for Shopify?",
        a: "No. Themes and apps handle most needs. Basic Liquid is introduced for small edits, but coding is optional.",
      },
      {
        q: "Will the course cover selling internationally?",
        a: "Yes. You learn Shopify Markets, multi-currency selling and shipping basics for overseas customers.",
      },
      {
        q: "Can I work as a freelancer after this course?",
        a: "Yes. The final module covers store setup packages, client onboarding and maintenance, so you can start freelance projects with confidence.",
      },
    ],
    related: ["wordpress", "digital-marketing", "google-ads"],
  },
];
