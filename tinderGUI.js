// $$("[aria-label='Like']")[0].click()
// $$("[aria-label='Nope']")[0].click()






class User {
    constructor(options) {
        this.name = options.name || "N/A";
        this.age = options.age || 0;
        this.about = options.about || "N/A";
    };


    printUser() {
        console.log("Name: " + this.name + " Age: " + this.age + " About: " + this.about);
    };
}

var main = () => {
    var users, name, age, about = '';

    try {
        users = $$(".recCard__info");
        name = users[1].children[0].children[0].children[0].textContent;
        age = users[1].children[0].children[0].children[1].textContent;
        about = users[1].children[1].textContent
    }
    catch (e) {
        console.warn(e);
        return;
    }

    var user = new User({
        name: name,
        age: age,
        about: about
    });

    user.printUser();



    //currentUser = new User();

    // users.forEach(user => console.log(user.textContent))

    // a[0] next user
    // a[1] current user
    // a[2] prev user


} 
