function uploadFile(event) {
    console.log(event);
    var selectedFile = event.target.files[0];
  var reader = new FileReader();

  var imgtag = document.getElementById("myimage");
  imgtag.title = selectedFile.name;

  reader.onload = function(event) {
     = event.target.result;
  };

  reader.readAsDataURL(selectedFile);
}