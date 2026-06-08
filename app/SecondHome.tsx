import { useState } from "react";

const SunIcon = () => (
  <svg viewBox="0 0 60 60" className="w-14 h-14 mx-auto mb-2">
    <circle cx="30" cy="30" r="14" fill="#C84B11" />
    <line x1="30" y1="4" x2="30" y2="12" stroke="#C84B11" strokeWidth="3" strokeLinecap="round"/>
    <line x1="30" y1="48" x2="30" y2="56" stroke="#C84B11" strokeWidth="3" strokeLinecap="round"/>
    <line x1="4" y1="30" x2="12" y2="30" stroke="#C84B11" strokeWidth="3" strokeLinecap="round"/>
    <line x1="48" y1="30" x2="56" y2="30" stroke="#C84B11" strokeWidth="3" strokeLinecap="round"/>
    <line x1="10" y1="10" x2="16" y2="16" stroke="#C84B11" strokeWidth="3" strokeLinecap="round"/>
    <line x1="44" y1="44" x2="50" y2="50" stroke="#C84B11" strokeWidth="3" strokeLinecap="round"/>
    <line x1="50" y1="10" x2="44" y2="16" stroke="#C84B11" strokeWidth="3" strokeLinecap="round"/>
    <line x1="16" y1="44" x2="10" y2="50" stroke="#C84B11" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="30" cy="30" r="8" fill="#F4C27A" />
    <circle cx="27" cy="28" r="1.5" fill="#C84B11" />
    <circle cx="33" cy="28" r="1.5" fill="#C84B11" />
    <path d="M26 33 Q30 37 34 33" stroke="#C84B11" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
  </svg>
);

const StomachIcon = () => (
  <svg viewBox="0 0 60 60" className="w-14 h-14 mx-auto mb-2">
    <path d="M22 14 C14 14 10 20 10 28 C10 40 18 48 28 48 C38 48 50 42 50 30 C50 20 44 18 40 20 C38 14 32 10 26 12 Z" fill="#C84B11" opacity="0.85"/>
    <path d="M24 16 C18 16 14 22 14 30 C14 40 20 46 28 46" stroke="#F4C27A" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
  </svg>
);

const HeatIcon = () => (
  <svg viewBox="0 0 60 60" className="w-14 h-14 mx-auto mb-2">
    <circle cx="30" cy="34" r="12" fill="#C84B11" opacity="0.85"/>
    <path d="M22 12 Q24 8 22 4" stroke="#C84B11" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <path d="M30 10 Q32 6 30 2" stroke="#C84B11" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <path d="M38 12 Q40 8 38 4" stroke="#C84B11" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <path d="M25 22 C25 18 28 16 28 13 C28 16 31 18 31 22" stroke="#F4C27A" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
  </svg>
);

const GlassPouring = () => (
  <svg viewBox="0 0 80 80" className="w-16 h-16 mx-auto mb-3">
    <rect x="45" y="5" width="16" height="28" rx="3" fill="#C84B11" transform="rotate(-30 53 19)"/>
    <path d="M20 30 L24 65 L56 65 L60 30 Z" fill="#E8D5A3" stroke="#C09060" strokeWidth="1.5"/>
    <path d="M20 30 L24 50 L56 50 L60 30 Z" fill="#C84B11" opacity="0.7"/>
    <path d="M36 15 Q40 25 38 32" stroke="#C84B11" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.8"/>
    <path d="M30 65 L26 72 L54 72 L50 65 Z" fill="#C09060"/>
  </svg>
);

const GlassSoda = () => (
  <svg viewBox="0 0 80 80" className="w-16 h-16 mx-auto mb-3">
    <rect x="48" y="2" width="14" height="24" rx="3" fill="#87CEEB" transform="rotate(-25 55 14)"/>
    <path d="M16 30 L20 65 L60 65 L64 30 Z" fill="#E8D5A3" stroke="#C09060" strokeWidth="1.5"/>
    <path d="M16 30 L20 48 L60 48 L64 30 Z" fill="#D4A017" opacity="0.6"/>
    <circle cx="28" cy="52" r="2" fill="white" opacity="0.7"/>
    <circle cx="40" cy="55" r="1.5" fill="white" opacity="0.7"/>
    <circle cx="50" cy="51" r="2" fill="white" opacity="0.7"/>
    <circle cx="35" cy="42" r="1.5" fill="white" opacity="0.5"/>
    <path d="M26 65 L22 72 L58 72 L54 65 Z" fill="#C09060"/>
  </svg>
);

const GlassLemon = () => (
  <svg viewBox="0 0 80 80" className="w-16 h-16 mx-auto mb-3">
    <path d="M16 28 L20 63 L60 63 L64 28 Z" fill="#E8D5A3" stroke="#C09060" strokeWidth="1.5"/>
    <path d="M16 28 L20 50 L60 50 L64 28 Z" fill="#D4A017" opacity="0.6"/>
    <ellipse cx="62" cy="18" rx="10" ry="8" fill="#FFD700" stroke="#E8B000" strokeWidth="1"/>
    <ellipse cx="50" cy="22" rx="8" ry="6" fill="#FFE44D"/>
    <rect x="8" y="22" width="35" height="3" rx="1.5" fill="#C84B11" opacity="0.5"/>
    <rect x="30" y="14" width="3" height="15" rx="1.5" fill="#C84B11" opacity="0.5"/>
    <path d="M26 63 L22 70 L58 70 L54 63 Z" fill="#C09060"/>
  </svg>
);

const GlassDone = () => (
  <svg viewBox="0 0 80 80" className="w-16 h-16 mx-auto mb-3">
    <path d="M16 28 L20 65 L60 65 L64 28 Z" fill="#E8D5A3" stroke="#C09060" strokeWidth="1.5"/>
    <path d="M16 28 L20 52 L60 52 L64 28 Z" fill="#D4A017" opacity="0.7"/>
    <path d="M26 65 L22 72 L58 72 L54 65 Z" fill="#C09060"/>
    <path d="M10 16 L14 8" stroke="#F4C27A" strokeWidth="2" strokeLinecap="round"/>
    <path d="M40 10 L42 2" stroke="#F4C27A" strokeWidth="2" strokeLinecap="round"/>
    <path d="M68 18 L72 10" stroke="#F4C27A" strokeWidth="2" strokeLinecap="round"/>
    <path d="M15 22 L8 18" stroke="#F4C27A" strokeWidth="2" strokeLinecap="round"/>
    <path d="M65 22 L72 18" stroke="#F4C27A" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const steps = [
  { num: 1, icon: <img src="/Images_svg/pouring.svg" alt="Pouring Syrup" />, label: "Pour the syrup in a glass" },
  { num: 2, icon: <GlassSoda />, label: "Add water or soda and mix it well" },
  { num: 3, icon: <GlassLemon />, label: "Add lemon and ice" },
  { num: "Done", icon: <GlassDone />, label: "Enjoy!" },
];

const benefits = [
  { icon: <SunIcon />, label: "Refreshing" },
  { icon: <StomachIcon />, label: "Aids Digestion" },
  { icon: <HeatIcon />, label: "Regulates Body Heat" },
];

export default function NannariSyrup() {
  return (
    <div className="min-h-screen font-mono" style={{ backgroundColor: "#F5EDD3" }}>
      {/* Header */}
      <div className="relative overflow-hidden" style={{ backgroundColor: "#E8D5A3", minHeight: 160 }}>
        <div className="flex items-center justify-between px-8 py-6">
          {/* Bottles */}
          <div className="flex gap-3 items-end">
            <div className="w-10 h-24 rounded-t-2xl rounded-b-lg" style={{ backgroundColor: "#C84B11" }} />
            <div className="w-10 h-20 rounded-t-2xl rounded-b-lg" style={{ backgroundColor: "#C84B11" }} />
            <div className="w-8 h-8 rounded-lg border-2 ml-1" style={{ borderColor: "#C84B11", backgroundColor: "#E8D5A3" }}>
              <div className="w-4 h-2 mx-auto mt-1 rounded-sm" style={{ backgroundColor: "#C84B11", opacity: 0.4 }} />
            </div>
          </div>

          {/* Title */}
          <div className="text-center flex-1 mx-4">
            <p className="text-xl tracking-widest" style={{ color: "#7B3F0E" }}>Ammu's</p>
            <h1 className="text-5xl font-bold tracking-tight leading-none" style={{ color: "#C84B11" }}>NANNARI</h1>
            <p className="text-2xl tracking-widest mt-1" style={{ color: "#7B3F0E" }}>Syrup</p>
          </div>

          {/* Lady silhouette */}
          <div className="w-20 h-28 relative">
            <svg viewBox="0 0 80 120" className="w-full h-full">
              <ellipse cx="60" cy="20" rx="18" ry="18" fill="#C84B11"/>
              <ellipse cx="52" cy="14" rx="8" ry="8" fill="#F4C27A"/>
              <path d="M44 22 Q50 36 46 50 L36 50 Q32 36 38 22 Z" fill="#E8D5A3"/>
              <path d="M38 22 Q28 16 18 22 L20 50 L36 50 Z" fill="#C84B11"/>
              <ellipse cx="55" cy="18" rx="5" ry="6" fill="#F4D7B0"/>
              <circle cx="54" cy="16" r="1.5" fill="#7B3F0E"/>
              <path d="M51 20 Q55 22 59 20" stroke="#7B3F0E" strokeWidth="0.8" fill="none"/>
            </svg>
          </div>
        </div>
      </div>

      {/* What is Nannari */}
      <div className="px-6 py-8">
        <div className="border-2 rounded-2xl p-6 bg-white bg-opacity-50" style={{ borderColor: "#C09060" }}>
          <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "Courier New, monospace", color: "#3A1F00" }}>
            What is NANNARI?
          </h2>
          <p className="leading-relaxed text-sm" style={{ color: "#5C3D1E" }}>
            Nannari is a refreshing South Indian herbal drink made from the roots of{" "}
            <em>Hemidesmus indicus</em>, popular in Kerala and Tamil Nadu. It is prepared as a sweet
            syrup mixed with water or lemon, known for its cooling effect and natural ability to
            reduce body heat and refresh the body.
          </p>
        </div>
      </div>

      {/* Benefits */}
      <div className="px-6 pb-8">
        <h2 className="text-center text-2xl font-bold mb-6" style={{ color: "#3A1F00", fontFamily: "Courier New, monospace" }}>
          Benefits Of Nannari
        </h2>
        <div className="grid grid-cols-3 gap-3">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="rounded-2xl p-4 text-center"
              style={{ backgroundColor: "#D4A44C" }}
            >
              {b.icon}
              <p className="text-sm font-semibold" style={{ color: "#3A1F00", fontFamily: "Courier New, monospace" }}>
                {b.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* How to make */}
      <div className="px-6 pb-10">
        <h2 className="text-center text-2xl font-bold mb-6" style={{ color: "#3A1F00", fontFamily: "Courier New, monospace" }}>
          How to make?
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {steps.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl p-4 relative"
              style={{ backgroundColor: "#D4A44C" }}
            >
              <div
                className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2"
                style={{ backgroundColor: "#F5EDD3", borderColor: "#C09060", color: "#3A1F00", fontFamily: "Courier New, monospace" }}
              >
                {s.num}
              </div>
              {s.icon}
              <p className="text-sm text-center font-medium" style={{ color: "#3A1F00", fontFamily: "Courier New, monospace" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contacts */}
      <div className="py-10 text-center" style={{ backgroundColor: "#C09060" }}>
        <h2 className="text-4xl font-bold mb-4" style={{ color: "#3A1F00", fontFamily: "Courier New, monospace" }}>
          Contacts
        </h2>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#3A1F00" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 012 1.24 2 2 0 014 .06h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
            </svg>
            <span className="text-sm font-mono" style={{ color: "#3A1F00" }}>91XXXXXXXXXX, 91XXXXXXXXXX</span>
          </div>
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#3A1F00" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <span className="text-sm font-mono" style={{ color: "#3A1F00" }}>example@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}