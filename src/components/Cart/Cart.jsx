import { useTheme } from "../../context/ThemeContext";
import useCartStore from "../../store/useCartStore";
import { COLORS } from "../../constants";

export default function Cart() {
  const { darkMode } = useTheme();
  const { items, isCartOpen, closeCart, updateQuantity, removeFromCart, openCheckout } = useCartStore();

  if (!isCartOpen) return null;

  const total = items.reduce((sum, item) => {
    const price = parseInt(item.price.replace("₹", ""), 10) || 0;
    return sum + price * item.quantity;
  }, 0);

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 9999, display: "flex", justifyContent: "flex-end", background: "rgba(0,0,0,0.5)" }}>
      <div style={{ width: "100%", maxWidth: 400, background: darkMode ? COLORS.charcoal : COLORS.cream, height: "100%", display: "flex", flexDirection: "column", boxShadow: "-4px 0 24px rgba(0,0,0,0.2)", animation: "slideIn 0.3s forwards" }}>
        
        <div style={{ padding: "20px", borderBottom: `1px solid ${COLORS.saffron}33`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ margin: 0, fontFamily: "'Cormorant Garamond',serif", color: darkMode ? COLORS.cream : COLORS.bark }}>Your Cart</h2>
          <button onClick={closeCart} style={{ background: "transparent", border: "none", fontSize: 24, color: COLORS.mushroom, cursor: "pointer" }}>✕</button>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "20px" }}>
          {items.length === 0 ? (
            <p style={{ textAlign: "center", color: COLORS.mushroom, marginTop: 40, fontFamily: "'DM Sans',sans-serif" }}>Your cart is empty.</p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {items.map(item => (
                <div key={item.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: darkMode ? `${COLORS.bark}88` : COLORS.ivory, padding: 12, borderRadius: 12, border: `1px solid ${COLORS.saffron}22` }}>
                  <div>
                    <h4 style={{ margin: "0 0 4px", fontSize: 15, color: darkMode ? COLORS.cream : COLORS.bark, fontFamily: "'Cormorant Garamond',serif" }}>{item.name}</h4>
                    <div style={{ color: COLORS.saffron, fontWeight: "bold", fontSize: 14 }}>{item.price}</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <button onClick={() => updateQuantity(item.name, -1)} style={{ background: COLORS.saffron, color: "#fff", border: "none", width: 24, height: 24, borderRadius: 4, cursor: "pointer" }}>-</button>
                    <span style={{ color: darkMode ? COLORS.cream : COLORS.bark, fontFamily: "'DM Sans',sans-serif", width: 16, textAlign: "center" }}>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.name, 1)} style={{ background: COLORS.saffron, color: "#fff", border: "none", width: 24, height: 24, borderRadius: 4, cursor: "pointer" }}>+</button>
                    <button onClick={() => removeFromCart(item.name)} style={{ background: "transparent", border: "none", color: "red", cursor: "pointer", marginLeft: 8, fontSize: 18 }}>🗑️</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div style={{ padding: "20px", borderTop: `1px solid ${COLORS.saffron}33`, background: darkMode ? COLORS.bark : COLORS.ivory }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16, fontSize: 18, fontWeight: "bold", color: darkMode ? COLORS.cream : COLORS.bark, fontFamily: "'Cormorant Garamond',serif" }}>
              <span>Total:</span>
              <span>₹{total}</span>
            </div>
            <button onClick={openCheckout} style={{ width: "100%", padding: "14px", background: `linear-gradient(135deg,${COLORS.saffron},${COLORS.ember})`, color: "#fff", border: "none", borderRadius: 8, fontSize: 16, fontWeight: "bold", cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
