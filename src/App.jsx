import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Cart from './components/Cart'
import CheckoutLayout from './components/CheckoutLayout'
import PaymentForm from './components/PaymentForm'
import Processing from './components/Processing'
import Confirmation from './components/Confirmation'

const PRODUCTS = [
  { id: 1, name: 'Kit de Facas', desc: 'Os utensílios ideais para um churrasco completo em qualquer ocasião.', image: 'prod-facas.png', price: 49.90 },
  { id: 2, name: 'Case para Notebook', desc: 'Proteção elegante para o seu notebook do dia a dia.', image: 'prod-case.png', price: 49.90 },
  { id: 3, name: 'Tampa para Champagne', desc: 'Mantenha suas bebidas frescas por mais tempo.', image: 'prod-champagne.png', price: 49.90 },
  { id: 4, name: 'Jaqueta Corta-Vento', desc: 'Leve e resistente para qualquer aventura ao ar livre.', image: 'prod-jaqueta-7cb742.png', price: 49.90 },
  { id: 5, name: 'Cordão de Celular', desc: 'Praticidade e estilo para carregar seu celular.', image: 'prod-cordao.png', price: 49.90 },
  { id: 6, name: 'Copo com Canudo', desc: 'Ideal para manter suas bebidas na temperatura certa.', image: 'prod-copo-3cf56b.png', price: 49.90 },
  { id: 7, name: 'Necessaire', desc: 'Organize seus itens pessoais com praticidade.', image: 'prod-necessaire.png', price: 49.90 },
  { id: 8, name: 'Boné', desc: 'Estilo e proteção solar em um único acessório.', image: 'prod-bone.png', price: 49.90 },
  { id: 9, name: 'Jaqueta Puffer', desc: 'Aquecimento e estilo para os dias mais frios.', image: 'prod-puffer.png', price: 49.90 },
  { id: 10, name: 'Guarda-Chuva', desc: 'Proteção contra chuva com design moderno.', image: 'prod-guarda-chuva.png', price: 49.90 },
  { id: 11, name: 'Power Bank', desc: 'Energia extra para o seu dia a dia.', image: 'prod-powerbank.png', price: 49.90 },
]

function App() {
  const [step, setStep] = useState('home')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [cardData, setCardData] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: '',
    installments: '',
  })

  const order = selectedProduct
    ? {
        product: selectedProduct.name,
        desc: selectedProduct.desc,
        image: selectedProduct.image,
        size: '',
        subtotal: selectedProduct.price,
        shipping: 0,
        total: selectedProduct.price,
        orderId: '984749847',
      }
    : null

  const handleSelectProduct = (product) => {
    setSelectedProduct(product)
    setStep('cart')
  }

  const handleCheckout = () => {
    setStep('payment')
  }

  const handleSubmitPayment = () => {
    setStep('processing')
    setTimeout(() => setStep('confirmation'), 3000)
  }

  const handleBackToStore = () => {
    setStep('home')
    setSelectedProduct(null)
    setCardData({ number: '', name: '', expiry: '', cvv: '', installments: '' })
  }

  if (step === 'home') {
    return (
      <>
        <Header />
        <Home products={PRODUCTS} onSelectProduct={handleSelectProduct} />
        <Footer />
      </>
    )
  }

  if (step === 'cart') {
    return (
      <>
        <Header />
        <Cart
          product={selectedProduct}
          order={order}
          onCheckout={handleCheckout}
          onBack={handleBackToStore}
        />
        <Footer />
      </>
    )
  }

  if (step === 'confirmation') {
    return (
      <CheckoutLayout order={order} step={step}>
        <Confirmation
          order={order}
          cardData={cardData}
          onBack={handleBackToStore}
        />
      </CheckoutLayout>
    )
  }

  if (step === 'processing') {
    return (
      <CheckoutLayout order={order} step={step}>
        <Processing />
      </CheckoutLayout>
    )
  }

  return (
    <CheckoutLayout order={order} step={step}>
      <PaymentForm
        cardData={cardData}
        setCardData={setCardData}
        onSubmit={handleSubmitPayment}
        onBack={() => setStep('cart')}
      />
    </CheckoutLayout>
  )
}

export default App
