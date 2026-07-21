import { useRef, useState } from 'react'
import {
  PRIZES,
  loadState,
  availablePrizes,
  pickWeighted,
  award,
  resetState,
} from '../prizes'
import './Wheel.css'

const CX = 200
const CY = 200
const R_OUTER = 180
const R_HUB = 78
const R_TEXT = 130
const DRAW_ORIGIN = -90 // primeiro gomo começa no topo
const TURNS = 6 // voltas completas antes de parar
const RESET_PASSWORD = 'vivi123'

const SEG_LIGHT = '#BFDCC9'
const SEG_BRIGHT = '#22A957'
const TEXT_COLOR = '#013E27'

const point = (r, deg) => {
  const rad = (deg * Math.PI) / 180
  return [CX + r * Math.cos(rad), CY + r * Math.sin(rad)]
}

function slicePath(a0, a1) {
  const [x0, y0] = point(R_OUTER, a0)
  const [x1, y1] = point(R_OUTER, a1)
  const [x2, y2] = point(R_HUB, a1)
  const [x3, y3] = point(R_HUB, a0)
  const large = a1 - a0 > 180 ? 1 : 0
  return `M${x0} ${y0} A${R_OUTER} ${R_OUTER} 0 ${large} 1 ${x1} ${y1} L${x2} ${y2} A${R_HUB} ${R_HUB} 0 ${large} 0 ${x3} ${y3} Z`
}

// Quebra o rótulo em até duas linhas, escolhendo o ponto que deixa a maior
// linha mais curta. Quebra também em hífen (ex.: "Guarda-chuva").
function wrapLabel(label) {
  const tokens = label.split(/[\s-]+/).filter(Boolean)
  if (tokens.length === 1) return tokens
  let best = null
  for (let i = 1; i < tokens.length; i++) {
    const l1 = tokens.slice(0, i).join(' ')
    const l2 = tokens.slice(i).join(' ')
    const longest = Math.max(l1.length, l2.length)
    if (!best || longest < best.longest) best = { lines: [l1, l2], longest }
  }
  return best.lines
}

function Wheel({ onBack }) {
  const [game, setGame] = useState(loadState)
  const [rotation, setRotation] = useState(0)
  const [spinning, setSpinning] = useState(false)
  const [result, setResult] = useState(null)
  const winnerRef = useRef(null)

  // A roleta mostra sempre os 12 itens (layout fixo). O sorteio, porém, só
  // considera os elegíveis: com estoque e — no caso da puff — não premiados hoje.
  const segAngle = 360 / PRIZES.length
  const eligible = availablePrizes(game)

  const handleSpin = () => {
    if (spinning || result || eligible.length === 0) return

    const winner = pickWeighted(eligible, game)
    const index = PRIZES.findIndex((s) => s.id === winner.id)
    winnerRef.current = winner

    const center = DRAW_ORIGIN + index * segAngle + segAngle / 2
    // pequena variação pra não parar sempre no centro exato do gomo
    const jitter = (Math.random() - 0.5) * segAngle * 0.5
    const targetMod = (((-center - jitter) % 360) + 360) % 360
    const currentMod = ((rotation % 360) + 360) % 360
    const delta = ((targetMod - currentMod + 360) % 360) + 360 * TURNS

    setSpinning(true)
    setRotation(rotation + delta)
  }

  const handleSpinEnd = () => {
    if (!spinning) return
    setSpinning(false)
    const next = award(game, winnerRef.current.id)
    setGame(next)
    setResult(winnerRef.current)
  }

  const handleAgain = () => {
    setResult(null)
  }

  const handleReset = () => {
    // Reset é ação administrativa: protegida por senha pra ninguém zerar o
    // estoque no meio do evento.
    const answer = window.prompt('Senha para repor o estoque:')
    if (answer === null) return // cancelou
    if (answer !== RESET_PASSWORD) {
      window.alert('Senha incorreta.')
      return
    }
    setGame(resetState())
    setResult(null)
    setRotation(0)
  }

  const empty = eligible.length === 0

  return (
    <div className="wheel-page">
      <h1 className="wheel-page__title">
        Gire a roleta
        <br />
        <span className="wheel-page__title-light">e descubra o prêmio que</span>
        <br />
        espera por você!
      </h1>

      <div className="wheel-page__stage">
        <svg className="wheel-page__svg" viewBox="0 0 400 400" role="img" aria-label="Roleta de prêmios">
          <g
            className={`wheel-page__disc ${spinning ? 'is-spinning' : ''}`}
            style={{ transform: `rotate(${rotation}deg)` }}
            onTransitionEnd={handleSpinEnd}
          >
            {PRIZES.map((prize, i) => {
              const a0 = DRAW_ORIGIN + i * segAngle
              const a1 = a0 + segAngle
              const mid = a0 + segAngle / 2
              const lines = wrapLabel(prize.label)
              const lineH = 13
              const y0 = CY - ((lines.length - 1) * lineH) / 2
              return (
                <g key={prize.id}>
                  <path d={slicePath(a0, a1)} fill={i % 2 === 0 ? SEG_BRIGHT : SEG_LIGHT} />
                  <g transform={`rotate(${mid} ${CX} ${CY})`}>
                    {lines.map((line, li) => (
                      <text
                        key={line}
                        x={CX + R_TEXT}
                        y={y0 + li * lineH}
                        fill={TEXT_COLOR}
                        fontSize="12"
                        fontWeight="700"
                        textAnchor="middle"
                        dominantBaseline="central"
                      >
                        {line}
                      </text>
                    ))}
                  </g>
                </g>
              )
            })}
          </g>

          {/* Hub fixo (não gira) */}
          <circle cx={CX} cy={CY} r={R_HUB} fill="#013E27" />
          <g transform={`translate(${CX - 51} ${CY - 26}) scale(0.485)`}>
            {/* wordmark oficial PicPay */}
            <path
              d="M43.1855 55.7175H53.0081V26.565H43.1855V55.7175ZM56.3952 6.7275H49.7903V13.455H56.3952V6.7275ZM19.3064 10.005H9.82258V18.4575H18.629C24.2177 18.4575 27.4355 21.2175 27.4355 26.3925C27.4355 31.5675 24.2177 34.5 18.629 34.5H9.82258V18.63H0V55.7175H9.82258V42.9525H19.1371C30.4839 42.9525 37.0887 36.7425 37.0887 26.0475C37.0887 16.0425 30.6532 10.005 19.3064 10.005ZM63 0H43.1855V20.1825H63V0ZM59.7822 16.7325H46.5726V3.2775H59.7822V16.7325ZM117.363 10.005H108.387V18.4575H116.855C122.444 18.4575 125.661 21.2175 125.661 26.3925C125.661 31.5675 122.444 34.5 116.855 34.5H108.387V18.63H98.5645V55.7175H108.387V42.9525H117.363C128.71 42.9525 135.315 36.7425 135.315 26.0475C135.315 16.0425 128.71 10.005 117.363 10.005ZM199.839 20.7L191.371 42.435L182.903 20.7H172.742L186.29 55.7175L181.04 69H191.371L210 20.7H199.839ZM155.806 20.5275C149.879 20.5275 145.306 21.9075 140.226 24.495L143.274 31.395C146.831 29.325 150.387 28.29 153.605 28.29C158.347 28.29 160.718 30.36 160.718 34.155V34.845H151.234C142.766 34.845 138.194 38.8125 138.194 45.3675C138.194 51.75 142.597 56.235 150.048 56.235C154.79 56.235 158.177 54.51 160.887 51.5775V55.3725H170.54V32.6025C170.202 25.185 164.952 20.5275 155.806 20.5275ZM161.565 43.9875C160.548 46.92 157.669 49.335 153.605 49.335C150.218 49.335 148.185 47.61 148.185 44.85C148.185 42.09 150.048 40.8825 153.774 40.8825H161.565V43.9875ZM78.0726 48.1275C73.3306 48.1275 69.9435 44.3325 69.9435 38.64C69.9435 33.12 73.3306 29.325 78.0726 29.325C81.4597 29.325 84 30.705 85.8629 33.12L92.4677 28.29C89.4193 23.6325 84.1693 20.8725 77.5645 20.8725C67.2339 20.7 60.121 27.945 60.121 38.64C60.121 49.335 67.2339 56.4075 77.5645 56.4075C84.6774 56.4075 89.9274 53.475 92.8064 48.645L86.0323 43.9875C84.3387 46.7475 81.629 48.1275 78.0726 48.1275Z"
              fill="#fff"
            />
          </g>
          <text x={CX} y={CY + 22} fill="#fff" fontSize="14" fontWeight="500" textAnchor="middle" opacity="0.92">
            Empresas
          </text>

          {/* Ponteiro fixo à direita */}
          <path d="M398 184 L398 216 L374 200 Z" fill={SEG_BRIGHT} />
        </svg>
      </div>

      {empty ? (
        <p className="wheel-page__empty">Os prêmios de hoje se esgotaram. Obrigado por participar!</p>
      ) : (
        <button
          type="button"
          className="wheel-page__spin"
          onClick={handleSpin}
          disabled={spinning}
        >
          {spinning ? 'Girando…' : 'Girar a roleta'}
        </button>
      )}

      <button type="button" className="wheel-page__back" onClick={onBack}>
        Voltar para a loja
      </button>

      <button type="button" className="wheel-page__reset" onClick={handleReset}>
        Repor estoque
      </button>

      {result && (
        <div className="wheel-result" role="dialog" aria-modal="true">
          <div className="wheel-result__card">
            <span className="wheel-result__badge" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="34" height="34" fill="none">
                <path d="M5 12.5l4.5 4.5L19 7.5" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="wheel-result__label">Você ganhou</span>
            <strong className="wheel-result__prize">{result.label}</strong>
            <button type="button" className="wheel-page__spin" onClick={handleAgain}>
              Girar novamente
            </button>
            <button type="button" className="wheel-result__store" onClick={onBack}>
              Voltar para a loja
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Wheel
