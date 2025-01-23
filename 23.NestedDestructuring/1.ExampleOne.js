const songs = [
    {
        name: 'song1',
        artist: 'artist1',
        album: 'album1',
        duration: 100
    },
    {
        name: 'song2',
        artist: 'artist2',
        album: 'album2',
        duration: 200
    },
    {
        name: 'song3',
        artist: 'artist3',
        album: 'album3',
        duration: 300
    },
    {
        name: 'song4',
        artist: 'artist4',
        album: 'album4',
        duration: 400
    },
    {
        name: 'song5',
        artist: 'artist5',
        album: 'album5',
        duration: 500
    },
];

const [ , , {artist: a}] = songs;
console.log(a); // Output: artist1