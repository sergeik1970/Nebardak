import { useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const fetchMessage = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await fetch('http://localhost:3000/api')
      
      if (!response.ok) {
        throw new Error(`Ошибка при получении данных с сервера: ${response.status}`)
      }
      
      const data = await response.json()
      setMessage(data.message)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Произошла неизвестная ошибка'
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app-container">
      <h1>Nebardak</h1>
      <p className="subtitle">React + Express проект</p>
      
      <div className="api-test">
        <h2>Тест API</h2>
        <button onClick={fetchMessage} disabled={loading}>
          {loading ? 'Загрузка...' : 'Получить сообщение с сервера'}
        </button>
        
        {message && (
          <div className="message-box">
            <p><strong>Ответ сервера:</strong> {message}</p>
          </div>
        )}
        
        {error && (
          <div className="error-box">
            <p><strong>Ошибка:</strong> {error}</p>
          </div>
        )}
      </div>
      
      <p className="footer">
        © 2025 Nebardak
      </p>
    </div>
  )
}

export default App;