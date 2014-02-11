(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#quoteBtn').click(getQuote);
  }

  function getQuote(){
    var symbol = $('#input').val();
    var url = window.location.origin.replace(/[0-9]{4}/g, '4000');
    url += '/quotes/'+symbol+'?callback=?';
    console.log(url);
    $.getJSON(url, function(data){
      console.log(data);
      $('#quote-container').text('The price of '+data.quotes.symbol+' is $'+data.quotes.quote+'.')
    });
  }

})();

