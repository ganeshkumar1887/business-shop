# 🎁 Shree Bhagwan Thermocol & Gift Items

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-0.344-F56565?style=flat-square&logo=feather&logoColor=white)](https://lucide.dev/)

> A modern, responsive e-commerce & custom design portfolio web application for **Shree Bhagwan Thermocol & Gift Items**, featuring a **20-category gift catalog**, **interactive 3D thermocol name board customizer**, **WhatsApp instant ordering**, and **shopping cart with customization notes**.

---

## 🌟 Key Highlights & Features

### 1. 🛍️ Comprehensive 20-Category Gift Shop Catalog
Browse over 100+ curated and personalized items across 20 distinct categories:
- 🎂 **Birthday Gifts** (Photo frames, LED lamps, mugs, custom hampers, decor sets)
- ❤️ **Couple & Romantic Gifts** (Couple mug sets, heart lamps, matching keychains, name plates)
- 💍 **Wedding Gifts** (Bride & groom showpieces, couple idols, shagun sets, royal frames)
- 👶 **Baby Gifts** (Newborn hampers, memory frames, blanket sets, soft rattle toys)
- 🧸 **Soft Toys & Teddies** (Plush bears, giant pandas, cartoon plushies, couple teddies)
- 🖼️ **Photo Frames** (Collage frames, backlit LED frames, customized wooden plaques)
- ☕ **Mugs & Bottles** (Color-changing magic mugs, insulated thermos, personalized sippers)
- 💡 **LED & Decorative Gifts** (3D moon lamps, projection lamps, crystal name lights)
- 🏡 **Home Decoration** (Handcrafted showpieces, flower vases, decorative clocks)
- 🕉️ **Religious Gifts** (Brass & polyresin Radha Krishna idols, Lord Ganesha & Laxmi statues)
- 🚗 **Kids Gifts & Toys** (Remote control cars, building blocks, puzzle games, drawing kits)
- 💼 **Corporate Gifts** (Executive diaries, metal pen combos, desk organizers, trophies)
- 🪔 **Festival Gifts** (Diwali hampers, Rakhi combos, Christmas sets, dry fruit boxes)
- 🥂 **Anniversary Gifts** (25th Silver & 50th Golden Jubilee frames, romantic couple clocks)
- 🎓 **Farewell / Teacher Gifts** (Best Teacher trophies, appreciation plaques, pen sets)
- 🏷️ **Small & Budget Gifts** (Pocket gift items, keychains, mini showpieces, stationery)
- 🧺 **Gift Hampers** (Luxury velvet boxes, chocolate hampers, dry fruit baskets)
- ✨ **Personalized Gifts** (Laser-engraved names, custom photo cushions, 3D acrylic lamps)
- 👑 **Thermocol & Event Decoration** (3D stage letters, wedding boards, Haldi/Mehndi props)
- 🎪 **Customized Event Orders** (Grand mandap setup, inauguration boards, pandal decor)

---

### 2. 🪄 Interactive 3D Thermocol Name Studio
- **Live Previewer**: Type Bride & Groom or celebrant names.
- **Font Styles**: Royal Calligraphy, Cinzel, Elegant Serif, Bold Display.
- **Glitter Finishes**: Royal Gold Glitter, Rose Gold Glitter, Sparkle Silver.
- **1-Click WhatsApp Order**: Instantly send selected configuration and text directly to WhatsApp.

---

### 3. 💬 Direct WhatsApp Ordering & Custom Quotes
- **Product Orders**: Instant pre-filled WhatsApp message with product name, price, and custom options.
- **Custom Event Quotes**: Upload photo references, specify dimensions, event date, and theme.
- **Floating WhatsApp Assistant**: Quick FAQ prompts for easy customer guidance.

---

### 4. 🛒 Full Shopping Cart & Wishlist System
- Add products with custom engraving text, event date, and color preferences.
- Live price calculations with subtotal, discounts, and checkout.
- Persistent Wishlist for saving favorite designs.

---

### 5. 🔍 Multi-field Search & Smart Filtering
- Quick search across product names, Hindi names, categories, descriptions, and tags.
- Filter by Category, Price Range, Minimum Rating, Customizable-only, Bestsellers, and New Arrivals.
- Sort by Price (Low to High / High to Low), Customer Rating, and Popularity.

---

## 🏗️ Project Architecture & Tech Stack

```
shop website/
├── public/                     # Static public assets & icons
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── GiftShopSection.jsx # Homepage visual category showcase & filter tabs
│   │   ├── ProductCard.jsx     # Interactive product card with cart/buy buttons
│   │   ├── Navbar.jsx          # Header navigation with search & cart triggers
│   │   ├── Footer.jsx          # Shop hours, contact, and quick links
│   │   ├── CartDrawer.jsx      # Slide-over cart drawer with checkout
│   │   ├── SearchModal.jsx     # Full-screen search dialog (Ctrl+K)
│   │   ├── QuickViewModal.jsx  # Rapid product preview modal
│   │   ├── OrderNowModal.jsx   # Custom WhatsApp inquiry modal
│   │   ├── LiveNamePreviewer.jsx # 3D thermocol live customizer simulation
│   │   └── ...
│   ├── context/                # React State Contexts
│   │   ├── CartContext.jsx     # Cart store with localStorage persistence
│   │   └── WishlistContext.jsx # Wishlist store with localStorage persistence
│   ├── data/                   # Centralized shop data & content
│   │   ├── categories.js       # 20 gift categories definitions & metadata
│   │   ├── products.js         # Complete product catalog data (100+ items)
│   │   ├── config.js           # Shop contact details, phone, hours, social links
│   │   ├── gallery.js          # Recent wedding & event photo showcases
│   │   ├── images.js           # Centralized image asset mappings
│   │   └── reviews.js          # Customer testimonials & ratings
│   ├── pages/                  # Page Views & Routes
│   │   ├── Home.jsx            # Homepage with hero, gifts, 3D studio, and gallery
│   │   ├── Products.jsx        # Product listing with filters & category scroller
│   │   ├── ProductDetails.jsx  # Detailed product view with customization fields
│   │   ├── MarriageDesigns.jsx # Wedding name boards & stage decoration showcase
│   │   ├── GalleryPage.jsx     # Filterable photography gallery
│   │   ├── AboutPage.jsx       # Shop story, craftmanship & legacy
│   │   ├── ContactPage.jsx     # Address, phone, timings & Google Maps
│   │   └── WishlistPage.jsx    # Saved customer favorites
│   ├── utils/
│   │   └── whatsapp.js         # WhatsApp URL generators & message formatters
│   ├── App.jsx                 # Main application component & React Router setup
│   ├── index.css               # Design tokens, gradients, animations & scrollbar
│   └── main.jsx                # React DOM entrypoint
├── index.html                  # HTML template with Google Fonts (Cinzel, Outfit, Playfair)
├── package.json                # Dependencies & scripts
├── tailwind.config.js          # Tailwind styling tokens & theme colors
└── vite.config.js              # Vite configuration (port 3001)
```

---

## 🚀 Getting Started Locally

### Prerequisites
Make sure you have **Node.js** (v18 or newer) installed on your system.

### 1. Clone the repository
```bash
git clone https://github.com/ganeshkumar1887/business-shop.git
cd business-shop
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```
Open **[http://localhost:3001](http://localhost:3001)** in your browser.

### 4. Build for production
```bash
npm run build
```

---

## ⚙️ How to Customize Shop Information

All shop details are organized in `src/data/` for easy updates without touching React code:

| What to Update | File Path | Description |
|---|---|---|
| **Shop Phone & WhatsApp** | `src/data/config.js` | Change the WhatsApp phone number (`91XXXXXXXXXX`) to receive orders directly. |
| **Shop Address & Hours** | `src/data/config.js` | Update physical address, landmark, and operating timings. |
| **Add / Edit Products** | `src/data/products.js` | Add new items, update prices, discounts, ratings, or tags. |
| **Add / Edit Categories** | `src/data/categories.js` | Adjust category names, images, icons, or descriptions. |
| **Real Photos / Assets** | `src/data/images.js` | Replace image URLs with your shop's actual photography. |

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
