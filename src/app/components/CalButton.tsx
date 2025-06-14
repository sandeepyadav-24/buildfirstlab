"use client";
import React from "react";

interface CalButtonProps {
  children: React.ReactNode;
  className?: string;
}

const CalButton: React.FC<CalButtonProps> = ({ children, className }) => (
  <a
    href="https://cal.com/sandeep-yadav-brdlp5/30min"
    target="_blank"
    rel="noopener noreferrer"
    className={className}
  >
    {children}
  </a>
);

export default CalButton;
