import { useRef } from "react";
import { Link } from "react-router"; // Updated import for v7
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  FaBroom, FaHome, FaBoxOpen, FaSnowflake, FaLayerGroup, 
  FaBuilding, FaHardHat, FaUtensils, FaGraduationCap, FaArrowRight 
} from "react-icons/fa";

const services = [
  // Home
  { 
    title: "Deep Cleaning", 
    description: "A total reset for your home. Top-to-bottom hygiene.", 
    slug: "/services/deep-clean",
    icon: FaBroom 
  },
  { 
    title: "Regular Upkeep", 
    description: "Weekly visits to keep your sanctuary consistent.", 
    slug: "/services/regular",
    icon: FaHome 
  },
  { 
    title: "End of Tenancy", 
    description: "Secure your deposit with our guaranteed checklist.", 
    slug: "/services/end-of-tenancy-cleaning",
    icon: FaBoxOpen 
  },
  { 
    title: "Appliance Spa", 
    description: "Degreasing ovens, fridges, and machinery.", 
    slug: "/services/appliances-cleaning",
    icon: FaSnowflake 
  },
  { 
    title: "Carpet Revival", 
    description: "Hot water extraction for stain and allergen removal.", 
    slug: "/services/carpet-cleaning",
    icon: FaLayerGroup 
  },
  // Commercial
  { 
    title: "Office Spaces", 
    description: "Boost productivity with a spotless work environment.", 
    slug: "/services/office-cleaning",
    icon: FaBuilding 
  },
  { 
    title: "Post-Construction", 
    description: "Removing dust and debris after the builders leave.", 
    slug: "/services/post-construction",
    icon: FaHardHat 
  },
  { 
    title: "Hospitality", 
    description: "Hygiene compliance for bars and restaurants.", 
    slug: "/services/bars-restaurants",
    icon: FaUtensils 
  },
  { 
    title: "Student Living", 
    description: "Turnaround cleaning for halls and shared flats.", 
    slug: "/services/student-accommodation",
    icon: FaGraduationCap 
  },
];

export default function HomeServices() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Connect horizontal scroll to vertical page scroll
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Maps vertical scroll to horizontal movement
  // Note: We need a 'ghost' height container to allow the scroll to happen
  // But for this specific "fit in viewport" request, we will use a horizontal drag container instead
  // to keep it strictly 1 screen high without forcing extra scroll length.
  
  return (
    <section className="relative w-full h-screen overflow-hidden bg-white snap-start flex flex-col justify-center">
      
      {/* ===== BACKGROUND LAYERS ===== */}
      <div className="absolute inset-0 bg-gradient-to-tr from-green-50 via-white to-teal-50/50 pointer-events-none" />
      
      {/* Organic Blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-green-200/40 rounded-full blur-[100px] pointer-events-none"
      />
       <motion.div
        animate={{ scale: [1, 1.1, 1], x: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-teal-200/40 rounded-full blur-[100px] pointer-events-none"
      />

      {/* ===== HEADER ===== */}
      <div className="relative z-10 px-6 lg:px-12 mb-8 md:mb-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="h-px w-8 bg-green-500"></span>
          <span className="text-green-600 font-bold tracking-widest text-xs uppercase">Our Expertise</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-950 leading-tight">
             Comprehensive <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-500">Cleaning Solutions.</span>
          </h2>
          <p className="text-slate-500 max-w-sm text-sm md:text-base font-medium">
             Swipe to explore our full range of residential and commercial services.
          </p>
        </div>
      </div>

      {/* ===== HORIZONTAL SCROLL AREA ===== */}
      <div className="relative w-full pl-6 lg:pl-12 pb-12">
        
        {/* Scroll Container */}
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide pr-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="snap-center shrink-0 w-[280px] md:w-[320px] h-[360px] relative group"
            >
              <Link to={service.slug} className="block h-full">
                <div className="h-full bg-white/60 backdrop-blur-xl border border-green-100 rounded-[2rem] p-8 flex flex-col transition-all duration-300 group-hover:bg-white group-hover:shadow-2xl group-hover:shadow-green-900/10 group-hover:-translate-y-2">
                  
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center mb-6 text-2xl group-hover:bg-green-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    <service.icon />
                  </div>

                  {/* Text */}
                  <h3 className="text-xl font-bold text-green-950 mb-3 group-hover:text-green-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Button */}
                  <div className="flex items-center gap-2 text-sm font-bold text-green-700 group-hover:gap-4 transition-all">
                    View Details <FaArrowRight />
                  </div>

                  {/* Decorative Gradient Line at bottom */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-green-400 to-teal-400 group-hover:w-full transition-all duration-500 rounded-b-[2rem]" />
                </div>
              </Link>
            </motion.div>
          ))}
          
          {/* Spacer for right padding */}
          <div className="w-6 shrink-0" />
        </div>

        {/* Fade Overlay on Right to indicate scrollable content */}
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white via-white/50 to-transparent pointer-events-none" />
      </div>

    </section>
  );
}