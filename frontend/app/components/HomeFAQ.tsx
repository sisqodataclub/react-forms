"use client";

import React, { useState } from "react";
import { PageTitle } from "../components/PageTitle";

// ✅ Export the interface
export interface FAQItem {
  question: string;
  answer: string;
}

interface HomeFAQProps {
  faqs: FAQItem[];
}

export const HomeFAQ: React.FC<HomeFAQProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 space-y-8">
      <PageTitle title="Frequently Asked Questions" />

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-green-50 dark:bg-gray-900/30 rounded-lg shadow-sm overflow-hidden"
          >
            <button
              className="w-full px-4 py-3 text-left flex justify-between items-center font-semibold text-green-900 dark:text-green-200"
              onClick={() => toggle(idx)}
            >
              {faq.question}
              <span className="ml-2">{openIndex === idx ? "−" : "+"}</span>
            </button>
            {openIndex === idx && (
              <div className="px-4 py-3 text-slate-700 dark:text-slate-300 border-t border-green-200 dark:border-green-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
};
