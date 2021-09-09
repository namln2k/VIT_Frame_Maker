function createFrame() {
    // var profileLinkInput = document.getElementById("profile-link").value;
    // var subLinkIndex= profileLinkInput.search("facebook.com/");
    // if ((subLinkIndex) == -1) {
    //     alert("Liên kết dường như không hợp lệ! Bạn kiểm tra lại nhé!");
    //     profileLinkInput.focus();
    // }
    // profilePictureApiLink = "http://graph.facebook.com/" + profileLinkInput.substring(subLinkIndex + 13) + "    picture?type=square";
    // console.log(profilePictureApiLink);
    FB.login(function(response) {
        if (response.authResponse) {
         console.log('Welcome!  Fetching your information.... ');
         FB.api('/me', function(response) {
           console.log('Good to see you, ' + response.name + '.');
         });
        } else {
         console.log('User cancelled login or did not fully authorize.');
        }
    });    
}