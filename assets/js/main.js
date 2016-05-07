$(document).ready(function() {

    "use strict";

    $(".mobile-menu").on("click", function() {
        $(this).toggleClass("open");
        $("header nav .menu").slideToggle("slow");
    });

    $("#search-link").on("click", function() {
        $(".search-overlay").fadeIn("slow");
        $(".search-overlay #search-input").focus();
        $(".search-overlay #close-search").on("click", function() {
            $(".search-overlay").fadeOut("slow");
            $(".search-overlay #search-input").val("");
        });
        $(document).keyup(function(e) {
            if (e.keyCode == 27) {
                $(".search-overlay").fadeOut("slow");
                $(".search-overlay #search-input").val("");
            }
        });
    });

    $("#socials-link").on("click", function(e) {
        e.preventDefault();
        $(".socials-overlay").fadeIn("slow");
        $(".socials-overlay #close-socials").on("click", function() {
            $(".socials-overlay").fadeOut("slow");
        });
        $(document).keyup(function(e) {
            if (e.keyCode == 27) {
                $(".socials-overlay").fadeOut("slow");
            }
        });
    });

});


$(window).load(function() {

    "use strict";

    $('.portfolio-masonry').isotope({
        itemSelector: '.col-md-4'
    });

    $('.portfolio-masonry2').isotope({
        itemSelector: '.col-md-3'
    });

    $('.portfolio-masonry3').isotope({
        itemSelector: '.col-md-6'
    });

    $('.blog-masonry').isotope({
        itemSelector: '.col-md-6'
    });

    $('.blog-masonry2').isotope({
        itemSelector: '.col-md-4'
    });

    $(function() {
        // init Isotope
        var $container = $('.portfolio-masonry,.portfolio-masonry2,.portfolio-masonry3').isotope({
            itemSelector: '.item'
        });
        // filter functions
        var filterFns = {
            // show if number is greater than 50
            numberGreaterThan50: function() {
                var number = $(this).find('.number').text();
                return parseInt(number, 10) > 50;
            },
            // show if name ends with -ium
            ium: function() {
                var name = $(this).find('.name').text();
                return name.match(/ium$/);
            }
        };
        // bind filter button click
        $('#filters').on('click', 'li', function() {
            var filterValue = $(this).attr('data-filter');
            // use filterFn if matches value
            filterValue = filterFns[filterValue] || filterValue;
            $container.isotope({
                filter: filterValue
            });
        });
        // change is-checked class on buttons
        $('.filters').each(function(i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'li', function() {
                $buttonGroup.find('.active').removeClass('active');
                $(this).addClass('active');
            });
        });
    });

    $(function() {
        // init Isotope
        var $container = $('portfolio-v1 .portfolio-masonry,portfolio-v2 .portfolio-masonry2,portfolio-v3 .portfolio-masonry3').isotope({
            itemSelector: '.item',
            layoutMode: 'fitRows'
        });
        // filter functions
        var filterFns = {
            // show if number is greater than 50
            numberGreaterThan50: function() {
                var number = $(this).find('.number').text();
                return parseInt(number, 10) > 50;
            },
            // show if name ends with -ium
            ium: function() {
                var name = $(this).find('.name').text();
                return name.match(/ium$/);
            }
        };
        // bind filter button click
        $('#filters').on('click', 'li', function() {
            var filterValue = $(this).attr('data-filter');
            // use filterFn if matches value
            filterValue = filterFns[filterValue] || filterValue;
            $container.isotope({
                filter: filterValue
            });
        });
        // change is-checked class on buttons
        $('.filters').each(function(i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'li', function() {
                $buttonGroup.find('.active').removeClass('active');
                $(this).addClass('active');
            });
        });
    });

    $(".loader").fadeOut("slow");
});