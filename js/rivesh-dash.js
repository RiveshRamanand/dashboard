console.log('js loaded');



///rivesh chart
// all queryselectors for charts
const riveshChart = document.querySelector('canvas.rivesh-chart');
const riveshChart2 = document.querySelector('canvas.rivesh-chart2');
const riveshChart3 = document.querySelector('canvas.rivesh-chart3');
const riveshChart4 = document.querySelector('canvas.rivesh-chart4');

// all queryselectors for calcutaling highest value
const germanyValue = document.querySelector('span.highest-germany');
const japanValue = document.querySelector('span.highest-japan');
const usaValue = document.querySelector('span.highest-usa');
const frenchValue = document.querySelector('span.highest-french');

// all queryselectors for calcutaling lowest value
const germanylowestValue = document.querySelector('span.lowest-germany');
const japanlowestValue = document.querySelector('span.lowest-japan');
const usalowestValue = document.querySelector('span.lowest-usa');
const frenchlowestValue = document.querySelector('span.lowest-french');

// all queryselectors for calcutaling average value
const germanyaverageValue = document.querySelector('span.average-germany');
const japanaverageValue = document.querySelector('span.average-japan');
const usaaverageValue = document.querySelector('span.average-usa');
const frenchaverageValue = document.querySelector('span.average-french');

// color code to make chart lines red
const red = ['red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red',]


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//germany index

// fetch germany stock exchange 
fetch('https://www.econdb.com/api/series/SEIDE/?API_TOKEN=29aa30b516d8ff2050bb9e7cd0128716cc6e142d&format=json')
    .then(Response => Response.json())
    .then(data => processDataGermany(data));


//function makes all functions show in HTML/chart
function processDataGermany(data) {
    // console.log(data.data.values);

    const highestvalue = getHighestValue(data.data.values)
    const lowestvalue = getLowestValue(data.data.values)
    const averagevalue = averageValue(data.data.values)

    germanyValue.innerHTML += highestvalue
    germanylowestValue.innerHTML += lowestvalue.toFixed(2)
    germanyaverageValue.innerHTML += averagevalue.toFixed(2)


    showLinechart(data)
}

//calculates lowest value using array from fetch and uses a for-loop
function getLowestValue(values) {

    let lowestNumber;

    for (let i = 0; i < values.length; i++) {
        const value = values[i];



        if (lowestNumber == null || value < lowestNumber) {
            lowestNumber = value
        }
    }
  
    return lowestNumber
}


//calculates highest value using array from fetch and uses a for-loop and a if-statement
function getHighestValue(values) {

    let highestNumber = 0;

    for (let i = 0; i < values.length; i++) {
        const value = values[i];



        if (value > highestNumber) {
            highestNumber = value
        }
    }
    // console.log(highestNumber);
    return highestNumber
}

//calculates average value using array from fetch and uses a for-loop 
function averageValue(values) {

    let total = 0;

    for (let index = 0; index < values.length; index++) {
        const value = values[index];

        total = total + value
    }
    const averageNumber = total / values.length
    // console.log(averageNumber);
    // console.log(total);
    return averageNumber
}

//functions makes a line chart for germany
function showLinechart(data) {




    new Chart(riveshChart, {
        type: 'line',
        data: {
            labels: data.data.dates,
            datasets: [{
                backgroundColor: 'red',
                borderColor: 'red',
                pointRadius: 1,
                label: '',
                data: data.data.values,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                x: {
                    grid: {
                        color: ''
                    },
                    ticks: {
                        color: 'white'
                    }
                },
                y: {
                    grid: {
                        color: 'grey'
                    },
                    ticks: {
                        color: 'white'
                    },
                    beginAtZero: true
                }
            }
        }
    });
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//japan index

fetch('https://www.econdb.com/api/series/SEIJP/?API_TOKEN=29aa30b516d8ff2050bb9e7cd0128716cc6e142d&format=json')
    .then(Response => Response.json())
    .then(data => processDataJapan(data));

function processDataJapan(data) {
   

    const highestvalue = getHighestValue(data.data.values)
    const lowestvalue = getLowestValue(data.data.values)
    const averagevalue = averageValue(data.data.values)

    japanValue.innerHTML += highestvalue
    japanlowestValue.innerHTML += lowestvalue.toFixed(2)
    japanaverageValue.innerHTML += averagevalue.toFixed(2)

    showLine2chart(data)
}



//functions makes a line chart for japan
function showLine2chart(data) {

    new Chart(riveshChart2, {
        type: 'line',
        data: {
            labels: data.data.dates,
            datasets: [{
                backgroundColor: 'red',
                borderColor: 'red',
                pointRadius: 1,
                label: '',
                data: data.data.values,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                x: {
                    grid: {
                        color: ''
                    },
                    ticks: {
                        color: 'white'
                    }
                },
                y: {
                    grid: {
                        color: 'grey'
                    },
                    ticks: {
                        color: 'white'
                    },
                    beginAtZero: true
                }
            }
        }
    });
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//USA index
fetch('https://www.econdb.com/api/series/SEIUS/?API_TOKEN=29aa30b516d8ff2050bb9e7cd0128716cc6e142d&format=json')
    .then(Response => Response.json())
    .then(data => processDataUsa(data));

function processDataUsa(data) {
 

    const highestvalue = getHighestValue(data.data.values)
    const lowestvalue = getLowestValue(data.data.values)
    const averagevalue = averageValue(data.data.values)

    usaValue.innerHTML += highestvalue
    usalowestValue.innerHTML += lowestvalue.toFixed(2)
    usaaverageValue.innerHTML += averagevalue.toFixed(2)

    showLine3chart(data)
}


//functions makes a line chart for america
function showLine3chart(data) {

    new Chart(riveshChart3, {
        type: 'line',
        data: {
            labels: data.data.dates,
            datasets: [{
                backgroundColor: 'red',
                borderColor: 'red',
                pointRadius: 1,
                label: '',
                data: data.data.values,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                x: {
                    grid: {
                        color: ''
                    },
                    ticks: {
                        color: 'white'
                    }
                },
                y: {
                    grid: {
                        color: 'grey'
                    },
                    ticks: {
                        color: 'white'
                    },
                    beginAtZero: true
                }
            }
        }
    });
};


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//France index
fetch('https://www.econdb.com/api/series/SEIFR/?API_TOKEN=29aa30b516d8ff2050bb9e7cd0128716cc6e142d&format=json')
    .then(Response => Response.json())
    .then(data => processDataFrench(data));

function processDataFrench(data) {

    const highestvalue = getHighestValue(data.data.values)
    const lowestvalue = getLowestValue(data.data.values)
    const averagevalue = averageValue(data.data.values)

    frenchValue.innerHTML += highestvalue
    frenchlowestValue.innerHTML += lowestvalue.toFixed(2)
    frenchaverageValue.innerHTML += averagevalue.toFixed(2)


    showLine4chart(data)
}

//functions makes a line chart for french
function showLine4chart(data) {

    new Chart(riveshChart4, {
        type: 'line',
        data: {
            labels: data.data.dates,
            datasets: [{
                backgroundColor: 'red',
                borderColor: 'red',
                pointRadius: 1,
                label: '',
                data: data.data.values,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                x: {
                    grid: {
                        color: ''
                    },
                    ticks: {
                        color: 'white'
                    }
                },
                y: {
                    grid: {
                        color: 'grey'
                    },
                    ticks: {
                        color: 'white'
                    },
                    beginAtZero: true
                }
            }
        }
    });
}
