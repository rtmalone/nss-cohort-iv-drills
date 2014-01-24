/* jshint camelcase:false */

(function (){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#button').click(addOption);
    $('#list').change(changeColor);
  }

  function addOption(){
    //debugger;
    var input = $('#textInput').val();
    var $option = $('<option>');
    var inputUp = input.toUpperCase();
    var inputLow = input.toLowerCase();
    $option.text(inputUp);
    $option.val(inputLow);
    $('#list').append($option);
    //$('#paint').css('background', $input);
    $('#textInput').val('');
    $('#textInput').focus();
  }

  function changeColor(){
    var $newClr = $('#list').val();
    $('#paint').css('background', $newClr);

  }

})();

