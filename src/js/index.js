document.addEventListener('DOMContentLoaded', function () {
    $('.statistics-items').waypoint(function () {
        count()
    }, {
        offset: 'bottom-in-view'
    })

    document.querySelector('#how-price').href = 'https://www.tesla.com/roadster/reserve#payment';
    var settings = document.querySelector('#settings');
    document.querySelector('#test-drive').href = 'https://www.tesla.com/drive';
    document.querySelector('#news').href = 'https://www.tesla.com/blog';
    document.querySelector('#contacts').href = 'https://www.tesla.com/contact';
    settings.addEventListener('click', function (e) {
        e.preventDefault();
        stateMenu();
        document.querySelector('.statistics-items').scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    });

    new WOW({
        animateClass: 'animate__animated'
    }).init();

    $('.slider').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
    });

    $('.header-btn').on('click', function () {
        stateMenu();
    });

    function stateMenu() {
        $('.menu').toggleClass('active');
        $('.header-btn').toggleClass('opened')
    }

    function count() {
        $('.num').each(function () {
            var $this = $(this);
            $({Counter: $this.text()}).animate({
                Counter: $this.data('to')
            }, {
                duration: 2500,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
    }
});
