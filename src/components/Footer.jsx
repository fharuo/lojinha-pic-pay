import './Footer.css'

/* Redes na ordem do Figma: Facebook, Instagram, X, TikTok, YouTube, LinkedIn. */
const SOCIALS = [
  {
    id: 'facebook',
    label: 'Facebook',
    path: 'M13.5 8.5h2V6h-2c-1.7 0-3 1.3-3 3v1.5H9V13h1.5v5h2.5v-5h2l.5-2.5h-2.5V9c0-.3.2-.5.5-.5z',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    render: (
      <>
        <rect x="6" y="6" width="12" height="12" rx="3.6" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="12" cy="12" r="2.9" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="15.4" cy="8.6" r="0.95" fill="currentColor" />
      </>
    ),
  },
  { id: 'x', label: 'X', path: 'M7 6h2.6l2.7 3.7L15.3 6H18l-4.3 5.3L18 18h-2.6l-2.9-4-3.2 4H7l4.6-5.6L7 6z' },
  {
    id: 'tiktok',
    label: 'TikTok',
    path: 'M14.2 5.5h-2.1v8.9a1.9 1.9 0 11-1.4-1.8v-2.2a4.1 4.1 0 103.5 4V9.9c.7.5 1.6.8 2.6.9V8.7c-1.5-.1-2.5-1.2-2.6-3.2z',
  },
  {
    id: 'youtube',
    label: 'YouTube',
    render: (
      <>
        <rect x="5.5" y="7.5" width="13" height="9" rx="2.6" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M11 10.2l3 1.8-3 1.8v-3.6z" fill="currentColor" />
      </>
    ),
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    render: (
      <>
        <rect x="6.4" y="10" width="2" height="7.6" fill="currentColor" />
        <circle cx="7.4" cy="7.5" r="1.2" fill="currentColor" />
        <path d="M10.6 17.6V10h1.9v1a2.7 2.7 0 012.3-1.2c1.7 0 2.8 1.1 2.8 3.2v4.6h-2v-4.2c0-1.1-.4-1.7-1.3-1.7-.8 0-1.7.5-1.7 1.8v4.1z" fill="currentColor" />
      </>
    ),
  },
]

function Footer() {
  const base = import.meta.env.BASE_URL

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <img src={`${base}images/logo-picpay.svg`} alt="PicPay" className="footer__logo" />
          <div className="footer__content">
            <div className="footer__social">
              <span className="footer__social-label">Visite nossas redes</span>
              <div className="footer__social-icons">
                {SOCIALS.map((social) => (
                  <a
                    key={social.id}
                    href="#"
                    className="footer__social-icon"
                    aria-label={social.label}
                    onClick={(e) => e.preventDefault()}
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                      {social.render ?? <path d={social.path} fill="currentColor" />}
                    </svg>
                  </a>
                ))}
              </div>
              <p className="footer__legal">
                © 2026 PicPay Instituição de Pagamento S/A. CNPJ: 22.896.431/0001‑10
                <br />
                Avenida Manuel Bandeira, nº 291, Bloco B, 3° andar, Vila Leopoldina, São Paulo/SP, CEP 05317-020
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
