import './TempoInfos5dias.css'

export function TempoInfos5dias({ tempo5dias }) {
    if (!tempo5dias || !tempo5dias.list) {
        return null;
    }

    let previsao5dias = {}

    for (let forecast of tempo5dias.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString()
        if (!previsao5dias[date]) {
            previsao5dias[date] = forecast
        }
    }

    const proximos5dias = Object.values(previsao5dias).slice(1, 6)

    function formatDate(date) {
        const newDate = new Date(date * 1000).toLocaleDateString('pt-BR', {
            weekday: 'long',
            day: '2-digit'
        })
        return newDate
    }

    return (
        <div className='weather-container'>
            <h3>Previsão para os próximos 5 dias</h3>
            <div className='weather-list'>
                {proximos5dias.map((forecast) => (
                    <div key={forecast.dt} className='weather-item'>
                        { }
                        <p>{formatDate(forecast.dt)}</p>
                        <img
                            src={`https://openweathermap.org/img/wn/${forecast.weather?.[0]?.icon}@2x.png`}
                            alt="ícone do tempo"
                        />
                        <p>{forecast.weather?.[0]?.description}</p>
                        <p>
                            {Math.round(forecast.main?.temp_min)}°C min / {Math.round(forecast.main?.temp_max)}°C max
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TempoInfos5dias