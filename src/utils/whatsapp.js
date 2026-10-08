import { SHOP_CONFIG } from '../data/config';

/**
 * Builds a direct WhatsApp click-to-chat URL with pre-filled encoded text
 */
export function getWhatsAppUrl(messageText) {
  const encoded = encodeURIComponent(messageText.trim());
  return `https://wa.me/${SHOP_CONFIG.whatsappRaw}?text=${encoded}`;
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
export function getProductOrderUrl(product, customDetails = {}) {
  const { customText, eventDate, preferredColor, notes, quantity = 1 } = customDetails;
  
  let message = `Hello ${SHOP_CONFIG.shopName},\n\n`;
  message += `I am interested in ordering: *${product.name}*\n`;
  message += `• Category: ${product.category}\n`;
  message += `• Price: ${product.customPrice ? 'Custom Price (Please Quote)' : `₹${product.price}`}\n`;
  message += `• Quantity: ${quantity}\n`;
  
  if (customText) {
    message += `• Custom Name / Text: *${customText}*\n`;
  }
  if (eventDate) {
    message += `• Event Date: ${eventDate}\n`;
  }
  if (preferredColor) {
    message += `• Preferred Color / Glitter Theme: ${preferredColor}\n`;
  }
  if (notes) {
    message += `• Special Instructions: ${notes}\n`;
  }
  
  message += `\nPlease share the final price, delivery time, and payment details. Thank you!`;
  return getWhatsAppUrl(message);
}

/**
 * WhatsApp message for custom thermocol design request
 */
export function getCustomDesignQuoteUrl(designData = {}) {
  const { name, phone, eventType, namesToDisplay, dimension, preferredColor, description } = designData;
  
  let message = `Hello ${SHOP_CONFIG.shopName},\n\n`;
  message += `I want a *Customized Thermocol Design / Name Board* for an upcoming celebration.\n\n`;
  if (name) message += `• Customer Name: ${name}\n`;
  if (phone) message += `• Phone: ${phone}\n`;
  if (eventType) message += `• Occasion / Event: *${eventType}*\n`;
  if (namesToDisplay) message += `• Names / Text to Carve: *${namesToDisplay}*\n`;
  if (dimension) message += `• Preferred Size / Board Style: ${dimension}\n`;
  if (preferredColor) message += `• Glitter / Color Finish: ${preferredColor}\n`;
  if (description) message += `• Design Details / Idea: ${description}\n`;
  
  message += `\nI would also like to share my reference photo / sketch for this order. Please give me an estimated price and timeframe.`;
  return getWhatsAppUrl(message);
}

/**
 * WhatsApp message for live interactive name board customizer
 */
export function getLiveCustomizerUrl(customizerState) {
  const { groomName, brideName, baratFrom, baratTo, eventDate } = customizerState;
  
  let message = `🛍️ *नया कस्टमाइज्ड बोर्ड ऑर्डर / NEW 3D BOARD ORDER — ${SHOP_CONFIG.shopName}*\n\n`;
  message += `💍 *विवाह विवरण (Wedding Details):*\n`;
  message += `• दूल्हा (Groom): *${groomName || 'N/A'}*\n`;
  message += `• दुल्हन (Bride): *${brideName || 'N/A'}*\n`;
  if (baratFrom) message += `• बारात कहाँ से (From): *${baratFrom}*\n`;
  if (baratTo) message += `• बारात कहाँ तक (To): *${baratTo}*\n`;
  if (eventDate) message += `• विवाह तिथि (Date): *${eventDate}*\n\n`;
  
  message += `कृपया मुझे इस 3D थर्मोकोल बोर्ड का फाइनल कोटेशन व डिलीवरी समय बताएं। धन्यवाद!`;
  return getWhatsAppUrl(message);
}

/**
 * WhatsApp message for full cart checkout
 */
export function getCartCheckoutUrl(cartItems, customerDetails) {
  const { name, phone, eventDate, address, notes } = customerDetails;
  
  let message = `🛍️ *NEW ORDER FROM WEBSITE - ${SHOP_CONFIG.shopName}*\n\n`;
  message += `*Customer Details:*\n`;
  message += `👤 Name: ${name}\n`;
  message += `📞 Phone: ${phone}\n`;
  if (eventDate) message += `📅 Event Date: ${eventDate}\n`;
  if (address) message += `📍 Delivery / Pickup: ${address}\n`;
  if (notes) message += `📝 Notes: ${notes}\n\n`;
  
  message += `*Order Items:*\n`;
  let calculatedTotal = 0;
  let hasCustomPricedItem = false;

  cartItems.forEach((item, index) => {
    const itemPriceText = item.customPrice ? 'Custom Price (Quote needed)' : `₹${item.price * item.quantity}`;
    if (item.customPrice) {
      hasCustomPricedItem = true;
    } else {
      calculatedTotal += (item.price * item.quantity);
    }

    message += `${index + 1}. *${item.name}* (x${item.quantity})\n`;
    message += `   • Price: ${itemPriceText}\n`;
    if (item.customText) {
      message += `   • Custom Text: "${item.customText}"\n`;
    }
    if (item.eventDate) {
      message += `   • Event Date: ${item.eventDate}\n`;
    }
    if (item.preferredColor) {
      message += `   • Color / Finish: ${item.preferredColor}\n`;
    }
  });

  message += `\n*Total Estimated Amount:* ${hasCustomPricedItem ? `₹${calculatedTotal} + Custom Items Quote` : `₹${calculatedTotal}`}\n\n`;
  message += `Please confirm my order and share the final payment & pickup details. Thank you!`;
  
  return getWhatsAppUrl(message);
}
