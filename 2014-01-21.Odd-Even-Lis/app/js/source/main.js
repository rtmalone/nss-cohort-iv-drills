(function (){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#button').click(createLis);
  }

  function createLis(){
    var input = $('#text-input').val();

    for(var i = 1; i <= input; i++){
      var $li = $('<li>');
      $li.text(i);
      if(i%2 === 0){
        $li.addClass('even');
      } else {
        $li.addClass('odd');
      }
      $('#lis').append($li);
    }
  }

})();
