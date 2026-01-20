import { motion } from "framer-motion";
import { FaLeaf, FaUserCheck, FaShieldAlt, FaStar, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const whyUsPoints = [
  {
    id: "01",
    title: "Vetted Professionals",
    description: "Fully trained, background-checked, and uniformed experts committed to perfection.",
    icon: FaUserCheck,
    color: "from-blue-400 to-teal-400"
  },
  {
    id: "02",
    title: "Eco-First Approach",
    description: "We use non-toxic, biodegradable products safe for pets, kids, and the planet.",
    icon: FaLeaf,
    color: "from-green-400 to-emerald-400"
  },
  {
    id: "03",
    title: "Reliability Guaranteed",
    description: "We value your time. Punctual arrivals and efficient workflows, every single visit.",
    icon: FaStar, // Changed to Star for "Quality"
    color: "from-yellow-400 to-orange-400"
  },
  {
    id: "04",
    title: "Fully Insured",
    description: "Complete peace of mind with comprehensive liability coverage for your property.",
    icon: FaShieldAlt,
    color: "from-teal-400 to-cyan-400"
  },
];

export default function HomeWhyUs() {
  // Stagger Effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] } }
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-white overflow-hidden snap-start">
      
      {/* ===== AMBIENT BACKGROUND ===== */}
      {/* A clean, almost clinical white/green gradient base */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-50/80 via-white to-white pointer-events-none" />
      
      {/* Moving Light Orbs */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/2 -left-1/2 w-[100vw] h-[100vw] bg-gradient-to-br from-green-100/30 to-transparent rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-1/2 -right-1/2 w-[100vw] h-[100vw] bg-gradient-to-tl from-teal-100/30 to-transparent rounded-full blur-[120px] pointer-events-none"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-center h-full">
        
        {/* ===== HEADER ===== */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 mb-6"
          >
             <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
             <span className="text-green-800 text-xs font-bold tracking-widest uppercase">Why We Lead</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-950 tracking-tight"
          >
            Cleanliness Redefined.
          </motion.h2>
        </div>

        {/* ===== THE PILLARS GRID ===== */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 h-auto"
        >
          {whyUsPoints.map((item, i) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="relative group h-full"
            >
              {/* The Card */}
              <div className="relative h-full bg-white/40 backdrop-blur-xl border border-white/60 rounded-[2rem] p-8 flex flex-col overflow-hidden transition-all duration-500 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,128,0,0.15)] hover:border-green-200">
                
                {/* Background Number (Watermark) */}
                <span className="absolute -right-4 -top-4 text-[8rem] font-bold text-green-900/5 select-none transition-colors group-hover:text-green-900/10 leading-none font-serif">
                  {item.id}
                </span>

                {/* Animated Icon Container */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} p-0.5 mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                   <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                      <item.icon className="text-2xl text-green-700" />
                   </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-green-950 mb-4 group-hover:text-green-700 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                  {item.description}
                </p>

                {/* Bottom Line Indicator */}
                <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${item.color} opacity-30 group-hover:w-full group-hover:opacity-100 transition-all duration-500`} />
              
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ===== BOTTOM CTA ===== */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 md:mt-16 text-center"
        >
          <p className="text-slate-400 text-sm mb-4">Ready to experience the difference?</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-3 text-green-950 font-bold border-b-2 border-green-200 hover:border-green-600 pb-1 transition-all"
          >
            Get a Free Quote <FaArrowRight className="text-green-600" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}