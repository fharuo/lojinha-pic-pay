import { useEffect, useState } from 'react'
import QrCode from './QrCode'
import * as Ic from './PicPayIcons'
import './PicPayApp.css'

/* Dados fixos, todos vindos dos renders em .figma-ref/pix-flow. */
const USER = 'Sabrina'
const BUYER = 'Sabrina da Silva'
const BUYER_DOC = '***.658.741-**'
const MERCHANT = 'Lojinha PicPay'
const ORDER_REF = 'Pedido: 0123b34-endu37-46endu3746- endu3746'
const ORDER_CODE = '1120632'
const TRANSACTION_ID = '3356214567865'
const PIX_KEY = '03442644078'
const PIX_ID = 'E22767546534566445677O66654566b'
const BALANCE = 323.0

const brl = (v) => `R$ ${v.toFixed(2).replace('.', ',')}`

const MONTHS = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
const receiptDate = () => {
  const d = new Date()
  return `${String(d.getDate()).padStart(2, '0')}/${MONTHS[d.getMonth()]}/${d.getFullYear()}`
}

/* Só Saldo PicPay e PicPay Card são selecionáveis na simulação; o resto
   aparece na lista mas não responde ao clique. */
const METHODS = [
  { id: 'saldo', label: 'Saldo PicPay', desc: `Disponível ${brl(BALANCE)}`, icon: 'glyph' },
  { id: 'card', label: 'PicPay Card', desc: 'Disponível R$ 1.723,12', icon: 'card' },
  {
    id: 'parcela',
    label: 'PicPay Parcela',
    desc: 'Pré-aprovado R$ 1.240,03',
    icon: 'hand',
    tag: 'EM ATÉ 36X',
    locked: true,
  },
  { id: 'master', label: 'Mastercard **9458', desc: 'Em até 12x', icon: 'master', locked: true },
]

const METHOD_ICON = {
  glyph: (
    <span className="pk__mi pk__mi--green">
      <Ic.PicPayGlyph size={22} />
    </span>
  ),
  card: (
    <span className="pk__mi pk__mi--green">
      <Ic.CardIcon size={22} />
    </span>
  ),
  hand: (
    <span className="pk__mi pk__mi--green">
      <Ic.HandCoinIcon size={22} />
    </span>
  ),
  master: (
    <span className="pk__mi pk__mi--white">
      <Ic.MastercardMark size={30} />
    </span>
  ),
}

/* ---------- 1. splash ---------- */

const SplashScreen = () => (
  <div className="pk__splash">
    <Ic.PicPayWordmark height={58} />
  </div>
)

/* ---------- 2. face id ---------- */

const FaceIdScreen = () => (
  <div className="pk__splash">
    <Ic.PicPayWordmark height={58} />
    <div className="pk__faceid">
      <Ic.FaceIdIcon size={86} />
      <span>Face ID</span>
    </div>
  </div>
)

/* ---------- 3. home ---------- */

const QUICK_ACTIONS = [
  { id: 'pix', label: 'Pix', icon: <Ic.PixIcon />, primary: true },
  { id: 'boletos', label: 'Pagar boletos', icon: <Ic.BarcodeIcon /> },
  { id: 'add', label: 'Adicionar dinheiro', icon: <Ic.AddMoneyIcon />, tag: 'EM ATÉ 24X' },
  { id: 'cofrinhos', label: 'Cofrinhos', icon: <Ic.PiggyIcon />, tag: 'ATÉ 121%' },
]

function HomeScreen({ onPix }) {
  return (
    <div className="pk__home">
      <div className="pk__home-top">
        <div className="pk__home-bar">
          <span className="pk__avatar" aria-hidden="true">
            <svg viewBox="0 0 44 44" width="44" height="44">
              <rect width="44" height="44" fill="#B9754A" />
              <circle cx="22" cy="17" r="9.5" fill="#F0C29A" />
              <path d="M11 16a11 11 0 0122 0c0-7-4-11-11-11S11 9 11 16z" fill="#8C5A32" />
              <path d="M12 15c2 4 5 5 10 5s8-1 10-5c0 8-4 12-10 12s-10-4-10-12z" fill="#A6683A" />
              <path d="M4 44c1.5-9 8.5-14 18-14s16.5 5 18 14z" fill="#DCE3EA" />
            </svg>
          </span>
          <div className="pk__search">
            <Ic.SearchIcon size={22} />
            <span>Buscar</span>
          </div>
          <button type="button" className="pk__circle" aria-label="Ajuda">
            <Ic.HelpIcon size={22} />
          </button>
          <button type="button" className="pk__circle" aria-label="Conversas">
            <Ic.ChatIcon size={22} />
          </button>
          <button type="button" className="pk__circle" aria-label="Notificações">
            <Ic.BellIcon size={22} />
          </button>
        </div>

        <div className="pk__greet">
          <strong>Olá, {USER}</strong>
          <span className="pk__greet-hide">
            Ocultar avisos <Ic.ChevronUp size={20} />
          </span>
        </div>

        <div className="pk__chips">
          <span className="pk__chip pk__chip--light">
            <span className="pk__chip-glyph">
              <Ic.PicPayGlyph size={15} />
            </span>
            PicPay
          </span>
          <span className="pk__chip pk__chip--dark">
            <span className="pk__banks" aria-hidden="true">
              <i style={{ background: '#820AD1' }}>nu</i>
              <i style={{ background: '#FFE600', color: '#111' }}>bb</i>
              <i style={{ background: '#FF6200' }}>itaú</i>
            </span>
            Adicionar banco
          </span>
        </div>

        {/* Carrossel: o segundo card aparece cortado na borda direita. */}
        <div className="pk__carousel">
          <div className="pk__account">
            <div className="pk__account-head">
              <span>Conta</span>
              <span className="pk__account-link">
                Ver extrato <Ic.ChevronRight size={18} />
              </span>
            </div>
            <div className="pk__account-balance">
              <strong>
                Saldo em conta
                <br />
                {brl(BALANCE)}
              </strong>
              <Ic.EyeOff size={28} />
            </div>
            <span className="pk__account-cdi">Rendendo 102% do CDI</span>
            <button type="button" className="pk__account-btn">
              Guardar dinheiro
            </button>
          </div>
          <div className="pk__account-peek" aria-hidden="true" />
        </div>
      </div>

      <div className="pk__home-body">
        <h4 className="pk__section">Pro dia a dia</h4>
        <div className="pk__actions">
          {QUICK_ACTIONS.map((action) => (
            <button
              key={action.id}
              type="button"
              className="pk__action"
              onClick={action.id === 'pix' ? onPix : undefined}
            >
              <span className={`pk__action-tile ${action.primary ? 'pk__action-tile--on' : ''}`}>
                {action.icon}
              </span>
              <span className={`pk__action-foot ${action.tag ? 'pk__action-foot--tagged' : ''}`}>
                {action.tag && <span className="pk__action-tag">{action.tag}</span>}
                <span className="pk__action-label">{action.label}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Card do conteúdo seguinte, cortado pela tab bar. */}
        <div className="pk__next-card" aria-hidden="true">
          <span>Cartão</span>
          <Ic.CardIcon size={22} />
        </div>
      </div>

      <button type="button" className="pk__fab" onClick={onPix}>
        Pagar <Ic.QrIcon size={22} />
      </button>

      <nav className="pk__tabbar">
        <span className="pk__tab-home">
          <Ic.HomeIcon size={26} />
        </span>
        <span className="pk__tab">
          <Ic.CardIcon size={24} />
          Cartão
        </span>
        <span className="pk__tab">
          <Ic.HandCoinIcon size={24} />
          Empréstimo
        </span>
        <span className="pk__tab">
          <Ic.BagIcon size={24} />
          Shop
        </span>
        <span className="pk__tab">
          <Ic.MenuIcon size={24} />
          Menu
        </span>
      </nav>

      <span className="pk__home-bar-indicator" aria-hidden="true" />
    </div>
  )
}

/* ---------- 4. scanner ---------- */

function ScannerScreen({ total, onBack, onScan }) {
  return (
    <div className="pk__scanner">
      {/* "foto" da tela do checkout vista pela câmera do celular */}
      <div className="pk__cam">
        <div className="pk__cam-page">
          <h5>Conclua seu pagamento</h5>
          <p>Escaneie o QR Code com o app do seu banco ou use o Pix Copia e Cola para pagar.</p>
          <div className="pk__cam-card">
            <QrCode value="pix-scan" size={128} />
            <div className="pk__cam-total">
              <span>Total a pagar</span>
              <strong>{brl(total)}</strong>
            </div>
          </div>
          <div className="pk__cam-row">
            <span>Código Pix expira em</span>
            <strong>9:58</strong>
          </div>
          <div className="pk__cam-row">
            <span>Conferir detalhes</span>
            <Ic.ChevronDown size={18} />
          </div>
          <div className="pk__cam-btn">Copiar código Pix</div>
        </div>
      </div>

      <div className="pk__scan-top">
        <button type="button" className="pk__scan-round" onClick={onBack} aria-label="Voltar">
          <Ic.ArrowLeft />
        </button>
        <button type="button" className="pk__scan-round" aria-label="Ajuda">
          <Ic.HelpIcon />
        </button>
      </div>

      <div className="pk__tooltip">
        <Ic.RotatePhoneIcon size={20} />
        Aproxime ou gire para ler o código
      </div>

      <div className="pk__scan-bottom">
        <button type="button" className="pk__scan-round pk__scan-round--light" aria-label="Flash">
          <Ic.FlashOffIcon />
        </button>
        <button type="button" className="pk__scan-round pk__scan-round--light" aria-label="Arquivos">
          <Ic.FileIcon />
        </button>
        <button type="button" className="pk__scan-type" onClick={onScan}>
          <Ic.KeyboardIcon />
          Digitar código
        </button>
      </div>

      <div className="pk__scan-tray">
        {[
          { label: 'Fazer Pix', icon: <Ic.PixIcon size={26} />, on: true, tag: 'EM ATÉ 12X' },
          { label: 'Adicionar cartão', icon: <Ic.AddCardIcon size={26} /> },
          { label: 'Cofrinhos', icon: <Ic.PiggyIcon size={26} /> },
          { label: 'Cobrar', icon: <Ic.AddMoneyIcon size={26} /> },
        ].map((item) => (
          <button key={item.label} type="button" className="pk__tray-item" onClick={onScan}>
            <span className={`pk__tray-tile ${item.on ? 'pk__tray-tile--on' : ''}`}>{item.icon}</span>
            {item.tag && <span className="pk__tray-tag">{item.tag}</span>}
            <span className="pk__tray-label">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

/* ---------- 5/6. escolha de formas ---------- */

function MethodsScreen({ total, selected, onSelect, onContinue, onClose }) {
  const current = METHODS.find((m) => m.id === selected)

  return (
    <div className="pk__sheet">
      <span className="pk__grabber" aria-hidden="true" />
      <button type="button" className="pk__close" onClick={onClose}>
        Fechar
      </button>

      <div className="pk__sheet-scroll">
        <h3 className="pk__title">
          Escolha até 2 formas
          <br />
          de pagamento
        </h3>
        <p className="pk__lead">
          Valor <b>{brl(total)}</b>
          <br />
          Para <b>{MERCHANT}</b>
        </p>

        <div className="pk__methods">
          {METHODS.map((method) => {
            const on = method.id === selected
            return (
              <button
                key={method.id}
                type="button"
                className={`pk__method ${on ? 'pk__method--on' : ''} ${
                  method.locked ? 'pk__method--locked' : ''
                }`}
                disabled={method.locked}
                onClick={() => onSelect(method.id)}
              >
                {METHOD_ICON[method.icon]}
                <span className="pk__method-text">
                  {method.tag && <span className="pk__method-tag">{method.tag}</span>}
                  <strong>{method.label}</strong>
                  <span className="pk__method-desc">{method.desc}</span>
                </span>
                <span className={`pk__check ${on ? 'pk__check--on' : ''}`} aria-hidden="true">
                  {on && (
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
                      <path d="M5 12.5l4.5 4.5L19 7" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
              </button>
            )
          })}

          <button type="button" className="pk__method pk__method--add pk__method--locked" disabled>
            <span className="pk__mi pk__mi--gray">
              <Ic.AddCardIcon size={22} />
            </span>
            <span className="pk__method-text">
              <strong>Adicionar cartão de crédito</strong>
            </span>
            <Ic.ArrowRight size={22} />
          </button>
        </div>
      </div>

      {current && (
        <div className="pk__sheet-foot">
          <button type="button" className="pk__primary pk__primary--arrow" onClick={onContinue}>
            <span>Continuar com {current.label}</span>
            <Ic.ArrowRight />
          </button>
        </div>
      )}
    </div>
  )
}

/* ---------- 7. parcelas (só PicPay Card) ---------- */

const buildInstallments = (total) =>
  [3, 2, 1].map((count) => ({ count, label: `${count}x de ${brl(total / count)}` }))

function InstallmentsScreen({ total, selected, onSelect, onContinue, onBack, onClose }) {
  const options = buildInstallments(total)
  const current = options.find((o) => o.count === selected)

  return (
    <div className="pk__pay">
      <div className="pk__pay-nav">
        <button type="button" className="pk__circle pk__circle--gray" onClick={onBack} aria-label="Voltar">
          <Ic.ArrowLeft />
        </button>
        <button type="button" className="pk__circle pk__circle--gray" onClick={onClose} aria-label="Fechar">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div className="pk__inst-title">
        <h3>
          Escolha as parcelas do
          <br />
          seu PicPay Card
        </h3>
        <p>
          Valor <b>{brl(total)}</b>
        </p>
      </div>

      <div className="pk__pay-foot">
        <div className="pk__inst-options">
          {options.map((option) => {
            const on = option.count === selected
            return (
              <button
                key={option.count}
                type="button"
                className={`pk__inst ${on ? 'pk__inst--on' : ''}`}
                onClick={() => onSelect(option.count)}
              >
                <span>{option.label}</span>
                <span className={`pk__radio ${on ? 'pk__radio--on' : ''}`} aria-hidden="true" />
              </button>
            )
          })}
        </div>
        <button type="button" className="pk__primary pk__primary--arrow" onClick={onContinue}>
          <span>Continuar com {current.label}</span>
          <Ic.ArrowRight />
        </button>
      </div>
    </div>
  )
}

/* ---------- 8. saldo / pagar ---------- */

function PayScreen({ total, selected, installments, onPay, onBack }) {
  const current = METHODS.find((m) => m.id === selected)
  const isBalance = current.id === 'saldo'

  return (
    <div className="pk__pay">
      <div className="pk__pay-nav">
        <button type="button" className="pk__circle pk__circle--gray" onClick={onBack} aria-label="Voltar">
          <Ic.ArrowLeft />
        </button>
        <button type="button" className="pk__circle pk__circle--gray" aria-label="Informações">
          <Ic.HelpIcon />
        </button>
      </div>

      <div className="pk__merchant">
        <span className="pk__merchant-mark">
          <Ic.PicPayGlyph size={28} />
        </span>
        <span className="pk__merchant-text">
          <strong>{MERCHANT}</strong>
          <span>{ORDER_REF}</span>
        </span>
      </div>

      <strong className="pk__pay-amount">{brl(total)}</strong>

      <div className="pk__pay-method">
        {isBalance ? (
          <>
            <Ic.WalletIcon size={30} />
            <span className="pk__pay-line">
              Saldo na carteira: <b>{brl(BALANCE)}</b>
            </span>
          </>
        ) : (
          <>
            <Ic.CardThumb width={40} />
            <span className="pk__pay-stack">
              <strong>{current.label}</strong>
              <span>
                {installments}x de {brl(total / installments)}
              </span>
            </span>
          </>
        )}
      </div>

      <div className="pk__pay-foot">
        {isBalance ? (
          <div className="pk__pay-divider" />
        ) : (
          <div className="pk__pay-total">
            <span>
              Valor total: <b>{brl(total)}</b>
            </span>
            <Ic.ChevronUp />
          </div>
        )}
        <button type="button" className="pk__primary" onClick={onPay}>
          Pagar
        </button>
      </div>
    </div>
  )
}

/* ---------- 8. check ---------- */

const CheckScreen = () => (
  <div className="pk__check-screen">
    <span className="pk__check-circle">
      <svg viewBox="0 0 24 24" width="52" height="52" fill="none" aria-hidden="true">
        <path d="M5 12.5l4.5 4.5L19 7.5" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  </div>
)

/* ---------- 9. comprovante ---------- */

function ReceiptScreen({ method, total, onFinish }) {
  const isPix = method === 'pix'
  const Row = ({ label, value, sub, size }) => (
    <div className="pk__field">
      <dt>{label}</dt>
      <dd className={size ? `pk__v--${size}` : undefined}>{value}</dd>
      {sub && <span className="pk__field-sub">{sub}</span>}
    </div>
  )

  return (
    <div className="pk__receipt">
      <div className="pk__receipt-bar">
        <button type="button" className="pk__close" onClick={onFinish}>
          Fechar
        </button>
        <Ic.DownloadIcon />
      </div>

      <div className="pk__receipt-scroll">
        <h3 className="pk__receipt-title">
          {isPix ? 'Comprovante de Pix' : 'Comprovante de pagamento'}
        </h3>
        <span className="pk__receipt-date">{receiptDate()}</span>

        <div className="pk__success">
          <Ic.CheckBadge />
          <span>Seu pagamento foi enviado com sucesso!</span>
        </div>

        <div className="pk__hr" />

        <dl className="pk__fields">
          <Row label="Valor" value={brl(total)} size="hero" />
          <Row label="Para" value={MERCHANT} size="strong" />
          <Row label="De" value={BUYER} sub={BUYER_DOC} size="strong" />
          {isPix && <Row label="ID Pix" value={PIX_ID} />}
          <Row label="ID da transação" value={TRANSACTION_ID} />
          {isPix ? (
            <Row label="Chave Pix do recebedor" value={PIX_KEY} />
          ) : (
            <>
              <Row label="Pedido" value={ORDER_CODE} />
              <Row label="Comprador" value={BUYER} />
            </>
          )}
        </dl>
      </div>

      <div className="pk__share">
        <button type="button" className="pk__share-btn" onClick={onFinish}>
          <span className="pk__share-icon">
            <Ic.ShareIcon />
          </span>
          <span>
            Compartilhar
            <br />
            comprovante
          </span>
        </button>
      </div>
    </div>
  )
}

/* ---------- shell ---------- */

/* Etapas com avanço automático: [etapa, duração em ms]. */
const AUTO = { splash: 1200, faceid: 1400, check: 1800 }
const NEXT = { splash: 'faceid', faceid: 'home', check: 'receipt' }

function PicPayApp({ method, total, onComplete, onClose }) {
  const [stage, setStage] = useState('splash')
  const [selected, setSelected] = useState(method === 'pix' ? 'saldo' : 'card')
  const [installments, setInstallments] = useState(1)

  // Só o PicPay Card passa pela escolha de parcelas; o saldo vai direto pro pagamento.
  const needsInstallments = selected === 'card'

  useEffect(() => {
    const delay = AUTO[stage]
    if (!delay) return
    const id = setTimeout(() => setStage(NEXT[stage]), delay)
    return () => clearTimeout(id)
  }, [stage])

  const dark = stage === 'splash' || stage === 'faceid'

  return (
    <div className="pk" role="dialog" aria-modal="true" aria-label="Simulação do app PicPay">
      <div className="pk__backdrop" onClick={onClose} />

      <div className={`pk__phone ${dark ? 'pk__phone--green' : ''}`}>
        {stage === 'splash' && <SplashScreen />}
        {stage === 'faceid' && <FaceIdScreen />}
        {stage === 'home' && <HomeScreen onPix={() => setStage('scanner')} />}
        {stage === 'scanner' && (
          <ScannerScreen total={total} onBack={() => setStage('home')} onScan={() => setStage('methods')} />
        )}
        {stage === 'methods' && (
          <MethodsScreen
            total={total}
            selected={selected}
            onSelect={setSelected}
            onContinue={() => setStage(needsInstallments ? 'installments' : 'pay')}
            onClose={onClose}
          />
        )}
        {stage === 'installments' && (
          <InstallmentsScreen
            total={total}
            selected={installments}
            onSelect={setInstallments}
            onContinue={() => setStage('pay')}
            onBack={() => setStage('methods')}
            onClose={onClose}
          />
        )}
        {stage === 'pay' && (
          <PayScreen
            total={total}
            selected={selected}
            installments={installments}
            onPay={() => setStage('check')}
            onBack={() => setStage(needsInstallments ? 'installments' : 'methods')}
          />
        )}
        {stage === 'check' && <CheckScreen />}
        {stage === 'receipt' && (
          <ReceiptScreen method={method} total={total} onFinish={onComplete} />
        )}
      </div>
    </div>
  )
}

export default PicPayApp
