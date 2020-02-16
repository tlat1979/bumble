var simulateClick = elem => {
    var evt = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
    });
    var canceled = !elem.dispatchEvent(evt);
};

var sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var getPrintRand = (max, str) => {
    rand = Math.floor(Math.random() * max);
    console.log(str + " - random: " + rand + " seconds");
    return rand;
}

MAX_AGE = 47;
MIN_AGE = 24
MAX_DISTANCE = 15;
BROKEN_CREDENTIALS = ["+", "ילד", "אמא", "mom", "נסיך", "נסיכה", "פלוס"];

var like = document.querySelector(".encounters-action--like");
var pass = document.querySelector(".encounters-action--dislike");

var randSleepMain = Math.floor(Math.random() * 10)
console.log("Initial sleep " + randSleepMain + " Milliseconds");


var getProtect = className => {
    var temp = $("." + className);
    return temp ? temp.textContent : "";
}

var getUserDetails = () => {
    var user = {}
    nameAge = getProtect("encounters-story-profile__name");
    nameAge = nameAge.split(',');
    user.name = nameAge[0];
    user.age = nameAge[1].trim();
    user.profession = getProtect("encounters-story-profile__occupation");
    user.education = getProtect("encounters-story-profile__education");
    user.about = getProtect("encounters-story-about__text");

    user.city = getProtect("location-widget__town");
    user.distance = getProtect("location-widget__distance");
    if (user.distance) {
        var temp = "~10 km away".split(" ");
        temp = temp[0].split("~");
        user.distance = temp[1];
    }

    // height, exercise, drink, smoke, pets, sign, religion
    user.additionalInfo = [];
    additionalInfo = document.querySelectorAll(".pill__title");
    additionalInfo.forEach(pill => user.additionalInfo.push(pill.innerText));

    return user;
}

var isValidUser = user => {
    var validAge = true;
    var validDistance = true;
    var validAbout = true;
    if (user.age) {
        validAge = user.age < MAX_AGE && user.age > MIN_AGE;
    }
    if (user.distance) {
        validDistance = user.distance < MAX_DISTANCE;
    }
    if (user.about) {
        for (condition in BROKEN_CREDENTIALS) {
            if (user.about).includes(condition) {
                validAbout = false;
                break;
            }
        }
    }
    return validAge && validDistance && validAbout;
}

var main = async () => {
    randUserAmount = getPrintRand(20, "main top");
    console.log("Main addressing: " + randUserAmount + " of users");
    for (i = 0; i < randUserAmount; i++) {
        randLikePass = getPrintRand(20, "for loop");
        randLikePass >= 5 ? simulateClick(like) : simulateClick(pass);
        //console.log("For loop sleeping: " + randLikePass + " seconds between users");
        await sleep(randLikePass * 1000)
    }
}

setInterval(() => {
    randSleepMain = getPrintRand(10 * 1000 * 30, "setInterval top");
    console.log("SetInterval sleeps: " + randSleepMain + " Seconds");
    main()
}, getPrintRand(10 * 1000 * 30, "setInterval bottom"))