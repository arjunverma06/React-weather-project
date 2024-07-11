import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Searchbox.css';
import { useState } from 'react';

export default function Searchbox({updateinfo}) {
  let [city, setCity] = useState('')
  let [error,seterror]=useState(false)
  const Api_url="https://api.openweathermap.org/data/2.5/weather";
  const Api_key="be97cd0be470ae9e7f9d176e3fdd9af6";
  let weatherinfo=async()=>{
    try{
      let response= await fetch(`${Api_url}?q=${city}&appid=${Api_key}&units=metric`);
   let jsonrespons=await response.json();
   console.log(jsonrespons);
   let result={
    city:city,
    temp:jsonrespons.main.temp,
    tempMin:jsonrespons.main.temp_min,
    tempMax:jsonrespons.main.temp_max,
    humidity:jsonrespons.main.humidity,
    pressure:jsonrespons.main.pressure,
    feelsLike:jsonrespons.main.feels_like,
    weather:jsonrespons.weather[0].description,

  };
  console.log(result);
  return result;

    }
    catch(error){
      // seterror("No such a place in Api");
      throw error;
    }
   

  };
 

   
    let handlechnge = (event) => {
        setCity(event.target.value)
    }
    let handlesubmit = async(event) => {
        event.preventDefault();
        try{
          console.log(city)
        setCity('')
      let newinfo= await weatherinfo();
      updateinfo(newinfo);
        }
        catch(error){
          seterror(true);
        }
        
    }
  return (
    <div className='searchbox'>
      {/* <h3>Search for weather</h3> */}
      <form onSubmit={handlesubmit}>
        <TextField id="city" label="City Name"  required  value={city} onChange={handlechnge}  style={{borderRadius:"5px"}}/>
        <br/><br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {
          error && <p style={{color:"red"}}>No such a place exits!</p>
        }
      </form>
    </div>
  );
}
