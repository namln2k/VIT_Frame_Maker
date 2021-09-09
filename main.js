function checkLoginState() {
    FB.getLoginStatus(function (response) {
        if (response.status == "connected") {
            console.log(response);
        }
        else alert("Đăng nhập thất bại!");
    });
}