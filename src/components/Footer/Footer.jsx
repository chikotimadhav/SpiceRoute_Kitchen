import { useTheme } from "../../context/ThemeContext";
import { NAV_LINKS, COLORS, WHATSAPP_URL, INSTAGRAM_URL, PHONE_URL } from "../../constants";

export default function Footer() {
  const { darkMode } = useTheme();
  const scrollTo = (id) => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });

  const socials = [
    { href: WHATSAPP_URL,   icon: "💬", bg: "#25D36622", border: "#25D36644" },
    { href: INSTAGRAM_URL,  icon: "📸", bg: "#fd1d1d22", border: "#fd1d1d44" },
    { href: PHONE_URL,      icon: "📞", bg: `${COLORS.saffron}22`, border: `${COLORS.saffron}44`, target: "_self" },
  ];

  return (
    <footer style={{ background: COLORS.charcoal, borderTop: `1px solid ${COLORS.saffron}22`, padding: "48px 24px 32px", width: "100%", boxSizing: "border-box" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        {/* Logo */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
          <div style={{ width: 44, height: 44, borderRadius: "50%", background: `linear-gradient(135deg,${COLORS.saffron},${COLORS.ember})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>🌶️</div>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 700, color: COLORS.cream }}>Spice Route Kitchen</div>
            <div style={{ fontSize: 10, letterSpacing: 3, color: COLORS.saffron, fontFamily: "'DM Sans',sans-serif" }}>Fresh Flavors. Memorable Moments.</div>
          </div>
        </div>

        {/* Nav links */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center", marginBottom: 24 }}>
          {NAV_LINKS.map(l => (
            <button key={l} onClick={() => scrollTo(l)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 13, color: COLORS.mushroom, fontFamily: "'DM Sans',sans-serif", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = COLORS.saffron}
              onMouseLeave={e => e.target.style.color = COLORS.mushroom}>{l}</button>
          ))}
        </div>

        {/* Social icons */}
        <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 24 }}>
          {socials.map(s => (
            <a key={s.href} href={s.href} target={s.target || "_blank"} rel="noreferrer" style={{ width: 40, height: 40, borderRadius: "50%", background: s.bg, border: `1px solid ${s.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, textDecoration: "none" }}>{s.icon}</a>
          ))}
        </div>

        <div style={{ borderTop: `1px solid ${COLORS.saffron}18`, paddingTop: 20, fontSize: 12, color: COLORS.mushroom + "99", fontFamily: "'DM Sans',sans-serif", lineHeight: 1.8 }}>
          <p>Road No. 3, Jubilee Hills, Hyderabad, Telangana, India</p>
          <p>© {new Date().getFullYear()} Spice Route Kitchen. All rights reserved. Made with ❤️ & 🌶️</p>
          
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginTop: 12 }}>
            <span>designed by</span>
            <a href="https://www.instagram.com/chikoti_creations?igsh=MWU3eGZ6c3Zyam1taA%3D%3D" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 4, color: COLORS.saffron, textDecoration: "none", fontWeight: "bold" }}>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.332.014 7.052.072 5.197.157 3.618.525 2.345 1.799 1.072 3.072.704 4.651.619 6.51.561 7.79.547 8.199.547 11.452s.014 3.662.072 4.942c.085 1.859.453 3.438 1.726 4.711s2.852 1.641 4.711 1.726c1.28.058 1.689.072 4.942.072s3.662-.014 4.942-.072c1.859-.085 3.438-.453 4.711-1.726s1.641-2.852 1.726-4.711c.058-1.28.072-1.689.072-4.942s-.014-3.662-.072-4.942c-.085-1.859-.453-3.438-1.726-4.711C20.337.525 18.758.157 16.899.072 15.619.014 15.21 0 11.96 0h.04z" />
                    <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
                @chikoti_creations
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
