export const COLORS = {
  saffron:       "#E8820C",
  gold:          "#C9921A",
  ember:         "#B5451B",
  cream:         "#FDF6EC",
  ivory:         "#FAF0DC",
  charcoal:      "#1A1410",
  bark:          "#2E1A0E",
  mushroom:      "#8B7355",
  lightMushroom: "#C4A882",
};

export const NAV_LINKS = ["Menu", "About", "Gallery", "Reviews", "Contact"];

export const FEATURED_DISHES = [
  {
    name:  "Butter Chicken",
    desc:  "Slow-cooked tender chicken in velvety tomato-cream sauce",
    price: "₹349",
    veg:   false,
    emoji: "🍛",
    bg:    "linear-gradient(135deg,#E8820C22,#B5451B33)",
  },
  {
    name:  "Hyderabadi Dum Biryani",
    desc:  "Fragrant basmati layered with slow-cooked mutton & whole spices",
    price: "₹399",
    veg:   false,
    emoji: "🫕",
    bg:    "linear-gradient(135deg,#C9921A22,#8B735533)",
  },
  {
    name:  "Paneer Tikka Platter",
    desc:  "Char-grilled cottage cheese with mint chutney & tandoor aroma",
    price: "₹299",
    veg:   true,
    emoji: "🧀",
    bg:    "linear-gradient(135deg,#4CAF5022,#2E7D3233)",
  },
  {
    name:  "Mango Cheesecake",
    desc:  "Alphonso mango coulis on velvety chilled New York cheesecake",
    price: "₹229",
    veg:   true,
    emoji: "🍰",
    bg:    "linear-gradient(135deg,#FFD70022,#FFA50033)",
  },
];

export const MENU_DATA = {
  Starters: [
    { name: "Seekh Kebab",          ingredients: "Minced lamb, ginger, coriander, chaat masala",        price: "₹289", veg: false, emoji: "🍢" },
    { name: "Paneer Tikka",         ingredients: "Cottage cheese, bell peppers, yogurt marinade",        price: "₹259", veg: true,  emoji: "🧀" },
    { name: "Crispy Calamari",      ingredients: "Squid, rice batter, curry leaf tempering",             price: "₹319", veg: false, emoji: "🦑" },
    { name: "Dahi Puri Shots",      ingredients: "Crisp puris, spiced yogurt, sweet tamarind, sev",     price: "₹179", veg: true,  emoji: "🫧" },
  ],
  "Main Course": [
    { name: "Butter Chicken",       ingredients: "Chicken, tomato, cashew cream, fenugreek",            price: "₹349", veg: false, emoji: "🍛" },
    { name: "Dal Makhani",          ingredients: "Black lentils, overnight cream, butter",               price: "₹239", veg: true,  emoji: "🫘" },
    { name: "Rogan Josh",           ingredients: "Lamb, Kashmiri chili, aromatic whole spices",         price: "₹389", veg: false, emoji: "🥩" },
    { name: "Palak Paneer",         ingredients: "Fresh spinach, cottage cheese, garlic, cream",        price: "₹259", veg: true,  emoji: "🥬" },
  ],
  Biryani: [
    { name: "Hyderabadi Dum",       ingredients: "Basmati rice, mutton, caramelized onions, saffron",   price: "₹399", veg: false, emoji: "🫕" },
    { name: "Vegetable Biryani",    ingredients: "Seasonal vegetables, aged basmati, whole spices",     price: "₹299", veg: true,  emoji: "🌿" },
    { name: "Chicken Biryani",      ingredients: "Free-range chicken, long grain rice, mint",           price: "₹349", veg: false, emoji: "🍗" },
    { name: "Prawn Biryani",        ingredients: "Tiger prawns, coastal spices, curry leaves, ghee",   price: "₹449", veg: false, emoji: "🦐" },
  ],
  Desserts: [
    { name: "Mango Cheesecake",     ingredients: "Alphonso mango, cream cheese, digestive crust",       price: "₹229", veg: true,  emoji: "🍰" },
    { name: "Gulab Jamun Sundae",   ingredients: "Rose-syrup jamuns, vanilla bean ice cream",           price: "₹199", veg: true,  emoji: "🍨" },
    { name: "Rabri Kulfi",          ingredients: "Reduced milk, cardamom, pistachio, rose petals",      price: "₹179", veg: true,  emoji: "🧊" },
  ],
  Drinks: [
    { name: "Mango Lassi",          ingredients: "Thick yogurt, Alphonso pulp, cardamom, honey",        price: "₹149", veg: true,  emoji: "🥭" },
    { name: "Masala Chai Latte",    ingredients: "Assam tea, whole spices, oat milk, jaggery",          price: "₹119", veg: true,  emoji: "☕" },
    { name: "Rose Sharbat Fizz",    ingredients: "Rose syrup, basil seeds, sparkling water, lime",      price: "₹139", veg: true,  emoji: "🌹" },
  ],
};

export const REVIEWS = [
  { name: "Arjun Mehta",    rating: 5, text: "Best biryani in town — layered perfectly, every grain fragrant. Came back three times this month!", avatar: "AM" },
  { name: "Priya Sharma",   rating: 5, text: "The ambience is stunning and the service is impeccably warm. The paneer tikka was divine!",          avatar: "PS" },
  { name: "Rohan Kulkarni", rating: 5, text: "Butter chicken here sets the gold standard. Rich, silky, and absolutely memorable.",                 avatar: "RK" },
  { name: "Sneha Reddy",    rating: 5, text: "Took my family for a special dinner. Everything from the bread basket to dessert was exceptional.",  avatar: "SR" },
];

export const GALLERY_ITEMS = [
  { emoji: "🏮", label: "Dining Hall",     bg: "#E8820C" },
  { emoji: "🍛", label: "Butter Chicken",  bg: "#B5451B" },
  { emoji: "🕯️", label: "Ambience",        bg: "#C9921A" },
  { emoji: "🫕", label: "Dum Biryani",     bg: "#8B7355" },
  { emoji: "🌿", label: "Garden Terrace",  bg: "#4CAF50" },
  { emoji: "🍰", label: "Dessert Bar",     bg: "#FFD700" },
];

export const STATS = [
  { n: "50+",  l: "Curated Dishes" },
  { n: "8+",   l: "Years of Craft"  },
  { n: "★4.9", l: "Guest Rating"   },
];

export const CONTACT_INFO = [
  { icon: "📍", label: "Address", value: "Road No. 3, Jubilee Hills\nHyderabad, Telangana", href: "https://maps.google.com/?q=Jubilee+Hills+Road+3+Hyderabad" },
  { icon: "📞", label: "Phone",   value: "+91 701336839",            href: "tel:+91701336839"              },
  { icon: "💬", label: "WhatsApp",value: "Quick order & reservations", href: "https://wa.me/91701336839"     },
  { icon: "🕐", label: "Hours",   value: "Mon–Thu: 12–10:30 PM\nFri–Sun: 12–11:30 PM", href: null             },
];

export const WHATSAPP_URL   = "https://wa.me/91701336839";
export const INSTAGRAM_URL  = "https://instagram.com/spiceroutekitchen";
export const PHONE_URL      = "tel:+91701336839";
export const MAPS_URL       = "https://maps.google.com/?q=Jubilee+Hills+Road+3+Hyderabad";
export const MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5!2d78.4067!3d17.4325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sJubilee+Hills+Hyderabad!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin";
