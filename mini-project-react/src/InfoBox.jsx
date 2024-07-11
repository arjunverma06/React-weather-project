import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "./InfoBox.css";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

import Typography from "@mui/material/Typography";
export default function InfoBox({ info }) {
  const initali_img =
    "https://plus.unsplash.com/premium_photo-1714923303591-3b262dd1864f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const hot_url="https://images.unsplash.com/photo-1561473880-3b8b12de0a71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const  cold_url="https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const rain_url="https://cdn.pixabay.com/photo/2024/03/09/12/48/water-8622588_1280.png";
  
  return (
    <div className="infoBox" >
      {/* <h1>Weather information</h1> */}
      <div className="card" >
      <Card sx={{ maxWidth: 345 }}  style={{backgroundColor:"#ddb892"}} >
        <CardMedia
          sx={{ height: 180, width: 300  }}
          image={info.humidity>75?rain_url:(info.temp>15?hot_url:cold_url)}
          title="green iguana"
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div">
            {info.city}{
                info.humidity>75?<ThunderstormIcon/>:(info.temp>25?<WbSunnyIcon/>:<AcUnitIcon/>)
            }
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
           
           <div style={{backgroundColor:"#e4f0d0"}}>
            <p>Temperature: {info.temp}&deg;C</p>
            <p>Min Temperature: {info.tempMin}&deg;C</p>
            <p>Max Temperature: {info.tempMax}&deg;C</p>
            <p>Humidity: {info.humidity}</p>
            {/* <p>Pressure: {info.pressure}</p> */}
            <p>Feels Like: {info.feelsLike}&deg;C</p>
            <p>weather: {info.weather}</p>
           </div>
          </Typography>
        </CardContent>
        
      </Card>
      </div>
    </div>
  );
}
