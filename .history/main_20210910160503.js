function uploadFile(event) {
    console.log(event);
    var selectedFile = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function (event) {
     = event.target.result;
    };

    reader.readAsDataURL(selectedFile);
}