import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaSearchLocation } from "react-icons/fa";
import { Link } from "react-router";

const areas = [
  "Manchester City Centre", "Salford Quays", "Trafford Park", "Didsbury", 
  "Altrincham", "Stockport", "Bolton", "Bury", "Oldham", "Rochdale", 
  "Preston", "Blackburn", "Burnley", "Warrington", "Wigan", "Chorley"
];

// Duplicate list for seamless infinite scroll
const marqueeList = [...areas, ...areas];

export default function HomeAreas() {
  
  // JSON-LD for Local SEO (Google Maps Ranking)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Commercial and Residential Cleaning",
    "areaServed": areas.map(city => ({
      "@type": "City",
      "name": city
    }))
  };

  return (
    <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-white snap-start flex flex-col justify-center">
      
      {/* ===== SEO SCHEMA INJECTION ===== */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      {/* ===== AMBIENT BACKGROUND ===== */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-green-50/50 to-white pointer-events-none" />
      
      {/* Abstract Map Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#15803d 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* "Radar" Pulse Effect behind the center */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
         <div className="relative">
            <motion.div 
              animate={{ scale: [1, 3], opacity: [0.3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 bg-green-400 rounded-full blur-xl"
            />
            <div className="w-[600px] h-[600px] border border-green-100/50 rounded-full flex items-center justify-center">
               <div className="w-[400px] h-[400px] border border-green-200/50 rounded-full flex items-center justify-center">
                  <div className="w-[200px] h-[200px] bg-green-50/50 backdrop-blur-3xl rounded-full border border-green-100 shadow-2xl" />
               </div>
            </div>
         </div>
      </div>


      {/* ===== CONTENT ===== */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100/50 border border-green-200 text-green-800 text-xs font-bold tracking-widest uppercase mb-6">
            <FaMapMarkerAlt className="text-green-600" /> North West Coverage
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-950 tracking-tight mb-6">
            Local Experts. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-500">
              Regional Reach.
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            From the city center of <strong>Manchester</strong> to the suburbs of <strong>Lancashire</strong>. 
            We are the trusted cleaning partner for the North West's finest homes and businesses.
          </p>
        </motion.div>

        {/* ===== INFINITE MARQUEE (The "Pro" Touch) ===== */}
        <div className="relative w-full max-w-5xl mx-auto py-8 mb-12 mask-gradient-x">
          {/* Gradient Masks to fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Row 1: Moving Left */}
          <div className="flex overflow-hidden">
            <motion.div 
              className="flex gap-4 px-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {marqueeList.map((area, i) => (
                <div key={i} className="shrink-0">
                  <span className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border border-green-100 shadow-sm text-green-900 font-medium whitespace-nowrap hover:border-green-400 hover:shadow-md transition-all cursor-default">
                     <span className="w-1.5 h-1.5 rounded-full bg-green-400" /> {area}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2: Moving Right (Offset) */}
          <div className="flex overflow-hidden mt-4">
            <motion.div 
              className="flex gap-4 px-4"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            >
              {marqueeList.map((area, i) => (
                <div key={`rev-${i}`} className="shrink-0">
                   <span className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border border-green-100 shadow-sm text-slate-600 font-medium whitespace-nowrap hover:text-green-900 hover:border-green-400 hover:shadow-md transition-all cursor-default">
                     {area}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ===== CALL TO ACTION CARD ===== */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block"
        >
          <div className="relative bg-green-900 rounded-[2rem] p-1 shadow-2xl shadow-green-900/20">
            <div className="bg-gradient-to-br from-green-800 to-green-950 rounded-[1.8rem] px-8 py-6 md:px-12 md:py-8 flex flex-col md:flex-row items-center gap-6">
              
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-green-300">
                <FaSearchLocation className="text-2xl" />
              </div>
              
              <div className="text-left">
                <h3 className="text-white font-bold text-lg">Don't see your area?</h3>
                <p className="text-green-200/80 text-sm">We are expanding fast across the UK.</p>
              </div>

              <div className="h-px w-full md:w-px md:h-12 bg-white/10" />

              <a 
                href="tel:+441234567890" 
                className="group flex items-center gap-3 bg-white text-green-950 px-6 py-3 rounded-xl font-bold hover:bg-green-50 transition-colors"
              >
                <FaPhoneAlt className="text-green-600 group-hover:rotate-12 transition-transform" />
                <span>Check Availability</span>
              </a>
            
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}