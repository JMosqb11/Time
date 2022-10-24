const apikey = "APY KEY > Search codewithrandom Weather App In Google";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const url = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

async function getWeatherByLocation(city) {
  const resp = await fetch(url(city), {
    origin: "cros",
  });

  const respData = await resp.json();

  addWatherToPage(respData);
}

function addWatherToPage(data) {
  const temp = Ktoc(data.main.temp);

  const weather = document.createElement("div");
  weather.classList.add("weather");

  weather.ineerHTML = `
    <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/> ${temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/></h2>
    <small>${Data.weather[0].main}</small>`;

    main.innerHTML="";
    main.appendChild(weather);

}

function Ketoc(K){
    return Math.floor(K - 273.15);
}

form.addEventListener('submit',(e) => {
    e.preventDefault();

    const city = search.value;

    if(city){
        getWeatherByLocation(city)
    }
});




