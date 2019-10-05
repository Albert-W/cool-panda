window.addEventListener('load',function () {
// document.addEventListener('DOMContentLoaded',function () {
    console.log("hello Spa_nojq.js");
    addevent()    
});
// Single Page Website----------------------------------------
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

function decorate(){
    // 异步加载时，以innerHTML 载入，不执行
    let trs = document.querySelectorAll('tr');
    for (let tr of trs){
        let tds = tr.querySelectorAll('td');
        // 首行为th, tds为[], 需要判断是否为空数组
        if(tds.length != 0 && tds[0].innerHTML == "&nbsp;"){
            continue;
        }
        let i = 1;
        // 如果除第一列以外，其他列为空，则标记。
        for(; i<tds.length;i++){
            if(tds[i].innerHTML != "&nbsp;"){
                break;
            }
        }
        if(i == tds.length){
            tr.classList.add('section');
        }
    }    
}

  
function callPage(url) {
    fetch(url).then(data => data.text()).then(data =>{
    document.querySelector('.content-wrapper').innerHTML = data;
    })
    .then(addevent)
    .then(decorate);
}