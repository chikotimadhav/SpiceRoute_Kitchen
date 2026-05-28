/**
 * Format a JS Date to "DD MMM YYYY" e.g. "27 May 2026"
 */
export function formatDate(date) {
  if (!date) return "";
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit", month: "short", year: "numeric",
  }).format(new Date(date));
}

/**
 * Format a JS Date to a readable time e.g. "07:30 PM"
 */
export function formatTime(date) {
  if (!date) return "";
  return new Intl.DateTimeFormat("en-IN", {
    hour: "2-digit", minute: "2-digit", hour12: true,
  }).format(new Date(date));
}

/**
 * Build a WhatsApp deep-link with a pre-filled message
 */
export function buildWhatsAppLink(phone, message) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * Clamp a number between min and max
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
