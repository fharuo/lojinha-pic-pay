// QR meramente decorativo: a simulação não precisa ser escaneável,
// mas o desenho segue o formato real (3 marcadores + módulos) pra leitura visual.
const MODULES = 29

function buildMatrix(seed) {
  const cells = []
  let state = 0
  for (let i = 0; i < seed.length; i++) {
    state = (state * 31 + seed.charCodeAt(i)) >>> 0
  }
  for (let y = 0; y < MODULES; y++) {
    for (let x = 0; x < MODULES; x++) {
      state = (state * 1103515245 + 12345) >>> 0
      cells.push({ x, y, on: ((state >>> 16) & 1) === 1 })
    }
  }
  return cells
}

const isFinderArea = (x, y) => {
  const inBox = (ox, oy) => x >= ox && x < ox + 8 && y >= oy && y < oy + 8
  return inBox(0, 0) || inBox(MODULES - 8, 0) || inBox(0, MODULES - 8)
}

function Finder({ x, y, background }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width="7" height="7" rx="1.6" fill="currentColor" />
      <rect x="1" y="1" width="5" height="5" rx="1" fill={background} />
      <rect x="2" y="2" width="3" height="3" rx="0.6" fill="currentColor" />
    </g>
  )
}

/* `background` precisa acompanhar a superfície atrás do QR: é a cor do vão
   dos três marcadores de canto. */
function QrCode({ value = 'picpay', size = 200, className = '', background = 'var(--white)' }) {
  const cells = buildMatrix(value)

  return (
    <svg
      className={className}
      viewBox={`0 0 ${MODULES} ${MODULES}`}
      width={size}
      height={size}
      role="img"
      aria-label="QR Code de pagamento"
    >
      {cells.map(
        ({ x, y, on }) =>
          on &&
          !isFinderArea(x, y) && (
            <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill="currentColor" />
          )
      )}
      <Finder x={0} y={0} background={background} />
      <Finder x={MODULES - 7} y={0} background={background} />
      <Finder x={0} y={MODULES - 7} background={background} />
    </svg>
  )
}

export default QrCode
