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
                    var ctx = c.getContext("2d");
                    var imageObj1 = new Image();
                    var imageObj2 = new Image();
                    imageObj1.src = userAvatarBeforeUrl;
                    imageObj1.onload = function() {
                        ctx.drawImage(imageObj1, 0, 0, 100, 100);
                        imageObj2.src = "https://via.placeholder.com/100x100/ccccFF";
                        imageObj2.onload = function() {
                           ctx.drawImage(imageObj2, 0, 0, 100, 100);
                           var img = canvas.toDataURL("image/png");
                           document.write('<img src="' + img + '" width="100" height="200"/>');
                        }
                     };
                });
            });
        }
        else alert("Đăng nhập thất bại!");
    });
}