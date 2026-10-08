// Standard local assets for 100% portable Vercel and local production builds
import heroImg2 from '../assets/images/media_1791386892793.jpg'; // Dr Digvijay Sang Dr Meenu Mohan
import heroImg3 from '../assets/images/media_1791386873261.jpg'; // Vikas Sang Babita
import heroImg4 from '../assets/images/media_1791386857823.jpg'; // Dual hearts with roses
import heroImg5 from '../assets/images/media_1791386837006.jpg'; // Heart with blue lotus roses

export const HERO_SLIDES = [
  {
    id: 1,
    image: heroImg2,
    title: "मोर फूल तबला",
    hindiTitle: "मोर फूल तबला डिजाइन",
    tag: "शुभ विवाह स्टेज बोर्ड",
    subtitle: "हाथ से नक्काशीदार मोर, फूल व तबला मोटिफ",
    details: "दूल्हा-दुल्हन का नाम, विवाह स्थल व शुभ तिथि के साथ।"
  },
  {
    id: 2,
    image: heroImg3,
    title: "मोर कलश",
    hindiTitle: "मोर कलश डिजाइन",
    tag: "शुभ विवाह मंडप बोर्ड",
    subtitle: "पारंपरिक मोर व मंगल कलश कटआउट",
    details: "बोल्ड ग्लिटर अक्षरों में दूल्हा-दुल्हन का नाम।"
  },
  {
    id: 4,
    image: heroImg4,
    title: "double heart with star",
    hindiTitle: "डबल हार्ट विथ स्टार",
    tag: "इस्लामिक निकाह डिजाइन",
    subtitle: "डबल 3D हार्ट, लाल गुलाब व दोनों कोनों पर चांद-तारा",
    details: "निकाह व वलीमा रिसेप्शन स्टेज नेम बोर्ड।"
  },
  {
    id: 5,
    image: heroImg5,
    title: "single heart and star",
    hindiTitle: "सिंगल हार्ट एंड स्टार",
    tag: "इस्लामिक निकाह डिजाइन",
    subtitle: "पिंक हार्ट, ब्लू लोटस व सिल्वर-गोल्डन चांद-तारा",
    details: "कपल नेम व निकाह मुबारक बैकड्रॉप बोर्ड।"
  }
];

export const IMAGES = {
  // Hero Visuals
  hero: {
    slides: HERO_SLIDES,
    main: heroImg2,
    board1: heroImg2,
    board2: heroImg3,
    board3: heroImg4,
    board4: heroImg4,
    board5: heroImg5,
    welcomeBoard: heroImg2,
    giftDisplay: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop",
  },

  // Categories
  categories: {
    gifts: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=800&auto=format&fit=crop",
    wedding: heroImg2,
    thermocol: heroImg3,
    birthday: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800&auto=format&fit=crop",
    anniversary: heroImg4,
    welcomeBoards: heroImg2,
    nameBoards: heroImg2,
    partyDecor: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop",
  },

  // Products
  products: {
    weddingNameBoard: heroImg2,
    welcomeBoard: heroImg2,
    coupleNameDesign: heroImg3,
    doubleHeartStar: heroImg4,
    singleHeartStar: heroImg5,
    anniversaryBoard: heroImg4,
    birthdayNameBoard: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800&auto=format&fit=crop",
    decorativeGiftBox: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop",
    customPhotoFrame: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
    babyWelcomeDecor: heroImg5,
    haldiProps: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?q=80&w=800&auto=format&fit=crop",
    stageLetters: heroImg2,
    ringCeremonyTray: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800&auto=format&fit=crop",
    chocolatesHamper: "https://images.unsplash.com/photo-1548741487-18d968602f1a?q=80&w=800&auto=format&fit=crop"
  },

  // About Shop & Craftsmanship
  about: {
    shopFront: heroImg3,
    workshop: heroImg2,
    ownerCraft: heroImg2
  },

  // Wedding Section Showcase
  weddingFeatures: {
    haldi: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?q=80&w=800&auto=format&fit=crop",
    mehndi: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800&auto=format&fit=crop",
    stage: heroImg2,
    entry: heroImg2
  }
};
