import { useRef } from "react";
// In React Router v7, we import Link from "react-router"
import { Link } from "react-router"; 
import { motion, useScroll, useTransform } from "framer-motion";
import { FaHome, FaBriefcase, FaShieldAlt, FaCertificate, FaLeaf, FaChild, FaStar } from "react-icons/fa";
// Make sure this path is correct based on your folder structure
import HeroImage from "../../assets/Image_1.png"; 

export default function HomeHero() {
  const ref = useRef<HTMLDivElement>(null);

  // Parallax Effect logic
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const textY = useTransform(scrollY, [0, 500], [0, 100]);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    // Changed min-h-[110vh] to min-h-screen (mobile) and lg:min-h-[110vh] (desktop)
    <section ref={ref} className="relative w-full min-h-screen lg:min-h-[110vh] flex items-center justify-center overflow-hidden bg-slate-900">
      
      {/* --- Background Layer with Parallax --- */}
      <motion.div
        style={{ y: backgroundY, backgroundImage: `url(${HeroImage})` }}
        className="absolute inset-0 w-full h-full bg-center bg-cover z-0"
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </motion.div>

      {/* --- Ambient Glow Effects --- */}
      <div className="absolute top-0 right-0 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-green-500/10 rounded-full blur-[80px] lg:blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-teal-600/10 rounded-full blur-[80px] lg:blur-[120px] pointer-events-none mix-blend-screen" />

      {/* --- Main Content --- */}
      {/* Reduced vertical padding for mobile (pt-24 pb-10) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10 lg:pt-20 lg:pb-32 flex flex-col justify-center h-full">
        <motion.div
          style={{ y: textY }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16" // Reduced gap for mobile
        >
          {/* Left Column: Text & CTA */}
          <div className="flex-1 text-center lg:text-left">
            
            {/* Top Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 backdrop-blur-md mb-4 lg:mb-6 mx-auto lg:mx-0">
              <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-green-300 text-[10px] sm:text-sm font-semibold tracking-wide uppercase">
                #1 Rated Cleaning Service in Manchester
              </span>
            </motion.div>

            {/* Compact Headline for Mobile */}
            <motion.h1 variants={itemVariants} className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Spotless Spaces, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-300">
                Peace of Mind.
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="mt-4 lg:mt-6 text-sm sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              DDeep Cleaning Services delivers hospital-grade hygiene for homes and offices. 
              We don't just clean; we restore the comfort of your environment.
            </motion.p>

            {/* CTA Buttons - Reduced padding on mobile */}
            <motion.div variants={itemVariants} className="mt-6 lg:mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 lg:gap-4">
              <Link
                to="/contact"
                className="group relative w-full sm:w-auto px-6 py-3 lg:px-8 lg:py-4 bg-green-600 rounded-lg overflow-hidden shadow-lg shadow-green-900/20 transition-all hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative font-bold text-white text-base lg:text-lg">Get Your Free Quote</span>
              </Link>

              <Link
                to="/services"
                className="group w-full sm:w-auto px-6 py-3 lg:px-8 lg:py-4 rounded-lg border border-white/20 hover:bg-white/5 transition-all backdrop-blur-sm"
              >
                <span className="font-medium text-white text-base lg:text-lg group-hover:text-green-300 transition-colors">
                  Explore Services
                </span>
              </Link>
            </motion.div>

            {/* Trust Statement */}
            <motion.p variants={itemVariants} className="mt-6 lg:mt-8 text-xs sm:text-sm text-slate-400 flex items-center justify-center lg:justify-start gap-2">
              <FaStar className="text-yellow-400" /> 
              <span>5-Star Rated across Manchester & Lancashire</span>
            </motion.p>
          </div>

          {/* Right Column: Glassmorphic Features Grid */}
          <div className="w-full lg:w-5/12">
            <motion.div 
              variants={containerVariants}
              // Changed grid to 2 columns on mobile (grid-cols-2) instead of 1
              className="grid grid-cols-2 sm:grid-cols-2 gap-2 lg:gap-4"
            >
              <FeatureCard icon={FaHome} title="5,000+ Homes" subtitle="Cleaned perfectly" delay={0} />
              <FeatureCard icon={FaBriefcase} title="Commercial" subtitle="Office specialists" delay={0.1} />
              <FeatureCard icon={FaShieldAlt} title="Fully Insured" subtitle="100% Bonded" delay={0.2} />
              <FeatureCard icon={FaCertificate} title="Certified" subtitle="Vetted experts" delay={0.3} />
              <FeatureCard icon={FaLeaf} title="Eco-Friendly" subtitle="Non-toxic" delay={0.4} />
              <FeatureCard icon={FaChild} title="Family Safe" subtitle="Pet friendly" delay={0.5} />
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

// Sub-component: Optimized for mobile density
interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  delay: number;
}

function FeatureCard({ icon: Icon, title, subtitle, delay }: FeatureCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 }
      }}
      whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
      // Reduced padding (p-3) for mobile, kept standard (p-4) for desktop
      className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-4 p-3 lg:p-4 rounded-xl bg-white/10 border border-white/10 backdrop-blur-md transition-colors cursor-default"
    >
      <div className="flex-shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
        <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
      </div>
      <div>
        <h3 className="text-white font-semibold text-xs lg:text-sm">{title}</h3>
        {/* Hidden subtitle on very small screens if needed, otherwise very small text */}
        <p className="text-slate-400 text-[10px] lg:text-xs leading-tight">{subtitle}</p>
      </div>
    </motion.div>
  );
}