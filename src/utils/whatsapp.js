import { SHOP_CONFIG } from '../data/config';

/**
 * Builds a direct WhatsApp click-to-chat URL with pre-filled encoded text.
 * Uses api.whatsapp.com/send to prevent wa.me redirect bug that turns emojis into ? (U+FFFD diamond)
 */
export function getWhatsAppUrl(messageText) {
  const encoded = encodeURIComponent(messageText.trim());
  return `https://api.whatsapp.com/send?phone=${SHOP_CONFIG.whatsappRaw}&text=${encoded}`;
}

/**
 * WhatsApp message for general store inquiry
 */
export function getGeneralInquiryUrl() {
  const message = `Hello ${SHOP_CONFIG.shopName}, I would like to inquire about your wedding decoration, thermocol design boards, and gift items.`;
  return getWhatsAppUrl(message);
}

/**
 * Directly opens WhatsApp chat for general inquiry
 */
export function openWhatsAppGeneral() {
  window.open(getGeneralInquiryUrl(), '_blank', 'noopener,noreferrer');
}

/**
 * WhatsApp message for a specific product
 */
/**
 * Formats YYYY-MM-DD date into friendly readable string (e.g. 9 अक्टूबर 2026 / 9 Oct 2026)
 */
function formatDisplayDate(dateStr, isHindi = true) {
  if (!dateStr) return '';
  try {
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      const year = parts[0];
      const month = parseInt(parts[1], 10);
      const day = parseInt(parts[2], 10);
      
      const hindiMonths = [
        '', 'जनवरी', 'फ़रवरी', 'मार्च', 'अप्रैल', 'मई', 'जून',
        'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर'
      ];
      const engMonths = [
        '', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ];
      
      if (month >= 1 && month <= 12) {
        return isHindi 
          ? `${day} ${hindiMonths[month]} ${year}`
          : `${day} ${engMonths[month]} ${year}`;
      }
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
  } catch (e) {
    // fallback
  }
  return dateStr;
}

/**
 * WhatsApp message for a specific product
 */
export function getProductOrderUrl(product, customDetails = {}) {
  const { customText, eventDate, preferredColor, notes, quantity = 1 } = customDetails;
  
  let message = `✨ *${SHOP_CONFIG.shopName}* ✨\n`;
  message += `━━━━━━━━━━━━━━━━━━━━\n`;
  message += `🛍️ *नया प्रोडक्ट ऑर्डर पूछताछ*\n\n`;
  message += `📦 *आइटम:* ${product.name}\n`;
  message += `🏷️ *कैटेगरी:* ${product.category}\n`;
  message += `💰 *मूल्य:* ${product.customPrice ? 'कस्टम कोटेशन' : `₹${product.price}`}\n`;
  message += `🔢 *मात्रा (Qty):* ${quantity}\n`;
  
  if (customText) {
    message += `✍️ *नाम / टेक्स्ट:* *${customText}*\n`;
  }
  if (eventDate) {
    message += `📅 *कार्यक्रम तिथि:* ${formatDisplayDate(eventDate, true)}\n`;
  }
  if (preferredColor) {
    message += `🎨 *कलर / ग्लिटर थीम:* ${preferredColor}\n`;
  }
  if (notes) {
    message += `📝 *विशेष निर्देश:* ${notes}\n`;
  }
  
  message += `━━━━━━━━━━━━━━━━━━━━\n`;
  message += `🙏 *नमस्ते! कृपया इस ऑर्डर को कन्फर्म करें और पेमेंट व डिलीवरी की जानकारी दें।*`;
  return getWhatsAppUrl(message);
}

/**
 * WhatsApp message for custom thermocol design request
 */
export function getCustomDesignQuoteUrl(designData = {}) {
  const { name, phone, eventType, namesToDisplay, dimension, preferredColor, description } = designData;
  
  let message = `✨ *${SHOP_CONFIG.shopName}* ✨\n`;
  message += `━━━━━━━━━━━━━━━━━━━━\n`;
  message += `🎨 *कस्टम 3D थर्मोकोल डिज़ाइन कोटेशन*\n\n`;
  if (name) message += `👤 *ग्राहक:* ${name}\n`;
  if (phone) message += `📞 *फोन:* ${phone}\n`;
  if (eventType) message += `🎉 *शुभ अवसर:* ${eventType}\n`;
  if (namesToDisplay) message += `✍️ *लिखने वाले नाम:* *${namesToDisplay}*\n`;
  if (dimension) message += `📐 *साइज / स्टाइल:* ${dimension}\n`;
  if (preferredColor) message += `✨ *ग्लिटर व फिनिश:* ${preferredColor}\n`;
  if (description) message += `📝 *डिज़ाइन विवरण:* ${description}\n`;
  
  message += `━━━━━━━━━━━━━━━━━━━━\n`;
  message += `📸 *मैं इस डिज़ाइन का रेफरेंस फोटो/स्केच भी शेयर करना चाहता हूँ। कृपया अनुमानित खर्च व समय बताएं।*`;
  return getWhatsAppUrl(message);
}

/**
 * WhatsApp message for live interactive name board customizer
 */
export function getLiveCustomizerUrl(customizerState) {
  const { 
    groomName, 
    brideName, 
    baratFrom, 
    baratTo, 
    eventDate, 
    deliveryDate, 
    designName, 
    includeSmallBoard, 
    totalPrice, 
    lang 
  } = customizerState;
  
  const price = totalPrice || (includeSmallBoard ? 450 : 400);
  const isHindi = lang !== 'en';
  
  const smallBoardStatus = includeSmallBoard 
    ? (isHindi ? 'हाँ (+₹50 शामिल)' : 'Yes (+₹50 included)') 
    : (isHindi ? 'नहीं (केवल मुख्य स्टेज बोर्ड)' : 'No (Main stage board only)');

  const connector = isHindi ? 'संग' : 'WEDS';
  const coupleDisplay = (groomName && brideName) ? `${groomName} ${connector} ${brideName}` : '';

  let message = '';

  if (isHindi) {
    message += `✨ *${SHOP_CONFIG.shopName}* ✨\n`;
    message += `━━━━━━━━━━━━━━━━━━━━\n`;
    message += `💐 *3D वेडिंग स्टेज बोर्ड ऑर्डर* 💐\n\n`;

    if (groomName) message += `👑 *दूल्हा:* ${groomName}\n`;
    if (brideName) message += `👰 *दुल्हन:* ${brideName}\n`;
    if (coupleDisplay) message += `❤️ *शुभ जोड़ी:* *${coupleDisplay}*\n\n`;

    message += `📋 *ऑर्डर विवरण (Specifications):*\n`;
    message += `🎨 *डिज़ाइन:* ${designName || 'मोर फूल तबला'}\n`;
    message += `✨ *क्वालिटी:* 3D थर्मोकोल ग्लिटर कटआउट (4 × 2.5 फीट)\n`;
    message += `🚗 *छोटा बोर्ड ('दुल्हन हम ले जायेंगे'):* ${smallBoardStatus}\n`;
    message += `💰 *कुल मूल्य:* *₹${price}* (ऑफर प्राइस)\n\n`;

    if (baratFrom || baratTo || eventDate || deliveryDate) {
      message += `📍 *बारात एवं डिलीवरी विवरण:*\n`;
      if (baratFrom) message += `🏡 *बारात प्रस्थान:* ${baratFrom}\n`;
      if (baratTo) message += `🎉 *बारात स्थल:* ${baratTo}\n`;
      if (eventDate) message += `📅 *शादी की तिथि:* ${formatDisplayDate(eventDate, true)}\n`;
      if (deliveryDate) message += `🚚 *डिलीवरी तिथि:* ${formatDisplayDate(deliveryDate, true)}\n`;
      message += `\n`;
    }

    message += `━━━━━━━━━━━━━━━━━━━━\n`;
    message += `🙏 *नमस्ते! मुझे यह 3D थर्मोकोल स्टेज बोर्ड बनवाना है। कृपया ऑर्डर कन्फर्म करें और मेकिंग/डिलीवरी का समय बताएं।*`;
  } else {
    message += `✨ *${SHOP_CONFIG.shopName}* ✨\n`;
    message += `━━━━━━━━━━━━━━━━━━━━\n`;
    message += `💐 *3D WEDDING STAGE BOARD ORDER* 💐\n\n`;

    if (groomName) message += `👑 *Groom:* ${groomName}\n`;
    if (brideName) message += `👰 *Bride:* ${brideName}\n`;
    if (coupleDisplay) message += `❤️ *Couple:* *${coupleDisplay}*\n\n`;

    message += `📋 *Order Specifications:*\n`;
    message += `🎨 *Design:* ${designName || 'Peacock Flower Tabla'}\n`;
    message += `✨ *Finish:* 3D Glitter Thermocol Cutout (4 × 2.5 ft)\n`;
    message += `🚗 *Small Board ('Dulhan Hum Le Jayenge'):* ${smallBoardStatus}\n`;
    message += `💰 *Total Price:* *₹${price}* (Special Offer)\n\n`;

    if (baratFrom || baratTo || eventDate || deliveryDate) {
      message += `📍 *Barat & Delivery Details:*\n`;
      if (baratFrom) message += `🏡 *Barat Origin:* ${baratFrom}\n`;
      if (baratTo) message += `🎉 *Barat Venue:* ${baratTo}\n`;
      if (eventDate) message += `📅 *Wedding Date:* ${formatDisplayDate(eventDate, false)}\n`;
      if (deliveryDate) message += `🚚 *Delivery Date:* ${formatDisplayDate(deliveryDate, false)}\n`;
      message += `\n`;
    }

    message += `━━━━━━━━━━━━━━━━━━━━\n`;
    message += `🙏 *Hello! I want to order this 3D Thermocol Wedding Stage Board. Please confirm the order and share the preparation & delivery schedule.*`;
  }

  return getWhatsAppUrl(message);
}

/**
 * WhatsApp message for full cart checkout
 */
export function getCartCheckoutUrl(cartItems, customerDetails) {
  const { name, phone, eventDate, address, notes } = customerDetails;
  
  let message = `✨ *${SHOP_CONFIG.shopName}* ✨\n`;
  message += `━━━━━━━━━━━━━━━━━━━━\n`;
  message += `🛍️ *नया कार्ट ऑर्डर*\n\n`;
  message += `👤 *ग्राहक:* ${name}\n`;
  message += `📞 *फोन:* ${phone}\n`;
  if (eventDate) message += `📅 *इवेंट तिथि:* ${formatDisplayDate(eventDate, true)}\n`;
  if (address) message += `📍 *पता / डिलीवरी:* ${address}\n`;
  if (notes) message += `📝 *नोट्स:* ${notes}\n\n`;
  
  message += `📋 *ऑर्डर किए गए आइटम्स:*\n`;
  let calculatedTotal = 0;
  let hasCustomPricedItem = false;

  cartItems.forEach((item, index) => {
    const itemPriceText = item.customPrice ? 'कस्टम कोटेशन' : `₹${item.price * item.quantity}`;
    if (item.customPrice) {
      hasCustomPricedItem = true;
    } else {
      calculatedTotal += (item.price * item.quantity);
    }

    message += `${index + 1}. *${item.name}* (×${item.quantity}) — ${itemPriceText}\n`;
    if (item.customText) {
      message += `   ✍️ नाम: "${item.customText}"\n`;
    }
  });

  message += `\n💰 *कुल राशि:* ${hasCustomPricedItem ? `₹${calculatedTotal} + कस्टम कोटेशन` : `₹${calculatedTotal}`}\n`;
  message += `━━━━━━━━━━━━━━━━━━━━\n`;
  message += `🙏 *नमस्ते! कृपया मेरे ऑर्डर को कन्फर्म करें और आगे की प्रक्रिया बताएं।*`;
  
  return getWhatsAppUrl(message);
}
