/* ───────── "More Courses" catalog pages ─────────
   The five More Courses links (/courses/<slug>) open a page of course CARDS instead of the long single-course layout.
   Key = coursePages slug (see ./more.ts, which still supplies the hero title/tagline, FAQs and metadata).
   Card names come from the client's list; the one-line descriptions are SAMPLE copy — confirm with the client.
   `href` = card opens that existing course page; without it the card's action is a WhatsApp enquiry for that course. */

export type CatalogItem = { name: string; text: string; href?: string; note?: string };
export type CatalogSection = { title: string; text: string; items: CatalogItem[] };

export const courseCatalog: Record<string, CatalogSection[]> = {
  "civil-architecture-cad": [
    {
      title: "Civil CAD",
      text: "Drafting, modelling and structural software for civil engineers and draughtsmen.",
      items: [
        { name: "AutoCAD Civil", text: "Site plans, building plans, sections and working drawings to civil drafting standards." },
        { name: "AutoCAD 2D & 3D", text: "Precise 2D drafting plus 3D solid and surface modelling, layouts and plotting." },
        { name: "Revit Architecture", text: "Building information modelling: walls, floors, roofs, families, schedules and sheets." },
        { name: "STAAD.Pro", text: "Model, load and analyse beams, frames and trusses, and read the design output." },
        { name: "SketchUp", text: "Fast 3D modelling of buildings and sites for concept design and client presentations." },
        { name: "V-Ray", text: "Photorealistic rendering with materials, lighting and cameras for exterior views." },
      ],
    },
    {
      title: "Architectural & Interior Design",
      text: "Design, document and visualise buildings and interiors.",
      items: [
        { name: "AutoCAD Architecture", text: "Architectural plans, elevations, sections and details with layers and annotation standards." },
        { name: "Revit Architecture", text: "Full BIM workflow for architects, from massing to construction documentation." },
        { name: "SketchUp", text: "Model interiors and exteriors quickly, with components, textures and scenes." },
        { name: "3ds Max", text: "Detailed 3D modelling, materials, lighting and camera animation for architecture." },
        { name: "V-Ray", text: "Realistic interior and exterior renders, lighting setups and render settings." },
        { name: "Revit Interior Design", text: "Interior layouts, furniture families, finishes, schedules and presentation sheets in Revit." },
        { name: "Interior Design with AutoCAD", text: "Furniture layouts, false-ceiling, electrical and working drawings for interior projects." },
        { name: "Architectural Visualization", text: "Renders and walkthroughs that sell a design, including post-production." },
      ],
    },
  ],
  "mechanical-cad-cam": [
    {
      title: "Mechanical CAD",
      text: "Part, assembly and product design software for mechanical engineers.",
      items: [
        { name: "AutoCAD Mechanical", text: "Machine drawings, sectional views, dimensioning and tolerances in 2D." },
        { name: "SOLIDWORKS", text: "Parametric part, assembly, sheet-metal and weldment design with production drawings." },
        { name: "CATIA", text: "Part design, assemblies and surfacing used across automotive and aerospace suppliers." },
        { name: "Creo", text: "Parametric modelling, assemblies and detailing for product and tooling design." },
        { name: "Mastercam", text: "2D and 3D toolpaths, simulation and post-processing for CNC machines." },
        { name: "Product Design", text: "Take a product from concept sketch to 3D model, drawings and prototype." },
        { name: "Machine Design", text: "Design shafts, gears, bearings and fasteners with the calculations behind them." },
        { name: "CNC Programming", text: "G-codes and M-codes, turning and milling cycles, and program proving." },
        { name: "Reverse Engineering", text: "Measure an existing component and rebuild it as an accurate CAD model." },
      ],
    },
    {
      title: "CAD/CAM",
      text: "Design the part, then program the machine that makes it.",
      items: [
        { name: "AutoCAD", text: "The 2D drafting foundation for every mechanical drawing office." },
        { name: "SOLIDWORKS", text: "3D models and drawings prepared for manufacturing." },
        { name: "CATIA", text: "Advanced part and surface modelling for complex components." },
        { name: "Mastercam", text: "Toolpath generation and machining simulation." },
        { name: "CNC Programming", text: "Manual part programming for CNC lathes and machining centres." },
        { name: "CAM Programming", text: "Software-driven machining strategies, tool selection and post-processing." },
      ],
    },
  ],
  "basic-computer": [
    {
      title: "Basic Computer Courses",
      text: "Everyday computer, office and accounting skills — start from zero.",
      items: [
        { name: "Computer Fundamentals", text: "How a computer works, its parts, common devices and basic operation." },
        { name: "Basic Computer Course", text: "Windows, typing, MS Office, internet and email in one beginner course." },
        { name: "MS Office", text: "Word, Excel and PowerPoint together for study and office work." },
        { name: "MS Word", text: "Letters, applications, resumes, tables and mail merge." },
        { name: "MS Excel", text: "Formulas, formatting, sorting, filtering and charts." },
        { name: "MS PowerPoint", text: "Slides, layouts, themes, animations and presenting with confidence." },
        { name: "Internet & Email", text: "Searching, email with attachments, online forms and staying safe online." },
        { name: "Computer Typing", text: "Correct finger positions and speed building in English, Hindi and Punjabi." },
        { name: "Advanced Excel", text: "Lookups, pivot tables, dashboards and MIS reports." },
        { name: "Tally Prime", text: "Company accounts, vouchers, inventory and reports in TallyPrime." },
        { name: "Tally with GST", text: "GST billing, input credit and return preparation in Tally." },
        { name: "Office Automation", text: "Documents, spreadsheets, presentations and email for a paperless office." },
        { name: "Data Entry", text: "Fast, accurate data entry, formatting and record keeping." },
        { name: "Computer Accounting", text: "Accounting basics applied in software: ledgers, billing and reports." },
        { name: "Basic Graphic Design", text: "Design principles and simple posters, banners and social media posts." },
        { name: "Canva", text: "Posts, flyers, presentations and short videos with ready-made templates." },
        { name: "Google Workspace", text: "Gmail, Drive, Docs, Sheets, Slides and Meet for online collaboration." },
        { name: "Windows & File Management", text: "Files, folders, storage, settings, printing and basic troubleshooting." },
      ],
    },
  ],
  "accounting-tally": [
    {
      title: "Accounting & Tally Courses",
      text: "Practical bookkeeping, GST and accounting software for office-ready skills.",
      items: [
        { name: "Tally Prime", text: "Company creation, ledgers, vouchers, inventory and financial reports." },
        { name: "Tally Prime with GST", text: "GST setup, tax invoices, e-way bills and GSTR-1 and GSTR-3B preparation." },
        { name: "Advanced Tally", text: "Cost centres, payroll, TDS, budgets and year-end finalisation." },
        { name: "Tally ERP", text: "Accounting and inventory in Tally.ERP 9 for offices still using it." },
        { name: "GST Accounting", text: "GST concepts, input tax credit, returns and reconciliation on practice data." },
        { name: "QuickBooks", text: "Cloud accounting: invoicing, expenses, bank feeds and reports." },
      ],
    },
  ],
  "graphics-video": [
    {
      title: "Design & Video",
      text: "Design for web, print and social media, and edit professional video.",
      items: [
        { name: "Web Designing", text: "Design and build responsive websites with HTML, CSS and modern layout tools.", href: "/courses/web-designing" },
        { name: "Graphic Design", text: "Colour, typography and layout applied to branding, print and social media." },
        { name: "Adobe Photoshop", text: "Photo editing, retouching, compositing and social media creatives." },
        { name: "Adobe Illustrator", text: "Logos, icons, illustrations and print-ready vector artwork." },
        { name: "CorelDRAW", text: "Vector design for printing: visiting cards, flex, packaging and signage." },
        { name: "Video Editing", text: "Editing, audio, colour, titles and export for reels, ads and YouTube.", note: "Not offered at the Hoshiarpur branch" },
      ],
    },
    {
      title: "Digital Marketing",
      text: "Promote the work you design and measure the results.",
      items: [
        { name: "Digital Marketing", text: "SEO, social media, paid ads, email and analytics in one program.", href: "/courses/digital-marketing" },
        { name: "SEO", text: "Keyword research, on-page, technical and link-building work that ranks.", href: "/courses/seo" },
        { name: "Meta Ads", text: "Facebook and Instagram campaigns, audiences, creatives and tracking.", href: "/courses/meta-ads" },
        { name: "Google Ads", text: "Search, display, shopping and YouTube campaigns with conversion tracking.", href: "/courses/google-ads" },
      ],
    },
  ],
};
