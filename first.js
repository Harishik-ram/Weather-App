const locationInput = document.getElementById('location');
const button = document.getElementById('button');

button.addEventListener('click',() => {

    const cityname = locationInput.value;

    function updateTemp(data) {
        const weatherInfo = document.getElementById('weatherInfo');
         weatherInfo.innerHTML = `
            <h2>Weather in ${data.location.name}, ${data.location.country}</h2>
            <p>Temperature: ${data.current.temp_c}°C (${data.current.temp_f}°F)</p>
            <p>Condition: ${data.current.condition.text}</p>
            <img src="${data.current.condition.icon}" alt="${data.current.condition.text}">
        `;
    }

    fetch(`https://api.weatherapi.com/v1/current.json?key=8e69b85a81b2423882055353251009&q=${cityname}&aqi=no`)
    .then(response => response.json())
    .then(data => updateTemp(data))
   
})









