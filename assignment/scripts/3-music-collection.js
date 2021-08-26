console.log('***** Music Collection *****')

//de
let collection = [];

function addToCollection(title, artist, yearPublished) {
    let album = {
        title,
        artist,
        yearPublished,
    }// end album
collection.push (album)


return album
}//end function

console.log(addToCollection('Duluth', 'Trampled By Turtles', 1987));
console.log(addToCollection('Palomino', 'Trampled By Turtles', 2010));
console.log(addToCollection('Licensed To Ill', 'Beasty Boys', 1986));
console.log(addToCollection('Californication', 'Red Hot Chili Peppers', 1999));        
console.log(addToCollection('Enema of the State', 'Blink 182', 1999));
console.log(addToCollection('Dua Lipa', 'Dua Lipa', 1999));
console.log(collection);

function showCollection(array) {
    console.log('There are', array.length + 1, 'albums in the collection.');
    
    
}
showCollection(collection)