import { useInView }  from "../../hooks/useInView";
import SectionTitle   from "../SectionTitle";
import { COLORS, STATS } from "../../constants";

const fadeUp = (v,d=0) => ({ opacity:v?1:0, transform:v?"translateY(0)":"translateY(28px)", transition:`opacity 0.7s ease ${d}s,transform 0.7s ease ${d}s` });

export default function About() {
  const [ref, inView] = useInView();
  return (
    <section id="about" style={{ padding:"72px 24px", background:`linear-gradient(160deg,${COLORS.bark},${COLORS.charcoal})`, width:"100%", boxSizing:"border-box" }} ref={ref}>
      <div style={{ maxWidth:700, margin:"0 auto", textAlign:"center" }}>
        <div style={fadeUp(inView,0)}>
          <p style={{ fontSize:11, letterSpacing:5, textTransform:"uppercase", color:COLORS.saffron, fontFamily:"'DM Sans',sans-serif", fontWeight:700, marginBottom:16 }}>Our Story</p>
          <div style={{ fontSize:56, marginBottom:20 }}>🌶️</div>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(28px,7vw,50px)", fontWeight:700, color:COLORS.cream, lineHeight:1.15, marginBottom:20 }}>Fresh Flavors.<br/>Memorable Moments.</h2>
        </div>
        <div style={fadeUp(inView,0.15)}>
          <p style={{ fontSize:16, lineHeight:1.8, color:COLORS.lightMushroom, fontFamily:"'DM Sans',sans-serif", marginBottom:36 }}>
            At Spice Route Kitchen, we blend traditional Indian recipes with contemporary presentation to create a memorable dining experience. Every dish tells a story — of generations, of spice trails, of flavors that linger long after the meal.
          </p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:16 }}>
            {STATS.map(s => (
              <div key={s.l} style={{ background:`${COLORS.saffron}11`, border:`1px solid ${COLORS.saffron}22`, borderRadius:16, padding:"20px 12px" }}>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:32, fontWeight:700, color:COLORS.saffron }}>{s.n}</div>
                <div style={{ fontSize:12, color:COLORS.lightMushroom, fontFamily:"'DM Sans',sans-serif", marginTop:4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
