var keyboardEvent = document.createEvent("KeyboardEvent");
var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";

keyboardEvent[initMethod](
    "input", // event type: keydown, keyup, keypress
    true,      // bubbles
    true,      // cancelable
    window,    // view: should be window
    false,     // ctrlKey
    false,     // altKey
    false,     // shiftKey
    false,     // metaKey
    83,        // keyCode: unsigned long - the virtual key code, else 0
    0          // charCode: unsigned long - the Unicode character associated with the depressed key, else 0
);


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

// Like / Pass from doubletake
var likeUserDoubleTake = () => window.document.querySelectorAll(".doubletake-like-button")[0].click();
var passUserDoubleTake = () => window.document.querySelectorAll(".doubletake-pass-button")[0].click();

// Like / Pass from User Profile
var likeUserDoubleTake = () => window.document.querySelectorAll("#like-button")[0].click();
var passUserDoubleTake = () => window.document.querySelectorAll("#pass-button")[0].click();

var sendMsg = async msg => {
    var newStr = "";

    // Inputing the msg letter by letter to simulate a real user
    [...msg].forEach(async c => {
        await sleep(100);
        newStr += c;
        window.document.querySelectorAll(".messenger-composer")[0].value = newStr;
        window.document.querySelectorAll(".messenger-composer")[0].dispatchEvent(keyboardEvent);
        console.log(newStr);
    });

    // Sending the message
    window.document.querySelectorAll(".messenger-toolbar-send")[0].click();
}


var main = async () => {
    // Assuming the DoubleTake page is open
    // Getting the current user ID
    let a = window.document.querySelectorAll(".cardsummary-reflux-profile-link > a")[0].href;
    let b = a.split("/");
    let c = b[b.length - 1];
    let d = c.split("?")[0];

    var user = await getUserDetails(d);
    console.log(user);
}


main();

