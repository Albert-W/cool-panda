document.addEventListener('DOMContentLoaded',function () {
    console.log("hello Spa_nojq.js");
    addevent()    
});
// Single Page Website----------------------------------------
function addevent(){
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

    // console.log("add spa event completely.")
}


  
function callPage(url) {
    fetch(url).then(data => data.text()).then(data =>{
    document.querySelector('.content-wrapper').innerHTML = data;
    })
    .then(addevent);
}