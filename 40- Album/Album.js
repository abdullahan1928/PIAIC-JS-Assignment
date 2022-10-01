function make_album(artist, title, tracks) {
    if (tracks) {
        return {
            'artist': artist,
            'title': title,
            'tracks': tracks
        };
    } else {
        return {
            'artist': artist,
            'title': title
        };
    }
}

var album = make_album('The Beatles', 'Abbey Road');
console.log(album);
var album2 = make_album('The Beatles', 'Revolver');
console.log(album2);
var album3 = make_album('The Beatles', 'Sgt. Pepper\'s Lonely Hearts Club Band');
console.log(album3);
var album4 = make_album('The Beatles', 'The White Album', 30);
console.log(album4);
