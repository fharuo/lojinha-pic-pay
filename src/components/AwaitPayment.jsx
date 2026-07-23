import { useEffect, useState } from 'react'
import QrCode from './QrCode'
import { PicPaySymbol } from './PicPayIcons'
import './AwaitPayment.css'

const PIX_CODE =
  '00020126580014BR.GOV.BCB.PIX0136E22767546534566445677O666545665204000053039865802BR5913PICPAY LOJINHA6009SAO PAULO62070503***6304A1B2'

const EXPIRES_IN = 15 * 60

const formatClock = (seconds) => {
  const min = String(Math.floor(seconds / 60)).padStart(2, '0')
  const sec = String(seconds % 60).padStart(2, '0')
  return `${min}:${sec}`
}

function AwaitPayment({ method, order, onOpenApp, onBack }) {
  const [remaining, setRemaining] = useState(EXPIRES_IN)
  const [copied, setCopied] = useState(false)
  const isPix = method === 'pix'

  useEffect(() => {
    if (!isPix) return
    const id = setInterval(() => {
      setRemaining((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(id)
  }, [isPix])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PIX_CODE)
    } catch {
      // ambiente sem permissão de clipboard: o feedback visual basta pra simulação
    }
    setCopied(true)
    // Copiar o código Pix já dispara a abertura do app do PicPay na simulação.
    setTimeout(() => {
      setCopied(false)
      onOpenApp()
    }, 900)
  }

  return (
    <div className="await">
      <div className="await__head">
        <h2 className="await__title">Conclua o pagamento</h2>
        <p className="await__desc">
          {isPix
            ? 'Escaneie o QR Code com o app do seu banco ou use o Pix Copia e Cola para pagar.'
            : 'Abra a última notificação do PicPay em seu telefone ou escaneie o QR Code com PicPay para pagar.'}
        </p>
      </div>

      {isPix && (
        <div className="await__timer">
          <span className="await__timer-label">Código Pix expira em</span>
          <strong className="await__timer-value">{formatClock(remaining)}</strong>
        </div>
      )}

      <div className="await__qr-box">
        <QrCode value={`${method}-${order.orderId}`} size={208} className="await__qr" />
        {!isPix && (
          <span className="await__qr-badge" aria-hidden="true">
            <PicPaySymbol size={22} />
          </span>
        )}
      </div>

      {isPix ? (
        <button type="button" className="await__copy" onClick={handleCopy}>
          {copied ? 'Código copiado!' : 'Copiar código Pix'}
        </button>
      ) : (
        <p className="await__download">
          Ainda não tem PicPay?{' '}
          <a href="#" onClick={(e) => e.preventDefault()}>
            Baixar aplicativo
          </a>
        </p>
      )}

      {!isPix && (
        <div className="await__sim">
          <p className="await__sim-hint">
            Simulação do evento — toque abaixo para abrir o app do PicPay.
          </p>
          <button type="button" className="await__sim-button" onClick={onOpenApp}>
            Abrir app do PicPay
          </button>
        </div>
      )}

      <div className="await__actions">
        <button type="button" className="await__back" onClick={onBack}>
          Anterior
        </button>
      </div>
    </div>
  )
}

export default AwaitPayment
