$(document).ready(function(){

  var url = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/';
  var key = '0925b48a163d3c572b1616a6159b637a';
  var coords = {
    valpo: '37.8267,-122.4233',
    conce: '37.8267,-122.4233'
  }

$('#select').on('change', function(){
  var ciudad = $(this).val()
  console.log(ciudad);
  var urlApi = url + key + "/" + coords[ciudad];
  console.log(urlApi);

  $.ajax(urlApi)
  .then(function (data) {
    console.log(data);
  })
});
})
