import { COLORS } from "../../constants";

export default function SectionTitle({ label, title, light = false }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 48 }}>
      <p style={{
        fontSize: 11, letterSpacing: 4, textTransform: "uppercase",
        color: COLORS.saffron, fontWeight: 700, marginBottom: 12,
        fontFamily: "'DM Sans',sans-serif",
      }}>{label}</p>
      <h2 style={{
        fontSize: "clamp(28px,6vw,44px)",
        fontFamily: "'Cormorant Garamond',serif",
        fontWeight: 700,
        color: light ? COLORS.cream : COLORS.bark,
        lineHeight: 1.1, margin: 0,
      }}>{title}</h2>
      <div style={{
        width: 48, height: 2,
        background: `linear-gradient(90deg,${COLORS.saffron},${COLORS.gold})`,
        margin: "16px auto 0", borderRadius: 2,
      }} />
    </div>
  );
}
