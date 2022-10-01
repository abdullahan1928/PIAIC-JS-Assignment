function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
}

var magicians = ['David Copperfield', 'Criss Angel', 'David Blaine'];
show_magicians(magicians);
make_great(magicians);
show_magicians(magicians);