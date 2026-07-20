import './Home.css'

function Home({ products, onSelectProduct }) {
  const base = import.meta.env.BASE_URL

  return (
    <main className="home">
      <section className="home__banner">
        <div className="home__banner-inner">
          <div className="home__banner-text">
            <h1>O PicPay tem um checkout completo <span>pra sua loja</span></h1>
            <p>Seu cliente paga em segundos. Sem complicação. Simule agora.</p>
          </div>
          <div className="home__banner-visual">
            <div className="home__banner-photo">
              <img src={`${base}images/banner-hero-d28a82.png`} alt="" />
            </div>
            <div className="home__banner-card home__banner-card--top">
              <div className="home__banner-card-icon home__banner-card-icon--green">
                {/* glifo PicPay */}
                <svg viewBox="0 0 18 16" width="18" height="16" fill="none" aria-hidden="true">
                  <path
                    d="M6.25977 2.68262C8.72925 2.68269 10.7313 4.68482 10.7314 7.1543C10.7314 9.62387 8.72933 11.6259 6.25977 11.626H2.68262V15.2031H0V5.36523H2.68262V8.94336H6.25977C7.24755 8.94329 8.04882 8.1421 8.04883 7.1543C8.0487 6.1666 7.24747 5.36531 6.25977 5.36523H2.68262V2.68262H6.25977ZM17.8867 5.36621H12.5205V0H17.8867V5.36621ZM13.415 4.47168H16.9922V0.894531H13.415V4.47168ZM16.0977 3.57715H14.3096V1.78906H16.0977V3.57715Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span>Venda mais através do ecossistema PicPay</span>
            </div>
            <div className="home__banner-card home__banner-card--bottom">
              <div className="home__banner-card-icon home__banner-card-icon--blue">
                {/* pp_ic_money_send */}
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
                  <rect x="2.5" y="6" width="14" height="9.5" rx="2" stroke="currentColor" strokeWidth="1.7" />
                  <circle cx="9.5" cy="10.75" r="2.2" stroke="currentColor" strokeWidth="1.7" />
                  <path
                    d="M14.5 19h7m0 0l-2.8-2.8M21.5 19l-2.8 2.8"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span>Aceite múltiplos meios de pagamento</span>
            </div>
          </div>
        </div>
      </section>

      <section className="home__products">
        <div className="home__products-inner">
          <div className="home__products-header">
            <h2>Escolha um produto para iniciar</h2>
            <p>Selecione qualquer item abaixo para experimentar a jornada completa de compra.</p>
          </div>

          <div className="home__grid">
            {products.map((product) => (
              <button
                key={product.id}
                className="home__card"
                onClick={() => onSelectProduct(product)}
              >
                <div className="home__card-image">
                  <img src={`${base}images/${product.image}`} alt={product.name} />
                </div>
                <div className="home__card-content">
                  <span className="home__card-tag">Novo</span>
                  <span className="home__card-name">{product.name}</span>
                  <span className="home__card-price">R$ {product.price.toFixed(2).replace('.', ',')}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
