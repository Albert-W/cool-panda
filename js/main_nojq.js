var readyHandler = function () {
    var paner_cover = document.querySelector('.panel-cover');
    function panelState() {
        if (paner_cover.classList.contains('panel-cover--collapsed')) {
            // $('.navigation__item:first').hide();
            // document.querySelector('.panel-cover-welcome').classList.add('hidden');
            document.querySelector('.panel-cover__subtitle').classList.add('hidden');
            // document.querySelector('.main-post-list').classList.remove('hidden');
            return;
        } else {
            // document.querySelector('.panel-cover-welcome').classList.remove('hidden');
            document.querySelector('.panel-cover__subtitle').classList.remove('hidden');
            // document.querySelector('.main-post-list').classList.add('hidden');
            return;
        }
    }
    panelState();

    //处于列表页时，隐藏List; spa模式下失效
    if (window.location.pathname == '/list') {
        document.querySelector('.navigation>li:nth-child(2)').style.display = "none";
        // $('.navigation').children('li').eq(0).show();
    }

    // Main page trigger------------------------------------------
    document.querySelector('.panel-main__inner').addEventListener('click', function () {
        document.querySelector('.panel-cover').classList.toggle('panel-cover--collapsed')
    });

    // Main page trigger------------------------------------------

}

// $(document).ready(readHandler);
if (document.readyState !== 'loading') {
    readyHandler();
} else {
    document.addEventListener('DOMContentLoaded', readyHandler);
}

