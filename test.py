import json
import os

VALID_LOCATIONS = ['Tel Aviv', 'Ramat Aviv', 'Ramat Gan', 'Giv`atayim', 'Bat Yam', 'H̱olon', 'Ramat HaSharon', 'Yehud', 'Yafo', 'Herzliyya', 'Kfar Saba', 'Nes Ziyyona', 'Qiryat Ono', 'Ra`ananna', 'Ramat H̱en',
                   'Hod HaSharon', 'Gelilot', 'Ramat H̱ayyal', 'Rishon LeẔiyyon', 'Hadar Yosef', 'Ramat H̱en', 'Giv`at Shemu’el', 'Ezra Uviẕẕaron', 'Qiryat Shalom', 'Kefar Gannim', 'Gan H̱ayyim', 'Reẖovot', 'Petaẖ Tiqwa', 'Herzliyya']
LOCAL_FILE_NAME = "users2.json"

MIN_AGE = 24
MAX_AGE = 47

MAX_DISTANCE = 15.0
KIDS_PHRASES = [' ילד ', ' ילדה ', ' + ',
                ' פלוס ', ' אמא ', ' נסיך ', ' נסיכה ']


class user:
    def __init__(self, user_json):
        self.has_user_voted = user_json.user_json
        self.name = user_json['user']['name']


class bumble:

    def isValidUser(self, user):
        validKids = True
        for phrase in KIDS_PHRASES:
            if not user['aboutme_text'].find(phrase):
                validKids = False

        validAge = user['age'] >= MIN_AGE and user["age"] <= MAX_AGE
        validDistance = user['distance'] <= MAX_DISTANCE
        return validKids and validAge and validDistance

    def getUsers(self):
        # command = '''curl 'https://bumble.com/mwebapi.phtml?SERVER_GET_ENCOUNTERS' -H 'Connection: keep-alive' -H 'Pragma: no-cache' -H 'Cache-Control: no-cache' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36' -H 'x-use-session-cookie: 1' -H 'Content-Type: json' -H 'Accept: */*' -H 'Origin: https://bumble.com' -H 'Sec-Fetch-Site: same-origin' -H 'Sec-Fetch-Mode: cors' -H 'Referer: https://bumble.com/app' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: en-US,en;q=0.9,he-IL;q=0.8,he;q=0.7' -H 'Cookie: session_cookie_name=session; device_id=58c2b8be-b8be-be15-1510-1045ebb25daa; aid=725246466; HDR-X-User-id=725246466; cookie_banner_closed=true; session=s1:30:txDLv83CBdSjsuFlXnIwDtYHVF6axKxXC6D2SQAM' --data-binary '{"body":[{"message_type":81,"server_get_encounters":{"number":10,"context":1,"user_field_filter":{"projection":[210,370,200,230,490,540,530,560,291,732,890,930,662,570,380,493,1140,1150,1160,1161],"request_albums":[{"album_type":7},{"album_type":12,"external_provider":12,"count":8}],"game_mode":0,"request_music_services":{"top_artists_limit":8,"supported_services":[29],"preview_image_size":{"width":120,"height":120}}}}}],"message_id":8,"message_type":81,"version":1,"is_background":false}' --compressed > ''' + LOCAL_FILE_NAME
        # res = os.system(command)

        with open(LOCAL_FILE_NAME) as json_file:
            responseData = json.load(json_file)
            responseBody = responseData['body'][0]
            userArray = responseBody['client_encounters']['results']

        return self.parseUsers(userArray)

    def parseUsers(self, userArray):
        validUsers = []
        brokenUsers = []

        for user in userArray:
            newUser = dict()

            _user = user["user"]

            album = _user["albums"][0]["photos"]
            profile = _user["profile_fields"]

            newUser["name"], newUser["age"] = _user["name"], _user["age"]
            newUser["user_id"], newUser["age"] = _user["user_id"], _user["age"]
            newUser["their_vote"], newUser["photos"] = _user["their_vote"], []
            newUser['city'] = _user["distance_long"]

            if "profile_summary" in _user:
                if "primary_text" in _user["profile_summary"]:
                    newUser['summary_primary'] = _user["profile_summary"]["primary_text"]
                if "secondary_text" in _user["profile_summary"]:
                    newUser['summary_secondary'] = _user["profile_summary"]["secondary_text"]

            newUser['distance'] = 0.0
            if "distance_short" in _user:
                newUser['distance'] = float(
                    _user["distance_short"].split(' ')[0].replace('~', ''))

            for photo in album:
                newUser["photos"].append("https:" + photo["large_url"])

            for field in profile:
                newUser[field["id"]] = field["display_value"]

            newUser["age"] = int(newUser["age"])

            validUsers.append(newUser) if self.isValidUser(
                newUser) else brokenUsers.append(newUser)

        print("\n********* VALID USERS ********\n")
        print(validUsers)
        print("\n********* BROKEN USERS ********\n")
        print(brokenUsers)


b = bumble()
b.getUsers()
