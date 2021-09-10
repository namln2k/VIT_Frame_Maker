function uploadFile(event) {
    console.log(event.target.result);
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
            url: event.target.result,
        });
        reader.readAsDataURL(selectedFile);
    };
}