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


    getUserDetails = async () => {
        try {
            var extendedInfo = $$(".focus-button-style > svg")[0].parentElement.click();
            await this.sleep(1000);
            
            this.name = document.querySelectorAll("h1")[0].textContent;
            this.age = document.querySelectorAll("h1")[0].parentElement.parentElement.children[1].textContent;
            
            this.moreInfo = [];
            let moreInfo = document.querySelectorAll(".Row");
            moreInfo.forEach(e => this.moreInfo.push(e.textContent));

            this.about = document.querySelectorAll(".BreakWord")[0].textContent;
            

            
            // this.users = $$(".recCard__info")[1] || [];
            // this.name = this.users.children[0].children[0].children[0].textContent || "";
            // this.age = this.users.children[0].children[0].children[1].textContent || 0;
            // this.about = this.users.children[1].textContent || "";
            // this.distance = $$(".Row").length > 0 ? $$(".Row")[0].textContent : 0;
            // if (this.distance) this.distance = this.distance.split(' ')[0];
            // this.moreInfo = $$(".Row").length > 1 ? $$(".Row")[1].textContent : "";
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


        // grt more details: $$('svg > title')[1].parentElement.parentElement.click()

        ////////////////////////// FIX ME DISTANCE //////////////////////////////
        if (this.distance) {
            //validDistance = this.distance < this.MAX_DISTANCE;
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

