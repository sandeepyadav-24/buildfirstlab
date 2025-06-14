import React from "react";

const Work: React.FC = () => {
  return (
    <section className="bg-gray-50 py-24 px-4 flex flex-col items-center">
      {/* Section Label */}
      <div className="text-gray-400 text-lg mb-2 text-center">How it works</div>
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-serif font-semibold text-center mb-12">
        <span className="text-gray-400 font-normal">
          Our simple, fast, &amp;{" "}
        </span>
        <span className="text-black font-bold">effective process.</span>
      </h2>
      {/* Process Steps */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
        {/* Step 1 */}
        <div className="bg-white border border-gray-200 rounded-2xl px-8 py-6 flex flex-col items-center min-w-[180px]">
          <span className="text-gray-400 text-sm mb-1">Respond in</span>
          <span className="text-2xl md:text-3xl font-serif font-medium">
            24 hours
          </span>
        </div>
        {/* Arrow */}
        <div className="hidden md:block text-3xl text-gray-300 mx-2">→</div>
        {/* Step 2 */}
        <div className="bg-white border border-gray-200 rounded-2xl px-8 py-6 flex flex-col items-center min-w-[180px]">
          <span className="text-gray-400 text-sm mb-1">Confirm in</span>
          <span className="text-2xl md:text-3xl font-serif font-medium">
            5 days
          </span>
        </div>
        {/* Arrow */}
        <div className="hidden md:block text-3xl text-gray-300 mx-2">→</div>
        {/* Step 3 */}
        <div className="bg-white border border-gray-200 rounded-2xl px-8 py-6 flex flex-col items-center min-w-[180px]">
          <span className="text-gray-400 text-sm mb-1">Complete in</span>
          <span className="text-2xl md:text-3xl font-serif font-medium">
            4-6 weeks
          </span>
        </div>
      </div>
      {/* Numbered List */}
      <ol className="max-w-2xl w-full mx-auto text-gray-700 text-lg space-y-4 list-decimal list-inside">
        <li>
          Initial discovery call to learn about your idea and determine if we
          can help.
        </li>
        <li>
          Start the project with a deep dive to ensure we have everything we
          need.
        </li>
        <li>
          Two feedback calls to showcase our branding, design, &amp; build
          progress.
        </li>
        <li>
          Regular async updates to make sure you’re happy with the end result.
        </li>
      </ol>
    </section>
  );
};

export default Work;
