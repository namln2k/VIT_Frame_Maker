function uploadFile(event) {
    console.log(event);
    var selectedFile = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function (event) {
        document.getElementById("profile-pic").src = event.target.result;
    };

    reader.readAsDataURL(selectedFile);

    basic = $('#preview').croppie({
        viewport: {
            width: 170,
            height: 170
        },
        boundary: {
            width: 300,
            height: 300
        }
    });
    basic.croppie('bind', {
        url: 'demo/cat.jpg',
    });
}