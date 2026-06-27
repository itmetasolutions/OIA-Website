export interface CourseDetailData {
  longDesc: string
  outcomes: string[]
  curriculum: { module: string; lessons: string[] }[]
  forWhom: string[]
  prerequisites: string
  language: string
  hoursPerWeek: string
  photo: string
}

export const COURSE_DETAILS: Record<string, CourseDetailData> = {
  "Quran Reading & Pronunciation": {
    longDesc: "This course teaches you to read the Holy Quran from absolute scratch using the science of Tajweed — the set of rules governing correct Arabic pronunciation as recited by the Prophet Muhammad ﷺ. You will master every Arabic letter, vowel, and articulation point, then progress through all foundational Tajweed rules until you can recite the Quran beautifully and accurately. Our qualified teachers provide live, one-to-one feedback to correct mistakes before they become habits.",
    outcomes: ["Read every Arabic letter with its correct articulation point", "Apply all essential Tajweed rules fluently", "Recite complete Surahs with proper intonation and rhythm", "Identify and eliminate common recitation errors", "Apply rules of stopping and starting (Waqf & Ibtida)", "Develop a confident, consistent daily Quran recitation habit"],
    curriculum: [
      { module: "Module 1: Arabic Alphabet & Vowels", lessons: ["The 28 Arabic letters and their forms", "Short vowels: Fatha, Kasra, Damma", "Tanween, Sukoon and Shaddah", "Connecting and disconnecting letters"] },
      { module: "Module 2: Core Tajweed Rules", lessons: ["Rules of Noon Sakinah and Tanween (Idghaam, Iqlab, Ikhfa, Izhar)", "Rules of Meem Sakinah", "Madd (elongation) — types and lengths", "Heavy and light letters: Tafkheem & Tarqeeq"] },
      { module: "Module 3: Fluent Recitation", lessons: ["Qalqalah letters and rules", "Waqf and Ibtida (stopping and starting)", "Recitation practice with Juz Amma", "Full assessment and personalised feedback"] },
    ],
    forWhom: ["Complete beginners with no prior Arabic background", "Muslims who want to improve their Salah recitation", "Children and adults starting their Quran journey"],
    prerequisites: "None — this course starts from absolute zero",
    language: "English / Urdu",
    hoursPerWeek: "3-5 hours",
    photo: "photo-1609599006353-e629aaabfcfb",
  },

  "Quran Memorization (Hifz-ul-Quran)": {
    longDesc: "The Hifz programme is a structured, supervised journey to memorise the entire Holy Quran. Using proven techniques including new lesson (Sabaq), recent revision (Sabqi), and old revision (Manzil), our certified Huffaz teachers guide students step by step from the first Juz to a complete, strong Hifz. The programme is flexible enough to accommodate children, adults, working professionals, and students, with daily sessions tailored to your pace.",
    outcomes: ["Memorise the complete Quran with accurate Tajweed", "Master proven memorisation and retention techniques", "Maintain a strong systematic revision programme", "Build a disciplined daily memorisation routine", "Recite fluently from memory in Salah and Taraweeh", "Earn the honoured title of Hafiz / Hafiza of the Quran"],
    curriculum: [
      { module: "Module 1: Foundations & Daily Routine", lessons: ["Correct Tajweed as a prerequisite", "Understanding the Hifz method (Sabaq, Sabqi, Manzil)", "Setting daily targets and a study timetable", "Starting with Juz Amma — short Surahs"] },
      { module: "Module 2: Progressive Memorisation", lessons: ["Memorising one new page per session", "Weekly consolidation revision", "Strengthening recently memorised portions", "Avoiding and correcting common memorisation errors"] },
      { module: "Module 3: Revision & Completion", lessons: ["Full Quran revision cycles (Dhor)", "Linking all memorised Juz together", "Final assessment and Ijazah preparation", "Post-Hifz maintenance plan"] },
    ],
    forWhom: ["Students who wish to memorise the complete Quran", "Adults with Quran reading ability seeking Hifz", "Parents enrolling children in a supervised Hifz programme"],
    prerequisites: "Ability to read Arabic with basic Tajweed (or enroll concurrently in Quran Reading & Pronunciation)",
    language: "English / Urdu / Arabic",
    hoursPerWeek: "5-7 hours",
    photo: "photo-1585036401990-e3e49d0f1e85",
  },

  "Essential Surahs Memorization": {
    longDesc: "This focused course helps you memorise the Surahs most commonly recited in daily Salah and Islamic occasions — including Al-Fatiha, Al-Ikhlas, Al-Falaq, An-Nas, Al-Kafiroon, Al-Asr, Al-Kawthar, and more. Each Surah is taught with correct Tajweed and its translation, so you recite with understanding. This is the perfect starting point for anyone wanting to enrich their prayers immediately.",
    outcomes: ["Memorise 15+ essential Surahs for daily Salah", "Recite each Surah with correct Tajweed", "Understand the meaning and context of each Surah", "Recite confidently during Fajr, Zuhr, Asr, Maghrib and Isha", "Apply Surahs in different rakaat of Salah correctly", "Build a strong foundation for further Quran memorisation"],
    curriculum: [
      { module: "Module 1: Salah Surahs — Juz Amma Part 1", lessons: ["Surah Al-Fatiha — the Opening", "Surahs An-Nas, Al-Falaq, Al-Ikhlas, Al-Kafiroon", "Surahs Al-Masad, An-Nasr, Al-Kawthar", "Revision and Salah application"] },
      { module: "Module 2: Salah Surahs — Juz Amma Part 2", lessons: ["Surahs Al-Asr, Al-Humazah, Al-Feel", "Surahs Quraysh, Al-Maun, Al-Fil", "Surahs Al-Zalzalah, Al-Bayyinah, Al-Qadr", "Combined revision and consolidation"] },
      { module: "Module 3: Longer Surahs & Review", lessons: ["Surah Al-Mulk (first 10 ayaat)", "Surah Yasin (opening section)", "Full review of all memorised Surahs", "Application in full Salah practice"] },
    ],
    forWhom: ["New Muslims wanting to pray with correct recitation", "Muslims who want to enrich their daily Salah", "Children beginning their memorisation journey"],
    prerequisites: "Basic ability to read Arabic letters (enrollment in Quran Reading course recommended)",
    language: "English / Urdu",
    hoursPerWeek: "2-3 hours",
    photo: "photo-1578662996442-48f60103fc96",
  },

  "Understanding Quran Through Translation": {
    longDesc: "This course unlocks the meaning of the Quran in clear, modern language so you can connect with the words of Allah on a profound level. You will study the complete Quran's translation chapter by chapter, exploring key themes, major stories, and divine guidance relevant to everyday life. The course bridges the gap between reading the Quran and truly understanding what you are reciting in your prayers.",
    outcomes: ["Understand the meaning of every Surah of the Quran", "Identify key themes and messages across the Quran", "Connect Quranic guidance to contemporary life situations", "Appreciate the narrative of the Quran from beginning to end", "Improve the quality and focus of your Salah", "Build a stronger personal connection with the Word of Allah"],
    curriculum: [
      { module: "Module 1: Introduction & Juz 1-10", lessons: ["Overview of Quranic structure and themes", "Al-Fatiha — the essence of the Quran", "Al-Baqarah, Al-Imran — foundations of faith and law", "An-Nisa to Al-Maidah — community and ethics"] },
      { module: "Module 2: Juz 11-20 — Prophets & Guidance", lessons: ["Stories of the Prophets in the Quran", "Al-Isra, Al-Kahf — guidance for modern times", "Maryam, Ta-Ha, Al-Anbiya — faith and perseverance", "Al-Hajj to An-Nur — worship and society"] },
      { module: "Module 3: Juz 21-30 — The Final Message", lessons: ["Al-Furqan to Al-Ahzab — community and family", "Ya-Sin, As-Saffat — belief in the Hereafter", "Al-Zumar to Al-Ahqaf — calling to Allah", "Juz Amma — short powerful Surahs of the Quran"] },
    ],
    forWhom: ["Muslims who read the Quran but do not understand its meaning", "New Muslims seeking to understand their faith from the source", "Anyone wanting to deepen their spiritual connection with the Quran"],
    prerequisites: "Ability to read Arabic (recommended, not required)",
    language: "English / Urdu",
    hoursPerWeek: "3-4 hours",
    photo: "photo-1481627834876-b7833e8f5570",
  },

  "Word-to-Word Quran Translation": {
    longDesc: "This advanced translation course teaches you the meaning of each individual Arabic word in the Quran, building a working Quranic vocabulary that allows you to understand the Quran directly without a translation. You will study root words, word families, and frequently recurring vocabulary, empowering you to decode new verses independently and pray with full comprehension of every word you recite.",
    outcomes: ["Understand 500+ most common Quranic words and roots", "Read any Quranic verse and grasp its direct meaning", "Identify Arabic root patterns and word families", "Pray Salah with understanding of every word recited", "Build a lasting Quranic Arabic vocabulary", "Reduce dependence on translations over time"],
    curriculum: [
      { module: "Module 1: Quranic Arabic Foundations", lessons: ["Arabic root system and word formation", "The 100 most frequent words in the Quran", "Pronouns, prepositions and connectors", "Verb and noun patterns in Quranic Arabic"] },
      { module: "Module 2: Word-by-Word Study — Juz Amma", lessons: ["Word-for-word breakdown of Juz Amma", "Key vocabulary from prayer Surahs", "Recognising recurring Quranic phrases", "Contextual meaning vs. literal translation"] },
      { module: "Module 3: Extended Vocabulary & Application", lessons: ["Word-by-word study of selected longer Surahs", "Themes: faith, creation, Prophets, Hereafter", "Building a personal Quranic vocabulary journal", "Assessment: translating unseen Quranic passages"] },
    ],
    forWhom: ["Students who want to understand the Quran in Arabic directly", "Those who have studied translation and want to go deeper", "Motivated learners committed to Quranic Arabic vocabulary"],
    prerequisites: "Completion of Understanding Quran Through Translation (or equivalent knowledge)",
    language: "English / Urdu",
    hoursPerWeek: "4-5 hours",
    photo: "photo-1507842217343-583bb7270b66",
  },

  "Quranic Tafseer & Explanation": {
    longDesc: "Tafseer is the science of Quranic interpretation — the discipline through which scholars unlock the deepest layers of meaning in the divine word. This course takes you through the complete Tafseer of the Quran using classical and contemporary scholarly sources, exploring historical context (Asbab al-Nuzul), linguistic analysis, and jurisprudential rulings. You will emerge with a rich, nuanced understanding of the Quran as understood by the greatest scholars of Islam.",
    outcomes: ["Understand the deeper meanings behind every Surah", "Appreciate the historical context (Asbab al-Nuzul) of revelation", "Study Quranic linguistics and rhetorical beauty (Balaghah)", "Identify and understand abrogated and abrogating verses (Naskh)", "Extract rulings and guidance from Quranic verses", "Reference classical Tafseer works (Ibn Kathir, al-Jalalayn, etc.)"],
    curriculum: [
      { module: "Module 1: Introduction to Tafseer Sciences", lessons: ["What is Tafseer and its importance", "Methods and categories of Tafseer", "Introduction to Asbab al-Nuzul", "Overview of major classical Tafseer works"] },
      { module: "Module 2: Tafseer of Selected Surahs", lessons: ["Detailed Tafseer of Al-Fatiha", "Tafseer of Al-Baqarah — foundation of Islamic law", "Tafseer of Al-Kahf, Yasin, Al-Mulk", "Tafseer of Juz Amma — depth and reflection"] },
      { module: "Module 3: Thematic Tafseer & Application", lessons: ["Thematic study: faith, worship, ethics, stories", "Contemporary application of Quranic guidance", "Answering common doubts using Tafseer", "Final project: presenting a Tafseer passage"] },
    ],
    forWhom: ["Students with a solid Quran reading and translation background", "Those seeking to understand Islam from the Quran itself", "Islamic studies students and Dawah workers"],
    prerequisites: "Completion of Understanding Quran Through Translation or equivalent",
    language: "English / Urdu",
    hoursPerWeek: "4-6 hours",
    photo: "photo-1543269865-cbf427effbad",
  },

  "Hadith & Sunnah Studies": {
    longDesc: "The Sunnah of the Prophet Muhammad ﷺ is the second primary source of Islamic guidance after the Quran. This course provides a rigorous study of authenticated hadith collections — including Sahih Bukhari, Sahih Muslim, and Riyad al-Saliheen — teaching you to understand, analyse, and apply the Prophet's teachings in daily life. You will also learn the science of Hadith authentication (Mustalah al-Hadith) so you can distinguish authentic reports from weak or fabricated ones.",
    outcomes: ["Study authenticated hadith from the six major collections", "Understand the science of Hadith authentication (Mustalah)", "Apply the Prophet's ﷺ teachings to daily life situations", "Distinguish between authentic, weak and fabricated hadith", "Appreciate the biography and character of the Prophet ﷺ through his statements", "Understand the relationship between Hadith and the Quran"],
    curriculum: [
      { module: "Module 1: Introduction to Hadith Sciences", lessons: ["The definition and importance of Hadith and Sunnah", "Categories of Hadith (Sahih, Hasan, Da'if)", "Introduction to Mustalah al-Hadith terminology", "The six major Hadith collections — an overview"] },
      { module: "Module 2: Study of Riyad al-Saliheen", lessons: ["Chapters on sincerity, truthfulness and intentions", "Hadith on prayer, fasting, Zakat and Hajj", "Hadith on family, community and character", "Hadith on the Hereafter, death and remembrance of Allah"] },
      { module: "Module 3: Selected Hadith from Bukhari & Muslim", lessons: ["40 Hadith of Imam Nawawi — detailed study", "Hadith on Islamic creed and worship", "Hadith on transactions, ethics and social relations", "Understanding chain of narration (Isnad) analysis"] },
    ],
    forWhom: ["Muslims wanting to learn Islam from authentic prophetic sources", "Students of Islamic knowledge at all levels", "Those who want to verify the authenticity of commonly cited hadith"],
    prerequisites: "Basic understanding of Islamic beliefs (Iman) recommended",
    language: "English / Urdu",
    hoursPerWeek: "3-5 hours",
    photo: "photo-1434030216411-0b793f4b4173",
  },

  "Fundamentals of Islamic Beliefs": {
    longDesc: "This course provides a clear, comprehensive introduction to the six pillars of Iman — the foundational beliefs every Muslim must hold. Drawing from the Quran, authentic Hadith, and the Aqeedah of Ahlus Sunnah wal Jama'ah, you will develop a solid intellectual and spiritual grounding in Islamic theology. This is the essential starting point for anyone seeking to understand what Islam truly teaches about Allah, His Prophets, and the unseen.",
    outcomes: ["Understand and articulate the six pillars of Iman", "Believe in Allah with certainty based on rational and textual proof", "Understand the attributes of Allah (Asma wa Sifat)", "Know the roles and number of Prophets and Angels", "Believe in the divine books, Qadar, and the Day of Judgement", "Distinguish the Aqeedah of Ahlus Sunnah from deviant beliefs"],
    curriculum: [
      { module: "Module 1: Belief in Allah", lessons: ["Tawhid — the Oneness of Allah", "The names and attributes of Allah", "Rational proof for the existence of Allah", "Avoiding Shirk and its types"] },
      { module: "Module 2: Belief in Angels, Books & Prophets", lessons: ["Angels — their nature, roles and names", "The divine books and their status", "The Prophets — their number, qualities and mission", "The finality of the prophethood of Muhammad ﷺ"] },
      { module: "Module 3: Belief in the Hereafter & Qadar", lessons: ["The Day of Judgement and its signs", "Paradise (Jannah) and Hellfire (Jahannam)", "Qadar — divine decree and human free will", "Strengthening your Iman in daily life"] },
    ],
    forWhom: ["New Muslims seeking to understand their fundamental beliefs", "Muslims who want to articulate their faith clearly", "Anyone starting their formal Islamic studies journey"],
    prerequisites: "None — open to all",
    language: "English / Urdu",
    hoursPerWeek: "2-4 hours",
    photo: "photo-1564769662533-4f00a87b4056",
  },

  "Detailed Islamic Beliefs (Aqeedah)": {
    longDesc: "This advanced Aqeedah course takes you deep into Islamic theology, covering the classical texts of Ahlus Sunnah wal Jama'ah including Aqeedah al-Tahawiyyah and Aqeedah al-Wasitiyyah. You will study rational and textual proofs for Islamic beliefs, engage with classical and contemporary theological debates, and develop the ability to respond to doubts raised against Islam with scholarly confidence. This course is essential for students, callers to Islam, and anyone seeking firm conviction.",
    outcomes: ["Master the Aqeedah of Ahlus Sunnah wal Jama'ah from classical texts", "Study and explain the divine names and attributes in depth", "Respond to philosophical and atheistic challenges to Islam", "Understand the positions of deviant Islamic sects (Mutazila, Ashariyya, etc.)", "Apply rational and textual proofs to affirm Islamic beliefs", "Study the classical text Aqeedah al-Tahawiyyah in detail"],
    curriculum: [
      { module: "Module 1: Tawhid in Depth", lessons: ["Tawhid al-Uluhiyyah, Rububiyyah and Asma wa Sifat", "The divine attributes — affirmation and methodology", "Deviations in Tawhid — Shirk, Bidah, Ghuluww", "Rational proofs for Tawhid from creation and revelation"] },
      { module: "Module 2: Classical Aqeedah Texts", lessons: ["Study of Aqeedah al-Tahawiyyah", "Study of Aqeedah al-Wasitiyyah of Ibn Taymiyyah", "The Aqeedah of the Companions and Salaf", "Comparing Ahlus Sunnah with other Islamic sects"] },
      { module: "Module 3: Contemporary Theological Challenges", lessons: ["Responding to atheism and materialism from an Islamic perspective", "Reconciling science and Islamic belief", "Addressing common doubts about Allah's attributes", "Dawah application of advanced Aqeedah knowledge"] },
    ],
    forWhom: ["Students who have completed Fundamentals of Islamic Beliefs", "Callers to Islam (Dawah workers) needing theological depth", "Anyone confronting doubts about Islamic beliefs"],
    prerequisites: "Completion of Fundamentals of Islamic Beliefs or equivalent",
    language: "English / Urdu",
    hoursPerWeek: "4-6 hours",
    photo: "photo-1522202176988-66273c2fd55f",
  },

  "Islamic Etiquette & Manners": {
    longDesc: "The Prophet Muhammad ﷺ said: 'I was sent to perfect noble character.' This course explores the rich Islamic tradition of Adab — etiquette and manners — drawing from the Quran, Hadith, and the writings of classical scholars on refined character. You will learn the correct Islamic conduct in every dimension of daily life: eating, sleeping, greeting, relating to family, neighbours, and society, and how to nurture a heart filled with gratitude, humility and love.",
    outcomes: ["Practice the Sunnah in all dimensions of daily life", "Develop refined Islamic character (Husn al-Akhlaq)", "Apply correct Islamic etiquette with family and community", "Cultivate internal virtues: patience, gratitude, humility, sincerity", "Understand the spiritual dimensions behind Islamic manners", "Use daily acts as opportunities for worship and reward"],
    curriculum: [
      { module: "Module 1: Morning to Night — Sunnah Routines", lessons: ["Morning and evening Adhkar and their benefits", "Etiquette of eating, drinking and sleeping", "Etiquette of entering and leaving the home", "Etiquette of the Masjid"] },
      { module: "Module 2: Social Etiquette", lessons: ["Islamic greetings and their importance", "Etiquette with parents, spouses and children", "Etiquette with neighbours, guests and the community", "Controlling the tongue — backbiting, lying, arguments"] },
      { module: "Module 3: Character & Spiritual Refinement", lessons: ["The spiritual heart — purifying intentions", "Key virtues: patience (Sabr), gratitude (Shukr), trust (Tawakkul)", "Avoiding envy, arrogance and anger", "Building a character modelled on the Prophet ﷺ"] },
    ],
    forWhom: ["Muslims at all levels wanting to improve their daily practice", "Parents wanting to teach their children Islamic manners", "Anyone seeking to embody the character of the Prophet ﷺ"],
    prerequisites: "None — open to all",
    language: "English / Urdu",
    hoursPerWeek: "2-3 hours",
    photo: "photo-1516321318423-f06f85e504b3",
  },

  "Five Pillars of Islam": {
    longDesc: "The Five Pillars of Islam are the foundation on which a Muslim's entire religious life is built. This comprehensive course covers each pillar — Shahada, Salah, Zakat, Sawm and Hajj — in theological depth, practical detail and spiritual context. You will not only learn what to do but understand why, building a worship life that is both correct and spiritually meaningful. The course draws from authentic Fiqh sources and the Hadith of the Prophet ﷺ.",
    outcomes: ["Understand and articulate the theological significance of each pillar", "Perform Salah correctly with all its conditions and pillars", "Calculate and distribute Zakat accurately", "Observe Ramadan fasting with its correct conditions and etiquettes", "Understand the rituals of Hajj and its profound spiritual dimensions", "Identify and correct common errors in Islamic worship"],
    curriculum: [
      { module: "Module 1: Shahada & Salah", lessons: ["The Shahada — its meaning, conditions and implications", "Conditions and pillars of Salah", "The complete method of performing Salah (Hanafi / Shafi'i)", "Common mistakes in Salah and how to correct them"] },
      { module: "Module 2: Zakat & Sawm", lessons: ["The obligation of Zakat — who pays and who receives", "Calculating Zakat on wealth, gold, silver and trade", "The spiritual and social significance of Zakat", "Fasting in Ramadan — rules, conditions and etiquettes"] },
      { module: "Module 3: Hajj & Spiritual Dimensions", lessons: ["The history and significance of Hajj", "The rituals of Hajj and Umrah step by step", "Common mistakes during Hajj", "The spiritual transformation through the Five Pillars"] },
    ],
    forWhom: ["New Muslims learning the foundations of Islamic practice", "Muslims wanting to perform worship correctly according to Fiqh", "Anyone seeking a deeper understanding of Islamic worship"],
    prerequisites: "None — open to all",
    language: "English / Urdu",
    hoursPerWeek: "3-4 hours",
    photo: "photo-1481627834876-b7833e8f5570",
  },

  "Dars-e-Nizami": {
    longDesc: "Dars-e-Nizami is the traditional Islamic seminary curriculum that has produced Muslim scholars across the Indian subcontinent for over 300 years. This rigorous programme covers the complete spectrum of Islamic sciences: Arabic grammar (Sarf & Nahw), logic (Mantiq), rhetoric (Balagha), Islamic jurisprudence (Fiqh), its principles (Usul al-Fiqh), Hadith sciences, Tafseer, and Islamic theology (Aqeedah/Kalam). Our online adaptation delivers this classical curriculum under the guidance of qualified scholars, allowing you to pursue the traditional path of Islamic scholarship from anywhere in the world.",
    outcomes: ["Master classical Arabic grammar (Sarf and Nahw)", "Study the complete Dars-e-Nizami curriculum systematically", "Read and understand classical Islamic texts independently", "Study major works in Fiqh, Hadith, Tafseer and Aqeedah", "Develop the capacity for Islamic scholarly analysis (Ijtihad)", "Earn the traditional Dars-e-Nizami qualification"],
    curriculum: [
      { module: "Module 1: Arabic Sciences (Years 1-2)", lessons: ["Sarf (Arabic morphology) — Ilm al-Sarf", "Nahw (Arabic syntax) — Ilm al-Nahw", "Balagha (Arabic rhetoric and eloquence)", "Persian texts and classical Islamic literature"] },
      { module: "Module 2: Islamic Sciences (Years 3-5)", lessons: ["Usul al-Fiqh — principles of Islamic jurisprudence", "Fiqh — Hanafi jurisprudence from Hidaya and Kanz", "Tafseer — study of classical Tafseer works", "Mantiq (logic) and Islamic philosophy"] },
      { module: "Module 3: Hadith Sciences (Years 6-7)", lessons: ["Sahih Bukhari — the most authentic Hadith collection", "Sahih Muslim, Sunan Abu Dawud, Tirmidhi", "Mustalah al-Hadith — Hadith sciences and authentication", "Graduation, Ijazah and scholarly certification"] },
    ],
    forWhom: ["Dedicated students seeking traditional Islamic scholarship", "Those who aspire to become Islamic scholars or teachers", "Graduates of shorter Islamic courses seeking advanced depth"],
    prerequisites: "Completion of Quran Reading, Basic Aqeedah, and some Arabic language knowledge",
    language: "English / Urdu / Arabic",
    hoursPerWeek: "8-10 hours",
    photo: "photo-1507842217343-583bb7270b66",
  },

  "Islamic Sharia": {
    longDesc: "Sharia — Islamic law — is the comprehensive divine framework governing all aspects of Muslim life, derived from the Quran, Sunnah, scholarly consensus (Ijma) and analogy (Qiyas). This course provides a scholarly introduction to the sources, principles and contemporary applications of Sharia, covering worship, personal law, contracts, ethics and the relationship between Sharia and modern legal systems. Students gain the intellectual tools to understand, explain and defend Islamic law in any context.",
    outcomes: ["Understand the four primary sources of Islamic law", "Study the principles of Islamic jurisprudence (Usul al-Fiqh)", "Analyse contemporary legal questions through Islamic methodology", "Compare the four major schools of Fiqh (Hanafi, Maliki, Shafi'i, Hanbali)", "Understand Islamic criminal, family and financial law", "Engage confidently with Islamic law in contemporary discourse"],
    curriculum: [
      { module: "Module 1: Sources & Principles of Sharia", lessons: ["The Quran as a legal source", "The Sunnah and its role in legislation", "Ijma (scholarly consensus) and Qiyas (analogy)", "The objectives of Sharia (Maqasid al-Sharia)"] },
      { module: "Module 2: Major Areas of Islamic Law", lessons: ["Ibadat — laws of worship", "Muamalat — financial and contractual law", "Family law — marriage, divorce, inheritance", "Criminal law — Hudud, Qisas and Tazir"] },
      { module: "Module 3: Contemporary Sharia Issues", lessons: ["Islamic finance and banking — Halal and Haram transactions", "Bioethics — medical issues in Islamic law", "Sharia and human rights — addressing misconceptions", "Islamic law in non-Muslim majority countries"] },
    ],
    forWhom: ["Students of Islamic studies seeking legal knowledge", "Islamic finance and law professionals", "Muslims who want to understand and defend Sharia"],
    prerequisites: "Completion of Five Pillars of Islam and Fundamentals of Islamic Beliefs",
    language: "English / Urdu",
    hoursPerWeek: "4-6 hours",
    photo: "photo-1434030216411-0b793f4b4173",
  },

  "Finality of Prophethood (Khatm-e-Nabuwwat)": {
    longDesc: "The belief that Prophet Muhammad ﷺ is the final Prophet and Messenger of Allah is a cornerstone of Islamic faith — and its denial constitutes apostasy by scholarly consensus. This course provides a comprehensive scholarly study of Khatm-e-Nabuwwat: its Quranic and Hadith proofs, the historical scholarly consensus (Ijma), and a critical examination of movements that have challenged this belief. Students will emerge with deep conviction and the scholarly tools to protect this belief and respond to deviant claims.",
    outcomes: ["Cite and explain Quranic and Hadith proofs of Khatm-e-Nabuwwat", "Understand the scholarly consensus on the finality of prophethood", "Analyse the theological basis of the Qadiani/Ahmadiyya deviation", "Respond to common arguments used by claimants to prophethood", "Strengthen personal conviction in a pillar of Islamic belief", "Defend this belief in academic and public discourse"],
    curriculum: [
      { module: "Module 1: Quranic & Hadith Proofs", lessons: ["Surah Al-Ahzab 33:40 — the Seal of the Prophets", "Hadith: 'There is no Prophet after me'", "Other Quranic verses affirming the completeness of revelation", "The meaning of 'Khatam' in Arabic linguistics"] },
      { module: "Module 2: Scholarly Consensus & History", lessons: ["Ijma of the Companions and all four Imams", "Historical false prophets after the Prophet ﷺ", "The scholarly response to false prophethood claims", "Legal rulings regarding denial of Khatm-e-Nabuwwat"] },
      { module: "Module 3: Contemporary Challenges", lessons: ["The Qadiani/Ahmadiyya movement — origins and beliefs", "Academic refutation of Qadiani arguments", "The Bahai and other modern prophethood claimants", "Practical dawah in response to these movements"] },
    ],
    forWhom: ["Muslims wanting to strengthen their conviction in this belief", "Dawah workers engaging with Qadiani and related groups", "Students of Islamic theology and contemporary deviant movements"],
    prerequisites: "Completion of Fundamentals of Islamic Beliefs",
    language: "English / Urdu",
    hoursPerWeek: "3-4 hours",
    photo: "photo-1578662996442-48f60103fc96",
  },

  "Arabic Language": {
    longDesc: "Arabic is the language of the Quran, the Sunnah, and the entire tradition of Islamic scholarship. This course takes you from zero knowledge of Arabic to a working proficiency in reading, writing and understanding classical and modern Arabic. You will study grammar, vocabulary, reading comprehension, and conversational skills, with a strong focus on Quranic Arabic so your language skills directly enhance your relationship with the divine text.",
    outcomes: ["Read and understand Arabic texts independently", "Master essential Arabic grammar (Sarf and Nahw)", "Build a vocabulary of 1,000+ core Arabic words", "Understand Quranic Arabic without a translation", "Read classical Islamic texts with growing comprehension", "Communicate in Modern Standard Arabic"],
    curriculum: [
      { module: "Module 1: Foundations", lessons: ["Arabic alphabet, vowels and writing system", "Basic sentence structure (Jumla Ismiyya & Fi'liyya)", "Gender, number and noun-adjective agreement", "Introduction to verb forms and tenses (Past, Present, Command)"] },
      { module: "Module 2: Intermediate Grammar", lessons: ["Arabic morphology — word patterns (Awzan)", "Case endings (I'rab) — Nominative, Accusative, Genitive", "Definite and indefinite nouns (Al and Tanween)", "Reading and comprehending short Arabic passages"] },
      { module: "Module 3: Advanced Reading & Quranic Focus", lessons: ["Reading classical Arabic texts and Tafseer extracts", "Quranic Arabic — key vocabulary and grammatical features", "Arabic conversation and composition", "Independent reading of Islamic books in Arabic"] },
    ],
    forWhom: ["Muslims who want to understand the Quran in Arabic", "Students of Islamic sciences who need Arabic proficiency", "Anyone interested in learning the Arabic language from scratch"],
    prerequisites: "None — open to all levels (beginner through intermediate)",
    language: "English / Urdu",
    hoursPerWeek: "5-7 hours",
    photo: "photo-1522202176988-66273c2fd55f",
  },

  "Islamic Jurisprudence (Fiqh)": {
    longDesc: "Islamic Jurisprudence (Fiqh) provides the practical legal framework that governs a Muslim's entire religious and personal life. This course offers a systematic study of Fiqh across all major categories — Taharah (purity), Salah (prayer), Sawm (fasting), Zakat, Hajj, marriage, divorce, transactions and more — based on the Hanafi school of law with reference to other major schools where appropriate. You will learn to apply Islamic rulings to real-life situations with confidence and evidence.",
    outcomes: ["Apply correct rulings in all areas of personal worship", "Understand the legal proofs behind Islamic rulings", "Resolve common Fiqh questions using authentic scholarly references", "Study the Fiqh of Taharah, Salah, Zakat, Sawm and Hajj in depth", "Understand Islamic family law — marriage, divorce, inheritance", "Navigate contemporary Fiqh issues with scholarly guidance"],
    curriculum: [
      { module: "Module 1: Taharah & Salah", lessons: ["Types of water, purity and impurity (Najasah)", "Wudu, Ghusl and Tayammum in full detail", "The complete Fiqh of Salah — conditions, pillars and Wajibat", "Congregational prayer, Jumu'ah and missed prayers (Qadha)"] },
      { module: "Module 2: Zakat, Sawm & Hajj", lessons: ["Calculating Zakat on different types of wealth", "The Fiqh of Ramadan fasting — conditions, exemptions, expiation", "The obligatory acts of Hajj and Umrah", "Common mistakes in Hajj and their rulings"] },
      { module: "Module 3: Family & Financial Fiqh", lessons: ["Marriage — conditions, rights and obligations", "Divorce — Talaq, Khula, and their conditions", "Inheritance (Miraath) — calculating shares", "Islamic commercial law — Halal earnings and forbidden transactions"] },
    ],
    forWhom: ["Muslims who want to practise Islam with correct legal knowledge", "Students of Islamic sciences at intermediate to advanced level", "Islamic teachers and community leaders"],
    prerequisites: "Completion of Five Pillars of Islam or equivalent Islamic knowledge",
    language: "English / Urdu",
    hoursPerWeek: "4-6 hours",
    photo: "photo-1481627834876-b7833e8f5570",
  },

  "Islamic Philosophy & Theology": {
    longDesc: "Islamic Philosophy and Theology (Ilm al-Kalam) represents the intellectual tradition through which Muslim scholars engaged with questions of existence, knowledge, God and ethics through reason and revelation. This course covers classical Islamic philosophy from Al-Kindi and Al-Farabi to Ibn Sina and Al-Ghazali, as well as the science of Kalam as developed by the Asharites and Maturidites. Students will engage with the greatest minds of the Islamic intellectual tradition and develop the capacity for rigorous theological reasoning.",
    outcomes: ["Understand the major figures and schools of Islamic philosophy", "Study the science of Kalam (Islamic scholastic theology)", "Engage with philosophical proofs for God's existence", "Understand Islamic responses to Greek philosophy", "Analyse Al-Ghazali's critique of the philosophers (Tahafut al-Falasifa)", "Apply philosophical reasoning to contemporary questions about Islam"],
    curriculum: [
      { module: "Module 1: Introduction to Islamic Philosophy", lessons: ["The translation movement and reception of Greek philosophy", "Al-Kindi, Al-Farabi and their philosophical systems", "Ibn Sina (Avicenna) — metaphysics and the soul", "Islamic philosophical cosmology"] },
      { module: "Module 2: Ilm al-Kalam — Islamic Theology", lessons: ["The emergence of Kalam and its schools", "The Asharite school — Al-Ashari and his legacy", "The Maturidite school — Al-Maturidi and his contribution", "Key theological debates: free will, divine attributes, creation of the Quran"] },
      { module: "Module 3: Al-Ghazali & Philosophical Critique", lessons: ["Al-Ghazali's life and intellectual journey", "Tahafut al-Falasifa — incoherence of the philosophers", "Ibn Rushd (Averroes) — the response", "Contemporary relevance of Islamic philosophical tradition"] },
    ],
    forWhom: ["Advanced students of Islamic sciences seeking intellectual depth", "Those engaged in interfaith dialogue and academic theology", "Muslims interested in the philosophical dimensions of their faith"],
    prerequisites: "Completion of Detailed Islamic Beliefs (Aqeedah) strongly recommended",
    language: "English / Urdu",
    hoursPerWeek: "4-6 hours",
    photo: "photo-1543269865-cbf427effbad",
  },

  "Stories of the Prophets": {
    longDesc: "The Quran describes the stories of the Prophets as the best of narratives, containing timeless wisdom, spiritual lessons and divine guidance for all of humanity. This course takes you through the lives of all the Prophets mentioned in the Quran — from Adam to Isa (Jesus) — drawing from Quranic verses, authentic Hadith and the scholarly tradition of Qisas al-Anbiya. Each story is presented with its Quranic evidence, spiritual lessons and contemporary relevance.",
    outcomes: ["Know the life story of every Prophet mentioned in the Quran", "Extract spiritual and moral lessons from each story", "Understand how the stories of the Prophets build Iman", "Identify the central themes across all Prophetic stories", "Connect the stories of the Prophets to current life challenges", "Appreciate the unity and continuity of the divine message"],
    curriculum: [
      { module: "Module 1: The First Prophets", lessons: ["Prophet Adam — creation, the fall and repentance", "Prophets Idris, Nuh and the great flood", "Prophets Hud, Salih and their nations", "Prophet Ibrahim — the Friend of Allah"] },
      { module: "Module 2: The Middle Prophets", lessons: ["Prophet Lut and the destruction of his people", "Prophets Ismail, Ishaq, Yaqub and Yusuf", "Prophets Ayyub, Shuaib, Musa and Harun", "Prophets Dawud and Sulayman — kingdom and wisdom"] },
      { module: "Module 3: The Later Prophets & Lessons", lessons: ["Prophets Ilyas, Al-Yasa, Dhul-Kifl, Yunus and Zakariyya", "Prophet Yahya and Prophet Isa (Jesus) in Islam", "The seal of the Prophets — Muhammad ﷺ", "Overarching themes and lessons from the Prophetic stories"] },
    ],
    forWhom: ["Muslims of all ages seeking to learn from Prophetic wisdom", "Parents who want to teach their children Islamic stories", "Anyone seeking Quranic storytelling and its spiritual lessons"],
    prerequisites: "None — open to all",
    language: "English / Urdu",
    hoursPerWeek: "2-4 hours",
    photo: "photo-1609599006353-e629aaabfcfb",
  },

  "Biography of Prophet Muhammad PBUH": {
    longDesc: "The Seerah of the Prophet Muhammad ﷺ is the most detailed and authenticated biography of any human being in history. This course takes you through every dimension of the Prophet's life — his birth, childhood, prophethood, migration to Madinah, battles, family life, character and final years — drawing from authentic Hadith sources and the great Seerah works of Ibn Hisham, Ibn Kathir and others. Understanding the Prophet's life is not merely historical — it is the blueprint for every Muslim's life.",
    outcomes: ["Know the complete biography of the Prophet ﷺ from birth to death", "Understand the historical context of early Islam", "Draw practical lessons from the Prophet's character and decisions", "Appreciate the Prophet's extraordinary mercy, wisdom and leadership", "Study the major battles and diplomatic events of Islamic history", "Increase love for the Prophet ﷺ through deep knowledge of his life"],
    curriculum: [
      { module: "Module 1: Makkah — The Early Years", lessons: ["Arabia before Islam — social, religious and political context", "The birth and childhood of the Prophet ﷺ", "The first revelation — the beginning of prophethood", "The early Muslims and the persecution in Makkah"] },
      { module: "Module 2: Madinah — The Islamic State", lessons: ["The Hijrah — migration to Madinah and its significance", "The Constitution of Madinah — the first Islamic state", "The battles of Badr, Uhud and Khandaq", "Diplomatic missions, treaties and the expansion of Islam"] },
      { module: "Module 3: The Final Years & Legacy", lessons: ["The conquest of Makkah — a mercy without parallel", "The Farewell Pilgrimage and the final sermon", "The Prophet's ﷺ character, family and companions", "The Prophet's legacy and its impact on the world"] },
    ],
    forWhom: ["All Muslims who love the Prophet ﷺ and want to know him better", "Students of Islamic history and civilisation", "Those who want to model their character on the best of creation"],
    prerequisites: "None — open to all",
    language: "English / Urdu",
    hoursPerWeek: "3-5 hours",
    photo: "photo-1585036401990-e3e49d0f1e85",
  },

  "Critical Study of Liberal Ideologies": {
    longDesc: "In an era where liberal, secular and postmodern ideas challenge Islamic values on every front, Muslims need the intellectual tools to engage with these ideologies critically and confidently from an Islamic standpoint. This course examines the major Western ideological frameworks — secularism, liberalism, feminism, postmodernism and atheism — through the lens of Islamic epistemology and scholarship. Students will understand these movements' origins and claims, evaluate them critically, and articulate coherent Islamic responses.",
    outcomes: ["Understand the historical origins of secularism, liberalism and postmodernism", "Critically analyse feminist ideology from an Islamic perspective", "Respond to atheism and materialism with Islamic philosophical tools", "Articulate the Islamic alternative to liberal human rights frameworks", "Navigate contemporary social media debates with scholarly confidence", "Understand how liberalism infiltrates Muslim communities and how to respond"],
    curriculum: [
      { module: "Module 1: Foundations of Liberal Ideology", lessons: ["The Enlightenment and the birth of secularism", "Classical liberalism — liberty, individualism and rights", "The secular state and the separation of religion and law", "Islamic epistemology vs. empiricism and rationalism"] },
      { module: "Module 2: Atheism, Feminism & Postmodernism", lessons: ["Atheism and materialism — origins, arguments and Islamic refutations", "Darwinian evolution and Islamic theology", "Third-wave feminism — claims, contradictions and Islamic critique", "Postmodernism and the attack on objective truth and revelation"] },
      { module: "Module 3: The Islamic Alternative", lessons: ["Islamic political philosophy vs. liberal democracy", "Islamic gender roles vs. liberal gender ideology", "Islamic economics vs. capitalism and socialism", "Building Muslim identity in a liberal society"] },
    ],
    forWhom: ["Muslim students and professionals navigating secular environments", "Islamic educators and community leaders addressing contemporary doubts", "Anyone who wants to think critically about Western ideological influence on Muslim identity"],
    prerequisites: "Completion of Fundamentals of Islamic Beliefs recommended",
    language: "English",
    hoursPerWeek: "3-5 hours",
    photo: "photo-1516321318423-f06f85e504b3",
  },
}
