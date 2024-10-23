import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {            
    let RAIN_URL = "https://media.istockphoto.com/id/498063665/photo/rainy-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=hOE6L7f7OoSKUW1Q4tR27GoEkOU_ywKJGCvSO77SeZg=";
    let HOT_URL = "https://media.istockphoto.com/id/1323823418/photo/low-angle-view-thermometer-on-blue-sky-with-sun-shining.webp?a=1&b=1&s=612x612&w=0&k=20&c=JfCdjP7brx9oUlLT6TIx9OTtEgvEGNpxDcDFqEz0Fo0=";
    let COLD_URL = "https://media.istockphoto.com/id/1070035592/photo/woman-with-warm-clothing-feeling-the-cold-inside-house.webp?a=1&b=1&s=612x612&w=0&k=20&c=40EZoA_SlVhvWVud9AiY2AoUqPfdLzqhsF3d4A0WKZ0=";

    return (
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {info.city} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                                <p>Temperature = {info.temp}&deg;C</p>
                                <p>Humidity = {info.humidity}</p>
                                <p>Min Temp = {info.tempMin}&deg;C</p>
                                <p>Max Temp = {info.tempMax}&deg;C</p>
                                <p>The weather can be described as <i>{info.weather} and feels like {info.feelsLike}&deg;C</i></p>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
            
        </div>
    )
}