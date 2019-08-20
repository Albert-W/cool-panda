$(document).ready(function () {
      // Single Page Website----------------------------------------
  console.log("hello Spa.js");
  $('a').on('click', function (e) {
    e.stopPropagation();
    var pageRef = $(this).attr('href'); //return string
    console.log(pageRef);
    // var host = document.domain
    // console.log(host)

    console.log(pageRef.indexOf("/") + "pageRef.indexOf("/")");
    // e.preventDefault( );
    if (pageRef.indexOf("/") == 0) {
      $('.panel-cover').addClass('panel-cover--collapsed')
      e.preventDefault();
      callPage(pageRef);
    }
  });
  // Single Page Website----------------------------------------

});

function callPage(url) {
  $.ajax({
    url: url,
    type: "GET",
    dataType: "text",
    success: function (response) {
      // console.log('the page was loaded', response);
      // console.log('the page was loaded');
      $('.content-wrapper__inner').html(response);
      var state = {
        title: '',
        url: window.location.href
      };
      // history.pushState(state, '', url);
    },
    error: function (error) {
      console.log('the page was NOT loaded', error);
    },
    complete: function (xhr, status) {
      console.log("the request is complete!");
    },

  });
}