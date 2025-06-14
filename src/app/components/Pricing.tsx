import React from "react";

const plans = [
  {
    name: "Prototype",
    price: "$1,500",
    duration: "2-3 weeks",
    description:
      "Branding & landing page to help you attract potential users, validate demand, and test your riskiest assumptions.",
    cta: "Book Intro Call →",
    features: [
      "Full MVP built and delivered in just 2-3 weeks",
      "Choice of Web Platform or Mobile App",

      "Modern, robust, and scalable tech stack",
      " Essential features integrated (auth, payments, APIs, etc.)",
      "Founder-focused, personalized development experience",
      "Consistent progress updates & a transparent workflow",
    ],
    popular: false,
    highlight: false,
  },
  {
    name: "MVP",
    price: "$2,300",
    duration: "4-6 weeks",
    description:
      "An MVP web app to validate your products value, generate income, and iterate to product-market fit.",
    cta: "Book Intro Call →",
    features: [
      "Up to 60 hours of dev work every month",

      "Adaptable time usage based on your needs",

      "Weekly sync calls for planning and strategy",
      "Top-priority handling of new features",
      "Ongoing performance tuning and upkeep",
      "Immediate assistance for urgent issues (same-day response)",
    ],
    popular: true,
    highlight: true,
  },
];

const Pricing: React.FC = () => {
  return (
    <section className="relative bg-black text-white py-24 px-4 flex flex-col items-center">
      {/* Section Label */}
      <div className="text-gray-400 text-lg mb-2 text-center">Plans</div>
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-serif font-semibold text-center mb-12">
        Bring your idea to life
      </h2>
      {/* Pricing Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-8 w-full max-w-4xl mb-16">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative bg-zinc-900 border border-zinc-700 rounded-2xl flex-1 min-w-[300px] max-w-md p-8 flex flex-col items-start ${
              plan.highlight ? "border-lime-400" : ""
            }`}
          >
            {plan.popular && (
              <span className="absolute top-4 right-4 bg-zinc-800 text-xs text-white px-3 py-1 rounded-md border border-zinc-700 font-medium">
                Most Popular
              </span>
            )}
            <div className="flex w-full justify-between items-center mb-2">
              <span className="text-xl font-serif font-semibold">
                {plan.name}
              </span>
              <span className="text-gray-400 text-sm">{plan.duration}</span>
            </div>
            <div className="text-3xl md:text-4xl font-serif font-bold mb-2">
              {plan.price}
            </div>
            <div className="text-gray-300 mb-6 text-base min-h-[48px]">
              {plan.description}
            </div>
            <a
              href="#"
              className={`w-full text-center rounded-lg px-6 py-3 font-semibold text-base mb-6 transition border ${
                plan.highlight
                  ? "bg-lime-400 text-black border-lime-400 hover:bg-lime-300"
                  : "border-white text-white hover:bg-white hover:text-black"
              }`}
            >
              {plan.cta}
            </a>
            <ul className="text-gray-200 text-base space-y-2 w-full">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span className="text-lime-400">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* Async Contact */}
      <div className="relative z-10 flex flex-col items-center mt-8">
        <div className="text-white text-lg mb-1">
          Prefer Async? Drop us an email
        </div>
        <a
          href="mailto:hello@simplesuite.co"
          className="text-gray-300 hover:text-lime-400 transition text-base"
        >
          hello@simplesuite.co →
        </a>
      </div>
      {/* SVG Arcs background */}
      <svg
        className="absolute left-0 bottom-0 w-full h-64 pointer-events-none"
        viewBox="0 0 1440 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ zIndex: 0 }}
      >
        <path d="M0 400 Q720 200 1440 400" stroke="#222" strokeWidth="2" />
        <path d="M0 320 Q720 120 1440 320" stroke="#222" strokeWidth="2" />
        <path d="M0 240 Q720 40 1440 240" stroke="#222" strokeWidth="2" />
      </svg>
    </section>
  );
};

export default Pricing;
