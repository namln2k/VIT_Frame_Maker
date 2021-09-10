function uploadFile(event) {
    console.log(event);
    var selectedFile = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function (event) {

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
            url: event.target.result,
        });
        document.getElementById("profile-pic").src = ;
    };

    reader.readAsDataURL(selectedFile);
}