(function (){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#button').click(addColors);
  }

  function addColors(){
    var colorInput = $('#colorInput').val();
    var colorArray = colorInput.split(',');
    var sum = 0;

    for(var i = 1; i <= colorArray.length; i++){
      var $div = $('<div>');
      var color = colorArray[i-1];
      $div.css('background', color);
      $div.text(i);
      $('#container').prepend($div);
      sum += i;
    }
    var $sum = $('<div>');
    $sum.text(sum);
    var r = Math.floor((Math.random()*256));
    var g = Math.floor((Math.random()*256));
    var b = Math.floor((Math.random()*256));
    //var a = Math.round((Math.random()*10)/10);
    $sum.css('background-color', 'rgb(' + r + ',' + g + ',' + b + ')');
    $('#container').append($sum);
  }
})();
