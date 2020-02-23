var getUrl = async url => {
    var response = await fetch(url)
    var data = await response.text()
    console.log(data)
}

// USING PAGE: https://m.facebook.com/friends/center/suggestions

var main = async () => {

    window.scroll({
        top: 4000,
        left: 0,
        behavior: 'smooth'
    });


    var friends = document.querySelectorAll("[data-sigil='undoable-action'] h3 a, [data-sigil='undoable-action'] h1 a");

    friends.forEach(async f => {
        let url = f.href.split('?');
        console.log(f.text + " " + url[0]);
        //await getUrl(url[0]+"/about?section=relationship")
    });
}