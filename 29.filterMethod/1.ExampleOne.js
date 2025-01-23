/**
 * The filter() method is a built-in array method in javascript
 * that allows you to create a new array containing elements that pass a 
 * certain condition. it provides a clean and concise way to filter out elements
 * from an array based on a specific criteria.
 */

const songs = [
    { name: 'song1', genre: 'pop', duration: 3 },
    { name: 'song2', genre: 'rock', duration: 4 },
    { name: 'song3', genre: 'pop', duration: 5 },
    { name: 'song4', genre: 'rock', duration: 6 },
    { name: 'song5', genre: 'pop', duration: 7 },
];

const filteredSongs = songs.filter((song) => song.genre === 'pop');
console.log(filteredSongs);
console.log(`--------------------------`);
const filteredSongs2 = songs.filter((song) => song.duration > 4);
console.log(filteredSongs2);


h