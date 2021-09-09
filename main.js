var content = $("#content");

var basic = content.croppie({
    viewport: {
        width: 150,
        height: 200
    }
});
basic.croppie('bind', {
    url: 'frame.png',
    points: [77,469,280,739]
});
//on button click
basic.croppie('result', 'html').then(function(html) {
    // html is div (overflow hidden)
    // with img positioned inside.
});