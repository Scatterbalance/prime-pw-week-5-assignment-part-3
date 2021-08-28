console.log('***** Music Collection *****')

//define collection array
let collection = [];


// Add a function named addToCollection. This function should:
function addToCollection(title, artist, yearPublished) {
    let album = {
        title,
        artist,
        yearPublished,
    }// end album
collection.push (album)
// Take in the album's title, artist, yearPublished as input parameters
// Create a new object having the above properties
// Add the new object to the end of the collection array
// Return the newly created object

return album
}//end function

// Test the addToCollection function:

// Add 6 albums to your collection. Aim to have a mix of both same and different 
// artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
// Console.log each album as added using the returned value.
// After all are added, console.log the collection array.
console.log(addToCollection('Duluth', 'Trampled By Turtles', 1987));
console.log(addToCollection('Palomino', 'Trampled By Turtles', 2010));
console.log(addToCollection('Licensed To Ill', 'Beasty Boys', 1986));
console.log(addToCollection('Californication', 'Red Hot Chili Peppers', 1999));        
console.log(addToCollection('Enema of the State', 'Blink 182', 1999));
console.log(addToCollection('Dua Lipa', 'Dua Lipa', 1999));
console.log(collection);


// Add a function named showCollection. This function should:
function showCollection(array) {
    console.log('There are', array.length + 1, 'albums in the collection.');
    for (let i=0; i < array.length; i++) {
        console.log(array[i].title, 'by', array[i].artist + ', published in', array[i].yearPublished);

    } //end for
    // Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
    // Console.log the number of items in the array.
    // Loop over the array and console.log each album's information formatted like: TITLE by ARTIST, published in YEAR.


} // end showCollection

// Test showCollection
showCollection(collection) 
let results = [];
function findByArtist(artist) {
    for (i = 0; i < collection.length; i++) {
        if (artist === collection[i].artist){
            results.push(collection[i]);

        } //end 

    } // end for
    return results
} // end findByArtist
findByArtist ('Dua Lipa')
console.log('Matched Results:', results);
