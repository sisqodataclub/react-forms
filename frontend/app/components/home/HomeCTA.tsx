import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaPhone, FaEnvelope, FaWhatsapp, FaClipboardList, FaCalendarAlt, FaMagic, FaSmileBeam, FaArrowRight } from "react-icons/fa";

const steps = [
  { 
    title: "Request Quote", 
    desc: "Fill our 30-second form.", 
    icon: FaClipboardList 
  },
  { 
    title: "Schedule It", 
    desc: "Pick a time that works.", 
    icon: FaCalendarAlt 
  },
  { 
    title: "We Clean", 
    desc: "Our experts work their magic.", 
    icon: FaMagic 
  },
  { 
    title: "You Relax", 
    desc: "Enjoy your pristine space.", 
    icon: FaSmileBeam 
  },
];

export default function HomeCTA() {

  // SEO: Structured Data for "HowTo"
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Book a Professional Clean",
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.title,
      "text": step.desc
    }))
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="contact" className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-white snap-start">
      
      {/* ===== SEO INJECTION ===== */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      {/* ===== AMBIENT BACKGROUND ===== */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-green-50/50 to-teal-50/30 pointer-events-none" />
      
      {/* Dynamic Blobs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute top-[-10%] left-[-10%] w-[60vh] h-[60vh] bg-green-200/40 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.1, 1], x: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute bottom-[-10%] right-[-10%] w-[50vh] h-[50vh] bg-teal-200/40 rounded-full blur-[100px] pointer-events-none"
      />


      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center h-full justify-center">

        {/* 1. HEADER */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-950 tracking-tight mb-4"
          >
            Ready for a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-500">
              Spotless Future?
            </span>
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="text-slate-500 text-lg max-w-xl mx-auto"
          >
            Four simple steps to a cleaner, healthier environment.
          </motion.p>
        </div>


        {/* 2. THE TIMELINE (Desktop Horizontal / Mobile Grid) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full relative flex flex-col md:flex-row justify-between items-center max-w-5xl mb-16 gap-8 md:gap-0"
        >
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-gradient-to-r from-green-200 via-teal-200 to-green-200 -z-10" />

          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="flex flex-col items-center text-center group w-full md:w-auto"
            >
              {/* Icon Circle */}
              <div className="relative w-20 h-20 rounded-2xl bg-white border border-green-100 shadow-lg shadow-green-900/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-green-300 transition-all duration-300 z-10">
                <step.icon className="text-3xl text-green-600 group-hover:text-teal-500 transition-colors" />
                
                {/* Number Badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-green-900 text-white flex items-center justify-center font-bold text-sm border-4 border-white">
                  {index + 1}
                </div>
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold text-green-950 mb-1">{step.title}</h3>
              <p className="text-slate-500 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>


        {/* 3. THE "FLOATING ISLAND" CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: "spring" }}
          className="w-full max-w-4xl"
        >
          <div className="bg-white/60 backdrop-blur-xl border border-green-100 rounded-[2.5rem] p-3 md:p-4 shadow-2xl shadow-green-900/10 flex flex-col md:flex-row items-center gap-4">
            
            {/* Primary Action */}
            <Link 
              to="/contact" 
              className="w-full md:w-auto flex-grow bg-green-900 hover:bg-green-800 text-white text-lg font-bold py-5 px-8 rounded-[2rem] flex items-center justify-center gap-3 shadow-lg hover:shadow-green-900/20 transition-all duration-300 group"
            >
              Get Your Free Quote 
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Divider (Desktop) */}
            <div className="hidden md:block w-px h-12 bg-green-200/50" />

            {/* Secondary Actions (Pill Group) */}
            <div className="flex gap-2 w-full md:w-auto justify-center">
              
              <a href="tel:+441234567890" className="flex flex-col items-center justify-center w-20 h-20 rounded-2xl bg-white hover:bg-green-50 text-green-700 transition-colors border border-green-50 shadow-sm group" title="Call Us">
                <FaPhone className="text-xl mb-1 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold uppercase tracking-wide">Call</span>
              </a>

              <a href="mailto:info@ddeep.com" className="flex flex-col items-center justify-center w-20 h-20 rounded-2xl bg-white hover:bg-green-50 text-green-700 transition-colors border border-green-50 shadow-sm group" title="Email Us">
                <FaEnvelope className="text-xl mb-1 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold uppercase tracking-wide">Email</span>
              </a>

              <a href="https://wa.me/441234567890" className="flex flex-col items-center justify-center w-20 h-20 rounded-2xl bg-white hover:bg-green-50 text-green-700 transition-colors border border-green-50 shadow-sm group" title="WhatsApp">
                <FaWhatsapp className="text-2xl mb-1 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold uppercase tracking-wide">Chat</span>
              </a>

            </div>

          </div>
          
          {/* Trust Micro-copy */}
          <div className="text-center mt-6 flex justify-center gap-6 text-sm text-slate-400 font-medium">
             <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Free Cancellation</span>
             <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Fully Insured</span>
             <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Instant Quote</span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}