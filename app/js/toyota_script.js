//hamburger menu
$(".hamburger").click(function(){
    $(this).closest("body").toggleClass("active");
});

// tabs element
(function($) {
    $(function() {

        $('ul.tabs__caption').on('click', 'li:not(.tabs__item_active)', function() {
            $(this)
                .addClass('tabs__item_active').siblings().removeClass('tabs__item_active')
                .closest('div.tabs').find('div.tabs__content').removeClass('tabs__content_active').eq($(this).index()).addClass('tabs__content_active');
        });

    });
})(jQuery);

//for modal form
$(".modal-form__close").click(function(){
    $(this).closest(".modal-form-size").hide();
});

$(".opportunity-low-button").click(function(){
    $(".modal-form-size").show();
});

//the slow scroll to up
$(function() {
    $.fn.scrollToTop = function() {
        $(this).hide().removeAttr("href");
        if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
        var scrollDiv = $(this);
        $(window).scroll(function() {
            if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
            else $(scrollDiv).fadeIn("slow")
        });
        $(this).click(function() {
            $("html, body").animate({scrollTop: 0}, "slow")
        })
    }
});

//for button by class button-up
$(function() {
    $(".button-up").scrollToTop();
});

//for input mask
$(document).ready(function () {
    $(function(){
        $(".offer-form-input[type=tel], .modal-form-input[type=tel]").mask("+7(999) 999-9999");
        $(".input-year").mask("9999");
    });
});

//for button by class 'available-auto__button'
$(".available-auto__button").click(function(){
    $( ".available-auto_none" ).slideToggle( "fast" );
});

//for deskleimer

$(document).ready(function(){
    $(".modal-form__close").click(function () {
        $.cookie("modal-form", "24house", {expires: 0} );
        $(".modal-form-size").hide();
    });

    if ( $.cookie("modal-form") == null )
    {
        setTimeout(function(){
            $(".modal-form-size").show();
        }, 2000)
    }
    else { $(".modal-form-size").hide();
    }
});

//for yandex map

ymaps.ready(init);
function init(){

    // Создание карты.
    var myMap = new ymaps.Map("auto-map__item", {
        center: [55.22812381, 61.37522886],
        zoom: 17
    });

    var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point", // тип геометрии - точка
            coordinates: [55.22812381, 61.37522886] // координаты точки
        }
    });



    var myPlacemark = new ymaps.Placemark([55.22812381, 61.37522886], {}, {
        preset: 'islands#redIcon'
    });
    //добавляем на карту метки
    myMap.geoObjects.add(myGeoObject);
    myMap.geoObjects.add(myPlacemark);
}