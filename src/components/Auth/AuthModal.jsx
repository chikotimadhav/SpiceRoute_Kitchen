import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import useAuthStore from "../../store/useAuthStore";
import { COLORS } from "../../constants";

export default function AuthModal() {
  const { darkMode } = useTheme();
  const { isAuthModalOpen, closeAuthModal, authView, setAuthView, login } = useAuthStore();
  
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [otpState, setOtpState] = useState({ sent: false, generated: "", entered: "" });

  if (!isAuthModalOpen) return null;

  const handleSendOtp = () => {
    if (!form.phone || form.phone.length < 10) {
      alert("Please enter a valid phone number (min 10 digits).");
      return;
    }
    if (authView === "signup" && (!form.name || !form.email)) {
      alert("Please fill in all fields.");
      return;
    }

    const generated = Math.floor(1000 + Math.random() * 9000).toString();
    setOtpState({ sent: true, generated, entered: "" });
    
    // Simulate sending SMS
    setTimeout(() => {
      alert(`Backend SMS Service\n\nYour Spice Route Kitchen OTP is: ${generated}`);
    }, 500);
  };

  const handleVerifyOtp = () => {
    if (otpState.entered === otpState.generated) {
      // Mock user login
      login({ 
        name: authView === "signup" ? form.name : "Guest User", 
        phone: form.phone,
        email: form.email 
      });
      setOtpState({ sent: false, generated: "", entered: "" });
      setForm({ name: "", email: "", phone: "" });
    } else {
      alert("Incorrect OTP. Please try again.");
    }
  };

  const resetState = () => {
    setOtpState({ sent: false, generated: "", entered: "" });
    setForm({ name: "", email: "", phone: "" });
  };

  const switchView = (view) => {
    resetState();
    setAuthView(view);
  };

  const handleClose = () => {
    resetState();
    closeAuthModal();
  };

  const inp = {
    width: "100%", padding: "14px 16px", marginBottom: 16,
    background: darkMode ? `${COLORS.bark}88` : "#fff",
    border: `1.5px solid ${darkMode ? COLORS.saffron+"44" : "#ccc"}`,
    borderRadius: 8, color: darkMode ? COLORS.cream : COLORS.charcoal,
    fontFamily: "'DM Sans',sans-serif", fontSize: 16, outline: "none", boxSizing: "border-box",
    transition: "border 0.2s"
  };

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 10000, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.6)", padding: 20 }}>
      <div style={{ width: "100%", maxWidth: 420, background: darkMode ? COLORS.charcoal : "#fff", borderRadius: 12, overflow: "hidden", boxShadow: "0 10px 40px rgba(0,0,0,0.2)", animation: "fadeInUp 0.3s forwards" }}>
        
        {/* Header */}
        <div style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ margin: 0, fontFamily: "'DM Sans',sans-serif", fontSize: 28, fontWeight: 600, color: darkMode ? COLORS.cream : COLORS.charcoal }}>
            {authView === "login" ? "Login" : "Sign up"}
          </h2>
          <button onClick={handleClose} style={{ background: "transparent", border: "none", fontSize: 24, color: darkMode ? COLORS.mushroom : "#999", cursor: "pointer", transition: "color 0.2s" }} onMouseEnter={e=>e.target.style.color=COLORS.saffron} onMouseLeave={e=>e.target.style.color=darkMode?COLORS.mushroom:"#999"}>✕</button>
        </div>

        <div style={{ padding: "0 24px 24px" }}>
          
          {/* OTP Sent State */}
          {otpState.sent ? (
            <div style={{ animation: "fadeInUp 0.3s forwards" }}>
              <p style={{ color: darkMode ? COLORS.mushroom : "#666", fontFamily: "'DM Sans',sans-serif", marginBottom: 24 }}>
                We've sent a 4-digit verification code to <br/><b>+91 {form.phone}</b>
              </p>
              
              <input placeholder="Enter OTP" maxLength={4} value={otpState.entered} onChange={e => setOtpState({...otpState, entered: e.target.value.replace(/[^0-9]/g, '')})} style={{ ...inp, textAlign: "center", letterSpacing: 12, fontSize: 24, fontWeight: "bold" }} />
              
              <button onClick={handleVerifyOtp} disabled={otpState.entered.length < 4} style={{ width: "100%", padding: "14px", background: otpState.entered.length < 4 ? (darkMode ? "#444" : "#e0e0e0") : COLORS.saffron, color: otpState.entered.length < 4 ? "#999" : "#fff", border: "none", borderRadius: 8, fontSize: 16, fontWeight: "bold", cursor: otpState.entered.length < 4 ? "not-allowed" : "pointer", fontFamily: "'DM Sans',sans-serif", transition: "background 0.2s" }}>
                Verify & {authView === "login" ? "Login" : "Create Account"}
              </button>
              
              <div style={{ textAlign: "center", marginTop: 16 }}>
                <button onClick={() => setOtpState({...otpState, sent: false})} style={{ background: "transparent", border: "none", color: COLORS.saffron, fontFamily: "'DM Sans',sans-serif", fontWeight: 600, cursor: "pointer" }}>Back</button>
              </div>
            </div>
          ) : (
            /* Input State */
            <div style={{ animation: "fadeInUp 0.3s forwards" }}>
              {authView === "signup" && (
                <>
                  <input placeholder="Full Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} style={inp} />
                  <input placeholder="Email" type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} style={inp} />
                </>
              )}
              
              <div style={{ display: "flex", alignItems: "center", ...inp, padding: 0, overflow: "hidden" }}>
                <div style={{ padding: "14px 16px", borderRight: `1px solid ${darkMode ? COLORS.saffron+"44" : "#ccc"}`, background: darkMode ? COLORS.bark : "#f8f8f8", color: darkMode ? COLORS.cream : "#666", fontWeight: "bold", fontFamily: "'DM Sans',sans-serif" }}>
                  +91
                </div>
                <input placeholder="Phone Number" value={form.phone} onChange={e => setForm({...form, phone: e.target.value.replace(/[^0-9]/g, '')})} style={{ border: "none", background: "transparent", width: "100%", padding: "14px 16px", color: darkMode ? COLORS.cream : COLORS.charcoal, fontFamily: "'DM Sans',sans-serif", fontSize: 16, outline: "none" }} maxLength={10} />
              </div>
              
              <button onClick={handleSendOtp} style={{ width: "100%", padding: "14px", background: COLORS.saffron, color: "#fff", border: "none", borderRadius: 8, fontSize: 16, fontWeight: "bold", cursor: "pointer", fontFamily: "'DM Sans',sans-serif", transition: "background 0.2s" }} onMouseEnter={e=>e.target.style.background=COLORS.ember} onMouseLeave={e=>e.target.style.background=COLORS.saffron}>
                Send One Time Password
              </button>

              <div style={{ borderTop: `1px solid ${darkMode ? COLORS.saffron+"33" : "#eee"}`, margin: "24px 0", position: "relative" }}>
                <span style={{ position: "absolute", top: -10, left: "50%", transform: "translateX(-50%)", background: darkMode ? COLORS.charcoal : "#fff", padding: "0 12px", color: darkMode ? COLORS.mushroom : "#999", fontSize: 13, fontFamily: "'DM Sans',sans-serif" }}>or</span>
              </div>
              
              <button style={{ width: "100%", padding: "14px", background: "transparent", color: darkMode ? COLORS.cream : COLORS.charcoal, border: `1px solid ${darkMode ? COLORS.saffron+"44" : "#ccc"}`, borderRadius: 8, fontSize: 16, fontWeight: "600", cursor: "pointer", fontFamily: "'DM Sans',sans-serif", display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" style={{ width: 20 }} />
                Continue with Google
              </button>
            </div>
          )}

          {/* Footer Toggle */}
          {!otpState.sent && (
            <div style={{ textAlign: "center", marginTop: 24, fontSize: 14, fontFamily: "'DM Sans',sans-serif", color: darkMode ? COLORS.mushroom : "#666" }}>
              {authView === "login" ? "New to Spice Route?" : "Already have an account?"}{" "}
              <span onClick={() => switchView(authView === "login" ? "signup" : "login")} style={{ color: COLORS.saffron, fontWeight: 600, cursor: "pointer" }}>
                {authView === "login" ? "Create account" : "Log in"}
              </span>
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
