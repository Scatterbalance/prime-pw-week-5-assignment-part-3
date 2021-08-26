console.log('***** Music Collection *****')

//de
let collection = [];

function addToCollection(title, artist, yearPublished) {
    let album = {
        title: title,
        artist: artist,
        yearPublished,
    }// end album
collection.push (album)
console.log(album);

return 'new album added:' + album
}//end function

addToCollection('slippery when wet', 'Bon Jovi', 1987)
addToCollection('Graceland', 'Paul Simon', 1987)
addToCollection('Licensed To Ill', '1987', 1987)
addToCollection('The Joshua Tree', 'U2', 1987)        


console.log(collection);