"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";

/* ================= HOME SECTIONS ================= */
import HomeIntro from "../home/HomeIntro";
import HomeIntro2 from "../home/HomeIntro2";
import HomeProcess from "../home/HomeProcess";
import HomeAreas from "../home/HomeAreas";
import HomeReviews from "../home/HomeReviews";
import HomeCTA from "../home/HomeCTA";
import { HomeFAQ } from "../HomeFAQ";

/* ================= ICONS ================= */
import { FaHome, FaBriefcase, FaShieldAlt, FaCertificate, FaLeaf, FaChild } from "react-icons/fa";

/* ================= HERO IMAGE ================= */
import HeroImage from "../../assets/bg.jpg";

/* ================= FAQ DATA ================= */
const faqData = [
  {
    question: "What is included in your deep cleaning service?",
    answer:
      "Our deep cleaning includes kitchens, bathrooms, living areas, bedrooms, offices, and commercial spaces. We pay attention to detail and use eco-friendly cleaning products.",
  },
  {
    question: "Do you provide end-of-tenancy cleaning?",
    answer:
      "Yes, we specialise in end-of-tenancy and post-renovation deep cleaning to help tenants and landlords meet inspection standards.",
  },
  {
    question: "Are your cleaners insured and trained?",
    answer:
      "Absolutely. All our cleaners are trained, certified, and fully insured for peace of mind.",
  },
  {
    question: "How can I get a free quote?",
    answer:
      "You can request a free quote via our website, WhatsApp, phone, or email. We respond fast with transparent pricing.",
  },
];

/* ================= STORYCARD COMPONENT ================= */
interface StoryCardProps {
  children: React.ReactNode;
  bgImage?: string;
}

function StoryCard({ children, bgImage }: StoryCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.97, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [0, 0.5, 1]);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex items-center justify-center snap-start overflow-hidden"
    >
      {bgImage && (
        <motion.div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${bgImage})`, scale }}
        />
      )}
      {bgImage && <div className="absolute inset-0 bg-black/30" />}
      <motion.div
        className="relative max-w-6xl px-6 text-center w-full"
        style={{ y, opacity }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}

/* ================= INTERNAL DEEP CLEANING CONTENT ================= */
function DeepCleaningContent() {
  const badges = [
    { icon: <FaHome />, text: "Fully Insured Cleaners" },
    { icon: <FaBriefcase />, text: "Flexible Cleaning Plans" },
    { icon: <FaLeaf />, text: "Eco-Friendly Products" },
    { icon: <FaShieldAlt />, text: "Trusted Local Professionals" },
    { icon: <FaChild />, text: "Safe for Children & Pets" },
    { icon: <FaCertificate />, text: "Consistent Quality Cleaning" },
  ];

  const heroButtons = [
    { label: "Get a Free Quote", href: "/contact", primary: true },
    { label: "Speak to Our Team", href: "/contact" },
  ];

  const featureCards = [
    {
      title: "Weekly & Fortnightly Cleaning",
      description:
        "Scheduled cleaning that fits your routine and keeps your space looking its best.",
    },
    {
      title: "Professional Trusted Cleaners",
      description:
        "Fully vetted, insured, and trained professionals you can rely on.",
    },
    {
      title: "Custom Cleaning Checklist",
      description:
        "Your priorities, your way — kitchens, bathrooms, bedrooms, and more.",
    },
    {
      title: "Eco-Friendly Products",
      description:
        "Safe, non-toxic products for families, pets, and the environment.",
    },
    {
      title: "Consistent High Standards",
      description:
        "The same professional standard on every visit — no surprises.",
    },
  ];

  const floatVariants = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      transition: { duration: 8, repeat: Infinity, repeatType: "loop", ease: "easeInOut" },
    },
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* HERO */}
      <div className="relative min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HeroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

        <motion.div
          variants={floatVariants}
          animate="animate"
          className="absolute -top-24 left-1/3 w-[450px] h-[450px] rounded-full bg-green-400/20 blur-3xl"
        />
        <motion.div
          variants={floatVariants}
          animate="animate"
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-teal-400/20 blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center lg:text-left">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="block text-green-400">Professional Deep Cleaning Services</span>
          </motion.h1>

          <p className="mt-6 max-w-3xl text-lg md:text-xl text-white/90">
            High-standard residential and commercial cleaning with fully insured professionals and eco-friendly products.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {badges.map((b, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-green-600/80 text-white font-semibold px-4 py-2 rounded-full shadow-md text-sm sm:text-base"
              >
                {b.icon} {b.text}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {heroButtons.map((btn, i) => (
              <Link
                key={i}
                to={btn.href}
                className={`px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition ${
                  btn.primary ? "bg-green-600 hover:bg-green-700 text-white" : "border border-white text-white hover:bg-white/20"
                }`}
              >
                {btn.label}
              </Link>
            ))}
          </div>

          <p className="mt-4 text-sm text-white/80 max-w-xl">
            Trusted by homes, offices, landlords, and businesses across the North West.
          </p>
        </div>
      </div>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="mx-auto max-w-3xl text-center text-lg md:text-xl text-slate-700 mb-12">
          Our deep cleaning service targets built-up dirt, grease, and bacteria for a complete refresh.
        </p>

        <div className="grid gap-8 sm:grid-cols-2">
          {featureCards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-green-100 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="mb-2 text-lg font-semibold text-green-800">{card.title}</h3>
              <p className="text-slate-700">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

/* ================= DYNAMIC PAGE ================= */
export default function DynamicPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 35, restDelta: 0.001 });

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const utm = searchParams.get("utm_campaign");
  const campaignText = utm ? `Special Offer for ${utm}` : "Need a deep clean? Fast quotes & trusted professionals.";

  const trackConversion = (type: string) => {
    console.log(`Conversion tracked: ${type}`);
  };

  return (
    <main className="snap-y snap-mandatory scroll-smooth">
      <StoryCard>
        <DeepCleaningContent />
      </StoryCard>

      <StoryCard><HomeIntro /></StoryCard>
      <StoryCard><HomeIntro2 /></StoryCard>
      <StoryCard><HomeProcess /></StoryCard>
      <StoryCard><HomeAreas /></StoryCard>
      <StoryCard><HomeReviews /></StoryCard>
      <StoryCard><HomeCTA /></StoryCard>
      <StoryCard><HomeFAQ faqs={faqData} /></StoryCard>

      {/* SCROLL PROGRESS BAR */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-blue-500 rounded-full origin-left shadow-lg z-50"
        style={{ scaleX }}
      />

      <style>{`
        html { scroll-snap-type: y mandatory; scroll-behavior: smooth; }
        body { margin: 0; }
        section { scroll-snap-align: start; }
      `}</style>
    </main>
  );
}
