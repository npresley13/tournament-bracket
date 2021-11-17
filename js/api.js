// api.openweathermap.org/data/2.5/weather?q=Louisville&appid=d84b7e6198ac6de0ecb11c2a2eb3c7d3

fetch("https://api.openweathermap.org/data/2.5/weather?q=Louisville&appid=d84b7e6198ac6de0ecb11c2a2eb3c7d3")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data.main.temp);
        document.getElementById('weather').innerHTML = data.main.temp
    })