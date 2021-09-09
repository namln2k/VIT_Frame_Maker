function checkLoginState() {
    FB.getLoginStatus(function (response) {
        if (response.status == "connected") {
            console.log(response.authResponse.accessToken);
            FB.api(
                "/1005107760342265/picture",
                function (response) {
                  if (response && !response.error) {
                    console.log(response);
                  }
                }
            );
        }
        else alert("Đăng nhập thất bại!");
    });
}