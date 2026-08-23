/**
 * Fonte única dos dados de contato da LP.
 * Para trocar o número do WhatsApp, altere apenas WHATSAPP_NUMBER.
 */
export const WHATSAPP_NUMBER = '5543936180025'

/** Conversão do Google Ads disparada em todo clique de WhatsApp. */
export const ADS_CONVERSION_SEND_TO = 'AW-16844163935/inNeCLuMt5UcEN-W9t8-'

export function whatsappHref(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
