import './TempoInfos.css'

export function TempoInfos({ tempo }) {
    return (
        <div className='container'>
            <h2>{tempo.name}</h2>
            <div className='tempoInfo'>
                <img src={`https://openweathermap.org/img/wn/${tempo.weather?.[0]?.icon}@2x.png`} alt="" />
                <p className='temperatura'>Temperatura: {Math.round(tempo.main?.temp)}°C</p>
            </div>
            <p className='descricao'>Descrição: {tempo.weather?.[0]?.description}</p>
            <div className='detalhes'>
                <p>Sensação térmica: {Math.round(tempo.main?.feels_like)}°C</p>
                <p>Umidade: {tempo.main?.humidity}%</p>
                <p>Pressão: {tempo.main?.pressure} hPa</p>
            </div>
        </div>
    )
}

export default TempoInfos