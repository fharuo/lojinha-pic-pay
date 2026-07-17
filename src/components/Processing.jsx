import { useState, useEffect } from 'react'
import './Processing.css'

function Processing() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="processing">
      <h2 className="processing__title">
        {progress >= 100 ? 'Pronto!' : 'Finalizando pagamento'}
      </h2>
      <div className="processing__bar-bg">
        <div
          className="processing__bar-fill"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

export default Processing
