var api = "https://clientapi.myteamspeak.com/";
var bc  = "https://badges-content.teamspeak.com/";
var post = {
    methode: {
        1: {a: "authentication"},
        2: {b: "synchronization"},
        3: {c: "user"},
        4: {d: "list""}
    }
};
class Badges {
    static List_Badges() {
      try {
        const ts3 = new XMLHttpRequest();
        ts3.open("GET",bc + post.methode[4].d,true);
        ts3.onreadystatechange = function() {
            if(this.status == 200) {
                return this.responseText;
            }
          }
        } catch (error) {
         return "error!";
        }
    } 
    static Add_Badges() {   
    }
    static Remove_Badges() {
    }

}
