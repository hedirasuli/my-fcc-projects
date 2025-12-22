/**
 * DOM Element Selectors
 */
const citySelect = document.getElementById("city-select");
const getWeatherBtn = document.getElementById("get-weather-btn");
const weatherDisplay = document.getElementById("weather-display");

const locationDisplay = document.getElementById("location");
const weatherIcon = document.getElementById("weather-icon");
const weatherMain = document.getElementById("weather-main");
const mainTemperature = document.getElementById("main-temperature");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const windGust = document.getElementById("wind-gust");

/**
 * Fetches weather data for a specific city.
 * @param {string} city - The name of the city to fetch data for.
 * @returns {Promise<Object>} - The JSON response from the weather API.
 */
const getWeather = async (city) => {
  try {
    const response = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Updates the UI with weather information or handles errors.
 * @param {string} city - The selected city from the dropdown.
 */
const showWeather = async (city) => {
  const data = await getWeather(city);

  // Error Handling (Required for Paris test case)
  if (!data || data.message === "city not found") {
    alert("Something went wrong, please try again later.");
    return;
  }

  // Display the container and map the data
  weatherDisplay.classList.remove("hidden");

  const { name, weather, main, wind: windData } = data;

  // UI Injection with N/A fallbacks
  locationDisplay.textContent = name || "N/A";
  weatherIcon.src = weather?.[0]?.icon || "";
  weatherIcon.alt = weather?.[0]?.description || "N/A";
  weatherMain.textContent = weather?.[0]?.main || "N/A";
  
  mainTemperature.textContent = main?.temp !== undefined ? main.temp : "N/A";
  feelsLike.textContent = main?.feels_like !== undefined ? main.feels_like : "N/A";
  humidity.textContent = main?.humidity !== undefined ? main.humidity : "N/A";
  
  wind.textContent = windData?.speed !== undefined ? windData.speed : "N/A";
  windGust.textContent = windData?.gust !== undefined ? windData.gust : "N/A";
};

/**
 * Event Listener for User Interaction
 */
getWeatherBtn.addEventListener("click", () => {
  const selectedCity = citySelect.value;
  if (selectedCity) {
    showWeather(selectedCity);
  }
});