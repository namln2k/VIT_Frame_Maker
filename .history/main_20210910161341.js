function uploadFile(event) {
    var selectedFile = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function (event) {
        basic = document.getElementById('upload-file')croppie({
            viewport: {
                width: 150,
                height: 200
            }
        });
        basic.croppie('bind', {
            url: event.target.result,
        });
        reader.readAsDataURL(selectedFile);
    };
}