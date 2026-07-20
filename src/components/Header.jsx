import './Header.css'

function Header({ onHome }) {
  const base = import.meta.env.BASE_URL

  return (
    <header className="header">
      <div className="header__inner">
        <button
          type="button"
          className="header__home"
          onClick={onHome}
          aria-label="Ir para a home da Lojinha PicPay"
        >
          <img src={`${base}images/logo-picpay.svg`} alt="PicPay" className="header__logo" />
        </button>
        <div className="header__badge">
          <span className="header__badge-dot" />
          <span>Demonstração interativa</span>
        </div>
      </div>
    </header>
  )
}

export default Header
