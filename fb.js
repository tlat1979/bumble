var getUrl = async url => {
    var response = await fetch(url);
    return await response.text();
}

// USING PAGE: https://m.facebook.com/friends/center/suggestions

var main = async () => {

    // load more users
    window.scroll({ top: 4000, left: 0, behavior: 'smooth' });

    let user = {}
    let friends = document.querySelectorAll("[data-sigil='undoable-action'] h3 a, [data-sigil='undoable-action'] h1 a");
    user.name = friends[0].text;
    user.url = friends[0].href.split('?')[0];

    let userAboutPage = await getUrl(user.url + "/about");
    let aboutPageDomParser = new DOMParser();
    user.aboutPageDoc = aboutPageDomParser.parseFromString(userAboutPage, "text/html");

    user.aboutSections = user.aboutPageDoc.querySelectorAll("[data-sigil='profile-card']");

    user.aboutSections.forEach(section => {
        section.id != "" ?
            user[section.id] = section.textContent :
            user[section.textContent] = section.textContent ;

        if (section.textContent == "Photos") {
            user.photos = []

            let temp = section.querySelectorAll("a i");
            temp.forEach(t => user.photos.push(t.style.background.split('"')[1])) //[3].style.background.split('"');
            console.log(9);
        }
    });


    console.log(1);

    //     friends.forEach(async f => {
    //         let url = f.href.split('?');
    //         console.log(f.text + " " + url[0]);

    //         //$$("[data-sigil='profile-card']")


    //         var res = await getUrl(url[0]+"/about")
    //         console.log(res);
    //         //https://m.facebook.com/profile.php?v=info&id=100006567487010
    //     });
}