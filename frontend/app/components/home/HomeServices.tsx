import { useRef } from "react";
import { Link } from "react-router"; 
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  FaBroom, FaHome, FaBoxOpen, FaSnowflake, FaLayerGroup, 
  FaBuilding, FaHardHat, FaUtensils, FaGraduationCap, FaArrowRight, FaLongArrowAltRight, FaHospitalSymbol 
} from "react-icons/fa";

const services = [
  // Home
  { 
    title: "Deep Cleaning", 
    description: "Professional deep cleaning services for Manchester & Liverpool homes. A total top-to-bottom hygiene reset.", 
    slug: "/services/deep-cleaning",
    icon: FaBroom 
  },
  { 
    title: "Regular Cleaning", 
    description: "Weekly or fortnightly domestic cleaning. Reliable housekeeping to keep your sanctuary consistent.", 
    slug: "/services/regular-cleaning",
    icon: FaHome 
  },
  { 
    title: "End of Tenancy", 
    description: "Guaranteed move-out cleaning to secure your deposit. Agency-approved checklists for tenants and landlords.", 
    slug: "/services/end-of-tenancy-cleaning",
    icon: FaBoxOpen 
  },
  { 
    title: "Appliance Cleaning", 
    description: "Specialist oven, hob, and fridge cleaning. Professional degreasing for all domestic and commercial machinery.", 
    slug: "/services/appliances-cleaning",
    icon: FaSnowflake 
  },
  { 
    title: "Carpet Cleaning", 
    description: "Professional hot water extraction carpet cleaning. Deep stain removal and allergen neutralisation.", 
    slug: "/services/carpet-cleaning",
    icon: FaLayerGroup 
  },
  // Commercial
  { 
    title: "Office Cleaning", 
    description: "Commercial office cleaning services. Boost productivity with a spotless, professional work environment.", 
    slug: "/services/office-cleaning",
    icon: FaBuilding 
  },
  { 
    title: "After Builders Cleaning", 
    description: "Specialist post-construction cleaning. Removing dust, debris, and fine particles after the builders leave.", 
    slug: "/services/post-construction",
    icon: FaHardHat 
  },
  { 
    title: "Hospitality Hygiene", 
    description: "Deep cleaning for bars, restaurants, and kitchens. Ensure hygiene compliance and food safety standards.", 
    slug: "/services/bars-restaurants",
    icon: FaUtensils 
  },
  { 
    title: "Student Accommodation", 
    description: "Turnaround cleaning for student halls and HMO shared flats across Manchester and Liverpool.", 
    slug: "/services/student-accommodation",
    icon: FaGraduationCap 
  },
  {
    title: "Healthcare & Clinical Cleaning",
    description: "CQC-compliant clinical cleaning for hospitals, dental clinics, and medical facilities.",
    slug: "/services/healthcare-cleaning",
    icon: FaHospitalSymbol
  },
];

export default function HomeServices() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollXProgress } = useScroll({
    container: containerRef,
  });
  
  const scaleX = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="services" className="relative w-full min-h-screen bg-white snap-start flex flex-col justify-center pt-24 pb-20 lg:py-24 overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-b from-green-50/50 via-white to-teal-50/30 pointer-events-none" />
      
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20%] -right-[20%] w-[80vw] h-[80vw] bg-green-200/20 rounded-full blur-[80px] pointer-events-none"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[20%] -left-[20%] w-[80vw] h-[80vw] bg-teal-200/20 rounded-full blur-[80px] pointer-events-none"
      />

      <div className="relative z-10 px-6 lg:px-12 mb-6 md:mb-12">
        <div className="flex items-center gap-3 mb-3">
          <span className="h-0.5 w-6 bg-green-500 rounded-full"></span>
          <span className="text-green-600 font-bold tracking-widest text-[10px] md:text-xs uppercase">
            Specialist North West Cleaners
          </span>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-950 leading-[0.95] tracking-tight">
            Professional <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-500">
              Cleaning Services.
            </span>
          </h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="md:hidden mt-4 flex items-center gap-2 text-green-600/70"
        >
          <span className="text-xs font-bold uppercase tracking-wide">Swipe to see all services</span>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaLongArrowAltRight />
          </motion.div>
        </motion.div>
      </div>

      <div className="relative w-full">
        <div 
          ref={containerRef}
          className="flex overflow-x-auto gap-4 md:gap-6 px-6 lg:px-12 pb-8 snap-x snap-mandatory scrollbar-hide items-center"
          role="region"
          aria-label="Cleaning services carousel"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="snap-center shrink-0 w-[85vw] sm:w-[300px] md:w-[340px] h-[280px] md:h-[380px] relative group perspective-1000"
            >
              <Link to={service.slug} className="block h-full" aria-label={`Learn more about ${service.title}`}>
                <div className="relative h-full bg-white border border-green-100/80 rounded-[1.5rem] md:rounded-[2rem] p-6 flex flex-col shadow-sm transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-green-900/10 group-hover:-translate-y-1 group-hover:border-green-200 overflow-hidden">
                  
                  <span className="absolute -right-2 -top-4 text-[6rem] md:text-[8rem] font-bold text-slate-50 opacity-50 group-hover:text-green-50/80 transition-colors pointer-events-none select-none z-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-green-50 to-teal-50 text-green-600 flex items-center justify-center mb-4 md:mb-6 text-lg md:text-2xl shadow-inner group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                      <service.icon />
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-green-950 mb-2 group-hover:text-green-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 md:line-clamp-none">
                      {service.description}
                    </p>

                    <div className="mt-auto flex items-center gap-2 text-xs md:text-sm font-bold text-green-700 uppercase tracking-wide group-hover:gap-3 transition-all">
                      View Service <FaArrowRight className="text-green-400" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-green-500 to-teal-500 group-hover:w-full transition-all duration-500" />
                </div>
              </Link>
            </motion.div>
          ))}
          
          <div className="w-2 shrink-0" aria-hidden="true" />
        </div>

        <div className="absolute bottom-0 left-6 right-6 h-1 bg-slate-100 rounded-full overflow-hidden mt-4 md:hidden" aria-hidden="true">
          <motion.div 
            style={{ scaleX, transformOrigin: "0%" }}
            className="h-full bg-green-500 rounded-full"
          />
        </div>

        <div className="absolute top-0 right-0 h-full w-12 md:w-24 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none" aria-hidden="true" />
      </div>

    </section>
  );
}