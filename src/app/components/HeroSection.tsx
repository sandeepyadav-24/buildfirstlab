import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col">
      {/* SVG Arcs */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 800 Q720 400 1440 800" stroke="#222" strokeWidth="2" />
        <path d="M0 700 Q720 300 1440 700" stroke="#222" strokeWidth="2" />
        <path d="M0 600 Q720 200 1440 600" stroke="#222" strokeWidth="2" />
      </svg>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 z-10 relative">
        {/* Logo */}
        <div className="text-lime-400 text-3xl font-bold">BuildFirstlab</div>
        {/* Nav Links */}
        <div className="hidden md:flex gap-8 text-lg font-medium">
          <a href="#" className="hover:text-lime-400">
            Process
          </a>
          <a href="#" className="hover:text-lime-400">
            Projects
          </a>
          <a href="#" className="hover:text-lime-400">
            FAQ
          </a>
          <a href="#" className="hover:text-lime-400">
            About
          </a>
          <a href="#" className="relative hover:text-lime-400">
            Course
            <span className="ml-1 px-2 py-0.5 bg-lime-400 text-black text-xs rounded-full absolute -top-3 -right-8">
              New
            </span>
          </a>
        </div>
        {/* See Plans Button */}
        <a
          href="#"
          className="border border-lime-400 text-lime-400 px-5 py-2 rounded-lg hover:bg-lime-400 hover:text-black transition"
        >
          See Plans →
        </a>
      </nav>

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center flex-1 z-10 relative">
        <h1 className="text-5xl md:text-6xl font-bold text-center leading-tight">
          We craft minimum <br />
          viable <span className="text-lime-400">digital</span> products.
        </h1>
        <p className="mt-6 text-lg text-gray-300 text-center max-w-xl">
          Helping founders bring their product to life, attract early users, and
          iterate to product-market fit.
        </p>
        <a
          href="#"
          className="mt-8 border border-lime-400 text-lime-400 px-8 py-3 rounded-lg hover:bg-lime-400 hover:text-black transition text-lg font-semibold"
        >
          See Plans →
        </a>
      </div>

      {/* Client Logos */}
      <div className="flex justify-center gap-10 items-center py-8 z-10 relative opacity-80">
        <span className="text-gray-400 text-lg flex items-center gap-2">
          <span className="w-4 h-4 border-2 border-gray-400 rounded-full inline-block"></span>
          cleartask
        </span>
        <span className="text-gray-400 text-lg">Copyhub</span>
        <span className="text-gray-400 text-lg flex items-center gap-2">
          <span className="w-5 h-5 bg-gray-700 rounded-full inline-block"></span>
          MeterMonkey
        </span>
        <span className="text-gray-400 text-lg font-bold">haste</span>
        <span className="text-gray-400 text-lg">BlackoutPoetry.co</span>
      </div>
    </div>
  );
};

export default HeroSection;
