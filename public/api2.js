// fetch('http://api.airvisual.com/v2/city?city=Los Angeles&state=California&country=USA&key=d2524d46-2c0b-47e7-a068-e79d432f665c')
//     .then(function(response){
//         return response.json();
//     })

//     .then(json => {
//         displayResults(json)
//         console.log(json);
//     })

const baseURL = 'http://api.airvisual.com/v2/';
const key = 'd2524d46-2c0b-47e7-a068-e79d432f665c'; 

const searchForm = document.querySelector('form');
const searchCity = document.querySelector('#city');
const searchState = document.querySelector('#state');
const chart = document.querySelector('.chart')
let url;

chart.style.visibility = "hidden";


searchForm.addEventListener('submit', fetchResults);

function fetchResults(e) {
    e.preventDefault(); 

    url = `${baseURL}city?city=${searchCity.value}&state=${searchState.value}&country=USA&key=${key}`;

    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(json => {
        displayResults(json);
        console.log(json);
    })};

const pollution = document.querySelector('.pollution');
const weatherImg = document.querySelector('.weatherImg');
const weather = document.querySelector('.weather');

function displayResults(json){

    while (pollution.firstChild && weather.firstChild){
        pollution.removeChild(pollution.firstChild)
        weather.removeChild(weather.firstChild)
    }

    let poll1 = json.data.current.pollution.aqius;
    console.log(json);

    var listItem1 = document.createElement('p')

    listItem1.innerText = `Air Quality Index (US): ${poll1}`
    pollution.appendChild(listItem1);

 // 

const celsius = json.data.current.weather.tp;


    let fahrenheit = celsius * 9/5 + 32
    let rounded = Math.floor(fahrenheit)
    var listItem3 = document.createElement('p')

    listItem3.innerText = `Weather (US): ${rounded}\xB0`
    weather.appendChild(listItem3);

//

chart.style.visibility = "visible";


  }
