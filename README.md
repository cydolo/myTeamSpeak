# myTeamSpeak
![#f03c15](https://placehold.it/15/f03c15/000000?text=+) `Some things are not directly related to myteamspeak, it is also good to know.`  
![#c5f015](https://placehold.it/15/c5f015/000000?text=+) `Here is a detailed documentation about myTeamSpeak.`  
![#c5f015](https://placehold.it/15/c5f015/000000?text=+) `These are all post and get urls from myTeamSpeak:`
```
https://clientapi.myteamspeak.com/integration
https://clientapi.myteamspeak.com/user
https://clientapi.myteamspeak.com/authentication
https://clientapi.myteamspeak.com/synchronization
https://clientapi.myteamspeak.com/messanger
https://clientapi.myteamspeak.com/session
```
## Password

the password is hashed with a password-based key derivation functionality, PBKDF2, by using a pseudo-random number generator based on HMACSHA1.

how the password is hashed?  
In C#

```cs
private static string HashLoginPassword(string email, string password)
{
    byte[] salt = Encoding.UTF8.GetBytes($"{email}ts3Login{password}");
    byte[] a = Encoding.UTF8.GetBytes(password);
    var c = new Rfc2898DeriveBytes(a, salt, 10000, HashAlgorithmName.SHA512);
    return Convert.ToBase64String(c.GetBytes(48));
}
```

# Session
So that all requests can be assigned correctly to each user, a session is created. The session is 36 characters long and is structured as follows:

| Random (8)  | - | Random (4) | - | Random (4) | - | Random (4) | - | Random (12) |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| b842fedc  | - | f4f4 | - | 4661 | - | a886 | - | ee427982ae78 |
```
b842fedc-f4f4-4661-a886-ee427982ae78
```
The client sends this generated session with a `Post` request
```
POST: https://clientapi.myteamspeak.com/authentication
```
request-body 

| parameter  |  session |
| ------------- | ------------- |
| session  | *your session*
```
session$your_session
```
# Register
For the registration a `Post` request will be sent to the `user`.
```
POST: https://clientapi.myteamspeak.com/user
```  
The request-body is sent with E-Mail, hashed password, Username  

| parameter  |  email |  password (hashed) | Username |
| ------------- | ------------- | ------------- | ------------- |
| adduser  | yourmail@gmail.de | *hashed_password* | your_username |  
```
adduser yourmail@gmail.de@hashed_password Username
```

# Login
To synchronize everything you have to be logged in first, a `Post` request will be sent:  
```
POST: https://clientapi.myteamspeak.com/authentication
```
The request-body is sent with login, email and the hashed password:

| parameter  |  email |  password (hashed) |
| ------------- | ------------- | ------------- |
| login  | yourmail@gmail.de | *hashed_password* |

```
login yourmail@gmail.com@hashed_password
```
# Logout
The client deletes the session when logging out, the following `Post` will be sent for this
```
POST: https://clientapi.myteamspeak.com/authentication
```
The request-body consists of deleteSession and the current session

| parameter  |  session |
| ------------- | ------------- |
| deleteSession  | *your session* |

```
deleteSession$your_session
```
