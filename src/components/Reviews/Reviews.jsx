import { useTheme }  from "../../context/ThemeContext";
import { useInView } from "../../hooks/useInView";
import SectionTitle  from "../SectionTitle";
import StarRow       from "../StarRow";
import { COLORS, REVIEWS } from "../../constants";

const fadeUp = (v,d=0) => ({ opacity:v?1:0, transform:v?"translateY(0)":"translateY(28px)", transition:`opacity 0.7s ease ${d}s,transform 0.7s ease ${d}s` });

export default function Reviews() {
  const { darkMode }  = useTheme();
  const [ref, inView] = useInView();
  return (
    <section id="reviews" style={{ padding:"72px 24px", background:darkMode?COLORS.charcoal:COLORS.cream, width:"100%", boxSizing:"border-box" }} ref={ref}>
      <div style={{ maxWidth:900, margin:"0 auto" }}>
        <SectionTitle label="What Guests Say" title="Reviews" light={darkMode} />
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))", gap:16 }}>
          {REVIEWS.map((r,i) => (
            <div key={r.name} style={{ ...fadeUp(inView,i*0.1), background:darkMode?`linear-gradient(135deg,${COLORS.bark},${COLORS.charcoal})`:COLORS.ivory, border:`1px solid ${COLORS.saffron}22`, borderRadius:20, padding:"24px 20px", position:"relative" }}>
              <div style={{ position:"absolute", top:0, left:20, right:20, height:2, background:`linear-gradient(90deg,${COLORS.saffron},transparent)`, borderRadius:"0 0 2px 2px" }} />
              <StarRow count={r.rating} />
              <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:16, lineHeight:1.6, color:darkMode?COLORS.lightMushroom:COLORS.mushroom, margin:"12px 0 16px", fontStyle:"italic" }}>"{r.text}"</p>
              <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                <div style={{ width:36, height:36, borderRadius:"50%", background:`linear-gradient(135deg,${COLORS.saffron},${COLORS.ember})`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:700, color:"#fff", fontFamily:"'DM Sans',sans-serif", flexShrink:0 }}>{r.avatar}</div>
                <div style={{ fontSize:13, fontWeight:600, color:darkMode?COLORS.cream:COLORS.bark, fontFamily:"'DM Sans',sans-serif" }}>{r.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
