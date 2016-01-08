$.fn.Slider = function (options) {
    options = (typeof options != "object") ? {} : options;
    var defaults = {
            interval: 5000,
            showAnim: 'fadeInUp',
            hideAnim: 'fadeOutDown',
            autoplay: true
        },
        interval = null;
    $.extend(defaults, options);
    var $cards = $(this), $card = $cards.find('.card');
    $card.hide().eq(0).fadeIn('250').addClass('active animated ' + defaults.showAnim);
    // if auto play then
    function start() {
        interval = setInterval(next, defaults.interval);
    }

    function stop() {
        clearInterval(interval);
    }

    if (defaults.autoplay) start();

    $card.on({
        'mouseenter': function () {
            if(defaults.autoplay) stop();
        },
        'mouseleave': function () {
            if(defaults.autoplay) start();
        }
    });

    function next() {
        var $toHide = $cards.find('.card.active'),
            $toShow = ($toHide.next().size() == 0) ? $card.eq(0) : $toHide.next();
        $toHide.addClass('animated ' + defaults.hideAnim);
        setTimeout(function () {
            $toHide.hide().removeClass('active animated ' + defaults.hideAnim);
            $toShow.addClass('active animated ' + defaults.showAnim).show();
            setTimeout(function () {
                $toShow.removeClass('animated ' + defaults.showAnim);
            }, 1000);
        }, 250);
    }
};