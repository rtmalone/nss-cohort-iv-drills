/* jshint camelcase:false */

(function () {

  'use strict';

  $(document).ready(init);

  function init(){
    $('#button').click(runZip);
  }

  function runZip(){
    var zip = $('#zip').val();
    var url = 'http://api.wunderground.com/api/9f738019937a3c7e/satellite/q/'+zip+'.json?callback=?';
    $.getJSON(url, receive);
  }

  function receive(data){
    var img1 = data.satellite.image_url;
    var div1 = $('#one');
    div1.css('background-image', 'url('+img1+')');
    var img2 = data.satellite.image_url_ir4;
    var div2 = $('#two');
    div2.css('background-image', 'url('+img2+')');
    var img3 = data.satellite.image_url_vis;
    var div3 = $('#three');
    div3.css('background-image', 'url('+img3+')');
  }
})();
