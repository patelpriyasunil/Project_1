$(document).ready(function(){

   function displayWeather(){
        var APIKey = "dd90b036fea16c286d0b1e900c84157c";
        var zip = "19146"
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?zip=" +
        zip + "&units=imperial&appid=" + APIKey

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(queryURL);
            console.log(response);
        })
    }
    displayWeather();

    function getLocation(){
        var APIKey = "7973f370d72acc8a88dbd18f23806729a26e319cb848dac934bb95b0";
        var queryURL = "https://api.ipdata.co?api-key=" + APIKey;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(queryURL);
            console.log(response);
        })
    };
    getLocation();
});