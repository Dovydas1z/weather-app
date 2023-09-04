import React, { useState } from "react"
import axios from 'axios'
import { useSearchParams } from "react-router-dom";

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const [location1, setLocation1] = useState('')


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=8be97928d389eafcb81905214f6a955b`



  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  

  // function temperatureConvert (Farenheit)



  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder="Enter location"
          type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1> {data.main.temp}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p> {data.weather[0].main} </p> : null}
          </div>
        </div>


        {data.name != undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className="bold"> {data.main.feels_like}°C</p> : null}
              <p>Feels like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold"> {data.main.humidity} %</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className="bold"> {data.wind.speed} m/s</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>

        }


      </div>

    </div>
  );
}

export default App;
