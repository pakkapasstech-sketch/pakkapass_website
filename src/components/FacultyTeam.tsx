import {
  GraduationCap,
  Award,
  FlaskConical,
  Atom,
  Calculator,
  Dna,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export interface FacultyMember {
  id: string;
  name: string;
  degrees: string;
  role: string;
  subject: string;
  experience: string;
  bio: string;
  highlights: string[];
  avatarGradient: string;
  badgeStyle: string;
  dotColor: string;
  icon: typeof FlaskConical;
}

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: "parameswar-rao",
    name: "Mr. Parameswar Rao",
    degrees: "M.Sc., M.Phil.",
    role: "Retired Chemistry Faculty & Academic Mentor",
    subject: "Chemistry",
    experience: "35+ Years Experience • Intermediate Boards",
    bio: "Distinguished retired Chemistry faculty member with 35+ years of teaching experience in Intermediate education. He has extensive expertise in strengthening students' conceptual understanding and problem-solving abilities in Chemistry, serving as a pillar of academic mentorship.",
    highlights: ["35+ Yrs Exp", "Intermediate Boards", "Conceptual Chemistry", "Academic Mentor"],
    avatarGradient: "from-purple-600 to-indigo-700",
    badgeStyle: "bg-purple-50 text-purple-700 border-purple-200",
    dotColor: "bg-purple-500",
    icon: FlaskConical,
  },
  {
    id: "sudhakar-reddy",
    name: "Mr. M. Sudhakar Reddy",
    degrees: "M.Com., PhD.",
    role: "Retired Government Degree College Principal",
    subject: "Leadership & Administration",
    experience: "Institutional Leadership & NCC Officer",
    bio: "Retired Government Degree College Principal with deep expertise in academic administration and institutional leadership. He possesses outstanding capabilities in curriculum planning, faculty coordination, and student development reinforced by his distinguished NCC background.",
    highlights: ["College Principal (Retd.)", "Institutional Leadership", "Curriculum Planning", "NCC Background"],
    avatarGradient: "from-slate-700 to-indigo-900",
    badgeStyle: "bg-slate-100 text-slate-700 border-slate-200",
    dotColor: "bg-slate-600",
    icon: ShieldCheck,
  },
  {
    id: "jayaram-naidu",
    name: "Mr. Jayaram Naidu",
    degrees: "M.Sc.",
    role: "Retired Chemistry Faculty",
    subject: "Chemistry",
    experience: "40+ Years Experience • Intermediate Boards",
    bio: "Highly experienced retired Chemistry faculty member with 40+ years of teaching experience in Intermediate education. His extensive academic career has enabled him to develop deep expertise in core Chemistry principles, problem-solving, and examination-oriented pedagogy.",
    highlights: ["40+ Yrs Exp", "Intermediate Boards", "Exam Specialist", "Core Chemistry"],
    avatarGradient: "from-indigo-600 to-purple-800",
    badgeStyle: "bg-purple-50 text-purple-700 border-purple-200",
    dotColor: "bg-purple-500",
    icon: FlaskConical,
  },
  {
    id: "divya-deepthimahanthi",
    name: "Dr. Divya Deepthimahanthi",
    degrees: "M.Sc., B.Ed., SET, PhD.",
    role: "Zoology Faculty",
    subject: "Zoology",
    experience: "14 Years Experience • PhD & SET",
    bio: "Experienced Zoology faculty member with 14 years of teaching experience across various states. She has strong expertise in developing students' conceptual clarity in Zoology through structured, student-focused teaching methods and competitive exam guidance.",
    highlights: ["PhD & SET Qualified", "14 Yrs Exp", "Multi-State Teaching", "Board & Competitive Prep"],
    avatarGradient: "from-teal-600 to-emerald-800",
    badgeStyle: "bg-emerald-50 text-emerald-700 border-emerald-200",
    dotColor: "bg-emerald-500",
    icon: Dna,
  },
  {
    id: "nagendra-babu",
    name: "Mr. Nagendra Babu K",
    degrees: "M.Sc.",
    role: "Zoology Faculty",
    subject: "Zoology",
    experience: "14 Years Experience • Intermediate Colleges",
    bio: "He holds an M.Sc. in Biotechnology from S.V. University, Tirupati, and is an experienced Zoology Faculty. He has 14 years of teaching experience across various Intermediate colleges. He has also served as a Principal at a corporate Junior College, bringing strong academic and leadership experience.",
    highlights: ["S.V. University", "14 Yrs Exp", "Ex-Principal", "Intermediate Colleges"],
    avatarGradient: "from-teal-700 to-emerald-900",
    badgeStyle: "bg-emerald-50 text-emerald-700 border-emerald-200",
    dotColor: "bg-emerald-500",
    icon: Dna,
  },
  {
    id: "anitha",
    name: "Ms. Anitha",
    degrees: "M.Sc., B.Ed., TS-TET, C-TET",
    role: "Botany Faculty",
    subject: "Botany",
    experience: "10+ Years Experience • Osmania University",
    bio: "Experienced Botany faculty member with 10+ years of teaching experience and an academic background from Osmania University. She specializes in simplifying complex plant sciences and nurturing strong conceptual understanding for board and entrance exams.",
    highlights: ["Osmania University", "10+ Yrs Exp", "TS-TET & C-TET", "Concept Simplification"],
    avatarGradient: "from-emerald-600 to-teal-700",
    badgeStyle: "bg-emerald-50 text-emerald-700 border-emerald-200",
    dotColor: "bg-emerald-500",
    icon: Dna,
  },
  {
    id: "sai-punith",
    name: "Mr. M. Sai Punith",
    degrees: "B. Tech (ESE), IIT - GOA",
    role: "Mathematics & Engineering Sciences",
    subject: "Mathematics",
    experience: "IIT Goa Graduate • Analytical Reasoning",
    bio: "Expert in Engineering Sciences from IIT Goa, focusing on mathematical modelling, analytical reasoning, and high-speed problem-solving techniques. Passionate about helping students crack challenging mathematical concepts with ease.",
    highlights: ["IIT Goa Alum", "Mathematical Modelling", "Problem Solving", "Analytical Reasoning"],
    avatarGradient: "from-blue-600 to-indigo-700",
    badgeStyle: "bg-blue-50 text-blue-700 border-blue-200",
    dotColor: "bg-blue-500",
    icon: Calculator,
  },
  {
    id: "bhavana-pullooru",
    name: "Ms. Bhavana Pullooru",
    degrees: "PhD.",
    role: "Mathematics Faculty",
    subject: "Mathematics",
    experience: "8+ Years Experience • PhD in Mathematics",
    bio: "Experienced Mathematics faculty member with 8+ years of teaching experience. She specializes in building strong conceptual foundations and problem-solving skills with an encouraging, student-friendly, and examination-focused approach.",
    highlights: ["PhD in Mathematics", "8+ Yrs Exp", "Problem Solving", "Exam Strategy"],
    avatarGradient: "from-indigo-600 to-violet-700",
    badgeStyle: "bg-indigo-50 text-indigo-700 border-indigo-200",
    dotColor: "bg-indigo-500",
    icon: Calculator,
  },
  {
    id: "girija",
    name: "Ms. Girija",
    degrees: "M.Sc.",
    role: "Physics Faculty",
    subject: "Physics",
    experience: "18+ Years Experience • Telugu States",
    bio: "Experienced Physics faculty member with 18+ years of teaching experience across premier educational institutions in the Telugu States. She possesses extensive expertise in simplifying difficult Physics concepts and analytical problem-solving.",
    highlights: ["18+ Yrs Exp", "Telugu States Colleges", "Concept Simplification", "Exam Preparation"],
    avatarGradient: "from-blue-700 to-cyan-800",
    badgeStyle: "bg-blue-50 text-blue-700 border-blue-200",
    dotColor: "bg-blue-500",
    icon: Atom,
  },
  {
    id: "pushpalatha",
    name: "Ms. PushpaLatha",
    degrees: "M.Sc.",
    role: "Chemistry Faculty",
    subject: "Chemistry",
    experience: "19 Years Experience • Intermediate Colleges",
    bio: "Experienced Chemistry faculty member with 19 years of extensive teaching in Intermediate junior colleges. Her deep subject knowledge and structured approach help students master complex chemical equations and reactions with complete clarity.",
    highlights: ["19 Yrs Exp", "Intermediate Colleges", "Concept Mastery", "Academic Mentor"],
    avatarGradient: "from-purple-700 to-indigo-800",
    badgeStyle: "bg-purple-50 text-purple-700 border-purple-200",
    dotColor: "bg-purple-500",
    icon: FlaskConical,
  },
  {
    id: "chandra-sekhar",
    name: "Mr. Chandra Sekhar",
    degrees: "M.Sc., B.Ed.",
    role: "Physics Faculty",
    subject: "Physics",
    experience: "14+ Years Experience • Vikrama Simhapuri Univ.",
    bio: "Experienced Physics faculty member with an academic background from Vikrama Simhapuri University, Nellore. He brings 14+ years of teaching experience across CBSE and corporate colleges with an examination-centric teaching methodology.",
    highlights: ["Vikrama Simhapuri Univ.", "14+ Yrs Exp", "CBSE & Corporate Colleges", "Exam Focus"],
    avatarGradient: "from-cyan-700 to-blue-800",
    badgeStyle: "bg-blue-50 text-blue-700 border-blue-200",
    dotColor: "bg-blue-500",
    icon: Atom,
  },
  {
    id: "p-geetha",
    name: "Dr. P. Geetha",
    degrees: "M.Sc., M.Phil., PhD.",
    role: "Physics Faculty",
    subject: "Physics",
    experience: "20+ Years Experience • Corporate Colleges",
    bio: "Highly qualified Physics faculty member with M.Sc., M.Phil., and Ph.D. qualifications. With over 20 years of teaching experience across leading corporate colleges, she specializes in concept-oriented, student-focused Physics education. Her expertise helps students build strong conceptual foundations and achieve excellent academic performance.",
    highlights: ["PhD Qualified", "20+ Yrs Exp", "Corporate Colleges", "Concept-Oriented Teaching"],
    avatarGradient: "from-blue-600 to-cyan-900",
    badgeStyle: "bg-blue-50 text-blue-700 border-blue-200",
    dotColor: "bg-blue-500",
    icon: Atom,
  },
];

export function FacultyTeam() {
  return (
    <section id="faculty" className="relative py-24 md:py-32 overflow-hidden bg-slate-50/50">
      {/* Dynamic Animated Background Aura Blobs */}
      <div className="pointer-events-none absolute -left-48 top-1/4 h-[500px] w-[500px] rounded-full bg-brand-purple/10 blur-[100px] animate-float" />
      <div
        className="pointer-events-none absolute -right-48 bottom-1/4 h-[500px] w-[500px] rounded-full bg-brand-blue/10 blur-[100px] animate-float"
        style={{ animationDelay: "3s" }}
      />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-300/10 blur-[80px]" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-200/80 bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-purple shadow-xs backdrop-blur-md">
            <GraduationCap className="h-4 w-4 animate-bounce" style={{ animationDuration: "2.5s" }} />
            <span>Our Faculty & Academic Advisory</span>
          </div>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
            Learn from <span className="text-gradient-brand">India&apos;s leading educators</span> & mentors
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
            Our esteemed academic council brings over 150+ cumulative years of premier classroom experience, university leadership, and subject mastery to guide you to board and entrance exam success.
          </p>
        </div>

        {/* Faculty Cards Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FACULTY_MEMBERS.map((member) => {
            const Icon = member.icon;
            // Clean initials for monogram
            const cleanName = member.name.replace(/^(Mr\.|Ms\.|Dr\.)\s*/, "");
            const initials = cleanName
              .split(" ")
              .filter(Boolean)
              .slice(0, 2)
              .map((n) => n[0])
              .join("");

            return (
              <div
                key={member.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white/95 p-6 md:p-7 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-purple-300/80 hover:shadow-[0_20px_40px_-12px_rgba(108,59,224,0.15)]"
              >
                {/* Animated Top Border Shimmer Beam */}
                <div className="absolute inset-x-0 top-0 h-1 w-0 bg-gradient-to-r from-brand-blue via-brand-purple to-pink-500 transition-all duration-500 ease-out group-hover:w-full" />

                {/* Ambient Soft Top Card Gradient */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-purple-500/[0.03] to-transparent" />

                <div className="relative">
                  {/* Top Row: Avatar Monogram + Subject Badge */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3.5">
                      {/* Monogram Avatar with Icon & Animation */}
                      <div className="relative">
                        <div
                          className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${member.avatarGradient} text-base font-bold text-white shadow-md ring-4 ring-purple-100/60 transition-transform duration-300 group-hover:scale-105 group-hover:ring-purple-200`}
                        >
                          {initials}
                        </div>
                        <div className="absolute -bottom-1 -right-1 grid h-5 w-5 place-items-center rounded-full bg-white text-brand-purple shadow-xs ring-2 ring-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                          <Icon className="h-3 w-3" />
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-slate-900 transition-colors duration-200 group-hover:text-brand-purple">
                          {member.name}
                        </h3>
                        <p className="text-xs font-semibold text-brand-purple/90">
                          {member.degrees}
                        </p>
                      </div>
                    </div>

                    {/* Subject Pill Badge */}
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider transition-transform duration-200 group-hover:scale-105 ${member.badgeStyle}`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${member.dotColor} animate-pulse`} />
                      {member.subject.split(" ")[0]}
                    </span>
                  </div>

                  {/* Role & Experience Info */}
                  <div className="mt-5 space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-brand-purple" />
                      <span>{member.role}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 rounded-xl border border-purple-100/70 bg-purple-50/50 px-3 py-1 text-xs font-medium text-purple-900 transition-colors group-hover:bg-purple-50">
                      <Award className="h-3.5 w-3.5 shrink-0 text-brand-purple" />
                      <span>{member.experience}</span>
                    </div>
                  </div>

                  {/* Bio Paragraph */}
                  <p className="mt-4 text-xs leading-relaxed text-slate-600 md:text-sm">
                    {member.bio}
                  </p>
                </div>

                {/* Highlights Tags at Card Bottom */}
                <div className="relative mt-6 border-t border-slate-100 pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {member.highlights.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-slate-200/50 bg-slate-50/80 px-2.5 py-1 text-[11px] font-medium text-slate-600 transition-all duration-200 group-hover:border-purple-200/60 group-hover:bg-purple-50/40 group-hover:text-purple-800"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
