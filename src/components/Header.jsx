import './Header.css'

function Header() {
  const base = import.meta.env.BASE_URL

  return (
    <header className="header">
      <div className="header__inner">
        <img src={`${base}images/logo-picpay.svg`} alt="PicPay" className="header__logo" />
        <div className="header__badge">
          <span className="header__badge-dot" />
          <span>Demonstração interativa</span>
        </div>
      </div>
    </header>
  )
}

export default Header
