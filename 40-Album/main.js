// Define the make_album function
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Calling three functions and creating 3 variables with Different Values
var album1 = make_album("Artist 1", "Album Title 1");
var album2 = make_album("Artist 2", "Album Title 2");
// Calling a make_album function with third parameter
var album3 = make_album("Artist 3", "Album Title 3", 10);
// Print values of our object created my function
console.log(album1);
console.log(album2);
console.log(album3);
