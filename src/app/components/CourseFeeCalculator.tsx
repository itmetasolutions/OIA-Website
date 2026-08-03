import { useEffect, useMemo, useState } from "react"
import { createPortal } from "react-dom"
import { Link } from "react-router"
import { CalendarDays, Calculator, Check, Clock, DollarSign, X } from "lucide-react"
import { COURSES } from "../shared"

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const DURATIONS = Array.from({ length: 11 }, (_, index) => 30 + index * 15)
const WEEKEND_DAYS = new Set(["Saturday", "Sunday"])

// Placeholder prices: replace these values with backend pricing when available.
export const COURSE_PRICES = Object.fromEntries(
  COURSES.map((course, index) => [course.title, 25 + (index % 5) * 2])
) as Record<string, number>

export default function CourseFeeCalculator({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [courseTitle, setCourseTitle] = useState("")
  const [weeklyClasses, setWeeklyClasses] = useState(1)
  const [selectedDays, setSelectedDays] = useState<string[]>(["Monday"])
  const [duration, setDuration] = useState(30)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  useEffect(() => {
    setSelectedDays((days) => days.slice(0, weeklyClasses))
  }, [weeklyClasses])

  const course = COURSES.find(({ title }) => title === courseTitle)
  const weekdayRate = courseTitle ? COURSE_PRICES[courseTitle] : 0
  const weekendRate = weekdayRate + 5
  const durationMultiplier = duration / 30
  const weeklyCost = useMemo(() => selectedDays.reduce(
    (total, day) => total + (WEEKEND_DAYS.has(day) ? weekendRate : weekdayRate) * durationMultiplier,
    0
  ), [selectedDays, weekdayRate, weekendRate, durationMultiplier])
  const totalPackage = weeklyCost * 4
  const scheduleComplete = Boolean(courseTitle) && selectedDays.length === weeklyClasses

  const toggleDay = (day: string) => {
    setSelectedDays((current) => {
      if (current.includes(day)) return current.filter((item) => item !== day)
      if (current.length >= weeklyClasses) return current
      return DAYS.filter((item) => [...current, day].includes(item))
    })
  }

  const enrollUrl = useMemo(() => {
    const params = new URLSearchParams({
      course: courseTitle,
      pricePerClass: weekdayRate.toFixed(2),
      weekendPrice: weekendRate.toFixed(2),
      duration: String(duration),
      weeklyClasses: String(weeklyClasses),
      days: selectedDays.join(","),
      weeklyCost: weeklyCost.toFixed(2),
      totalPrice: totalPackage.toFixed(2),
    })
    return `/enroll?${params.toString()}`
  }, [courseTitle, weekdayRate, weekendRate, duration, weeklyClasses, selectedDays, weeklyCost, totalPackage])

  if (!open) return null

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-3 backdrop-blur-sm sm:p-5" role="dialog" aria-modal="true" aria-labelledby="calculator-title" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="relative flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-card shadow-2xl">
        <div className="flex items-center justify-between px-5 py-4 text-white sm:px-7" style={{ background: "linear-gradient(135deg, #0A7A58, #065A42)" }}>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/12"><Calculator className="h-6 w-6" /></span>
            <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-white/65">Plan Your Learning</p><h2 id="calculator-title" className="text-xl font-bold sm:text-2xl">Course Fee Calculator</h2></div>
          </div>
          <button type="button" onClick={onClose} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20" aria-label="Close calculator"><X className="h-5 w-5" /></button>
        </div>

        <div className="grid overflow-y-auto lg:grid-cols-[1.15fr_0.85fr]">
          <div className="flex flex-col gap-6 p-5 sm:p-7">
            <div>
              <label htmlFor="fee-course" className="mb-2 block text-xs font-bold uppercase tracking-wide text-foreground"><span className="mr-2 text-primary">01</span>Select Course</label>
              <select id="fee-course" value={courseTitle} onChange={(event) => setCourseTitle(event.target.value)} className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary/20">
                <option value="">— Choose a course —</option>
                {COURSES.map((item) => <option key={item.title} value={item.title}>{item.title}</option>)}
              </select>
              {course && <p lang="ur" dir="rtl" className="mt-2 text-lg font-semibold text-primary">{course.urdu}</p>}
            </div>

            {courseTitle && <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-primary/15 bg-primary/5 p-4"><p className="text-xs text-muted-foreground">Weekday · 30 minutes</p><p className="mt-1 text-2xl font-bold text-primary">${weekdayRate.toFixed(2)}</p></div>
              <div className="rounded-2xl border border-accent/25 bg-accent/5 p-4"><p className="text-xs text-muted-foreground">Weekend · 30 minutes</p><p className="mt-1 text-2xl font-bold text-accent">${weekendRate.toFixed(2)}</p></div>
            </div>}

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="weekly-classes" className="mb-2 block text-xs font-bold uppercase tracking-wide text-foreground"><span className="mr-2 text-primary">02</span>Classes Per Week</label>
                <select id="weekly-classes" value={weeklyClasses} onChange={(event) => setWeeklyClasses(Number(event.target.value))} className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm outline-none focus:border-primary">
                  {[1, 2, 3, 4, 5, 6, 7].map((count) => <option key={count} value={count}>{count} {count === 1 ? "class" : "classes"}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="class-duration" className="mb-2 block text-xs font-bold uppercase tracking-wide text-foreground"><span className="mr-2 text-primary">03</span>Class Duration</label>
                <select id="class-duration" value={duration} onChange={(event) => setDuration(Number(event.target.value))} className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm outline-none focus:border-primary">
                  {DURATIONS.map((minutes) => <option key={minutes} value={minutes}>{minutes} Minutes</option>)}
                </select>
              </div>
            </div>

            <div>
              <div className="mb-3 flex items-center justify-between gap-3"><p className="text-xs font-bold uppercase tracking-wide text-foreground"><span className="mr-2 text-primary">04</span>Select Class Days</p><p className={`text-xs font-bold ${selectedDays.length === weeklyClasses ? "text-primary" : "text-accent"}`}>{selectedDays.length}/{weeklyClasses} selected</p></div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {DAYS.map((day) => {
                  const selected = selectedDays.includes(day)
                  return <button key={day} type="button" onClick={() => toggleDay(day)} className={`flex items-center justify-between rounded-xl border px-3 py-2.5 text-xs font-semibold transition-all ${selected ? "border-primary bg-primary text-white" : "border-border bg-background text-muted-foreground hover:border-primary/30"}`}><span>{day}</span>{selected && <Check className="h-3.5 w-3.5" />}</button>
                })}
              </div>
              {selectedDays.length < weeklyClasses && <p className="mt-2 text-xs text-accent">Select {weeklyClasses - selectedDays.length} more {weeklyClasses - selectedDays.length === 1 ? "day" : "days"} to complete your schedule.</p>}
            </div>
          </div>

          <aside className="border-t border-border bg-secondary/60 p-5 sm:p-7 lg:border-l lg:border-t-0">
            <h3 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>Live Estimate</h3>
            <p className="mt-1 text-xs text-muted-foreground">Placeholder pricing in USD · four-week package</p>
            <div className="mt-6 flex flex-col gap-3 text-sm">
              <Summary icon={Calculator} label="Selected Course" value={courseTitle || "Not selected"} />
              <Summary icon={DollarSign} label="Price Per Class" value={courseTitle ? `$${weekdayRate.toFixed(2)} weekday · $${weekendRate.toFixed(2)} weekend` : "$0.00"} />
              <Summary icon={Clock} label="Class Duration" value={`${duration} Minutes`} />
              <Summary icon={CalendarDays} label="Classes Per Week" value={String(weeklyClasses)} />
              <Summary icon={CalendarDays} label="Selected Days" value={selectedDays.join(", ") || "None"} />
            </div>
            <div className="mt-6 rounded-2xl border border-primary/15 bg-card p-5">
              <div className="flex justify-between text-sm text-muted-foreground"><span>Weekly Cost</span><strong className="text-lg text-foreground">${weeklyCost.toFixed(2)}</strong></div>
              <div className="my-4 h-px bg-border" />
              <div className="flex items-end justify-between gap-3"><span className="text-sm font-bold text-foreground">Estimated Package</span><strong className="text-3xl text-primary">${totalPackage.toFixed(2)}</strong></div>
              <p className="mt-1 text-right text-[10px] text-muted-foreground">4 weeks</p>
            </div>
            {scheduleComplete ? <Link to={enrollUrl} onClick={onClose} className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3.5 text-sm font-bold text-primary-foreground shadow-xl shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-primary/90">Enroll Now</Link> : <button type="button" disabled className="mt-5 w-full cursor-not-allowed rounded-full bg-muted px-5 py-3.5 text-sm font-bold text-muted-foreground">Complete Selection to Enroll</button>}
          </aside>
        </div>
      </div>
    </div>,
    document.body
  )
}

function Summary({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return <div className="flex items-start gap-3"><span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10"><Icon className="h-4 w-4 text-primary" /></span><span className="min-w-0"><span className="block text-xs text-muted-foreground">{label}</span><strong className="block break-words text-foreground">{value}</strong></span></div>
}
