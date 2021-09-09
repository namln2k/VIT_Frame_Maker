function checkLoginState() {
    FB.getLoginStatus(function (response) {
        if (response.status == "connected") {
            FB.api('/me', { fields: 'id' }, function (response) {
                FB.api('/' + response.id + '/picture?redirect=false', function (response) {
                    userAvatarBeforeUrl = response.data.url;
                    var canvas = document.createElement("canvas");
                    document.body.appendChild(canvas);
                    var ctx = canvas.getContext("2d");
                    var imageObj1 = new Image(userAvatarBeforeUrl);
                    var imageObj2 = new Image("./frame.png");
                    console.log("Avatar:\nwidth: " + imageObj1.width + "\nheight: " +imageObj1.height);
                    console.log("Frame:\nwidth: " + imageObj2.width + "\nheight: " +imageObj2.height);
                    imageObj1.onload = function () {
                        ctx.drawImage(imageObj1, 0, 0, 100, 100);
                        ctx.drawImage(imageObj2, 0, 0, 100, 100);
                    };
                    var downloadButton = document.createElement("button");
                    downloadButton.value = "Download";
                    document.body.appendChild(downloadButton);
                    downloadButton.onclick = function () {
                        console.log("downloading");
                    }
                });
            });
        }
        else alert("Đăng nhập thất bại!");
    });
}