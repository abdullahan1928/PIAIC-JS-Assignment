var current_users = ["Admin", "John", "Jen", "Jason", "Yaakov"];
var new_users = ["John", "JEN", "Abdullah", "Anwar", "Paul"];

for (var i = 0; i < new_users.length; i++) {
    var user = new_users[i];
    var user_exists = false;
    for (var j = 0; j < current_users.length; j++) {
        if (user.toLocaleLowerCase() == current_users[j].toLocaleLowerCase()) {
            user_exists = true;
            break;
        }
    }
    if (user_exists) {
        console.log("Sorry, " + user + " is already taken.");
    } else {
        console.log("Great, " + user + " is available.");
    }
}