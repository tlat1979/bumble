var log = (message, level) => {
    if (!level || (level != "green" && level != "red")) {
        console.log(message);
        return;
    }
    switch (level) {
        case "green":
            console.log('%c' + message, 'background: #222; color: #bada55');
            break;
        case "red":
            console.log('%c' + message, 'background: #222; color: #FF5733');
            break;
        case "blue":
            console.log('%c' + message, 'background: #222; color: #33A8FF');
            break;
    }
}

class Utils {

    constructor() {
        this.MAX_AGE = 47;
        this.MIN_AGE = 24
        this.MAX_DISTANCE = 15;
        this.BROKEN_CREDENTIALS = ["+", "ילד", "אמא", "mom", "נסיך", "נסיכה", "פלוס"];
        this.HOUR = 60 * 60;

        this.like = document.querySelector(".encounters-action--like");
        this.pass = document.querySelector(".encounters-action--dislike");

        this.randSleepMain = Math.floor(Math.random() * 10)
        log("Initial sleep " + this.randSleepMain + " Milliseconds", "blue");
    }

    simulateClick = elem => {
        let evt = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        });
        let canceled = !elem.dispatchEvent(evt);
    }

    sleep = ms => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    getPrintRand(min, max, str) {
        let rand = Math.floor(Math.random() * (max - min) + min);
        log(str + " - random: " + rand + " seconds", "blue");
        return rand;
    }


    getProtect = className => {
        var temp = document.querySelector("." + className);
        return temp ? temp.textContent : "";
    }


}

class Bumble {
    constructor() {
        this.utils = new Utils();
        this.user = {};
    }

    getUserDetails = () => {
        let nameAge = this.utils.getProtect("encounters-story-profile__name");
        nameAge = nameAge.split(',');
        this.user.name = nameAge[0];
        this.user.age = nameAge[1].trim();
        this.user.profession = this.utils.getProtect("encounters-story-profile__occupation");
        this.user.education = this.utils.getProtect("encounters-story-profile__education");
        this.user.about = this.utils.getProtect("encounters-story-about__text");

        this.user.city = this.utils.getProtect("location-widget__town");
        this.user.distance = this.utils.getProtect("location-widget__distance");
        if (this.user.distance) {
            let temp = this.user.distance.split(" ");
            temp = temp[0].split("~");
            this.user.distance = temp[1];
        }

        // height, exercise, drink, smoke, pets, sign, religion
        this.user.additionalInfo = [];
        let additionalInfo = document.querySelectorAll(".pill__title");
        additionalInfo.forEach(pill => this.user.additionalInfo.push(pill.innerText));
    }

    isValidUser = () => {
        let validAge = true;
        let validDistance = true;
        let validAbout = true;
        if (this.user.age) {
            validAge = this.user.age < this.utils.MAX_AGE && this.user.age > this.utils.MIN_AGE;
        }
        if (this.user.distance) {
            validDistance = this.user.distance < this.utils.MAX_DISTANCE;
        }
        if (this.user.about) {
            for (let i in this.utils.BROKEN_CREDENTIALS) {
                if ((this.user.about).includes(this.utils.BROKEN_CREDENTIALS[i])) {
                    validAbout = false;
                    break;
                }
            }
        }
        let details = "Name " + this.user.name + " | Age " + this.user.age + " | Distance " + this.user.distance + " | About " + this.user.about;
        validAge && validDistance && validAbout ?
            log("Liked: " + details, "green") :
            log("Passed: " + details, "red");
        return validAge && validDistance && validAbout;
    }
}

var main = async () => {

    let bumble = new Bumble();
    randUserAmount = bumble.utils.getPrintRand(5, 20, "main top");
    let arr = Array.from(Array(randUserAmount).keys())
    log("Main addressing: " + randUserAmount + " of users", "blue");

    for await (i of arr) {
        log("User #" + (i + 1) + " out of " + randUserAmount, "blue");
        bumble.getUserDetails();
        bumble.isValidUser() ? bumble.utils.simulateClick(bumble.utils.like) : bumble.utils.simulateClick(bumble.utils.pass);
        let randSleep = bumble.utils.getPrintRand(5, 20, "randSleep for loop");
        await bumble.utils.sleep(randSleep * 1000);
    }
    log("Done", "blue");
}

let bumble = new Bumble();
setInterval(() => {
    var d = new Date();
    var timeHours = d.getHours();
    if (timeHours < 8 || timeHours > 23) return;

    randSleepMain = bumble.utils.getPrintRand(bumble.utils.HOUR * 3000, bumble.utils.HOUR * 5000, "setInterval top");
    log("SetInterval sleeps: " + randSleepMain / (bumble.utils.HOUR * 1000) + " Hours");
    main();
}, bumble.utils.getPrintRand(bumble.utils.HOUR * 1000, bumble.utils.HOUR * 5000, "setInterval bottom"));