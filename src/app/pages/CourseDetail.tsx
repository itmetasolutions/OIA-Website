import { useState } from "react"
import { useParams, Link } from "react-router"
import { motion } from "motion/react"
import {
  ChevronRight, Clock, BarChart2, Globe, CheckCircle, ChevronDown, ChevronUp,
  BookOpen, Users, Award, Play, ArrowRight,
} from "lucide-react"
import { COURSES, Reveal, IslamicPattern, CTASection, titleToSlug, SEO } from "../shared"
import { COURSE_DETAILS } from "../data/courseDetails"

function getCourseDetail(slug: string) {
  const course = COURSES.find((c) => titleToSlug(c.title) === slug)
  if (!course) return { course: null, detail: null }
  const detail = Object.entries(COURSE_DETAILS).find(
    ([key]) => titleToSlug(key) === slug
  )?.[1] ?? null
  return { course, detail }
}

// ─── Breadcrumb ───────────────────────────────────────────────────────────────
function Breadcrumb({ title }: { title: string }) {
  return (
    <nav className="bg-card border-b border-border px-5 lg:px-8">
      <div className="max-w-7xl mx-auto py-3 flex items-center gap-2 text-xs text-muted-foreground">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link to="/courses" className="hover:text-primary transition-colors">Courses</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-foreground font-medium truncate max-w-[200px]">{title}</span>
      </div>
    </nav>
  )
}

// ─── Course Hero ──────────────────────────────────────────────────────────────
function CourseHero({ title, desc, level, duration, photo }: {
  title: string; desc: string; level: string; duration: string; photo?: string
}) {
  const LEVEL_COLOR: Record<string, string> = {
    Beginner: "#0A7A58",
    Intermediate: "#C9A454",
    Advanced: "#7C3AED",
    "All Levels": "#0891B2",
  }
  return (
    <section className="relative min-h-[480px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        {photo ? (
          <img
            src={`/Images/Courses Images/${photo}.webp`}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-primary/10" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pb-14 pt-24 w-full">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <div className="flex flex-wrap gap-2 mb-4">
            <span
              className="text-xs font-bold px-3 py-1.5 rounded-full"
              style={{ background: LEVEL_COLOR[level] ?? "#0A7A58", color: "white" }}
            >
              {level}
            </span>
            <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-white/15 text-white border border-white/25">
              {duration}
            </span>
          </div>

          <h1
            className="text-4xl lg:text-6xl font-bold text-white max-w-3xl leading-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {title}
          </h1>
          <p
            className="text-white/75 text-lg max-w-2xl leading-relaxed"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {desc}
          </p>

          <div className="flex flex-wrap gap-6 mt-8 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-accent" />
              <span>{level}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-accent" />
              <span>5,000+ students</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-accent" />
              <span>Certificate included</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Curriculum Accordion ─────────────────────────────────────────────────────
function Curriculum({ modules }: { modules: { module: string; lessons: string[] }[] }) {
  const [open, setOpen] = useState<number>(0)
  return (
    <div className="flex flex-col gap-3">
      {modules.map(({ module, lessons }, i) => (
        <div key={module} className="border border-border rounded-2xl overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-muted/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span
                className="w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center flex-shrink-0 text-white"
                style={{ background: "#0A7A58" }}
              >
                {i + 1}
              </span>
              <span className="font-semibold text-foreground text-sm">{module}</span>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <span className="text-xs text-muted-foreground hidden sm:block">{lessons.length} lessons</span>
              {open === i
                ? <ChevronUp className="w-4 h-4 text-primary" />
                : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
            </div>
          </button>
          {open === i && (
            <ul className="border-t border-border">
              {lessons.map((lesson, li) => (
                <li key={lesson} className="flex items-center gap-3 px-5 py-3 text-sm text-muted-foreground border-b border-border last:border-0 hover:bg-muted/20 transition-colors">
                  <Play className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {li + 1}. {lesson}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}

// ─── Enroll Sidebar ───────────────────────────────────────────────────────────
function EnrollSidebar({ title, level, duration, language, hoursPerWeek }: {
  title: string; level: string; duration: string; language: string; hoursPerWeek: string
}) {
  return (
    <div className="sticky top-24 bg-card border border-border rounded-3xl overflow-hidden shadow-2xl">
      <div className="p-6 border-b border-border bg-primary/6">
        <div className="text-2xl font-bold text-foreground mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
          Register Free
        </div>
        <div className="text-xs text-muted-foreground">No credit card required — start your journey today</div>
      </div>

      <div className="p-6 flex flex-col gap-4">
        <Link
          to={`/enroll?course=${encodeURIComponent(title)}`}
          className="w-full text-center bg-primary text-primary-foreground font-bold py-3.5 rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
        >
          Enroll Now <ArrowRight className="w-4 h-4" />
        </Link>

        <div className="flex flex-col gap-3 pt-2">
          {[
            ["Duration",       duration,      Clock],
            ["Level",          level,         BarChart2],
            ["Language",       language,      Globe],
            ["Hours / Week",   hoursPerWeek,  BookOpen],
            ["Certificate",    "Included",    Award],
          ].map(([label, value, Icon]) => (
            <div key={label as string} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                {/* @ts-ignore */}
                <Icon className="w-4 h-4" />
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{label as string}</span>
              </div>
              <span className="font-semibold text-foreground">{value as string}</span>
            </div>
          ))}
        </div>

        <div className="pt-3 border-t border-border">
          <div className="text-xs text-muted-foreground text-center">
            Have questions? <Link to="/contact" className="text-primary font-semibold hover:underline">Contact us</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Related Courses ──────────────────────────────────────────────────────────
function RelatedCourses({ currentTitle }: { currentTitle: string }) {
  const related = COURSES.filter((c) => c.title !== currentTitle).slice(0, 3)
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0"><IslamicPattern color="#0A7A58" opacity={0.038} /></div>
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal className="mb-10">
          <h2 className="text-3xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
            Related <span className="text-primary italic">Courses</span>
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {related.map(({ title, desc, level, duration }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <Link
                to={`/courses/${titleToSlug(title)}`}
                className="group block h-full bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={`/Images/Courses Images/${title}.webp`}
                    alt={title}
                    className="w-full h-auto block group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-foreground text-sm mb-2 line-clamp-2 leading-snug" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{desc}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{level}</span>
                    <span>{duration}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <Link to="/courses" className="inline-flex items-center gap-2 text-primary font-bold px-4 py-2.5 sm:px-6 sm:py-3 rounded-full border border-primary/25 hover:bg-primary/6 transition-all">
            View All Courses <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function CourseDetail() {
  const { slug = "" } = useParams<{ slug: string }>()
  const { course, detail } = getCourseDetail(slug)

  const courseSchema = course && detail ? {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": detail.longDesc,
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Open Islamic Academy",
      "sameAs": "https://openislamicacademy.com"
    },
    "educationalLevel": course.level,
    "timeRequired": course.duration,
    "inLanguage": detail.language,
    "url": `https://openislamicacademy.com/courses/${slug}`
  } : undefined

  if (!course) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center px-5">
        <BookOpen className="w-16 h-16 text-primary/30" />
        <h1 className="text-2xl font-bold text-foreground">Course not found</h1>
        <p className="text-muted-foreground">The course you are looking for does not exist or has been removed.</p>
        <Link to="/courses" className="mt-2 bg-primary text-primary-foreground font-bold px-4 py-2.5 sm:px-6 sm:py-3 rounded-full hover:bg-primary/90 transition-all">
          Browse All Courses
        </Link>
      </div>
    )
  }

  return (
    <>
      <SEO
        title={`${course.title} — Online Islamic Course`}
        description={`${detail.longDesc.slice(0, 155)}…`}
        keywords={`${course.title}, Islamic course online, ${course.level.toLowerCase()} Islamic education, learn ${course.title.toLowerCase()}, Open Islamic Academy`}
        canonical={`/courses/${slug}`}
        ogImage={`https://openislamicacademy.com/Images/Courses Images/${detail.photo}.webp`}
        schema={courseSchema}
      />
      <Breadcrumb title={course.title} />
      <CourseHero
        title={course.title}
        desc={course.desc}
        level={course.level}
        duration={course.duration}
        photo={course.title}
      />

      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">

            {/* Main content */}
            <div className="lg:col-span-2 flex flex-col gap-12">

              {/* Description */}
              {detail && (
                <Reveal>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Course Overview
                    </h2>
                    <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {detail.longDesc}
                    </p>
                  </div>
                </Reveal>
              )}

              {/* What you'll learn */}
              {detail && (
                <Reveal>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
                      What You Will Learn
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {detail.outcomes.map((o) => (
                        <div key={o} className="flex items-start gap-3 bg-primary/5 border border-primary/12 rounded-xl p-3.5">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{o}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}

              {/* Curriculum */}
              {detail && (
                <Reveal>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Course Curriculum
                    </h2>
                    <Curriculum modules={detail.curriculum} />
                  </div>
                </Reveal>
              )}

              {/* Who is this for */}
              {detail && (
                <Reveal>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Who Is This Course For?
                    </h2>
                    <div className="flex flex-col gap-3">
                      {detail.forWhom.map((f) => (
                        <div key={f} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}

              {/* Prerequisites */}
              {detail && (
                <Reveal>
                  <div className="bg-accent/8 border border-accent/20 rounded-2xl p-6">
                    <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-accent" />
                      Prerequisites
                    </h3>
                    <p className="text-sm text-muted-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {detail.prerequisites}
                    </p>
                  </div>
                </Reveal>
              )}
            </div>

            {/* Sidebar */}
            <div>
              <Reveal delay={0.12}>
                <EnrollSidebar
                  title={course.title}
                  level={course.level}
                  duration={course.duration}
                  language={detail?.language ?? "English / Urdu"}
                  hoursPerWeek={detail?.hoursPerWeek ?? "3-5 hours"}
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <RelatedCourses currentTitle={course.title} />

      <CTASection
        title={<>Ready to Begin This <span className="italic" style={{ color: "#C9A454" }}>Course?</span></>}
        subtitle="Join thousands of students worldwide and deepen your understanding of Islam with authentic, scholar-led learning."
      />
    </>
  )
}
