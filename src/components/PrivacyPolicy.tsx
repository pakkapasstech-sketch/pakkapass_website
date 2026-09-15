import { Link } from "@tanstack/react-router";
import { useState, useEffect, useMemo } from "react";
import {
  Shield,
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  UserCheck,
  Server,
  CreditCard,
  Bell,
  Smartphone,
  BookOpen,
  Trash2,
  Mail,
  Building,
  Search,
  Printer,
  Share2,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Download,
  Menu,
  X,
  Sparkles,
  GraduationCap,
  Scale,
  Users,
  Globe,
  ExternalLink,
} from "lucide-react";
import logo from "@/assets/sidebarlogo.png";

interface SectionItem {
  id: string;
  number: string;
  title: string;
  icon: typeof Shield;
}

const PLAY_STORE_URL = "https://play.google.com/store/search?q=pakkapass&c=apps";

const SECTIONS: SectionItem[] = [
  { id: "who-is-responsible", number: "1", title: "Who Is Responsible for Your Data?", icon: Building },
  { id: "information-we-collect", number: "2", title: "Information We Collect", icon: FileText },
  { id: "information-collected-automatically", number: "3", title: "Information Collected Automatically", icon: Eye },
  { id: "otp-account-authentication", number: "4", title: "OTP & Account Authentication", icon: Lock },
  { id: "profile-photographs-camera", number: "5", title: "Profile Photos & Camera Access", icon: Smartphone },
  { id: "how-we-use-information", number: "6", title: "How We Use Your Information", icon: BookOpen },
  { id: "student-child-privacy", number: "7", title: "Student & Child Privacy", icon: GraduationCap },
  { id: "information-sharing-disclosure", number: "8", title: "Information Sharing & Disclosure", icon: Users },
  { id: "third-party-services", number: "9", title: "Third-Party Services", icon: Server },
  { id: "payment-information", number: "10", title: "Payment Information & Billing", icon: CreditCard },
  { id: "data-storage-security", number: "11", title: "Data Storage & Security Measures", icon: ShieldCheck },
  { id: "personal-data-breach", number: "12", title: "Personal Data Breach Protocol", icon: Shield },
  { id: "data-retention", number: "13", title: "Data Retention & Storage Limits", icon: FileText },
  { id: "your-privacy-rights", number: "14", title: "Your Privacy Rights & Choices", icon: UserCheck },
  { id: "account-deletion", number: "15", title: "Account Deletion Process", icon: Trash2 },
  { id: "app-permissions", number: "16", title: "Mobile App Permissions", icon: Smartphone },
  { id: "child-safety-advertising", number: "17", title: "Child Safety & Zero Advertising", icon: ShieldCheck },
  { id: "third-party-links", number: "18", title: "Third-Party Links & Services", icon: ExternalLink },
  { id: "user-generated-content", number: "19", title: "User-Generated Content", icon: FileText },
  { id: "ai-automated-processing", number: "20", title: "AI & Automated Processing", icon: Sparkles },
  { id: "cross-border-transfers", number: "21", title: "Cross-Border Data Transfers", icon: Globe },
  { id: "contact-grievance-redressal", number: "22", title: "Contact & Grievance Redressal", icon: Mail },
  { id: "changes-to-policy", number: "23", title: "Changes to This Privacy Policy", icon: FileText },
  { id: "governing-law", number: "24", title: "Governing Law & Legal Jurisdiction", icon: Scale },
];

const HIGHLIGHTS = [
  {
    icon: GraduationCap,
    title: "Exam & Learning Centric",
    description:
      "We collect academic profile and learning progress data strictly to provide syllabus-aligned courses, track chapter milestones, and calculate study streaks.",
  },
  {
    icon: ShieldCheck,
    title: "Zero Selling of Data",
    description:
      "We never sell or rent your personal information to third parties or data brokers. We do not use children's data for behavioral targeted ads.",
  },
  {
    icon: Lock,
    title: "Enterprise Grade Security",
    description:
      "Your account and learning activity are protected via TLS/HTTPS encryption, authenticated sessions, and secure AWS cloud infrastructure.",
  },
  {
    icon: CreditCard,
    title: "Safe Payments via Razorpay",
    description:
      "All transactions are processed through RBI-authorized payment aggregator Razorpay Payments Private Limited. PakkaPass does not store raw credit/debit card numbers or UPI PINs.",
  },
  {
    icon: UserCheck,
    title: "Data Rights & Access",
    description:
      "You can request access, correction, withdrawal of consent where applicable, and deletion of your personal data under the DPDP Act, 2023.",
  },
];

export function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState<string>("who-is-responsible");
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      setScrollProgress(currentProgress);

      const scrollPosition = window.scrollY + 200;
      for (const section of SECTIONS) {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "PakkaPass Privacy Policy",
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return SECTIONS;
    const q = searchQuery.toLowerCase();
    return SECTIONS.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.number.includes(q) ||
        s.id.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50/50 text-foreground antialiased selection:bg-brand-purple/10 selection:text-brand-purple">
      {/* Top Header */}
      <header className="sticky top-0 z-50 border-b border-border/80 bg-white/95 backdrop-blur-md shadow-xs">
        {/* Scroll Progress Bar */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-brand-purple via-indigo-600 to-brand-blue transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="PakkaPass" className="h-12 md:h-14 w-auto object-contain" />
            </Link>
            <div className="hidden h-5 w-px bg-border sm:block" />
            <span className="hidden text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:inline-block">
              Legal & Compliance Center
            </span>
          </div>

          <div className="hidden items-center gap-6 md:flex">
            <Link to="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Home
            </Link>
            <a href="/#courses" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Courses
            </a>
            <a href="/#faq" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              FAQ
            </a>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-cta px-4 py-2 text-xs font-semibold text-primary-foreground shadow-sm transition-transform hover:scale-[1.02]"
            >
              <Download className="h-3.5 w-3.5" /> Download App
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-muted-foreground hover:bg-muted md:hidden cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-border bg-white px-4 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 text-sm font-medium hover:bg-muted rounded-md">
                Home
              </Link>
              <a href="/#courses" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 text-sm font-medium hover:bg-muted rounded-md">
                Courses
              </a>
              <a href="/#faq" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 text-sm font-medium hover:bg-muted rounded-md">
                FAQ
              </a>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-cta px-4 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                <Download className="h-4 w-4" /> Download App
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Banner with Modern Legal Layout */}
      <section className="border-b border-border bg-gradient-to-b from-white via-brand-purple/5 to-slate-50/50 py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-4 flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground">Terms & Privacy</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="font-semibold text-brand-purple">Privacy Policy</span>
          </nav>

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-purple/10 px-3 py-1 text-xs font-semibold text-brand-purple">
                <Shield className="h-3.5 w-3.5" /> Official Data Protection & Privacy Notice
              </div>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                PakkaPass Privacy Policy
              </h1>
              <p className="mt-3 text-base text-muted-foreground md:text-lg leading-relaxed">
                PakkaPass is dedicated to empowering students with syllabus-aligned video lectures, digital study notes,
                practice materials, and academic progress tracking while protecting student privacy under Indian law.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-white px-2.5 py-1 border border-border">
                  <strong>Effective Date:</strong> September 2026
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md bg-white px-2.5 py-1 border border-border">
                  <strong>Last Updated:</strong> 15th September 2026
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md bg-white px-2.5 py-1 border border-border">
                  <strong>Governing Law:</strong> DPDP Act, 2023 (India)
                </span>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-semibold text-slate-700 shadow-xs hover:bg-slate-50 transition-colors cursor-pointer"
                title="Print or Save as PDF"
              >
                <Printer className="h-4 w-4 text-slate-500" /> Print / Save PDF
              </button>
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-semibold text-slate-700 shadow-xs hover:bg-slate-50 transition-colors cursor-pointer"
                title="Share link"
              >
                <Share2 className="h-4 w-4 text-slate-500" /> {copiedLink ? "Link Copied!" : "Share Link"}
              </button>
            </div>
          </div>

          {/* Key Highlights Summary Box */}
          <div className="mt-8 rounded-2xl border border-border bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
              <Sparkles className="h-4 w-4 text-brand-purple" />
              <span>Key Highlights at a Glance</span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              Here is a quick summary of how PakkaPass handles your personal information. Read the full policy below for comprehensive details.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {HIGHLIGHTS.map((item, idx) => (
                <div key={idx} className="rounded-xl border border-slate-100 bg-slate-50/60 p-4 transition-all hover:bg-white hover:shadow-xs">
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-brand-purple/10 text-brand-purple">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <h4 className="mt-3 text-xs font-bold text-slate-900">{item.title}</h4>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout with Sticky Sidebar */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left Sidebar Navigation (Sticky on Desktop) */}
          <aside className="lg:col-span-4 xl:col-span-3">
            <div className="sticky top-24 space-y-4">
              {/* Search Filter Box */}
              <div className="relative">
                <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search in policy..."
                  className="w-full rounded-xl border border-slate-200 bg-white py-2 pl-10 pr-4 text-xs placeholder:text-slate-400 focus:border-brand-purple focus:outline-none focus:ring-1 focus:ring-brand-purple"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Table of Contents Container */}
              <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-2.5 shadow-xs">
                <div className="flex items-center justify-between px-3 py-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Table of Contents
                  </span>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-500">
                    {SECTIONS.length} Sections
                  </span>
                </div>
                <nav className="max-h-[calc(100vh-290px)] space-y-0.5 overflow-y-auto pr-1 text-xs">
                  {filteredSections.map((sec) => {
                    const isActive = activeSection === sec.id;
                    return (
                      <button
                        key={sec.id}
                        onClick={() => scrollToSection(sec.id)}
                        className={`flex w-full items-center gap-2.5 rounded-lg border-l-[3px] px-3 py-2 text-left transition-all cursor-pointer ${
                          isActive
                            ? "border-brand-purple bg-brand-purple/[0.07] font-semibold text-brand-purple shadow-2xs"
                            : "border-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                        }`}
                      >
                        <span
                          className={`text-[11px] font-bold ${
                            isActive ? "text-brand-purple" : "text-slate-400"
                          }`}
                        >
                          {sec.number.padStart(2, "0")}.
                        </span>
                        <span className="truncate leading-tight">{sec.title}</span>
                      </button>
                    );
                  })}
                  {filteredSections.length === 0 && (
                    <div className="p-4 text-center text-xs text-muted-foreground">
                      No matching sections found.
                    </div>
                  )}
                </nav>

                {/* Grievance Redressal Quick CTA */}
                <div className="mt-2.5 border-t border-slate-100 pt-2.5">
                  <button
                    onClick={() => scrollToSection("contact-grievance-redressal")}
                    className="flex w-full items-center justify-between rounded-xl bg-slate-50/80 p-2.5 text-xs font-semibold text-brand-purple hover:bg-brand-purple/5 transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5">
                      <Mail className="h-3.5 w-3.5" /> Privacy & Support Desk
                    </span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Main Policy Content */}
          <main className="space-y-12 lg:col-span-8 xl:col-span-9">
            {/* Introductory Statement */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs leading-relaxed text-slate-700">
              <h2 className="text-xl font-bold text-slate-900">About PakkaPass & This Policy</h2>
              <p className="mt-3 text-sm leading-relaxed">
                PakkaPass (<strong>"PakkaPass"</strong>, <strong>"we"</strong>, <strong>"us"</strong>, or{" "}
                <strong>"our"</strong>) is an educational learning platform that provides students with access to educational
                content, video lectures, notes, practice materials, academic progress tracking, subscriptions, and related services
                through our mobile application, website (<Link to="/" className="text-brand-purple underline">https://pakkapass.com</Link>),
                and associated services (collectively, the <strong>"Services"</strong>).
              </p>
              <p className="mt-3 text-sm leading-relaxed">
                By registering for or using PakkaPass, you acknowledge that you have read and understood this Privacy Policy.
                This Privacy Policy is intended to be read together with the Terms of Use and any other applicable terms governing
                your use of the Services.
              </p>
              <p className="mt-3 text-sm leading-relaxed">
                PakkaPass processes personal data in accordance with applicable laws of India, including, to the extent applicable
                and from the date on which the relevant provisions become effective, the Digital Personal Data Protection Act, 2023 (
                <strong>"DPDP Act"</strong>) and the Digital Personal Data Protection Rules, 2025 (<strong>"DPDP Rules"</strong>),
                as amended or replaced from time to time. Where consent is required under applicable law, PakkaPass will obtain
                such consent in the manner prescribed by applicable law.
              </p>
            </div>

            {/* Section 1 */}
            <section id="who-is-responsible" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple">
                  1
                </span>
                <h3 className="text-xl font-bold text-slate-900">1. Who Is Responsible for Your Data?</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  PakkaPass is owned and operated by <strong>Pratiti Eduskills Private Limited</strong>, acting as the{" "}
                  <strong>Data Fiduciary / Data Controller</strong> under the Digital Personal Data Protection Act, 2023 (DPDP Act)
                  and the Information Technology Act, 2000 of India.
                </p>
                <div className="grid gap-3 sm:grid-cols-2 rounded-xl bg-slate-50 p-4 border border-slate-200/80">
                  <div>
                    <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Legal Entity</div>
                    <div className="font-semibold text-slate-900 mt-0.5">
                      <a href="https://www.pratitieduskills.com/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-purple hover:underline">
                        Pratiti Eduskills Private Limited
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Corporate Website</div>
                    <div className="font-semibold text-brand-purple mt-0.5">
                      <a href="https://www.pratitieduskills.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        www.pratitieduskills.com
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Official Contact & Support Email</div>
                    <div className="font-semibold text-brand-purple mt-0.5">
                      <a href="mailto:support@pakkapass.in" className="hover:underline">support@pakkapass.in</a>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Grievance & Privacy Officer</div>
                    <div className="font-semibold text-slate-900 mt-0.5">
                      Grievance Officer, Pratiti Eduskills Private Limited
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  For privacy-related questions, requests, or complaints, please contact us at <a href="mailto:support@pakkapass.in" className="text-brand-purple font-semibold underline">support@pakkapass.in</a> or refer to our Grievance Officer details in <button onClick={() => scrollToSection("contact-grievance-redressal")} className="text-brand-purple underline cursor-pointer">Section 22</button>.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="information-we-collect" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple">
                  2
                </span>
                <h3 className="text-xl font-bold text-slate-900">2. Information We Collect</h3>
              </div>
              <div className="mt-5 space-y-6 text-sm text-slate-700 leading-relaxed">
                <p>
                  We collect only the information reasonably necessary to provide, maintain, secure, and improve our Services.
                </p>

                <h4 className="font-bold text-slate-900 text-base">2.1 Information You Provide</h4>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4">
                    <strong className="text-slate-900 block text-xs uppercase tracking-wider">Account Information</strong>
                    <p className="mt-1.5 text-xs text-slate-600">Full name, email address, mobile phone number, optional profile photograph, authentication tokens.</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4">
                    <strong className="text-slate-900 block text-xs uppercase tracking-wider">Academic Information</strong>
                    <p className="mt-1.5 text-xs text-slate-600">Education board (CBSE, ICSE, State Boards), Class/grade (10, 11, 12), Academic year, Branch/stream (MPC, BiPC, CEC, AEC), School/college name, State, District, City.</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4">
                    <strong className="text-slate-900 block text-xs uppercase tracking-wider">Parent or Guardian Information</strong>
                    <p className="mt-1.5 text-xs text-slate-600">Parent/guardian name, mobile number, email address, and student relationship linkage.</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4">
                    <strong className="text-slate-900 block text-xs uppercase tracking-wider">Learning Information</strong>
                    <p className="mt-1.5 text-xs text-slate-600">Subjects studied, chapters completed, study duration, study sessions, streaks, practice activity, video interaction, content ratings, supplementary subscriptions.</p>
                  </div>
                </div>

                <div className="rounded-xl bg-slate-50 p-4 border border-slate-200">
                  <h4 className="font-semibold text-slate-900">2.2 Lawful Basis for Processing</h4>
                  <p className="mt-1 text-xs text-slate-600">
                    PakkaPass processes personal data only for lawful purposes and to the extent necessary: with user/parental consent; where voluntarily provided for a specified purpose; for providing and administering the Services; processing subscriptions and payments; complying with tax, legal, and regulatory obligations; preventing fraud and unauthorized access; and responding to lawful legal processes.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="information-collected-automatically" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple">
                  3
                </span>
                <h3 className="text-xl font-bold text-slate-900">3. Information Collected Automatically</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>When you use PakkaPass, certain technical and usage information may be collected automatically, including:</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/50 text-xs text-slate-600">
                    <strong>Device & Network:</strong> Device manufacturer, model, operating system and version, IP address, network details.
                  </div>
                  <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/50 text-xs text-slate-600">
                    <strong>Session & Diagnostic:</strong> Application session info, timestamps of activity, error diagnostic logs, security audit logs, notification status.
                  </div>
                </div>
                <div className="rounded-xl bg-slate-50 p-4 border border-slate-200">
                  <h4 className="font-semibold text-slate-900">3.1 Cookies, SDKs & Analytics Technologies</h4>
                  <p className="mt-1 text-xs text-slate-600">
                    PakkaPass and its authorized service providers may use essential tokens, SDKs, and local storage to maintain sessions, remember preferences, and improve platform reliability. <strong>PakkaPass does not use children's personal data for targeted behavioural advertising.</strong>
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="otp-account-authentication" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple">
                  4
                </span>
                <h3 className="text-xl font-bold text-slate-900">4. OTP & Account Authentication</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  PakkaPass uses One-Time Passwords (OTPs) sent via SMS or Email for passwordless registration and login. We process your phone number or email solely to deliver the OTP, verify identity, complete registration/login, and detect suspicious activity.
                </p>
                <div className="rounded-xl bg-amber-50/60 p-4 border border-amber-200 text-amber-900 text-xs">
                  <strong>Safety Notice:</strong> OTPs are temporary credentials (valid for 5–10 minutes). Never share your OTP with anyone; PakkaPass representatives will never ask for your OTP.
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="profile-photographs-camera" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple">
                  5
                </span>
                <h3 className="text-xl font-bold text-slate-900">5. Profile Photographs & Camera/Photo Access</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  PakkaPass may allow you to upload an optional profile photo. Camera and photo-library permissions are requested only when you choose to use this feature. We do not require you to provide a profile photograph unless a specific feature expressly requires it.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section id="how-we-use-information" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple">
                  6
                </span>
                <h3 className="text-xl font-bold text-slate-900">6. How We Use Your Information</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>We process personal data for legitimate purposes necessary to operate PakkaPass:</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/50">
                    <strong className="text-slate-900 block text-xs uppercase">Providing Educational Services</strong>
                    <p className="mt-1 text-xs text-slate-600">Delivering streaming lectures, syllabus notes, practice question sets, and personalized curriculum modules.</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/50">
                    <strong className="text-slate-900 block text-xs uppercase">Learning Progress Analytics</strong>
                    <p className="mt-1 text-xs text-slate-600">Tracking chapter milestones, computing study streaks, and generating student progress summaries.</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/50">
                    <strong className="text-slate-900 block text-xs uppercase">Subscription & Billing Management</strong>
                    <p className="mt-1 text-xs text-slate-600">Managing paid plan access, applying coupons, verifying renewals, and generating GST invoices.</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/50">
                    <strong className="text-slate-900 block text-xs uppercase">Security & Service Communications</strong>
                    <p className="mt-1 text-xs text-slate-600">Sending OTPs, transaction receipts, security notices, and investigating unauthorized access.</p>
                  </div>
                </div>
                <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 text-xs text-slate-600">
                  <strong>Consent Notice:</strong> Consent is obtained via clear affirmative mechanisms. Consent will not be inferred merely because a user continues using the Services where applicable law requires explicit consent.
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section id="student-child-privacy" className="scroll-mt-24 rounded-2xl border border-brand-purple/20 bg-brand-purple/5 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-brand-purple/20 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple text-white text-sm font-bold">
                  7
                </span>
                <h3 className="text-xl font-bold text-slate-900">7. Student & Child Privacy</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  PakkaPass is designed for students in Classes 10, 11, and 12, many of whom are minors (below 18 years of age). We enforce strict child data protection standards under the DPDP Act, 2023:
                </p>
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5 rounded-xl bg-white p-3.5 border border-brand-purple/10 text-xs sm:text-sm">
                    <CheckCircle2 className="h-4 w-4 text-brand-purple shrink-0 mt-0.5" />
                    <span><strong>Verifiable Parental Consent:</strong> We obtain and verify parental/guardian consent before processing personal data of a minor as required under applicable law.</span>
                  </div>
                  <div className="flex items-start gap-2.5 rounded-xl bg-white p-3.5 border border-brand-purple/10 text-xs sm:text-sm">
                    <CheckCircle2 className="h-4 w-4 text-brand-purple shrink-0 mt-0.5" />
                    <span><strong>Strictly No Targeted Advertising:</strong> We never track children across third-party websites or serve targeted behavioral advertisements to minor users.</span>
                  </div>
                  <div className="flex items-start gap-2.5 rounded-xl bg-white p-3.5 border border-brand-purple/10 text-xs sm:text-sm">
                    <CheckCircle2 className="h-4 w-4 text-brand-purple shrink-0 mt-0.5" />
                    <span><strong>Child Well-Being & Safety:</strong> We collect only minimum necessary data and never process child data in a manner detrimental to their well-being.</span>
                  </div>
                  <div className="flex items-start gap-2.5 rounded-xl bg-white p-3.5 border border-brand-purple/10 text-xs sm:text-sm">
                    <CheckCircle2 className="h-4 w-4 text-brand-purple shrink-0 mt-0.5" />
                    <span><strong>Parental Rights:</strong> Parents can contact <a href="mailto:support@pakkapass.in" className="text-brand-purple font-semibold underline">support@pakkapass.in</a> to review, correct, or delete their child's records.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section id="information-sharing-disclosure" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple">
                  8
                </span>
                <h3 className="text-xl font-bold text-slate-900">8. Information Sharing & Disclosure</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p><strong>We do not sell or rent your personal information.</strong> We share data only in limited circumstances:</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
                    <strong className="text-slate-900 block font-semibold mb-1">Parents & Guardians:</strong> Linked parents receive learning progress, completed topics, and subscription updates.
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
                    <strong className="text-slate-900 block font-semibold mb-1">Educational Partners:</strong> Where access is school-sponsored, aggregate batch completion reports are shared with authorized coordinators.
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
                    <strong className="text-slate-900 block font-semibold mb-1">Service Providers / Data Processors:</strong> Vetted cloud (AWS), payment (Razorpay), and SMS partners bound by strict data processing agreements.
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
                    <strong className="text-slate-900 block font-semibold mb-1">Legal Requirements:</strong> When mandated by valid law, court order, or regulatory authority.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9 */}
            <section id="third-party-services" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple">
                  9
                </span>
                <h3 className="text-xl font-bold text-slate-900">9. Third-Party Services</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/50">
                    <div className="flex items-center gap-2 font-bold text-slate-900">
                      <Server className="h-4 w-4 text-brand-blue" /> Amazon Web Services (AWS)
                    </div>
                    <p className="mt-2 text-xs text-slate-600">We utilize secure AWS cloud infrastructure and Amazon S3 for storing educational media, video lectures, and application databases.</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/50">
                    <div className="flex items-center gap-2 font-bold text-slate-900">
                      <CreditCard className="h-4 w-4 text-emerald-600" /> Razorpay Payments
                    </div>
                    <p className="mt-2 text-xs text-slate-600">RBI-authorized payment aggregator processing subscriptions with PCI-DSS Level 1 compliance and 256-bit TLS encryption.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 10 */}
            <section id="payment-information" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple">
                  10
                </span>
                <h3 className="text-xl font-bold text-slate-900">10. Payment Information & Billing</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  When purchasing a subscription, we retain non-sensitive transaction metadata (Order ID, Payment ID, Plan Tier, Amount, and GST invoice records). <strong>PakkaPass does not collect or store full credit/debit card numbers, CVVs, or UPI PINs.</strong>
                </p>
              </div>
            </section>

            {/* Section 11 */}
            <section id="data-storage-security" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple">
                  11
                </span>
                <h3 className="text-xl font-bold text-slate-900">11. Data Storage & Security Measures</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>We implement technical and organizational safeguards:</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/50 text-xs text-slate-600">
                    <strong className="text-slate-900 block font-semibold mb-1">TLS / HTTPS Encryption:</strong> All data in transit between devices and servers is encrypted.
                  </div>
                  <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/50 text-xs text-slate-600">
                    <strong className="text-slate-900 block font-semibold mb-1">Cloud Infrastructure:</strong> AWS servers with firewall protection and role-based access management.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 12 */}
            <section id="personal-data-breach" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple">
                  12
                </span>
                <h3 className="text-xl font-bold text-slate-900">12. Personal Data Breach Protocol</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  In the event of a personal data breach, PakkaPass will assess and respond to the incident in accordance with the DPDP Act and DPDP Rules, notifying the Data Protection Board of India and affected Data Principals where required.
                </p>
              </div>
            </section>

            {/* Section 13 */}
            <section id="data-retention" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple">
                  13
                </span>
                <h3 className="text-xl font-bold text-slate-900">13. Data Retention & Storage Limits</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  Personal data is retained only as long as necessary for educational service delivery, account maintenance, and statutory tax/accounting compliance. Retained data is periodically reviewed and securely disposed of or anonymized when no longer required.
                </p>
              </div>
            </section>

            {/* Section 14 */}
            <section id="your-privacy-rights" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple">
                  14
                </span>
                <h3 className="text-xl font-bold text-slate-900">14. Your Privacy Rights & Choices</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>Under the DPDP Act, 2023, you hold the following rights:</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/50 text-xs text-slate-600">
                    <strong className="text-slate-900 block font-semibold">Right to Access & Summary:</strong> Request information on personal data processed.
                  </div>
                  <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/50 text-xs text-slate-600">
                    <strong className="text-slate-900 block font-semibold">Right to Correction:</strong> Update or correct inaccurate profile details.
                  </div>
                  <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/50 text-xs text-slate-600">
                    <strong className="text-slate-900 block font-semibold">Right to Erasure / Deletion:</strong> Request account and data deletion.
                  </div>
                  <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/50 text-xs text-slate-600">
                    <strong className="text-slate-900 block font-semibold">Right to Withdraw Consent:</strong> Withdraw previously given consent.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 15 */}
            <section id="account-deletion" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-red-100 text-red-600 text-sm font-bold">
                  15
                </span>
                <h3 className="text-xl font-bold text-slate-900">15. Account Deletion Process</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  You can request account deletion via in-app support or by emailing <a href="mailto:support@pakkapass.in" className="text-brand-purple font-semibold underline">support@pakkapass.in</a> with subject <em>"Account Deletion Request"</em>. Records required under tax or legal obligations are retained as permitted by law.
                </p>
              </div>
            </section>

            {/* Section 16 */}
            <section id="app-permissions" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple">
                  16
                </span>
                <h3 className="text-xl font-bold text-slate-900">16. Mobile App Permissions</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/50 text-xs text-slate-600">
                    <strong className="text-slate-900 block font-semibold">Photos / Media:</strong> Uploading profile picture or accessing offline study notes.
                  </div>
                  <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/50 text-xs text-slate-600">
                    <strong className="text-slate-900 block font-semibold">Camera Access:</strong> Taking an optional student avatar photo.
                  </div>
                  <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/50 text-xs text-slate-600">
                    <strong className="text-slate-900 block font-semibold">Internet & Network:</strong> Streaming lectures, sync progress, and verify subscriptions.
                  </div>
                  <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/50 text-xs text-slate-600">
                    <strong className="text-slate-900 block font-semibold">In-App Notifications:</strong> Academic alerts and study streak reminders.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 17 */}
            <section id="child-safety-advertising" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple">
                  17
                </span>
                <h3 className="text-xl font-bold text-slate-900">17. Child Safety & Zero Advertising</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  PakkaPass is strictly an educational service. We do not sell personal information, do not use children's data for targeted advertising, and collect only what is reasonably necessary.
                </p>
              </div>
            </section>

            {/* Section 18 */}
            <section id="third-party-links" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple">
                  18
                </span>
                <h3 className="text-xl font-bold text-slate-900">18. Third-Party Links & Services</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  PakkaPass may contain links to external educational or payment resources. We encourage reviewing the privacy policies of any third-party services you access.
                </p>
              </div>
            </section>

            {/* Section 19 */}
            <section id="user-generated-content" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple">
                  19
                </span>
                <h3 className="text-xl font-bold text-slate-900">19. User-Generated Content</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  Content uploaded by users (such as doubt questions, feedback, or profile photos) is processed solely to provide the relevant feature and is retained only as long as necessary.
                </p>
              </div>
            </section>

            {/* Section 20 */}
            <section id="ai-automated-processing" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple">
                  20
                </span>
                <h3 className="text-xl font-bold text-slate-900">20. AI & Automated Processing</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  Where automated technologies or recommendations are used to support student learning, they operate strictly within authorized educational purposes in compliance with applicable law.
                </p>
              </div>
            </section>

            {/* Section 21 */}
            <section id="cross-border-transfers" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple">
                  21
                </span>
                <h3 className="text-xl font-bold text-slate-900">21. Cross-Border Data Transfers</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  Where personal data is stored or processed on secure cloud infrastructure, PakkaPass complies with all cross-border data transfer requirements prescribed under Indian law.
                </p>
              </div>
            </section>

            {/* Section 22 */}
            <section id="contact-grievance-redressal" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple">
                  22
                </span>
                <h3 className="text-xl font-bold text-slate-900">22. Contact & Grievance Redressal</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  In accordance with the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023, privacy inquiries and grievances may be directed to our Grievance Officer:
                </p>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Grievance Contact</div>
                      <div className="font-semibold text-slate-900 mt-0.5">Grievance Officer</div>
                      <div className="text-xs text-muted-foreground mt-0.5">Pratiti Eduskills Private Limited</div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Official Email</div>
                      <div className="font-semibold text-brand-purple mt-0.5">
                        <a href="mailto:support@pakkapass.in" className="hover:underline">support@pakkapass.in</a>
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">(Subject: <em>Attn: Grievance Officer</em>)</div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Corporate Entity</div>
                      <div className="font-semibold text-slate-900 mt-0.5">
                        <a href="https://www.pratitieduskills.com/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-purple hover:underline">
                          Pratiti Eduskills Private Limited
                        </a>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Corporate Website</div>
                      <div className="font-semibold text-brand-purple mt-0.5">
                        <a href="https://www.pratitieduskills.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                          www.pratitieduskills.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-slate-200 pt-3 text-xs text-muted-foreground">
                    All formal privacy inquiries and grievances will be acknowledged and redressed in accordance with the timelines and procedures stipulated under applicable laws.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 23 */}
            <section id="changes-to-policy" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple">
                  23
                </span>
                <h3 className="text-xl font-bold text-slate-900">23. Changes to This Privacy Policy</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  We may update this Privacy Policy from time to time. When we make material changes, we will notify users through the app, website, or email. The "Last Updated" date at the top will be updated accordingly.
                </p>
              </div>
            </section>

            {/* Section 24 */}
            <section id="governing-law" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple">
                  24
                </span>
                <h3 className="text-xl font-bold text-slate-900">24. Governing Law & Legal Jurisdiction</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  This Privacy Policy is governed by and construed in accordance with the laws of the <strong>Republic of India</strong>, including the Digital Personal Data Protection Act, 2023, the Information Technology Act, 2000, and the rules framed thereunder.
                </p>
              </div>
            </section>

            {/* Back to top & Download Banner */}
            <div className="rounded-2xl bg-gradient-cta p-8 text-white shadow-elev flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold">Have questions about your learning journey?</h3>
                <p className="mt-1 text-sm text-white/80">Explore our exam-centric courses for Class 10, 11, and 12 today.</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <Link
                  to="/"
                  className="rounded-full bg-white px-5 py-2.5 text-xs font-bold text-slate-900 shadow-sm hover:bg-slate-100 transition-colors"
                >
                  Return to Home
                </Link>
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-black/30 border border-white/20 px-5 py-2.5 text-xs font-bold text-white hover:bg-black/40 transition-colors"
                >
                  Download on Google Play
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Website Footer */}
      <footer className="border-t border-border bg-white mt-16">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Link to="/">
                <img src={logo} alt="PakkaPass" className="h-12 w-auto" />
              </Link>
              <p className="text-xs text-muted-foreground">
                PakkaPass™ — Exam-centric learning app by{" "}
                <a href="https://www.pratitieduskills.com/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-brand-purple underline">
                  Pratiti Eduskills
                </a>.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="/privacy" className="font-semibold text-brand-purple">
                Privacy Policy
              </Link>
              <a href="/#courses" className="hover:text-foreground transition-colors">
                Courses
              </a>
              <a href="/#faq" className="hover:text-foreground transition-colors">
                FAQ
              </a>
              <a href="mailto:support@pakkapass.in" className="hover:text-foreground transition-colors">
                Contact Support
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-slate-100 pt-6 text-center text-xs text-slate-400">
            © {new Date().getFullYear()} Pratiti Eduskills Private Limited. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
