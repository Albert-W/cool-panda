$(document).ready(function () {
  var paner_cover = $('.panel-cover');
  function panelState() {
    if (paner_cover.hasClass('panel-cover--collapsed')) {
      // $('.navigation__item:first').hide();
      $('.panel-cover-welcome').addClass('hidden');
      $('.panel-cover__subtitle').addClass('hidden');
      $('.main-post-list').removeClass('hidden');
      return;
    } else {
      $('.panel-cover-welcome').removeClass('hidden');
      $('.panel-cover__subtitle').removeClass('hidden');
      $('.main-post-list').addClass('hidden');
      return;
    }
  }
  panelState();

  //处于列表页时，隐藏List;
  if (window.location.pathname == '/list') {
    $('.navigation').children('li').eq(1).hide();
    // $('.navigation').children('li').eq(0).show();
  }

  // if (window.location.href == '#blog' ) {
  //   $('.navigation').children('li').eq(0).hide();
  // }


  $('a.blog-button').click(function () {
    if ($('article').length > 0) {
      window.location.href = '/#blog';
    } else if (paner_cover.hasClass('panel-cover--collapsed')) {
      window.location.href = '/';
      $('.panel-cover').removeClass('panel-cover--collapsed');
    } else {
      $('.navigation__item:first').hide();
      $('.panel-cover').addClass('panel-cover--collapsed');
    }
    panelState();



    currentWidth = $('.panel-cover').width();
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed');

    } else {
      $('.panel-cover').css('max-width', currentWidth);
      $('.panel-cover').animate({
        'max-width': '700px',
        'width': '30%'
      }, 400, swing = 'swing', function () {});
    }
  });

  if (window.location.hash && window.location.hash == "#blog") {
    $('.navigation__item:first').hide();
    $('.panel-cover').addClass('panel-cover--collapsed');
    panelState();
  }

  if (window.location.pathname.substring(0, 5) == "/tag/") {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  // $('.btn-mobile-menu__icon').click(function () {
  //   if ($('.navigation-wrapper').css('display') == "block") {
  //     $('.navigation-wrapper').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
  //       $('.navigation-wrapper').toggleClass('visible animated bounceOutUp');
  //       $('.navigation-wrapper').off('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
  //     });
  //     $('.navigation-wrapper').toggleClass('animated bounceInDown animated bounceOutUp');

  //   } else {
  //     $('.navigation-wrapper').toggleClass('visible animated bounceInDown');
  //   }
  //   $('.btn-mobile-menu__icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
  // });

  // $('.navigation-wrapper .blog-button').click(function () {
  //   if ($('.navigation-wrapper').css('display') == "block") {
  //     $('.navigation-wrapper').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
  //       $('.navigation-wrapper').toggleClass('visible animated bounceOutUp');
  //       $('.navigation-wrapper').off('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
  //     });

  //     $('.navigation-wrapper').toggleClass('animated bounceInDown animated bounceOutUp');
  //   }

  //   $('.btn-mobile-menu__icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
  // });

  var backButton = $('.back-to-top');
  backButton.on('click', function () {
    // console.log('back');
    $('html, body').animate({
      scrollTop: 0
    }, 800)
    // backButton.fadeOut();
  })


  $(window).on('scroll', function (){
    if($(window).scrollTop() > $(window).height() )
      backButton.fadeIn();
    else
      backButton.fadeOut();
  })

  $(window).trigger('scroll');
  
});