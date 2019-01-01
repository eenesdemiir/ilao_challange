$(function(){

    //img
    $("img[name=logo-gv]").attr({
        "src" : "img/gv.png",
    });

    $("img[name=img-1]").attr({
        "src" : "img/1.png",
    });

    $("img#threemg").css({
        "margin-left" : "auto",
        "margin-right" : "auto",
        "display" : "table",
    });

    $("img[name=img1]").attr({
        "src" : "img/3_1.png",
    });

    $("img[name=img2]").attr({
        "src" : "img/3_2.png",
    });

    $("img[name=img3]").attr({
        "src" : "img/3_3.png",
    });

    $("img[name=img4]").attr({
        "src" : "img/4.png",
    });

    $("img[name=img5]").attr({
        "src" : "img/5.png",
    });

    $("img[name=twit-logo]").attr({
        "src" : "img/twit-logo.png",
    });

    $("img[name=face-logo]").attr({
        "src" : "img/face-logo.png",
    });

    $("img[name=youtube-logo]").attr({
        "src" : "img/youtube-logo.png",
    });

    //connection
    $("script[name=main-js]").attr({
        "src" : "js/main.js",
    });

});



    $(document).ready(function(){
        var availableTags = [
            "Asp",
            "C",
            "C++",
            "Java",
            "JavaScript",
            "PHP",
            "Python",
            "Ruby",
        ];
        $( "input#search-box" ).autocomplete({
            source: availableTags
        });

    });

    




