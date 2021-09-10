function uploadFile(event) {
    var selectedFile = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function (event) {
        console.log( $("#preview"));
        var basic = document.getElementById("").croppie({
            viewport: {
                width: 170,
                height: 170
            }
        });
        basic.croppie('bind', {
            url: 'frame.png',
        });
        reader.readAsDataURL(selectedFile);
    };
}