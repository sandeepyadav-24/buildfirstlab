import React from "react";
import CalButton from "./CalButton";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black text-white pt-24 pb-0">
      {/* SVG Arcs */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ zIndex: 0 }}
      >
        <path d="M0 400 Q720 200 1440 400" stroke="#222" strokeWidth="2" />
        <path d="M0 320 Q720 120 1440 320" stroke="#222" strokeWidth="2" />
        <path d="M0 240 Q720 40 1440 240" stroke="#222" strokeWidth="2" />
      </svg>

      {/* CTA Section */}
      <div className="relative z-10 flex flex-col items-center justify-center pb-24">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-8 text-gray-200">
          Ready to bring
          <br />
          <span className="font-serif">your idea to life?</span>
        </h2>
        <CalButton className="border-2 border-lime-400 text-lime-400 px-8 py-3 rounded-lg hover:bg-lime-400 hover:text-black transition text-lg font-semibold">
          Book Intro Call →
        </CalButton>
      </div>

      {/* Divider */}
      <div className="relative z-10">
        <hr className="border-gray-800 mx-8" />
      </div>

      {/* Footer Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center px-8 py-12 gap-12">
        {/* Logo and Address */}
        <div className="flex flex-col gap-4 min-w-[220px]">
          <div className="text-lime-400 text-3xl font-bold mb-2">q</div>
          <div className="text-gray-300 text-sm leading-relaxed">
            Ajnara Homes
            <br />
            Sector - 16B
            <br />
            Greater Noida, UP
            <br />
            India
          </div>
        </div>
        {/* Links */}
        <div className="flex flex-1 justify-between gap-12">
          <div>
            <div className="font-semibold mb-3">Home</div>
            <ul className="space-y-1 text-gray-300">
              <li>
                <a href="#" className="hover:text-lime-400">
                  Process
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-400">
                  Plans
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Course</div>
            <ul className="space-y-1 text-gray-300">
              <li>
                <a href="#" className="hover:text-lime-400">
                  The Outcome
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-400">
                  The Material
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-400">
                  The Resources
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Support</div>
            <ul className="space-y-1 text-gray-300">
              <li>
                <a href="#" className="hover:text-lime-400">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-400">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
