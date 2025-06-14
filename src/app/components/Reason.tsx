import React from "react";

const reasons = [
  {
    title: "Freelance/Hires",
    items: [
      { text: "Custom product", type: "check" },
      { text: "Expensive (£30k+)", type: "cross" },
      { text: "Long duration (3+ months)", type: "cross" },
      { text: "Self-managed process", type: "cross" },
      { text: "Lack founder/MVP awareness", type: "cross" },
    ],
  },
  {
    title: "Agencies",
    items: [
      { text: "Custom product", type: "check" },
      { text: "Expensive (£40k+)", type: "cross" },
      { text: "Long duration (3+ months)", type: "cross" },
      { text: "Intense process", type: "cross" },
      { text: "Lack MVP awareness", type: "cross" },
    ],
  },
  {
    title: "No-Code",
    items: [
      { text: "Limited product", type: "cross" },
      { text: "Low cost", type: "cross" },
      { text: "Long duration (3+ months)", type: "cross" },
      { text: "Difficult process", type: "cross" },
      { text: "Self Awareness", type: "question" },
    ],
  },
  {
    title: "Technical Co-Founder",
    items: [
      { text: "Custom product", type: "check" },
      { text: "High cost (50% ownership)", type: "cross" },
      { text: "Long duration (4+ months)", type: "cross" },
      { text: "Intense process", type: "cross" },
      { text: "Self Awareness", type: "question" },
    ],
  },
];

const simpleSuite = {
  title: "Simple Suite",
  items: [
    { text: "Custom product", type: "check" },
    { text: "Great value (£7.5k)", type: "check" },
    { text: "Short duration (4-6 weeks)", type: "check" },
    { text: "Simple process", type: "check" },
    { text: "Founder & MVP awareness", type: "check" },
  ],
};

const why = [
  {
    title: "MVPs you actually need",
    desc: "No more over-engineered products. We build fantastic, functional, and effective products that founders use to iterate to product-market fit, reducing your capital and time risk.",
    icon: "✱",
    highlight: "actually",
  },
  {
    title: "Only pay for what's needed",
    desc: "Avoid paying for unnecessary scope and agency members, or wasting time managing freelancers. Only pay for what's needed, a dedicated duo of designer & developer.",
    icon: "💬",
    highlight: "",
  },
];

const iconMap = {
  check: <span className="text-lime-400 font-bold">✓</span>,
  cross: <span className="text-gray-400 font-bold">✕</span>,
  question: <span className="text-gray-400 font-bold">?</span>,
};

const Reason: React.FC = () => (
  <section className="relative bg-black text-white py-24 px-4 flex flex-col items-center">
    {/* Section Label */}
    <div className="text-gray-400 text-lg mb-2 text-center">Why us</div>
    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-serif font-semibold text-center mb-12">
      <span className="text-gray-200 font-normal">Save time, capital,</span>
      <br />
      <span className="text-white font-bold">& attention.</span>
    </h2>
    {/* Comparison Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mb-8">
      {/* Left column (2x2 grid) */}
      <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
        {reasons.map((reason) => (
          <div
            key={reason.title}
            className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 flex flex-col min-h-[220px]"
          >
            <div className="text-lg font-serif font-semibold mb-4">
              {reason.title}
            </div>
            <ul className="space-y-2 text-base">
              {reason.items.map((item) => (
                <li key={item.text} className="flex items-center gap-2">
                  {iconMap[item.type as keyof typeof iconMap]}
                  <span
                    className={item.type === "cross" ? "text-gray-400" : ""}
                  >
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* Simple Suite column */}
      <div className="row-span-2 bg-zinc-900 border-2 border-lime-400 rounded-2xl p-6 flex flex-col min-h-[220px] relative">
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-serif font-semibold">
            {simpleSuite.title}
          </span>
          <span className="text-lime-400 text-2xl font-bold">q</span>
        </div>
        <ul className="space-y-2 text-base mb-4">
          {simpleSuite.items.map((item) => (
            <li key={item.text} className="flex items-center gap-2">
              {iconMap[item.type as keyof typeof iconMap]}
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
        {/* Browser window illustration placeholder */}
        <div className="mt-auto flex items-center justify-center">
          <div className="w-full h-32 bg-zinc-800 border border-zinc-700 rounded-lg flex items-center justify-center">
            <span className="text-gray-600">[ UI Illustration ]</span>
          </div>
        </div>
      </div>
    </div>
    {/* Our Why */}
    <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl mt-8">
      {why.map((item) => (
        <div
          key={item.title}
          className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 flex-1 flex flex-col"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">{item.icon}</span>
            <span className="font-serif font-semibold text-lg">
              {item.title.split(" ").map((word, i) =>
                word === item.highlight ? (
                  <span key={i} className="italic">
                    {word}{" "}
                  </span>
                ) : (
                  word + " "
                )
              )}
            </span>
          </div>
          <div className="text-gray-300 text-base">{item.desc}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Reason;
