import Searchbox from "./Searchbox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function
WeatherApp() {
    const [weatherinfo, setWeatherInfo] = useState({
    city: "Delhi",
    temp: 30.5,
    tempMin: 30.5,
    tempMax: 30.5,
    humidity: 89,
    pressure: 889,
    feelsLike: 37.05,
    weather: "sunny",
    });
    let updateinfo=(newinfo)=>{
        setWeatherInfo(newinfo)

    }
    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather App by Arjun</h1>
            <Searchbox updateinfo={updateinfo} />
            <InfoBox info={weatherinfo}/>
          
        </div>
    );
}
