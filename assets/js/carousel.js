$(document).ready(function() {

  var timed_slide = 5000;

  $('#carousel_ul li:first').before($('#carousel_ul li:last'));

    var timer = setInterval('slide("right")', timed_slide);
    $('#hidden_auto_slide_seconds').val(timed_slide);

    $('#carousel_ul').hover(function(){
      clearInterval(timer)
    },function(){
      timer = setInterval('slide("right")', timed_slide);
    });
  });

  function slide(where){

    var item_width = $('#carousel_ul li').outerWidth() + 10;

    if(where == 'left'){
      var left_margin = parseInt($('#carousel_ul').css('left')) + item_width;
    }
    else{
      var left_margin = parseInt($('#carousel_ul').css('left')) - item_width;
    }

    $('#carousel_ul:not(:animated)').animate({'left' : left_margin},500,function(){

    if(where == 'left'){
    $('#carousel_ul li:first').before($('#carousel_ul li:last'));
    }
    else{
    $('#carousel_ul li:last').after($('#carousel_ul li:first'));
    }

    $('#carousel_ul').css({'left' : '-145px'});
  });
}