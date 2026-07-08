import { useEffect, useMemo, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BellRing,
  BookOpen,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronDown,
  CircleCheck,
  ClipboardCheck,
  Clock,
  DatabaseZap,
  FileCheck2,
  Fingerprint,
  Gauge,
  Globe2,
  GraduationCap,
  HeartPulse,
  HelpCircle,
  Hospital,
  KeyRound,
  Layers3,
  LockKeyhole,
  Mail,
  MailWarning,
  Menu,
  MessageSquare,
  MousePointerClick,
  Network,
  PlayCircle,
  Quote,
  Radar,
  ScanLine,
  School,
  Search,
  ServerCog,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Star,
  UsersRound,
  Workflow,
  X,
  Zap,
} from "lucide-react";

const navGroups = {
  Products: {
    intro: "Human-risk intelligence built from realistic phishing context.",
    accent: "purple",
    columns: [
      {
        title: "Product categories",
        links: [
          {
            label: "Phishexa Sim",
            text: "Context-aware simulation campaigns",
            icon: MailWarning,
            href: "/products/sim",
          },
          {
            label: "Phishexa Coach",
            text: "Private coaching at the moment of risk",
            icon: BrainCircuit,
            href: "/products/coach",
          },
          {
            label: "Phishexa Risk",
            text: "Executive human-risk dashboards",
            icon: BarChart3,
            href: "/products/risk",
          },
        ],
      },
      {
        title: "Capabilities",
        links: [
          {
            label: "Context graph",
            text: "Departments, vendors, seasons, and roles",
            icon: Network,
            href: "/#context",
          },
          {
            label: "Ethical guardrails",
            text: "Approval, exclusions, and policy controls",
            icon: ShieldCheck,
            href: "/#trust",
          },
          {
            label: "Microsoft 365 flow",
            text: "Inbox reporting and training signals",
            icon: Workflow,
            href: "/#integrations",
          },
        ],
      },
    ],
  },
  Solutions: {
    intro: "Tailored training for teams with very different risk patterns.",
    accent: "mint",
    columns: [
      {
        title: "By organization",
        links: [
          {
            label: "SMBs",
            text: "Launch credible training without a full SOC",
            icon: BriefcaseBusiness,
            href: "/solutions/smb",
          },
          {
            label: "Schools",
            text: "Protect staff, students, and administrators",
            icon: School,
            href: "/solutions/education",
          },
          {
            label: "Healthcare",
            text: "Coach teams around patient and vendor risk",
            icon: Hospital,
            href: "/solutions/healthcare",
          },
        ],
      },
      {
        title: "By team",
        links: [
          {
            label: "Security teams",
            text: "Turn reported emails into measurable readiness",
            icon: ShieldAlert,
            href: "/solutions/security",
          },
          {
            label: "MSSPs",
            text: "Run client-ready programs from one console",
            icon: UsersRound,
            href: "/solutions/security",
          },
          {
            label: "Compliance",
            text: "NIS2 and DORA-ready evidence packs",
            icon: ClipboardCheck,
            href: "/#trust",
          },
        ],
      },
    ],
  },
  Resources: {
    intro: "Practical guides for EU security, privacy, and AI phishing readiness.",
    accent: "cream",
    columns: [
      {
        title: "Guides",
        links: [
          {
            label: "AI phishing field guide",
            text: "How attackers use company context",
            icon: BookOpen,
            href: "/#resources",
          },
          {
            label: "NIS2 readiness",
            text: "Evidence your awareness program can produce",
            icon: FileCheck2,
            href: "/#resources",
          },
          {
            label: "GDPR-safe simulations",
            text: "Data minimization and consent patterns",
            icon: LockKeyhole,
            href: "/#resources",
          },
        ],
      },
      {
        title: "Company",
        links: [
          {
            label: "About Phishexa",
            text: "Built in Warsaw for European teams",
            icon: Building2,
            href: "/#company",
          },
          {
            label: "Security",
            text: "Responsible AI and privacy controls",
            icon: ShieldCheck,
            href: "/#trust",
          },
          {
            label: "Contact",
            text: "Talk with the Polish founding team",
            icon: MessageSquare,
            href: "/demo",
          },
        ],
      },
    ],
  },
};

const products = [
  {
    id: "sim",
    name: "Phishexa Sim",
    label: "Sim",
    icon: MailWarning,
    tint: "coral",
    headline: "Simulate the messages attackers would actually send.",
    copy:
      "Generate safe phishing campaigns from company-specific context: suppliers, payroll seasons, school terms, clinical workflows, and role patterns.",
    bullets: [
      "AI-assisted scenario builder with approval gates",
      "Localized templates for Polish and EU teams",
      "Safe impersonation rules and exclusion lists",
    ],
    stat: "8m",
    statLabel: "to launch a targeted campaign",
  },
  {
    id: "coach",
    name: "Phishexa Coach",
    label: "Coach",
    icon: BrainCircuit,
    tint: "mint",
    headline: "Coach people privately, right when the lesson matters.",
    copy:
      "Replace annual training fatigue with short, specific nudges that explain the missed signal without shame or public scoreboards.",
    bullets: [
      "Personalized post-click guidance",
      "Inbox reporting feedback loops",
      "Role-aware micro-lessons and manager summaries",
    ],
    stat: "42%",
    statLabel: "faster reporting improvement",
  },
  {
    id: "risk",
    name: "Phishexa Risk",
    label: "Risk",
    icon: BarChart3,
    tint: "blue",
    headline: "Turn behavior into board-ready human-risk intelligence.",
    copy:
      "See risky patterns by team, attack theme, and response quality so security and compliance leaders can prove program momentum.",
    bullets: [
      "Risk scoring by team, scenario, and control",
      "NIS2 and DORA evidence exports",
      "MSSP-ready client views and trend packs",
    ],
    stat: "3.4x",
    statLabel: "more signal than generic quizzes",
  },
];

const solutions = [
  {
    id: "smb",
    name: "SMBs",
    icon: BriefcaseBusiness,
    headline: "Small teams get credible training without running a security theater.",
    body:
      "Phishexa helps founders, IT leads, and operations teams train around the invoices, vendors, payroll changes, and account access patterns they already see.",
    metrics: ["14-day launch", "No SOC required", "EU data controls"],
  },
  {
    id: "education",
    name: "Schools",
    icon: GraduationCap,
    headline: "Protect administrators, teachers, and staff from term-time attacks.",
    body:
      "Run scenarios around enrollment, substitute staffing, payment reminders, shared devices, and parent communication without scaring the community.",
    metrics: ["Term-aware campaigns", "Staff coaching", "Board reporting"],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: HeartPulse,
    headline: "Coach teams around patient, vendor, and appointment workflow risk.",
    body:
      "Phishexa uses privacy-conscious simulation design for clinics and care providers where urgency, handoffs, and supplier emails create real exposure.",
    metrics: ["Privacy-first", "Vendor scenarios", "Clinic-ready reports"],
  },
  {
    id: "security",
    name: "Security teams",
    icon: ShieldAlert,
    headline: "Give the SOC a human-risk layer they can actually use.",
    body:
      "Connect simulations, reported emails, coaching, and risk reporting so awareness becomes an operational signal instead of a forgotten LMS box.",
    metrics: ["Report quality", "Risk trends", "MSSP views"],
  },
];

const resources = [
  {
    title: "AI-generated phishing readiness guide",
    label: "Guide",
    meta: "18 min read",
    text: "A practical field guide for spotting company-context phishing before it reaches payroll, procurement, or school admin teams.",
  },
  {
    title: "NIS2 evidence pack for human-risk programs",
    label: "Compliance",
    meta: "Template",
    text: "A board-ready map of simulation, reporting, coaching, and improvement evidence for EU security leaders.",
  },
  {
    title: "Ethical phishing simulations policy",
    label: "Policy",
    meta: "Checklist",
    text: "Guardrails for consent, exclusions, data minimization, and debriefing so training builds trust instead of resentment.",
  },
];

const logoAsset = (slug) => `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${slug}.svg`;

const logoCloud = [
  { name: "Microsoft", src: logoAsset("microsoft") },
  { name: "Google", src: logoAsset("google") },
  { name: "Slack", src: logoAsset("slack") },
  { name: "Okta", src: logoAsset("okta") },
  { name: "Atlassian", src: logoAsset("atlassian") },
  { name: "GitHub", src: logoAsset("github") },
  { name: "Microsoft Azure", src: logoAsset("microsoftazure") },
  { name: "Google Cloud", src: logoAsset("googlecloud") },
  { name: "Cloudflare", src: logoAsset("cloudflare") },
  { name: "Notion", src: logoAsset("notion") },
];

const statistics = [
  {
    label: "faster reporting improvement in guided pilots",
    value: "42",
    suffix: "%",
    icon: Gauge,
  },
  {
    label: "minutes to build a role-aware scenario",
    value: "8",
    suffix: "",
    icon: Clock,
  },
  {
    label: "risk signals tracked across simulation, reporting, and coaching",
    value: "36",
    suffix: "+",
    icon: Activity,
  },
  {
    label: "evidence reports ready for security and compliance reviews",
    value: "12",
    suffix: "",
    icon: FileCheck2,
  },
];

const testimonials = [
  {
    quote:
      "Phishexa finally made awareness training feel like our real inbox. The coaching is direct, calm, and useful instead of another annual checkbox.",
    name: "Marta Lewandowska",
    role: "Head of Operations",
    company: "Mazovia Health Group",
    segment: "Healthcare",
  },
  {
    quote:
      "The strongest part is the context model. We can simulate term-time attacks for administrators without creating fear or embarrassing staff.",
    name: "Piotr Zielinski",
    role: "IT Director",
    company: "Krakow School Network",
    segment: "Education",
  },
  {
    quote:
      "For client reporting, Phishexa Risk gives us a clean story: what changed, where risk remains, and what evidence we can hand to leadership.",
    name: "Anna Nowak",
    role: "Security Services Lead",
    company: "Baltic Shield MSSP",
    segment: "MSSP",
  },
];

const pricingPlans = [
  {
    name: "Launch",
    price: "EUR 690",
    period: "/month",
    audience: "For SMBs and schools starting realistic simulation programs.",
    features: [
      "Phishexa Sim and Coach",
      "Up to 250 employees",
      "4 active campaigns",
      "GDPR-conscious defaults",
      "Email support from Warsaw",
    ],
  },
  {
    name: "Risk Ops",
    price: "EUR 1,950",
    period: "/month",
    audience: "For healthcare, security, and compliance teams that need evidence.",
    featured: true,
    features: [
      "Sim, Coach, and Risk",
      "Up to 1,500 employees",
      "Unlimited campaigns",
      "NIS2 and DORA evidence exports",
      "SSO and core integrations",
    ],
  },
  {
    name: "Partner",
    price: "Custom",
    period: "",
    audience: "For MSSPs and multi-tenant security programs.",
    features: [
      "Client workspaces",
      "Partner reporting",
      "Custom context models",
      "Priority onboarding",
      "Security review support",
    ],
  },
];

function App() {
  const [activeMega, setActiveMega] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname);
  const [selectedProduct, setSelectedProduct] = useState(products[0].id);
  const [selectedSolution, setSelectedSolution] = useState(solutions[0].id);
  const [signInOpen, setSignInOpen] = useState(false);
  const [demoSent, setDemoSent] = useState(false);

  const activeProduct = useMemo(
    () => products.find((product) => product.id === selectedProduct) ?? products[0],
    [selectedProduct],
  );

  const activeSolution = useMemo(
    () => solutions.find((solution) => solution.id === selectedSolution) ?? solutions[0],
    [selectedSolution],
  );

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      return undefined;
    }

    const context = gsap.context(() => {
      gsap.utils.toArray("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
            },
          },
        );
      });

      gsap.utils.toArray("[data-count]").forEach((element) => {
        const target = Number(element.dataset.count || 0);
        const decimals = Number(element.dataset.decimals || 0);
        const suffix = element.dataset.suffix || "";
        const prefix = element.dataset.prefix || "";
        const value = { current: 0 };

        gsap.to(value, {
          current: target,
          duration: 1.35,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true,
          },
          onUpdate: () => {
            element.textContent = `${prefix}${value.current.toFixed(decimals)}${suffix}`;
          },
        });
      });

      gsap.to(".packet", {
        x: 22,
        opacity: 0.2,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.18,
      });

      gsap.to(".float-layer", {
        y: -12,
        duration: 3.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2,
      });

      gsap.to(".ambient-line", {
        backgroundPositionX: "180px",
        duration: 18,
        repeat: -1,
        ease: "none",
      });
    });

    return () => context.revert();
  }, []);

  return (
    <div className="site-shell">
      {bannerVisible ? (
        <div className="top-signal">
          <span>EU human-risk briefing: AI phishing simulations without privacy shortcuts</span>
          <a href="#resources">Read the field guide</a>
          <button aria-label="Dismiss announcement" onClick={() => setBannerVisible(false)}>
            <X size={18} />
          </button>
        </div>
      ) : null}

      <Header
        activeMega={activeMega}
        setActiveMega={setActiveMega}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        onOpenSignIn={() => setSignInOpen(true)}
      />

      {currentPath === "/" ? (
        <main>
          <Hero onOpenSignIn={() => setSignInOpen(true)} />

          <section className="logo-strip" aria-label="Compatible company tools" data-reveal>
            <p>Built for European teams using the tools attackers already imitate.</p>
            <div className="logo-marquee" aria-label="Compatible ecosystem logos">
              <div className="logo-track">
                {[...logoCloud, ...logoCloud].map((logo, index) => (
                  <span className="brand-logo" key={`${logo.name}-${index}`}>
                    <img src={logo.src} alt="" loading="lazy" />
                    {logo.name}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <StatisticsSection />

          <ProblemSection />

          <ProductSuite
            activeProduct={activeProduct}
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
          />

          <ContextEngine />

          <RiskOperations />

          <Solutions
            activeSolution={activeSolution}
            selectedSolution={selectedSolution}
            setSelectedSolution={setSelectedSolution}
          />

          <TestimonialsSection />

          <TrustSection />

          <IntegrationSection />

          <PricingSection />

          <ResourcesSection />

          <DemoSection demoSent={demoSent} setDemoSent={setDemoSent} />

          <CompanySection />
        </main>
      ) : (
        <main>
          <RoutePage path={currentPath} demoSent={demoSent} setDemoSent={setDemoSent} />
        </main>
      )}

      <Footer onOpenSignIn={() => setSignInOpen(true)} />

      <SignInModal open={signInOpen} onClose={() => setSignInOpen(false)} />
    </div>
  );
}

function Header({
  activeMega,
  setActiveMega,
  mobileOpen,
  setMobileOpen,
  onOpenSignIn,
}) {
  const mobileHref = (label) => {
    if (label === "Products") return "/products";
    if (label === "Solutions") return "/solutions";
    return "/#resources";
  };

  return (
    <header className="site-header" onMouseLeave={() => setActiveMega(null)}>
      <a className="brand" href="/" aria-label="Phishexa home">
        <img src="/assets/phishexa-logo.svg" alt="Phishexa" />
      </a>

      <nav className="main-nav" aria-label="Primary navigation">
        {Object.keys(navGroups).map((label) => (
          <button
            key={label}
            className={`nav-pill ${activeMega === label ? "is-active" : ""}`}
            onMouseEnter={() => setActiveMega(label)}
            onFocus={() => setActiveMega(label)}
            onClick={() => setActiveMega(activeMega === label ? null : label)}
            aria-expanded={activeMega === label}
          >
            {label}
            <ChevronDown size={16} />
          </button>
        ))}
        <a className="nav-link" href="/#trust">
          Security
        </a>
        <a className="nav-link" href="/#pricing">
          Pricing
        </a>
      </nav>

      <div className="header-actions">
        <button className="ghost-link" onClick={onOpenSignIn}>
          Sign in
        </button>
        <a className="button button-soft" href="/demo">
          Request demo
        </a>
      </div>

      <button
        className="mobile-trigger"
        aria-label="Open navigation"
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {activeMega ? <MegaMenu group={navGroups[activeMega]} label={activeMega} /> : null}

      {mobileOpen ? (
        <div className="mobile-menu">
          {Object.keys(navGroups).map((label) => (
            <a
              key={label}
              href={mobileHref(label)}
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </a>
          ))}
          <a href="/#trust" onClick={() => setMobileOpen(false)}>
            Security
          </a>
          <a href="/demo" onClick={() => setMobileOpen(false)}>
            Request demo
          </a>
          <button onClick={onOpenSignIn}>Sign in</button>
        </div>
      ) : null}
    </header>
  );
}

function MegaMenu({ group, label }) {
  const featureHref = label === "Products" ? "/products" : label === "Solutions" ? "/solutions" : "/#resources";

  return (
    <div className={`mega-menu mega-${group.accent}`} data-reveal>
      <div className="mega-feature">
        <span>{label}</span>
        <h3>{group.intro}</h3>
        <p>
          Start with company context, simulate realistic attacks, coach safely, and report the risk
          in language leadership can act on.
        </p>
        <a href={featureHref}>
          Explore {label.toLowerCase()}
          <ArrowRight size={17} />
        </a>
      </div>

      {group.columns.map((column) => (
        <div className="mega-column" key={column.title}>
          <span className="mega-title">{column.title}</span>
          {column.links.map((item) => {
            const Icon = item.icon;
            return (
              <a className="mega-link" key={item.label} href={item.href}>
                <span className="mega-icon">
                  <Icon size={19} />
                </span>
                <span>
                  <strong>{item.label}</strong>
                  <small>{item.text}</small>
                </span>
              </a>
            );
          })}
        </div>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid ambient-line" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy" data-reveal>
          <div className="eyebrow">
            <ShieldCheck size={16} />
            EU-first phishing simulation platform
          </div>
          <h1>
            Train against the phishing attackers actually send now.
          </h1>
          <p>
            Phishexa turns company-specific context into ethical simulations, private coaching, and
            human-risk intelligence for SMBs, schools, healthcare providers, and security teams.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#demo">
              Request demo
              <ArrowRight size={18} />
            </a>
            <a className="button button-outline" href="#platform">
              View platform
              <PlayCircle size={18} />
            </a>
          </div>
          <div className="proof-row" aria-label="Platform proof points">
            <span>
              <BadgeCheck size={17} />
              GDPR-conscious by design
            </span>
            <span>
              <FileCheck2 size={17} />
              NIS2 evidence packs
            </span>
            <span>
              <Globe2 size={17} />
              Poland and EU teams
            </span>
          </div>
        </div>

        <HeroConsole />
      </div>
    </section>
  );
}

function HeroConsole() {
  return (
    <div className="hero-console" data-reveal>
      <div className="console-top">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <strong>Campaign Lab</strong>
        <span className="console-state">Live preview</span>
      </div>

      <div className="console-body">
        <div className="scenario-panel">
          <div className="panel-heading">
            <span>
              <Sparkles size={16} />
              Context graph
            </span>
            <small>Warsaw Clinic Group</small>
          </div>
          <div className="context-list">
            <span>Vendor: MedSupply24</span>
            <span>Season: July invoices</span>
            <span>Team: Reception + finance</span>
            <span>Language: Polish + English</span>
          </div>
          <div className="flow-line" aria-hidden="true">
            <span className="packet" />
            <span className="packet" />
            <span className="packet" />
          </div>
        </div>

        <div className="mail-preview float-layer">
          <div className="mail-header">
            <span className="avatar">MS</span>
            <span>
              <strong>Invoice correction request</strong>
              <small>medsupply-payments.example</small>
            </span>
            <b>Simulated</b>
          </div>
          <p>
            Please review the new bank details before the noon payment batch. The supplier ID is
            attached for verification.
          </p>
          <div className="mail-actions">
            <span>Open attachment</span>
            <span>Verify supplier</span>
          </div>
        </div>

        <div className="coach-card float-layer">
          <div className="coach-icon">
            <BrainCircuit size={22} />
          </div>
          <div>
            <strong>Coach nudge ready</strong>
            <p>Explain supplier-domain mismatch and payment urgency cue in 45 seconds.</p>
          </div>
        </div>

        <div className="risk-summary">
          <Metric label="Reporting quality" value="74%" status="up" />
          <Metric label="Click risk" value="11%" status="down" />
          <Metric label="Coaching complete" value="86%" status="up" />
        </div>
      </div>
    </div>
  );
}

function Metric({ label, value, status }) {
  return (
    <div className={`metric metric-${status}`}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function StatisticsSection() {
  return (
    <section className="stats-section section-pad" aria-labelledby="stats-title">
      <div className="stats-heading" data-reveal>
        <span className="section-kicker">Program statistics</span>
        <h2 id="stats-title">Signals that prove training is changing behavior.</h2>
        <p>
          Phishexa measures the operational behaviors that matter: reporting quality, coaching
          completion, scenario readiness, and evidence production.
        </p>
      </div>

      <div className="stats-grid" data-reveal>
        {statistics.map((stat) => {
          const Icon = stat.icon;
          return (
            <article className="stat-card" key={stat.label}>
              <span className="stat-icon">
                <Icon size={22} />
              </span>
              <strong data-count={stat.value} data-suffix={stat.suffix}>
                0{stat.suffix}
              </strong>
              <p>{stat.label}</p>
            </article>
          );
        })}
      </div>

      <div className="stats-note" data-reveal>
        <ShieldCheck size={18} />
        <span>
          Metrics are presented as pilot-style platform outcomes and demo benchmarks, ready to
          replace with customer-verified figures as Phishexa scales.
        </span>
      </div>
    </section>
  );
}

function ProblemSection() {
  const items = [
    {
      icon: Bot,
      title: "Attackers write with company context",
      text: "Vendor names, school calendars, clinic workflows, and executive style make generic training feel detached from the real threat.",
    },
    {
      icon: HelpCircle,
      title: "Generic modules do not change judgment",
      text: "Employees memorize red flags, then face an AI-written message that looks normal for their actual role.",
    },
    {
      icon: Gauge,
      title: "Leadership needs risk evidence",
      text: "Security teams need reporting quality, coaching progress, and control evidence rather than another completion percentage.",
    },
  ];

  return (
    <section className="problem-section section-pad" data-reveal>
      <div className="section-kicker">Why Phishexa</div>
      <div className="section-heading two-col">
        <h2>Generic awareness breaks when phishing gets personal.</h2>
        <p>
          Phishexa designs training around the operational details attackers already exploit. The
          platform is serious where it matters, and human where people need to learn.
        </p>
      </div>

      <div className="problem-grid">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <article className="problem-card" key={item.title}>
              <span className="icon-chip">
                <Icon size={21} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function ProductSuite({ activeProduct, selectedProduct, setSelectedProduct }) {
  const Icon = activeProduct.icon;

  return (
    <section className="platform-section section-pad" id="platform">
      <div className="section-kicker" data-reveal>
        Products
      </div>
      <div className="section-heading" data-reveal>
        <h2>Three products, one human-risk loop.</h2>
        <p>
          Simulate realistic attacks, coach employees privately, and measure the change with risk
          reporting that works for security and compliance.
        </p>
      </div>

      <div className="product-tabs" role="tablist" aria-label="Phishexa products" data-reveal>
        {products.map((product) => {
          const ProductIcon = product.icon;
          return (
            <button
              key={product.id}
              role="tab"
              aria-selected={selectedProduct === product.id}
              className={selectedProduct === product.id ? "is-selected" : ""}
              onClick={() => setSelectedProduct(product.id)}
            >
              <ProductIcon size={18} />
              {product.name}
            </button>
          );
        })}
      </div>

      <div className={`product-stage tint-${activeProduct.tint}`} data-reveal>
        <div className="product-copy">
          <span className="module-badge">
            <Icon size={18} />
            {activeProduct.label}
          </span>
          <h3>{activeProduct.headline}</h3>
          <p>{activeProduct.copy}</p>
          <ul>
            {activeProduct.bullets.map((bullet) => (
              <li key={bullet}>
                <Check size={17} />
                {bullet}
              </li>
            ))}
          </ul>
          <div className="module-stat">
            <strong>{activeProduct.stat}</strong>
            <span>{activeProduct.statLabel}</span>
          </div>
        </div>

        <ProductVisual activeProduct={activeProduct} />
      </div>
    </section>
  );
}

function ProductVisual({ activeProduct }) {
  return (
    <div className="product-visual">
      <div className="builder-canvas">
        <div className="builder-toolbar">
          <span />
          <span />
          <span />
          <strong>{activeProduct.name}</strong>
        </div>
        <div className="workflow-canvas">
          <WorkflowNode icon={Radar} title="Context intake" tag="approved" />
          <Connector />
          <WorkflowNode icon={Sparkles} title="AI draft" tag="review" />
          <Connector />
          <WorkflowNode icon={Mail} title="Simulation" tag="scheduled" />
          <Connector />
          <WorkflowNode icon={BrainCircuit} title="Coach" tag="private" />
        </div>
        <div className="builder-side">
          <div>
            <small>Scenario confidence</small>
            <strong>92%</strong>
          </div>
          <div>
            <small>Risk theme</small>
            <strong>Supplier payment</strong>
          </div>
          <div>
            <small>Audience</small>
            <strong>Finance, Reception</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkflowNode({ icon: Icon, title, tag }) {
  return (
    <div className="workflow-node">
      <span>
        <Icon size={19} />
      </span>
      <strong>{title}</strong>
      <small>{tag}</small>
    </div>
  );
}

function Connector() {
  return (
    <div className="connector" aria-hidden="true">
      <span />
    </div>
  );
}

function ContextEngine() {
  return (
    <section className="context-section section-pad" id="context">
      <div className="context-grid ambient-line">
        <div className="context-copy" data-reveal>
          <div className="section-kicker">Context engine</div>
          <h2>From company signals to safe simulations.</h2>
          <p>
            Phishexa does not need to ingest everything. It uses approved context signals to build
            relevant campaigns while keeping privacy, consent, and ethical controls visible.
          </p>
          <a className="text-link" href="#trust">
            See trust controls
            <ArrowRight size={17} />
          </a>
        </div>

        <div className="context-map" data-reveal>
          {[
            ["Departments", Building2],
            ["Vendors", DatabaseZap],
            ["Email reports", MailWarning],
            ["Calendars", Clock],
            ["AI guardrails", ShieldCheck],
            ["Risk board", BarChart3],
          ].map(([label, Icon], index) => (
            <div className={`context-node node-${index + 1}`} key={label}>
              <Icon size={22} />
              <span>{label}</span>
            </div>
          ))}
          <div className="context-core">
            <img src="/assets/phishexa-mark.svg" alt="" />
            <strong>Phishexa Context</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

function RiskOperations() {
  return (
    <section className="risk-section" id="risk">
      <div className="risk-grid ambient-line" aria-hidden="true" />
      <div className="risk-inner section-pad">
        <div className="section-heading invert" data-reveal>
          <span className="section-kicker">Risk operations</span>
          <h2>The human-risk command center for company-context attacks.</h2>
          <p>
            A darker, operational view for security leaders who need signal: who reported, what was
            missed, what coaching worked, and which teams are improving.
          </p>
        </div>

        <div className="risk-dashboard" data-reveal>
          <div className="dashboard-sidebar">
            <img src="/assets/phishexa-mark.svg" alt="" />
            <span className="is-on" />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="dashboard-main">
            <div className="dashboard-header">
              <div>
                <small>Human risk overview</small>
                <strong>Q3 EU readiness</strong>
              </div>
              <span>Live</span>
            </div>
            <div className="dashboard-metrics">
              <DashboardMetric label="Risk reduced" count="38" suffix="%" />
              <DashboardMetric label="Reports verified" count="1247" />
              <DashboardMetric label="Coach completion" count="87" suffix="%" />
              <DashboardMetric label="High-risk teams" count="3" />
            </div>
            <div className="risk-table">
              {[
                ["Finance", "Supplier payment", "High", "Improving"],
                ["Reception", "Appointment links", "Medium", "Stable"],
                ["School admin", "Parent portal", "Medium", "Improving"],
                ["Clinical ops", "Lab results", "Low", "Strong"],
              ].map((row) => (
                <div className="risk-row" key={row[0]}>
                  <span>{row[0]}</span>
                  <span>{row[1]}</span>
                  <span className={`risk-pill ${row[2].toLowerCase()}`}>{row[2]}</span>
                  <span>{row[3]}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="floating-score float-layer">
            <small>Trust score</small>
            <strong>81</strong>
            <span>+12 this quarter</span>
          </div>
          <div className="floating-score second float-layer">
            <small>NIS2 evidence</small>
            <strong>Ready</strong>
            <span>4 reports generated</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardMetric({ label, count, suffix = "" }) {
  return (
    <div className="dash-metric">
      <small>{label}</small>
      <strong data-count={count} data-suffix={suffix}>
        0{suffix}
      </strong>
      <span />
    </div>
  );
}

function Solutions({ activeSolution, selectedSolution, setSelectedSolution }) {
  const Icon = activeSolution.icon;

  return (
    <section className="solutions-section section-pad" id="solutions">
      <div className="section-heading" data-reveal>
        <span className="section-kicker">Solutions</span>
        <h2>Designed around how each team actually gets attacked.</h2>
        <p>
          Same platform, different context models. Phishexa adapts the workflow to the organization,
          not the other way around.
        </p>
      </div>

      <div className="solution-shell" data-reveal>
        <div className="solution-tabs" role="tablist" aria-label="Solutions">
          {solutions.map((solution) => {
            const SolutionIcon = solution.icon;
            return (
              <button
                key={solution.id}
                className={selectedSolution === solution.id ? "is-selected" : ""}
                onClick={() => setSelectedSolution(solution.id)}
                role="tab"
                aria-selected={selectedSolution === solution.id}
              >
                <SolutionIcon size={18} />
                {solution.name}
              </button>
            );
          })}
        </div>

        <div className="solution-detail">
          <div className="solution-icon">
            <Icon size={34} />
          </div>
          <h3>{activeSolution.headline}</h3>
          <p>{activeSolution.body}</p>
          <div className="solution-metrics">
            {activeSolution.metrics.map((metric) => (
              <span key={metric}>{metric}</span>
            ))}
          </div>
        </div>

        <div className="scenario-stack">
          <div className="scenario-card top">
            <small>Scenario</small>
            <strong>Payment update request</strong>
            <span>Likely target: Finance</span>
          </div>
          <div className="scenario-card middle">
            <small>Coaching signal</small>
            <strong>External domain mismatch</strong>
            <span>Private lesson: 52 seconds</span>
          </div>
          <div className="scenario-card bottom">
            <small>Risk outcome</small>
            <strong>Team risk moved from B to A</strong>
            <span>Evidence added to Q3 board pack</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="testimonials-section section-pad" aria-labelledby="testimonials-title">
      <div className="section-heading two-col" data-reveal>
        <div>
          <span className="section-kicker">Customer proof</span>
          <h2 id="testimonials-title">Human risk programs people can actually support.</h2>
        </div>
        <p>
          The tone matters. Phishexa is built for teams that need credible security outcomes without
          shaming employees or overwhelming busy operators.
        </p>
      </div>

      <div className="testimonial-grid" data-reveal>
        {testimonials.map((testimonial) => (
          <article className="testimonial-card" key={testimonial.name}>
            <div className="testimonial-top">
              <span className="quote-icon">
                <Quote size={22} />
              </span>
              <div className="rating" aria-label="Five star testimonial">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={15} fill="currentColor" />
                ))}
              </div>
            </div>
            <p>“{testimonial.quote}”</p>
            <div className="testimonial-author">
              <span>{testimonial.name.slice(0, 1)}</span>
              <div>
                <strong>{testimonial.name}</strong>
                <small>
                  {testimonial.role}, {testimonial.company}
                </small>
              </div>
              <b>{testimonial.segment}</b>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function TrustSection() {
  const controls = [
    ["GDPR-conscious data handling", LockKeyhole],
    ["NIS2-ready awareness evidence", FileCheck2],
    ["DORA operational resilience reporting", Activity],
    ["Ethical simulation approvals", BadgeCheck],
  ];

  return (
    <section className="trust-section section-pad" id="trust">
      <div className="trust-copy" data-reveal>
        <span className="section-kicker">EU trust</span>
        <h2>Compliance polish without compliance theater.</h2>
        <p>
          Phishexa is designed for European organizations that need effective training and a serious
          privacy posture. Every simulation can be approved, scoped, explained, and exported.
        </p>
        <div className="trust-actions">
          <a className="button button-primary" href="#demo">
            Talk to security
            <ArrowRight size={18} />
          </a>
          <a className="text-link" href="#resources">
            Review policy templates
            <ArrowRight size={17} />
          </a>
        </div>
      </div>

      <div className="trust-panel" data-reveal>
        <div className="trust-panel-header">
          <span>Trust Center</span>
          <strong>Phishexa Sp. z o.o.</strong>
        </div>
        <div className="control-list">
          {controls.map(([label, Icon]) => (
            <div className="control-row" key={label}>
              <span>
                <Icon size={19} />
              </span>
              <strong>{label}</strong>
              <CircleCheck size={20} />
            </div>
          ))}
        </div>
        <div className="evidence-bar">
          <div>
            <small>Evidence freshness</small>
            <strong>3m ago</strong>
          </div>
          <div>
            <small>Reports exported</small>
            <strong>24</strong>
          </div>
          <div>
            <small>PII minimized</small>
            <strong>On</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntegrationSection() {
  const integrations = [
    ["Microsoft 365", logoAsset("microsoft"), "Report button, mailbox signals, campaign delivery"],
    ["Google Workspace", logoAsset("google"), "Directory groups, reporting inbox, calendar context"],
    ["Slack", logoAsset("slack"), "Private coaching nudges and team notifications"],
    ["Okta", logoAsset("okta"), "Identity context and SSO-ready access"],
    ["Jira", logoAsset("jira"), "Case handoff and remediation tracking"],
    ["Splunk", logoAsset("splunk"), "Security signal enrichment"],
    ["Microsoft Azure", logoAsset("microsoftazure"), "SIEM event forwarding"],
    ["GitHub", logoAsset("github"), "Developer-focused phishing scenarios"],
  ];

  return (
    <section className="integration-section section-pad" id="integrations">
      <div className="section-heading two-col" data-reveal>
        <div>
          <span className="section-kicker">Integrations</span>
          <h2>Connect the signals your team already trusts.</h2>
        </div>
        <p>
          Phishexa fits into the existing security stack: reporting inboxes, identity providers,
          case tools, and board reporting workflows.
        </p>
      </div>

      <div className="integration-grid" data-reveal>
        {integrations.map(([label, src, text]) => (
          <div className="integration-tile" key={label}>
            <img src={src} alt="" loading="lazy" />
            <span>
              <strong>{label}</strong>
              <small>{text}</small>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="pricing-section section-pad" id="pricing">
      <div className="section-heading two-col" data-reveal>
        <div>
          <span className="section-kicker">Pricing</span>
          <h2>Start with the risk loop your team can actually run.</h2>
        </div>
        <p>
          Simple packages for early programs, growing security operations, and partner-led client
          delivery. Every plan includes privacy-conscious simulation design.
        </p>
      </div>

      <div className="pricing-grid" data-reveal>
        {pricingPlans.map((plan) => (
          <article className={`pricing-card ${plan.featured ? "is-featured" : ""}`} key={plan.name}>
            {plan.featured ? <span className="plan-badge">Most selected</span> : null}
            <div className="plan-top">
              <h3>{plan.name}</h3>
              <p>{plan.audience}</p>
            </div>
            <div className="plan-price">
              <strong>{plan.price}</strong>
              {plan.period ? <span>{plan.period}</span> : null}
            </div>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>
                  <Check size={17} />
                  {feature}
                </li>
              ))}
            </ul>
            <a className={`button ${plan.featured ? "button-primary" : "button-outline"}`} href="/demo">
              Request plan walkthrough
              <ArrowRight size={18} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function ResourcesSection() {
  return (
    <section className="resources-section section-pad" id="resources">
      <div className="section-heading" data-reveal>
        <span className="section-kicker">Resources</span>
        <h2>For teams moving from awareness to readiness.</h2>
        <p>
          Practical material for security, compliance, IT, and operations teams building a modern
          phishing defense program.
        </p>
      </div>

      <div className="resource-list" data-reveal>
        {resources.map((resource, index) => (
          <article className={`resource-card resource-${index + 1}`} key={resource.title}>
            <span>{resource.label}</span>
            <h3>{resource.title}</h3>
            <p>{resource.text}</p>
            <a href="#demo">
              {resource.meta}
              <ArrowRight size={17} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function RoutePage({ path, demoSent, setDemoSent }) {
  if (path === "/products") {
    return <ProductsOverviewPage />;
  }

  if (path.startsWith("/products/")) {
    const id = path.split("/").filter(Boolean).at(-1);
    const product = products.find((item) => item.id === id);
    return product ? <ProductDetailPage product={product} /> : <NotFoundPage />;
  }

  if (path === "/solutions") {
    return <SolutionsOverviewPage />;
  }

  if (path.startsWith("/solutions/")) {
    const id = path.split("/").filter(Boolean).at(-1);
    const solution = solutions.find((item) => item.id === id);
    return solution ? <SolutionDetailPage solution={solution} /> : <NotFoundPage />;
  }

  if (path === "/demo") {
    return (
      <>
        <PageHero
          kicker="Request demo"
          title="See the Phishexa risk loop with your own workflows."
          body="Book a Warsaw-led walkthrough for your organization type, threat patterns, and compliance priorities."
        />
        <DemoSection demoSent={demoSent} setDemoSent={setDemoSent} />
      </>
    );
  }

  return <NotFoundPage />;
}

function PageHero({ kicker, title, body, children }) {
  return (
    <section className="page-hero">
      <div className="page-hero-grid ambient-line" aria-hidden="true" />
      <div className="page-hero-inner" data-reveal>
        <span className="section-kicker">{kicker}</span>
        <h1>{title}</h1>
        <p>{body}</p>
        {children}
      </div>
    </section>
  );
}

function ProductsOverviewPage() {
  return (
    <>
      <PageHero
        kicker="Products"
        title="Three connected products for realistic human-risk defense."
        body="Phishexa Sim, Coach, and Risk work together so training begins with real context and ends with usable evidence."
      >
        <div className="page-actions">
          <a className="button button-primary" href="/demo">
            Request demo
            <ArrowRight size={18} />
          </a>
          <a className="button button-outline" href="/#pricing">
            View pricing
          </a>
        </div>
      </PageHero>
      <section className="route-section section-pad">
        <div className="route-card-grid" data-reveal>
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <a className={`route-card tint-${product.tint}`} href={`/products/${product.id}`} key={product.id}>
                <span>
                  <Icon size={24} />
                </span>
                <h2>{product.name}</h2>
                <p>{product.copy}</p>
                <strong>
                  Explore product
                  <ArrowRight size={18} />
                </strong>
              </a>
            );
          })}
        </div>
      </section>
    </>
  );
}

function ProductDetailPage({ product }) {
  const Icon = product.icon;

  return (
    <>
      <PageHero kicker={product.name} title={product.headline} body={product.copy}>
        <div className="page-actions">
          <a className="button button-primary" href="/demo">
            Request {product.label} demo
            <ArrowRight size={18} />
          </a>
          <a className="button button-outline" href="/products">
            All products
          </a>
        </div>
      </PageHero>

      <section className={`product-page-detail section-pad tint-${product.tint}`}>
        <div className="product-page-copy" data-reveal>
          <span className="module-badge">
            <Icon size={18} />
            {product.label}
          </span>
          <h2>Built for company-specific context, not generic quizzes.</h2>
          <p>
            Every workflow starts with approved signals, clear guardrails, and language that feels
            familiar to the team being trained.
          </p>
          <ul>
            {product.bullets.map((bullet) => (
              <li key={bullet}>
                <Check size={17} />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
        <div data-reveal>
          <ProductVisual activeProduct={product} />
        </div>
      </section>
    </>
  );
}

function SolutionsOverviewPage() {
  return (
    <>
      <PageHero
        kicker="Solutions"
        title="Different teams need different phishing context."
        body="Phishexa adapts scenarios, coaching, and reporting to the operational reality of each organization."
      />
      <section className="route-section section-pad">
        <div className="route-card-grid solution-overview-grid" data-reveal>
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <a className="route-card solution-route-card" href={`/solutions/${solution.id}`} key={solution.id}>
                <span>
                  <Icon size={24} />
                </span>
                <h2>{solution.name}</h2>
                <p>{solution.body}</p>
                <strong>
                  View solution
                  <ArrowRight size={18} />
                </strong>
              </a>
            );
          })}
        </div>
      </section>
    </>
  );
}

function SolutionDetailPage({ solution }) {
  const Icon = solution.icon;

  return (
    <>
      <PageHero kicker={`Solution for ${solution.name}`} title={solution.headline} body={solution.body}>
        <div className="page-actions">
          <a className="button button-primary" href="/demo">
            Book solution demo
            <ArrowRight size={18} />
          </a>
          <a className="button button-outline" href="/solutions">
            All solutions
          </a>
        </div>
      </PageHero>
      <section className="solution-page-detail section-pad">
        <div className="solution-detail route-solution-panel" data-reveal>
          <div className="solution-icon">
            <Icon size={34} />
          </div>
          <h2>What the program focuses on</h2>
          <p>
            Phishexa maps common attack paths, runs ethical simulations, coaches privately, and
            turns the result into evidence your leaders can understand.
          </p>
          <div className="solution-metrics">
            {solution.metrics.map((metric) => (
              <span key={metric}>{metric}</span>
            ))}
          </div>
        </div>
        <div className="route-scenario-board" data-reveal>
          {["Context model", "Simulation", "Coaching", "Risk evidence"].map((item, index) => (
            <div className="route-step" key={item}>
              <span>{index + 1}</span>
              <strong>{item}</strong>
              <p>
                {index === 0
                  ? "Approved signals from teams, workflows, vendors, and seasonal events."
                  : index === 1
                    ? "Realistic campaigns with ethical approval and safe impersonation limits."
                    : index === 2
                      ? "Private micro-lessons that explain the missed cue without blame."
                      : "Dashboards and exports for security, compliance, and leadership reviews."}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function NotFoundPage() {
  return (
    <PageHero
      kicker="Page not found"
      title="This Phishexa page is still being assembled."
      body="Return to the homepage or book a demo while the route is being prepared."
    >
      <div className="page-actions">
        <a className="button button-primary" href="/">
          Back home
          <ArrowRight size={18} />
        </a>
      </div>
    </PageHero>
  );
}

function DemoSection({ demoSent, setDemoSent }) {
  return (
    <section className="demo-section section-pad" id="demo">
      <div className="demo-copy" data-reveal>
        <span className="section-kicker">Request demo</span>
        <h2>See how Phishexa would model risk for your organization.</h2>
        <p>
          Bring a few examples of common workflows: invoices, enrollment, appointment scheduling,
          support tickets, or supplier changes. We will show how those become safe simulations and
          useful risk reporting.
        </p>
        <div className="demo-points">
          <span>
            <Check size={17} />
            30-minute walkthrough
          </span>
          <span>
            <Check size={17} />
            No training database required
          </span>
          <span>
            <Check size={17} />
            EU privacy review included
          </span>
        </div>
      </div>

      <form
        className="demo-form"
        data-reveal
        onSubmit={(event) => {
          event.preventDefault();
          setDemoSent(true);
        }}
      >
        <h3>Book a personalized demo</h3>
        <label>
          Work email
          <input type="email" placeholder="you@company.eu" required />
        </label>
        <div className="form-grid">
          <label>
            First name
            <input type="text" placeholder="Maja" required />
          </label>
          <label>
            Last name
            <input type="text" placeholder="Kowalska" required />
          </label>
        </div>
        <label>
          Organization type
          <select defaultValue="SMB">
            <option>SMB</option>
            <option>School or university</option>
            <option>Healthcare provider</option>
            <option>Security team</option>
            <option>MSSP</option>
          </select>
        </label>
        <label>
          What should we simulate first?
          <textarea placeholder="Invoices, payroll, parent portal, patient scheduling, vendor updates..." />
        </label>
        <button className="button button-primary" type="submit">
          Request demo
          <ArrowRight size={18} />
        </button>
        {demoSent ? (
          <p className="form-success">
            Thank you. Alicja from the Warsaw team will follow up with available slots.
          </p>
        ) : null}
      </form>
    </section>
  );
}

function CompanySection() {
  return (
    <section className="company-section section-pad" id="company">
      <div className="company-card" data-reveal>
        <div>
          <span className="section-kicker">Company</span>
          <h2>Built in Poland for EU organizations with real human risk.</h2>
        </div>
        <p>
          Phishexa Sp. z o.o. is based in Warsaw and works with SMBs, education teams,
          healthcare providers, and security partners across Europe.
        </p>
        <div className="company-details">
          <span>ul. Prosta 20, 00-850 Warsaw, Poland</span>
          <span>security@phishexa.com</span>
          <span>VAT-ready EU vendor profile</span>
        </div>
      </div>
    </section>
  );
}

function Footer({ onOpenSignIn }) {
  const socials = [
    ["LinkedIn", logoAsset("linkedin"), "https://www.linkedin.com/company/phishexa"],
    ["X", logoAsset("x"), "https://x.com/phishexa"],
    ["GitHub", logoAsset("github"), "https://github.com/phishexa"],
    ["YouTube", logoAsset("youtube"), "https://www.youtube.com/@phishexa"],
  ];

  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img src="/assets/phishexa-logo.svg" alt="Phishexa" />
        <p>
          AI phishing simulation and human-risk intelligence for privacy-conscious European teams.
        </p>
        <div className="footer-contact">
          <span>Phishexa Sp. z o.o.</span>
          <span>ul. Prosta 20, 00-850 Warsaw, Poland</span>
          <a href="mailto:security@phishexa.com">security@phishexa.com</a>
          <a href="tel:+48223072218">+48 22 307 22 18</a>
        </div>
        <div className="social-row" aria-label="Social links">
          {socials.map(([label, src, href]) => (
            <a href={href} key={label} aria-label={label} target="_blank" rel="noreferrer">
              <img src={src} alt="" loading="lazy" />
            </a>
          ))}
        </div>
      </div>

      <div className="footer-links">
        <div>
          <h4>Products</h4>
          <a href="/products/sim">Phishexa Sim</a>
          <a href="/products/coach">Phishexa Coach</a>
          <a href="/products/risk">Phishexa Risk</a>
        </div>
        <div>
          <h4>Solutions</h4>
          <a href="/solutions/smb">SMBs</a>
          <a href="/solutions/education">Schools</a>
          <a href="/solutions/healthcare">Healthcare</a>
          <a href="/solutions/security">Security teams</a>
        </div>
        <div>
          <h4>Trust</h4>
          <a href="/#trust">Security</a>
          <a href="/#trust">Privacy</a>
          <a href="/#trust">Responsible AI</a>
          <a href="/#trust">Ethical simulations</a>
        </div>
        <div>
          <h4>Company</h4>
          <a href="/#company">About</a>
          <a href="/demo">Contact</a>
          <a href="/#company">Warsaw office</a>
          <button onClick={onOpenSignIn}>Sign in</button>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Phishexa Sp. z o.o.</span>
        <span>Warsaw, Poland</span>
      </div>
    </footer>
  );
}

function SignInModal({ open, onClose }) {
  if (!open) {
    return null;
  }

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <div
        className="signin-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="signin-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="modal-close" aria-label="Close sign in" onClick={onClose}>
          <X size={20} />
        </button>
        <img src="/assets/phishexa-mark.svg" alt="" />
        <h2 id="signin-title">Sign in to Phishexa</h2>
        <p>Access campaign labs, coaching reports, and risk dashboards.</p>
        <form>
          <label>
            Workspace
            <input type="text" placeholder="acme.phishexa.com" />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@company.eu" />
          </label>
          <label>
            Password
            <input type="password" placeholder="••••••••" />
          </label>
          <button className="button button-primary" type="button">
            Continue
            <ArrowRight size={18} />
          </button>
        </form>
        <div className="sso-row">
          <button>
            <img src={logoAsset("google")} alt="" />
            Google
          </button>
          <button>
            <img src={logoAsset("microsoft")} alt="" />
            Microsoft
          </button>
          <button>
            <img src={logoAsset("github")} alt="" />
            GitHub
          </button>
          <button>
            <Fingerprint size={17} />
            Passkey
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
