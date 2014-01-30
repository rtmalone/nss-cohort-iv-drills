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
    debugger;
    for(var i=0; i<data.webcams.length; i++){
      var hood = data.webcams[i].neighborhood;
      var image = data.webcams[i].WIDGETCURRENTIMAGEURL;
      var $div = $('<div>');
      $div.css('background', 'url('+image+')');
      $div.addClass('camBox');
      $div.text(hood);

      $('#container').append($div);
    }
  }

})();
