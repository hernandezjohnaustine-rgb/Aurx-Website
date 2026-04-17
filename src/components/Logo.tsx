import React from 'react';

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_15px_rgba(0,85,255,0.3)]"
      >
        {/* Left White Stroke */}
        <path
          d="M20 80 L50 20 L65 50"
          stroke="white"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Right White Stroke */}
        <path
          d="M80 80 L65 50"
          stroke="white"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Blue Diagonal Slash */}
        <path
          d="M35 80 L80 20"
          stroke="#0055FF"
          strokeWidth="14"
          strokeLinecap="round"
          className="drop-shadow-[0_0_8px_rgba(0,85,255,0.8)]"
        />
      </svg>
    </div>
  );
}
