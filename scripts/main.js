$(document).ready(() => {
    $('.item-block').matchHeight();
    $('.item-block__text').matchHeight();
    $('.up-link a').on("click touch", function(){
        $('html, body').animate({scrollTop: 0}, 1000);
    });
    $("form").validate({
        rules: {
            email: "required"
        },
        messages: {
            email: "Пожалуйста введите email"
        }
    });
    $("label[for=checkbox]").on("click change ", function(){
        let span = $(this).children("span");
        if(span.hasClass("checked")) {
            span.removeClass("checked");
        }
        else {
            span.addClass("checked");
        }
    });
    $(".title-container__sorting a").on("click touch", function(){
            if($(this).hasClass('down')){
                $(this).addClass("top");
                    $(this).removeClass("down");
            }
            else {
                $(this).addClass("down");
                $(this).removeClass("top");
            }
        $(this).siblings('a').removeClass("top").removeClass("down");
    });
});