console.log('***** Music Collection *****')

//define collection array
let collection = [];


// Test the addToCollection function:

// Add 6 albums to your collection. Aim to have a mix of both same and different 
// artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
// Console.log each album as added using the returned value.
// After all are added, console.log the collection array.
addToCollection('Duluth', 'Trampled By Turtles', 1987);
addToCollection('Palomino', 'Trampled By Turtles', 2010);
addToCollection('Licensed To Ill', 'Beasty Boys', 1986);
addToCollection('Californication', 'Red Hot Chili Peppers', 1999);        
addToCollection('Enema of the State', 'Blink 182', 1999);
addToCollection('Dua Lipa', 'Dua Lipa', 1999);

// display the collecton
console.log(collection);

// Test showCollection
showCollection(collection) 

// Test findByArtist
findByArtist ('Trampled By Turtles')

// Test Search
search();

//////////////////////////FUNCTIONS///////////////////////////
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
console.log('the album:', album.title, 'by', album.artist, 'published in', album.yearPublished, 'has been added');
return album
}//end function

function findByArtist(artist) {
    let results = [];
    for (i = 0; i < collection.length; i++) {
        if (artist === collection[i].artist){
            results.push(collection[i]);


        } //end if
    

    } // end for
    console.log('Artist matches:');
    for (let i = 0; i < results.length; i++) {
        console.log('Artist:', results[i].artist, 'Title:', results[i].title, 'Year published:', results[i].yearPublished);  
    }
    return results
} // end findByArtist

// Add a function named showCollection. This function should:
function showCollection(array) {
    console.log('There are', array.length, 'albums in the collection.');
    for (let i=0; i < array.length; i++) {
        console.log(array[i].title, 'by', array[i].artist + ', published in', array[i].yearPublished);

    } //end for
    // Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
    // Console.log the number of items in the array.
    // Loop over the array and console.log each album's information formatted like: TITLE by ARTIST, published in YEAR.


} // end showCollection
//test findByArtist



function search() {
    
    let checkArtist = prompt( 'what artists are you looking for?');
    let checkYearPublished = parseInt(prompt( 'what year was it published?'),10);
    let searchResults = [];
    console.log('looking for Artist:', checkArtist, 'in the year of', checkYearPublished);
//     Return a new array of all items in the collection matching all of the search criteria.
// If no results are found, return an empty array.
// If there is no search object or an empty search object provided as input, then return all albums in the collection.
    
for (i = 0; i < collection.length; i++) {
        if (checkArtist === collection[i].artist && checkYearPublished === collection[i].yearPublished) {
            //pushing object into array
            searchResults.push(collection[i])
            console.log('if statement');
            
            //displaying matches
            console.log('Artist matches:');
            for (let i = 0; i < searchResults.length; i++) {
                console.log('Artist:', searchResults[i].artist, 'Title:', searchResults[i].title, 'Year published:', searchResults[i].yearPublished);  
            } // end for
        } // end if
        
    }// end for

if (checkArtist === '' || checkYearPublished === NaN || checkArtist === null) {
    showCollection (collection)
} // end if

// adding non match from search to collection if user wants to
else if (searchResults.length === 0 && confirm('No match found, would you like to add it to collection?') === true){
    let newTitle = prompt ('what is the title of album you were looking for?')
    addToCollection(newTitle, checkArtist, checkYearPublished);
    showCollection(collection);
}//end  else if
else {
    showCollection(collection);
} // end else

   return searchResults
} // end search
