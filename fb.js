// USING PAGE: https://m.facebook.com/friends/center/suggestions

// UTIL FUNCTIONS

var UTILS = {

    getRandomWait: () => {
        const MIN = 5;
        const MAX = 12;
        let rand = randUserAmount = 1000 * Math.floor(Math.random() * (MAX - MIN) + MIN);
    },

    sleep: ms => {
        console.log("Sleeping " + ms / 1000 + " Seconds");
        return new Promise(resolve => setTimeout(resolve, ms));
    },

    getUrl: async url => {
        let response = await fetch(url);
        let html = await response.text();
        let aboutPageDomParser = new DOMParser();
        return aboutPageDomParser.parseFromString(html, "text/html");

    },

    // load more users
    scroll: () => {
        window.scroll({
            top: 4000,
            left: 0,
            behavior: 'smooth'
        });
    },
}


var USERS = {

    getSuggestions: () => document.querySelectorAll("[data-sigil='undoable-action'] h3 a, [data-sigil='undoable-action'] h1 a"),

    parseSuggestions: async suggestions => {
        parsedSuggestions = [];

        for await (i of Array.from(Array(3).keys())) {
            let user = {};

            user.name = suggestions[i].text;
            user.url = user.url = suggestions[i].href.split('?')[0];

            user.aboutPageDoc = await UTILS.getUrl(user.url + "/about");
            user.aboutSections = user.aboutPageDoc.querySelectorAll("[data-sigil='profile-card']");
            USERS.parseUserSections(user);
            parsedSuggestions[i] = user;

            await UTILS.sleep(UTILS.getRandomWait());

        }
        return parsedSuggestions;
    },

    parseUserSections: async user => {

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
            if (section.id == "basic-info") user["basic-info"] = section.querySelectorAll("._5cdv")[0].textContent;

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
    },
}

var main = async () => {

    UTILS.scroll();
    let suggestions = await USERS.getSuggestions();
    let parsedSuggestions = await USERS.parseSuggestions(suggestions);
    console.log(parsedSuggestions);
}




//     friends.forEach(async f => {
//         let url = f.href.split('?');
//         console.log(f.text + " " + url[0]);

//         //$$("[data-sigil='profile-card']")


//         var res = await getUrl(url[0]+"/about")
//         console.log(res);
//         //https://m.facebook.com/profile.php?v=info&id=100006567487010
//     });