(function (){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#button').click(addImage);
  }

  function addImage(){
    var url = $('#urlBox').val();
    var $div = $('<div>');
    $div.css('background', 'url(' + url + ')');
    $('#container').prepend($div);
  }

})();
