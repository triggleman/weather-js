$(document).ready(function() {
    console.log('this is running');

    $('#search').on('click', (e) => {
        e.preventDefault();
        const location = $('#location').value();
        console.log(location);
        
    });
    





});