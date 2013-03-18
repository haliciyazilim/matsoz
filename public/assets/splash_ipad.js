/**
* Created with JetBrains WebStorm.
* User: yeguzel
* Date: 01.11.2012
* Time: 09:45
* To change this template use File | Settings | File Templates.
*/

var Splash = function() {
    $(document)
        .ready(Splash.init);

}

Splash.init = function() {
    Main.initializeNavigation();

    setTimeout(function() {
        Splash.animate();
    }, 1000);
}
Splash.animate = function() {
    $('.matsoz_logo')
        .delay(1700)
        .animate({
        marginLeft: '-150px'
    }, 1500, 'easeInOutQuad');
    $('.halici_logo')
        .delay(1400)
        .animate({
        left: (parseInt($('.halici_logo')
            .css('left'), 10) + 780) + 'px'
    }, 1500, 'easeInOutQuad');
    $('.meb_logo')
        .delay(2000)
        .animate({
        right: (parseInt($('.meb_logo')
            .css('right'), 10) + 150) + 'px'
    }, 1500, 'easeInOutQuad');


}
//margin-left:-311px;

Splash();
