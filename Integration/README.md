# Twitch Integration
myTeamSpeak has a new twitch integration since server version 3.3.0.  
In order for TeamSpeak to receive the data, a `Post` is sent.
```
Post: https://clientapi.myteamspeak.com/integration
```
The parameter `getIntegrationUserStatus` is sent with the current session.  
We receive a protobuf with the current twitch name.  

| parameter  |  session |
| ------------- | ------------- |
| getIntegrationUserStatus  | *twitch session* |

```
1: 1
2 {
  1 {
    1: 2
    4: "your twitch username"
    5: 1
    6: "X����ED��6`^���"
  }
}

```
