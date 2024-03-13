let weather = {
  apiKey: "eae05dea9533cd705c7e47a84dde459f",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    // Set the city name
    document.querySelector(".city").innerText = "Weather in " + name;
    // Set the weather icon
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    // Set the weather description
    document.querySelector(".description").innerText = description;
    // Set the temperature
    document.querySelector(".temp").innerText = temp + " ° C";
    // Set the humidity
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    // Set the wind speed
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";
    // Remove the loading class from the weather element
    document.querySelector(".weather").classList.remove("loading");
    // Set the background image of the body
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Pune");
