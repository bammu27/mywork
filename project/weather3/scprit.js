const weatherForm = document.querySelector("#weatherForm");
const cityInput = document.querySelector("#cityInput");
const cityName = document.querySelector("#cityName");
const temperature = document.querySelector("#temperature");
const weatherDescription = document.querySelector("#weatherDescription");
const windSpeed = document.querySelector("#windSpeed");
const humidity = document.querySelector("#humidity");
const pressure = document.querySelector("#pressure");
const result = document.querySelector("#weatherResult");

weatherForm.addEventListener("submit", (event) => {
  event.preventDefault();
 
  result.style.backgroundColor = "orange";

  const city = cityInput.value;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3b3bbf84fd0668bf5bf975e5d35d69f0`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      cityName.innerHTML = `City: ${data.name}`;
      temperature.innerHTML = `Temperature: ${data.main.temp}°k`;
      

      weatherDescription.innerHTML = `Weather: ${data.weather[0].description}`;
      windSpeed.innerHTML = `Wind Speed: ${data.wind.speed} m/s`;
      humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
      pressure.innerHTML = `Pressure: ${data.main.pressure} hPa`;
    })
    .catch((error) => {
      console.error(error);
    });
});
