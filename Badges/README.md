# Own Badges
To get your own badges, TeamSpeak sends a POST request to:
```
POST: https://clientapi.myteamspeak.com/user
```
The request-body consists of the method "getBadges" and the session

| Method  | character | Session |
| ------------- | ------------- | ------------- |
| getBadges | $ | 0a3eaf06-e59b-411d-89d1-cf475a249fd4  |
```
getBadges$0a3eaf06-e59b-411d-89d1-cf475a249fd4
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
1 {
  1: "534c9582-ab02-4267-aec6-2d94361daa2a"
  2: 1503479081
}
1 {
  1: "f22c22f1-8e2d-4d99-8de9-f352dc26ac5b"
  2: 1509192843
```

# Badges list
To receive all TeamSpeak badges, you must send a GET request to      
```https://badges-content.teamspeak.com/list```
```
Text: Badges.ini      
Protobuf: Badges-Protobuf.ini
```
# Web-based badges adder
We now know which request is sent to myTeamSpeak to set the badges. We will soon releasing a web-based JavaScript that will allow you to set all badges from the web.
