// API used to pull temperature

fetch("https://api.openweathermap.org/data/2.5/weather?q=Louisville&appid=d84b7e6198ac6de0ecb11c2a2eb3c7d3")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let temp = document.createElement('div');
        temp.setAttribute("id", "temperature");
        temp.innerHTML =  `${Math.round(((data.main.temp_max - 273.15) * 1.8) + 32)}&#8457`;
        document.getElementById('weather').appendChild(temp);
    })
    