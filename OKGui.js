var validLocations = ['Tel Aviv', 'Ramat Aviv', 'Ramat Gan', 'Giv`atayim', 'Bat Yam', 'H̱olon', 'Ramat HaSharon', 'Yehud', 'Yafo', 'Herzliyya', 'Kfar Saba', 'Nes Ziyyona', 'Qiryat Ono', 'Ra`ananna', 'Ramat H̱en', 'Hod HaSharon', 'Gelilot', 'Ramat H̱ayyal', 'Rishon LeẔiyyon', 'Hadar Yosef', 'Ramat H̱en', 'Giv`at Shemu’el', 'Ezra Uviẕẕaron', 'Qiryat Shalom', 'Kefar Gannim', 'Gan H̱ayyim', 'Reẖovot', 'Petaẖ Tiqwa', 'Herzliyya'];
var invalidBodies = ["average", "jacked", "overweight", "Full figured", "curvy", "A little extra"];
var MINUTE = 60 * 1000;
var [MIN_AGE, MAX_AGE] = [24, 47];
var getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
var okBaseURL = 'https://www.okcupid.com';
var okProfileURL = okBaseURL + "/profile";

var keyboardEvent = document.createEvent("KeyboardEvent");
var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";
keyboardEvent[initMethod]("input", true, true, window, false, false, false, false, 83, 0);

// General sleep function
var sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

var msgTxt = userName => {
    var INTRO_MESSEGES = [
        `Hi ${userName}, I liked your profile :)`,
        `Hi There ${userName}, how are you? :)`,
        `?מה שלומך ,${userName} היי`,
    ];
    return INTRO_MESSEGES[getRandomInt(0, 3)];
}

// This function assumes that it rund of the doubleTake page 
var getUserDetails = async (userId, win) => {
    var user = {};
    user.age = user.name = user.location = user.matchPercentage = "";
    user.userId = userId;

    // User: name, age, location, match percentage
    try { user.name = win.document.querySelectorAll(".profile-basics-username")[0].textContent } catch (e) { }
    try { user.age = win.document.querySelectorAll(".profile-basics-asl-age")[0].textContent } catch (e) { }
    try { user.location = win.document.querySelectorAll(".profile-basics-asl-location")[0].textContent } catch (e) { }
    try { user.matchPercentage = win.document.querySelectorAll(".profile-basics-asl-match")[0].textContent } catch (e) { }

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

    // Check if the user's mailbox is full
    var isMailboxFull = false;
    var isMessageBoxAvaiable = false;
    try { isMailboxFull = win.document.querySelectorAll(".messenger-banner")[0].textContent; } catch (e) { }
    if (isMailboxFull) {
        console.log("The user's mailbox is full - hot one?! :)");
        return;
    }

    try { isMessageBoxAvaiable = !win.document.querySelectorAll(".messenger-composer")[0].value; } catch (e) { }
    if (!isMessageBoxAvaiable) {
        console.log("No message box available");
        return;
    }

    var newStr = "";

    // Inputing the msg letter by letter to simulate a real user
    for (c of [...msg]) {
        await sleep(getRandomInt(50, 100));
        newStr += c;
        win.document.querySelectorAll(".messenger-composer")[0].value = newStr;
        await sleep(100);
        win.document.querySelectorAll(".messenger-composer")[0].dispatchEvent(keyboardEvent);
    }
    await sleep(1000);
    // Sending the message
    win.document.querySelectorAll(".messenger-toolbar-send")[0].click();
    await sleep(100);
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
var addressOneUser = async profileURL => {

    // // Getting the current user ID
    // let userProfileUrlString = window.document.querySelectorAll(".cardsummary-reflux-profile-link > a")[0].href;
    let userProfileUrlObj = new URL(profileURL);
    let pathName = userProfileUrlObj.pathname.split("/");

    let win = window.open(profileURL, "okCupid", "height=768, width=1024");
    win.blur();
    window.focus();
    await sleep(10000);



    let user = await getUserDetails(pathName[2], win);

    if (isValidUser(user)) {

        likeUserFromProfile(win);
        likeUserDoubleTake();

        await sleep(getRandomInt(4000, 5000));
        await sendMsg(msgTxt(user.name), win);
        //await sleep(15000);
    }
    else {
        passUserDoubleTake();
    }
    win.close();

    console.dirxml(user);
}

var discovery = async _ => {
    let userProfiles = window.document.querySelectorAll("a.user-photoAndText");
    let profile = userProfiles[0];
    await addressOneUser(profile.href);
}

var doubleTake = async _ => {
    // Getting the current user ID
    let userProfileUrlString = window.document.querySelectorAll(".cardsummary-reflux-profile-link > a")[0].href;
    await addressOneUser(userProfileUrlString);
}

var main = async _ => {

    var usersAmount = getRandomInt(6, 14);
    console.log(`Addressing ${usersAmount} Users`);
    for (let i = 0; i < usersAmount; i++) {
        await doubleTake();
        await sleep(getRandomInt(1000, 1500));
    }
    let wait = getRandomInt(60 * MINUTE, 90 * MINUTE);
    console.log(`Sleeping ${wait / (60 * MINUTE)} between runs`);
    await sleep(wait);

}

main();





