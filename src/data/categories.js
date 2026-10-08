import { IMAGES, birthdayHamperImg, weddingHamperImg, coupleHamperImg } from './images';

export const CATEGORIES = [
  {
    id: "birthday-gifts",
    name: "Birthday Gifts",
    hindiName: "बर्थडे गिफ्ट्स",
    emoji: "🎂",
    slug: "birthday-gifts",
    description: "Personalized birthday photo frames, LED lamps, mugs, custom hampers, and celebration decor.",
    itemCount: "35+ Items",
    image: birthdayHamperImg,
    featured: true,
    accentColor: "from-pink-500 to-rose-600"
  },
  {
    id: "couple-romantic-gifts",
    name: "Couple / Romantic Gifts",
    hindiName: "कपल व रोमांटिक गिफ्ट्स",
    emoji: "❤️",
    slug: "couple-romantic-gifts",
    description: "Heart LED lamps, couple mug sets, romantic photo frames, matching keychains & love hampers.",
    itemCount: "40+ Items",
    image: coupleHamperImg,
    featured: true,
    accentColor: "from-rose-600 to-red-700"
  },
  {
    id: "wedding-gifts",
    name: "Wedding Gifts",
    hindiName: "वेडिंग व शादी गिफ्ट्स",
    emoji: "💍",
    slug: "wedding-gifts",
    description: "Royal bride & groom showpieces, couple idols, shagun envelopes, and premium wedding hampers.",
    itemCount: "45+ Items",
    image: weddingHamperImg,
    featured: true,
    accentColor: "from-amber-600 to-orange-700"
  },
  {
    id: "baby-gifts",
    name: "Baby Gifts",
    hindiName: "न्यू बॉर्न बेबी गिफ्ट्स",
    emoji: "👶",
    slug: "baby-gifts",
    description: "Newborn gift sets, baby blankets, baby photo frames, soft rattle toys & customized cradle boards.",
    itemCount: "25+ Items",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop",
    featured: true,
    accentColor: "from-sky-500 to-blue-600"
  },
  {
    id: "soft-toys",
    name: "Soft Toys",
    hindiName: "सॉफ्ट टॉयज व टेडी",
    emoji: "🧸",
    slug: "soft-toys",
    description: "Super soft teddy bears, cute bunnies, giant plush pandas, cartoon characters & couple teddies.",
    itemCount: "30+ Items",
    image: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?q=80&w=800&auto=format&fit=crop",
    featured: true,
    accentColor: "from-amber-500 to-yellow-600"
  },
  {
    id: "photo-frames",
    name: "Photo Frames",
    hindiName: "फोटो फ्रेम्स",
    emoji: "🖼️",
    slug: "photo-frames",
    description: "Collage wall frames, LED backlit photo frames, heart acrylic cutouts & customized wooden frames.",
    itemCount: "50+ Items",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
    featured: true,
    accentColor: "from-purple-600 to-indigo-700"
  },
  {
    id: "mugs-bottles",
    name: "Mugs & Bottles",
    hindiName: "मग्स एवं बॉटल्स",
    emoji: "☕",
    slug: "mugs-bottles",
    description: "Color changing magic mugs, customized photo coffee mugs, insulated thermos & gym sipper bottles.",
    itemCount: "35+ Items",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
    featured: true,
    accentColor: "from-teal-600 to-emerald-700"
  },
  {
    id: "led-decorative-gifts",
    name: "LED & Decorative Gifts",
    hindiName: "एलईडी व डेकोरेटिव गिफ्ट्स",
    emoji: "✨",
    slug: "led-decorative-gifts",
    description: "3D Moon lamps, 3D illusion acrylic lamps, engraved name lights & photo projection lamps.",
    itemCount: "30+ Items",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop",
    featured: true,
    accentColor: "from-violet-600 to-purple-800"
  },
  {
    id: "home-decoration",
    name: "Home Decoration",
    hindiName: "होम डेकोरेशन",
    emoji: "🏡",
    slug: "home-decoration",
    description: "Handcrafted table showpieces, artificial flower vases, decorative wall clocks & crystal artifacts.",
    itemCount: "40+ Items",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
    featured: false,
    accentColor: "from-emerald-600 to-teal-700"
  },
  {
    id: "religious-gifts",
    name: "Religious Gifts",
    hindiName: "धार्मिक व पूजा गिफ्ट्स",
    emoji: "🕉️",
    slug: "religious-gifts",
    description: "Brass & polyresin Radha Krishna idols, Lord Ganesha & Laxmi statues, Hanuman ji & pooja sets.",
    itemCount: "35+ Items",
    image: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?q=80&w=800&auto=format&fit=crop",
    featured: true,
    accentColor: "from-amber-600 to-yellow-700"
  },
  {
    id: "kids-gifts-toys",
    name: "Kids Gifts & Toys",
    hindiName: "किड्स गिफ्ट्स व खिलौने",
    emoji: "🚗",
    slug: "kids-gifts-toys",
    description: "Remote control cars, dolls, building blocks, educational board games & drawing kits.",
    itemCount: "45+ Items",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=800&auto=format&fit=crop",
    featured: false,
    accentColor: "from-cyan-600 to-blue-700"
  },
  {
    id: "corporate-gifts",
    name: "Corporate Gifts",
    hindiName: "कॉर्पोरेट गिफ्ट्स",
    emoji: "💼",
    slug: "corporate-gifts",
    description: "Customized executive diary & metallic pen combos, desk organizers, desktop trophies & gift sets.",
    itemCount: "25+ Items",
    image: "https://images.unsplash.com/photo-1583484963886-cfe2bff2945f?q=80&w=800&auto=format&fit=crop",
    featured: false,
    accentColor: "from-slate-700 to-slate-900"
  },
  {
    id: "festival-gifts",
    name: "Festival Gifts",
    hindiName: "त्योहार व उत्सव गिफ्ट्स",
    emoji: "🪔",
    slug: "festival-gifts",
    description: "Diwali dry fruit hampers, Rakhi combos, Christmas gift sets, Holi gift packs & festive lights.",
    itemCount: "35+ Items",
    image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=800&auto=format&fit=crop",
    featured: true,
    accentColor: "from-amber-500 to-red-600"
  },
  {
    id: "anniversary-gifts",
    name: "Anniversary Gifts",
    hindiName: "सालगिरह स्पेशल गिफ्ट्स",
    emoji: "🥂",
    slug: "anniversary-gifts",
    description: "25th Silver & 50th Golden Jubilee photo frames, romantic couple clocks, LED hearts & gift sets.",
    itemCount: "30+ Items",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop",
    featured: true,
    accentColor: "from-rose-500 to-purple-700"
  },
  {
    id: "farewell-teacher-gifts",
    name: "Farewell / Teacher Gifts",
    hindiName: "टीचर्स व फेयरवेल गिफ्ट्स",
    emoji: "🎓",
    slug: "farewell-teacher-gifts",
    description: "Best teacher trophies, personalized thank you wooden plaques, pen sets & farewell hampers.",
    itemCount: "20+ Items",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop",
    featured: false,
    accentColor: "from-indigo-600 to-blue-800"
  },
  {
    id: "small-budget-gifts",
    name: "Small & Budget Gifts",
    hindiName: "स्मॉल व बजट गिफ्ट्स (₹99 - ₹499)",
    emoji: "🏷️",
    slug: "small-budget-gifts",
    description: "Affordable keychains, mini desk showpieces, pocket photo frames, cute stationery & wristbands.",
    itemCount: "50+ Items",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop",
    featured: false,
    accentColor: "from-green-600 to-teal-700"
  },
  {
    id: "gift-hampers",
    name: "Gift Hampers",
    hindiName: "प्रीमियम गिफ्ट हैंपर्स",
    emoji: "🎁",
    slug: "gift-hampers",
    description: "Luxury velvet gift boxes, assorted chocolate hampers, dry fruit wooden baskets & custom hampers.",
    itemCount: "30+ Items",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop",
    featured: true,
    accentColor: "from-purple-700 to-pink-600"
  },
  {
    id: "personalized-gifts",
    name: "Personalized Gifts",
    hindiName: "कस्टमाइज्ड / पर्सनलाइज्ड गिफ्ट्स",
    emoji: "✨",
    slug: "personalized-gifts",
    description: "Laser engraved name plates, custom photo cushions, printed mugs, name keychains & 3D lamps.",
    itemCount: "60+ Items",
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=800&auto=format&fit=crop",
    featured: true,
    accentColor: "from-brand-purple-800 to-brand-rose-600"
  },
  {
    id: "thermocol-event-decoration",
    name: "Thermocol & Event Decoration",
    hindiName: "थर्मोकोल कला व स्टेज डेकोर",
    emoji: "👑",
    slug: "thermocol-event-decoration",
    description: "3D thermocol stage names, wedding entry boards, Haldi/Mehndi props, Kalash & Peacock motifs.",
    itemCount: "50+ Designs",
    image: IMAGES.products.weddingNameBoard,
    featured: true,
    accentColor: "from-amber-600 to-brand-purple-900"
  },
  {
    id: "customized-event-orders",
    name: "Customized Event Orders",
    hindiName: "कस्टम इवेंट ऑर्डर्स (कोटेशन आधारित)",
    emoji: "🎉",
    slug: "customized-event-orders",
    description: "Grand mandap name setups, school/college fest cutouts, shop inaugurations & religious pandal decor.",
    itemCount: "100% Custom",
    image: IMAGES.products.coupleNameDesign,
    featured: true,
    accentColor: "from-brand-rose-600 to-brand-gold-600"
  }
];

// Helper to find category by id or slug with fallback
export function getCategoryBySlug(slug) {
  if (!slug || slug === 'all') return null;
  return CATEGORIES.find(c => c.slug === slug || c.id === slug) || null;
}
