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
            url: "frame.png"
        })
    }

    reader.readAsDataURL(selectedFile);
}