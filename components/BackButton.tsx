"use client";

import { useTransitionRouter } from "next-view-transitions";

export default function BackButton() {
  const router = useTransitionRouter();

  return (
    <button
      onClick={() => router.back()}
      style={{
        background: "none",
        border: "none",
        font: "inherit",
        padding: 0,
        cursor: "pointer",
        color: "var(--color-links)",
        textDecoration: "none",
        transition: "all 0.2s ease-in-out",
        letterSpacing: "0.04em",
        textUnderlineOffset: "2px",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.filter = "brightness(1.2)";
        e.currentTarget.style.textDecoration = "underline";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.filter = "none";
        e.currentTarget.style.textDecoration = "none";
      }}
    >
      ← Back
    </button>
  );
}