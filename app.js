


const apiKey = '28565016045b4358e22459005c988de9';  

document.getElementById('get-weather-btn').addEventListener('click', async () => {
    const city = document.getElementById('city-input').value;
    if (city) {
        try {
            const weatherData = await getWeather(city);
            displayWeather(weatherData);
        } catch (error) {
            console.error('Error fetching the weather data:', error);
            document.getElementById('weather-result').innerText = ' The city does not exist ';
        }
    } else {
        alert();
    }
});


async function getWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ar`);
    if (!response.ok) {
        throw new Error('The city does not exist');
    }
    const data = await response.json();
    return data;
}


function displayWeather(data) {
    const weatherDiv = document.getElementById('weather-result');
    const temp = data.main.temp;
    const description = data.weather[0].description;
    const city = data.name;

    weatherDiv.innerHTML = `
        <h2>  wether : ${city}</h2>
        <p> Temperature in  : ${temp}°C</p>
        <p> description : ${description}</p>
    ` ;
}
