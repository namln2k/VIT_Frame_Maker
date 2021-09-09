function checkLoginState() {
    FB.getLoginStatus(function (response) {
        if (response.status == "connected") {
            FB.api('/me', { fields: 'id' }, function (response) {
                FB.api('/' + response.id + '/picture?redirect=false', function (response) {
                    userAvatarBeforeUrl = response.data.url;
                    var canvas = document.createElement("canvas");
                    document.body.appendChild(canvas);
                    var ctx = canvas.getContext("2d");
                    var imageObj1 = new Image(100, 100);
                    var imageObj2 = new Image(100, 100);
                    imageObj1.src = userAvatarBeforeUrl;
                    imageObj2.src = "./frame.png";
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