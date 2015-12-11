var $ = require('../../node_modules/jquery/dist/jquery.min.js');
var slick = require('./slick.js');

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
});
