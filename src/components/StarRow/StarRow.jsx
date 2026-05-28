import { COLORS } from "../../constants";

export default function StarRow({ count = 5 }) {
  return (
    <span style={{ color: COLORS.saffron, fontSize: 15, letterSpacing: 2 }}>
      {"★".repeat(count)}
    </span>
  );
}
