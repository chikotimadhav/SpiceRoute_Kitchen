import { COLORS } from "../constants";

/**
 * Minimal layout for auth pages (login / register).
 * Centered card on a dark gradient background.
 */
export default function AuthLayout({ children }) {
  return (
    <div style={{
      minHeight: "100vh",
      background: `linear-gradient(160deg, ${COLORS.bark}, ${COLORS.charcoal})`,
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "24px",
    }}>
      <div style={{
        background: `${COLORS.bark}cc`,
        border: `1px solid ${COLORS.saffron}22`,
        borderRadius: 24, padding: "40px 32px",
        width: "100%", maxWidth: 420,
        boxShadow: "0 16px 48px #00000055",
      }}>
        {children}
      </div>
    </div>
  );
}
