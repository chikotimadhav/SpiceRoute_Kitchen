import { useState } from "react";
import { useScrollY } from "../../hooks/useScrollY";
import { useTheme }   from "../../context/ThemeContext";
import useCartStore   from "../../store/useCartStore";
import { NAV_LINKS, WHATSAPP_URL, COLORS } from "../../constants";
import Button from "../Button";
import "./Navbar.css";

function scrollTo(id) {
  document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  const { toggleCart, items } = useCartStore();
  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const scrollY   = useScrollY();
  const [open, setOpen] = useState(false);
  const scrolled  = scrollY > 60;

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""} ${darkMode ? "navbar--dark" : "navbar--light"}`}>
        {/* Logo */}
        <div className="navbar__logo">
          <div className="navbar__logo-icon">🌶️</div>
          <div>
            <div className="navbar__logo-name">Spice Route</div>
            <div className="navbar__logo-sub">Kitchen</div>
          </div>
        </div>

        {/* Desktop links */}
        <div className="navbar__links">
          {NAV_LINKS.map((l) => (
            <button key={l} className={`navbar__link ${darkMode ? "navbar__link--dark" : ""}`}
              onClick={() => scrollTo(l)}>{l}</button>
          ))}
        </div>

        {/* Actions */}
        <div className="navbar__actions" style={{ display: "flex", gap: "16px", alignItems: "center" }}>

          <button className={`navbar__theme-btn ${darkMode ? "navbar__theme-btn--dark" : ""}`}
            onClick={toggleCart} style={{ position: "relative" }}>
            🛒
            {totalItems > 0 && (
              <span style={{ position: "absolute", top: -5, right: -5, background: COLORS.saffron, color: "#fff", fontSize: 10, borderRadius: "50%", width: 16, height: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {totalItems}
              </span>
            )}
          </button>
          <button className={`navbar__theme-btn ${darkMode ? "navbar__theme-btn--dark" : ""}`}
            onClick={toggleTheme}>{darkMode ? "☀️" : "🌙"}</button>
          <button className={`navbar__hamburger ${darkMode ? "navbar__hamburger--dark" : ""}`}
            onClick={() => setOpen(true)}>☰</button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      {open && (
        <div className={`navbar__overlay ${darkMode ? "navbar__overlay--dark" : "navbar__overlay--light"}`}>
          <button className={`navbar__close ${darkMode ? "navbar__close--dark" : ""}`}
            onClick={() => setOpen(false)}>✕</button>

          {NAV_LINKS.map((l, i) => (
            <button key={l} className={`navbar__overlay-link ${darkMode ? "navbar__overlay-link--dark" : ""}`}
              style={{ animationDelay: `${i * 0.06}s` }}
              onClick={() => { scrollTo(l); setOpen(false); }}>{l}</button>
          ))}

          <Button variant="whatsapp" href={WHATSAPP_URL}>📲 Order on WhatsApp</Button>
        </div>
      )}
    </>
  );
}
