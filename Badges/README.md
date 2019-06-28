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

