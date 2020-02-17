var log = (message, level) => {
    let now = new Date();
    let time = "[" + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + "] ";
    if (!level || (level != "green" && level != "red" && level != "blue")) {
        console.log(time + message);
        return;
    }
    switch (level) {
        case "green":
            console.log('%c' + time + message, 'background: #222; color: #bada55');
            break;
        case "red":
            console.log('%c' + time + message, 'background: #222; color: #FF5733');
            break;
        case "blue":
            console.log('%c' + time + message, 'background: #222; color: #33A8FF');
            break;
    }
}

class Utils {

    constructor() {
        this.MAX_AGE = 47;
        this.MIN_AGE = 24
        this.MAX_DISTANCE = 15;
        this.BROKEN_CONDITIONS = ["+", "ילד", "אמא", "mom", "נסיך", "נסיכה", "פלוס"];
        this.MILLISECOND_TO_HOUR = 60 * 60 * 1000;
        this.HOUR_TO_MILLISECOND = 1 / (60 * 60 * 1000);
        this.randSleepMain = this.getPrintRand(this.MILLISECOND_TO_HOUR * 2, this.MILLISECOND_TO_HOUR * 5, "Initial sleep");

        this.like = document.querySelector(".encounters-action--like");
        this.pass = document.querySelector(".encounters-action--dislike");
    }

    simulateClick = elem => {
        let evt = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        });
        let canceled = !elem.dispatchEvent(evt);
    }

    sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

    // milliseconds
    getPrintRand(min, max, str) {
        let rand = Math.floor(Math.random() * (max - min) + min);
        log(str + " Sleeping: " + this.msToTime(rand) + " seconds", "blue");
        return rand;
    }

    getProtect = className => {
        var temp = document.querySelector("." + className);
        return temp ? temp.textContent : "";
    }

    msToTime = duration => {
        let milliseconds = parseInt((duration % 1000) / 100),
            seconds = Math.floor((duration / 1000) % 60),
            minutes = Math.floor((duration / (1000 * 60)) % 60),
            hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours + ":" + minutes + ":" + seconds;
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
        if (this.user.name == "") return false;
        this.user.age = nameAge[1].trim();
        this.user.profession = this.utils.getProtect("encounters-story-profile__occupation");
        this.user.education = this.utils.getProtect("encounters-story-profile__education");
        this.user.about = this.utils.getProtect("encounters-story-about__text");
        this.user.city = this.utils.getProtect("location-widget__town");
        this.user.distance = this.utils.getProtect("location-widget__distance");
        if (this.user.distance) {
            let temp = this.user.distance.split(" ");
            let temp1 = temp[0].split("~");
            this.user.distance = (Array.isArray(temp1)) ? temp1[0] : temp1[1];
        }

        // height, exercise, drink, smoke, pets, sign, religion
        this.user.additionalInfo = [];
        let additionalInfo = document.querySelectorAll(".pill__title");
        additionalInfo.forEach(pill => this.user.additionalInfo.push(pill.innerText));
        return true;
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
            for (let i in this.utils.BROKEN_CONDITIONS) {
                if ((this.user.about).includes(this.utils.BROKEN_CONDITIONS[i])) {
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

    // random user amount: 5 - 20
    let randUserAmount = Math.floor(Math.random() * (20 - 5) + 5);
    log("Main addressing: " + randUserAmount + " of users", "blue");
    let arr = Array.from(Array(randUserAmount).keys())

    for await (i of arr) {
        log("User #" + (i + 1) + " out of " + randUserAmount, "blue");
        let ret = bumble.getUserDetails();
        if (!ret) {
            log("NO USERS FOUND", "red");
            return;
        }
        bumble.isValidUser() ? bumble.utils.simulateClick(bumble.utils.like) : bumble.utils.simulateClick(bumble.utils.pass);
        let randSleep = bumble.utils.getPrintRand(5 * 1000, 20 * 1000, "randSleep for loop");
        await bumble.utils.sleep(randSleep);
    }
    log("Done", "blue");
}


var repeatQuery = () => {
    let bumble = new Bumble();
    var HOUR = bumble.utils.MILLISECOND_TO_HOUR;
    setInterval(() => {
        var d = new Date();
        var timeHours = d.getHours();
        if (timeHours < 8 || timeHours > 23) return;

        randSleepMain = bumble.utils.getPrintRand(HOUR * 2, HOUR * 5, " setInterval top");
        log("SetInterval sleeps: " + randSleepMain * HOUR + " Hours");
        main();
    }, bumble.utils.getPrintRand(HOUR * 2, HOUR * 5, " setInterval bottom"));
}