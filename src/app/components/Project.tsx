import React from "react";

const clients = [
  { name: "campusreveal.com", active: false },
  { name: "smartwardrobe.in", active: false },
  { name: "cherishai.in", active: true },
];

const Project: React.FC = () => {
  return (
    <section className="bg-white py-24 px-4 flex flex-col items-center">
      {/* Section Label */}
      <div className="text-gray-400 text-lg mb-2 text-center">Our Projects</div>
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-serif font-semibold text-center mb-10">
        Ideas we&aposve brought to life
      </h2>
      {/* Client Logos */}
      <div className="flex justify-center gap-8 items-center mb-12 w-full max-w-4xl">
        {clients.map((client) => (
          <div
            key={client.name}
            className={`flex items-center gap-2 text-lg font-medium transition-colors ${
              client.active ? "text-orange-500" : "text-gray-300"
            }`}
          >
            {/* Placeholder for logo, can be replaced with SVGs */}
            {client.name === "MeterMonkey" ? (
              <span className="inline-block w-6 h-6 bg-orange-100 rounded-full border border-orange-300 flex items-center justify-center mr-1">
                <span className="text-orange-500 font-bold">🐵</span>
              </span>
            ) : (
              <span className="inline-block w-6 h-6 bg-gray-100 rounded-full border border-gray-200 mr-1"></span>
            )}
            {client.name}
          </div>
        ))}
      </div>
      {/* Project Card */}
      <div className="bg-gray-50 border border-gray-200 rounded-3xl p-10 flex flex-col md:flex-row items-center md:items-start gap-10 w-full max-w-5xl shadow-sm">
        {/* Left: Project Info */}
        <div className="flex-1 min-w-[260px]">
          <span className="inline-block px-3 py-1 text-xs rounded-md border border-gray-300 bg-white text-gray-500 mb-4">
            MVP
          </span>
          <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-4">
            API usage analytics platform for Hasura
          </h3>
          <p className="text-gray-500 text-lg mb-6">
            Optimize your Hasura API by leveraging usage analytics to make data
            driven decisions.
          </p>
          <a
            href="#"
            className="font-medium text-black hover:text-orange-500 transition inline-flex items-center gap-1"
          >
            Open Project <span className="ml-1">→</span>
          </a>
        </div>
        {/* Right: Project Image Placeholder */}
        <div className="flex-1 flex items-center justify-center w-full max-w-xl">
          <div className="w-full h-64 md:h-80 bg-white border border-gray-200 rounded-2xl flex items-center justify-center overflow-hidden">
            {/* Replace with actual image if available */}
            <span className="text-gray-300 text-2xl font-serif">
              [ Project Screenshot ]
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
