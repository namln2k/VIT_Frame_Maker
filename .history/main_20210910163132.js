function uploadFile(event) {
    var selectedFile = event.target.files[0];

    var basic = $("#preview").croppie({
        viewport: {
            width: 170,
            height: 170
        }
    });

    var reader = new FileReader();
    reader.onload = function (e) {
        basic.croppie('bind', {
            url: e.target.result
        })
    }

    reader.readAsDataURL(selectedFile);
}

function confirmFile() {
    basic.croppie('result', 'html').then(function(html) {
        // html is div (overflow hidden)
        // with img positioned inside.
    });
    mergeImages(['/body.png', '/eyes.png', '/mouth.png'])
}