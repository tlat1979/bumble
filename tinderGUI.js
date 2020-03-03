class User {

    constructor() {
        this.MAX_AGE = 47;
        this.MIN_AGE = 24
        this.MAX_DISTANCE = 21;
        this.BROKEN_CONDITIONS = ["+", "ילד", "אמא", "mom", "נסיך", "נסיכה", "פלוס"];

    }

    getUserDetails = () => {
        try {
            this.users = $$(".recCard__info")[1] || [];
            this.name = this.users.children[0].children[0].children[0].textContent || "";
            this.age = this.users.children[0].children[0].children[1].textContent || 0;
            this.about = this.users.children[1].textContent || "";
            this.distance = $$(".Row").length > 0 ? $$(".Row")[0].textContent : 0;
            this.moreInfo = $$(".Row").length > 1 ? $$(".Row")[1].textContent : "";
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

        if (this.user.age) {
            validAge = this.age < this.MAX_AGE && this.age > this.MIN_AGE;
        }
        if (this.user.distance) {
            validDistance = this.distance < this.MAX_DISTANCE;
        }
        if (this.about) {
            for (let i in this.BROKEN_CONDITIONS) {
                if ((this.user.about).includes(this.BROKEN_CONDITIONS[i])) {
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

var main = () => {
    var users, name, age, about = '';

    var user = new User();
    if (user.getUserDetails())
        user.printUser();
} 
