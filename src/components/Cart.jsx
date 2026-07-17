import './Cart.css'

function Cart({ product, order, onCheckout, onBack }) {
  const base = import.meta.env.BASE_URL

  return (
    <main className="cart-page">
      <div className="cart-page__inner">
        <div className="cart-page__top">
          <h1 className="cart-page__title">Lojinha PicPay</h1>
        </div>

        <div className="cart-page__layout">
          <div className="cart-page__main">
            <h2 className="cart-page__section-title">Meu carrinho</h2>

            <div className="cart-page__product">
              <img
                src={`${base}images/${product.image}`}
                alt={product.name}
                className="cart-page__product-img"
              />
              <div className="cart-page__product-info">
                <div className="cart-page__product-header">
                  <span className="cart-page__product-name">{product.name}</span>
                  <span className="cart-page__product-price">R$ {product.price.toFixed(2).replace('.', ',')}</span>
                </div>
                <p className="cart-page__product-desc">{product.desc}</p>
              </div>
            </div>

            <div className="cart-page__qty-row">
              <span className="cart-page__qty-label">Quantidade</span>
              <div className="cart-page__qty-controls">
                <div className="cart-page__counter">
                  <button type="button" className="cart-page__counter-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  </button>
                  <span>1</span>
                  <button type="button" className="cart-page__counter-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  </button>
                </div>
                <button type="button" className="cart-page__delete">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className="cart-page__shipping">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="cart-page__shipping-icon">
                <path d="M1 3h15v13H1zM16 8h4l3 4v5h-7V8z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                <circle cx="5.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="1.2"/>
                <circle cx="18.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="1.2"/>
              </svg>
              <div>
                <p className="cart-page__shipping-title"><strong>Frete grátis</strong> para todo o Brasil</p>
                <p className="cart-page__shipping-sub">Receba <strong>na hora!</strong></p>
              </div>
            </div>
          </div>

          <aside className="cart-page__summary">
            <h2 className="cart-page__section-title">Resumo do pedido</h2>

            <div className="cart-page__summary-item">
              <span>{product.name}</span>
              <strong>R$ {product.price.toFixed(2).replace('.', ',')}</strong>
            </div>

            <div className="cart-page__summary-divider" />

            <div className="cart-page__summary-values">
              <div className="cart-page__summary-row">
                <span>Subtotal</span>
                <span>R$ {order.subtotal.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="cart-page__summary-row">
                <span>Frete</span>
                <strong className="cart-page__free">Grátis</strong>
              </div>
            </div>

            <button className="cart-page__checkout-btn" onClick={onCheckout} type="button">
              Ir para pagamento
            </button>

            <div className="cart-page__secure">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" fill="var(--green-brand)"/>
                <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Pagamento seguro</span>
            </div>
          </aside>
        </div>

        <p className="cart-page__legal">
          Ao prosseguir você declara estar de acordo com a Lei Geral de Proteção de Dados e nossa <a href="#">Política de Privacidade.</a>
        </p>
      </div>
    </main>
  )
}

export default Cart
