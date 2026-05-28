import { COLORS } from "../../constants";

export default function VegBadge({ veg }) {
  return (
    <span style={{
      fontSize: 10, fontWeight: 700, letterSpacing: 1,
      padding: "2px 8px", borderRadius: 4,
      border: `1.5px solid ${veg ? "#4CAF50" : COLORS.saffron}`,
      color: veg ? "#4CAF50" : COLORS.saffron,
      textTransform: "uppercase", display: "inline-block",
    }}>
      {veg ? "● Veg" : "● Non-Veg"}
    </span>
  );
}
