# import pycurl
# import re

# crl = pycurl.Curl()
# crl.setopt(crl.URL, 'https://bumble.com/mwebapi.phtml?SERVER_GET_ENCOUNTERS')
# headers = [
#     'Connection: keep-alive',
#     'Pragma: no-cache',
#     'Cache-Control: no-cache',
#     'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36',
#     'x-use-session-cookie: 1',
#     'Content-Type: json',
#     'Accept: */*',
#     'Origin: https://bumble.com',
#     'Sec-Fetch-Site: same-origin',
#     'Sec-Fetch-Mode: cors'
#     'Referer: https://bumble.com/app',
#     'Accept-Encoding: gzip, deflate, br',
#     'Accept-Language: en-US,en;q=0.9,he-IL;q=0.8,he;q=0.7',
#     'Cookie: session_cookie_name=session; device_id=2a6ab11f-b11f-1fe1-e11d-1d4594af623f; cookie_banner_closed=true; aid=725246466; HDR-X-User-id=725246466; session=s1:30:vd8V1Huc0Swww2L809MMslyGiH2aG2PIYN5PgIC9'
# ]

# body = '{"body":[{"message_type":81,"server_get_encounters":{"number":10,"context":1,"user_field_filter":{"projection":[210,370,200,230,490,540,530,560,291,732,890,930,662,570,380,493,1140,1150,1160,1161],"request_albums":[{"album_type":7},{"album_type":12,"external_provider":12,"count":8}],"game_mode":0,"request_music_services":{"top_artists_limit":8,"supported_services":[29],"preview_image_size":{"width":120,"height":120}}}}}],"message_id":7,"message_type":81,"version":1,"is_background":false}'
# cleandata = re.escape(body)
# crl.setopt(crl.HTTPHEADER, headers)
# crl.setopt(crl.POSTFIELDS, cleandata)
# crl.perform()
# crl.close()

import json
import os
import subprocess
import re
# command = '''curl 'https://bumble.com/mwebapi.phtml?SERVER_GET_ENCOUNTERS' -H 'Connection: keep-alive' -H 'Pragma: no-cache' -H 'Cache-Control: no-cache' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36' -H 'x-use-session-cookie: 1' -H 'Content-Type: json' -H 'Accept: */*' -H 'Origin: https://bumble.com' -H 'Sec-Fetch-Site: same-origin' -H 'Sec-Fetch-Mode: cors' -H 'Referer: https://bumble.com/app' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: en-US,en;q=0.9,he-IL;q=0.8,he;q=0.7' -H 'Cookie: session_cookie_name=session; device_id=2a6ab11f-b11f-1fe1-e11d-1d4594af623f; cookie_banner_closed=true; aid=725246466; HDR-X-User-id=725246466; session=s1:30:vd8V1Huc0Swww2L809MMslyGiH2aG2PIYN5PgIC9' --data-binary '{"body":[{"message_type":81,"server_get_encounters":{"number":10,"context":1,"user_field_filter":{"projection":[210,370,200,230,490,540,530,560,291,732,890,930,662,570,380,493,1140,1150,1160,1161],"request_albums":[{"album_type":7},{"album_type":12,"external_provider":12,"count":8}],"game_mode":0,"request_music_services":{"top_artists_limit":8,"supported_services":[29],"preview_image_size":{"width":120,"height":120}}}}}],"message_id":7,"message_type":81,"version":1,"is_background":false}' --compressed > 1.txt'''
# res = os.system(command)

# f = open("1.txt", "r")
# contents = f.read()
with open('1.txt') as json_file:
    data = json.load(json_file)
    # datastore = json.loads(json_string)
    # person_dict = json.loads(re.escape(contents))
    print(json.dumps(data, indent=4, sort_keys=True))
