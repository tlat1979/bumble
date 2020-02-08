import json
import os


class user:
    def __init__(self, user_json):
        self.has_user_voted = user_json.user_json
        self.name = user_json['user']['name']


class bumble:
    def getUsers(self):
        # command = '''curl 'https://bumble.com/mwebapi.phtml?SERVER_GET_ENCOUNTERS' -H 'Connection: keep-alive' -H 'Pragma: no-cache' -H 'Cache-Control: no-cache' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36' -H 'x-use-session-cookie: 1' -H 'Content-Type: json' -H 'Accept: */*' -H 'Origin: https://bumble.com' -H 'Sec-Fetch-Site: same-origin' -H 'Sec-Fetch-Mode: cors' -H 'Referer: https://bumble.com/app' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: en-US,en;q=0.9,he-IL;q=0.8,he;q=0.7' -H 'Cookie: session_cookie_name=session; device_id=58c2b8be-b8be-be15-1510-1045ebb25daa; aid=725246466; HDR-X-User-id=725246466; cookie_banner_closed=true; session=s1:30:txDLv83CBdSjsuFlXnIwDtYHVF6axKxXC6D2SQAM' --data-binary '{"body":[{"message_type":81,"server_get_encounters":{"number":10,"context":1,"user_field_filter":{"projection":[210,370,200,230,490,540,530,560,291,732,890,930,662,570,380,493,1140,1150,1160,1161],"request_albums":[{"album_type":7},{"album_type":12,"external_provider":12,"count":8}],"game_mode":0,"request_music_services":{"top_artists_limit":8,"supported_services":[29],"preview_image_size":{"width":120,"height":120}}}}}],"message_id":7,"message_type":81,"version":1,"is_background":false}' --compressed > users.json'''
        # res = os.system(command)

        with open('users.json') as json_file:
            responseData = json.load(json_file)
            responseBody = responseData['body'][0]
            userArray = responseBody['client_encounters']['results']

            # [newUser.id, newUser.name, newUser.age, newUser.photos, newUser.their_vote] = [user.user_id, user.name, user.age, [], user.their_vote]

            for user in userArray:
                newUser = dict()

                _user = user["user"]

                album = _user["albums"][0]["photos"]
                profile = _user["profile_fields"]

                newUser["name"], newUser["age"] = _user["name"], _user["age"]
                newUser["user_id"], newUser["age"] = _user["user_id"], _user["age"]
                newUser["their_vote"], newUser["photos"] = _user["their_vote"], []

                # //         album.forEach(photo= > {
            #                 // newUser.photos.push("https:" + photo.large_url)
            #                 // })

            # //         profile.forEach(field= > {
            #     // newUser[field.id]=field.display_value
            #     // })
            # // parsedUsers.push(newUser)

                print(newUser)


b = bumble()
b.getUsers()
