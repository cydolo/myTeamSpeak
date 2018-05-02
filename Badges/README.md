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
  2: 1510398397
}
1 {
  1: "f81ad44d-e931-47d1-a3ef-5fd160217cf8"
  2: 1509192843
}
```
# Badges Images
When the dialog is opened, teamspeak sends a GET request to load the images (png):  
```
badges_uuid = the id of the badges  
badges_name = name of the badges
```
```
https://badges-content.teamspeak.com/badges_uuid/badges_name_64.png
```
You can see all badges images in the badges_images.ini file.
# Badges list
To receive all TeamSpeak badges, you must send a GET request to      
```
GET: https://badges-content.teamspeak.com/list
```   
`text`  
```
�Ӗ��
$1cb07348-34a4-4741-b50f-c41e584370f7TeamSpeak Addon AuthorVhttps://badges-content.teamspeak.com/1cb07348-34a4-4741-b50f-c41e584370f7/addon_author"Creator of TeamSpeak Addons(�ߔ�0�
$50bbdbc8-0f2a-46eb-9808-602225b49627
Gamescom 2016Whttps://badges-content.teamspeak.com/50bbdbc8-0f2a-46eb-9808-602225b49627/gamescom_2016"Registered during Gamescom 2016(�ߔ�0�
$d95f9901-c42d-4bac-8849-7164fd9e2310Paris Games Week 2016^https://badges-content.teamspeak.com/d95f9901-c42d-4bac-8849-7164fd9e2310/paris_gamesweek_2016"'Registered during Paris Games Week 2016(�ߔ�0�
$62444179-0d99-42ba-a45c-c6b1557d079a
Gamescom 2014Whttps://badges-content.teamspeak.com/62444179-0d99-42ba-a45c-c6b1557d079a/gamescom_2014"Registered at Gamescom 2014(뿞�0�
$fa3ece28-64df-431f-b1b3-90844bfdd2d9Paris Games Week 2014^https://badges-content.teamspeak.com/fa3ece28-64df-431f-b1b3-90844bfdd2d9/paris_gamesweek_2014"#Registered at Paris Games Week 2014(뿞�0�
$450f81c1-ab41-4211-a338-222fa94ed157"TeamSpeak Addon Developer (Bronze)]https://badges-content.teamspeak.com/450f81c1-ab41-4211-a338-222fa94ed157/addon_author_bronze"%Creator of at least 1 TeamSpeak Addon(����0�
$c9e97536-5a2d-4c8e-a135-af404587a472"TeamSpeak Addon Developer (Silver)]https://badges-content.teamspeak.com/c9e97536-5a2d-4c8e-a135-af404587a472/addon_author_silver"&Creator of at least 3 TeamSpeak Addons(����0�
$94ec66de-5940-4e38-b002-970df0cf6c94 TeamSpeak Addon Developer (Gold)[https://badges-content.teamspeak.com/94ec66de-5940-4e38-b002-970df0cf6c94/addon_author_gold"&Creator of at least 5 TeamSpeak Addons(����0�
$534c9582-ab02-4267-aec6-2d94361daa2a
Gamescom 2017Whttps://badges-content.teamspeak.com/534c9582-ab02-4267-aec6-2d94361daa2a/gamescom_2017""Visited TeamSpeak at Gamescom 2017(;��0�
$34dbfa8f-bd27-494c-aa08-a312fc0bb240Gamescom Hero 2017Shttps://badges-content.teamspeak.com/34dbfa8f-bd27-494c-aa08-a312fc0bb240/hero_2017"Gaming Hero at Gamescom 2017(;��0�
$7d9fa2b1-b6fa-47ad-9838-c239a4ddd116MIFCOMPhttps://badges-content.teamspeak.com/7d9fa2b1-b6fa-47ad-9838-c239a4ddd116/mifcom"MIFCOM | Entered Performance(;��0�
$f81ad44d-e931-47d1-a3ef-5fd160217cf84NetplayersUhttps://badges-content.teamspeak.com/f81ad44d-e931-47d1-a3ef-5fd160217cf8/4netplayers"4Netplayers customer(���0�
$f22c22f1-8e2d-4d99-8de9-f352dc26ac5bRocket Beans TVNhttps://badges-content.teamspeak.com/f22c22f1-8e2d-4d99-8de9-f352dc26ac5b/rbtv"Rocket Beans TV Community(�Ӗ�0

```
`Protobuf`
```
1: 15
2: 1510320530
3 {
  1: "1cb07348-34a4-4741-b50f-c41e584370f7"
  2: "TeamSpeak Addon Author"
  3: "http://badges-content.teamspeak.com/1cb07348-34a4-4741-b50f-c41e584370f7/addon_author"
  4: "Creator of TeamSpeak Addons"
  5: 1480929168
  6: 2
}
3 {
  1: "50bbdbc8-0f2a-46eb-9808-602225b49627"
  2: "Gamescom 2016"
  3: "http://badges-content.teamspeak.com/50bbdbc8-0f2a-46eb-9808-602225b49627/gamescom_2016"
  4: "Registered during Gamescom 2016"
  5: 1480929168
  6: 3
}
3 {
  1: "d95f9901-c42d-4bac-8849-7164fd9e2310"
  2: "Paris Games Week 2016"
  3: "http://badges-content.teamspeak.com/d95f9901-c42d-4bac-8849-7164fd9e2310/paris_gamesweek_2016"
  4: "Registered during Paris Games Week 2016"
  5: 1480929168
  6: 3
}
3 {
  1: "62444179-0d99-42ba-a45c-c6b1557d079a"
  2: "Gamescom 2014"
  3: "http://badges-content.teamspeak.com/62444179-0d99-42ba-a45c-c6b1557d079a/gamescom_2014"
  4: "Registered at Gamescom 2014"
  5: 1489477611
  6: 1
}
3 {
  1: "fa3ece28-64df-431f-b1b3-90844bfdd2d9"
  2: "Paris Games Week 2014"
  3: "http://badges-content.teamspeak.com/fa3ece28-64df-431f-b1b3-90844bfdd2d9/paris_gamesweek_2014"
  4: "Registered at Paris Games Week 2014"
  5: 1489477611
  6: 1
}
3 {
  1: "450f81c1-ab41-4211-a338-222fa94ed157"
  2: "TeamSpeak Addon Developer (Bronze)"
  3: "http://badges-content.teamspeak.com/450f81c1-ab41-4211-a338-222fa94ed157/addon_author_bronze"
  4: "Creator of at least 1 TeamSpeak Addon"
  5: 1490851484
  6: 1
}
3 {
  1: "c9e97536-5a2d-4c8e-a135-af404587a472"
  2: "TeamSpeak Addon Developer (Silver)"
  3: "http://badges-content.teamspeak.com/c9e97536-5a2d-4c8e-a135-af404587a472/addon_author_silver"
  4: "Creator of at least 3 TeamSpeak Addons"
  5: 1490851484
  6: 1
}
3 {
  1: "94ec66de-5940-4e38-b002-970df0cf6c94"
  2: "TeamSpeak Addon Developer (Gold)"
  3: "http://badges-content.teamspeak.com/94ec66de-5940-4e38-b002-970df0cf6c94/addon_author_gold"
  4: "Creator of at least 5 TeamSpeak Addons"
  5: 1490851484
  6: 1
}
3 {
  1: "534c9582-ab02-4267-aec6-2d94361daa2a"
  2: "Gamescom 2017"
  3: "http://badges-content.teamspeak.com/534c9582-ab02-4267-aec6-2d94361daa2a/gamescom_2017"
  4: "Visited TeamSpeak at Gamescom 2017"
  5: 1502437197
  6: 3
}
3 {
  1: "34dbfa8f-bd27-494c-aa08-a312fc0bb240"
  2: "Gamescom Hero 2017"
  3: "http://badges-content.teamspeak.com/34dbfa8f-bd27-494c-aa08-a312fc0bb240/hero_2017"
  4: "Gaming Hero at Gamescom 2017"
  5: 1502437197
  6: 3
}
3 {
  1: "7d9fa2b1-b6fa-47ad-9838-c239a4ddd116"
  2: "MIFCOM"
  3: "http://badges-content.teamspeak.com/7d9fa2b1-b6fa-47ad-9838-c239a4ddd116/mifcom"
  4: "MIFCOM | Entered Performance"
  5: 1502437197
  6: 3
}
3 {
  1: "f81ad44d-e931-47d1-a3ef-5fd160217cf8"
  2: "4Netplayers"
  3: "http://badges-content.teamspeak.com/f81ad44d-e931-47d1-a3ef-5fd160217cf8/4netplayers"
  4: "4Netplayers customer"
  5: 1508230000
  6: 1
}
3 {
  1: "f22c22f1-8e2d-4d99-8de9-f352dc26ac5b"
  2: "Rocket Beans TV"
  3: "http://badges-content.teamspeak.com/f22c22f1-8e2d-4d99-8de9-f352dc26ac5b/rbtv"
  4: "Rocket Beans TV Community"
  5: 1510320530
  6: 1
}
```
# Web-based badges adder
We now know which request is sent to myTeamSpeak to set the badges. We will soon releasing a web-based JavaScript that will allow you to set all badges from the web.
