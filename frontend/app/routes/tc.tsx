import { PageTitle } from "../components/PageTitle";
import { useEffect, useState } from "react";
import { FaHome, FaMoneyBill, FaCalendarAlt, FaUserCheck, FaShieldAlt, FaSmile, FaLock, FaEdit, FaGavel } from "react-icons/fa";

export const meta = () => [
  { title: "Terms & Conditions - D Deep Cleaning Services" }
];

export default function Terms() {
  const [activeSection, setActiveSection] = useState<string>("");

  const sections = [
    { id: "services", label: "Services", icon: <FaHome /> },
    { id: "pricing", label: "Pricing", icon: <FaMoneyBill /> },
    { id: "booking", label: "Booking & Payment", icon: <FaCalendarAlt /> },
    { id: "cancellation", label: "Cancellation & Rescheduling", icon: <FaEdit /> },
    { id: "responsibilities", label: "Client Responsibilities", icon: <FaUserCheck /> },
    { id: "liability", label: "Liability", icon: <FaShieldAlt /> },
    { id: "satisfaction", label: "Satisfaction Guarantee", icon: <FaSmile /> },
    { id: "gdpr", label: "GDPR & Data Protection", icon: <FaLock /> },
    { id: "changes", label: "Changes to Terms", icon: <FaEdit /> },
    { id: "law", label: "Governing Law", icon: <FaGavel /> },
  ];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          if (scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
            setActiveSection(sec.id);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="page-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-slate-900">
      <PageTitle title="Terms & Conditions" />

      <div className="mt-6 flex flex-col lg:flex-row gap-8">
        {/* Sticky TOC */}
        <aside className="lg:w-1/4 hidden lg:block">
          <div className="sticky top-28 max-h-[calc(100vh-7rem)] overflow-y-auto bg-green-50 dark:bg-gray-900/50 rounded-lg p-4 shadow-lg border border-green-200 dark:border-green-700">
            <h2 className="font-bold text-lg text-green-900 dark:text-green-300 mb-4">Jump to Section:</h2>
            <ul className="space-y-2">
              {sections.map((sec) => (
                <li key={sec.id}>
                  <button
                    onClick={() => scrollToSection(sec.id)}
                    className={`flex items-center gap-2 w-full text-left px-2 py-1 rounded-md transition-all duration-300 ${
                      activeSection === sec.id
                        ? "bg-green-200 dark:bg-green-700 text-green-900 dark:text-green-100 font-semibold scale-105 shadow-inner"
                        : "text-green-700 dark:text-green-200 hover:bg-green-100 dark:hover:bg-green-600 hover:scale-105"
                    }`}
                  >
                    {sec.icon} {sec.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <div className="lg:w-3/4 prose prose-green dark:prose-invert space-y-8">
          {/* Notice Box */}
          <p className="bg-green-50 dark:bg-gray-900/50 p-4 rounded-lg shadow-sm border-l-4 border-green-400 dark:border-green-600">
            <strong>Notice:</strong> By booking or using <strong>D Deep Cleaning Services</strong>, you agree to these Terms & Conditions. Please read carefully to ensure full understanding.
          </p>

          {sections.map((sec) => (
            <div key={sec.id} id={sec.id} className="relative">
              <h2 className="flex items-center gap-3 text-green-800 dark:text-green-300">
                {sec.icon} {sec.label}
              </h2>

              {/* Section content */}
              {sec.id === "services" && (
                <>
                  <p>We provide professional residential and commercial cleaning services across Manchester and Lancashire. Our services include:</p>
                  <ul>
                    <li>Deep Cleaning</li>
                    <li>Regular/Recurring Cleaning</li>
                    <li>Post-Construction Cleaning</li>
                    <li>Office Cleaning</li>
                    <li>Bars & Restaurants Cleaning</li>
                    <li>Student Accommodation Cleaning</li>
                  </ul>
                  <p>All services are delivered by trained and insured staff. We reserve the right to refuse service if the property poses safety hazards or illegal activities are detected.</p>
                </>
              )}

              {sec.id === "pricing" && (
                <>
                  <p>Prices are in GBP and depend on property size, condition, and type. Additional charges may apply for:</p>
                  <ul>
                    <li>Excessive dirt, clutter, or waste</li>
                    <li>Special requests or premium products</li>
                    <li>Additional areas not included in the original quote</li>
                  </ul>
                </>
              )}

              {sec.id === "booking" && (
                <ul>
                  <li>Bookings via website, phone, or email.</li>
                  <li>Payment due in full prior to or on completion unless otherwise agreed.</li>
                  <li>Accepted payments: card, bank transfer, or agreed method.</li>
                </ul>
              )}

              {sec.id === "cancellation" && (
                <ul>
                  <li>Cancellations/reschedules must be made 24+ hours in advance.</li>
                  <li>Late cancellations may incur up to 50% fee.</li>
                  <li>We may reschedule due to emergencies with notice.</li>
                </ul>
              )}

              {sec.id === "responsibilities" && (
                <ul>
                  <li>Ensure safe property access at the agreed time.</li>
                  <li>Remove valuables, fragile, or hazardous items.</li>
                  <li>Provide accurate property info and cleaning requirements.</li>
                </ul>
              )}

              {sec.id === "liability" && (
                <ul>
                  <li>We carry full public liability and employee insurance.</li>
                  <li>Not liable for pre-existing damage or undisclosed items.</li>
                  <li>Claims must be reported within 24 hours.</li>
                </ul>
              )}

              {sec.id === "satisfaction" && (
                <p>If you are not satisfied, contact us within 24 hours. We will take reasonable steps to rectify the issue, re-clean, or offer partial refund where appropriate.</p>
              )}

              {sec.id === "gdpr" && (
                <p>We comply with GDPR. Personal data is stored securely and used solely for providing services. Clients may request access, correction, or deletion at any time.</p>
              )}

              {sec.id === "changes" && (
                <p>We may update these Terms at any time. Latest version on our website supersedes previous versions.</p>
              )}

              {sec.id === "law" && (
                <p>These Terms are governed by the laws of England and Wales. Disputes are subject to the exclusive jurisdiction of the courts of England and Wales.</p>
              )}

              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className="mt-2 text-sm text-green-700 hover:underline flex items-center gap-1"
              >
                ↑ Back to Top
              </button>

              <hr className="my-6 border-green-200 dark:border-green-700" />
            </div>
          ))}

          <p className="mt-6 text-sm text-slate-600">
            Last updated: 17 January 2026
          </p>
        </div>
      </div>
    </section>
  );
}
