
    console.log('this is running');

    $('#search').on('click', (e) => {
        e.preventDefault();
        const loc = $('#location').val();
        console.log(loc);

        getZipCode(loc);
    });

    function getZipCode(zipcode){

        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${zipcode}&appid=bc2980500f68c229827d6af054131740`;

        fetch(api)
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                
            })
    }


    window.addEventListener('load', () => {
        let lat;
        let long;

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
                        
                        const temp = data.main.temp;
                        console.log(temp);
                        
                        const discription = data.weather["0"].description;
                        console.log(discription);  
                    })
            });
        }
    })

    






    