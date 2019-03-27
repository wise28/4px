$(".button").click(function(){
    $(this).closest("body").toggleClass("active");
});

(function($) {
    $(function() {

        $('ul.tabs__caption').on('click', 'li:not(.tabs__item_active)', function() {
            $(this)
                .addClass('tabs__item_active').siblings().removeClass('tabs__item_active')
                .closest('div.tabs').find('div.tabs__content').removeClass('tabs__content_active').eq($(this).index()).addClass('tabs__content_active');
        });

    });
})(jQuery);

$(".modal-form__close").click(function(){
    $(this).closest(".modal-form-size").hide();
});

$(".opportunity-low-button").click(function(){
    $(".modal-form-size").show();
});