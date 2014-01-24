(function(){

  'use strict';

  $(document).ready(init);

  function init(){
    $('#original').click(addButtons);
  }

  function addButtons(){
    $(this).show('.phantom');
  }

})();
