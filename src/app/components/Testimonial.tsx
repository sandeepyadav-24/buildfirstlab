import React from "react";

const testimonials = [
  {
    icon: (
      <span className="inline-block w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
        <svg
          className="w-4 h-4 text-gray-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12l2 2 4-4" />
        </svg>
      </span>
    ),
    title: "Non-technical founders",
    desc: "We’ll be your technical co-founder as a service, saving you hassle and equity.",
  },
  {
    icon: (
      <span className="inline-block w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
        <svg
          className="w-4 h-4 text-gray-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M16 12h-4V8" />
        </svg>
      </span>
    ),
    title: "Fund raisers",
    desc: "Our MVPs show credibility and results to investors, maximising the chance of a raise.",
  },
  {
    icon: (
      <span className="inline-block w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
        <svg
          className="w-4 h-4 text-gray-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4l3 3" />
        </svg>
      </span>
    ),
    title: "Serial entrepreneurs",
    desc: "Too many ideas, not enough time? We’ll build the product, you work your magic.",
  },
  {
    icon: (
      <span className="inline-block w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
        <svg
          className="w-4 h-4 text-gray-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4l-3-3" />
        </svg>
      </span>
    ),
    title: "Startups",
    desc: "We bring your product to life so you can attract users and scale your business.",
  },
];

const Testimonial: React.FC = () => {
  return (
    <section className="bg-white py-24 px-4 flex flex-col items-center">
      {/* Section Label */}
      <div className="text-gray-400 text-lg mb-2 text-center">
        Entrepreneurs → Startups
      </div>
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-serif font-semibold text-center mb-12">
        Who we work with
      </h2>
      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl">
        {testimonials.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center text-center"
          >
            {item.icon}
            <div className="mt-4 text-xl md:text-2xl font-serif font-semibold mb-2">
              {item.title}
            </div>
            <div className="text-gray-500 text-base max-w-xs">{item.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
