"use client";

import { useState, useEffect, useCallback } from "react";
import { MENU_IMAGES } from "@/lib/menuImages";

export function MenuLightbox() {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const prev = useCallback(() => setIdx(i => (i - 1 + MENU_IMAGES.length) % MENU_IMAGES.length), []);
  const next = useCallback(() => setIdx(i => (i + 1) % MENU_IMAGES.length), []);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")     close();
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, prev, next]);

  return (
    <>
      <button className="btn" onClick={() => { setOpen(true); setIdx(0); }}>
        See Menu →
      </button>

      {open && MENU_IMAGES.length > 0 && (
        <div
          onClick={close}
          style={{
            position: "fixed", inset: 0, zIndex: 2000,
            background: "rgba(0,0,0,0.93)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          {/* Close */}
          <button
            onClick={close}
            style={{ position: "absolute", top: "20px", right: "24px", background: "none", border: "none", color: "#fff", fontSize: "28px", cursor: "pointer", lineHeight: 1, opacity: 0.8 }}
          >✕</button>

          {/* Counter */}
          {MENU_IMAGES.length > 1 && (
            <p style={{ position: "absolute", top: "24px", left: "50%", transform: "translateX(-50%)", color: "rgba(255,255,255,0.45)", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              {idx + 1} / {MENU_IMAGES.length}
            </p>
          )}

          {/* Prev */}
          {MENU_IMAGES.length > 1 && (
            <button
              onClick={e => { e.stopPropagation(); prev(); }}
              style={{ position: "absolute", left: "20px", background: "none", border: "none", color: "#fff", fontSize: "48px", cursor: "pointer", lineHeight: 1, opacity: 0.6, fontWeight: 300 }}
            >‹</button>
          )}

          {/* Image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={MENU_IMAGES[idx]}
            alt={`Menu page ${idx + 1}`}
            onClick={e => e.stopPropagation()}
            style={{ maxHeight: "88vh", maxWidth: "88vw", objectFit: "contain", display: "block", boxShadow: "0 16px 64px rgba(0,0,0,0.6)" }}
          />

          {/* Next */}
          {MENU_IMAGES.length > 1 && (
            <button
              onClick={e => { e.stopPropagation(); next(); }}
              style={{ position: "absolute", right: "20px", background: "none", border: "none", color: "#fff", fontSize: "48px", cursor: "pointer", lineHeight: 1, opacity: 0.6, fontWeight: 300 }}
            >›</button>
          )}
        </div>
      )}
    </>
  );
}
