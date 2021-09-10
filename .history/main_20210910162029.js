function uploadFile(event) {
    var selectedFile = event.target.files[0];

    document.getElementById("preview").croppie({
        viewport: {
            width: 170,
            height: 170
        }
    });
    
    var reader = new FileReader();
    reader.onload = function (e) {
    	$uploadCrop.croppie('bind', {
    		url: e.target.result
    	}).then(function(){
    		console.log('jQuery bind complete');
    	});
    }
    reader.readAsDataURL(this.files[0]);
}