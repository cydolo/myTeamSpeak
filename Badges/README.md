# Redeem Badges
To redeem a badge, the following `Post` will be sent:
```
POST: https://clientapi.myteamspeak.com/user
```
The code is sent along with the session and looks like this:  

| parameter | code  | Session |
| ------------- | ------------- | ------------- |
| redeemBadgeCode | the_code | *your session*  |
```
redeemBadgeCode the_code$your_session
```

# Own Badges
To get your own badges, TeamSpeak sends a `Post` request to:
```
POST: https://clientapi.myteamspeak.com/user
```
The request-body consists of the method "getBadges" and the session

| parameter   | Session |
| ------------- | ------------- |
| getBadges | *your session*  |
```
getBadges$your_session
```
We receive a protobuf with our available badges
```
1 {
  1: "1cb07348-34a4-4741-b50f-c41e584370f7"
  2: 1478775309
}
1 {
  1: "50bbdbc8-0f2a-46eb-9808-602225b49627"
  2: 1478771219
}
```
## Signed Badges
Since the new update teamspeak now has signed badges
```
POST: https://clientapi.myteamspeak.com/user
```
The request-body consists of the method "getSignedBadges" and the session

| parameter   | Session |
| ------------- | ------------- |
| getSignedBadges | *your session*  |

```
getSignedBadges$your_session
```
We receive a protobuf with avaiable signed badges
```
1 {
  1 {
    1 {
      1: "f81ad44d-e931-47d1-a3ef-5fd160217cf8"
      2: 1509192843
    }
    2: "„1¤7R„1¤7„1¤7„1¤7„1¤7„1¤7„1¤7Wa„1¤7?K„1¤7Et|„1¤7%„1¤7?"„1¤7„1¤7„1¤711ˆ5„1¤7n„1¤7„1¤7iZ„1¤70„1¤7„1¤7„1¤7„1¤7H„1¤7„1¤7„1¤70‰9„1¤7„1¤70e!„1¤7„1¤7;"
    3: 1564475393
  }
  1 {
    1 {
      1: "4b0fd4f5-d456-4294-973d-853a1db5c7d8"
      2: 1550158860
    }
    2: "'„1¤7x`„1¤71^„1¤7%„1¤7u;„1¤7„1¤7q„1¤7^„1¤7z:„1¤71…7„1¤7n„1¤7„1¤7„1¤7„1¤7„1¤7„1¤7PI„1¤7&„1¤7„1¤7W„1¤7„1¤7bm„1¤7„1¤7„1¤7„1¤7„1¤7„1¤7 5„1¤7"
    3: 1564475393
  }
```

# Badges Images
When the dialog is opened, teamspeak sends a `Get` request to load the images (png):  
```
badges_uuid = the uuid of the badges  
badges_name = name of the badges
```
```
https://badges-content.teamspeak.com/badges_uuid/badges_name_64.png
```
You can see all badges images in the badges_images.ini file.

# Badges list
To receive all TeamSpeak badges, you must send a `Get` request to      
```
GET: https://badges-content.teamspeak.com/list
```
`text & protobuf in: badges_protobuf_text.ini`

