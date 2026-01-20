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
    <section ref={ref} className="relative w-full min-h-[110vh] flex items-center justify-center overflow-hidden bg-slate-900">
      
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
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      {/* --- Main Content --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <motion.div
          style={{ y: textY }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16"
        >
          {/* Left Column: Text & CTA */}
          <div className="flex-1 text-center lg:text-left">
            
            {/* Top Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 backdrop-blur-md mb-6 mx-auto lg:mx-0">
              <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-green-300 text-xs sm:text-sm font-semibold tracking-wide uppercase">
                #1 Rated Cleaning Service in Manchester
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Spotless Spaces, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-300">
                Peace of Mind.
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              DDeep Cleaning Services delivers hospital-grade hygiene for homes and offices. 
              We don't just clean; we restore the comfort of your environment.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/contact"
                className="group relative px-8 py-4 bg-green-600 rounded-lg overflow-hidden shadow-lg shadow-green-900/20 transition-all hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative font-bold text-white text-lg">Get Your Free Quote</span>
              </Link>

              <Link
                to="/services"
                className="group px-8 py-4 rounded-lg border border-white/20 hover:bg-white/5 transition-all backdrop-blur-sm"
              >
                <span className="font-medium text-white text-lg group-hover:text-green-300 transition-colors">
                  Explore Services
                </span>
              </Link>
            </motion.div>

            {/* Trust Statement */}
            <motion.p variants={itemVariants} className="mt-8 text-sm text-slate-400 flex items-center justify-center lg:justify-start gap-2">
              <FaStar className="text-yellow-400" /> 
              <span>5-Star Rated across Manchester & Lancashire</span>
            </motion.p>
          </div>

          {/* Right Column: Glassmorphic Features Grid */}
          <div className="w-full lg:w-5/12">
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <FeatureCard icon={FaHome} title="5,000+ Homes" subtitle="Cleaned perfectly" delay={0} />
              <FeatureCard icon={FaBriefcase} title="Commercial Pro" subtitle="Office specialists" delay={0.1} />
              <FeatureCard icon={FaShieldAlt} title="Fully Insured" subtitle="100% Bonded" delay={0.2} />
              <FeatureCard icon={FaCertificate} title="Certified Team" subtitle="Vetted experts" delay={0.3} />
              <FeatureCard icon={FaLeaf} title="Eco-Friendly" subtitle="Non-toxic products" delay={0.4} />
              <FeatureCard icon={FaChild} title="Family Safe" subtitle="Pet & Kid friendly" delay={0.5} />
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

// Sub-component (Keep in same file)
interface FeatureCardProps {
  icon: React.ElementType; // Better TS type for icons
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
      className="flex items-center gap-4 p-4 rounded-xl bg-white/10 border border-white/10 backdrop-blur-md transition-colors cursor-default"
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h3 className="text-white font-semibold text-sm">{title}</h3>
        <p className="text-slate-400 text-xs">{subtitle}</p>
      </div>
    </motion.div>
  );
}