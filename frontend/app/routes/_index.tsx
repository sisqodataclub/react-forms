"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, ReactNode } from "react";

import HomeHero from "../components/home/HomeHero";
import HomeIntro from "../components/home/HomeIntro";
import HomeIntro2 from "../components/home/HomeIntro2";
import HomeServices from "../components/home/HomeServices";
import HomeProcess from "../components/home/HomeProcess";
import HomeAreas from "../components/home/HomeAreas";
import HomeReviews from "../components/home/HomeReviews";
import HomeCTA from "../components/home/HomeCTA";
import FixedCTA2 from "../components/mobilenav";

// Dynamic CTA text


/** =====================
 * StoryCard Component
 * ===================== */
interface StoryCardProps {
  children: ReactNode;
  bgImage?: string;
}

function StoryCard({ children, bgImage }: StoryCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Parallax & subtle scale
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.97, 1]);

  // Fade in as section enters viewport
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [0, 0.5, 1]);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex items-center justify-center snap-start overflow-hidden"
    >
      {/* Background Image */}
      {bgImage && (
        <motion.div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${bgImage})`, scale }}
        />
      )}

      {/* Overlay */}
      {bgImage && <div className="absolute inset-0 bg-black/30" />}

      {/* Content with fade + parallax */}
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

/** =====================
 * HomePage
 * ===================== */
export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 35, restDelta: 0.001 });
  

  return (
    <main className="snap-y snap-mandatory scroll-smooth">
      {/* Hero Section */}
    
      <StoryCard bgImage="/assets/hero-bg.jpg">
        <HomeHero />
      </StoryCard>

      {/* Intro Sections */}
      <StoryCard>
        <HomeIntro />
      </StoryCard>

      <StoryCard>
        <HomeIntro2 />
      </StoryCard>

      {/* Services / Process */}
      <StoryCard>
        <HomeServices />
      </StoryCard>

      <StoryCard>
        <HomeProcess />
      </StoryCard>

      <StoryCard>
        <HomeAreas />
      </StoryCard>

      <StoryCard>
        <HomeReviews />
      </StoryCard>

      {/* CTA Section */}
      <StoryCard>
        <HomeCTA />
      </StoryCard>

      {/* Scroll Progress Bar */}
      {/* Scroll Progress Bar at the top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-blue-500 rounded-full origin-left shadow-lg z-50"
        style={{ scaleX }}
      />


      {/* Global Styles for Snap */}
      <style>{`
        html {
          scroll-snap-type: y mandatory;
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
        }

        section {
          scroll-snap-align: start;
        }
      `}</style>
    </main>
  );
}
