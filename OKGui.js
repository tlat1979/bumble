// General sleep function
var sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// This function assumes that it rund of the doubleTake page 
var getUserDetails = async userId => {
    var user = {};

    // User: name, age, location
    user.name = window.document.querySelectorAll(".cardsummary-reflux-realname")[0].textContent;
    user.age = window.document.querySelectorAll(".cardsummary-reflux-age")[0].textContent;
    user.location = window.document.querySelectorAll(".cardsummary-reflux-location")[0].textContent;
    user.matchPercentage = window.document.querySelectorAll(".cardsummary-reflux-match-pct")[0].textContent;

    // User Photos
    user.photos = [];
    var userPhotos = window.document.querySelectorAll(".qmcard-contents .image_wrapper > img");
    for (photo of userPhotos) {
        user.photos.push(photo.src);
    }

    // Open a new window for rendering the user profile
    var win = window.open("https://www.okcupid.com/profile/" + userId + "?cf=quickmatch", "xxxx", "height=200,width=200");
    await sleep(10000);

    // User basic info    
    user.details = [];
    var userDetails = win.document.querySelectorAll(".matchprofile-details-section");
    for (details of userDetails) {
        user.details.push(details.innerText);
    }

    // User extended info (essays)
    var profileEssays = win.document.querySelectorAll(".profile-essay");
    user.essays = [];
    for (essay of profileEssays) {
        user.essays.push(essay.innerText);
    }

    win.close();
    return user;
}

var main = async () => {
    var user = await getUserDetails("7340335320965521072");
    console.log(user);
}


main();
