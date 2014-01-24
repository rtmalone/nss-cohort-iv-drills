/* jshint camelcase:false */

(function (){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#button').click(addOption);
  }

  function addOption(){
    var input = $('#textInput').val();
    var count = $('#list option').length;
    var $option = $('<option>');
    $option.text(input);
    $option.val(count);
    $('#list').append($option);

    $('#textInput').val('');
    $('#textInput').focus();
  }

})();

