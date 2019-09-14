document.addEventListener('DOMContentLoaded',function () {
  console.log('music_nojq.js')
    // Music Control System---------------------------------------
  var aud = document.getElementById("aud");
  var logo = document.querySelector('.panel-cover__logo');
  aud.addEventListener("ended", function (event) {
    logo.setAttribute("class", "panel-cover__logo logo");
  }, false);

  aud.addEventListener("paused", function (event) {
    logo.setAttribute("class", "panel-cover__logo logo");
  }, false);

  logo.addEventListener('click',function (e) {
    e.stopPropagation();
    if (aud.paused) {
      aud.play();
      this.style.animationPlayState = "running";
      // logo.setAttribute("class", "panel-cover__logo logo rotate");
      logo.setAttribute("class", "panel-cover__logo logo rotate");
    } else {
      aud.pause();
      this.style.animationPlayState = "paused";
      // logo.setAttribute("class", "panel-cover__logo logo ");
      // logo.attr("class", "panel-cover__logo logo ");

    }
  });

  // Music Control System---------------------------------------

});