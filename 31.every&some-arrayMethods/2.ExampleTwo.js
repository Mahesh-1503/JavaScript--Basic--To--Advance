const songs = [
    { name: 'song1', genre: 'pop', duration: 3 },
    { name: 'song2', genre: 'rock', duration: 4 },
    { name: 'song3', genre: 'pop', duration: 5 },
    { name: 'song4', genre: 'rock', duration: 6 },
    { name: 'song5', genre: 'pop', duration: 7 },
];

const everyRes = songs.every((song) => song.duration > 3);
console.log(everyRes);
console.log(`--------------------------`);
const someRes = songs.some((song) => song.duration > 4);
console.log(someRes);

/**
 * next concept reduce() method 
 * start watching from 7:03:00
 */