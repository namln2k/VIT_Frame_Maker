function uploadFile(event) {
    var selectedFile = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function (event) {
        var basic = $("#preview").croppie({
            viewport: {
                width: 150,
                height: 200
            }
        });
        basic.croppie('bind', {
            url: 'frame.png',
            points: [77,469,280,739]
        });
        reader.readAsDataURL(selectedFile);
    };
}