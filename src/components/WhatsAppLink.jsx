import { whatsappHref, ADS_CONVERSION_SEND_TO } from '../config/contact'

/**
 * Link de WhatsApp da LP: monta a URL a partir da mensagem e dispara a
 * conversão do Google Ads no clique. Demais props vão direto para o <a>.
 */
export default function WhatsAppLink({ message, onClick, children, ...props }) {
  const handleClick = (e) => {
    if (typeof gtag === 'function') {
      gtag('event', 'conversion', { send_to: ADS_CONVERSION_SEND_TO })
    }
    onClick?.(e)
  }

  return (
    <a
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  )
}
