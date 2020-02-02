var mockMatches = require('./matches.json');
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

    album.forEach(photo => {
        newUser.photos.push("https:" + photo.large_url);
    });

    profile.forEach(field => {
        newUser[field.id] = field.display_value;
    });
    parsedUsers.push(newUser);
});

console.log(parsedUsers);