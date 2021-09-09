function createFrame() {
    var profileLinkInput = document.getElementById("profile-link").value;
    var subLinkIndex= profileLinkInput.search("facebook.com/");
    if ((subLinkIndex) == -1) {
        alert("Liên kết dường như không hợp lệ! Bạn kiểm tra lại nhé!");
        profileLinkInput.focus();
    }
    profilePictureApiLink = "http://graph.facebook.com/" + profileLinkInput.substring(subLinkIndex + 13) + "    picture?type=square";
    console.log(profilePictureApiLink);
}