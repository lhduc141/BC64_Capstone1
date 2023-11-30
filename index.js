document.getElementById('bar').onclick = function () {
    document.getElementById('bar').style.display = 'none';
    document.getElementById('times').style.display = 'block';
}

$(document).ready(function () {
    $(".popup-with-zoom-anim").magnificPopup({
        type: "inline",

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: "auto",

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: "my-mfp-zoom-in"
    });
});
