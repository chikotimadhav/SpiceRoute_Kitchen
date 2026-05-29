import { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import useCartStore from "../../store/useCartStore";
import { COLORS } from "../../constants";

export default function CheckoutModal() {
  const { darkMode } = useTheme();
  const { isCheckoutOpen, closeCheckout, items, clearCart } = useCartStore();
  
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", phone: "", address: "", payment: "COD" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [otpState, setOtpState] = useState({ sent: false, generated: "", entered: "", verified: false });

  if (!isCheckoutOpen) return null;

  const total = items.reduce((sum, item) => {
    const price = parseInt(item.price.replace("₹", ""), 10) || 0;
    return sum + price * item.quantity;
  }, 0);

  const handleSendOtp = () => {
    if (!form.phone || form.phone.length < 5) {
      alert("Please enter a valid phone number.");
      return;
    }
    // Simulate backend generating OTP
    const generated = Math.floor(1000 + Math.random() * 9000).toString();
    setOtpState({ ...otpState, sent: true, generated, entered: "" });
    
    // Simulate sending SMS
    setTimeout(() => {
      alert(`Backend SMS Service\n\nYour Spice Route Kitchen OTP is: ${generated}`);
    }, 500);
  };

  const handleVerifyOtp = () => {
    if (otpState.entered === otpState.generated) {
      setOtpState({ ...otpState, verified: true });
    } else {
      alert("Incorrect OTP. Please try again.");
    }
  };

  const handlePlaceOrder = async () => {
    setIsSubmitting(true);
    const orderDetails = items.map(i => `${i.quantity}x ${i.name} (₹${parseInt(i.price.replace("₹", ""), 10) * i.quantity})`).join("\n");
    let success = false;

    try {
      const response = await fetch("https://formsubmit.co/ajax/chikoticreations@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            _subject: `New Order from ${form.name} - ₹${total}`,
            Customer_Name: form.name,
            Phone: form.phone,
            Delivery_Address: form.address,
            Payment_Method: form.payment,
            Order_Items: orderDetails,
            Order_Total: `₹${total}`
        })
      });

      if (response.ok) {
        success = true;
      } else {
        throw new Error("FormSubmit API returned an error");
      }
    } catch (error) {
      console.error("Order submission failed, falling back to mailto:", error);
      // Fallback to mailto if API fails
      const body = `New Order from ${form.name}\n\nPhone: ${form.phone}\nAddress: ${form.address}\nPayment: ${form.payment}\n\nItems:\n${orderDetails}\n\nTotal: ₹${total}`;
      const subject = `New Order: ₹${total}`;
      window.location.href = `mailto:chikoticreations@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      success = true; // Mailto opened
    } finally {
      setIsSubmitting(false);
      if (success) {
        setStep(3);
        clearCart();
      } else {
        alert("There was an issue processing your order. Please try again.");
      }
    }
  };

  const inp = {
    width: "100%", padding: "12px 16px", marginBottom: 12,
    background: darkMode ? `${COLORS.bark}88` : COLORS.cream,
    border: `1.5px solid ${COLORS.saffron}33`,
    borderRadius: 8, color: darkMode ? COLORS.cream : COLORS.bark,
    fontFamily: "'DM Sans',sans-serif", fontSize: 14, outline: "none", boxSizing: "border-box"
  };

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 10000, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.6)", padding: 20 }}>
      <div style={{ width: "100%", maxWidth: 500, background: darkMode ? COLORS.charcoal : COLORS.ivory, borderRadius: 16, overflow: "hidden", boxShadow: "0 10px 40px rgba(0,0,0,0.3)", animation: "fadeInUp 0.3s forwards" }}>
        
        <div style={{ padding: "20px 24px", borderBottom: `1px solid ${COLORS.saffron}33`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ margin: 0, fontFamily: "'Cormorant Garamond',serif", color: darkMode ? COLORS.cream : COLORS.bark }}>Checkout</h2>
          {step !== 3 && <button onClick={closeCheckout} style={{ background: "transparent", border: "none", fontSize: 24, color: COLORS.mushroom, cursor: "pointer" }}>✕</button>}
        </div>

        <div style={{ padding: 24 }}>
          {step === 1 && (
            <div>
              <h3 style={{ marginTop: 0, color: COLORS.saffron, fontFamily: "'DM Sans',sans-serif", fontSize: 16 }}>Step 1: Delivery Details</h3>
              <input placeholder="Full Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} style={inp} disabled={otpState.verified} />
              
              <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                <input placeholder="Phone Number" value={form.phone} onChange={e => {
                  setForm({...form, phone: e.target.value});
                  if (otpState.sent) setOtpState({ sent: false, generated: "", entered: "", verified: false }); // Reset OTP if phone changes
                }} style={{ ...inp, marginBottom: 0 }} disabled={otpState.verified} />
                
                {!otpState.verified && (
                  <button onClick={handleSendOtp} style={{ flexShrink: 0, padding: "0 16px", background: COLORS.saffron, color: "#fff", border: "none", borderRadius: 8, fontSize: 14, fontWeight: "bold", cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>
                    {otpState.sent ? "Resend OTP" : "Send OTP"}
                  </button>
                )}
                {otpState.verified && (
                  <div style={{ display: "flex", alignItems: "center", padding: "0 16px", background: "#e8f5e9", color: "#2e7d32", borderRadius: 8, fontSize: 14, fontWeight: "bold", border: "1.5px solid #a5d6a7" }}>
                    Verified ✓
                  </div>
                )}
              </div>

              {otpState.sent && !otpState.verified && (
                <div style={{ display: "flex", gap: 8, marginBottom: 12, padding: 12, background: darkMode ? `${COLORS.bark}44` : "#fef0e6", borderRadius: 8, border: `1px dashed ${COLORS.saffron}` }}>
                  <input placeholder="Enter 4-digit OTP" maxLength={4} value={otpState.entered} onChange={e => setOtpState({...otpState, entered: e.target.value})} style={{ ...inp, marginBottom: 0, flex: 1, textAlign: "center", letterSpacing: 4, fontSize: 18 }} />
                  <button onClick={handleVerifyOtp} style={{ padding: "0 24px", background: `linear-gradient(135deg,${COLORS.saffron},${COLORS.ember})`, color: "#fff", border: "none", borderRadius: 8, fontSize: 14, fontWeight: "bold", cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>Verify</button>
                </div>
              )}

              <textarea placeholder="Delivery Address" rows={3} value={form.address} onChange={e => setForm({...form, address: e.target.value})} style={{...inp, resize: "none"}} />
              
              <button disabled={!form.name || !otpState.verified || !form.address} onClick={() => setStep(2)} style={{ width: "100%", padding: "14px", marginTop: 10, background: (!form.name || !otpState.verified || !form.address) ? COLORS.mushroom : `linear-gradient(135deg,${COLORS.saffron},${COLORS.ember})`, color: "#fff", border: "none", borderRadius: 8, fontSize: 16, fontWeight: "bold", cursor: (!form.name || !otpState.verified || !form.address) ? "not-allowed" : "pointer", fontFamily: "'DM Sans',sans-serif" }}>
                Continue to Payment
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 style={{ marginTop: 0, color: COLORS.saffron, fontFamily: "'DM Sans',sans-serif", fontSize: 16 }}>Step 2: Payment Method</h3>
              <label style={{ display: "flex", alignItems: "center", gap: 12, padding: 16, border: `1.5px solid ${COLORS.saffron}`, borderRadius: 8, background: darkMode ? `${COLORS.bark}88` : COLORS.cream, cursor: "pointer", color: darkMode ? COLORS.cream : COLORS.bark }}>
                <input type="radio" checked readOnly style={{ accentColor: COLORS.saffron }} />
                <span style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 600 }}>Cash on Delivery (COD)</span>
              </label>

              <div style={{ marginTop: 24, display: "flex", gap: 12 }}>
                <button onClick={() => setStep(1)} disabled={isSubmitting} style={{ flex: 1, padding: "14px", background: "transparent", border: `1.5px solid ${COLORS.mushroom}`, color: COLORS.mushroom, borderRadius: 8, fontSize: 16, fontWeight: "bold", cursor: isSubmitting ? "not-allowed" : "pointer", fontFamily: "'DM Sans',sans-serif" }}>Back</button>
                <button onClick={handlePlaceOrder} disabled={isSubmitting} style={{ flex: 2, padding: "14px", background: isSubmitting ? COLORS.mushroom : `linear-gradient(135deg,${COLORS.saffron},${COLORS.ember})`, color: "#fff", border: "none", borderRadius: 8, fontSize: 16, fontWeight: "bold", cursor: isSubmitting ? "not-allowed" : "pointer", fontFamily: "'DM Sans',sans-serif" }}>
                  {isSubmitting ? "Placing Order..." : `Place Order (₹${total})`}
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <div style={{ fontSize: 60, marginBottom: 16 }}>🎉</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", color: COLORS.saffron, margin: "0 0 10px" }}>Order Placed!</h2>
              <p style={{ color: COLORS.mushroom, fontFamily: "'DM Sans',sans-serif", lineHeight: 1.5, marginBottom: 24 }}>
                Your order has been successfully recorded!
                <br /><br />
                <b>Admin Note:</b> If this is your first time receiving an order via this system, an Activation Email has been sent to <b>chikoticreations@gmail.com</b>. You MUST click "Activate" in that email before future order emails will arrive in your inbox!
              </p>
              <button onClick={() => { setStep(1); closeCheckout(); }} style={{ padding: "12px 32px", background: `linear-gradient(135deg,${COLORS.saffron},${COLORS.ember})`, color: "#fff", border: "none", borderRadius: 8, fontSize: 16, fontWeight: "bold", cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>
                Back to Menu
              </button>
            </div>
          )}
        </div>
      </div>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
