function showweatherDetails(event) {
    event.preventDefault();

    //const city = document.getElementById('city').value;
    const lat = document.getElementById('lat').value;
    const lon = document.getElementById('lon').value;
    const apiKey = '0011867d5218710be507da90b46b3901'; // Replace 'YOUR_API_KEY' with your actual API key
    //const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const apiLonLatURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`

    fetch(apiLonLatURL)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                              <p>Temperature: ${data.main.temp} &#8451;</p>
                              <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch(error => {
        console.error('Error fetching weather: ', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failded to fetch weather.  Please try again, Later.</p>`;
    })
}
document.getElementById('weatherForm').addEventListener('submit',showweatherDetails);
