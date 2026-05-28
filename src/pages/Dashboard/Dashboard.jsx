import { COLORS } from "../../constants";

/**
 * Admin dashboard page (placeholder).
 * Extend with real admin features: menu editor, reservation list, etc.
 */
export default function Dashboard() {
  return (
    <div style={{ minHeight: "100vh", background: COLORS.charcoal, padding: "100px 24px 60px", maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 48, color: COLORS.cream, marginBottom: 8 }}>Dashboard</h1>
      <p style={{ color: COLORS.lightMushroom, fontFamily: "'DM Sans',sans-serif" }}>Admin panel — manage menu, reservations and reviews here.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 16, marginTop: 36 }}>
        {[
          { label: "Total Reservations", value: "128",  icon: "📅" },
          { label: "Menu Items",         value: "24",   icon: "🍽️" },
          { label: "Reviews",            value: "4.9★", icon: "⭐" },
          { label: "WhatsApp Orders",    value: "56",   icon: "💬" },
        ].map(card => (
          <div key={card.label} style={{ background: `${COLORS.bark}cc`, border: `1px solid ${COLORS.saffron}22`, borderRadius: 16, padding: "24px 20px" }}>
            <div style={{ fontSize: 32, marginBottom: 8 }}>{card.icon}</div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 32, fontWeight: 700, color: COLORS.saffron }}>{card.value}</div>
            <div style={{ fontSize: 12, color: COLORS.lightMushroom, fontFamily: "'DM Sans',sans-serif", marginTop: 4 }}>{card.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
