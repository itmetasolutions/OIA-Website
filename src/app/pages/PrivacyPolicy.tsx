import { IslamicPattern, Reveal, SEO } from "../shared"

const SECTIONS = [
  {
    title: "1. Introduction",
    body: `Open Islamic Academy ("we", "us", or "our") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or enroll in our courses. Please read this policy carefully. If you disagree with its terms, please discontinue use of our services.`,
  },
  {
    title: "2. Information We Collect",
    body: `We collect information that you voluntarily provide when you register, enroll in a course, fill in a contact form, or communicate with us. This includes:\n\n• Full name and email address\n• Phone number and country of residence\n• Payment information (processed securely by third-party payment providers — we do not store card details)\n• Course preferences and academic level\n• Communications and messages sent to our team\n\nWe may also automatically collect technical data such as your IP address, browser type, and pages visited through cookies and similar technologies.`,
  },
  {
    title: "3. How We Use Your Information",
    body: `We use the information we collect to:\n\n• Create and manage your student account\n• Process enrollments and payments\n• Deliver course content and communicate class schedules\n• Send administrative emails (receipts, updates, course reminders)\n• Respond to your inquiries and provide student support\n• Improve our website, courses, and services\n• Send occasional newsletters or course announcements (you may opt out at any time)\n• Comply with legal obligations\n\nWe will never sell, rent, or trade your personal information to third parties for marketing purposes.`,
  },
  {
    title: "4. Legal Basis for Processing",
    body: `We process your personal data on the following legal bases:\n\n• Contract performance: to fulfil our obligations to you as a student\n• Legitimate interests: to improve our services and communicate relevant updates\n• Consent: where you have explicitly agreed to receive communications\n• Legal compliance: where processing is required by law\n\nYou may withdraw consent at any time without affecting the lawfulness of prior processing.`,
  },
  {
    title: "5. Cookies",
    body: `Our website uses cookies — small text files stored on your device — to enhance your browsing experience, remember your preferences, and analyse site traffic. We use essential cookies (required for the site to function), analytics cookies (to understand how visitors use our site), and preference cookies (to remember your settings such as dark/light mode). You may disable cookies through your browser settings, though this may affect some site functionality.`,
  },
  {
    title: "6. Sharing of Information",
    body: `We do not sell or share your personal data with third parties except in the following limited circumstances:\n\n• Service providers: trusted third parties who assist in operating our website, processing payments, or delivering courses (e.g., Zoom, payment processors) — bound by confidentiality agreements\n• Legal requirements: if required to comply with a legal obligation, court order, or governmental request\n• Business transfers: in the event of a merger, acquisition, or sale of assets\n\nAll third-party service providers are required to protect your data in accordance with this policy.`,
  },
  {
    title: "7. Data Retention",
    body: `We retain your personal information for as long as your account is active or as needed to provide our services. If you close your account, we will retain your data for up to 3 years for legal and financial record-keeping purposes, after which it will be securely deleted. You may request deletion of your data at any time by contacting us, subject to any legal retention requirements.`,
  },
  {
    title: "8. Data Security",
    body: `We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. These include SSL encryption, secure servers, and restricted access to personal data. However, no method of internet transmission is 100% secure, and we cannot guarantee absolute security. We encourage you to use strong passwords and keep your account credentials confidential.`,
  },
  {
    title: "9. Children's Privacy",
    body: `Our services are open to students of all ages with the appropriate parental or guardian consent for those under 13. We do not knowingly collect personal information from children under 13 without verifiable parental consent. If you believe we have inadvertently collected such information, please contact us immediately and we will take steps to delete it.`,
  },
  {
    title: "10. Your Rights",
    body: `Depending on your location, you may have the following rights regarding your personal data:\n\n• Access: request a copy of the personal data we hold about you\n• Correction: request correction of inaccurate or incomplete data\n• Deletion: request deletion of your personal data\n• Restriction: request that we restrict processing of your data\n• Portability: receive your data in a structured, machine-readable format\n• Objection: object to processing based on legitimate interests\n\nTo exercise any of these rights, please contact us at info@openislamicacademy.com. We will respond within 30 days.`,
  },
  {
    title: "11. Third-Party Links",
    body: `Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit. Our Privacy Policy applies solely to information collected by Open Islamic Academy.`,
  },
  {
    title: "12. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of significant changes by posting a notice on our website or sending an email. The date of the latest revision is always shown at the top of this page. Continued use of our services after changes are posted constitutes acceptance of the revised policy.`,
  },
  {
    title: "13. Contact Us",
    body: `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:\n\nEmail: info@openislamicacademy.com\nWebsite: openislamicacademy.com/contact\n\nWe take all privacy concerns seriously and will respond to your inquiry within 2 business days.`,
  },
]

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy — Open Islamic Academy"
        description="Open Islamic Academy's Privacy Policy explains how we collect, use and protect your personal data. We are committed to safeguarding your privacy and never selling your information."
        keywords="Islamic academy privacy policy, data protection Islamic school, online course privacy"
        canonical="/privacy"
      />
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-card">
        <div className="absolute inset-0"><IslamicPattern color="#0A7A58" opacity={0.04} /></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/6 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-5 lg:px-8 text-center">
          <Reveal>
            <span className="text-xs font-bold tracking-[0.18em] uppercase text-primary">Legal</span>
            <h1 className="mt-3 text-4xl lg:text-5xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              Privacy <span className="text-primary italic">Policy</span>
            </h1>
            <p className="mt-4 text-muted-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Last updated: June 2025 &nbsp;·&nbsp; Your privacy matters to us.
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
                <span className="text-primary text-lg">🔒</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                At Open Islamic Academy, we are committed to safeguarding your personal information. We collect only what is necessary, use it solely to serve you better, and never sell your data to third parties.
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
                    className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line"
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
