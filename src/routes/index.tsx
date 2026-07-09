import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  PlayCircle, BookOpen, FileText, Layers, ClipboardCheck, LineChart,
  Sparkles, RefreshCw, ShieldCheck, Smartphone, Check, Star, Menu, X,
  Download, ArrowRight, Clock, Target, Trophy, Globe, Brain, GraduationCap,
  Facebook, Instagram, Twitter, Youtube, Mail, ChevronDown,
} from "lucide-react";
import logo from "@/assets/pakkapass-logo.png.asset.json";
import heroImg from "@/assets/hero-students.jpg";
import appScreen1 from "@/assets/app-screen-1.png";
import appScreen2 from "@/assets/app-screen-2.png";
import appScreen3 from "@/assets/app-screen-3.png";

export const Route = createFileRoute("/")({
  component: Landing,
});

const NAV = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Courses", href: "#courses" },
  { label: "How it works", href: "#how" },
  { label: "FAQs", href: "#faq" },
];

const FEATURES = [
  { icon: PlayCircle, title: "Expert Video Lectures", desc: "Concept-clear lessons from top educators, structured chapter by chapter." },
  { icon: BookOpen, title: "Digital Notes & E-books", desc: "Downloadable notes designed by exam toppers and subject experts." },
  { icon: FileText, title: "Previous Year Papers", desc: "Solve last 10+ years of board and entrance exam question papers." },
  { icon: Layers, title: "Chapter-wise Learning", desc: "Learn in the exact order of your syllabus with clear milestones." },
  { icon: ClipboardCheck, title: "Mock Tests & Practice", desc: "Timed mocks and topic-wise quizzes that mirror the real exam." },
  { icon: LineChart, title: "Progress Tracking", desc: "Real-time analytics on accuracy, speed and topic mastery." },
  { icon: Sparkles, title: "Personalized Learning", desc: "Smart recommendations based on your strengths and gaps." },
  { icon: RefreshCw, title: "Regular Content Updates", desc: "Fresh questions, new lectures and pattern updates every month." },
  { icon: ShieldCheck, title: "Secure Premium Content", desc: "DRM-protected videos and notes — your account, your device." },
  { icon: Smartphone, title: "Learn Anytime, Anywhere", desc: "Fully offline-capable — study on the bus, in class or at home." },
];

const WHY = [
  "Learn at your own pace",
  "High-quality curated content",
  "Easy-to-understand explanations",
  "Structured study plans",
  "Board exam focused preparation",
  "Performance analytics",
  "Affordable learning solution",
  "Designed for today's digital learners",
];

const STEPS = [
  { n: "01", title: "Download the App", desc: "Install PakkaPass from the Play Store or App Store — free to start." },
  { n: "02", title: "Create an Account", desc: "Sign up in seconds with your mobile number or email." },
  { n: "03", title: "Choose Grade & Subjects", desc: "Pick your class and the subjects you want to master." },
  { n: "04", title: "Learn & Track Progress", desc: "Watch, practice, test — and see yourself improve every week." },
];

const COURSES = [
  { grade: "Class 10", tag: "Board Exam Ready", subjects: "Math • Science • Social Science • English", accent: "from-blue-500 to-indigo-500" },
  { grade: "Class 11", tag: "Foundation Year", subjects: "Physics • Chemistry • Math • Biology", accent: "from-indigo-500 to-purple-500" },
  { grade: "Class 12", tag: "Board + Entrance", subjects: "PCM / PCB • Commerce • Humanities", accent: "from-purple-500 to-fuchsia-500" },
];

const BENEFITS = [
  { icon: Brain, title: "Better concept clarity" },
  { icon: Target, title: "Improved exam preparation" },
  { icon: Clock, title: "Flexible learning schedule" },
  { icon: Trophy, title: "Increased confidence" },
  { icon: GraduationCap, title: "Better academic results" },
  { icon: Globe, title: "Access from anywhere" },
];

const TESTIMONIALS = [
  { name: "Aarav Sharma", role: "Class 12 • CBSE", quote: "PakkaPass made physics feel simple. The video lectures and PYQs together got me 94% in boards." },
  { name: "Priya Nair", role: "Parent of Class 10 student", quote: "As a parent, I love the progress reports. I can see exactly where my child needs help." },
  { name: "Rohan Verma", role: "Class 11 • JEE aspirant", quote: "Mock tests here match the real pattern. My accuracy improved by 22% in just two months." },
];

const FAQS = [
  { q: "What is PakkaPass?", a: "PakkaPass is an exam-centric learning app for students of Class 10, 11 and 12. It combines expert video lectures, structured notes, previous year papers, mock tests and progress tracking in a single, easy-to-use platform." },
  { q: "Which classes are supported?", a: "PakkaPass currently supports Class 10, Class 11 and Class 12 across CBSE, ICSE and major state boards, along with popular entrance exams." },
  { q: "Can I study on mobile?", a: "Yes — PakkaPass is built mobile-first. You can watch lectures, download notes and take tests from any Android or iOS device." },
  { q: "Are study materials updated regularly?", a: "Absolutely. Our academic team updates content, questions and mock tests to match the latest syllabus and exam patterns." },
  { q: "Is the content available anytime?", a: "Yes. Once subscribed, you get 24×7 access, including offline downloads for lectures and notes." },
  { q: "How do I subscribe?", a: "Download the app, choose your grade and pick a plan that suits you. Multiple affordable options are available." },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Features />
        <WhyChoose />
        <HowItWorks />
        <Courses />
        <Benefits />
        <Screenshots />
        <Testimonials />
        <FAQ />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo.url} alt="PakkaPass" className="h-9 w-auto" />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a href="#download" className="inline-flex items-center gap-2 rounded-full bg-gradient-cta px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elev transition-transform hover:scale-[1.02]">
            <Download className="h-4 w-4" /> Download App
          </a>
        </div>
        <button onClick={() => setOpen((v) => !v)} className="md:hidden" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto max-w-7xl space-y-2 px-4 py-4">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-muted">
                {n.label}
              </a>
            ))}
            <a href="#download" onClick={() => setOpen(false)} className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-cta px-5 py-3 text-sm font-semibold text-primary-foreground">
              <Download className="h-4 w-4" /> Download App
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-hero">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-2 lg:items-center lg:gap-8">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-semibold text-brand-purple shadow-sm backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> An exam-centric App for Class 10, 11 & 12
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            Your complete <span className="text-gradient-brand">learning companion</span> for board & entrance exams.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Expert video lectures, digital notes, previous year papers, mock tests and real-time progress tracking — everything you need to study smarter, all in one app.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#download" className="inline-flex items-center gap-2 rounded-full bg-gradient-cta px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elev transition-transform hover:scale-[1.02]">
              <Download className="h-4 w-4" /> Download App
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-sm font-semibold text-foreground shadow-card transition-colors hover:bg-muted">
              Explore Features <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[0,1,2,3].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-gradient-brand" />
                ))}
              </div>
              <span><strong className="text-foreground">50,000+</strong> students learning</span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-1"><strong className="text-foreground">4.8/5</strong> average rating</span>
            </div>
          </div>
        </div>
        <div className="relative animate-fade-up">
          <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-brand-soft blur-2xl" />
          <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-glow">
            <img src={heroImg} alt="Students learning with PakkaPass" width={1280} height={1024} className="h-auto w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const stats = [
    { k: "50K+", v: "Active students" },
    { k: "1,200+", v: "Video lectures" },
    { k: "25K+", v: "Practice questions" },
    { k: "4.8★", v: "App store rating" },
  ];
  return (
    <section className="border-y border-border bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 md:grid-cols-4 md:px-6">
        {stats.map((s) => (
          <div key={s.v} className="text-center">
            <div className="text-2xl font-extrabold text-gradient-brand md:text-3xl">{s.k}</div>
            <div className="mt-1 text-xs text-muted-foreground md:text-sm">{s.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, desc }: { eyebrow: string; title: React.ReactNode; desc?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="inline-block rounded-full bg-gradient-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-purple">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">{title}</h2>
      {desc && <p className="mt-4 text-base text-muted-foreground md:text-lg">{desc}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="About PakkaPass"
          title={<>Learning, <span className="text-gradient-brand">reimagined</span> for exam success.</>}
          desc="PakkaPass is an educational platform built to simplify learning through structured content, expert guidance and interactive resources. We help Class 10, 11 and 12 students prepare confidently for board examinations and competitive entrance exams through high-quality, exam-focused digital learning."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            { icon: Target, title: "Exam-Centric", desc: "Every lecture, note and test is designed around the exact syllabus and question patterns that matter." },
            { icon: GraduationCap, title: "Expert-Led", desc: "Content built by top educators and reviewed by exam experts with decades of classroom experience." },
            { icon: LineChart, title: "Outcome-Driven", desc: "We measure what actually helps — accuracy, retention and confidence — not just watch time." },
          ].map((c) => (
            <div key={c.title} className="glass-card rounded-2xl p-7 shadow-card transition-transform hover:-translate-y-1">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-white shadow-elev">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Features"
          title={<>Everything you need to <span className="text-gradient-brand">ace your exams</span></>}
          desc="A single platform that replaces coaching notes, YouTube playlists and endless PDFs — with structure, quality and analytics."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {FEATURES.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-elev">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand-soft text-brand-purple transition-colors group-hover:bg-gradient-brand group-hover:text-white">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold">{f.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-block rounded-full bg-gradient-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-purple">
            Why PakkaPass
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            Built for students who want to <span className="text-gradient-brand">study smart</span>, not just study hard.
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            We obsess over quality, clarity and outcomes so you can focus on one thing — learning.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {WHY.map((w) => (
              <li key={w} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-card">
                <div className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-brand text-white">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span className="text-sm font-medium">{w}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-brand-soft blur-2xl" />
          <div className="grid grid-cols-2 gap-4">
            <div className="mt-8 space-y-4">
              <StatCard label="Concept mastery" value="+38%" tone="blue" />
              <StatCard label="Mock accuracy" value="+22%" tone="purple" />
            </div>
            <div className="space-y-4">
              <StatCard label="Avg study streak" value="41 days" tone="purple" />
              <StatCard label="Student satisfaction" value="96%" tone="blue" />
              <StatCard label="Boards score lift" value="+14 marks" tone="green" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ label, value, tone }: { label: string; value: string; tone: "blue" | "purple" | "green" }) {
  const bg = tone === "blue" ? "from-blue-500/10 to-blue-500/0" : tone === "purple" ? "from-purple-500/10 to-purple-500/0" : "from-green-500/10 to-green-500/0";
  const text = tone === "green" ? "text-brand-green" : "text-gradient-brand";
  return (
    <div className={`rounded-2xl border border-border bg-gradient-to-br ${bg} p-5 shadow-card`}>
      <div className={`text-3xl font-extrabold ${text}`}>{value}</div>
      <div className="mt-1 text-xs font-medium text-muted-foreground">{label}</div>
    </div>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="How it works"
          title={<>Start learning in <span className="text-gradient-brand">4 simple steps</span></>}
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <div key={s.n} className="relative rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="text-4xl font-extrabold text-gradient-brand">{s.n}</div>
              <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              {i < STEPS.length - 1 && (
                <ArrowRight className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-brand-purple/40 lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Courses() {
  return (
    <section id="courses" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Courses"
          title={<>Comprehensive courses for <span className="text-gradient-brand">every grade</span></>}
          desc="Every course includes video classes, notes, chapter-wise practice, mock tests and previous year question papers."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {COURSES.map((c) => (
            <div key={c.grade} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-elev">
              <div className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${c.accent} opacity-20 blur-2xl transition-opacity group-hover:opacity-40`} />
              <div className="inline-flex items-center rounded-full bg-gradient-brand-soft px-3 py-1 text-xs font-semibold text-brand-purple">
                {c.tag}
              </div>
              <h3 className="mt-4 text-3xl font-extrabold">{c.grade}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.subjects}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {["Video classes", "Structured notes", "Practice tests", "Previous year papers"].map((x) => (
                  <li key={x} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-brand-green" /> {x}
                  </li>
                ))}
              </ul>
              <a href="#download" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-purple hover:gap-3 transition-all">
                Start learning <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Student Benefits"
          title={<>Real results that <span className="text-gradient-brand">matter</span></>}
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <div key={b.title} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-transform hover:-translate-y-1">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-brand text-white shadow-elev">
                <b.icon className="h-6 w-6" />
              </div>
              <div className="text-base font-semibold">{b.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Screenshots() {
  const screens = [appScreen1, appScreen2, appScreen3];
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-hero" />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="App Preview"
          title={<>A beautifully <span className="text-gradient-brand">simple app</span> for serious learners</>}
          desc="Designed mobile-first so you can learn on the go — clean, fast and distraction-free."
        />
        <div className="mt-14 grid items-end gap-8 md:grid-cols-3">
          {screens.map((s, i) => (
            <div
              key={i}
              className={`mx-auto w-full max-w-[280px] ${i === 1 ? "md:-translate-y-6" : ""}`}
            >
              <div className="overflow-hidden rounded-[2.2rem] border border-border bg-white shadow-glow">
                <img src={s} alt={`PakkaPass app screen ${i + 1}`} loading="lazy" width={720} height={1440} className="h-auto w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Loved by students & parents"
          title={<>Real stories from <span className="text-gradient-brand">real learners</span></>}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-card">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-brand text-sm font-bold text-white">
                  {t.name.split(" ").map((x) => x[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <SectionHeader
          eyebrow="FAQs"
          title={<>Frequently asked <span className="text-gradient-brand">questions</span></>}
        />
        <div className="mt-12 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-semibold">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-brand-purple transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DownloadCTA() {
  return (
    <section id="download" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-cta p-10 text-primary-foreground shadow-glow md:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" /> Start free — subscribe when you're ready
              </span>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">
                Download PakkaPass and start scoring higher.
              </h2>
              <p className="mt-4 max-w-lg text-white/85 md:text-lg">
                Join thousands of Class 10, 11 and 12 students already learning smarter with PakkaPass.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <StoreBadge store="play" />
                <StoreBadge store="apple" />
              </div>
            </div>
            <div className="relative hidden justify-center lg:flex">
              <div className="animate-float">
                <img src={appScreen1} alt="PakkaPass app" loading="lazy" width={720} height={1440} className="mx-auto w-64 rounded-[2rem] border-4 border-white/40 shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StoreBadge({ store }: { store: "play" | "apple" }) {
  const label = store === "play" ? "Google Play" : "App Store";
  const sub = store === "play" ? "GET IT ON" : "Download on the";
  return (
    <a
      href="#"
      className="inline-flex items-center gap-3 rounded-2xl bg-black/85 px-5 py-3 text-left text-white transition-transform hover:scale-[1.03]"
    >
      {store === "play" ? (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor"><path d="M3.6 2.3c-.4.2-.6.6-.6 1.1v17.2c0 .5.2.9.6 1.1l10-9.7-10-9.7zM14.6 12l2.9-2.8-11-6.3c-.2-.1-.4-.1-.6 0L14.6 12zm0 0l-8.7 8.7c.2.1.4.1.6 0l11-6.3-2.9-2.4zM20.8 10.6l-2.4-1.4-3 2.8 3 2.4 2.4-1.4c.8-.5.8-1.9 0-2.4z"/></svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor"><path d="M16.5 12.7c0-2.5 2-3.7 2.1-3.8-1.2-1.7-3-2-3.7-2-1.6-.2-3 .9-3.8.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.2 2.5-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.3-.8 1.6 0 2 .8 3.3.8 1.4 0 2.2-1.2 3.1-2.5.7-1 1.2-2.1 1.5-3.2-2.4-.9-2.8-4-2.8-3.8zM14 4.9c.7-.9 1.2-2.1 1.1-3.4-1 .1-2.3.7-3 1.6-.7.8-1.2 2-1.1 3.2 1.1.1 2.3-.6 3-1.4z"/></svg>
      )}
      <div>
        <div className="text-[10px] uppercase tracking-wider opacity-80">{sub}</div>
        <div className="text-sm font-semibold leading-none">{label}</div>
      </div>
    </a>
  );
}

function Footer() {
  const cols = [
    { title: "Product", links: ["About", "Features", "Courses", "FAQs"] },
    { title: "Company", links: ["Contact", "Blog", "Announcements", "Careers"] },
    { title: "Legal", links: ["Privacy Policy", "Terms & Conditions", "Refund Policy", "Cookie Policy"] },
  ];
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <img src={logo.url} alt="PakkaPass" className="h-10 w-auto" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              PakkaPass is an exam-centric learning app for students of Class 10, 11 and 12 — helping India's next generation learn better, one lesson at a time.
            </p>
            <div className="mt-6 flex gap-2">
              {[Facebook, Instagram, Twitter, Youtube, Mail].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social link" className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-gradient-brand hover:text-white hover:border-transparent">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-bold">{c.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} PakkaPass™ — an exam-centric App. All rights reserved.</p>
          <p>Made with care for Class 10, 11 & 12 students.</p>
        </div>
      </div>
    </footer>
  );
}
