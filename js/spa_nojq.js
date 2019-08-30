
document.body.addEventListener("DOMSubtreeModified",function(){
    // Single Page Website----------------------------------------
    console.log("hello Spa_nojq.js");
    var alist = document.querySelectorAll('a');
    for( var i=0;i<alist.length;i++){
        alist[i].addEventListener('click', function (e) {
            e.stopPropagation();
            var pageRef = this.getAttribute('href'); //return string
            console.log(pageRef);
            // var host = document.domain
            // console.log(host)
    
            console.log(pageRef.indexOf("/") + "pageRef.indexOf("/")");
            // e.preventDefault( );
            if (pageRef.indexOf("/") == 0) {
                document.querySelector('.panel-cover').classList.add('panel-cover--collapsed')
                e.preventDefault();
                callPage(pageRef);
                // go to the top of page.
                document.documentElement.scrollTop=0
            }
        });
    }
    
});
// Single Page Website----------------------------------------
  

  
function callPage(url) {
    fetch(url).then(data => data.text()).then(data =>{
    document.querySelector('.content-wrapper').innerHTML = data;
    });


// $.ajax({
//   url: url,
//   type: "GET",
//   dataType: "text",
//   success: function (response) {
//     // console.log('the page was loaded', response);
//     // console.log('the page was loaded');
    
//     $('.content-wrapper').html(response);
//     var state = {
//       title: '',
//       url: window.location.href
//     };
//     // history.pushState(state, '', url);
//   },
//   error: function (error) {
//     console.log('the page was NOT loaded', error);
//   },
//   complete: function (xhr, status) {
//     console.log("the request is complete!");
//   },

// });
}