(function() {
  'use strict';

  function addColor() {
    var $bin = $('<div></div>').addClass('color');
    $('#colors').append($bin);
  }
  
  function initialize() {
    $('#add-color').click(addColor);
  }

  $(document).ready(initialize);

})();
