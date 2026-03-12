import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import TempoInfos from './components/TempoInfos/tempoinfos'
import TempoInfos5Dias from './components/TempoInfos5dias/TempoInfos5dias'

function App() {
  const [tempo, setTempo] = useState(null)
  const [tempo5dias, setTempo5dias] = useState(null)
  const cidadeRef = useRef()

  async function buscaCidade() {
    console.log(cidadeRef.current.value)
    const cidade = cidadeRef.current.value
    const key = "3ab6638ab17539de3630b23353b2f18c"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
    const url5dias = `https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${key}&lang=pt_br&units=metric`

    const response = await axios.get(url)
    const response5dias = await axios.get(url5dias)

    setTempo(response.data)
    setTempo5dias(response5dias.data)

  }

  return (
    <div className='container'>
      <h1>Previsão do tempo</h1>
      <input ref={cidadeRef} type='text' placeholder='Digite o nome da cidade' />
      <button onClick={buscaCidade}>Buscar</button>

      {tempo && <TempoInfos tempo={tempo} />}
      {tempo5dias && <TempoInfos5Dias tempo5dias={tempo5dias} />}
    </div>
  )
}
export default App
