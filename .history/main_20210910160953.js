function uploadFile(event) {
    console.log(event);
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
            url: 'demo/cat.jpg',
            points: [77,469,280,739]
        });
        reader.readAsDataURL(selectedFile);
    };
}