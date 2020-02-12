from datetime import datetime, timezone
from random import randint
import json
import time
import pytz
import os




USERS_FILE_NAME = "users3.json"
LIKE_FILE_NAME = "likedUsers.json"
PASS_FILE_NAME = "passedUsers.json"
VOTE_LOG_FILE_NAME = "votes.json"

BASE_BUMBLE_URL = '\'https://bumble.com/mwebapi.phtml?'
GET_USERS_URL = BASE_BUMBLE_URL + 'SERVER_GET_ENCOUNTERS\''
VOTE_USER_URL = BASE_BUMBLE_URL + 'SERVER_ENCOUNTERS_VOTE\''

BASE_HEADERS = '''-H 'Connection: keep-alive' -H 'Pragma: no-cache' -H 'Cache-Control: no-cache' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36' -H 'x-use-session-cookie: 1' -H 'Content-Type: json' -H 'Accept: */*' -H 'Origin: https://bumble.com' -H 'Sec-Fetch-Site: same-origin' -H 'Sec-Fetch-Mode: cors' -H 'Referer: https://bumble.com/app' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: en-US,en;q=0.9,he-IL;q=0.8,he;q=0.7' -H 'Cookie: session_cookie_name=session; device_id=2a6ab11f-b11f-1fe1-e11d-1d4594af623f; cookie_banner_closed=true; aid=725246466; HDR-X-User-id=725246466; ''' 
SESSION_ID = 'session=s1:30:vd8V1Huc0Swww2L809MMslyGiH2aG2PIYN5PgIC9'
HEADERS = BASE_HEADERS + SESSION_ID + '\''

GET_USERS_BODY =  '''--data-binary '{"body":[{"message_type":81,"server_get_encounters":{"number":10,"context":1,"user_field_filter":{"projection":[210,370,200,230,490,540,530,560,291,732,890,930,662,570,380,493,1140,1150,1160,1161],"request_albums":[{"album_type":7},{"album_type":12,"external_provider":12,"count":8}],"game_mode":0,"request_music_services":{"top_artists_limit":8,"supported_services":[29],"preview_image_size":{"width":120,"height":120}}}}}],"message_id":7,"message_type":81,"version":1,"is_background":false}' --compressed > ''' + USERS_FILE_NAME

VOTE_USER_BODY_A = ''' --data-binary '{"body":[{"message_type":80,"server_encounters_vote":{"person_id":\"'''
VOTE_USER_BODY_B = '''\","vote":'''
VOTE_USER_BODY_C = ''',"vote_source":1,"game_mode":0}}],"message_id":13,"message_type":80,"version":1,"is_background":false}' --compressed >> ''' + VOTE_LOG_FILE_NAME

LIKE_VOTE = 2
PASS_VOTE = 3

MIN_VOTE_SEC = 6
MAX_VOTE_SEC = 22

MIN_AGE = 24
MAX_AGE = 47

MAX_DISTANCE = 15.0
KIDS_PHRASES = [' ילד ', ' ילדה ', ' + ', '+', ' פלוס ', ' אמא ', ' נסיך ', ' נסיכה ']


def getCurrentDateTime():
    tz = pytz.timezone('Israel')
    israel_now = datetime.now(tz)
    return "["+str(israel_now).split('.')[0]+"] "