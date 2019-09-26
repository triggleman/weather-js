$(document).ready(function() {
    console.log('this is running');


    $('#search').on('click', (e) => {
        e.preventDefault();
        const loc = $('#location').val();
        console.log(loc);
        apiCall(loc);
        console.log('api call');
        
    });
    
    function apiCall (location){
        //const URL = 'api.openweathermap.org/data/2.5/weather?zip=' + location + ',us&appid=bc2980500f68c229827d6af054131740';
        $.ajax({
            url: 'api.openweathermap.org/data/2.5/weather?zip=' + location + ',us&appid=bc2980500f68c229827d6af054131740',
            type: 'GET'
            }.done(data => {
                console.log(data);
                
            })
        })
    };




});