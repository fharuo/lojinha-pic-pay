import './Footer.css'

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
                {['facebook', 'instagram', 'x', 'tiktok', 'youtube', 'linkedin'].map((s) => (
                  <span key={s} className="footer__social-icon" />
                ))}
              </div>
              <p className="footer__legal">
                © 2026 PicPay Instituição de Pagamento S/A. CNPJ: 22.896.431/0001‑10
                <br />
                Avenida Manuel Bandeira, nº 291, Bloco B, 3° andar, Vila Leopoldina, São Paulo/SP, CEP 05317-020
              </p>
            </div>
            <div className="footer__app">
              <span className="footer__app-text">Baixar<br />o App</span>
              <div className="footer__app-qr" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
