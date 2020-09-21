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

var getTextOrNone = query => {
    let result = document.querySelectorAll(query);
    return (result && result[0] && result[0].textContent) ? result[0].textContent : '';
}

class User {

    constructor() {
        this.MAX_AGE = 47;
        this.MIN_AGE = 24
        this.MAX_DISTANCE = 21;
        this.BROKEN_CONDITIONS = ["+", "ילד", "אמא", "mom", "נסיך", "נסיכה", "פלוס"];

    }

    likeUser = () => document.querySelectorAll("[aria-label='Like']")[0].click();
    passUser = () => document.querySelectorAll("[aria-label='Nope']")[0].click();

    sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

    getUserDetails = async () => {
        try {

            // browse the user's pictures for simulating real user actions
            var pix = document.querySelector('.tappable-view').children[3];
            if (pix && pix.children && pix.children.length > 1) {
                for (let i = 1; i < pix.children.length; i++) {
                    let randWait = Math.floor(Math.random() * 2000);
                    await this.sleep(randWait)
                    pix.children[i].click();
                }
            }

            // click *i* for more information
            document.querySelectorAll(".focus-button-style > svg")[0].parentElement.click();
            await this.sleep(1000);

            this.name = getTextOrNone('h1');
            this.age = document.querySelectorAll("h1")[0].parentElement.parentElement.children[1].textContent;

            this.moreInfo = [];
            this.distance = 0;
            let moreInfo = document.querySelectorAll(".Row");
            if (moreInfo && moreInfo.length > 0) {
                moreInfo.forEach(e => {
                    let distance = e.textContent;
                    distance.includes("kilometers") ?
                        this.distance = distance.split(" ")[0] :
                        this.moreInfo.push(distance);
                });
            }

            this.about = getTextOrNone('.BreakWord');

            return true;
        } catch (e) {
            console.warn(e);
            return false;
        }
    }

    isValidUser = () => {
        let validAge = true;
        let validDistance = true;
        let validAbout = true;

        if (this.age) {
            validAge = this.age < this.MAX_AGE && this.age > this.MIN_AGE;
        }

        if (this.distance) {
            validDistance = this.distance < this.MAX_DISTANCE;
        }
        if (this.about) {
            for (let i in this.BROKEN_CONDITIONS) {
                if ((this.about).includes(this.BROKEN_CONDITIONS[i])) {
                    if (!(this.about).includes("ללא ילדים")) {
                        validAbout = false;
                        break;    
                    }
                }
            }
        }
        let details = "Name " + this.name + " | Age " + this.age + " | Distance " + this.distance + " | About " + this.about;
        validAge && validDistance && validAbout ?
            log("Liked: " + details, "green") :
            log("Passed: " + details, "red");
        return validAge && validDistance && validAbout;
    }

    printUser = () => {
        console.log(
            "Name: " + this.name + " | ",
            "Age: " + this.age + " | ",
            "About: " + this.about + " | ",
            "Distance " + this.distance + " | ",
            "Info " + this.moreInfo + " | "
        );
    }
}

var addressRandUsers = async () => {

    const MIN_USERS = 12
    const MAX_USERS = 24
    const MIN_SLEEP = 2 * 1000 // 2 seconds 
    const MAX_SLEEP = 4 * 1000 // 4 seconds

    var d = new Date();
    var timeHours = d.getHours();
    if (timeHours < 8 || timeHours > 23) return;

    let randUsers = Math.floor(Math.random() * (MAX_USERS - MIN_USERS) + MIN_USERS);
    log("Addressing: " + randUsers + " Users");


    for (let i = 0; i < randUsers; i++) {

        var user = new User();
        await user.getUserDetails() && user.isValidUser() ?
            user.likeUser() :
            user.passUser();

        let randSleep = Math.floor(Math.random() * (MAX_SLEEP - MIN_SLEEP) + MIN_SLEEP);
        log("User #" + (i + 1) + " Complete. Sleeping Between Users: " + Math.floor(randSleep / 1000) + " Seconds");
        await user.sleep(randSleep);
    }
}

var main = async () => {
    const HOUR = 60 * 60 * 1000 // 1 hour in milli
    const MIN_SLEEP = 1 * HOUR // 1 hour 
    const MAX_SLEEP = 3 * HOUR // 3 hours
    let i = 0;
    var user = new User();
    while (true) {
        i++;
        await addressRandUsers();
        let rand = Math.floor(Math.random() * (MAX_SLEEP - MIN_SLEEP) + MIN_SLEEP);
        log("Run #" + i + " Complete. Sleeping between runs: " + Math.floor(rand / HOUR) + " Hours");
        await user.sleep(rand);
    }
}

main();

//$('.tappable-view').children[3].children[1].click()