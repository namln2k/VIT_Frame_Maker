function uploadFile(event) {
    var selectedFile = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function (event) {
        basic = $('#preview').croppie({
            viewport: {
                width: 150,
                height: 200
            }
        });
        basic.croppie('bind', {
            url: event.target.,
        });
        reader.readAsDataURL(selectedFile);
    };
}