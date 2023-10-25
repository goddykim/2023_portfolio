$(function () {
    var myFullpage = new fullpage('#fullpage', {
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['HOME', 'PROFILE', 'WEB', 'DESIGN']
    });
})