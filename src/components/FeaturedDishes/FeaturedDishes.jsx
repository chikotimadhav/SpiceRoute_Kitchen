import { useTheme }        from "../../context/ThemeContext";
import useCartStore       from "../../store/useCartStore";
import { useInView }       from "../../hooks/useInView";
import SectionTitle        from "../SectionTitle";
import VegBadge            from "../VegBadge";
import { COLORS, FEATURED_DISHES } from "../../constants";

const fadeUp = (v,d=0) => ({ opacity:v?1:0, transform:v?"translateY(0)":"translateY(28px)", transition:`opacity 0.7s ease ${d}s,transform 0.7s ease ${d}s` });

export default function FeaturedDishes() {
  const { darkMode } = useTheme();
  const { addToCart } = useCartStore();
  const [ref, inView] = useInView();
  return (
    <section style={{ padding:"72px 24px", background:darkMode?COLORS.charcoal:COLORS.cream, width:"100%", boxSizing:"border-box" }} ref={ref}>
      <div style={{ maxWidth:900, margin:"0 auto" }}>
        <SectionTitle label="Chef's Selection" title="Signature Dishes" light={darkMode} />
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:20 }}>
          {FEATURED_DISHES.map((dish,i) => (
            <div key={dish.name} style={{ ...fadeUp(inView,i*0.1), background:darkMode?`linear-gradient(135deg,${COLORS.bark},${COLORS.charcoal})`:COLORS.ivory, border:`1px solid ${COLORS.saffron}22`, borderRadius:20, padding:"24px 20px", position:"relative", overflow:"hidden", transition:"transform 0.3s,box-shadow 0.3s", display:"flex", flexDirection:"column", justifyContent:"space-between" }}
              onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.boxShadow=`0 12px 32px ${COLORS.saffron}22`;}}
              onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="";}}>
              <div style={{ position:"absolute", inset:0, background:dish.bg, opacity:0.6 }} />
              <div style={{ position:"relative" }}>
                <div style={{ fontSize:44, marginBottom:12 }}>{dish.emoji}</div>
                <VegBadge veg={dish.veg} />
                <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:20, fontWeight:700, color:darkMode?COLORS.cream:COLORS.bark, margin:"10px 0 6px" }}>{dish.name}</h3>
                <p style={{ fontSize:13, color:COLORS.mushroom, fontFamily:"'DM Sans',sans-serif", lineHeight:1.5, marginBottom:14 }}>{dish.desc}</p>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:26, fontWeight:700, background:`linear-gradient(135deg,${COLORS.saffron},${COLORS.gold})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>{dish.price}</div>
                  <button onClick={() => addToCart(dish)} style={{ background: COLORS.saffron, color: "#fff", border: "none", borderRadius: "8px", padding: "6px 12px", fontSize: "12px", fontWeight: "bold", cursor: "pointer", position:"relative", zIndex:2 }}>➕ Add</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
