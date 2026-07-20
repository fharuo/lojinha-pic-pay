import Header from './Header'
import Footer from './Footer'
import './CheckoutLayout.css'

function CheckoutLayout({ order, step, onHome, children }) {
  const base = import.meta.env.BASE_URL

  return (
    <div className="checkout-wrap">
      <Header onHome={onHome} />

      <div className="checkout">
        <div className="checkout__inner">
          <aside className="checkout__left">
            <div className="checkout__order-top">
              <span className="checkout__product-name">{order.product}</span>
              <div className="checkout__total-block">
                <span className="checkout__total-label">Total</span>
                <span className="checkout__total-value">
                  R$ {order.total.toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>

            <div className="checkout__divider" />

            <div className="checkout__summary">
              <div className="checkout__summary-row">
                <span>Subtotal</span>
                <span>R$ {order.subtotal.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="checkout__summary-row">
                <span>Frete</span>
                <strong className="checkout__free">Grátis</strong>
              </div>
              <div className="checkout__summary-row checkout__summary-row--total">
                <span>Total</span>
                <span>R$ {order.total.toFixed(2).replace('.', ',')}</span>
              </div>
            </div>

            <div className="checkout__disclaimer">
              <div className="checkout__disclaimer-top">
                <span>Oferecimeto</span>
                <img src={`${base}images/logo-picpay.svg`} alt="PicPay" className="checkout__disclaimer-logo" />
              </div>
              <span className="checkout__disclaimer-links">Termos | Privacidade</span>
              <p className="checkout__disclaimer-text">
                A coleta de dados pessoais ocorre de acordo com a Lei Geral
                de Proteção de Dados e nossa Política de Privacidade
              </p>
            </div>
          </aside>

          <div className="checkout__right">
            {children}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default CheckoutLayout
