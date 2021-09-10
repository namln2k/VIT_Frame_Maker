function uploadFile(event) {
    var selectedFile = event.target.files[0];

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
        console.log(html);
    });
    // mergeImages(['/body.png', '/eyes.png', '/mouth.png']);
}