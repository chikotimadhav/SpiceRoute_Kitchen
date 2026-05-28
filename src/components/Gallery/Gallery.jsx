import { useInView }  from "../../hooks/useInView";
import SectionTitle   from "../SectionTitle";
import { COLORS, GALLERY_ITEMS } from "../../constants";

const fadeUp = (v,d=0) => ({ opacity:v?1:0, transform:v?"translateY(0)":"translateY(28px)", transition:`opacity 0.7s ease ${d}s,transform 0.7s ease ${d}s` });

export default function Gallery() {
  const [ref, inView] = useInView(0.1);
  return (
    <section id="gallery" style={{ padding:"72px 24px", background:`linear-gradient(160deg,${COLORS.charcoal},${COLORS.bark})`, width:"100%", boxSizing:"border-box" }} ref={ref}>
      <SectionTitle label="Inside Spice Route" title="Gallery" light={true} />
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:10, maxWidth:800, margin:"0 auto" }}>
        {GALLERY_ITEMS.map((item,i) => (
          <div key={item.label} style={{ ...fadeUp(inView,i*0.08), aspectRatio:"1", borderRadius:14, background:`linear-gradient(160deg,${item.bg}33,${item.bg}77)`, border:`1px solid ${item.bg}44`, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:8, transition:"transform 0.3s" }}
            onMouseEnter={e=>e.currentTarget.style.transform="scale(1.03)"}
            onMouseLeave={e=>e.currentTarget.style.transform=""}>
            <div style={{ fontSize:36 }}>{item.emoji}</div>
            <div style={{ fontSize:10, letterSpacing:2, textTransform:"uppercase", color:COLORS.lightMushroom, fontFamily:"'DM Sans',sans-serif" }}>{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
