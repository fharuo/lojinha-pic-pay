/* Estoque da roleta de prêmios.
 *
 * Persistido em localStorage porque o evento dura dois dias e cada visitante
 * é uma nova sessão/reload no totem — o estoque precisa sobreviver a isso.
 * Observação: o estoque é por navegador/dispositivo. Se o evento usar mais de
 * um totem, cada um terá sua própria contagem (estoque compartilhado exigiria
 * um backend).
 */

const STORAGE_KEY = 'lojinha-picpay-roleta-v1'

// initial = estoque total; perDay limita quantos podem sair por dia de evento.
export const PRIZES = [
  { id: 'agenda', label: 'Agenda', initial: 100 },
  { id: 'kit-churrasco', label: 'Kit de Churrasco', initial: 500 },
  { id: 'capa-notebook', label: 'Capa de Notebook', initial: 262 },
  { id: 'tampa-champagne', label: 'Tampa de Champagne', initial: 1000 },
  { id: 'salva-celular', label: 'Salva Celular', initial: 806 },
  { id: 'copo-canudo', label: 'Copo com Canudo', initial: 500 },
  { id: 'necessaire', label: 'Necessaire', initial: 21 },
  { id: 'bone', label: 'Boné', initial: 500 },
  { id: 'jaqueta-puff', label: 'Jaqueta Puff', initial: 2, perDay: 1 },
  { id: 'colete', label: 'Colete', initial: 0 },
  { id: 'corta-vento', label: 'Corta Vento', initial: 0 },
  { id: 'guarda-chuva', label: 'Guarda-chuva', initial: 200 },
]

const today = () => new Date().toLocaleDateString('en-CA') // YYYY-MM-DD, hora local

function defaultState() {
  const stock = {}
  PRIZES.forEach((prize) => {
    stock[prize.id] = prize.initial
  })
  return { stock, perDayDate: {} }
}

export function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultState()
    const parsed = JSON.parse(raw)
    const base = defaultState()
    // Mescla com os defaults pra tolerar a lista de prêmios ter mudado.
    return {
      stock: { ...base.stock, ...(parsed.stock || {}) },
      perDayDate: parsed.perDayDate || {},
    }
  } catch {
    return defaultState()
  }
}

function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // localStorage indisponível (modo privado etc.): segue só em memória.
  }
}

// Prêmios que podem cair agora: têm estoque e, se limitados por dia, ainda não
// saíram hoje.
export function availablePrizes(state) {
  return PRIZES.filter((prize) => {
    if ((state.stock[prize.id] ?? 0) <= 0) return false
    if (prize.perDay && state.perDayDate[prize.id] === today()) return false
    return true
  })
}

// Sorteio ponderado pelo estoque restante: itens com mais unidades saem mais,
// o que esvazia o estoque de forma equilibrada ao longo do evento.
export function pickWeighted(items, state) {
  const total = items.reduce((sum, prize) => sum + state.stock[prize.id], 0)
  let roll = Math.random() * total
  for (const prize of items) {
    roll -= state.stock[prize.id]
    if (roll < 0) return prize
  }
  return items[items.length - 1]
}

export function award(state, id) {
  const prize = PRIZES.find((p) => p.id === id)
  const next = {
    stock: { ...state.stock, [id]: Math.max(0, (state.stock[id] ?? 0) - 1) },
    perDayDate: { ...state.perDayDate },
  }
  if (prize?.perDay) next.perDayDate[id] = today()
  saveState(next)
  return next
}

export function resetState() {
  const next = defaultState()
  saveState(next)
  return next
}
