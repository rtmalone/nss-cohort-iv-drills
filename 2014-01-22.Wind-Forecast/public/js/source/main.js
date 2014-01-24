/* jshint camelcase:false */

(function (){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#button').click(getWeather);
  }

  function getWeather(){
    var url = 'http://api.wunderground.com/api/9f738019937a3c7e/conditions/q/NM/Hobbs.json?callback=?';
    $.getJSON(url, recieve);
  }

  function recieve(data){
    var desc = data.current_observation.wind_string;
    //var dir = data.current_observation.wind_dir;
    //var deg = data.current_observation.wind_degrees;
    //var spd = data.current_observation.wind_mph;
    //var gust = data.current_observation.wind_gust_mph;
    $('#desc').text(desc);
  }
})();

/*

var wind = [desc, dir, deg, spd, gust]

for(var i = 0; i < wind.length; i++)
  var $div = $('<div>');
  $div.text(wind[i]);
  $('#container').prepend($div);
*/
