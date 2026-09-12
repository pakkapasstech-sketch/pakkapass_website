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
  ExternalLink,
  Download,
  Menu,
  X,
  Sparkles,
  GraduationCap,
  Scale,
  Users,
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
  { id: "who-we-are", number: "1", title: "Who Is Responsible for Your Data", icon: Building },
  { id: "what-data-we-get", number: "2", title: "What Data We Get", icon: FileText },
  { id: "how-we-get-data", number: "3", title: "How We Get Data About You", icon: Eye },
  { id: "how-we-use-data", number: "4", title: "What We Use Your Data For", icon: BookOpen },
  { id: "authentication-otp", number: "5", title: "OTP & Account Authentication", icon: Lock },
  { id: "media-permissions", number: "6", title: "Profile Photos & Device Permissions", icon: Smartphone },
  { id: "student-child-privacy", number: "7", title: "Student & Child Privacy", icon: GraduationCap },
  { id: "data-sharing", number: "8", title: "Who We Share Your Data With", icon: Users },
  { id: "third-party-services", number: "9", title: "Third-Party Services (AWS, S3, Communications)", icon: Server },
  { id: "payment-processing", number: "10", title: "Payment Processing & Billing (Razorpay)", icon: CreditCard },
  { id: "data-security", number: "11", title: "Data Storage & Security Measures", icon: ShieldCheck },
  { id: "data-retention", number: "12", title: "Data Retention & Storage Limits", icon: FileText },
  { id: "privacy-rights", number: "13", title: "Your Privacy Rights & Choices", icon: UserCheck },
  { id: "account-deletion", number: "14", title: "Account Deletion Process", icon: Trash2 },
  { id: "cookies-tracking", number: "15", title: "Cookies & Tracking Technologies", icon: Bell },
  { id: "governing-law", number: "16", title: "Governing Law & Legal Jurisdiction", icon: Scale },
  { id: "contact-grievance", number: "17", title: "Contact & Grievance Redressal", icon: Mail },
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
      "Your account and learning activity are protected via TLS/HTTPS encryption, authenticated sessions, and secure AWS infrastructure.",
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
      "You can request access, correction, withdrawal of consent where applicable, and deletion of your personal data, subject to applicable legal and regulatory requirements.",
  },
];

export function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState<string>("who-we-are");
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
    <div className="min-h-screen bg-slate-50/50 text-foreground antialiased">
      {/* Top Header */}
      <header className="sticky top-0 z-50 border-b border-border/80 bg-white/95 backdrop-blur-md shadow-xs">
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

      {/* Hero Banner with Udemy Style Layout */}
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
                We take student privacy and trust seriously. This Privacy Policy details the information we collect,
                how it is processed to power your educational journey, and how you maintain control over your personal data.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-white px-2.5 py-1 border border-border">
                  <strong>Effective Date:</strong> September 2026
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md bg-white px-2.5 py-1 border border-border">
                  <strong>Last Updated:</strong> September 2026
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

          {/* Key Highlights Summary Box (Udemy Style "Privacy Highlights") */}
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
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-xs">
                <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                  Table of Contents
                </div>
                <nav className="max-h-[calc(100vh-280px)] space-y-1 overflow-y-auto pr-1 text-xs">
                  {filteredSections.map((sec) => {
                    const isActive = activeSection === sec.id;
                    return (
                      <button
                        key={sec.id}
                        onClick={() => scrollToSection(sec.id)}
                        className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left font-medium transition-all cursor-pointer ${
                          isActive
                            ? "bg-brand-purple text-white shadow-xs"
                            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                        }`}
                      >
                        <span
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded text-[10px] font-bold ${
                            isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {sec.number}
                        </span>
                        <span className="truncate">{sec.title}</span>
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
                <div className="mt-3 border-t border-slate-100 pt-3">
                  <button
                    onClick={() => scrollToSection("contact-grievance")}
                    className="flex w-full items-center justify-between rounded-xl bg-slate-50 p-2.5 text-xs font-semibold text-brand-purple hover:bg-brand-purple/5 transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5">
                      <Mail className="h-3.5 w-3.5" /> Need privacy assistance?
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
                <strong>"our"</strong>) operates the PakkaPass educational learning platform, mobile application
                (available on Google Play Store for Android), website (<Link to="/" className="text-brand-purple underline">https://pakkapass.com</Link>),
                and associated online educational services (collectively, the <strong>"Services"</strong>).
              </p>
              <p className="mt-3 text-sm leading-relaxed">
                PakkaPass is dedicated to empowering students of Class 10, 11, and 12 with high-quality, exam-centric video lectures, digital notes, previous year question papers (PYQs), and real-time academic progress analytics.
              </p>
              <p className="mt-3 text-sm leading-relaxed">
                This Privacy Policy explains how PakkaPass collects, uses, shares, retains and protects personal data. Where consent is required by applicable law, PakkaPass will obtain consent through an appropriate consent mechanism.
              </p>
            </div>

            {/* Section 1 */}
            <section id="who-we-are" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple">
                  1
                </span>
                <h3 className="text-xl font-bold text-slate-900">Who Is Responsible for Your Data?</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  PakkaPass is owned and operated by <strong>Pratiti Eduskills Private Limited</strong> (<a href="https://www.pratitieduskills.com/" target="_blank" rel="noopener noreferrer" className="text-brand-purple underline">pratitieduskills.com</a>), acting as the <strong>Data Fiduciary / Data Controller</strong> under the Digital Personal Data Protection Act, 2023 (DPDP Act) and the Information Technology Act, 2000 of India.
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
                </div>
                <p className="text-xs text-muted-foreground">
                  For privacy queries, parental consent inquiries, or data rights requests, you can contact us directly at <a href="mailto:support@pakkapass.in" className="text-brand-purple font-semibold underline">support@pakkapass.in</a> or refer to our Grievance Officer details in <button onClick={() => scrollToSection("contact-grievance")} className="text-brand-purple underline cursor-pointer">Section 17</button>.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="what-data-we-get" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple">
                  2
                </span>
                <h3 className="text-xl font-bold text-slate-900">What Data We Get</h3>
              </div>
              <div className="mt-5 space-y-6 text-sm text-slate-700 leading-relaxed">
                <p>
                  We collect only the minimum information necessary to deliver high-quality educational content, personalize your study plan, maintain security, and process subscriptions.
                </p>

                {/* Structured Data Category Table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                      <tr>
                        <th className="p-3 sm:p-4">Category</th>
                        <th className="p-3 sm:p-4">Specific Data Elements</th>
                        <th className="p-3 sm:p-4">Primary Purpose</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3 sm:p-4 font-semibold text-slate-900 align-top">
                          Account Information
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600 align-top">
                          Full name, email address, mobile phone number, optional profile photograph, authentication tokens.
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600 align-top">
                          User registration, OTP login, profile customization, customer support, and account security.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3 sm:p-4 font-semibold text-slate-900 align-top">
                          Academic Profile
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600 align-top">
                          Education Board (CBSE, ICSE, State Boards), Class/Grade (10, 11, 12), Academic stream/branch (MPC, BiPC, CEC, AEC), School/College name, City, District, and State.
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600 align-top">
                          Customizing syllabus-aligned video lectures, targeted notes, and board-specific question sets.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3 sm:p-4 font-semibold text-slate-900 align-top">
                          Learning & Progress Data
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600 align-top">
                          Subjects & topics studied, video watch timestamps, chapters completed, study streak counts, practice quiz answers, previous year question activity, time spent per concept, ratings/feedback.
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600 align-top">
                          Delivering performance analytics, accuracy insights, and study streak badges.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3 sm:p-4 font-semibold text-slate-900 align-top">
                          Parent / Guardian Data
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600 align-top">
                          Parent/guardian name, parent mobile number, parent email address, student linkage relationship.
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600 align-top">
                          Facilitating parental consent, sending weekly progress summaries, and billing/subscription updates.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3 sm:p-4 font-semibold text-slate-900 align-top">
                          Technical & Device Data
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600 align-top">
                          Device model, manufacturer, OS version, IP address, network carrier, session identifiers.
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600 align-top">
                          Preventing multi-device credential misuse and ensuring reliable video streaming delivery.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3 sm:p-4 font-semibold text-slate-900 align-top">
                          Transaction Data
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600 align-top">
                          Payment Gateway Transaction ID (Razorpay), subscription plan tier, purchase timestamp, amount paid, discount coupon codes, payment mode (UPI/Card/NetBanking).
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600 align-top">
                          Granting paid course access, generating GST-compliant tax invoices, managing subscription renewals.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-4 text-amber-900 text-xs sm:text-sm">
                  <strong>Important Note on Sensitive Payment Data:</strong> PakkaPass does <strong>NOT</strong> collect or store full credit/debit card numbers, CVV codes, or UPI PINs on our servers. All sensitive financial transactions are securely tokenized and handled directly through PCI-DSS Level 1 compliant payment aggregator Razorpay Payments Private Limited.
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="how-we-get-data" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple">
                  3
                </span>
                <h3 className="text-xl font-bold text-slate-900">How We Get Data About You</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>We use different methods to collect data from and about you, including:</p>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4">
                    <div className="font-semibold text-slate-900">1. Direct Interactions</div>
                    <p className="mt-1.5 text-xs text-muted-foreground">
                      You directly give us information when creating an account, selecting your grade/board, uploading a profile picture, solving previous year papers, or contacting customer support.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4">
                    <div className="font-semibold text-slate-900">2. Automated Technologies</div>
                    <p className="mt-1.5 text-xs text-muted-foreground">
                      As you navigate the app or website, our systems automatically collect technical data regarding video streaming performance and device parameters.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4">
                    <div className="font-semibold text-slate-900">3. Educational Partners</div>
                    <p className="mt-1.5 text-xs text-muted-foreground">
                      If your school, coaching institute, or academic sponsor provides you access to PakkaPass, we may receive basic batch enrollment details from your institution.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="how-we-use-data" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple">
                  4
                </span>
                <h3 className="text-xl font-bold text-slate-900">What We Use Your Data For</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>We process your personal information based on legitimate, lawful grounds:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <strong className="text-slate-900">Delivering Educational Content:</strong> Providing streaming lectures, downloadable notes, previous year question solutions, and subject modules tailored to your syllabus.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <strong className="text-slate-900">Progress Tracking & Exam Analytics:</strong> Computing study streaks, subject accuracy rates, time management analytics, and personalized chapter revision reminders.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <strong className="text-slate-900">Parental Progress Sharing:</strong> Enabling parents or guardians to review the student's study activity, chapter completion progress, and subscription status when accounts are linked.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <strong className="text-slate-900">Subscription & Order Fulfillment:</strong> Processing plan upgrades, managing active subscriptions, applying coupon codes, and generating GST invoices.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <strong className="text-slate-900">System Security & Platform Integrity:</strong> Protecting account access, preventing unauthorized credential sharing, and troubleshooting application issues.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <strong className="text-slate-900">Essential Service Communications:</strong> Sending OTPs, security alerts, exam date announcements, and resolving customer support tickets.
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section id="authentication-otp" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple">
                  5
                </span>
                <h3 className="text-xl font-bold text-slate-900">OTP & Account Authentication</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  PakkaPass uses passwordless One-Time Password (OTP) verification sent via SMS or Email for seamless and highly secure account registration and sign-in.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 border border-slate-200">
                  <h4 className="font-semibold text-slate-900">How We Handle OTPs:</h4>
                  <ul className="mt-2 list-disc list-inside space-y-1 text-xs text-slate-600">
                    <li>OTPs are short-lived authentication tokens (valid for 5 to 10 minutes).</li>
                    <li>We process your verified mobile phone number or email solely to deliver the OTP and authenticate identity.</li>
                    <li>OTPs are encrypted in transit and hashed during backend verification.</li>
                    <li><strong>Important Safety Warning:</strong> Never share your PakkaPass OTP with anyone. Our representatives will never call or message asking for your OTP.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="media-permissions" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple">
                  6
                </span>
                <h3 className="text-xl font-bold text-slate-900">Profile Photos & Device Permissions</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  To provide full functionality, the PakkaPass mobile application may request the following device permissions with your explicit approval:
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/50">
                    <div className="flex items-center gap-2 font-semibold text-slate-900">
                      <Smartphone className="h-4 w-4 text-brand-purple" /> Photos / Media Storage
                    </div>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      Used only when you choose to upload a custom profile picture, save digital study notes locally for offline revision, or upload problem doubt screenshots.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/50">
                    <div className="flex items-center gap-2 font-semibold text-slate-900">
                      <Eye className="h-4 w-4 text-brand-purple" /> Camera Access
                    </div>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      Requested only if you choose to snap a live photo for your student profile badge or scan a physical question for doubt clearing. We never access the camera in the background.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/50">
                    <div className="flex items-center gap-2 font-semibold text-slate-900">
                      <Bell className="h-4 w-4 text-brand-purple" /> Push Notifications
                    </div>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      Used to send study streak reminders, scheduled live class notifications, important board exam updates, and transaction receipts. Notification permissions can be managed directly through your Android device system settings.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/50">
                    <div className="flex items-center gap-2 font-semibold text-slate-900">
                      <Server className="h-4 w-4 text-brand-purple" /> Network & Internet
                    </div>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      Required to stream adaptive-bitrate video lectures, synchronize your study activity, and verify active course subscriptions.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section id="student-child-privacy" className="scroll-mt-24 rounded-2xl border border-brand-purple/20 bg-brand-purple/5 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-brand-purple/20 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple text-white text-sm font-bold">
                  7
                </span>
                <h3 className="text-xl font-bold text-slate-900">Student & Child Privacy</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  PakkaPass is designed as an educational learning companion for students of Class 10, 11, and 12, many of whom are minors (under 18 years of age). We hold ourselves to the highest standards of child data safety:
                </p>
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5 rounded-xl bg-white p-3.5 border border-brand-purple/10">
                    <CheckCircle2 className="h-4 w-4 text-brand-purple shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm"><strong>Parent / Guardian Information:</strong> During student account creation, PakkaPass collects parent/guardian details (name, mobile number, and email) to ensure parental awareness and oversight. Where applicable, PakkaPass will obtain and verify consent from the parent or lawful guardian before processing the personal data of a child, using a verification mechanism permitted under applicable law.</span>
                  </div>
                  <div className="flex items-start gap-2.5 rounded-xl bg-white p-3.5 border border-brand-purple/10">
                    <CheckCircle2 className="h-4 w-4 text-brand-purple shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm"><strong>Strictly No Behavioral Advertising:</strong> We never track children across third-party websites or serve targeted behavioral advertisements to minor users.</span>
                  </div>
                  <div className="flex items-start gap-2.5 rounded-xl bg-white p-3.5 border border-brand-purple/10">
                    <CheckCircle2 className="h-4 w-4 text-brand-purple shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm"><strong>Parent Communication & Visibility:</strong> Parents can stay updated regarding their child's learning engagement, course access, and academic milestones.</span>
                  </div>
                  <div className="flex items-start gap-2.5 rounded-xl bg-white p-3.5 border border-brand-purple/10">
                    <CheckCircle2 className="h-4 w-4 text-brand-purple shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm"><strong>Parental Rights:</strong> Parents and legal guardians can contact us at any time at <a href="mailto:support@pakkapass.in" className="text-brand-purple font-semibold underline">support@pakkapass.in</a> to inspect, modify, or request deletion of their child's educational records.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section id="data-sharing" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple">
                  8
                </span>
                <h3 className="text-xl font-bold text-slate-900">Who We Share Your Data With</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  <strong>We do not sell, rent, or trade your personal information.</strong> We only share information in the following limited and necessary circumstances:
                </p>
                <div className="space-y-3">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <h4 className="font-semibold text-slate-900">1. Parents and Legal Guardians</h4>
                    <p className="mt-1 text-xs text-slate-600">
                      When a student account is linked to a parent's mobile number, relevant academic progress, completed chapters, and subscription status are accessible to the verified parent/guardian.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <h4 className="font-semibold text-slate-900">2. Authorized Educational Institutions & Coaching Partners</h4>
                    <p className="mt-1 text-xs text-slate-600">
                      If your access is sponsored or managed by your school or coaching center, authorized academic coordinators may receive aggregate or individual completion reports to facilitate classroom teaching.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <h4 className="font-semibold text-slate-900">3. Vetted Service Providers & Infrastructure Partners</h4>
                    <p className="mt-1 text-xs text-slate-600">
                      We share necessary data with trusted cloud providers (AWS), RBI-authorized payment aggregator (Razorpay Payments Private Limited), and SMS/Email delivery partners who are bound by strict non-disclosure and data protection agreements.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <h4 className="font-semibold text-slate-900">4. Legal & Regulatory Requirements</h4>
                    <p className="mt-1 text-xs text-slate-600">
                      We may disclose information if required by law, valid court order, government investigation, or to enforce our terms and protect the safety and rights of our users.
                    </p>
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
                <h3 className="text-xl font-bold text-slate-900">Third-Party Services (AWS, Storage & Delivery)</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  To provide world-class, ultra-fast video streaming and high reliability, PakkaPass integrates with industry-leading cloud technology partners:
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/50">
                    <div className="flex items-center gap-2 font-bold text-slate-900">
                      <Server className="h-4 w-4 text-brand-blue" /> Amazon Web Services (AWS)
                    </div>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      We utilize <strong>Amazon Web Services (AWS)</strong> cloud infrastructure for secure, reliable hosting of our backend services, educational content, and video delivery.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/50">
                    <div className="flex items-center gap-2 font-bold text-slate-900">
                      <Mail className="h-4 w-4 text-brand-purple" /> Transactional SMS & Email
                    </div>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      We use enterprise SMS gateways and secure SMTP services to reliably send OTPs, passwordless login codes, and purchase receipts with end-to-end transport encryption.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 10 */}
            <section id="payment-processing" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple">
                  10
                </span>
                <h3 className="text-xl font-bold text-slate-900">Payment Processing & Billing (Razorpay)</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  When you purchase a subscription or digital course pack on PakkaPass, your payment is securely processed via <strong>Razorpay Payments Private Limited</strong> ("Razorpay"), an RBI-authorized Payment Aggregator and PCI-DSS Level 1 compliant payment processor.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 border border-slate-200">
                  <h4 className="font-semibold text-slate-900">Payment Security Measures:</h4>
                  <ul className="mt-2 list-disc list-inside space-y-1 text-xs text-slate-600">
                    <li>PakkaPass does <strong>not</strong> hold or have visibility into your full 16-digit card number, CVV code, or UPI PIN.</li>
                    <li>Payment information is encrypted using 256-bit SSL/TLS during transmission to the payment aggregator.</li>
                    <li>We retain only essential transaction metadata: Order ID, Razorpay Payment ID, Plan selected, Amount, Timestamp, and GST tax invoice records.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 11 */}
            <section id="data-security" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple">
                  11
                </span>
                <h3 className="text-xl font-bold text-slate-900">Data Storage & Security Measures</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  We implement reasonable and appropriate technical and organizational measures designed to protect personal information against unauthorized access, alteration, disclosure, or destruction:
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/50">
                    <div className="font-semibold text-slate-900">HTTPS / TLS Encryption</div>
                    <p className="mt-1 text-xs text-slate-600">All communication between your mobile device, browser, and our backend servers is encrypted in transit using industry-standard TLS protocols.</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/50">
                    <div className="font-semibold text-slate-900">Cloud Infrastructure Security</div>
                    <p className="mt-1 text-xs text-slate-600">Application data and media files are stored on secure Amazon Web Services (AWS) cloud servers with network firewall and access restrictions.</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/50">
                    <div className="font-semibold text-slate-900">Role-Based Access Controls</div>
                    <p className="mt-1 text-xs text-slate-600">Internal access to user records is restricted to authorized team members who require access to operate, maintain, and support the platform.</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/50">
                    <div className="font-semibold text-slate-900">Authentication & Session Security</div>
                    <p className="mt-1 text-xs text-slate-600">Mobile OTP verification and token-based authenticated sessions prevent unauthorized access to student accounts.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 12 */}
            <section id="data-retention" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple">
                  12
                </span>
                <h3 className="text-xl font-bold text-slate-900">Data Retention & Storage Limits</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  We retain personal data only for as long as necessary to fulfill the educational purposes outlined in this policy, unless a longer retention period is required by tax, accounting, or legal obligations.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 space-y-2 text-xs sm:text-sm text-slate-600">
                  <p>• <strong>Active Accounts:</strong> Maintained for the duration of your academic study period until account deletion is requested.</p>
                  <p>• <strong>Learning History:</strong> Preserved to allow students to maintain their course progress across academic terms unless account deletion is requested.</p>
                  <p>• <strong>Billing & Tax Records:</strong> Billing and tax records may be retained for the period required under applicable tax, accounting, and other legal obligations.</p>
                  <p>• <strong>Technical & Session Logs:</strong> Retained temporarily for operational integrity and troubleshooting, then periodically purged or anonymized.</p>
                </div>
              </div>
            </section>

            {/* Section 13 */}
            <section id="privacy-rights" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple">
                  13
                </span>
                <h3 className="text-xl font-bold text-slate-900">Your Privacy Rights & Choices</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>Under the Digital Personal Data Protection Act (DPDP) and applicable laws, you hold clear rights regarding your personal information:</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/50">
                    <div className="font-bold text-slate-900">Right to Access & Summary</div>
                    <p className="mt-1 text-xs text-slate-600">You may request a copy of your personal data and academic records stored with PakkaPass.</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/50">
                    <div className="font-bold text-slate-900">Right to Correction & Update</div>
                    <p className="mt-1 text-xs text-slate-600">You can update your name, school, board, or stream directly in the app profile settings or request correction of inaccuracies.</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/50">
                    <div className="font-bold text-slate-900">Right to Erasure / Deletion</div>
                    <p className="mt-1 text-xs text-slate-600">You can delete your account and request complete erasure of your personal data as outlined in Section 14.</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/50">
                    <div className="font-bold text-slate-900">Right to Withdraw Consent</div>
                    <p className="mt-1 text-xs text-slate-600">Where processing relies on consent, you may withdraw your consent at any time through app permissions or by contacting support.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 14 */}
            <section id="account-deletion" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-red-100 text-red-600 text-sm font-bold">
                  14
                </span>
                <h3 className="text-xl font-bold text-slate-900">Account Deletion Process</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  You have full autonomy to delete your PakkaPass account and all associated personal learning records at any time.
                </p>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <h4 className="font-semibold text-slate-900">How to Initiate Account Deletion:</h4>
                  <div className="mt-2 space-y-2 text-xs sm:text-sm text-slate-600">
                    <p>
                      To request deletion of your account and associated personal data, please send an email from your registered email address to <a href="mailto:support@pakkapass.in" className="text-brand-purple font-semibold underline">support@pakkapass.in</a> with the subject line <em>"Account Deletion Request"</em>, specifying your registered mobile number and student details.
                    </p>
                  </div>
                  <p className="mt-3 text-xs text-muted-foreground">
                    Upon identity verification, your personal profile, lecture watch records, and learning history will be permanently deleted or anonymized within 30 days, except records required to be retained under statutory tax and accounting regulations.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 15 */}
            <section id="cookies-tracking" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple">
                  15
                </span>
                <h3 className="text-xl font-bold text-slate-900">Cookies & Tracking Technologies</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  PakkaPass is committed to student data privacy. We do <strong>not</strong> use third-party advertising cookies, cross-site trackers, or behavioral analytics scripts on our platform.
                </p>
                <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-2">
                  <p>• <strong>No Cross-Site Tracking:</strong> We do not track, profile, or follow students across third-party websites or services.</p>
                  <p>• <strong>Strictly Essential Technical Storage:</strong> The website utilizes only strictly necessary browser tokens and headers where required for basic interface preferences and security.</p>
                </div>
              </div>
            </section>

            {/* Section 16 */}
            <section id="governing-law" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple">
                  16
                </span>
                <h3 className="text-xl font-bold text-slate-900">Governing Law & Legal Jurisdiction</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  This Privacy Policy is governed by and construed in accordance with the laws of the <strong>Republic of India</strong>, including the Digital Personal Data Protection Act, 2023, the Information Technology Act, 2000, and the rules framed thereunder.
                </p>
                <p className="text-xs text-muted-foreground">
                  Any disputes or legal claims arising out of or related to this Privacy Policy shall be subject to the exclusive jurisdiction of the competent courts in India.
                </p>
              </div>
            </section>

            {/* Section 17 */}
            <section id="contact-grievance" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple">
                  17
                </span>
                <h3 className="text-xl font-bold text-slate-900">Contact & Grievance Redressal</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  In accordance with the Information Technology Act, 2000, the Digital Personal Data Protection Act, 2023, and the rules framed thereunder, any privacy queries, concerns, or grievances regarding the processing of personal data may be directed to our Grievance Officer:
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
                      <div className="text-xs text-muted-foreground mt-0.5">(Subject: <em>Attn: Grievance Officer / Privacy Query</em>)</div>
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
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Website</div>
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
