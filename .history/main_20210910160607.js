function uploadFile(event) {
    console.log(event);
    var selectedFile = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function (event) {
        document.getElementById("profile-pic").src = event.target.result;
    };

    reader.readAsDataURL(selectedFile);

    basic = $('#demo-basic').croppie({
        viewport: {
            width: 150,
            height: 200
        },
        boundary: {
            width: 300,
            height: 300
        }
    });
    basic.croppie('bind', {
        url: 'demo/cat.jpg',
        points: [77,469,280,739]
    });
}