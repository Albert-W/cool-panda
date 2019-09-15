var readyHandler = function () {

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

