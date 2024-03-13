let weather = {
    apiKey: eae05dea9533cd705c7e47a84dde459f,
    fetchWeather: function () {
        fetch(
            https://api.openweathermap.org/data/2.5/weather?q=Pune&units=metric&appid=eae05dea9533cd705c7e47a84dde459f)
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
}