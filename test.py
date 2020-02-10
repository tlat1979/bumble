from random import randint
import json
import time
import os

LOCAL_FILE_NAME = "users3.json"
LIKE_FILE_NAME = "likedUsers.json"
PASS_FILE_NAME = "passedUsers.json"

LIKE_VOTE = 2
PASS_VOTE = 3

MIN_AGE = 24
MAX_AGE = 47

MAX_DISTANCE = 15.0
KIDS_PHRASES = [' ילד ', ' ילדה ', ' + ', ' פלוס ', ' אמא ', ' נסיך ', ' נסיכה ']

class bumble:

    # Like vote: 2 = LIKE_VOTE  ////// Pass vote: 3 = PASS_VOTE
    def voteUser(self, user, vote):  
        rand = randint(10, 20)
        print("voteUser - Sleeping: "+str(rand)+" Seconds")
        time.sleep(rand)

        command = '''curl 'https://bumble.com/mwebapi.phtml?SERVER_ENCOUNTERS_VOTE' -H 'Connection: keep-alive' -H 'Pragma: no-cache' -H 'Cache-Control: no-cache' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36' -H 'x-use-session-cookie: 1' -H 'Content-Type: json' -H 'Accept: */*' -H 'Origin: https://bumble.com' -H 'Sec-Fetch-Site: same-origin' -H 'Sec-Fetch-Mode: cors' -H 'Referer: https://bumble.com/app' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: en-US,en;q=0.9,he-IL;q=0.8,he;q=0.7' -H 'Cookie: session_cookie_name=session; device_id=2a6ab11f-b11f-1fe1-e11d-1d4594af623f; cookie_banner_closed=true; aid=725246466; HDR-X-User-id=725246466; session=s1:30:vd8V1Huc0Swww2L809MMslyGiH2aG2PIYN5PgIC9' --data-binary '{"body":[{"message_type":80,"server_encounters_vote":{"person_id":\"'''+user["user_id"]+'''\","vote":'''+str(vote)+''',"vote_source":1,"game_mode":0}}],"message_id":13,"message_type":80,"version":1,"is_background":false}' --compressed >> ''' + LIKE_FILE_NAME
        #res = os.system(command)

        userDetails = user["name"] + " " + str(user["age"]) + " " + user["city"] + " " + str(user["distance"])
        command2 = '''echo "'''+userDetails+'''" >> '''
        if vote is LIKE_VOTE:
            os.system(command2 + LIKE_FILE_NAME)
        else:
            os.system(command2 + PASS_FILE_NAME)

    def isValidUser(self, user):
        validKids = True
        for phrase in KIDS_PHRASES:
            if not user['aboutme_text'].find(phrase):
                validKids = False

        validAge = user['age'] >= MIN_AGE and user["age"] <= MAX_AGE
        validDistance = user['distance'] <= MAX_DISTANCE
        return validKids and validAge and validDistance

    def printUsers(self, validUsers, brokenUsers):
        print("\n********* VALID USERS ********\n")
        for user in validUsers:
            print(user["name"] + " " + str(user["age"]) + " " +
                  user["location"] + " " + str(user["distance"]) + user["aboutme_text"])
        print("\n********* BROKEN USERS ********\n")
        for user in brokenUsers:
            print(user["name"] + " " + str(user["age"]) + " " +
                  user["location"] + " " + str(user["distance"]) + user["aboutme_text"])

    def getUsers(self):
        command = '''curl 'https://bumble.com/mwebapi.phtml?SERVER_GET_ENCOUNTERS' -H 'Connection: keep-alive' -H 'Pragma: no-cache' -H 'Cache-Control: no-cache' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36' -H 'x-use-session-cookie: 1' -H 'Content-Type: json' -H 'Accept: */*' -H 'Origin: https://bumble.com' -H 'Sec-Fetch-Site: same-origin' -H 'Sec-Fetch-Mode: cors' -H 'Referer: https://bumble.com/app' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: en-US,en;q=0.9,he-IL;q=0.8,he;q=0.7' -H 'Cookie: session_cookie_name=session; device_id=2a6ab11f-b11f-1fe1-e11d-1d4594af623f; cookie_banner_closed=true; aid=725246466; HDR-X-User-id=725246466; session=s1:30:vd8V1Huc0Swww2L809MMslyGiH2aG2PIYN5PgIC9' --data-binary '{"body":[{"message_type":81,"server_get_encounters":{"number":10,"context":1,"user_field_filter":{"projection":[210,370,200,230,490,540,530,560,291,732,890,930,662,570,380,493,1140,1150,1160,1161],"request_albums":[{"album_type":7},{"album_type":12,"external_provider":12,"count":8}],"game_mode":0,"request_music_services":{"top_artists_limit":8,"supported_services":[29],"preview_image_size":{"width":120,"height":120}}}}}],"message_id":7,"message_type":81,"version":1,"is_background":false}' --compressed > ''' + LOCAL_FILE_NAME
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
            if "distance_short" in _user and _user["distance_short"] is not '':
                newUser['distance'] = float(
                    _user["distance_short"].split(' ')[0].replace('~', ''))

            for photo in album:
                newUser["photos"].append("https:" + photo["large_url"])

            for field in profile:
                newUser[field["id"]] = field["display_value"]

            newUser["age"] = int(newUser["age"])

            validUsers.append(newUser) if self.isValidUser(newUser) else brokenUsers.append(newUser)

        for user in validUsers:
            self.voteUser(user, LIKE_VOTE)

        for user in brokenUsers:
            self.voteUser(user, PASS_VOTE)

        self.printUsers(validUsers, brokenUsers)


b = bumble()
b.getUsers()
