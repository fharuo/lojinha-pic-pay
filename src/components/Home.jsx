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
              <div className="home__banner-card-icon home__banner-card-icon--green" />
              <span>Venda mais através do ecossistema PicPay</span>
            </div>
            <div className="home__banner-card home__banner-card--bottom">
              <div className="home__banner-card-icon home__banner-card-icon--blue" />
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
