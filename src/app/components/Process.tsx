import React from "react";

const techStack = [
  {
    name: "React",
    desc: "Library",
    icon: (
      <svg className="w-8 h-8 mx-auto" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="18" stroke="#60A5FA" strokeWidth="3" />
        <circle cx="20" cy="20" r="3" fill="#60A5FA" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    desc: "Framework",
    icon: (
      <svg className="w-8 h-8 mx-auto" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="18" stroke="#000" strokeWidth="3" />
        <text x="12" y="28" fontSize="14" fill="#000">
          N
        </text>
      </svg>
    ),
  },
  {
    name: "Vercel",
    desc: "Hosting",
    icon: (
      <svg className="w-8 h-8 mx-auto" viewBox="0 0 40 40" fill="none">
        <polygon points="20,8 36,32 4,32" fill="#000" />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    desc: "Database",
    icon: (
      <svg className="w-8 h-8 mx-auto" viewBox="0 0 40 40" fill="none">
        <ellipse cx="20" cy="20" rx="12" ry="18" fill="#34D399" />
      </svg>
    ),
  },
  {
    name: "Firebase",
    desc: "Authentication",
    icon: (
      <svg className="w-8 h-8 mx-auto" viewBox="0 0 40 40" fill="none">
        <polygon points="8,32 20,8 32,32" fill="#FBBF24" />
      </svg>
    ),
  },
  {
    name: "Stripe",
    desc: "Payments",
    icon: (
      <svg className="w-8 h-8 mx-auto" viewBox="0 0 40 40" fill="none">
        <text x="8" y="28" fontSize="24" fill="#6366F1">
          S
        </text>
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    desc: "Styling",
    icon: (
      <svg className="w-8 h-8 mx-auto" viewBox="0 0 40 40" fill="none">
        <path
          d="M8 28 Q20 12 32 28"
          stroke="#38BDF8"
          strokeWidth="3"
          fill="none"
        />
      </svg>
    ),
  },
  {
    name: "Figma",
    desc: "Design",
    icon: (
      <svg className="w-8 h-8 mx-auto" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="12" r="6" fill="#F472B6" />
        <circle cx="20" cy="28" r="6" fill="#34D399" />
      </svg>
    ),
  },
];

const steps = [
  {
    week: "Week 1",
    title: "Research",
    desc: "We dive into your idea, learn about your audience, and create a strategy to bring your idea to life.",
  },
  {
    week: "Week 2",
    title: "Branding",
    desc: "We craft you a well-suited and positioned brand so that you can build awareness from day one.",
  },
  {
    week: "Week 3-4",
    title: "Design",
    desc: "We design every detail to ensure you showcase your idea clearly, providing a great user experience.",
  },
  {
    week: "Week 5-6",
    title: "Develop",
    desc: "We code from scratch so you learn from each user interaction and iterate to product-market fit.",
  },
];

const Process: React.FC = () => {
  return (
    <section className="bg-gray-50 py-24 px-4 flex flex-col items-center">
      {/* Section Label */}
      <div className="text-gray-400 text-lg mb-2 text-center">The Process</div>
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-serif font-semibold text-center mb-12">
        <span className="text-gray-400 font-normal">Built by founders,</span>
        <br />
        <span className="text-black font-bold">for founders.</span>
      </h2>
      {/* Steps Cards */}
      <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 mb-10 w-full max-w-5xl">
        {steps.map((step, idx) => (
          <div
            key={step.title}
            className="bg-white border border-gray-200 rounded-2xl px-6 py-8 flex-1 min-w-[220px] flex flex-col relative"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">{step.week}</span>
              <span className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 font-serif font-medium text-lg">
                {idx + 1}
              </span>
            </div>
            <div className="font-serif text-xl font-semibold mb-2">
              {step.title}
            </div>
            <div className="text-gray-500 text-base leading-relaxed">
              {step.desc}
            </div>
          </div>
        ))}
      </div>
      {/* Tech Stack */}
      <div className="bg-white border border-gray-200 rounded-2xl px-4 py-6 w-full max-w-5xl flex flex-wrap justify-center gap-6">
        {techStack.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center w-28">
            {tech.icon}
            <div className="mt-2 font-serif text-base text-gray-800 font-medium text-center">
              {tech.name}
            </div>
            <div className="text-xs text-gray-400 text-center">{tech.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
