import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaStar, FaGoogle, FaQuoteLeft, FaCheckCircle, FaStarHalfAlt } from "react-icons/fa";

// 1. STATS DATA
const platformStats = [
  { 
    name: "Google Reviews", 
    rating: 4.9, 
    count: "120+", 
    icon: FaGoogle, 
    iconColor: "text-blue-500" 
  },
  { 
    name: "Trustpilot", 
    rating: 4.8, 
    count: "95+", 
    icon: FaStar, // Using Star as generic trust icon
    iconColor: "text-green-500" 
  }
];

// 2. REVIEWS DATA
const reviews = [
  { name: "Sarah Jenkins", role: "Homeowner, Manchester", text: "Professional, reliable, and thorough. I've tried three other companies, and DDeep is the only one I kept.", rating: 5 },
  { name: "Mark Thompson", role: "Office Manager, Salford", text: "The team is punctual and invisible. Our office has never looked better. Highly recommended for commercial contracts.", rating: 5 },
  { name: "Emma Wright", role: "Tenant, Didsbury", text: "Got my full deposit back thanks to their end-of-tenancy clean. Worth every penny.", rating: 5 },
  { name: "James Alistair", role: "Restaurant Owner", text: "Hygiene is critical for us. DDeep understands the standards required for inspection.", rating: 5 },
  { name: "Chloe Evans", role: "Homeowner, Bolton", text: "Eco-friendly products were a must for me with a newborn. They delivered perfectly.", rating: 4.5 },
  { name: "Robert Green", role: "Landlord", text: "I manage 10 properties and use them for every turnover. Never let me down.", rating: 5 },
];

const marqueeReviews = [...reviews, ...reviews, ...reviews];

export default function HomeReviewsCarousel() {
  
  // SEO Schema
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DDeep Cleaning Services",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "215"
    }
  };

  return (
    <section className="relative w-full h-screen flex flex-col justify-center overflow-hidden bg-white snap-start">
      
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      {/* ===== AMBIENT BACKGROUND ===== */}
      <div className="absolute inset-0 bg-gradient-to-tr from-green-50/50 via-white to-teal-50/50 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#15803d 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      {/* ===== CONTENT CONTAINER ===== */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-center h-full pt-12 pb-12">
        
        {/* 1. HEADER */}
        <div className="text-center mb-10 flex-shrink-0">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-950 tracking-tight mb-4"
          >
            Trusted by the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-500">
              North West.
            </span>
          </motion.h2>
        </div>

        {/* 2. THE GOOGLE / TRUSTPILOT CARDS (The requested feature) */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mb-12 flex-shrink-0"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {platformStats.map((stat, i) => (
             <div key={stat.name} className="flex items-center gap-4 bg-white/60 backdrop-blur-md border border-green-100 px-6 py-4 rounded-2xl shadow-sm hover:shadow-lg hover:shadow-green-900/5 transition-all duration-300 min-w-[260px]">
                {/* Icon Box */}
                <div className={`w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-xl ${stat.iconColor}`}>
                   <stat.icon />
                </div>
                
                {/* Stats */}
                <div className="text-left">
                   <div className="flex items-center gap-1 text-yellow-400 text-sm mb-0.5">
                      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                   </div>
                   <p className="text-green-950 font-bold text-lg leading-none">
                      {stat.rating}/5 <span className="text-slate-400 text-xs font-normal ml-1">on {stat.name}</span>
                   </p>
                </div>
             </div>
          ))}
        </motion.div>

        {/* 3. MARQUEE SECTION */}
        <div className="relative w-full flex-grow flex flex-col justify-center overflow-hidden mask-gradient-x">
          
          {/* Side Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

          {/* Row 1: Left */}
          <div className="flex mb-6">
            <motion.div 
              className="flex gap-6 px-6"
              animate={{ x: ["0%", "-33.33%"] }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              {marqueeReviews.map((review, i) => (
                <ReviewCard key={`top-${i}`} review={review} />
              ))}
            </motion.div>
          </div>

          {/* Row 2: Right */}
          <div className="flex">
            <motion.div 
              className="flex gap-6 px-6"
              animate={{ x: ["-33.33%", "0%"] }} 
              transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            >
               {marqueeReviews.map((review, i) => (
                <ReviewCard key={`bot-${i}`} review={review} />
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}

// Sub-Component: The Card
function ReviewCard({ review }: { review: any }) {
  return (
    <div className="w-[350px] sm:w-[400px] shrink-0 p-6 sm:p-8 rounded-[2rem] bg-white border border-green-50 shadow-sm hover:shadow-xl hover:shadow-green-900/5 hover:border-green-200 transition-all duration-300 cursor-default group">
      
      {/* Stars */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <div key={i}>
             {i < Math.floor(review.rating) ? <FaStar className="text-yellow-400 text-sm" /> : <FaStarHalfAlt className="text-yellow-400 text-sm" />}
          </div>
        ))}
      </div>

      {/* Quote */}
      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 italic relative z-10">
        "{review.text}"
      </p>

      {/* User Info */}
      <div className="flex items-center gap-4 mt-auto">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center text-green-700 font-bold text-sm">
          {review.name.charAt(0)}
        </div>
        <div>
          <h4 className="text-green-950 font-bold text-sm flex items-center gap-2">
            {review.name} <FaCheckCircle className="text-blue-400 text-xs" title="Verified Client" />
          </h4>
          <p className="text-slate-400 text-xs">{review.role}</p>
        </div>
        <FaQuoteLeft className="ml-auto text-3xl text-green-50 group-hover:text-green-100 transition-colors" />
      </div>
    </div>
  );
}