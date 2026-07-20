import './Confirmation.css'

const METHOD_LABELS = {
  credit: { name: 'Mastercard', icon: 'icon-credit-card.svg' },
  pix: { name: 'Pix', icon: 'icon-pix.svg' },
  picpay: { name: 'PicPay', icon: 'icon-picpay.svg' },
}

function Confirmation({ order, cardData, method = 'credit', onBack }) {
  const base = import.meta.env.BASE_URL
  const now = new Date()
  const dateStr = now.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  const timeStr = now.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  })

  const lastFour = cardData.number.replace(/\s/g, '').slice(-4) || '****'
  const paymentLabel = METHOD_LABELS[method] ?? METHOD_LABELS.credit

  return (
    <div className="confirmation">
      <div className="confirmation__hero">
        <img
          src={`${base}images/feedback-success.svg`}
          alt=""
          className="confirmation__icon"
        />

        <h2 className="confirmation__title">Pagamento realizado</h2>

        <div className="confirmation__amount">
          <span className="confirmation__currency">R$</span>
          <span className="confirmation__value">
            {order.total.toFixed(2).replace('.', ',')}
          </span>
        </div>

        <span className="confirmation__recipient">
          para <strong>Lojinha PicPay</strong>
        </span>
        <span className="confirmation__date">
          {dateStr} - {timeStr}
        </span>
      </div>

      <div className="confirmation__card">
        <div className="confirmation__row">
          <span>Pedido</span>
          <strong>{order.orderId}</strong>
        </div>
        <div className="confirmation__separator" />
        <div className="confirmation__row">
          <span>Crédito à vista</span>
          <strong className="confirmation__approved">Aprovado</strong>
        </div>
        <div className="confirmation__separator" />
        <div className="confirmation__row">
          <div className="confirmation__card-info">
            <img
              src={`${base}images/${paymentLabel.icon}`}
              alt=""
              className="confirmation__card-icon"
            />
            <span>{paymentLabel.name}</span>
          </div>
          <strong>{method === 'credit' ? `Final ${lastFour}` : 'Aprovado'}</strong>
        </div>
        <div className="confirmation__separator" />
        <div className="confirmation__row">
          <span>Total pago</span>
          <strong>R$ {order.total.toFixed(2).replace('.', ',')}</strong>
        </div>
      </div>

      <button type="button" className="confirmation__back" onClick={onBack}>
        Voltar para a loja
      </button>
    </div>
  )
}

export default Confirmation
