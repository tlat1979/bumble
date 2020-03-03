$$("[aria-label='Like']")[0].click()
$$("[aria-label='Nope']")[0].click()






class User {
    consructor(name = "", age = 0, about = "") {
        this.name, this.age, this.about = name, age, about;
    };


    printUser = () => {
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

    var user = new User(name, age, about);
    user.printUser();



    //currentUser = new User();

    // users.forEach(user => console.log(user.textContent))

    // a[0] next user
    // a[1] current user
    // a[2] prev user


} 
