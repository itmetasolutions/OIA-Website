import { IslamicPattern, Reveal, SEO } from "../shared"

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    body: `By accessing or using the Open Islamic Academy website and services, you confirm that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to any part of these terms, please discontinue use of our platform immediately. These terms apply to all visitors, students, and other users of our services.`,
  },
  {
    title: "2. Description of Services",
    body: `Open Islamic Academy provides online Islamic education through live classes, recorded lectures, and study materials. Our courses cover subjects including Quran recitation, Tajweed, Hifz, Arabic language, Hadith, Aqeedah, Fiqh, Seerah, and related Islamic sciences. We reserve the right to modify, suspend, or discontinue any part of our services at any time with reasonable notice.`,
  },
  {
    title: "3. Enrollment and Accounts",
    body: `To access our courses, you must create an account and provide accurate, complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You must be at least 13 years of age to register, or have parental or guardian consent if younger. Each account is for individual use only and may not be shared with others.`,
  },
  {
    title: "4. Fees and Payments",
    body: `Course fees are listed on the relevant course pages. All fees are due in advance unless otherwise agreed in writing. Prices are subject to change without prior notice, but changes will not affect already-paid enrollments. We accept payments through our approved payment gateways. All transactions are processed securely.`,
  },
  {
    title: "5. Refund Policy",
    body: `We offer a 7-day satisfaction guarantee from the date of enrollment. If you are not satisfied with a course for any reason, you may request a full refund within this period by contacting our support team. Refund requests made after 7 days will be considered at our discretion. Refunds are not available for courses that have been substantially completed (more than 50% of content accessed).`,
  },
  {
    title: "6. Intellectual Property",
    body: `All content provided by Open Islamic Academy — including course videos, notes, slides, audio recordings, and written materials — is the intellectual property of Open Islamic Academy or its content contributors. You may use course materials solely for your personal, non-commercial educational purposes. Reproduction, redistribution, resale, or public sharing of any course content without prior written permission is strictly prohibited.`,
  },
  {
    title: "7. Code of Conduct",
    body: `All students are expected to engage with respectful Islamic etiquette (Adab) in all interactions with teachers, staff, and fellow students. Any form of harassment, abuse, hate speech, or disrespectful behaviour will result in immediate removal from the platform without refund. We reserve the right to terminate any account found to be in violation of these standards.`,
  },
  {
    title: "8. Accuracy of Content",
    body: `Open Islamic Academy strives to ensure that all course content is based on authentic Islamic sources and is reviewed by qualified scholars. However, we do not guarantee that all content is error-free. Students are encouraged to verify religious rulings with qualified scholars for personal matters. Our courses are intended for educational purposes and do not constitute formal religious rulings (Fatwas).`,
  },
  {
    title: "9. Limitation of Liability",
    body: `Open Islamic Academy shall not be liable for any indirect, incidental, or consequential damages arising from your use of our platform or courses. Our total liability in any matter related to our services shall not exceed the amount you paid for the relevant course. We make no warranties, express or implied, regarding the completeness or suitability of our content for any particular purpose.`,
  },
  {
    title: "10. Privacy",
    body: `Your use of our services is also governed by our Privacy Policy, which is incorporated into these Terms and Conditions by reference. Please review our Privacy Policy to understand our practices regarding the collection, use, and protection of your personal information.`,
  },
  {
    title: "11. Changes to Terms",
    body: `We reserve the right to update these Terms and Conditions at any time. Changes will be effective upon posting to our website. Continued use of our services after any changes constitutes your acceptance of the revised terms. We encourage you to review this page periodically.`,
  },
  {
    title: "12. Governing Law",
    body: `These Terms and Conditions shall be governed by and construed in accordance with applicable law. Any disputes arising from these terms or your use of our services shall be resolved through good-faith negotiation, and if unresolved, through binding arbitration or the courts of the applicable jurisdiction.`,
  },
  {
    title: "13. Contact Us",
    body: `If you have any questions about these Terms and Conditions, please contact us at: info@openislamicacademy.com or through the Contact page on our website. We aim to respond to all queries within 2 business days.`,
  },
]

export default function TermsAndConditions() {
  return (
    <>
      <SEO
        title="Terms and Conditions — Open Islamic Academy"
        description="Read the Terms and Conditions for Open Islamic Academy. Understand your rights and responsibilities as a student, our refund policy, intellectual property rights, and code of conduct."
        keywords="Islamic academy terms conditions, online course terms, Islamic education policy"
        canonical="/terms"
      />
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-card">
        <div className="absolute inset-0"><IslamicPattern color="#0A7A58" opacity={0.04} /></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/6 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-5 lg:px-8 text-center">
          <Reveal>
            <span className="text-xs font-bold tracking-[0.18em] uppercase text-primary">Legal</span>
            <h1 className="mt-3 text-4xl lg:text-5xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              Terms & <span className="text-primary italic">Conditions</span>
            </h1>
            <p className="mt-4 text-muted-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Last updated: June 2025 &nbsp;·&nbsp; Please read these terms carefully before using our services.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0"><IslamicPattern color="#C9A454" opacity={0.025} /></div>
        <div className="relative max-w-4xl mx-auto px-5 lg:px-8">
          <Reveal>
            <div className="bg-card border border-border rounded-3xl p-6 lg:p-10 mb-10 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-primary text-lg">ℹ</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                These Terms and Conditions govern your relationship with Open Islamic Academy. By enrolling in any of our courses or using our website, you agree to these terms in full. We recommend saving or printing a copy for your records.
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col gap-8">
            {SECTIONS.map(({ title, body }, i) => (
              <Reveal key={title} delay={i * 0.03}>
                <div className="bg-card border border-border rounded-2xl p-6 lg:p-8">
                  <h2
                    className="text-lg font-bold text-foreground mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {title}
                  </h2>
                  <p
                    className="text-sm text-muted-foreground leading-relaxed"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
