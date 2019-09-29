console.log('this is running');
window.addEventListener('load', () => {
    let lat;
    let long;
    let temperatureDiscription = document.getElementById("temperature-discription");
    console.log(temperatureDiscription);
    
    let temperatureDegree = document.getElementById("temperature-degree");
    console.log(temperatureDegree);
    
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=bc2980500f68c229827d6af054131740`;

            fetch(api)
                .then((resp) => resp.json())
                .then(data => {
                    console.log(data);
                    const temperature = Math.floor((data.main.temp-273.15)*1.8)+32;
                    const tempDescript = data.weather["0"].description;

                    temperatureDegree.textContent =  temperature;
                    temperatureDiscription.textContent = tempDescript;
                });
        });
    }
});