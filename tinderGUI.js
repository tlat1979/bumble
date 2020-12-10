var MAX_AGE = 47;
var MIN_AGE = 32;
var MAX_DISTANCE = 15;
var BROKEN_CONDITIONS = ["+", "ילד", "אמא", "mom", "נסיך", "נסיכה", "פלוס"];
var MIN_USERS = 12
var MAX_USERS = 24

sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

var log = (message, level =  "blue") => {
   let now = new Date();
   let time = "[" + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + "] ";
   if (level == "green") console.log('%c' + time + message, 'background: #222; color: #bada55');
   if (level == "red") console.log('%c' + time + message, 'background: #222; color: #FF5733');
   if (level == "blue") console.log('%c' + time + message, 'background: #222; color: #33A8FF');
}

var getTextOrNone = query => {
   let result = document.querySelectorAll(query);
   return (result && result[0] && result[0].textContent) ? result[0].textContent : '';
}

class User {

   likeUser = () => document.querySelectorAll(".button")[2].click();
   passUser = () => document.querySelectorAll(".button")[0].click();
   
   getUserDetails = async MAX_USERS => {
       try {

           // browse the user's pictures for simulating real user actions
           var pix = document.querySelector('.tappable-view').children[3];
           if (pix && pix.children && pix.children.length > 1) {
               for (let i = 1; i < pix.children.length; i++) {
                   await sleep(getRandomInt(1000, 3000));
                   pix.children[i].click();
               }
           }

           // click *i* for more information
           document.querySelectorAll(".focus-button-style > svg")[0].parentElement.click();
           await sleep(getRandomInt(1000, 3000));

           this.name = getTextOrNone('h1');
           this.age = document.querySelectorAll("h1")[0].parentElement.parentElement.children[1].textContent;
           await sleep(getRandomInt(1000, 3000));

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
       let validAge, validDistance,  validAbout = true;

       if (this.age) {
           validAge = this.age < MAX_AGE && this.age >= MIN_AGE;
       }
       if (this.distance) {
           validDistance = this.distance < MAX_DISTANCE;
       }
       if (this.about) {
           for (let i in BROKEN_CONDITIONS) {
               if ((this.about).includes(BROKEN_CONDITIONS[i])) {
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

   printUser = () => console.log(`Name:  ${this.name} | Age: ${this.age} | About: ${this.about}  | Distance ${this.distance} | ${this.moreInfo}`)
}

var addressRandUsers = async () => {

   var d = new Date();
   var timeHours = d.getHours();
   if (timeHours < 17 || timeHours > 23) return;

   let randUsers = getRandomInt(MIN_USERS, MAX_USERS);
   log("Addressing: " + randUsers + " Users");

   for (let i = 0; i < randUsers; i++) {

       var user = new User();
       await user.getUserDetails() && user.isValidUser() ?
           user.likeUser() :
           user.passUser();
       
       var randSleep = getRandomInt(2000, 4000);
       await sleep(randSleep);
       log("User #" + (i + 1) + " Complete. Sleeping Between Users: " + Math.floor(randSleep / 1000) + " Seconds");
       await sleep(getRandomInt(2000, 3000));
       
       var upgradeModal = document.querySelectorAll(".modal-zoom-in .button.focus-button-style");
       if (upgradeModal && upgradeModal[1]) upgradeModal[1].click();

       var match = document.querySelector(".Expand [aria-label=Close]");
       if (match) match.click();

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