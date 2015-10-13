var $ = require('../../node_modules/jquery/dist/jquery.min.js');
var slick = require('./slick.js');

$(document).ready(function() {
    $('.project-image').slick({
        slidesToShow: 1,
        fade: true,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        speed:1500,
        cssEase: 'cubic-bezier(.98,.47,.49,.23)',
        autoplaySpeed: 5000
    });
});
