import { useState } from "react";
import { useTheme }  from "../../context/ThemeContext";
import useCartStore from "../../store/useCartStore";
import { useInView } from "../../hooks/useInView";
import SectionTitle  from "../SectionTitle";
import VegBadge      from "../VegBadge";
import { COLORS, MENU_DATA } from "../../constants";

const fadeUp = (v,d=0) => ({ opacity:v?1:0, transform:v?"translateY(0)":"translateY(28px)", transition:`opacity 0.7s ease ${d}s,transform 0.7s ease ${d}s` });

export default function MenuSection() {
  const { darkMode }  = useTheme();
  const { addToCart } = useCartStore();
  const [ref, inView] = useInView();
  const [active, setActive] = useState("Starters");
  const tabs = Object.keys(MENU_DATA);

  return (
    <section id="menu" style={{ padding:"72px 24px", background:darkMode?COLORS.charcoal:COLORS.cream, width:"100%", boxSizing:"border-box" }} ref={ref}>
      <div style={{ maxWidth:860, margin:"0 auto" }}>
        <SectionTitle label="Explore" title="Our Menu" light={darkMode} />
        <div style={{ display:"flex", gap:8, overflowX:"auto", paddingBottom:8, marginBottom:36, justifyContent:"center", scrollbarWidth:"none" }}>
          {tabs.map(tab => (
            <button key={tab} onClick={() => setActive(tab)} style={{
              flexShrink:0, padding:"8px 20px", borderRadius:40,
              border:`1.5px solid ${active===tab?COLORS.saffron:COLORS.saffron+"33"}`,
              background:active===tab?`linear-gradient(135deg,${COLORS.saffron},${COLORS.ember})`:"transparent",
              color:active===tab?"#fff":(darkMode?COLORS.lightMushroom:COLORS.mushroom),
              fontFamily:"'DM Sans',sans-serif", fontSize:13, fontWeight:600, cursor:"pointer", transition:"all 0.25s",
            }}>{tab}</button>
          ))}
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))", gap:14 }}>
          {MENU_DATA[active].map((item,i) => (
            <div key={item.name} style={{ ...fadeUp(inView,i*0.07), background:darkMode?`${COLORS.bark}cc`:COLORS.ivory, border:`1px solid ${COLORS.saffron}18`, borderRadius:16, padding:"18px", display:"flex", gap:14, alignItems:"flex-start", transition:"transform 0.25s,box-shadow 0.25s" }}
              onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow=`0 8px 24px ${COLORS.saffron}18`;}}
              onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="";}}>
              <div style={{ fontSize:34, flexShrink:0, background:darkMode?COLORS.charcoal:COLORS.cream, width:52, height:52, borderRadius:12, display:"flex", alignItems:"center", justifyContent:"center", border:`1px solid ${COLORS.saffron}22` }}>{item.emoji}</div>
              <div style={{ flex:1, minWidth:0 }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:6 }}>
                  <h4 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:17, fontWeight:700, margin:0, color:darkMode?COLORS.cream:COLORS.bark }}>{item.name}</h4>
                  <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:18, fontWeight:700, color:COLORS.saffron, flexShrink:0 }}>{item.price}</span>
                </div>
                <p style={{ fontSize:12, color:COLORS.mushroom, fontFamily:"'DM Sans',sans-serif", lineHeight:1.5, margin:"4px 0 8px" }}>{item.ingredients}</p>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <VegBadge veg={item.veg} />
                  <button onClick={() => addToCart(item)} style={{ background: COLORS.saffron, color: "#fff", border: "none", borderRadius: "8px", padding: "6px 12px", fontSize: "12px", fontWeight: "bold", cursor: "pointer" }}>➕ Add</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
