const api = 'a0438a4dd83c3d0e95edb6623bc8568a'
const input = document.getElementById('input')
const showData = document.getElementById('showData')
const searchWeather = async ()=>{
    const showData = document.getElementById('showData')
    showData.innerHTML = `<div class="spinner-border text-danger" id="spinner" role="status">
                             <span class="visually-hidden">Loading...</span>
                          </div>`
    const response =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${api}&units=metric`) ;
    const data = await response.json();
    console.log(data)  
    showWeather(data)            
}
const showWeather = (data)=>{
showData.innerHTML = ` <img src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png" class="weather-icon" id="weatherIcon">
            <h1 class="temp" id="temperature">${data.main.temp}°C</h1>
            <h2 class="city" id="cityName">${data.name}</h2>
            <div class="details">
                <div class="col">
                    <i class="fa-solid fa-water"></i>
                    <div>
                        <p class="humidity" id="humidity">${data.main.humidity}%</p>
                        <p>Humidity</p>
                    </div>
                </div>
                <div class="col">
                    <i class="fa-solid fa-wind"></i>
                    <div>
                        <p class="wind" id="windSpeed">${data.weather[0].main}</p>
                        <p>Wind Speed</p>
                    </div>
                </div>
            </div>`
            switch (data.weather[0].main) {
                case 'Clouds':
                    document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1499346030926-9a72daac6c63?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)";
                    break;
                case 'Clear':
                    document.body.style.backgroundImage = "url(https://clarksvillenow.sagacom.com/files/2020/11/shutterstock_286242953.jpg)";
                    break;
                case 'Rain':
                    document.body.style.backgroundImage = "url(https://img.freepik.com/free-photo/weather-effects-composition_23-2149853295.jpg?size=626&ext=jpg)";
                    break;
                case 'Snow':
                    document.body.style.backgroundImage = "url(https://wjla.com/resources/media/be94f27f-c70a-4e6c-b3cc-9a448da929b8-large16x9_SnowfallsinEllicottCityVeronicaJohnson.JPG?1637506983305)";
                    break;
                case 'Mist':
                case 'Haze':
                case 'Fog':
                    document.body.style.backgroundImage = "url(https://ichef.bbci.co.uk/news/976/cpsprodpb/FD4A/production/_87524846_87524845.jpg)";
                    break;
                case 'Sunny':
                    document.body.style.backgroundImage = "url(https://ichef.bbci.co.uk/news/976/cpsprodpb/FD4A/production/_87524846_87524845.jpg)";
                    break;
                case 'Drizzle':
                    document.body.style.backgroundImage = "url(https://architropics.com/wp-content/uploads/2021/09/hurricane-wind-forces.jpg)";
                    break;
                case 'Thunderstorm' :
                    document.body.style.backgroundImage = "url(https://www.livemint.com/lm-img/img/2024/05/07/1600x900/Thunderstorm_1715055102301_1715055102557.JPG)";
                default:
                    document.body.style.backgroundImage = "url(https://www.un.org/sites/un2.un.org/files/styles/large-article-image-style-16-9/public/field/image/2023/03/52196025795_06f077377a_c.jpg)";
                    break;
            }
}



