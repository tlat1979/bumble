var validLocations = ['Tel Aviv', 'Ramat Aviv', 'Ramat Gan', 'Giv`atayim', 'Bat Yam', 'H̱olon', 'Ramat HaSharon', 'Yehud', 'Yafo', 'Herzliyya', 'Kfar Saba', 'Nes Ziyyona', 'Qiryat Ono', 'Ra`ananna', 'Ramat H̱en', 'Hod HaSharon', 'Gelilot', 'Ramat H̱ayyal', 'Rishon LeẔiyyon', 'Hadar Yosef', 'Ramat H̱en', 'Giv`at Shemu’el', 'Ezra Uviẕẕaron', 'Qiryat Shalom', 'Kefar Gannim', 'Gan H̱ayyim', 'Reẖovot', 'Petaẖ Tiqwa', 'Herzliyya'];
var invalidBodies = ["average", "jacked", "overweight", "Full figured", "curvy", "A little extra"]
var [MIN_AGE, MAX_AGE] = [24, 47];
var getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
var okBaseURL = 'https://www.okcupid.com';
var okProfileURL = okBaseURL + "/profile";

var msgTxt = userName => `Hi ${userName}, how are you? I liked your profile :)`;

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
var getUserDetails = async (userId, win) => {
    var user = {};
    user.userId = userId;

    // User: name, age, location, match percentage
    user.name = win.document.querySelectorAll(".profile-basics-username")[0].textContent
    user.age = win.document.querySelectorAll(".profile-basics-asl-age")[0].textContent
    user.location = win.document.querySelectorAll(".profile-basics-asl-location")[0].textContent
    user.matchPercentage = win.document.querySelectorAll(".profile-basics-asl-match")[0].textContent

    // User Photos
    user.photos = [];
    var userPhotos = win.document.querySelectorAll(".profile-thumb img");
    for (photo of userPhotos) {
        // Big resolution images 
        var href = photo.src.split("/225x225/225x225/").join("/");
        user.photos.push(href);
    }

    // User basic info    
    user.details = {};
    var userDetails = win.document.querySelectorAll(".matchprofile-details-section");
    for (details of userDetails) {
        let category = details.className.split('--')[1];
        user.details[category] = details.innerText;
    }

    // User extended info (essays)
    var profileEssays = win.document.querySelectorAll(".profile-essay");
    user.essays = {};
    for (essay of profileEssays) {
        var txt = essay.innerText;
        var txtArr = txt.split("\n");
        var sectionTitle = txtArr[0];
        txtArr.shift();
        txtArr.pop();
        user.essays[sectionTitle] = txtArr.join(" ");
        var a = 5;
        //user.essays.push(essay.innerText);
    }

    return user;
}

// Like / Pass from doubletake
var likeUserDoubleTake = () => window.document.querySelectorAll(".doubletake-like-button")[0].click();
var passUserDoubleTake = () => window.document.querySelectorAll(".doubletake-pass-button")[0].click();

// Like / Pass from User Profile
var likeUserFromProfile = win => win.document.querySelectorAll("#like-button")[0].click();
var passUserFromProfile = win => win.document.querySelectorAll("#pass-button")[0].click();

var sendMsg = async (msg, win) => {
    var newStr = "";



    // Inputing the msg letter by letter to simulate a real user
    for (c of [...msg]) {
        var randWait = getRandomInt(50, 100);
        await sleep(randWait);
        newStr += c;
        win.document.querySelectorAll(".messenger-composer")[0].value = newStr;
        await sleep(100);
        win.document.querySelectorAll(".messenger-composer")[0].dispatchEvent(keyboardEvent);
    }

    // Sending the message
    win.document.querySelectorAll(".messenger-toolbar-send")[0].click();
}

var isValidUserBody = body => {
    if (body === "") return true;
    let ret = true;
    invalidBodies.forEach(b => {
        b = b.toLowerCase();
        body = body.toLocaleLowerCase();
        if (b.includes(body) || body.includes(b))
            ret = false;
    });
    return ret;
}


var isValidUser = user => {

    let validityFaults = [];
    let [aboutMe, herBasics, herBackground, herLookingFor, herLooks, isValidLocation, isValidAge, herFamily, isValidBody, hasKids, isBroken] = Array(11).fill('');
    try { aboutMe = user.essays["ABOUT ME"] || ''; } catch (e) { }
    try { herBasics = user.details["basics"] || ''; } catch (e) { }
    try { herBackground = user.details["background"] || ''; } catch (e) { }
    try { herLookingFor = user.details["wiw"] || ''; } catch (e) { }
    try { herLooks = user.details["looks"] || ''; } catch (e) { }
    try { herFamily = user.details["family"] || ''; } catch (e) { }

    isValidLocation = validLocations.some(location => location === user.location);
    isValidAge = user.age >= MIN_AGE && user.age < MAX_AGE;
    isValidBody = isValidUserBody(herLooks);
    hasKids = herFamily.includes('Has kid(s)');
    isBroken = aboutMe.includes(' ילד ') || aboutMe.includes(' ילדה ') || aboutMe.includes('+') || aboutMe.includes(' פלוס ') || aboutMe.includes(' אמא ');

    let result = isValidLocation && isValidAge && isValidBody && !isBroken && !hasKids;
    let msg = user.name + " | " + user.age + " | " + user.location + " | " + okBaseURL + '/profile/' + user.userId;

    result ?
        console.log("%cValid User: " + msg, 'background: #222; color: #14e722') :
        console.log("%cBroken User: " + msg, 'background: #222; color: #a43c43');
    return result;
}

// Assuming the DoubleTake page is open
var addressOneUser = async () => {

    // Getting the current user ID
    let userProfileUrlString = window.document.querySelectorAll(".cardsummary-reflux-profile-link > a")[0].href;
    let userProfileUrlObj = new URL(userProfileUrlString);
    let pathName = userProfileUrlObj.pathname.split("/");

    let win = window.open(userProfileUrlString, "okCupid", "height=600, width=600");
    await sleep(10000);

    let user = await getUserDetails(pathName[2], win);

    if (isValidUser(user)) {

        likeUserFromProfile(win);
        likeUserDoubleTake();

        await sleep(getRandomInt(1000, 2000)); user.name

        sendMsg(msgTxt(user.name), win);
    }
    else {
        passUserDoubleTake();
    }

    await sleep(15000);
    win.close();

    console.log(user);
}


var main = async _ => {
    var usersAmount = getRandomInt(2, 4);
    for (let i = 0; i < usersAmount; i++) {
        await addressOneUser();
        var randSleep = getRandomInt(1000, 1500);
        await sleep(randSleep);
    }
}

main()




