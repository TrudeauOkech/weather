import './current-weather.css'

const CurrentWeather = () => {
    return(
        <div className='weather'>
            <div className='top'>
                <p className='city'>Nairobi</p>
                <p className='weather-description'>Rainy</p>

            </div>
            <div className='bottom'>
                <p className='temperature'>15C</p>
                <div className='details'>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Details</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Feeling</span>
                        <span className='parameter-value'>22</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">300 m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">22%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">40 hPa</span>
                    </div>
                </div>
            </div>
            <img alt='weather' className='weather-icon' src='icons/01d.png'></img>
        </div>
    );
}
export default CurrentWeather