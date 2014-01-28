(function (){

  'use strict';

  $(document).ready(init);

  function init(){
    $('#addZip').click(addZip);
    $('#getCams').click(getCams);
    $('#clear').click(clear);
  }

  function clear(){
    $('#container').empty();
  }

  function addZip(){
    var input = $('#inputZip').val();
    var $option = $('<option>');
    $option.text(input);
    $option.val(input);
    $('#zipList').append($option);

    $('#inputZip').val('');
    $('#inputZip').focus();
  }

  function getCams(){
    var zip = $('#zipList').val();
    var url = 'http://api.wunderground.com/api/9f738019937a3c7e/webcams/q/'+zip+'.json?callback=?';
    $.getJSON(url, receive);
  }

  function receive(data){
    for(var i=0; i<data.webcams.length; i++){
      var $div = $('<div>');
      $div.addClass('camBox');
      var hood = data.webcams[i].neighborhood;
      var image = data.webcams[i].WIDGETCURRENTIMAGEURL;
      $div.css('background', 'url('+image+')');
      console.log(hood);
      $('#container').append($div);
    }
  }

})();
