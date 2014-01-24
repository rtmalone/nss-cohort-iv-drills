/* jshint camelcase:false */

(function (){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#buttonZip').click(addZip);
    $('#buttonFore').click(getForecast);
  }

  function addZip(){
    //debugger;
    var input = $('#textInput').val();
    var $option = $('<option>');
    $option.text(input);
    $option.val(input);
    $('#list').append($option);

    $('#textInput').val('');
    $('#textInput').focus();
  }

  function getForecast(){
    var input = $('#list').val();
    var url = 'http://api.wunderground.com/api/9f738019937a3c7e/forecast/q/' + input + '.json?callback=?';
    $.getJSON(url, receive);
  }

  function receive(data){
    console.log(data);
  }


})();

