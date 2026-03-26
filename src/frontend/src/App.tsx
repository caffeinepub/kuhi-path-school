import {
  ChevronRight,
  Clock,
  Mail,
  MapPin,
  Menu,
  Phone,
  Star,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { SiFacebook, SiInstagram, SiYoutube } from "react-icons/si";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Life at Kuhi Path", href: "#life" },
  { label: "Events", href: "#events" },
  { label: "Tuitions", href: "#tuitions" },
  { label: "Contact", href: "#contact" },
];

const PROGRAMS = [
  {
    icon: "🎨",
    title: "Art",
    description:
      "Unleash your creativity with our structured Art classes. From basic sketching to expressive painting, students develop an eye for beauty and a hand for craft — one brushstroke at a time.",
  },
  {
    icon: "💃",
    title: "Dance",
    description:
      "Move with grace and rhythm in our vibrant Dance program. We train students in classical, folk, and contemporary dance forms including Bihu and Sattriya, nurturing stage confidence and cultural pride.",
  },
  {
    icon: "🎸",
    title: "Guitar",
    description:
      "From your first chord to your first song — our Guitar classes take beginners through a structured, enjoyable journey into music. Learn acoustic and basic lead techniques with patient, skilled instructors.",
  },
  {
    icon: "🥁",
    title: "Tabla",
    description:
      "Discover the heartbeat of Indian classical music. Our Tabla classes build rhythmic precision, coordination, and a deep appreciation for this timeless percussion instrument.",
  },
  {
    icon: "🎹",
    title: "Piano",
    description:
      "Whether it's your child's first musical step or your own dream deferred — our Piano classes offer personalized coaching in notes, scales, and beautiful melodies for all age groups.",
  },
  {
    icon: "🧘",
    title: "Yoga",
    description:
      "Reconnect with your body and calm your mind. Our Yoga sessions offer guided asanas, breathing exercises, and mindfulness practices designed for children and adults seeking balance in daily life.",
  },
  {
    icon: "💻",
    title: "Computer",
    description:
      "Equip yourself for the digital age. Our Computer classes cover essential skills — MS Office, internet literacy, typing, and introductory programming — taught practically for real-world readiness.",
  },
  {
    icon: "🎵",
    title: "Music & Vocals",
    description:
      "Explore the world of Indian and contemporary music in our Music classes. Students learn vocal training, harmonium, and music theory under experienced musicians who make learning truly joyful.",
  },
  {
    icon: "📚",
    title: "Academic Tuitions",
    description:
      "Secure your child's academic future with our day tuition program for Classes I to XII. All subjects, small batches, personalized attention, and regular doubt-clearing sessions — because every child deserves to excel.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Kuhi Path has transformed my daughter's confidence. She now performs Sattriya dance on stage and her grades have improved remarkably. The teachers truly care.",
    name: "Priyanka Bora",
    role: "Parent of Class VII student",
    rating: 5,
  },
  {
    quote:
      "I joined the computer classes not knowing anything. Within three months, I can use a computer for work. The friendly environment makes learning so easy.",
    name: "Raju Kalita",
    role: "Adult learner",
    rating: 5,
  },
  {
    quote:
      "My son loves the music classes here. He started with zero knowledge and now plays harmonium and sings Bihu geet beautifully. Highly recommend!",
    name: "Dipak Saikia",
    role: "Parent of Class V student",
    rating: 5,
  },
];

const EVENTS_PHOTOS = [
  {
    src: "/assets/uploads/whatsapp_image_2026-03-25_at_2.23.32_pm-019d28e0-6577-767c-8290-b6179b144572-1.jpeg",
    alt: "Stage performance at Kuhi Path night event",
  },
  {
    src: "/assets/uploads/whatsapp_image_2026-03-25_at_2.11.36_pm_1-019d28e0-6b1a-71ed-a476-bbe6342a1a79-4.jpeg",
    alt: "Children's Day 2025 celebration with drawing and balloons",
  },
  {
    src: "/assets/uploads/whatsapp_image_2026-03-25_at_2.23.32_pm_2-019d28e0-6b42-7289-9a6f-18ff71bb847e-5.jpeg",
    alt: "Jubin Garg tribute event with candles",
  },
  {
    src: "/assets/uploads/0d3069bc-9675-4188-850f-5241eef58880-019d28e0-71db-7628-b5ae-efa3bb01eed4-8.png",
    alt: "Award ceremony on stage at Kuhi Path",
  },
];

const STAR_POSITIONS = [1, 2, 3, 4, 5];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F6EBD6] font-sans">
      {/* ── HEADER ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#FAF7F0] shadow-header" : "bg-[#FAF7F0]/95"
        }`}
        data-ocid="header.panel"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#home"
              className="flex items-center gap-3"
              data-ocid="header.link"
            >
              <div className="w-10 h-10 rounded-full bg-[#C95A2E] flex items-center justify-center text-white text-lg font-bold shadow-md">
                🌿
              </div>
              <div>
                <span className="font-serif font-bold text-xl text-[#1F2E33] tracking-tight leading-none block">
                  Kuhi Path
                </span>
                <span className="text-[10px] text-[#4B4F52] uppercase tracking-widest">
                  Shikhsha Kendra · Lokhra, Guwahati
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-8"
              aria-label="Primary navigation"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-[#4B4F52] hover:text-[#C95A2E] transition-colors duration-200"
                  data-ocid="nav.link"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-[#C95A2E] text-white text-sm font-semibold uppercase tracking-wide hover:bg-[#A8461F] transition-colors duration-200 shadow-sm"
                data-ocid="header.primary_button"
              >
                Enroll Now
              </a>
              <button
                type="button"
                className="lg:hidden p-2 rounded-md text-[#1F2E33] hover:bg-[#E6D7BE] transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                data-ocid="nav.toggle"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-[#FAF7F0] border-t border-[#E6D7BE] overflow-hidden"
            >
              <nav className="flex flex-col px-4 py-4 gap-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="py-2.5 px-3 rounded-md text-[#1F2E33] font-medium hover:bg-[#E6D7BE] transition-colors"
                    data-ocid="mobile.nav.link"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="mt-2 py-3 px-3 rounded-full bg-[#C95A2E] text-white text-center font-semibold uppercase tracking-wide"
                  data-ocid="mobile.enroll_button"
                >
                  Enroll Now
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── HERO ── */}
      <section
        id="home"
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16"
        data-ocid="hero.section"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-bg.dim_1400x700.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1F2E33]/60 via-[#1F2E33]/30 to-[#F6EBD6]/80" />

        <img
          src="/assets/generated/gamocha-motif.dim_400x80.png"
          alt=""
          aria-hidden="true"
          className="absolute top-16 left-0 w-40 sm:w-56 opacity-70 object-cover"
        />
        <img
          src="/assets/generated/gamocha-motif.dim_400x80.png"
          alt=""
          aria-hidden="true"
          className="absolute top-16 right-0 w-40 sm:w-56 opacity-70 object-cover scale-x-[-1]"
        />
        <img
          src="/assets/generated/assam-badge-transparent.dim_200x200.png"
          alt=""
          aria-hidden="true"
          className="absolute bottom-8 left-4 sm:left-8 w-16 sm:w-24 opacity-60"
        />
        <img
          src="/assets/generated/assam-badge-transparent.dim_200x200.png"
          alt=""
          aria-hidden="true"
          className="absolute bottom-8 right-4 sm:right-8 w-16 sm:w-24 opacity-60"
        />

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#E07050] mb-4"
          >
            Welcome to Kuhi Path Shikhsha Kendra
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
          >
            Nurturing Minds,
            <br />
            <span className="text-[#E8B08A]">Enriching Roots</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-white/90 mb-10 leading-relaxed"
          >
            A holistic learning center in Lokhra, Guwahati, Assam — where
            academic excellence meets the rich tapestry of Assamese arts, music,
            dance, and culture.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#programs"
              className="px-8 py-3.5 rounded-full bg-[#C95A2E] text-white font-semibold uppercase tracking-wide hover:bg-[#A8461F] transition-colors duration-200 shadow-lg"
              data-ocid="hero.primary_button"
            >
              Explore Our Programs
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full border-2 border-white text-white font-semibold uppercase tracking-wide hover:bg-white/10 transition-colors duration-200"
              data-ocid="hero.secondary_button"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section
        id="about"
        className="py-20 bg-[#FAF7F0]"
        data-ocid="about.section"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C95A2E] mb-3">
                Our Story
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F2E33] mb-6 leading-snug">
                A School Rooted in
                <br />
                Culture &amp; Excellence
              </h2>
              <p className="text-[#4B4F52] leading-relaxed mb-4">
                Kuhi Path Shikhsha Kendra was founded with a heartfelt mission —
                to provide children and adults in Lokhra and surrounding areas
                of Guwahati with a space where learning is joyful, holistic, and
                deeply connected to our Assamese heritage.
              </p>
              <p className="text-[#4B4F52] leading-relaxed mb-6">
                We believe every child carries a unique spark. Whether it is a
                flair for the arts, a love of rhythm, the curiosity of a coder,
                or the stillness found in yoga — we create the environment for
                that spark to become a flame.
              </p>
              <div className="flex flex-wrap gap-6">
                {[
                  { value: "10+", label: "Years of Excellence" },
                  { value: "500+", label: "Happy Students" },
                  { value: "9", label: "Programs Offered" },
                  { value: "20+", label: "Expert Instructors" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-serif text-2xl font-bold text-[#C95A2E]">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[#4B4F52] mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex-1 relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-card">
                <img
                  src="/assets/uploads/whatsapp_image_2026-03-25_at_2.11.33_pm-019d28e0-6a57-72cd-b0e8-481ddaf5706f-3.jpeg"
                  alt="Certificate distribution ceremony at Kuhi Path Shikhsha Kendra"
                  className="w-full h-72 sm:h-80 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-xl overflow-hidden border-4 border-[#FAF7F0] shadow-card hidden sm:block">
                <img
                  src="/assets/generated/assam-badge-transparent.dim_200x200.png"
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-cover bg-[#E6D7BE]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section
        id="programs"
        className="py-20 bg-[#F6EBD6]"
        data-ocid="programs.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C95A2E] mb-3">
              What We Offer
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F2E33] mb-4">
              Our Programs
            </h2>
            <div className="w-16 h-1 bg-[#C95A2E] mx-auto rounded-full" />
            <p className="mt-5 text-[#4B4F52] max-w-xl mx-auto">
              From creative arts to academic support, each program at Kuhi Path
              Shikhsha Kendra is designed to bring out the best in every
              learner.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAMS.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="bg-[#FAF7F0] rounded-2xl p-7 shadow-card hover:shadow-lg transition-shadow duration-300 group"
                data-ocid={`programs.item.${index + 1}`}
              >
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3 className="font-serif text-lg font-bold text-[#1F2E33] mb-2">
                  {program.title}
                </h3>
                <p className="text-sm text-[#4B4F52] leading-relaxed mb-4">
                  {program.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#C95A2E] hover:text-[#A8461F] transition-colors"
                  data-ocid={`programs.link.${index + 1}`}
                >
                  Enquire Now <ChevronRight size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIFE + TESTIMONIALS ── */}
      <section
        id="life"
        className="py-20 bg-[#FAF7F0]"
        data-ocid="life.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C95A2E] mb-3">
                Experience
              </p>
              <h2 className="font-serif text-3xl font-bold text-[#1F2E33] mb-6">
                Life at Kuhi Path Shikhsha Kendra
              </h2>
              <p className="text-[#4B4F52] leading-relaxed mb-8">
                At Kuhi Path Shikhsha Kendra, every day is a celebration of
                learning. Students engage in hands-on activities, cultural
                events, annual Bihu programs, art exhibitions, and yoga camps —
                building not just skills but lifelong memories and friendships.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden aspect-video shadow-card">
                  <img
                    src="/assets/uploads/whatsapp_image_2026-03-25_at_2.11.32_pm_1-019d28e0-69c2-70bb-a70d-8ea9574c2b93-2.jpeg"
                    alt="Kuhipath Dance Group 2024-2025 with trophies"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden aspect-video shadow-card">
                  <img
                    src="/assets/uploads/whatsapp_image_2026-03-25_at_2.23.33_pm_2-019d28e0-6bb6-707b-ae14-271c754ecea0-6.jpeg"
                    alt="Students in classroom at Kuhi Path"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="col-span-2 rounded-xl overflow-hidden shadow-card"
                  style={{ height: "160px" }}
                >
                  <img
                    src="/assets/uploads/whatsapp_image_2026-03-25_at_2.23.34_pm-019d28e0-6c1f-706a-9ff0-a63cb9e23a39-7.jpeg"
                    alt="Cultural event at Kuhi Path Shikhsha Kendra"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="col-span-2 rounded-xl overflow-hidden shadow-card"
                  style={{ height: "160px" }}
                >
                  <img
                    src="/assets/uploads/whatsapp_image_2026-03-25_at_2.11.36_pm-019d28ef-57b3-7446-8529-614a8a81c293-1.jpeg"
                    alt="Children's Day celebration at Kuhi Path Shikhsha Kendra"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C95A2E] mb-3">
                Testimonials
              </p>
              <h2 className="font-serif text-3xl font-bold text-[#1F2E33] mb-6">
                Hear from Our Community
              </h2>
              <div className="flex flex-col gap-5">
                {TESTIMONIALS.map((t, index) => (
                  <motion.div
                    key={t.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-[#F6EBD6] rounded-xl p-6 border border-[#E6D7BE]"
                    data-ocid={`testimonials.item.${index + 1}`}
                  >
                    <div className="flex gap-1 mb-3">
                      {STAR_POSITIONS.filter((pos) => pos <= t.rating).map(
                        (pos) => (
                          <Star
                            key={pos}
                            size={14}
                            className="fill-[#C95A2E] text-[#C95A2E]"
                          />
                        ),
                      )}
                    </div>
                    <p className="text-sm text-[#4B4F52] leading-relaxed italic mb-4">
                      "{t.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#C95A2E] flex items-center justify-center text-white text-sm font-bold">
                        {t.name[0]}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#1F2E33]">
                          {t.name}
                        </div>
                        <div className="text-xs text-[#4B4F52]">{t.role}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── EVENTS & HIGHLIGHTS ── */}
      <section
        id="events"
        className="py-16 bg-[#F6EBD6]"
        data-ocid="events.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C95A2E] mb-2">
              Moments That Matter
            </p>
            <h2 className="font-serif text-3xl font-bold text-[#1F2E33]">
              Events &amp; Highlights
            </h2>
          </div>
          <div
            className="flex gap-4 overflow-x-auto pb-4"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#C95A2E #E6D7BE",
            }}
          >
            {EVENTS_PHOTOS.map((photo, index) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex-shrink-0 rounded-2xl overflow-hidden shadow-card border border-[#E6D7BE]"
                style={{ height: "200px", width: "300px" }}
                data-ocid={`events.item.${index + 1}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TUITIONS ── */}
      <section
        id="tuitions"
        className="py-20 bg-[#0F4B52] text-white"
        data-ocid="tuitions.section"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E8B08A] mb-3">
              Academic Excellence
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6">
              Day Tuitions for All Classes
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto leading-relaxed mb-10">
              We offer comprehensive day tuition programs for students from
              Class I to Class XII, covering all subjects including Mathematics,
              Science, English, Social Studies, and Assamese. Small batch sizes
              ensure every student gets individual attention.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
              {[
                { label: "Class I–V", desc: "Primary" },
                { label: "Class VI–VIII", desc: "Middle School" },
                { label: "Class IX–X", desc: "High School" },
                { label: "Class XI–XII", desc: "Higher Secondary" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white/10 rounded-xl p-5 border border-white/20"
                >
                  <div className="font-serif font-bold text-lg text-white">
                    {item.label}
                  </div>
                  <div className="text-xs text-white/60 mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-flex px-8 py-3.5 rounded-full bg-[#C95A2E] text-white font-semibold uppercase tracking-wide hover:bg-[#A8461F] transition-colors duration-200 shadow-lg"
              data-ocid="tuitions.primary_button"
            >
              Enquire About Tuitions
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        id="contact"
        className="py-20 bg-[#F6EBD6]"
        data-ocid="contact.section"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C95A2E] mb-3">
              Reach Us
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F2E33] mb-4">
              Get in Touch
            </h2>
            <div className="w-16 h-1 bg-[#C95A2E] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div>
                <h3 className="font-serif text-xl font-bold text-[#1F2E33] mb-4">
                  Visit or Contact Us
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#C95A2E]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-[#C95A2E]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#1F2E33]">
                        Address
                      </div>
                      <div className="text-sm text-[#4B4F52]">
                        Kuhi Path Shikhsha Kendra
                        <br />
                        Garbhanga Rd, opposite Adarsha Jatiya Vidyalay
                        <br />
                        Lokhra, Guwahati, Assam 781040
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#C95A2E]/10 flex items-center justify-center flex-shrink-0">
                      <Phone size={18} className="text-[#C95A2E]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#1F2E33]">
                        Phone
                      </div>
                      <a
                        href="tel:+918414092634"
                        className="text-sm text-[#4B4F52] hover:text-[#C95A2E] transition-colors"
                      >
                        084140 92634
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#C95A2E]/10 flex items-center justify-center flex-shrink-0">
                      <Clock size={18} className="text-[#C95A2E]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#1F2E33]">
                        Hours
                      </div>
                      <div className="text-sm text-[#4B4F52]">
                        Mon–Sun: 7:00 AM – 7:00 PM
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#C95A2E]/10 flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-[#C95A2E]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#1F2E33]">
                        Email
                      </div>
                      <div className="text-sm text-[#4B4F52]">
                        info@kuhipathschool.in
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#FAF7F0] rounded-xl p-5 border border-[#E6D7BE]">
                <p className="text-sm font-semibold text-[#1F2E33] mb-1">
                  Admissions Open
                </p>
                <p className="text-sm text-[#4B4F52]">
                  New batches begin in April and October. Walk in or call us to
                  enquire about enrollment, fees, and schedules.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-[#FAF7F0] rounded-2xl p-7 shadow-card border border-[#E6D7BE]"
              data-ocid="contact.panel"
            >
              <h3 className="font-serif text-xl font-bold text-[#1F2E33] mb-5">
                Enrollment Enquiry
              </h3>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold text-[#1F2E33] mb-1.5 uppercase tracking-wide"
                  >
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#F6EBD6] border border-[#E6D7BE] text-[#1F2E33] placeholder:text-[#4B4F52]/50 focus:outline-none focus:ring-2 focus:ring-[#C95A2E]/30 focus:border-[#C95A2E] transition-colors text-sm"
                    data-ocid="contact.input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-xs font-semibold text-[#1F2E33] mb-1.5 uppercase tracking-wide"
                  >
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    placeholder="+91 xxxxx xxxxx"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#F6EBD6] border border-[#E6D7BE] text-[#1F2E33] placeholder:text-[#4B4F52]/50 focus:outline-none focus:ring-2 focus:ring-[#C95A2E]/30 focus:border-[#C95A2E] transition-colors text-sm"
                    data-ocid="contact.input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-program"
                    className="block text-xs font-semibold text-[#1F2E33] mb-1.5 uppercase tracking-wide"
                  >
                    Program of Interest
                  </label>
                  <select
                    id="contact-program"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#F6EBD6] border border-[#E6D7BE] text-[#1F2E33] focus:outline-none focus:ring-2 focus:ring-[#C95A2E]/30 focus:border-[#C95A2E] transition-colors text-sm"
                    data-ocid="contact.select"
                  >
                    <option value="">Select a program…</option>
                    <option>Art</option>
                    <option>Dance</option>
                    <option>Guitar</option>
                    <option>Tabla</option>
                    <option>Piano</option>
                    <option>Yoga</option>
                    <option>Computer</option>
                    <option>Music &amp; Vocals</option>
                    <option>Academic Tuitions</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-[#1F2E33] mb-1.5 uppercase tracking-wide"
                  >
                    Message (Optional)
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    placeholder="Any questions or notes…"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#F6EBD6] border border-[#E6D7BE] text-[#1F2E33] placeholder:text-[#4B4F52]/50 focus:outline-none focus:ring-2 focus:ring-[#C95A2E]/30 focus:border-[#C95A2E] transition-colors text-sm resize-none"
                    data-ocid="contact.textarea"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#C95A2E] text-white font-semibold uppercase tracking-wide hover:bg-[#A8461F] transition-colors duration-200 shadow-sm"
                  data-ocid="contact.submit_button"
                >
                  Send Enquiry
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="bg-[#0F4B52] text-[#E9F0EF]"
        data-ocid="footer.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#C95A2E] flex items-center justify-center text-white text-lg font-bold">
                  🌿
                </div>
                <div>
                  <div className="font-serif font-bold text-xl text-white">
                    Kuhi Path
                  </div>
                  <div className="text-[10px] text-white/50 uppercase tracking-widest">
                    Shikhsha Kendra · Guwahati
                  </div>
                </div>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                Nurturing minds and enriching roots in Lokhra, Guwahati through
                arts, music, dance, academics, and wellness since 2014.
              </p>
              <div className="flex gap-3 mt-5">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C95A2E] flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                  data-ocid="footer.link"
                >
                  <SiFacebook size={16} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C95A2E] flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                  data-ocid="footer.link"
                >
                  <SiInstagram size={16} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C95A2E] flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                  data-ocid="footer.link"
                >
                  <SiYoutube size={16} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                About
              </h4>
              <ul className="space-y-2.5">
                {[
                  "Our Story",
                  "Our Mission",
                  "Faculty",
                  "Facilities",
                  "Gallery",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#about"
                      className="text-sm text-white/65 hover:text-[#E8B08A] transition-colors"
                      data-ocid="footer.link"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Programs
              </h4>
              <ul className="space-y-2.5">
                {[
                  "Art",
                  "Dance",
                  "Guitar",
                  "Tabla",
                  "Piano",
                  "Yoga",
                  "Computer",
                  "Music & Vocals",
                  "Academic Tuitions",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#programs"
                      className="text-sm text-white/65 hover:text-[#E8B08A] transition-colors"
                      data-ocid="footer.link"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Contact Us
              </h4>
              <ul className="space-y-3">
                <li className="flex gap-2.5 text-sm text-white/65">
                  <MapPin
                    size={15}
                    className="mt-0.5 flex-shrink-0 text-[#E8B08A]"
                  />
                  Garbhanga Rd, opposite Adarsha Jatiya Vidyalay, Lokhra,
                  Guwahati, Assam 781040
                </li>
                <li className="flex gap-2.5 text-sm text-white/65">
                  <Phone size={15} className="flex-shrink-0 text-[#E8B08A]" />
                  <a
                    href="tel:+918414092634"
                    className="hover:text-[#E8B08A] transition-colors"
                  >
                    084140 92634
                  </a>
                </li>
                <li className="flex gap-2.5 text-sm text-white/65">
                  <Clock
                    size={15}
                    className="flex-shrink-0 text-[#E8B08A] mt-0.5"
                  />
                  Mon–Sun: 7:00 AM – 7:00 PM
                </li>
                <li className="flex gap-2.5 text-sm text-white/65">
                  <Mail size={15} className="flex-shrink-0 text-[#E8B08A]" />
                  info@kuhipathschool.in
                </li>
              </ul>
              <a
                href="#contact"
                className="inline-block mt-5 px-5 py-2 rounded-full border border-[#C95A2E] text-[#E8B08A] text-sm font-semibold hover:bg-[#C95A2E] hover:text-white transition-colors"
                data-ocid="footer.primary_button"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/40">
            <span>
              © {new Date().getFullYear()} Kuhi Path Shikhsha Kendra, Lokhra,
              Guwahati, Assam. All rights reserved.
            </span>
            <span>
              Built with ❤️ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/70 underline transition-colors"
              >
                caffeine.ai
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
