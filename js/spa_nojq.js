window.addEventListener('load',function () {
// document.addEventListener('DOMContentLoaded',function () {
    console.log("hello Spa_nojq.js");
    addevent()    
});
// Single Page Website----------------------------------------
// 异步网页加载完成之后，添加点击事件
function addevent(){
    document.querySelector('.content-wrapper').scrollTop = 0;
        var alist = document.querySelectorAll('a');
        for( var i=0;i<alist.length;i++){
            alist[i].addEventListener('click', function (e) {
                e.stopPropagation();
                // 得到地址
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
                    // document.documentElement.scrollTop=0
                }
            });
    }

    // console.log("add spa event completely.")
}

// innterHTML 中的 <script> 无法执行，需要重新加载
function runjs(){
    
    // script = document.querySelector('.content-wrapper').getElementsByTagName('script')[0];
    content_wrapper = document.querySelector('.content-wrapper')
    scripts = content_wrapper.querySelectorAll('script');
    // console.log(scripts);
    // 这种方式绑定事件，无法成功。
    // if(script){
    //     document.body.appendChild(script)
    // }

    for (var script of scripts){
        console.log(script);
        var sobj = document.createElement('script');
        sobj.type = 'text/javascript';
        
        if (script.src){
            sobj.src = script.src
        } else {
            sobj.innerHTML = script.innerHTML;
        }

        // eval(sobj)
        // 在头部可以完成绑定事件。 
        document.head.appendChild(sobj);
        // 在尾部也可以完成绑定事件, 同时可以载入js带来的html文档内容
        // document.body.appendChild(sobj);
        
        // document.querySelector('.post').appendChild(sobj);
        // var s = document.getElementsByTagName("script")[0];
        // s.parentNode.insertBefore(sobj, s);
        
    }
    
}

// 获取ajax数据  
function callPage(url) {
    fetch(url)
    .then(data => data.text())
    .then(data =>{
    document.querySelector('.content-wrapper').innerHTML = data;
    })
    .then(runjs)
    .then(addevent)
    ;
}