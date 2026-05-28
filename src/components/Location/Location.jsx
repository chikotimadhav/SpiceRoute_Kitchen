import { useTheme }  from "../../context/ThemeContext";
import { useInView } from "../../hooks/useInView";
import SectionTitle  from "../SectionTitle";
import { COLORS, CONTACT_INFO, MAPS_EMBED_URL } from "../../constants";

const fadeUp = (v,d=0) => ({ opacity:v?1:0, transform:v?"translateY(0)":"translateY(28px)", transition:`opacity 0.7s ease ${d}s,transform 0.7s ease ${d}s` });

export default function Location() {
  const { darkMode }  = useTheme();
  const [ref, inView] = useInView();
  return (
    <section style={{ padding:"72px 24px", background:darkMode?COLORS.charcoal:COLORS.cream, width:"100%", boxSizing:"border-box" }} ref={ref}>
      <div style={{ maxWidth:700, margin:"0 auto" }}>
        <SectionTitle label="Find Us" title="Location & Contact" light={darkMode} />
        <div style={{ ...fadeUp(inView,0), borderRadius:20, overflow:"hidden", border:`1px solid ${COLORS.saffron}33`, marginBottom:20, boxShadow:"0 8px 40px #00000033" }}>
          <iframe title="Spice Route Kitchen Map" src={MAPS_EMBED_URL} width="100%" height="240" style={{ border:0, display:"block" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
        <div style={{ ...fadeUp(inView,0.15), display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
          {CONTACT_INFO.map(c => (
            <a key={c.label} href={c.href||undefined} target={c.href?"_blank":undefined} rel="noreferrer" style={{ background:darkMode?`${COLORS.saffron}0d`:COLORS.ivory, border:`1px solid ${COLORS.saffron}22`, borderRadius:14, padding:"14px", textDecoration:"none", display:"block", transition:"background 0.2s,border-color 0.2s" }}
              onMouseEnter={e=>{e.currentTarget.style.background=`${COLORS.saffron}1a`;e.currentTarget.style.borderColor=COLORS.saffron+"55";}}
              onMouseLeave={e=>{e.currentTarget.style.background=darkMode?`${COLORS.saffron}0d`:COLORS.ivory;e.currentTarget.style.borderColor=COLORS.saffron+"22";}}>
              <div style={{ fontSize:20, marginBottom:5 }}>{c.icon}</div>
              <div style={{ fontSize:10, letterSpacing:2, textTransform:"uppercase", color:COLORS.saffron, fontFamily:"'DM Sans',sans-serif", fontWeight:700, marginBottom:3 }}>{c.label}</div>
              <div style={{ fontSize:12, color:darkMode?COLORS.lightMushroom:COLORS.mushroom, fontFamily:"'DM Sans',sans-serif", whiteSpace:"pre-line", lineHeight:1.5 }}>{c.value}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
