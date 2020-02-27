var getUrl = async url => {
    var response = await fetch(url);
    return await response.text();
}

// USING PAGE: https://m.facebook.com/friends/center/suggestions

var main = async () => {

    // load more users
    window.scroll({
        top: 4000,
        left: 0,
        behavior: 'smooth'
    });

    let users = [];
    let friends = document.querySelectorAll("[data-sigil='undoable-action'] h3 a, [data-sigil='undoable-action'] h1 a");
    for (let i = 0; i < 3; i++) {
        let user = {};

        user.name = friends[i].text;
        user.url = friends[i].href.split('?')[0];

        let userAboutPage = await getUrl(user.url + "/about");
        let aboutPageDomParser = new DOMParser();
        user.aboutPageDoc = aboutPageDomParser.parseFromString(userAboutPage, "text/html");

        user.aboutSections = user.aboutPageDoc.querySelectorAll("[data-sigil='profile-card']");

        user.aboutSections.forEach(section => {
            if (section.id == "") {
                let mutualFriends = section.querySelectorAll("strong");
                if (mutualFriends && mutualFriends.length > 0) {
                    user.mutualFriends = [];
                    mutualFriends.forEach(f => user.mutualFriends.push(f.textContent));
                }
            }

            section.id != "" ?
                user[section.id] = section.textContent :
                user[section.textContent] = section.textContent;

            if (section.id == "living") {
                user.living = [];
                let temp = section.querySelectorAll("a");
                temp.forEach(c => user.living.push(c.text));
            }

            if (section.id == "family") user.family = section.querySelectorAll("a");
            if (section.id == "relationship") user.relationship = section.querySelectorAll("h3");
            if (section.id == "basic-info") user.info = section.querySelectorAll("._5cdv")[0].textContent;

            if (section.id == "work") user.work = section.querySelectorAll("a")[1].text;
            if (section.id == "education") user.education = section.querySelectorAll("a")[1].text;

            if (section.textContent == "Videos") {
                user.Videos = [];
            }

            if (section.textContent == "Photos") {
                user.Photos = []

                let temp = section.querySelectorAll("a i");
                temp.forEach(t => user.Photos.push(t.style.background.split('"')[1])) //[3].style.background.split('"');
                console.log(9);
            }
        });

        users[i] = user;
    }


    console.log(users);

    //     friends.forEach(async f => {
    //         let url = f.href.split('?');
    //         console.log(f.text + " " + url[0]);

    //         //$$("[data-sigil='profile-card']")


    //         var res = await getUrl(url[0]+"/about")
    //         console.log(res);
    //         //https://m.facebook.com/profile.php?v=info&id=100006567487010
    //     });
}