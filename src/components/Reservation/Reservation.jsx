import { useState }  from "react";
import { useTheme }  from "../../context/ThemeContext";
import { useInView } from "../../hooks/useInView";
import SectionTitle  from "../SectionTitle";
import { COLORS, WHATSAPP_URL } from "../../constants";
import { buildWhatsAppLink }   from "../../utils/formatDate";

const fadeUp = (v,d=0) => ({ opacity:v?1:0, transform:v?"translateY(0)":"translateY(28px)", transition:`opacity 0.7s ease ${d}s,transform 0.7s ease ${d}s` });

export default function Reservation() {
  const { darkMode }  = useTheme();
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name:"", mobile:"", guests:"2", date:"", time:"", request:"" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.mobile) return;
    const msg = `Hi! I'd like to reserve a table at Spice Route Kitchen.\n\n👤 Name: ${form.name}\n📱 Mobile: ${form.mobile}\n👥 Guests: ${form.guests}\n📅 Date & Time: ${form.date} at ${form.time}\n📝 Request: ${form.request || "None"}`;
    window.open(buildWhatsAppLink("91701336839", msg), "_blank");
    setSent(true); setTimeout(() => setSent(false), 4000);
  };

  const inp = (extra={}) => ({
    width:"100%", padding:"12px 16px",
    background:darkMode?`${COLORS.bark}88`:COLORS.cream,
    border:`1.5px solid ${COLORS.saffron}33`,
    borderRadius:12, color:darkMode?COLORS.cream:COLORS.bark,
    fontFamily:"'DM Sans',sans-serif", fontSize:14, outline:"none", boxSizing:"border-box",
    ...extra,
  });
  const focus = e => e.target.style.borderColor = COLORS.saffron;
  const blur  = e => e.target.style.borderColor = COLORS.saffron + "33";

  return (
    <section id="contact" style={{ padding:"72px 24px", background:`linear-gradient(160deg,${COLORS.bark},${COLORS.charcoal})`, width:"100%", boxSizing:"border-box" }} ref={ref}>
      <div style={{ maxWidth:560, margin:"0 auto" }}>
        <SectionTitle label="Book a Table" title="Make a Reservation" light={true} />
        <div style={fadeUp(inView,0.1)}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
            <input placeholder="Your Name"     value={form.name}   onChange={e=>setForm({...form,name:e.target.value})}   style={inp()} onFocus={focus} onBlur={blur} />
            <input placeholder="Mobile Number" value={form.mobile} onChange={e=>setForm({...form,mobile:e.target.value})} style={inp()} onFocus={focus} onBlur={blur} />
            <select value={form.guests} onChange={e=>setForm({...form,guests:e.target.value})} style={inp()}>
              {["1","2","3","4","5","6","7","8+"].map(n=><option key={n} value={n}>{n} {n==="1"?"Guest":"Guests"}</option>)}
            </select>
            <input type="date" value={form.date} onChange={e=>setForm({...form,date:e.target.value})} style={inp()} onFocus={focus} onBlur={blur} />
            <input type="time" value={form.time} onChange={e=>setForm({...form,time:e.target.value})} style={inp({gridColumn:"span 2"})} onFocus={focus} onBlur={blur} />
            <textarea placeholder="Special requests (allergies, occasions, seating...)" value={form.request} onChange={e=>setForm({...form,request:e.target.value})} rows={3} style={inp({gridColumn:"span 2",resize:"none"})} onFocus={focus} onBlur={blur} />
          </div>
          <button onClick={handleSubmit} style={{ width:"100%", marginTop:14, background:sent?"#25D366":`linear-gradient(135deg,${COLORS.saffron},${COLORS.ember})`, color:"#fff", border:"none", borderRadius:40, padding:"15px", fontSize:15, fontWeight:700, fontFamily:"'DM Sans',sans-serif", cursor:"pointer", boxShadow:`0 4px 20px ${COLORS.saffron}44`, transition:"all 0.3s" }}>
            {sent ? "✅ Sent via WhatsApp!" : "📲 Reserve via WhatsApp"}
          </button>
          <p style={{ textAlign:"center", marginTop:10, fontSize:12, color:COLORS.mushroom, fontFamily:"'DM Sans',sans-serif" }}>We'll confirm your reservation within 30 minutes</p>
        </div>
      </div>
    </section>
  );
}
