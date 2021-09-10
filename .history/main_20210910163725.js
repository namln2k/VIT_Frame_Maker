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
        mergeImages([resp, { src: 'frame.png', x: 2.5, y: 2.5 }]).then(b64 => {
            var a = $("<a>")
                .attr("href", b64)
                .attr("download", "img.png")
                .appendTo("body");

            a[0].click();

            a.remove();
        });
    });
}