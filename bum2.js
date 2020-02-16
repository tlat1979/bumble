class Utils {

    constructor() {
        this.MAX_AGE = 47;
        this.MIN_AGE = 24
        this.MAX_DISTANCE = 15;
        this.BROKEN_CREDENTIALS = ["+", "ילד", "אמא", "mom", "נסיך", "נסיכה", "פלוס"];

        this.like = document.querySelector(".encounters-action--like");
        this.pass = document.querySelector(".encounters-action--dislike");

        this.randSleepMain = Math.floor(Math.random() * 10)
        console.log("Initial sleep " + this.randSleepMain + " Milliseconds");
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

    getPrintRand = (max, str) => {
        let rand = Math.floor(Math.random() * max);
        console.log(str + " - random: " + rand + " seconds");
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
            let temp = "~10 km away".split(" ");
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
        let details = "Name " + this.user.name + " | Age " + validAge + " | Distance " + validDistance + " | About " + validAbout;
        validAge && validDistance && validAbout ?
            console.log("Liked: " + details) :
            console.warn("Passed: " + details);
        return validAge && validDistance && validAbout;
    }
}

var main = async () => {

    let bumble = new Bumble();
    randUserAmount = bumble.utils.getPrintRand(20, "main top");
    let arr = Array.from(Array(randUserAmount).keys())
    console.log("Main addressing: " + randUserAmount + " of users");

    for await (i of arr) {
        console.log("User #" + i + " out of " + randUserAmount);
        bumble.getUserDetails();
        bumble.isValidUser() ? bumble.utils.simulateClick(bumble.utils.like) : bumble.utils.simulateClick(bumble.utils.pass);
        let randSleep = bumble.utils.getPrintRand(20, "randSleep for loop");
        await bumble.utils.sleep(randSleep * 1000);
    }
    console.log("Done");
}

// setInterval(() => {
//     randSleepMain = getPrintRand(10 * 1000 * 30, "setInterval top");
//     console.log("SetInterval sleeps: " + randSleepMain + " Seconds");
//     main()
// }, getPrintRand(10 * 1000 * 30, "setInterval bottom"));

main();