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
        var basic = $("#preview").croppie({
            .croppie('bind', {
            url: e.target.result
        }).then(function () {
            console.log('jQuery bind complete');
        });
    }

    reader.readAsDataURL(selectedFile);
}