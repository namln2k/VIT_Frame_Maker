FB.getLoginStatus(function (response) {
    if (response.status == "connected")
        FB.logout(function (response) {
            console.log(response);
        });
})

function checkLoginState() {
    FB.getLoginStatus(function (response) {
        if (response.status == "connected") {
            var userID = response.authResponse.userID;
            //"http://graph.facebook.com/" + userID + "/picture?type=square";
            console.log(response);

            FB.api('/me', { fields: 'id' }, function (response) {
                console.log(response);
                FB.api('/' + response.id + '/picture?redirect=false', function (response) {
                    console.log(response);
                    userAvatarBeforeUrl = response.data.url;
                    var canvas = document.createElement("canvas");
                    document.body.appendChild(canvas);
                    var ctx = canvas.getContext("2d");
                    var imageObj1 = new Image();
                    var imageObj2 = new Image("./frame.png");
                    imageObj1.src = userAvatarBeforeUrl;
                    imageObj1.onload = function () {
                        ctx.drawImage(imageObj1, 0, 0, 100, 100);
                        ctx.drawImage(imageObj2, 0, 0, 100, 100);
                        var img = canvas.toDataURL("image.png");
                        console.log(img);
                        document.write('<img src="' + img + '" width="100" height="100"/>');
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