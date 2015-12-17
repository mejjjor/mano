var $ = require('../../node_modules/jquery/dist/jquery.min.js');
window.$ = window.jQuery = $;
var slick = require('./slick.js');

var maxRatio = 0;
var imagesLabel = [];

$( window ).load(function() {
    $('.project-image img').each(function(){
       $(this).css("display","block");
    });
    $('.project-image div').each(function(){
        $(this).css("height","300px");
    });
    $('.project-image').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        fade: true,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        speed:1000,
        cssEase: 'cubic-bezier(1,.5,.5,.30)',
        autoplaySpeed: 3000
    });

    resizeImg();
});

window.onresize = function() {
    resizeImg();
};


function resizeImg(){
    var images = $('.image-gallery img');
    var width = (window.innerWidth*0.8/3-39);

    images.each(function(){
        var ratio = $(this).width()/$(this).height();
        if(ratio > maxRatio)
            maxRatio = ratio;
    });

    $('.image-gallery').each(function(){
        $(this).width(width);
    });

    images.each(function(){
        $(this).height(width/maxRatio);
        var str = $(this)[0].currentSrc.match(/[-_\w]+[.][\w]+$/)[0].match(/[-_\w]+\./)[0];
        imagesLabel.push(str.split("_").join(" ").slice(0, -1));
    });

    $('.image-drawer').each(function(){
        $(this).html("<div>"+imagesLabel.splice(0,1)[0]+"</div>") ;
    });
}
