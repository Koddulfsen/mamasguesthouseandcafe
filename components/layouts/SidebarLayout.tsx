"use client";

import { useState } from "react";
import Image from "next/image";
import { COPY, IMAGES, Photo, NavLinks, ContactFormRaw, Btn } from "../content";
import { MenuLightbox } from "../MenuLightbox";

const C = {
  pink:      "#c8808c",
  coral:     "#d4907a",
  turquoise: "#6baead",
  mauve:     "#b080a8",
  teal:      "#7aaab0",
};
const S = {
  pink:      `4px solid ${C.pink}`,
  coral:     `4px solid ${C.coral}`,
  turquoise: `4px solid ${C.turquoise}`,
  mauve:     `4px solid ${C.mauve}`,
  teal:      `4px solid ${C.teal}`,
};

const Sep = ({ color }: { color: string }) => <div className="grid-sep" style={{ background: color }} />;

export default function SidebarLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "var(--c-bg)" }}>

      {/* Mobile hamburger */}
      <button className="sidebar-toggle" onClick={() => setMenuOpen(true)} aria-label="Open menu">
        <span /><span /><span />
      </button>

      {/* Mobile backdrop */}
      <div className={`sidebar-backdrop${menuOpen ? " is-open" : ""}`} onClick={() => setMenuOpen(false)} />

      <aside className={`sidebar${menuOpen ? " is-open" : ""}`} style={{
        width: "260px", flexShrink: 0, position: "sticky", top: 0, height: "100vh",
        borderRight: S.coral, display: "flex", flexDirection: "column",
        padding: "40px 32px", overflowY: "auto", background: "var(--c-bg)",
      }}>
        {/* Mobile close button */}
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          style={{ display: "none", position: "absolute", top: "12px", right: "12px", background: "none", border: "none", fontSize: "22px", cursor: "pointer", color: "var(--c-muted)", lineHeight: 1 }}
          className="sidebar-close"
        >✕</button>

        <div>
          <Image src={IMAGES.logo} alt={COPY.brandFull} width={1310} height={441} style={{ width: "100%", height: "auto", display: "block", mixBlendMode: "multiply" }} priority />
        </div>
        <div style={{ borderTop: "1px solid var(--c-border)", marginTop: "32px", paddingTop: "32px" }}>
          <NavLinks direction="column" />
        </div>
        <div style={{ marginTop: "auto", paddingTop: "32px", borderTop: "1px solid var(--c-border)" }}>
          <p style={{ fontSize: "12px", color: "var(--c-muted)", lineHeight: 1.6 }}>{COPY.tagline}</p>
          <Btn href="#contact" style={{ marginTop: "16px" }}>Book / Contact →</Btn>
        </div>
      </aside>

      <main style={{ flex: 1, minWidth: 0 }}>

        {/* Hero */}
        <section id="hero" style={{ borderBottom: S.coral }}>
          <div style={{ position: "relative" }}>
            <Photo src={IMAGES.hero} label="Mama's" ratio="16/7" sizes="(max-width: 768px) 100vw, calc(100vw - 260px)" priority />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 60%)",
              display: "flex", alignItems: "flex-end", padding: "48px 56px",
            }}>
              <div className="hero-content">
                <p style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: "10px" }}>
                  {COPY.location}
                </p>
                <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 900, lineHeight: 1.05, color: "#fff", maxWidth: "560px" }}>
                  {COPY.about}
                </h2>
                <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.75)", marginTop: "12px", fontStyle: "italic" }}>
                  {COPY.heroSubtitle}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cafe */}
        <section id="cafe" style={{ borderBottom: S.pink }}>
          <div className="grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 4px 1fr", height: "420px" }}>
            <div className="grid-img" style={{ overflow: "hidden", position: "relative" }}>
              <Image src={IMAGES.dinner} alt="Cafe food" fill sizes="(max-width: 768px) 100vw, calc((100vw - 260px) / 2)" style={{ objectFit: "cover" }} />
            </div>
            <Sep color={C.pink} />
            <div className="section-text" style={{ padding: "48px 48px 48px 40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <p style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--c-muted)", marginBottom: "8px" }}>01</p>
              <h2 style={{ fontSize: "32px", fontWeight: 800, lineHeight: 1.1, color: "var(--c-text)" }}>{COPY.cafeTitle}</h2>
              <p style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--c-muted)", marginTop: "16px" }}>{COPY.cafeBody}</p>
              <div style={{ marginTop: "24px" }}><MenuLightbox /></div>
            </div>
          </div>
          <div className="grid-3col" style={{ display: "grid", gridTemplateColumns: "1fr 4px 1fr 4px 1fr", borderTop: S.pink }}>
            <Photo src={IMAGES.bread} label="Fresh bread" ratio="4/3" />
            <Sep color={C.pink} />
            <Photo src={IMAGES.frenchToast} label="French toast" ratio="4/3" />
            <Sep color={C.pink} />
            <Photo src={IMAGES.noodles} label="Noodles" ratio="4/3" />
          </div>
        </section>

        {/* Guesthouse */}
        <section id="guesthouse" style={{ borderBottom: S.mauve }}>
          <div className="grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 4px 1fr" }}>
            <div className="section-text" style={{ padding: "48px 40px 48px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <p style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--c-muted)", marginBottom: "8px" }}>02</p>
              <h2 style={{ fontSize: "32px", fontWeight: 800, lineHeight: 1.1, color: "var(--c-text)" }}>{COPY.guesthouseTitle}</h2>
              <p style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--c-muted)", marginTop: "16px" }}>{COPY.guesthouseBody}</p>
            </div>
            <Sep color={C.mauve} />
            <div className="grid-img" style={{ overflow: "hidden", position: "relative" }}>
              <Image src={IMAGES.roomBed} alt="Room" fill sizes="(max-width: 768px) 100vw, calc((100vw - 260px) / 2)" style={{ objectFit: "cover" }} />
            </div>
          </div>
        </section>

        {/* Activities */}
        <section id="activities" style={{ borderBottom: S.teal }}>
          <div style={{ position: "relative" }}>
            <Photo src={IMAGES.sunsetPier} label="Sunset at the pier" ratio="16/6" />
            <div style={{
              position: "absolute", inset: 0, background: "rgba(0,0,0,0.35)",
              display: "flex", alignItems: "center", padding: "0 56px",
            }}>
              <div className="overlay-content">
                <p style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: "8px" }}>03</p>
                <h2 style={{ fontSize: "36px", fontWeight: 800, color: "#fff" }}>{COPY.activitiesTitle}</h2>
                <p style={{ fontSize: "15px", lineHeight: 1.7, color: "rgba(255,255,255,0.8)", marginTop: "16px", maxWidth: "380px" }}>{COPY.activitiesBody}</p>
              </div>
            </div>
          </div>
          <div className="grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 4px 1fr", borderTop: S.teal }}>
            <Photo src={IMAGES.beach} label="Langkawi beach" ratio="16/7" />
            <Sep color={C.teal} />
            <Photo src={IMAGES.ocean} label="Langkawi ocean" ratio="16/7" />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section-contact" style={{ padding: "64px 64px 96px" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "8px", color: "var(--c-text)" }}>{COPY.contactTitle}</h2>
          <p style={{ fontSize: "14px", color: "var(--c-muted)", marginBottom: "40px" }}>{COPY.contactBody}</p>
          <ContactFormRaw />
        </section>

      </main>
    </div>
  );
}
