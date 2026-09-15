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
  Smartphone,
  BookOpen,
  Trash2,
  Mail,
  Building,
  Search,
  Printer,
  Share2,
  ChevronRight,
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

const SECTIONS: SectionItem[] = [
  { id: "who-is-responsible-for-your-data", number: "1", title: "Who Is Responsible for Your Data?", icon: Building },
  { id: "information-we-collect", number: "2", title: "Information We Collect", icon: FileText },
  { id: "information-collected-automatically", number: "3", title: "Information Collected Automatically", icon: Eye },
  { id: "otp-and-account-authentication", number: "4", title: "Otp and Account Authentication", icon: Lock },
  { id: "profile-photographs-and-camera-photo-access", number: "5", title: "Profile Photographs and Camera/photo Access", icon: Smartphone },
  { id: "how-we-use-your-information", number: "6", title: "How We Use Your Information", icon: BookOpen },
  { id: "student-and-child-privacy", number: "7", title: "Student and Child Privacy", icon: GraduationCap },
  { id: "information-sharing-and-disclosure", number: "8", title: "Information Sharing and Disclosure", icon: Users },
  { id: "third-party-services", number: "9", title: "Third-party Services", icon: Server },
  { id: "payment-information", number: "10", title: "Payment Information", icon: CreditCard },
  { id: "data-storage-and-security", number: "11", title: "Data Storage and Security", icon: ShieldCheck },
  { id: "personal-data-breach", number: "12", title: "Personal Data Breach", icon: Shield },
  { id: "data-retention", number: "13", title: "Data Retention", icon: FileText },
  { id: "your-privacy-rights", number: "14", title: "Your Privacy Rights", icon: UserCheck },
  { id: "account-deletion", number: "15", title: "Account Deletion", icon: Trash2 },
  { id: "app-permissions", number: "16", title: "App Permissions", icon: Smartphone },
  { id: "child-safety-and-advertising", number: "17", title: "Child Safety and Advertising", icon: ShieldCheck },
  { id: "third-party-links", number: "18", title: "Third-party Links", icon: ExternalLink },
  { id: "user-generated-content", number: "19", title: "User-generated Content", icon: FileText },
  { id: "ai-and-automated-processing", number: "20", title: "Ai and Automated Processing", icon: Sparkles },
  { id: "cross-border-data-transfers", number: "21", title: "Cross-border Data Transfers", icon: Globe },
  { id: "contact-and-grievance-redressal", number: "22", title: "Contact and Grievance Redressal", icon: Mail },
  { id: "changes-to-this-privacy-policy", number: "23", title: "Changes to This Privacy Policy", icon: FileText },
  { id: "governing-law", number: "24", title: "Governing Law", icon: Scale },

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
  const [activeSection, setActiveSection] = useState<string>("who-is-responsible-for-your-data");
  const [searchQuery, setSearchQuery] = useState("");
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
        text: "Read the complete Privacy Policy of PakkaPass (Pratiti Eduskills Private Limited).",
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return SECTIONS;
    const query = searchQuery.toLowerCase();
    return SECTIONS.filter(
      (s) =>
        s.title.toLowerCase().includes(query) ||
        s.number.includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 font-sans antialiased">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-brand-purple to-indigo-600 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md shadow-xs">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-3 group">
              <img src={logo} alt="PakkaPass Logo" className="h-9 w-auto object-contain transition-transform group-hover:scale-105" />
            </Link>
            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500">
              <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              <span className="font-semibold text-slate-800">Privacy Policy</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-xs hover:bg-slate-50 transition-colors cursor-pointer"
              title="Print Policy"
            >
              <Printer className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-xs hover:bg-slate-50 transition-colors cursor-pointer"
              title="Share Link"
            >
              <Share2 className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{copiedLink ? "Copied!" : "Share"}</span>
            </button>
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 rounded-lg bg-brand-purple px-4 py-1.5 text-xs font-semibold text-white shadow-xs hover:bg-brand-purple/90 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="border-b border-slate-200 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-purple/10 px-3 py-1 text-xs font-semibold text-brand-purple">
              <ShieldCheck className="h-4 w-4" />
              <span>DPDP Act, 2023 & DPDP Rules, 2025 Compliant</span>
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              This Privacy Policy explains how <strong>PakkaPass</strong> (operated by <strong>Pratiti Eduskills Private Limited</strong>) collects, uses, stores, discloses, and protects personal information when you use our mobile application, website, and related services.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-500">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-2.5 py-1 font-medium text-slate-700">
                Last Updated: 15th September 2026
              </span>
              <span>•</span>
              <span>Pratiti Eduskills Private Limited</span>
              <span>•</span>
              <span>Official Support: support@pakkapass.in</span>
            </div>
          </div>

          {/* Quick Highlights Cards */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {HIGHLIGHTS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs transition-all hover:border-brand-purple/30 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-purple/10 text-brand-purple transition-transform group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3.5 text-sm font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content Area with Sticky TOC */}
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Sticky Sidebar Navigation */}
          <aside className="lg:col-span-4 xl:col-span-3.5">
            <div className="sticky top-24 space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                    Table of Contents ({SECTIONS.length})
                  </h2>
                </div>

                {/* Search Bar */}
                <div className="mt-3 relative">
                  <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search sections..."
                    className="w-full rounded-lg border border-slate-200 bg-slate-50/50 py-1.5 pl-8 pr-3 text-xs text-slate-800 placeholder-slate-400 focus:border-brand-purple focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-brand-purple"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  )}
                </div>

                {/* Navigation Links */}
                <nav className="mt-3 max-h-[calc(100vh-280px)] space-y-0.5 overflow-y-auto pr-1 text-xs">
                  {filteredSections.map((section) => {
                    const isActive = activeSection === section.id;
                    return (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left font-medium transition-all cursor-pointer ${
                          isActive
                            ? "bg-brand-purple text-white shadow-xs font-semibold"
                            : "text-slate-600 hover:bg-slate-100/80 hover:text-slate-900"
                        }`}
                      >
                        <span
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[10px] font-bold ${
                            isActive
                              ? "bg-white/20 text-white"
                              : "bg-slate-100 text-slate-700"
                          }`}
                        >
                          {section.number}
                        </span>
                        <span className="truncate">{section.title}</span>
                      </button>
                    );
                  })}
                  {filteredSections.length === 0 && (
                    <p className="py-4 text-center text-xs text-slate-400">
                      No matching sections found
                    </p>
                  )}
                </nav>
              </div>

              {/* Quick Contact Card */}
              <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-brand-purple/5 via-white to-indigo-50/30 p-5 shadow-xs">
                <div className="flex items-center gap-2 text-brand-purple font-bold text-xs uppercase tracking-wider">
                  <Mail className="h-4 w-4" />
                  <span>Privacy Contact</span>
                </div>
                <h4 className="mt-2 text-sm font-bold text-slate-900">Have a privacy question?</h4>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Reach out to our Grievance Officer directly for privacy requests or clarifications.
                </p>
                <a
                  href="mailto:support@pakkapass.in"
                  className="mt-3.5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-purple px-3 py-2 text-xs font-semibold text-white shadow-xs hover:bg-brand-purple/90 transition-colors"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>support@pakkapass.in</span>
                </a>
              </div>
            </div>
          </aside>

          {/* Main Legal Content */}
          <div className="lg:col-span-8 xl:col-span-8.5 space-y-8">
            {/* Preamble / Introduction */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="space-y-4 text-sm leading-relaxed text-slate-700">
                <p>
                  <strong>PakkaPass</strong> (&quot;PakkaPass&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is an educational learning platform that provides students with access to educational content, video lectures, notes, practice materials, academic progress tracking, subscriptions, and related services.
                </p>
                <p>
                  This Privacy Policy explains how we collect, use, store, disclose, and protect personal information when you use the PakkaPass mobile application, website, and related services (collectively, the &quot;Services&quot;).
                </p>
                <p>
                  By registering for or using PakkaPass, you acknowledge that you have read and understood this Privacy Policy.
                </p>
                <p>
                  This Privacy Policy is intended to be read together with the Terms of Use and any other applicable terms governing your use of the Services.
                </p>
                <p>
                  PakkaPass processes personal data in accordance with applicable laws of India, including, to the extent applicable and from the date on which the relevant provisions become effective, the Digital Personal Data Protection Act, 2023 (&quot;DPDP Act&quot;) and the Digital Personal Data Protection Rules, 2025 (&quot;DPDP Rules&quot;), as amended or replaced from time to time.
                </p>
                <p>
                  Where consent is required under applicable law, PakkaPass will obtain such consent in the manner prescribed by applicable law.
                </p>
              </div>
            </div>

            {/* Section 1 */}
            <section id="who-is-responsible-for-your-data" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple shrink-0">
                  1
                </span>
                <h3 className="text-xl font-bold text-slate-900">WHO IS RESPONSIBLE FOR YOUR DATA?</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>PakkaPass is operated by:</p>
                <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Legal Entity</span>
                  <span className="text-sm font-semibold text-slate-900 mt-1 block">Pratiti Eduskills Private Limited</span>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Registered Address</span>
                  <span className="text-sm font-semibold text-slate-900 mt-1 block">11-5-439, 2nd Floor, Lakdikapul, Hari Nagar, Red Hills, Hyderabad, Telangana – 500004</span>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Email</span>
                  <span className="text-sm font-semibold text-slate-900 mt-1 block">support@pakkapass.in</span>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Grievance Officer / Data Protection Contact</span>
                  <span className="text-sm font-semibold text-slate-900 mt-1 block">Grievance Officer, Pratiti Eduskills Private Limited</span>
                </div>
                <p>For privacy-related questions, requests, or complaints, please contact us using the details above.</p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="information-we-collect" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple shrink-0">
                  2
                </span>
                <h3 className="text-xl font-bold text-slate-900">INFORMATION WE COLLECT</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>We collect only the information reasonably necessary to provide, maintain, secure, and improve our Services.</p>
                <h4 className="text-base font-bold text-slate-900 pt-2">2.1 Information You Provide</h4>
                <p>When you create or use a PakkaPass account, we may collect:</p>
                <div className="mt-3">
                  <h5 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-purple"></span>
                    Account Information
                  </h5>
                </div>
                <p>Full name</p>
                <p>Email address</p>
                <p>Mobile phone number</p>
                <p>Profile photograph, if you choose to upload one</p>
                <p>Login and authentication information</p>
                <div className="mt-3">
                  <h5 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-purple"></span>
                    Academic Information
                  </h5>
                </div>
                <p>Education board</p>
                <p>Class/grade/standard</p>
                <p>Academic year</p>
                <p>Branch/stream, where applicable</p>
                <p>School, college, or institution name</p>
                <p>State</p>
                <p>District</p>
                <p>City</p>
                <div className="mt-3">
                  <h5 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-purple"></span>
                    Parent or Guardian Information
                  </h5>
                </div>
                <p>Parent/guardian name</p>
                <p>Parent/guardian mobile number</p>
                <p>Parent/guardian email address</p>
                <p>Information required to establish or manage the parent-student relationship</p>
                <div className="mt-3">
                  <h5 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-purple"></span>
                    Learning Information
                  </h5>
                </div>
                <p>Subjects and topics studied</p>
                <p>Chapters and topics completed</p>
                <p>Study duration</p>
                <p>Study sessions</p>
                <p>Study streaks</p>
                <p>Academic progress</p>
                <p>Practice activity</p>
                <p>Video/content interaction</p>
                <p>Content ratings and reviews</p>
                <p>Supplementary or supply-subject subscriptions</p>
                <div className="mt-3">
                  <h5 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-purple"></span>
                    Support Information
                  </h5>
                </div>
                <p>Support requests</p>
                <p>Messages and communications</p>
                <p>Feedback</p>
                <p>Information you provide while resolving an issue</p>
                <h4 className="text-base font-bold text-slate-900 pt-2">2.2 LAWFUL BASIS FOR PROCESSING</h4>
                <p>PakkaPass processes personal data only for lawful purposes and only to the extent reasonably necessary for the purposes described in this Privacy Policy.</p>
                <p>with the consent of the Data Principal;</p>
                <p>where the personal data has been voluntarily provided for a specified purpose and processing is permitted under applicable law;</p>
                <p>for providing, administering and maintaining the Services requested by the user;</p>
                <p>for processing subscriptions, payments and related transactions;</p>
                <p>for complying with applicable legal, regulatory, tax, accounting or governmental requirements;</p>
                <p>for maintaining security, preventing fraud, abuse and unauthorized access;</p>
                <p>for responding to lawful requests, court orders or other legal processes;</p>
                <p>for other purposes expressly permitted under applicable law.</p>
                <p>Where consent is the basis for processing, PakkaPass will seek consent through a clear, informed and affirmative mechanism and will provide an appropriate mechanism for withdrawal of consent.</p>
                <p>Withdrawal of consent will not affect the lawfulness of processing carried out before such withdrawal and may affect the availability of features or Services where the relevant processing is necessary for providing those Services.</p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="information-collected-automatically" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple shrink-0">
                  3
                </span>
                <h3 className="text-xl font-bold text-slate-900">INFORMATION COLLECTED AUTOMATICALLY</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>When you use PakkaPass, certain technical and usage information may be collected automatically.</p>
                <p>This may include:</p>
                <p>Device manufacturer</p>
                <p>Device model</p>
                <p>Operating system and version</p>
                <p>IP address</p>
                <p>Network information</p>
                <p>Application/session information</p>
                <p>Date and time of activity</p>
                <p>Error and diagnostic information</p>
                <p>Login timestamps</p>
                <p>Security and audit logs</p>
                <p>Notification delivery and read status</p>
                <p>We use this information primarily to operate the application, maintain security, diagnose technical problems, and improve reliability.</p>
                <h4 className="text-base font-bold text-slate-900 pt-2">3.1 COOKIES, ANALYTICS AND SIMILAR TECHNOLOGIES</h4>
                <p>PakkaPass and its authorised service providers may use cookies, software development kits (SDKs), local storage, device identifiers and similar technologies, where applicable, to operate the Services, maintain sessions, remember preferences, understand usage, diagnose technical problems, improve performance and maintain security.</p>
                <p>Depending on the technology used, these tools may collect information such as device information, application usage, session information, diagnostic information and interaction with features.</p>
                <p>Where applicable, PakkaPass will provide appropriate controls or disclosures concerning technologies that require user consent under applicable law.</p>
                <p>PakkaPass does not use children's personal data for targeted behavioural advertising.</p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="otp-and-account-authentication" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple shrink-0">
                  4
                </span>
                <h3 className="text-xl font-bold text-slate-900">OTP AND ACCOUNT AUTHENTICATION</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>PakkaPass may use One-Time Passwords (OTPs) for account registration and login.</p>
                <p>When an OTP is requested, we may process your mobile number or email address for the purpose of:</p>
                <p>Sending the OTP</p>
                <p>Verifying your identity</p>
                <p>Completing registration or login</p>
                <p>Preventing unauthorized access</p>
                <p>Detecting suspicious or abusive activity</p>
                <p>OTPs are temporary authentication credentials and should not be shared with anyone.</p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="profile-photographs-and-camera-photo-access" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple shrink-0">
                  5
                </span>
                <h3 className="text-xl font-bold text-slate-900">PROFILE PHOTOGRAPHS AND CAMERA/PHOTO ACCESS</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>PakkaPass may allow you to upload a profile photograph.</p>
                <p>If you choose to use this feature:</p>
                <p>You may select a photograph from your device.</p>
                <p>Where supported, you may take a photograph using your device camera.</p>
                <p>The photograph is used for your PakkaPass profile.</p>
                <p>Camera or photo-library access is requested only when required for the relevant feature.</p>
                <p>We do not require you to provide a profile photograph unless a particular feature expressly requires it.</p>
              </div>
            </section>

            {/* Section 6 */}
            <section id="how-we-use-your-information" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple shrink-0">
                  6
                </span>
                <h3 className="text-xl font-bold text-slate-900">HOW WE USE YOUR INFORMATION</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>We use personal information for legitimate purposes necessary to operate PakkaPass, including:</p>
                <div className="mt-3">
                  <h5 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-purple"></span>
                    Providing Educational Services
                  </h5>
                </div>
                <p>Educational notes</p>
                <p>Video lectures</p>
                <p>Study materials</p>
                <p>Practice questions</p>
                <p>Curriculum-based content</p>
                <p>Other learning resources</p>
                <div className="mt-3">
                  <h5 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-purple"></span>
                    Personalization
                  </h5>
                </div>
                <p>Class</p>
                <p>Board</p>
                <p>Branch/stream</p>
                <p>Subjects</p>
                <p>Learning activity</p>
                <div className="mt-3">
                  <h5 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-purple"></span>
                    Account Management
                  </h5>
                </div>
                <p>Create and maintain your account</p>
                <p>Authenticate your account</p>
                <p>Verify your identity</p>
                <p>Maintain student and parent relationships</p>
                <p>Provide account-related support</p>
                <div className="mt-3">
                  <h5 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-purple"></span>
                    Learning Progress
                  </h5>
                </div>
                <p>Record completed topics</p>
                <p>Track study activity</p>
                <p>Calculate study streaks</p>
                <p>Generate progress summaries</p>
                <p>Provide learning analytics to the student</p>
                <p>Improve the educational experience</p>
                <div className="mt-3">
                  <h5 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-purple"></span>
                    Subscription Management
                  </h5>
                </div>
                <p>Manage subscriptions</p>
                <p>Process purchases</p>
                <p>Apply eligible coupons</p>
                <p>Manage trial periods</p>
                <p>Verify subscription status</p>
                <p>Maintain billing records</p>
                <p>Send subscription-related notifications</p>
                <div className="mt-3">
                  <h5 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-purple"></span>
                    Communications
                  </h5>
                </div>
                <p>OTPs</p>
                <p>Important account notifications</p>
                <p>Subscription notifications</p>
                <p>Service announcements</p>
                <p>Study reminders, where enabled</p>
                <p>Support responses</p>
                <p>Transactional communications</p>
                <div className="mt-3">
                  <h5 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-purple"></span>
                    Security
                  </h5>
                </div>
                <p>Detect unauthorized access</p>
                <p>Prevent fraud and abuse</p>
                <p>Protect accounts</p>
                <p>Investigate security incidents</p>
                <p>Maintain system integrity</p>
                <p>Troubleshoot technical problems</p>
                <div className="mt-3">
                  <h5 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-purple"></span>
                    Legal Compliance
                  </h5>
                </div>
                <p>Comply with applicable laws, regulations, lawful requests, court orders, and government requirements.</p>
                <div className="mt-3">
                  <h5 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-purple"></span>
                    Consent and Privacy Notice
                  </h5>
                </div>
                <p>Where PakkaPass relies on consent to process personal data, the request for consent will be presented in clear and plain language and will identify, as applicable:</p>
                <p>the categories or specific items of personal data proposed to be processed;</p>
                <p>the specific purpose or purposes for which the personal data is proposed to be processed;</p>
                <p>the relevant Services or features enabled by such processing;</p>
                <p>the manner in which consent may be withdrawn;</p>
                <p>the manner in which privacy rights may be exercised;</p>
                <p>the contact details of the person or function responsible for responding to privacy-related requests.</p>
                <p>Consent will not be treated as having been given merely because a user continues to use the Services where applicable law requires an affirmative consent mechanism.</p>
              </div>
            </section>

            {/* Section 7 */}
            <section id="student-and-child-privacy" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple shrink-0">
                  7
                </span>
                <h3 className="text-xl font-bold text-slate-900">STUDENT AND CHILD PRIVACY</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>PakkaPass is an educational platform and may be used by students who are below 18 years of age (“children” under applicable law). We recognise the importance of protecting the privacy, safety and well-being of children.</p>
                <p>Where required under applicable law, PakkaPass will obtain verifiable consent from the parent or lawful guardian before processing the personal data of a child.</p>
                <p>We may use reasonable and legally permitted mechanisms to verify the identity, age and authority of the person providing parental or guardian consent.</p>
                <p>We collect and process children's personal data only to the extent reasonably necessary for providing and administering the educational Services, maintaining the student's account, enabling learning functionality, managing subscriptions where applicable, providing support, maintaining security and complying with applicable law.</p>
                <p>We do not knowingly collect personal data from children beyond what is reasonably necessary for the relevant educational or operational purpose.</p>
                <p>PakkaPass will not knowingly process children's personal data in a manner that is likely to cause a detrimental effect on the well-being of a child.</p>
                <p>PakkaPass will not use children's personal data for targeted behavioural advertising.</p>
                <p>To the extent applicable under law, PakkaPass will not undertake tracking or behavioural monitoring of children except where such processing is expressly permitted or exempted under applicable law and is necessary for the relevant educational or safety-related purpose.</p>
                <p>Subject to applicable law, a parent or lawful guardian may contact PakkaPass to request access to, correction</p>
                <p>PakkaPass may take reasonable steps to verify the identity and authority of the person making such a request before acting upon it.</p>
                <p>Where a student's account is linked to a parent, guardian, school or other authorised educational institution, relevant educational or account information may be made available to such authorised person or institution as necessary for the provision or administration of the Services and as permitted by applicable law.</p>
                <p>PakkaPass does not sell children's personal data.</p>
              </div>
            </section>

            {/* Section 8 */}
            <section id="information-sharing-and-disclosure" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple shrink-0">
                  8
                </span>
                <h3 className="text-xl font-bold text-slate-900">INFORMATION SHARING AND DISCLOSURE</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>We do not sell or rent your personal information.</p>
                <p>We may share information only when reasonably necessary for the purposes described in this Privacy Policy.</p>
                <h4 className="text-base font-bold text-slate-900 pt-2">8.1 Parents or Guardians</h4>
                <p>Where a student account is linked to a parent or guardian account, relevant information may be made available to that parent or guardian, including information concerning:</p>
                <p>Learning progress</p>
                <p>Completed topics</p>
                <p>Study activity</p>
                <p>Subscription status</p>
                <h4 className="text-base font-bold text-slate-900 pt-2">8.2 Educational Institutions and Partners</h4>
                <p>Where access to PakkaPass is provided, sponsored, or managed through a school, college, coaching centre, institute, or other authorized educational partner, certain information may be shared with authorized personnel as necessary to provide or administer the service.</p>
                <p>The information shared may include enrollment information and relevant academic or usage information, depending on the arrangement.</p>
                <h4 className="text-base font-bold text-slate-900 pt-2">8.3 Service Providers</h4>
                <p>We may use third-party service providers to operate our Services.</p>
                <p>Such providers may process information only as necessary to provide their services to us and subject to appropriate contractual or legal safeguards.</p>
                <h4 className="text-base font-bold text-slate-900 pt-2">8.4 Legal Requirements</h4>
                <p>We may disclose information where reasonably necessary to:</p>
                <p>Comply with applicable law</p>
                <p>Respond to lawful government requests</p>
                <p>Comply with court orders</p>
                <p>Protect the rights, property, or safety of PakkaPass, our users, or others</p>
                <p>Investigate fraud, abuse, or security incidents</p>
                <h4 className="text-base font-bold text-slate-900 pt-2">8.5 DATA PROCESSORS</h4>
                <p>PakkaPass may appoint third-party service providers or vendors to process personal data on its behalf.</p>
                <p>Such service providers may include cloud hosting providers, payment processors, communication providers, analytics or monitoring providers, customer-support providers, security providers and other technology service providers.</p>
                <p>Where required by applicable law, PakkaPass will enter into appropriate contractual arrangements with such Data Processors and will require them to process personal data only for authorised purposes and to maintain appropriate security safeguards.</p>
                <p>PakkaPass remains responsible for personal data processing carried out on its behalf to the extent required under applicable law.</p>
              </div>
            </section>

            {/* Section 9 */}
            <section id="third-party-services" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple shrink-0">
                  9
                </span>
                <h3 className="text-xl font-bold text-slate-900">THIRD-PARTY SERVICES</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>PakkaPass may use third-party technology and service providers.</p>
                <p>Depending on the features you use, these may include:</p>
                <div className="mt-3">
                  <h5 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-purple"></span>
                    Cloud Storage
                  </h5>
                </div>
                <p>We may use Amazon Web Services (AWS), including Amazon S3, for storing application files, profile images, educational media, or other information.</p>
                <div className="mt-3">
                  <h5 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-purple"></span>
                    Payment Processing
                  </h5>
                </div>
                <p>Payments may be processed through third-party payment providers such as Razorpay.</p>
                <p>PakkaPass does not intentionally store complete payment-card numbers, CVV numbers, UPI PINs, or other authentication credentials used by payment providers.</p>
                <div className="mt-3">
                  <h5 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-purple"></span>
                    Email Services
                  </h5>
                </div>
                <p>We may use email delivery services or SMTP infrastructure to send OTPs, receipts, account notifications, and other service-related communications.</p>
                <p>Users should note that the actual third-party providers and SDKs used by PakkaPass may change from time to time, and the list should be updated where material to the processing of personal data.</p>
              </div>
            </section>

            {/* Section 10 */}
            <section id="payment-information" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple shrink-0">
                  10
                </span>
                <h3 className="text-xl font-bold text-slate-900">PAYMENT INFORMATION</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>If you purchase a paid subscription, we may collect and retain information such as:</p>
                <p>Transaction ID</p>
                <p>Subscription/plan information</p>
                <p>Purchase amount</p>
                <p>Discount amount</p>
                <p>Coupon code</p>
                <p>Payment status</p>
                <p>Transaction date</p>
                <p>Payment method/type</p>
                <p>PakkaPass does not store your complete credit/debit card number, CVV, or UPI PIN.</p>
                <p>Payment transactions are handled through authorized payment service providers.</p>
              </div>
            </section>

            {/* Section 11 */}
            <section id="data-storage-and-security" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple shrink-0">
                  11
                </span>
                <h3 className="text-xl font-bold text-slate-900">DATA STORAGE AND SECURITY</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>We take reasonable technical and organizational measures to protect personal information against unauthorized access, alteration, disclosure, loss, or misuse.</p>
                <p>HTTPS/TLS encryption for data transmitted between your device and our services</p>
                <p>Access controls</p>
                <p>Authentication mechanisms</p>
                <p>Restricted backend access</p>
                <p>Secure cloud infrastructure</p>
                <p>Monitoring and logging</p>
                <p>Security and operational controls</p>
                <p>However, no method of transmission or electronic storage is completely secure. Therefore, while we take reasonable steps to protect your information, we cannot guarantee absolute security.</p>
              </div>
            </section>

            {/* Section 12 */}
            <section id="personal-data-breach" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple shrink-0">
                  12
                </span>
                <h3 className="text-xl font-bold text-slate-900">PERSONAL DATA BREACH</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>PakkaPass maintains reasonable technical and organisational safeguards designed to protect personal data against unauthorised access, disclosure, alteration, loss, destruction or other forms of unlawful processing.</p>
                <p>In the event of a personal data breach, PakkaPass will assess and respond to the incident in accordance with applicable law and the DPDP Act and DPDP Rules, including any applicable requirements relating to notification of the Data Protection Board of India and affected Data Principals.</p>
                <p>Where notification to affected users is required, PakkaPass will provide information reasonably necessary to enable affected individuals to understand the nature of the breach and take appropriate protective measures.</p>
                <p>PakkaPass will also take reasonable steps to contain, investigate, remediate and prevent recurrence of the breach.</p>
              </div>
            </section>

            {/* Section 13 */}
            <section id="data-retention" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple shrink-0">
                  13
                </span>
                <h3 className="text-xl font-bold text-slate-900">DATA RETENTION</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy, including:</p>
                <p>Maintaining your account</p>
                <p>Providing educational services</p>
                <p>Maintaining subscription and transaction records</p>
                <p>Providing customer support</p>
                <p>Preventing fraud and abuse</p>
                <p>Maintaining security and audit records</p>
                <p>Complying with legal, tax, accounting, or regulatory obligations</p>
                <p>Resolving disputes</p>
                <p>When personal information is no longer required, we may delete, anonymize, or securely dispose of it in accordance with applicable law.</p>
                <p>Certain information may need to be retained for a longer period where required by law.</p>
                <p>PakkaPass will periodically review retained personal data and, where the applicable purpose is no longer being served and continued retention is not required or permitted by law, will delete, anonymise or securely dispose of such personal data in accordance with applicable law.</p>
              </div>
            </section>

            {/* Section 14 */}
            <section id="your-privacy-rights" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple shrink-0">
                  14
                </span>
                <h3 className="text-xl font-bold text-slate-900">YOUR PRIVACY RIGHTS</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>Depending on your location and applicable law, you may have rights relating to your personal information.</p>
                <div className="mt-3">
                  <h5 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-purple"></span>
                    Right to Access
                  </h5>
                </div>
                <p>You may request information about the personal data we hold about you.</p>
                <div className="mt-3">
                  <h5 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-purple"></span>
                    Right to Correction
                  </h5>
                </div>
                <p>You may request correction of inaccurate or incomplete personal information.</p>
                <div className="mt-3">
                  <h5 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-purple"></span>
                    Right to Erasure
                  </h5>
                </div>
                <p>You may request deletion of your personal information, subject to legal or legitimate retention requirements.</p>
                <div className="mt-3">
                  <h5 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-purple"></span>
                    Right to Withdraw Consent
                  </h5>
                </div>
                <p>Where processing is based on consent, you may withdraw your consent. Withdrawal of consent may affect our ability to provide certain features or Services.</p>
                <div className="mt-3">
                  <h5 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-purple"></span>
                    Right to Grievance Redressal
                  </h5>
                </div>
                <p>You may contact us regarding concerns or complaints about the processing of your personal information.</p>
                <div className="mt-3">
                  <h5 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-purple"></span>
                    Parent/Guardian Rights
                  </h5>
                </div>
                <p>Where permitted by applicable law, parents or lawful guardians may exercise relevant rights concerning the personal information of their child.</p>
                <p>To exercise an applicable privacy right, a Data Principal may contact PakkaPass through the contact details specified in Section 23 or through the in-app privacy/support mechanism, where available.</p>
                <p>A request should contain sufficient information to enable PakkaPass to identify the relevant account and understand the nature of the request. PakkaPass may take reasonable steps to verify identity and, where a request relates to a child, the authority of the parent or lawful guardian.</p>
                <p>PakkaPass will process privacy requests within the time period prescribed under applicable law. Where a request cannot be fully complied with, PakkaPass may communicate the applicable legal or operational reason, subject to applicable law.</p>
              </div>
            </section>

            {/* Section 15 */}
            <section id="account-deletion" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple shrink-0">
                  15
                </span>
                <h3 className="text-xl font-bold text-slate-900">ACCOUNT DELETION</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>You may request deletion of your PakkaPass account and associated personal information.</p>
                <p>The in-app support feature; or</p>
                <p>The official privacy/support email address provided in this Privacy Policy.</p>
                <p>We may need to verify the identity and authority of the person making the request before processing it.</p>
                <p>Deletion may not immediately remove information that we are legally required or legitimately permitted to retain, such as certain transaction, tax, security, or audit records.</p>
              </div>
            </section>

            {/* Section 16 */}
            <section id="app-permissions" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple shrink-0">
                  16
                </span>
                <h3 className="text-xl font-bold text-slate-900">APP PERMISSIONS</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <div className="mt-3">
                  <h5 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-purple"></span>
                    Photos / Media
                  </h5>
                </div>
                <p>Used when you choose to upload a profile photograph or access/download supported study materials.</p>
                <div className="mt-3">
                  <h5 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-purple"></span>
                    Camera
                  </h5>
                </div>
                <p>Used when you choose to take a profile photograph.</p>
                <div className="mt-3">
                  <h5 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-purple"></span>
                    Internet / Network Access
                  </h5>
                </div>
                <p>Required to communicate with our servers, load educational content, stream videos, process account information, and synchronize learning activity.</p>
                <div className="mt-3">
                  <h5 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-purple"></span>
                    Notifications
                  </h5>
                </div>
                <p>Used to send permitted service notifications, including study reminders, subscription notifications, important account information, and support updates.</p>
                <p>You can manage certain permissions through your device settings. Restricting a permission may prevent the associated feature from working.</p>
              </div>
            </section>

            {/* Section 17 */}
            <section id="child-safety-and-advertising" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple shrink-0">
                  17
                </span>
                <h3 className="text-xl font-bold text-slate-900">CHILD SAFETY AND ADVERTISING</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>PakkaPass is designed as an educational service.</p>
                <p>We do not sell personal information.</p>
                <p>We do not use children's personal information for targeted behavioural advertising.</p>
                <p>We do not knowingly collect more children's personal information than reasonably necessary for providing the Services and complying with applicable legal requirements.</p>
              </div>
            </section>

            {/* Section 18 */}
            <section id="third-party-links" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple shrink-0">
                  18
                </span>
                <h3 className="text-xl font-bold text-slate-900">THIRD-PARTY LINKS</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>PakkaPass may contain links to third-party websites, educational resources, payment services, or other external services.</p>
                <p>When you access a third-party service, that service may collect information under its own privacy policy.</p>
                <p>PakkaPass is not responsible for the privacy practices, security, or content of third-party services that we do not control.</p>
                <p>We encourage you to review the privacy policy of any third-party service before providing personal information.</p>
              </div>
            </section>

            {/* Section 19 */}
            <section id="user-generated-content" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple shrink-0">
                  19
                </span>
                <h3 className="text-xl font-bold text-slate-900">USER-GENERATED CONTENT</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>Where PakkaPass permits users to upload, submit or otherwise provide photographs, assignments, answers, comments, feedback, documents or other content, such content may be processed to provide the relevant feature or Service.</p>
                <p>Users should not upload personal information relating to another individual unless they are authorised to do so.</p>
                <p>PakkaPass may retain such content for as long as reasonably necessary for the purpose for which it was submitted, for account administration, dispute resolution, security, legal compliance or other purposes permitted under applicable law.</p>
                <p>Where user-generated content is no longer required and there is no lawful basis for continued retention, PakkaPass may delete or anonymise such content in accordance with this Privacy Policy.</p>
              </div>
            </section>

            {/* Section 20 */}
            <section id="ai-and-automated-processing" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple shrink-0">
                  20
                </span>
                <h3 className="text-xl font-bold text-slate-900">AI AND AUTOMATED PROCESSING</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>Where PakkaPass uses artificial intelligence, machine-learning systems or automated technologies, such technologies may process information relating to a user's learning activity for purposes such as providing educational assistance, generating recommendations, improving content or supporting the Services.</p>
                <p>PakkaPass will use such technologies in accordance with applicable law and will take reasonable measures to ensure that personal data is processed only for authorised purposes.</p>
                <p>Where applicable law provides specific rights or safeguards concerning automated processing, PakkaPass will provide such rights or safeguards in accordance with the applicable requirements.</p>
              </div>
            </section>

            {/* Section 21 */}
            <section id="cross-border-data-transfers" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple shrink-0">
                  21
                </span>
                <h3 className="text-xl font-bold text-slate-900">CROSS-BORDER DATA TRANSFERS</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>PakkaPass and its authorised service providers may process or store personal data in India or in other jurisdictions, depending on the infrastructure and services used.</p>
                <p>Where personal data is transferred, accessed or processed outside India, PakkaPass will comply with applicable requirements concerning such transfer, access or processing, including any restrictions or safeguards prescribed under applicable Indian law.</p>
                <p>PakkaPass will take reasonable steps to ensure that third-party service providers handling personal data maintain appropriate contractual, technical and organisational safeguards.</p>
              </div>
            </section>

            {/* Section 22 */}
            <section id="contact-and-grievance-redressal" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple shrink-0">
                  22
                </span>
                <h3 className="text-xl font-bold text-slate-900">CONTACT AND GRIEVANCE REDRESSAL</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>If you have questions, requests, or complaints concerning this Privacy Policy or your personal information, please contact:</p>
                <p>PakkaPass</p>
                <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Legal Entity</span>
                  <span className="text-sm font-semibold text-slate-900 mt-1 block">Pratiti Eduskills Private Limited</span>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Grievance Officer / Privacy Contact</span>
                  <span className="text-sm font-semibold text-slate-900 mt-1 block">Grievance Officer, Pratiti Eduskills Private Limited</span>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Email</span>
                  <span className="text-sm font-semibold text-slate-900 mt-1 block">support@pakkapass.in</span>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Registered Address</span>
                  <span className="text-sm font-semibold text-slate-900 mt-1 block">11-5-439, 2nd Floor, Lakdikapul, Hari Nagar, Red Hills, Hyderabad, Telangana – 500004</span>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Support</span>
                  <span className="text-sm font-semibold text-slate-900 mt-1 block">In-App Help & Support</span>
                </div>
                <p>Where required, communications concerning the exercise of privacy rights will contain or refer to the appropriate contact details for further communication.</p>
                <p>We will review and respond to privacy-related requests in accordance with applicable law.</p>
              </div>
            </section>

            {/* Section 23 */}
            <section id="changes-to-this-privacy-policy" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple shrink-0">
                  23
                </span>
                <h3 className="text-xl font-bold text-slate-900">CHANGES TO THIS PRIVACY POLICY</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>We may update this Privacy Policy from time to time to reflect:</p>
                <p>Changes to our Services</p>
                <p>Changes to our data practices</p>
                <p>Changes to applicable laws</p>
                <p>Changes to our third-party service providers</p>
                <p>Security or operational requirements</p>
                <p>When we make material changes, we may notify users through the application, website, email, or other appropriate means.</p>
                <p>The &quot;Last Updated&quot; date at the beginning of this Privacy Policy will be updated when changes are made.</p>
              </div>
            </section>

            {/* Section 24 */}
            <section id="governing-law" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-purple/10 text-sm font-bold text-brand-purple shrink-0">
                  24
                </span>
                <h3 className="text-xl font-bold text-slate-900">GOVERNING LAW</h3>
              </div>
              <div className="mt-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>This Privacy Policy shall be governed by and construed in accordance with the laws of India, including applicable data protection and privacy laws and regulations.</p>
                <p>Nothing in this Privacy Policy is intended to limit, exclude or waive any mandatory rights or protections available to a Data Principal under applicable law.</p>
              </div>
            </section>

            {/* Footer Notice */}
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-900 to-slate-800 p-8 text-white shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <h3 className="text-lg font-bold">Have Questions About Your Privacy?</h3>
                  <p className="mt-1 text-xs text-slate-300 max-w-xl">
                    For any questions, data access requests, or grievance redressal under the DPDP Act 2023, reach out to our dedicated Grievance Officer.
                  </p>
                </div>
                <div className="shrink-0 flex items-center gap-3">
                  <a
                    href="mailto:support@pakkapass.in"
                    className="inline-flex items-center gap-2 rounded-xl bg-brand-purple px-4 py-2.5 text-xs font-semibold text-white shadow-md hover:bg-brand-purple/90 transition-all"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Contact Grievance Officer</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
