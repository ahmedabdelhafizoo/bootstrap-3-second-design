$(document).ready(function () {

    //activ link
    $(".navbar-nav>li>a").click(function (e) {
        e.preventDefault();
        $(this).addClass("active").parent().siblings().find("a").removeClass("active");
        $("body, html").animate({
            scrollTop: $("#" + $(this).data("scroll")).offset().top - 50
        }, 700);
    });

    //active class on scroll
    $(window).on("scroll", function () {
        $(".section").each(function () {
            if ($(window).scrollTop() >= $(this).offset().top - 100) {
                var link = $(".navbar-nav>li>a[data-scroll=" + $(this).attr("id") + "]");
                link.addClass("active");
                link.parent().siblings().find("a").removeClass("active");
            }
        });
    });

    //tab function
    $(".tabs div").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $("." + $(this).data("target")).fadeIn(1000).siblings().hide();
    });
});