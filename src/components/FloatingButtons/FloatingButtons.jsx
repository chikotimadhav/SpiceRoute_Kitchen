import { useScrollY } from "../../hooks/useScrollY";
import { COLORS, WHATSAPP_URL } from "../../constants";

export default function FloatingButtons() {
  const scrollY = useScrollY();
  return (
    <div style={{
      position: "fixed", bottom: 24, right: 20, zIndex: 999,
      display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-end",
    }}>
      {scrollY > 400 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            width: 42, height: 42, borderRadius: "50%",
            background: `${COLORS.bark}ee`,
            border: `1.5px solid ${COLORS.saffron}44`,
            color: COLORS.saffron, fontSize: 16, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 4px 12px #00000044",
            animation: "fadeUpIn 0.3s ease",
          }}
          aria-label="Scroll to top"
        >↑</button>
      )}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        style={{
          width: 54, height: 54, borderRadius: "50%", background: "#25D366",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 26, textDecoration: "none",
          animation: "pulse 3s ease infinite",
        }}
        aria-label="Chat on WhatsApp"
      >💬</a>
    </div>
  );
}
