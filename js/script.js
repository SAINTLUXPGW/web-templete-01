$(document).ready(function() {
  var posY,
      winW = $(window).width(),
      winH = $(window).height();

  $(".l-link a").click(function() {
    $(".l-link a").removeClass("on");
    $(this).addClass("on");
  });

  $(".menu li a").click(function() {
    var scrollPosition = $($(this).attr("href")).offset().top;

    $("html,body").animate({
          scrollTop: scrollPosition
    }, 500);
    if($('.left-warp').hasClass('on')){
        left_menu_onoff();
    }
  });

  var sideWidth = $(".left_warp").width()+12;
  $(".scroll_func").css("width",sideWidth+"px");


  $("#mTopmenu a").addClass("s-right-on");
  $("#top-btn, .main-scroll").addClass("s-top-on");

  $("#mTopmenu a").click(function() {
      left_menu_onoff();
  });

  

  new WOW().init();


  

  $("#main01 .flexslider .slides > li").css("height",winH+"px");
  $('#main01 .flexslider').flexslider({
    animation: "slide",
    slideshow: 5000,
    controlNav: false,
    controlNav: true,
    directionNav: false,
    speed:100
  });

  
  $('#main03 .flexslider').flexslider({
    animation: "fade",
    slideshow: false,
    controlNav: false,
    directionNav: true,
    speed:1000
  });

  
  $('.gallery-slide').flexslider({
      animation: "slide",
      animationLoop: true,
      controlNav: false,
      directionNav: true,
      minItems: 2,
      maxItems: 3,
      onSliderLoad:function(currentIndex){
        $(".flexslider li:not([class='clone'])").eq(1).addClass("flex-active-slide");
      },
    });


  $(".gallery-btn1").click(function() {
    $(".gallery-popup1").css({"opacity":"1","visibility":"visible","z-index":"999"});
    $(".gallery-slide1").css({"visibility":"visible"});
      posY = $(window).scrollTop();
      $("html, body").addClass("not-scroll");
      $(".cont").css("top",-posY);
      $(".gallery-bg").fadeIn();
  });

  $(".gallery-btn2").click(function() {
    $(".gallery-popup2").css({"opacity":"1","visibility":"visible","z-index":"999"});
    $(".gallery-slide2").css({"visibility":"visible"});
      posY = $(window).scrollTop();
      $("html, body").addClass("not-scroll");
      $(".cont").css("top",-posY);
      $(".gallery-bg").fadeIn();
  });

  $(".gallery-btn3").click(function() {
    $(".gallery-popup3").css({"opacity":"1","visibility":"visible","z-index":"999"});
    $(".gallery-slide3").css({"visibility":"visible"});
      posY = $(window).scrollTop();
      $("html, body").addClass("not-scroll");
      $(".cont").css("top",-posY);
      $(".gallery-bg").fadeIn();
  });

  $(".gallery-bg").click(function() {
      $("html, body").removeClass("not-scroll");
      $(this).fadeOut();
      $(".gallery-popup").css({"opacity":"0","visibility":"hidden", "z-index":"-1"});
      $(".gallery-slide").css({"visibility":"hidden"});

      posY = $(window).scrollTop(posY);
  });


  $('#main06 .flexslider').flexslider({
    animation: "fade",
    slideshow: false,
    controlNav: false,
    directionNav: true,
    speed:1000
  });


  $('.main07 .flexslider').flexslider({
    animation: "fade",
    slideshow: false,
    controlNav: false,
    directionNav: true,
    speed:1000
  });


  $('#top-btn a').on('click', function() {
    $('html, body').animate({
        scrollTop : 0
    }, 700);
    return false;
  });


  var $tabButtonItem = $('#tabs li'),
      $tabSelect = $('#tab-select'),
      $tabContents = $('.tab-cont'),
      activeClass = 'current';

  $tabButtonItem.first().addClass(activeClass);
  $tabContents.not(':first').fadeOut();

  // button
  $tabButtonItem.find('a').on('click', function(e) {
    var target = $(this).attr('href');

    $tabButtonItem.removeClass(activeClass);
    $(this).parent().addClass(activeClass);
    $tabSelect.val(target);
    $tabContents.hide();
    $(target).fadeIn();
    e.preventDefault();
  });

});


$(window).resize(function() {
  var sideWidth = $(".left-warp").width();
  $(".scroll-func").css("width",sideWidth+"px");

  var winW = $(window).width();
  var winH = $(window).height();

  $("#main01 .flexslider .slides > li").css("height",winH+"px");

  if(winW > 1024) {
  } else if(winW > 768) {
  } else if(winW < 768) {
  }
});



$(window).scroll(function() {
  if($(this).scrollTop() > 0) {
    $("#topmenu, .m-topmenu").addClass("fixmenu");
  } else {
    $("#topmenu, .m-topmenu").removeClass("fixmenu");
  }

  $(".animated").each(function() {
    var $t = $(this);
    if (!$t.data('count') && $(window).scrollTop() + $(window).height() >= $t.offset().top) {
      $t.data('count', true);
      setTimeout(function(){
        $t.addClass("fadeInUp");
      },300);
    }
  });

  $(".main-scroll").each(function(){
    var pos = $(this).offset().top;
    var winTop = $(window).scrollTop();
    if (pos < winTop) {
      $(this).removeClass("s-top-on");
    } else {
      $(this).addClass("s-top-on");
    }
  });

});


function left_menu_onoff(){
  if($('.left-warp').hasClass('on')){
    $("#wrap").stop().animate({left:'0'},350,function(){
    });
    $(".left-warp").stop().animate({opacity:'1'},350);
    $(".side-close").stop().fadeOut(350);
    $(".black-bg").stop().fadeOut(350);
    $('.left-warp').removeClass('on');
    $("#mTopmenu a").removeClass('on');
  }else{
    $("#wrap").stop().animate({left:'0'},350);
    $(".left-warp").stop().animate({opacity:'1'},350);
    $(".side-close").stop().fadeIn(350);
    $(".black-bg").stop().fadeIn(350);
    $('.left-warp').addClass('on');
    $("#mTopmenu a").addClass('on');
  }
}