var $ = require('../../node_modules/jquery/dist/jquery.min.js');
window.$ = window.jQuery = $;
var slick = require('./slick.js');

var maxRatio = 0;
var imagesLabel = [];

$(document).ready(function() {
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
        imagesLabel.push(str.replace(/_/i, " ").slice(0, -1));
    });

    $('.image-drawer').each(function(){
          $(this).html("<span>"+imagesLabel.splice(0,1)[0]+"</span>") ;
    });

});
