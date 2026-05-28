import { useTheme }  from "../../context/ThemeContext";
import { useInView } from "../../hooks/useInView";
import SectionTitle  from "../SectionTitle";
import Button        from "../Button";
import { COLORS, INSTAGRAM_URL } from "../../constants";

const fadeUp = (v,d=0) => ({ opacity:v?1:0, transform:v?"translateY(0)":"translateY(28px)", transition:`opacity 0.7s ease ${d}s,transform 0.7s ease ${d}s` });
const POSTS  = ["🍛","🫕","🧀","🍢","🍰","🥭","☕","🌿","🏮"];

export default function Instagram() {
  const { darkMode }  = useTheme();
  const [ref, inView] = useInView();
  return (
    <section style={{ padding:"72px 24px", background:darkMode?COLORS.charcoal:COLORS.cream, width:"100%", boxSizing:"border-box" }} ref={ref}>
      <SectionTitle label="@spiceroutekitchen" title="Follow Our Story" light={darkMode} />
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:8, maxWidth:480, margin:"0 auto 32px" }}>
        {POSTS.map((emoji,i) => (
          <a key={i} href={INSTAGRAM_URL} target="_blank" rel="noreferrer" style={{ ...fadeUp(inView,i*0.06), aspectRatio:"1", background:darkMode?`linear-gradient(135deg,${COLORS.bark},${COLORS.charcoal})`:COLORS.ivory, border:`1px solid ${COLORS.saffron}22`, borderRadius:12, display:"flex", alignItems:"center", justifyContent:"center", fontSize:32, textDecoration:"none", transition:"transform 0.25s,box-shadow 0.25s" }}
            onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.05)";e.currentTarget.style.boxShadow=`0 8px 24px ${COLORS.saffron}33`;}}
            onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="";}}>
            {emoji}
          </a>
        ))}
      </div>
      <div style={{ textAlign:"center" }}>
        <Button variant="instagram" href={INSTAGRAM_URL}>📸 Follow @spiceroutekitchen</Button>
      </div>
    </section>
  );
}
