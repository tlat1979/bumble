from bumbleConstants import *

class bumble:

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
            print(user["name"] + " " + str(user["age"]) + " " + user["location"] + " " + str(user["distance"]) + user["aboutme_text"])
        print("\n********* BROKEN USERS ********\n")
        for user in brokenUsers:
            print(user["name"] + " " + str(user["age"]) + " " + user["location"] + " " + str(user["distance"]) + user["aboutme_text"])

    def getUsers(self):
        command = 'curl '+ GET_USERS_URL + ' ' + HEADERS + ' ' + GET_USERS_BODY
        #res = os.system(command)

        with open(USERS_FILE_NAME) as json_file:
            responseData = json.load(json_file)
            responseBody = responseData['body'][0]
            userArray = responseBody['client_encounters']['results']

        return self.parseUsers(userArray)

    def parseUsers(self, userArray):
        validUsers, brokenUsers = [], []

        for user in userArray:
            newUser = dict()
            _user = user["user"]

            album = _user["albums"][0]["photos"]
            profile = _user["profile_fields"]
            newUser["name"], newUser["age"], newUser["user_id"], newUser["age"], newUser["their_vote"], newUser["photos"], newUser['city'] = _user["name"], int(_user["age"]), _user["user_id"], _user["age"], _user["their_vote"], [], _user["distance_long"]

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

            validUsers.append(newUser) if self.isValidUser(newUser) else brokenUsers.append(newUser)

        return self.voteOnUsers(validUsers, brokenUsers)

    def voteOnUsers(self, validUsers, brokenUsers):
        for user in validUsers:
            self.voteUser(user, LIKE_VOTE)
        for user in brokenUsers:
            self.voteUser(user, PASS_VOTE)
        self.printUsers(validUsers, brokenUsers)

        # Like vote: 2 = LIKE_VOTE  ////// Pass vote: 3 = PASS_VOTE
    def voteUser(self, user, vote):  
        rand = randint(6, 22)
        print("voteUser - Sleeping: "+str(rand)+" Seconds")
        time.sleep(rand)
        command = 'curl ' + VOTE_USER_URL + ' ' + HEADERS + VOTE_USER_BODY_A + user["user_id"] + VOTE_USER_BODY_B + str(vote) + VOTE_USER_BODY_C
        #res = os.system(command)

        userDetails = user["name"] + " " + str(user["age"]) + " " + user["city"] + " " + str(user["distance"])
        command2 = '''echo "'''+userDetails+'''" >> '''
        if vote is LIKE_VOTE:
            os.system(command2 + LIKE_FILE_NAME)
        else:
            os.system(command2 + PASS_FILE_NAME)


b = bumble()
b.getUsers()
