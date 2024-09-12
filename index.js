// Array of song objects
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
];

// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot": "Pop"
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    const playlists = Object.keys(guardians).map(guardian => {
        const genre = guardians[guardian];
        const playlist = songs.filter(song => song.genre === genre);
        return { guardian, playlist };
    });

    return playlists; // Return the generated playlists
}

// Call generatePlaylist and display the playlists
const playlists = generatePlaylist(guardians, songs);

// Display the playlists for each Guardian
function displayPlaylists(playlists) {
    const playlistsContainer = document.getElementById('playlists');
    playlists.forEach(playlist => {
        const playlistDiv = document.createElement('div');
        playlistDiv.className = 'playlist';
        playlistDiv.innerHTML = `<h2>Playlist for ${playlist.guardian}:</h2>`;
        
        playlist.playlist.forEach(song => {
            const songDiv = document.createElement('div');
            songDiv.className = 'song';
            songDiv.innerHTML = `<span class="song-title">${song.title}</span> by ${song.artist}`;
            playlistDiv.appendChild(songDiv);
        });
        
        playlistsContainer.appendChild(playlistDiv);
    });
}

// Call the function to display playlists
displayPlaylists(playlists);