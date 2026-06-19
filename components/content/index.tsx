// Central content — copy, images, and shared UI atoms.
// Edit here once; all three layouts pick it up automatically.

export const COPY = {
  brand: "Mama's",
  brandFull: "Mama's Guesthouse & Cafe",
  cafeName: "Bang Dam",
  location: "Penarak, Langkawi",
  tagline: "A cafe, a guesthouse, and an island to explore.",
  about: "Welcome to Mamas Guesthouse",
  heroSubtitle: "Come relax in our loving, conscious space.",
  cafeTitle: "Bang Dam Cafe",
  cafeBody:
    "Intimate outdoor seating. Homemade fresh bread of different styles. Vegetables fresh from the garden. Everything made with love.",
  guesthouseTitle: "Guesthouse",
  guesthouseBody:
    "Feel right at home in our simple, comfortable rooms.",
  activitiesTitle: "Activities",
  activitiesBody:
    "BBQ nights, jungle walks, and hidden spots only locals know.",
  contactTitle: "Get in touch",
  contactBody:
    "Booking a room, planning a group visit, curious about activities — just send us a message.",
};

export const IMAGES = {
  logo: "/images/logo.png",
  hero: "/images/hero.png",
  entrance: "/images/atmosphere/entrance.png",
  happyGuests: "/images/atmosphere/happy-guests.png",
  friends: "/images/atmosphere/friends.png",
  friends2: "/images/atmosphere/friends2.png",
  friends3: "/images/atmosphere/friends3.png",
  frontDesk: "/images/atmosphere/front-desk.png",
  plants: "/images/atmosphere/plants.png",
  flowers: "/images/atmosphere/flowers.png",
  berries: "/images/atmosphere/berries.png",
  hardWork: "/images/atmosphere/hard-work-pays-off.png",
  bread: "/images/cafe/bread.png",
  coffee: "/images/cafe/coffee.png",
  coffee2: "/images/cafe/coffee2.png",
  coffee3: "/images/cafe/coffee3.png",
  dinner: "/images/cafe/dinner.png",
  frenchToast: "/images/cafe/french toast.png",
  noodles: "/images/cafe/noodles.png",
  sandwich: "/images/cafe/sandwich.png",
  roomBed: "/images/guesthouse/room-bed.png",
  roomFull: "/images/guesthouse/room-full.png",
  beach: "/images/activites/beach.png",
  ocean: "/images/activites/ocean.png",
  sunsetPier: "/images/activites/sunset-pier.png",
};

interface PhotoProps {
  src?: string;
  label?: string;
  ratio?: string;
  fit?: "cover" | "contain";
  style?: React.CSSProperties;
}

export function Photo({ src, label = "Photo", ratio = "4/3", fit = "cover", style }: PhotoProps) {
  if (src) {
    return (
      <div style={{ aspectRatio: ratio, width: "100%", overflow: "hidden", ...style }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={label} style={{ width: "100%", height: "100%", objectFit: fit, display: "block" }} />
      </div>
    );
  }
  return (
    <div
      style={{
        aspectRatio: ratio,
        width: "100%",
        background: "var(--c-bg-alt)",
        border: "1px dashed var(--c-border)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "12px",
        color: "var(--c-muted)",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        userSelect: "none",
        ...style,
      }}
    >
      [ {label} ]
    </div>
  );
}

const NAV_COLORS: Record<string, string> = {
  Cafe:        "#c8808c",
  Guesthouse:  "#b080a8",
  Activities:  "#7aaab0",
  Contact:     "#6baead",
};

export function NavLinks({ direction = "row" }: { direction?: "row" | "column" }) {
  const links = ["Cafe", "Guesthouse", "Activities", "Contact"];
  return (
    <nav style={{ display: "flex", flexDirection: direction, gap: direction === "row" ? "32px" : "10px" }}>
      {links.map((l) => (
        <a
          key={l}
          href={`#${l.toLowerCase()}`}
          style={{
            fontSize: "13px", fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase",
            color: "var(--c-text)",
            textShadow: `1px 2px 0 ${NAV_COLORS[l]}`,
          }}
        >
          {l}
        </a>
      ))}
    </nav>
  );
}

interface BtnProps {
  href?: string;
  type?: "button" | "submit";
  children: React.ReactNode;
  style?: React.CSSProperties;
}
export function Btn({ href, type = "button", children, style }: BtnProps) {
  if (href) return <a href={href} className="btn" style={style}>{children}</a>;
  return <button type={type} className="btn" style={style}>{children}</button>;
}

export function ContactFormRaw() {
  const inputStyle: React.CSSProperties = {
    border: "1px solid var(--c-border)",
    padding: "10px 12px",
    background: "var(--c-bg-alt)",
    color: "var(--c-text)",
    width: "100%",
  };
  const labelStyle: React.CSSProperties = {
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "var(--c-muted)",
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div className="form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label style={labelStyle}>Name</label>
          <input type="text" placeholder="Your name" style={inputStyle} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label style={labelStyle}>Email</label>
          <input type="email" placeholder="your@email.com" style={inputStyle} />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <label style={labelStyle}>Interest</label>
        <select style={inputStyle}>
          <option>Guesthouse stay</option>
          <option>Cafe visit</option>
          <option>Activities / tours</option>
          <option>BBQ night</option>
          <option>General question</option>
        </select>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <label style={labelStyle}>Message</label>
        <textarea placeholder="Tell us what you're after..." rows={4} style={{ ...inputStyle, resize: "vertical" }} />
      </div>
      <Btn type="submit" style={{ alignSelf: "flex-start" }}>Send</Btn>
    </form>
  );
}
