export interface Product {
  id: string
  name: string
  description: string
  longDescription: string
  category: string
  image: string
  features: string[]
  precio?: number
  discount?: number
  colors?: string[] // Array de códigos hex de colores
}

export const products: Product[] = [
  {
    id: "casco-seguridad-amarillo",
    name: "Casco de Seguridad Industrial",
    description: "Casco tipo I clase E con suspensión de 4 puntos",
    longDescription: "Casco de seguridad industrial fabricado en polietileno de alta densidad, diseñado para proteger contra impactos y penetración. Cuenta con suspensión ajustable de 4 puntos para mayor comodidad durante largas jornadas de trabajo.",
    category: "cascos",
    image: "https://png.pngtree.com/png-clipart/20250218/original/pngtree-safety-helmets-png-image_20457928.png",
    features: ["Certificación ANSI/ISEA Z89.1", "Suspensión de 4 puntos", "Ranuras para accesorios", "Resistente a impactos"],
    precio : 75.00,
    colors: ["#FFD700", "#FF4500", "#1E90FF", "#32CD32"],
    discount: 15
  },
  {
    id: "botas-punta-acero",
    name: "Botas con Punta de Acero",
    description: "Botas de seguridad con casquillo de acero y suela antiderrapante",
    longDescription: "Botas de seguridad industrial con punta de acero que protege contra impactos de hasta 200 joules. Suela de poliuretano bidensidad antiderrapante, resistente a aceites y químicos. Ideales para trabajo pesado en construcción e industria.",
    category: "botas",
    image: "https://i5.walmartimages.com/asr/96c35fac-3ec9-4064-9a13-71191b06af62.031dd293df6baca05f1c6ea623a19be7.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    features: ["Punta de acero 200J", "Suela antiderrapante", "Resistente a aceites", "Plantilla antiperforación"],
    discount: 20
  },
  {
    id: "arnes-cuerpo-completo",
    name: "Arnés de Cuerpo Completo",
    description: "Arnés de seguridad con 5 puntos de ajuste para trabajo en alturas",
    longDescription: "Arnés de seguridad de cuerpo completo diseñado para trabajos en altura. Fabricado con cintas de poliéster de alta resistencia y herrajes de acero forjado. Incluye anillo dorsal y frontal para conexión de línea de vida.",
    category: "arneses",
    image: "https://png.pngtree.com/png-vector/20240829/ourlarge/pngtree-3d-safety-harness-isolated-labor-stuff-png-image_13659096.png",
    features: ["5 puntos de ajuste", "Anillo dorsal y frontal", "Capacidad 140 kg", "Certificado OSHA"],
    discount: 10
  },
  {
    id: "lentes-seguridad-claros",
    name: "Lentes de Seguridad",
    description: "Lentes protectores con tratamiento antiempañante",
    longDescription: "Lentes de seguridad con diseño envolvente que proporciona protección completa contra partículas, salpicaduras y rayos UV. Tratamiento antiempañante y antirayaduras para mayor durabilidad y visibilidad.",
    category: "lentes",
    image: "https://tse1.mm.bing.net/th/id/OIP.O-qrYvSpFogkUYkqnnDLWQHaHa?cb=defcache2defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    features: ["Protección UV 99.9%", "Antiempañante", "Antirayaduras", "Diseño ergonómico"]
  },
  {
    id: "mascarilla-n95",
    name: "Respirador N95",
    description: "Mascarilla de alta eficiencia con válvula de exhalación",
    longDescription: "Respirador N95 con válvula de exhalación que filtra al menos el 95% de partículas en el aire. Diseño plegable para fácil almacenamiento. Ideal para ambientes con polvo, humo y partículas finas.",
    category: "mascarillas",
    image: "https://w7.pngwing.com/pngs/282/808/png-transparent-face-mask-coronavirus-hygiene-medical-mask-disposable-covid-19-pandemic-protection-safety.png",
    features: ["Filtración 95%", "Válvula de exhalación", "Clip nasal ajustable", "Certificación NIOSH"]
  },
  {
    id: "guantes-trabajo-pesado",
    name: "Guantes de Trabajo Pesado",
    description: "Guantes de carnaza con refuerzo en palma y dedos",
    longDescription: "Guantes de trabajo fabricados en piel de carnaza de primera calidad. Refuerzos en palma y dedos para mayor durabilidad. Ideales para soldadura, manejo de materiales y trabajo en construcción.",
    category: "guantes",
    image: "https://w7.pngwing.com/pngs/674/354/png-transparent-goggles-glasses-eyewear-safety-eye-protection-glasses-glass-lens-king.png",
    features: ["Piel de carnaza", "Refuerzo en palma", "Costuras reforzadas", "Resistente al calor"]
  },
  {
    id: "chaleco-alta-visibilidad",
    name: "Chaleco de Alta Visibilidad",
    description: "Chaleco reflectante clase 2 con bolsillos múltiples",
    longDescription: "Chaleco de seguridad de alta visibilidad clase 2 con cintas reflectantes 3M. Fabricado en malla de poliéster transpirable. Cuenta con múltiples bolsillos y cierre frontal con velcro.",
    category: "chalecos",
    image: "https://e7.pngegg.com/pngimages/714/920/png-clipart-high-visibility-clothing-waistcoat-armilla-reflectora-safety-others-miscellaneous-white.png",
    features: ["Clase 2 ANSI", "Cintas 3M reflectantes", "Malla transpirable", "Múltiples bolsillos"],
    precio: 28.97,
    colors: ["#CCFF00", "#0047AB", "#FF6B35", "#FF0000", "#00AA00"]
  },
  {
    id: "tapones-auditivos",
    name: "Tapones Auditivos Reutilizables",
    description: "Protectores auditivos de silicona con cordón",
    longDescription: "Tapones auditivos de silicona médica reutilizables con reducción de ruido de 25 dB. Incluyen cordón de seguridad para evitar pérdidas. Hipoalergénicos y fáciles de limpiar.",
    category: "auditivos",
    image: "https://e7.pngegg.com/pngimages/248/645/png-clipart-earplug-earmuffs-safety-personal-protective-equipment-ear-people-cable.png",
    features: ["Reducción 25 dB", "Silicona médica", "Cordón incluido", "Reutilizables"]
  },
]

export const categories = [
  { name: "Todos", slug: "todos", description: "Todo nuestro equipo de protección" },
  { name: "Cascos", slug: "cascos", description: "Protección para la cabeza" },
  { name: "Botas", slug: "botas", description: "Calzado de seguridad industrial" },
  { name: "Arneses", slug: "arneses", description: "Equipos para trabajo en alturas" },
  { name: "Lentes", slug: "lentes", description: "Protección ocular" },
  { name: "Mascarillas", slug: "mascarillas", description: "Protección respiratoria" },
  { name: "Guantes", slug: "guantes", description: "Protección para manos" },
  { name: "Chalecos", slug: "chalecos", description: "Alta visibilidad" },
  { name: "Auditivos", slug: "auditivos", description: "Protección auditiva" },
]

export function getProductsByCategory(category: string): Product[] {
  if (category === "todos" || !category) {
    return products
  }
  return products.filter((product) => product.category === category)
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getDiscountedProducts(): Product[] {
  return products.filter((product) => product.discount && product.discount > 0)
}
