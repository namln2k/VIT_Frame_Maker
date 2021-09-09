function createFrame() {
    var profileLink = document.getElementById("profile-link").value;
    var subLinkIndex= profileLink.search("facebook.com/");
    profilePictureApiLink = profileLink.substring(subLinkIndex + 13);
    console.log(profilePictureApiLink);
}