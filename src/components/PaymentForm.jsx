import { MastercardMark, PicPayLockup } from './PicPayIcons'
import './PaymentForm.css'

const PAYMENT_METHODS = [
  { id: 'credit', label: 'Cartão de crédito', icon: 'icon-credit-card.svg' },
  { id: 'pix', label: 'Pix', icon: 'icon-pix.svg' },
  { id: 'picpay', label: 'PicPay', icon: 'icon-picpay.svg' },
]

const METHOD_CONTENT = {
  pix: {
    subtitle: 'Pix',
    headline: 'Pagar com Pix é rápido e fácil',
    steps: [
      { icon: 'icon-qrcode-scan.svg', text: 'Gere um código Pix;' },
      { icon: 'icon-pix.svg', text: 'No aplicativo do seu banco na área Pix escaneie o QR Code Pix ou use Pix copia e cola;' },
      { icon: 'icon-check-circle.svg', text: 'Confirme o pagamento e pronto!' },
    ],
    cta: 'Pagar com Pix',
    logo: 'pix',
  },
  picpay: {
    subtitle: 'PicPay',
    headline: 'Pague usando saldo ou cartão',
    steps: [
      { icon: 'icon-picpay.svg', text: 'Gere e escaneie o QR Code ou toque na notificação que vamos enviar pro seu PicPay;' },
      { icon: 'icon-wallet.svg', text: 'Escolha como quer pagar;' },
      { icon: 'icon-check-circle.svg', text: 'Confirme o pagamento e pronto!' },
    ],
    cta: 'Pagar com PicPay',
    logo: 'picpay',
  },
}

function PaymentForm({ cardData, setCardData, selectedMethod, setSelectedMethod, onSubmit, onBack }) {
  const base = import.meta.env.BASE_URL

  const alternative = METHOD_CONTENT[selectedMethod]
  const isFormFilled = cardData.name && cardData.number && cardData.expiry && cardData.cvv && cardData.installments
  // Pix e PicPay não têm campos, então o CTA já nasce habilitado.
  const isReady = alternative ? true : isFormFilled

  const formatCardNumber = (value) => {
    const digits = value.replace(/\D/g, '').slice(0, 16)
    return digits.replace(/(\d{4})(?=\d)/g, '$1 ')
  }

  const formatExpiry = (value) => {
    const digits = value.replace(/\D/g, '').slice(0, 4)
    if (digits.length > 2) return digits.slice(0, 2) + '/' + digits.slice(2)
    return digits
  }

  const handleChange = (field) => (e) => {
    let value = e.target.value
    if (field === 'number') value = formatCardNumber(value)
    if (field === 'expiry') value = formatExpiry(value)
    if (field === 'cvv') value = value.replace(/\D/g, '').slice(0, 4)
    setCardData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(selectedMethod)
  }

  return (
    <form className="payment" onSubmit={handleSubmit}>
      <div className="payment__section">
        <h2 className="payment__title">Forma de pagamento</h2>
        <div className="payment__methods">
          {PAYMENT_METHODS.map((method) => (
            <button
              key={method.id}
              type="button"
              className={`payment__method ${selectedMethod === method.id ? 'payment__method--active' : ''}`}
              onClick={() => setSelectedMethod(method.id)}
            >
              <div className="payment__method-icon">
                <img src={`${base}images/${method.icon}`} alt="" />
              </div>
              <span>{method.label}</span>
            </button>
          ))}
        </div>
      </div>

      <h3 className="payment__subtitle">
        {alternative ? alternative.subtitle : 'Cartão de crédito'}
      </h3>

      {alternative ? (
        <div className="payment__intro">
          <div className="payment__intro-content">
            <p className="payment__intro-headline">{alternative.headline}</p>
            <ol className="payment__steps">
              {alternative.steps.map((step) => (
                <li key={step.text}>
                  <span className="payment__step-icon">
                    <img src={`${base}images/${step.icon}`} alt="" />
                  </span>
                  <span>{step.text}</span>
                </li>
              ))}
            </ol>
          </div>
          {alternative.logo === 'picpay' && (
            <div className="payment__intro-logo payment__intro-logo--picpay">
              <PicPayLockup width={82} />
            </div>
          )}
          {alternative.logo === 'pix' && (
            <div className="payment__intro-logo payment__intro-logo--pix">
              <img src={`${base}images/pix-mark.png`} alt="" className="payment__pix-mark" />
              <img src={`${base}images/pix-wordmark.png`} alt="Pix" className="payment__pix-wordmark" />
            </div>
          )}
        </div>
      ) : (
      <div className="payment__fields payment__fields--locked">
        <div className="payment__row">
          <div className="payment__field">
            <input
              type="text"
              placeholder=" "
              value={cardData.name}
              onChange={handleChange('name')}
              readOnly
              tabIndex={-1}
              inputMode="none"
            />
            <label>Nome impresso no cartão</label>
          </div>
          <div className="payment__field payment__field--icon">
            <input
              type="text"
              placeholder=" "
              value={cardData.number}
              onChange={handleChange('number')}
              readOnly
              tabIndex={-1}
              inputMode="none"
            />
            <label>Número do cartão</label>
            <MastercardMark size={30} className="payment__field-icon payment__field-icon--mastercard" />
          </div>
        </div>

        <div className="payment__row">
          <div className="payment__field">
            <input
              type="text"
              placeholder=" "
              value={cardData.expiry}
              onChange={handleChange('expiry')}
              readOnly
              tabIndex={-1}
              inputMode="none"
            />
            <label>Validade</label>
          </div>
          <div className="payment__field payment__field--icon">
            <input
              type="text"
              placeholder=" "
              value={cardData.cvv}
              onChange={handleChange('cvv')}
              readOnly
              tabIndex={-1}
              inputMode="none"
            />
            <label>CVV</label>
            <svg className="payment__field-icon payment__info-icon" viewBox="0 0 24 24" fill="none" width="24" height="24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M12 16v-4m0-4h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        <div className="payment__field payment__field--select">
          <select
            value={cardData.installments}
            onChange={handleChange('installments')}
            tabIndex={-1}
            aria-disabled="true"
          >
            {/* Vazia de propósito: quem mostra o texto no estado vazio é o <label> flutuante. */}
            <option value="" disabled hidden></option>
            <option value="1">à vista</option>
            <option value="2">2x sem juros</option>
            <option value="3">3x sem juros</option>
          </select>
          <label className={cardData.installments ? 'has-value' : ''}>
            Número de parcelas
          </label>
          <svg className="payment__select-arrow" viewBox="0 0 24 24" fill="none" width="24" height="24">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      )}

      <div className="payment__actions">
        <button type="button" className="payment__back" onClick={onBack}>
          Anterior
        </button>
        <button
          type="submit"
          className={`payment__submit ${isReady ? 'payment__submit--active' : ''}`}
        >
          {alternative ? alternative.cta : 'Pagar com cartão'}
        </button>
      </div>
    </form>
  )
}

export default PaymentForm
