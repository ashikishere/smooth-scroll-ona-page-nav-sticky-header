
$(document).ready(function () {
    var scrollLink = $('.scroll');

    //  Smmoth scroll
    var duration = 500; // in ms
    scrollLink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, duration)
    })
    // active link chnage
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();
        scrollLink.each(function () {
            var sectionOffset = $(this.hash).offset().top - 20;
            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        })
    })

    // sticky header

    function stickyHeader() {
        var wind = $(window);
        var sticky = $('.main-header');
        wind.on('scroll', function () {
            var scroll = wind.scrollTop();
            if (scroll < 30) {
                sticky.removeClass('sticky');
            } else {
                sticky.addClass('sticky');
            }
        })
    }

    stickyHeader();
})