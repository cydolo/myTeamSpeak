# myTeamSpeak
![#f03c15](https://placehold.it/15/f03c15/000000?text=+) `Some things are not directly related to myteamspeak, it is also good to know.`  
![#c5f015](https://placehold.it/15/c5f015/000000?text=+) `Here is a detailed documentation about myTeamSpeak.`

# Session
So that all requests can be assigned correctly to each user, a session is created. The session is 36 characters long and is structured as follows:

| Random (8)  | - | Random (4) | - | Random (4) | - | Random (4) | - | Random (12) |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| b842fedc  | - | f4f4 | - | 4661 | - | a886 | - | ee427982ae78 |
```
b842fedc-f4f4-4661-a886-ee427982ae78
```
The client sends this generated session with a POST request
```
POST: https://clientapi.myteamspeak.com/authentication
```
| parameter  |  session |
| ------------- | ------------- |
| session  | *your session*
```
session$your_session
```
# Login
To synchronize everything you have to be logged in first, a POST request will be sent:  
```
POST: https://clientapi.myteamspeak.com/authentication
```
The request-body is sent with login, email and the hashed password:

| parameter  |  email |  password (hashed) |
| ------------- | ------------- | ------------- |
| login  | yourmail@gmail.de | *hashed password* |

```
login yourmail@gmail.com@hashed password
```

# Logout
The client deletes the session when logging out, the following POST will be sent for this
```
POST: https://clientapi.myteamspeak.com/authentication
```
The request body consists of deleteSession and the current session

| parameter  |  session |
| ------------- | ------------- |
| deleteSession  | *your session* |

```
deleteSession$your_session
```
