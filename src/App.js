// App.js
import React, { useState, useEffect } from "react"
import Message from "./components/Message"
import messages from "./consts/messages"
import "./App.css"; // Importe o arquivo CSS para estilização


const getMotivationalMessage = () => {
  const today = new Date()
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000)
  return messages[dayOfYear % messages.length]
}

const App = () => {
  const [motivationalMessage, setMotivationalMessage] = useState("")

  useEffect(() => {
    setMotivationalMessage(getMotivationalMessage())
  }, [])

  return (
    <div className="app">
        <div className="ad-block">
        {/* Adiciona o bloco de anúncios aqui */}
        <img src="seu-anuncio.png" alt="Anúncio" />
      </div>
      <h1 className="app-title">InspireMe</h1>
      <Message message={motivationalMessage} />
      <div className="ad-block">
        {/* Adiciona outro bloco de anúncios aqui */}
        <img src="seu-outro-anuncio.png" alt="Outro Anúncio" />
      </div>
    </div>
  )
}

export default App
