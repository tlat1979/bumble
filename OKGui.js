var sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
var getUserDetails = async userId => {
    var user = {};
    var win = window.open("https://www.okcupid.com/profile/" + userId + "?cf=quickmatch", "xxxx", "height=200,width=200");
    await sleep(10000);

    user.details = [];
    var userDetails = win.document.querySelectorAll(".matchprofile-details-section > .matchprofile-details-text");
    for (details of userDetails) {
        user.details.push(details.textContent);
    }

    var profileEssays = win.document.querySelectorAll(".profile-essay");
    user.essays = [];
    for (essay of profileEssays) {
        var header = essay.querySelectorAll("h2");
        var body = essay.querySelectorAll("p");
        user.essays.push({ [header[0].textContent + " " + header[1].textContent]: body[0].textContent });
    }

    console.log(user);
    win.close();
}



getUserDetails("7340335320965521072");


