/* jshint camelcase:false */

(function () {

  'use strict';

  $(document).ready(init);

  function init(){
    $('#button').click(makeWords);
    $('#clear').click(clear);
    $('#container').on('click', '.word', makeSentence);
  }

  function makeWords(){
    var input = $('#textInput').val();
    var inputAr = input.split(' ');
    for(var i=0; i<inputAr.length; i++){
      var $div = $('<div>');
      $div.addClass('word');
      $div.text(inputAr[i]);
      $('#container').append($div);
    }
  }

  function makeSentence(){
    var $word = $(this).text();
    $('#sentence').append($word + ' ');
  }

  function clear(){
    $('#container').clear();
    $('#sentence').clear();
    $('#textInput').clear('');

  }
})();
