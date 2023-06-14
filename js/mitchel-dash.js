//Mitchel

const weatherChart = document.querySelector('.weatherChart');
const dailyWeatherChart = document.querySelector(".dailyWeatherChart")
const averagerain = document.querySelector(".averagerain");
const url = 'https://api.open-meteo.com/v1/forecast?latitude=60.11&longitude=-113.64&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m,rain'

fetch(url)
    .then(data => data.json())
    .then(jsonData => showAllWeather(jsonData))
function showAllWeather(jsonData) {
    showRain(jsonData)
    showDailyWeather(jsonData)
    showAverageRain(jsonData)
}

function showAverageRain(jsonData) {
    let totalRain = 0;

    for (let r = 0; r < jsonData.hourly.rain.length; r++) {
        const valueRain = jsonData.hourly.rain[r];
        totalRain = totalRain + valueRain;
    }
    const averageRain = totalRain / 7
    averagerain.innerHTML += averageRain.toFixed(2)
}

function showRain(jsonData) {
    new Chart(weatherChart, {
        type: 'line',
        data: {
            labels: jsonData.hourly.time,
            datasets: [{
                label: 'the amount mm of rain each day',
                data: jsonData.hourly.rain,
                borderWidth: 1,
                Color: "black",
            }]
        },
        options: {
            scales: {
                x: {
                    ticks: {
                        color: 'white'
                    }
                },
                y: {
                    ticks: {
                        color: 'white'
                    },
                    beginAtZero: true
                }
            }
        }
    });
    console.log(jsonData)
}

function showDailyWeather(jsonData) {
    new Chart(dailyWeatherChart, {
        type: 'line',
        data: {
            labels: jsonData.current_weather.time,
            datasets: [{
                label: 'the amount of rain each day',
                data:  jsonData.current_weather.temperature,
                borderWidth: 1,
                Color: "black",
            }]
        },
        options: {
            scales: {
                x: {
                    ticks: {
                        color: 'white'
                    }
                },
                y: {
                    ticks: {
                        color: 'white'
                    },
                    beginAtZero: true
                }
            }
        }
    })
};  
