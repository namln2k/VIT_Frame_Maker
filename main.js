function checkLoginState() {
    FB.getLoginStatus(function (response) {
        if (response.status == "connected") {
            var userID = response.authResponse.userID;
            //"http://graph.facebook.com/" + userID + "/picture?type=square";
            console.log(userID);
        }
        else alert("Đăng nhập thất bại!");
    });
}