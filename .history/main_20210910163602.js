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
    $("#preview").croppie('result', {
        type: "canvas",
        size: "viewport",
        resultSize: {
            width: 170,
            height: 170
        }
    }).then(function (resp) {
        mergeImages([resp, 'frame.png']).then(b64 => console.log(b64););;
    });
}