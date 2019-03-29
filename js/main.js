$(document).ready(function () {

  var paner_cover = $('.panel-cover');
  var logo = $('.panel-cover__logo');

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


  $(window).on('scroll', function () {
    if ($(window).scrollTop() > $(window).height())
      backButton.fadeIn();
    else
      backButton.fadeOut();
  })

  $(window).trigger('scroll');

  // Music Control System---------------------------------------
  var aud = document.getElementById("aud");
  aud.addEventListener("ended", function (event) {
    logo.setAttribute("class", "panel-cover__logo logo");
  }, false);

  aud.addEventListener("paused", function (event) {
    logo.setAttribute("class", "panel-cover__logo logo");
  }, false);

  logo.click(function () {
    if (aud.paused) {
      aud.play();
      this.style.animationPlayState = "running";
      // logo.setAttribute("class", "panel-cover__logo logo rotate");
      logo.attr("class", "panel-cover__logo logo rotate");
    } else {
      aud.pause();
      this.style.animationPlayState = "paused";
      // logo.setAttribute("class", "panel-cover__logo logo ");
      // logo.attr("class", "panel-cover__logo logo ");

    }
  })

  // Music Control System---------------------------------------

  // Single Page Website----------------------------------------
  




  // Single Page Website----------------------------------------


});

// Single Page Route------------------------
(function () {
  var Router = function () {
    this.routes = {}; //保存路由
    this.curUrl = ''; //获取当前的hash值
  }
  Router.prototype.init = function () {
    //hashchange事件，当hash变化时，调用reloadPage方法
    //第一个this指向window，bind里面的this指向调用这个函数的对象，具体使用方法可以百度
    window.addEventListener('hashchange', this.reloadPage.bind(this));
  }

  Router.prototype.reloadPage = function () {
    this.curUrl = location.hash.substring(1) || '/'; //获取当前hash的值（去掉#）
    this.routes[this.curUrl](); //运行当前hsah值对应的函数
  }

  Router.prototype.map = function (key, callback) { //保存路由对应的函数：
    this.routes[key] = callback; //key表示hash的值（去掉#），callback表示当前hash对应的函数
  }
  window.oRou = Router;
})()
var oRouter2 = new oRou();
oRouter2.init();
oRouter2.map('/about', function () {
  var oSidebar = document.getElementsByClassName("content-wrapper__inner")[0];
  // oSidebar.innerHTML = '我是about页面';
  oSidebar.innerHTML = "http://127.0.0.1:4000/about"; //list is not defined; 
})
// Single Page Route------------------------
