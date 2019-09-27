
    console.log('this is running');


    // document.getElementById("button").onclick = function() {click()};
    // function click(){
    //     let location = document.getElementById("location").value;
    //     console.log(location);
    //     getZipCode(location);
        
    // }

    // function getZipCode(zipcode){

    //     const proxy = 'https://cors-anywhere.herokuapp.com/';
    //     const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${zipcode}&appid=bc2980500f68c229827d6af054131740`;



    //     fetch(api)
    //         .then(res => {
    //             return res.json();
    //         })
    //         .then(data => {
    //             console.log(data);
                
    //         })
    // }


    window.addEventListener('load', () => {
        let lat;
        let long;
        let temperatureDescripton = document.querySelector('.temperature-description');
        let temperatureDegree = document.querySelector('.temperature-degree');


        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position => {
                console.log(position);
                long = position.coords.longitude;
                lat = position.coords.latitude;

                const proxy = 'https://cors-anywhere.herokuapp.com/';
                const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=bc2980500f68c229827d6af054131740`;

                fetch(api)
                    .then(res => {
                        return res.json();                        
                    })
                    .then(data => {
                        console.log(data);                        
                        const temp = Math.floor((data.main.temp-273.15)*1.8)+32;
                        console.log(temp);                   
                        const discription = data.weather["0"].description; 
                        console.log(discription); 

                        temperatureDegree.textContent = temp;
                        temperatureDescripton.innerHTML = discription;
                    });
            });
        }
    });


    






    