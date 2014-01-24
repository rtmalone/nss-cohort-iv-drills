/* jshint camelcase:false */

(function () {

  'use strict';

  $(document).ready(init);

  function init(){
    $('#addZip').click(addZip);
    $('#getForecast').click(displayForecast);
  }

  function addZip(){
    var zipInput = $('#inputZip').val();
    var $option = $('<option>');
    $option.text(zipInput);
    $option.val(zipInput);
    $('#zipList').append($option);

    $('inputZip').val('');
    $('inputZip').focus();
  }

  function displayForecast(){
    var zip = $('#zipList').val();
    var url = 'http://api.wunderground.com/api/9f738019937a3c7e/forecast/q/'+zip+'.json?callback=?';
    $.getJSON(url, receive);
  }

  function receive(data){
    var $boxes = $('.weather');
    for(var i=0; i<data.forecast.simpleforecast.forecastday.length; i++){
      var day = data.forecast.simpleforecast.forecastday[i].date.weekday;
      var cond = data.forecast.simpleforecast.forecastday[i].conditions;
      var icon = data.forecast.simpleforecast.forecastday[i].icon_url;

      $($boxes[i]).find('h1').text(day);
      $($boxes[i]).find('h2').text(cond);
      $($boxes[i]).find('img').attr('src', icon);
    }
  }

})();
