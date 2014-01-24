/* jshint camelcase:false */

(function () {

  'use strict';

  $(document).ready(init);

  function init(){
    $('#button').click(boxception);
  }

  function boxception(){
    var input = $('#textInput').val();
    for(var i = 1; i < input; i++){
      //debugger;
      var $div = $('<div>');
      $('#initial').wrap($div);
    }
  }
/*
  function createDiv(){
    var $div = 
    var border = '1px solid' + random;
    $div.css('border', border);
  }

  function random(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    $('div').css('border-color', 'rgb('+r+','+g+','+b+')');
  }
*/
})();
