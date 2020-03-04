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

class User {

    constructor() {
        this.MAX_AGE = 47;
        this.MIN_AGE = 24
        this.MAX_DISTANCE = 21;
        this.BROKEN_CONDITIONS = ["+", "ילד", "אמא", "mom", "נסיך", "נסיכה", "פלוס"];

    }

    likeUser = () => $$("[aria-label='Like']")[0].click();
    passUser = () => $$("[aria-label='Nope']")[0].click();

    sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

    getOrNone = query => $$(query) || '';


    getUserDetails = async () => {
        try {
            // click *i* for more information
            $$(".focus-button-style > svg")[0].parentElement.click();
            this.name = $$("h1")[0].textContent
            this.moreInfo = $$(".Row");
            this.about = $$(".BreakWord")[0].textContent
            this.age = $$(".Ell")[0].parentElement.children[1].textContent

            this.distance = 0;
            this.extraInfo = [];
            if (this.moreInfo && this.moreInfo.length > 0) {
                this.moreInfo.forEach(row => {
                    let dis = row.textContent;
                    dis.includes("kilometers") ?
                        this.distance = dis.split(" ")[0] :
                        this.extraInfo.push(row.textContent);
                });
            }
            return true;
        }
        catch (e) {
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
                    validAbout = false;
                    break;
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

var main = async () => {
    var users, name, age, about = '';

    var user = new User();
    await user.getUserDetails() && user.isValidUser() // ?
    // user.likeUser() : user.passUser();
    console.log(user);
}

