"use client";
import React, { useState } from "react";

const faqs = [
  "How does your process work?",
  "How do you know this is the correct process?",
  "What is a minimum viable product (MVP)?",
  "How does payment work?",
  "How are you able to maintain the quality of work?",
  "What happens if I can no longer work on my idea?",
];

const Faq: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-24 px-4 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-serif font-semibold text-center mb-12">
        Frequently asked questions
      </h2>
      <div className="w-full max-w-2xl flex flex-col gap-4 mb-12">
        {faqs.map((q, i) => (
          <div
            key={q}
            className="bg-white border border-gray-200 rounded-xl px-6 py-4 cursor-pointer transition hover:shadow"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium">{q}</span>
              <span className="text-2xl text-gray-400">
                {open === i ? "▲" : "▼"}
              </span>
            </div>
            {open === i && (
              <div className="mt-3 text-gray-500 text-base">
                {/* Placeholder answer, replace with real content as needed */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi vel consectetur.
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center mt-8">
        <div className="text-black text-lg mb-1">
          Have a question? Drop us an email
        </div>
        <a
          href="mailto:hello@simplesuite.co"
          className="text-gray-400 hover:text-lime-400 transition text-base"
        >
          hello@simplesuite.co →
        </a>
      </div>
    </section>
  );
};

export default Faq;
