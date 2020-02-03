const axios = require('axios').default;
var mockMatches = require('./matches.json');


URL = 'https://bumble.com/mwebapi.phtml?SERVER_GET_ENCOUNTERS';

HEADERS = {
    "Host": "bumble.com",
    "Connection": "keep-alive",
    "Content-Length": 492,
    "Pragma": "no-cache",
    "Cache-Control": "no-cache",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
    "x-use-session-cookie": 1,
    "Content-Type": "json",
    "Accept": "*/*",
    "Origin": "https://bumble.com",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-Mode": "cors",
    "Referer": "https://bumble.com/app",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.9,he-IL;q=0.8,he;q=0.7",
    "Cookie": "session_cookie_name=session; device_id=58c2b8be-b8be-be15-1510-1045ebb25daa; aid=725246466; HDR-X-User-id=725246466; cookie_banner_closed=true; session=s1:30:txDLv83CBdSjsuFlXnIwDtYHVF6axKxXC6D2SQAM",
}

BODY = [{
    message_type: 81,
    server_get_encounters: {
        number: 10,
        context: 1,
        user_field_filter: {
            projection: [210, 370, 200, 230, 490, 540, 530, 560, 291, 732, 890, 930, 662, 570, 380, 493, 1140, 1150, 1160, 1161],
            request_albums: [{
                album_type: 7
            }, {
                album_type: 12,
                external_provider: 12,
                count: 8
            }],
            game_mode: 0,
            request_music_services: {
                top_artists_limit: 8,
                supported_services: [29],
                preview_image_size: {
                    width: 120,
                    height: 120
                }
            }
        }
    }
}];

REQUEST = {
    header: HEADERS,
    body: BODY,
    message_id: 7,
    message_type: 81,
    version: 1,
    is_background: false,
    method: "POST",
    mode: "cors"
}

var main = async () => {
    var parsedUsers = [];

    try {
        var users = mockMatches.body[0].client_encounters.results;
    } catch (err) {
        console.error(err);
    }

    users.forEach(user => {
        var user = user.user;
        var album = user.albums[0].photos;
        var newUser = {};
        var profile = user.profile_fields;
        newUser.id = user.user_id;
        newUser.name = user.name;
        newUser.age = user.age;
        newUser.photos = [];
        newUser.their_vote = user.their_vote;

        album.forEach(photo => {
            newUser.photos.push("https:" + photo.large_url);
        });

        profile.forEach(field => {
            newUser[field.id] = field.display_value;
        });
        parsedUsers.push(newUser);
    });

    console.log(parsedUsers);
    console.log(REQUEST);

    getUsers = async () => {
        let res = await axios.get("https://reqres.in/api/users?page=1");
        let { data } = res.data;
        console.log(data)
    };
    await getUsers()
}

main();