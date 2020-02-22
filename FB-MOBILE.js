var fbmain = async () => {

    var res = await fetch("https://m.facebook.com/friends/center/suggestions/?mff_nav=1", {
        "credentials": "include",
        "headers": {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:72.0) Gecko/20100101 Firefox/72.0",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.5",
            "Upgrade-Insecure-Requests": "1"
        },
        "method": "GET",
        "mode": "cors"
    });
    var fb = await res.text();
    let domparser = new DOMParser()
    let doc = domparser.parseFromString(fb, "text/html");

    console.log(doc);

}