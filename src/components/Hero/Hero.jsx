import { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import Button from "../Button";
import { COLORS, WHATSAPP_URL, MAPS_URL } from "../../constants";

const fadeUp = (v, d = 0) => ({
  opacity: v ? 1 : 0,
  transform: v ? "translateY(0)" : "translateY(28px)",
  transition: `opacity 0.7s ease ${d}s, transform 0.7s ease ${d}s`,
});

export default function Hero() {
  const { darkMode } = useTheme();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 80); }, []);

  return (
    <section id="hero" style={{
      minHeight: "100vh", position: "relative",
      display: "flex", alignItems: "center", justifyContent: "center",
      overflow: "hidden", width: "100%",
    }}>
      {/* Background */}
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(ellipse at 20% 50%,${COLORS.saffron}33 0%,transparent 60%),
                     radial-gradient(ellipse at 80% 20%,${COLORS.ember}22 0%,transparent 50%),
                     linear-gradient(160deg,${COLORS.bark} 0%,#0E0804 100%)`,
      }} />

      {/* Floating spice dots */}
      {[...Array(16)].map((_, i) => (
        <div key={i} style={{
          position: "absolute",
          width: `${4 + (i % 5) * 3}px`, height: `${4 + (i % 5) * 3}px`,
          borderRadius: "50%",
          background: i % 3 === 0 ? COLORS.saffron : i % 3 === 1 ? COLORS.gold : COLORS.ember,
          opacity: 0.12 + (i % 4) * 0.07,
          left: `${(i * 37 + 5) % 90}%`, top: `${(i * 53 + 10) % 88}%`,
          animation: `float ${3 + (i % 4)}s ease-in-out ${(i % 5) * 0.4}s infinite alternate`,
        }} />
      ))}

      {/* Big food emoji bg */}
      <div style={{
        position: "absolute", right: "-8%", bottom: "8%",
        fontSize: "min(42vw,300px)", opacity: 0.06, userSelect: "none",
        animation: "slowSpin 30s linear infinite",
      }}>🍛</div>

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 1, textAlign: "center",
        padding: "100px 24px 60px", maxWidth: 640, width: "100%",
      }}>
        <div style={{ ...fadeUp(loaded, 0), fontSize: 11, letterSpacing: 5, textTransform: "uppercase", color: COLORS.saffron, fontFamily: "'DM Sans',sans-serif", fontWeight: 700, marginBottom: 20 }}>
          🌶️ Jubilee Hills, Hyderabad
        </div>

        <h1 style={{ ...fadeUp(loaded, 0.1), fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(36px,10vw,76px)", fontWeight: 700, lineHeight: 1.05, color: COLORS.cream, margin: "0 0 20px" }}>
          Experience<br />
          <span style={{ background: `linear-gradient(135deg,${COLORS.saffron},${COLORS.gold})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Authentic Taste
          </span><br />
          With A Modern Twist
        </h1>

        <p style={{ ...fadeUp(loaded, 0.2), fontFamily: "'DM Sans',sans-serif", fontSize: 16, lineHeight: 1.7, color: COLORS.lightMushroom, marginBottom: 36 }}>
          Crafted with fresh ingredients and unforgettable flavors.
        </p>

        <div style={{ ...fadeUp(loaded, 0.3), display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
          <Button variant="primary" onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}>
            🍽️ View Menu
          </Button>
          <Button variant="whatsapp" href={WHATSAPP_URL}>📲 Order on WhatsApp</Button>
          <Button variant="outline"  href={MAPS_URL}>📍 Get Directions</Button>
        </div>

        {/* Hours pill */}
        <div style={{ ...fadeUp(loaded, 0.4), marginTop: 36, display: "inline-flex", background: `${COLORS.saffron}15`, border: `1px solid ${COLORS.saffron}30`, borderRadius: 40, padding: "8px 18px", gap: 12, alignItems: "center" }}>
          <span style={{ fontSize: 10, color: "#4CAF50", fontWeight: 700 }}>● OPEN NOW</span>
          <span style={{ width: 1, height: 14, background: COLORS.saffron + "44" }} />
          <span style={{ fontSize: 11, color: COLORS.lightMushroom, fontFamily: "'DM Sans',sans-serif" }}>
            Mon–Thu 12–10:30 PM · Fri–Sun 12–11:30 PM
          </span>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)", animation: "bounce 2s ease infinite", color: COLORS.saffron + "88", fontSize: 20 }}>↓</div>
    </section>
  );
}
