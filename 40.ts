function make_album(artist: string, title: string, tracks?: number) {
let album = {artist, title};
if (tracks) {album['tracks'] = tracks;}
return album;
}
console.log(make_album["artist one, the first album"]);
console.log(make_album["artist two, the secomd album"]);
console.log(make_album["artist three, the third album" 12]);
