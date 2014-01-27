(function (){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#grow').click(start);
  }

  var exp = 0;

  function start(){
    var $grow = $('#delay').val() * 1000;
    setInterval(exponentiate, $grow);
  }

  function exponentiate(){
    var base = $('#base').val() * 1;
    var result = Math.pow(base, exp);
    appendNum(base, exp, result);

    exp++;
  }

  function appendNum(b, e, r){
    var $bse = $('<span>');
    var $exp = $('<span>');
    var $eql = $('<span>');
    var $res = $('<span>');

    $bse.text(b);
    $exp.text(e);
    $res.text(r);
    $eql.text('=');
      
    var $li = $('<li>');
    $li.append($bse, $exp, $eql, $res);
    $('#container').prepend($li);
  }


})();
