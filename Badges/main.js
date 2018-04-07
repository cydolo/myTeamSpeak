var api = "https://clientapi.myteamspeak.com/";
var post = {
    methode: {
        1: {a: "authentication"},
        2: {b: "synchronization"},
        3: {c: "user"}
    }
};
class Badges {
    static Add() {   
    try {
        const sender = new XMLHttpRequest();
    } catch (error) {

    }
 }
 static Remove() {
     try {
         const sender = new XMLHttpRequest();
         sender.open("POST",api + post.methode[3].c,true);
         sender.onreadystatechange = function(ok) {
             if (sender.status == "200") {
                 console.log("Alright, see what happen.." + sender.responseText);
             }else {
                 console.log("um.. nope" + sender.responseText);
             }
         }
         //todo
     } catch (error) {
        console.log("something happend.." + error);
     } 
 }

}
