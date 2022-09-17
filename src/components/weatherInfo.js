const WeatherInfo = ({data}) =>{

  const weather = new Map([
    [ "Clear" , "http://openweathermap.org/img/wn/01d@2x.png"],
    ["Haze" , "http://openweathermap.org/img/wn/50d@2x.png"],
    ["Clouds" , "http://openweathermap.org/img/wn/03d@2x.png"],
    ["Snow" , "http://openweathermap.org/img/wn/13d@2x.png"],
    ["Fog" , "http://openweathermap.org/img/wn/50d@2x.png"]    
  ])
  
    return (

        <div className='col-md-12 text-center mt-5'>
        <div className='shadow rounded weatherResultBox  '>
          {data?.name  && <img className='weatherIcon' src={ weather.has(data.weather[0].main) ? weather.get(data.weather[0].main) :"" } alt = "Icon not found"  ></img> }
          <h5 className='weatherCity'>{data?.name}</h5>
           <h6 className='weatherTemp'> {Object.keys(data).length >0? ((data?.main?.temp) - 273.15).toFixed(2):"Temp"}°C</h6>
           {data?.name  && <h6>Min temp : {data.main.temp_min}</h6>}
           {data?.name  && <h6>Max temp : {data.main.temp_max}</h6>}
           {data?.name  && <h6>Weather : {data.weather[0].main}</h6>}
        </div>
      </div>
      
    )
}

export default WeatherInfo;

