function checkLoginState() {
    FB.getLoginStatus(function (response) {
        if (response.status == "connected") {
            var userID = response.authResponse.userID;
            //"http://graph.facebook.com/" + userID + "/picture?type=square";
            console.log(response);

            FB.api('/me', { fields: 'id' }, function (response) {
                console.log(response);
                FB.api('/' + response, function(response) {
                    console.log(response);
                  });
            });
        }
        else alert("Đăng nhập thất bại!");
    });
}