document.addEventListener('DOMContentLoaded', function() {
    const songs = [
        {
            title: "Still Havent Found What I'm Looking For",
            artist: "U2",
            youtubeLink: "https://youtu.be/vEKcKkoRKtU?si=UaNwQ-aSPGbNIuiR",
            description: "U2 on a four string? Yup!",
            tags: "#Rock, #4string, #ThatBeardedGuitarGuy",
            id:7
        },
        {
            title: "Tennessee Whiskey",
            artist: "Chris Stapleton",
            youtubeLink: "https://youtu.be/Nc2ehWOBNTA?si=kZ75a7OgV12KCab5",
            description: "Fast Car by Tracy Chapman on a four string",
            tags: "#Country, #3string, #BluesboyJag",
            id:6
        },
        {
            title: "Fast Car",
            artist: "Tracy Chapman",
            youtubeLink: "https://youtu.be/ps9cBeZ43r8?si=oMle8jjQmnF_YSF2",
            description: "Fast Car by Tracy Chapman on a four string",
            tags: "#Rock, #4string,#fingerpicking, #ThatBeardedGuitarGuy",
            id:5
        },
        {
            title: "Radioactive",
            artist: "Imagine Dragons",
            youtubeLink: "https://youtu.be/Z9VlFHHb7vk?si=8xt3Pdo8R_0SxzoD",
            description: "Radio active by Imagine Dragons.",
            tags: "#pop, #4string,#fingerpicking, #ThatBeardedGuitarGuy",
            id:4
        },
        {
            title: "Hey Joe",
            artist: "Jimi Hendrix",
            youtubeLink: "https://youtu.be/E_vQaZ3Dr20?si=9Acuj4WdsZ_yB8GT",
            description: "Jimi Hendrix tune in D.",
            tags: "#rock, #cbg, #3string, #unclemark",
            id:3
        },
        {
            title: "Honkey Tonk Woman",
            artist: "The Rolling Stones",
            youtubeLink: "https://youtu.be/9FX1vPTwrwo?si=2XuBZdIlj-aiW5h2",
            description: "The Rolling Stones on a three string guitar.",
            tags: "#mikesnowden, #3StringThursday",
            id:2
        },
        {
            title: "Can't You See",
            artist: "Marshall Tucker Band",
            youtubeLink: "https://youtu.be/ETrinUfkGfk?si=WO415nzEalPz4byF",
            description: "3 String Cigar Box Guitar Lesson. Cigar box guitar tuned to an open G (GDG)",
            tags: "#southernfireguitars",
            id:1
        }
    ];

    // Sort songs array alphabetically by title
    songs.sort((a, b) => {
        // Convert titles to lowercase for case-insensitive comparison
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        if (titleA < titleB) return -1;
        if (titleA > titleB) return 1;
        return 0;
    });

    const songList = document.getElementById('songList');
    const videoContainer = document.getElementById('videoContainer');
    const songInfo = document.getElementById('songInfo');
    const searchInput = document.getElementById('searchInput');

    // Display all songs initially
    displaySongs(songs);

    // Filter songs based on search query
    searchInput.addEventListener('input', function(event) {
        const query = event.target.value.trim().toLowerCase();
        const filteredSongs = songs.filter(song => {
            return (
                song.title.toLowerCase().includes(query) ||
                song.artist.toLowerCase().includes(query) ||
                song.description.toLowerCase().includes(query) ||
                song.tags.toLowerCase().includes(query)
            );
        });
        displaySongs(filteredSongs);
    });

    function displaySongs(songsToDisplay) {
        // Clear existing list
        songList.innerHTML = '';
    
        songsToDisplay.forEach(song => {
            const listItem = document.createElement('li');
            listItem.classList.add('list-group-item');
    
            // Create star icon
            const starIcon = document.createElement('i');
            starIcon.classList.add('bi', 'bi-star');
            starIcon.style.cursor = 'pointer';
            starIcon.addEventListener('click', (event) => {
                event.stopPropagation(); // Prevent the song item click event from firing
                toggleFavorite(song, starIcon);
            });
    
            // Create div to hold title, artist, and tags
            const songDetailsDiv = document.createElement('div');
            songDetailsDiv.style.display = 'flex';
            songDetailsDiv.style.alignItems = 'center';
            
            // Title and artist
            const titleArtistDiv = document.createElement('div');
            titleArtistDiv.textContent = `${song.title} - ${song.artist}`;
            titleArtistDiv.style.flex = '1';
            
            // Tags
            const tagsSpan = document.createElement('span');
            tagsSpan.textContent = song.tags;
            tagsSpan.style.fontSize = '80%';
            tagsSpan.style.fontWeight = 'lighter';
            tagsSpan.style.marginLeft = '15px';
    
            // Append elements to song details div
            songDetailsDiv.appendChild(titleArtistDiv);
            songDetailsDiv.appendChild(tagsSpan);
    
            // Append star icon and song details div to list item
            listItem.appendChild(starIcon);
            listItem.appendChild(songDetailsDiv);
    
            // Add click event listener to play the song
            listItem.addEventListener('click', () => playSong(song));
    
            // Append list item to song list
            songList.appendChild(listItem);
        });
    }
    
    
// Initialize favoriteSongs array from local storage or as an empty array
let favoriteSongs = JSON.parse(localStorage.getItem('favoriteSongs')) || [];

    function toggleFavorite(song, starIcon) {
        const index = favoriteSongs.indexOf(song.id);
    
        if (index === -1) {
            // Song is not favorited, add to favorites
            favoriteSongs.push(song.id);
            starIcon.classList.remove('bi-star');
            starIcon.classList.add('bi-star-fill');
        } else {
            // Song is already favorited, remove from favorites
            favoriteSongs.splice(index, 1);
            starIcon.classList.remove('bi-star-fill');
            starIcon.classList.add('bi-star');
        }
    
        // Save favoriteSongs array to local storage
        localStorage.setItem('favoriteSongs', JSON.stringify(favoriteSongs));
    }
    

    function displayFavorites() {
        const favorites = songs.filter(song => favoriteSongs.includes(song.id));
        displaySongs(favorites);
    }
    
    
    // Add event listener to Favorites button
    const favoritesButton = document.createElement('button');
    favoritesButton.textContent = 'Favorites';
    favoritesButton.classList.add('btn', 'btn-primary', 'mt-3');
    favoritesButton.addEventListener('click', displayFavorites);
    document.body.appendChild(favoritesButton);
    

    document.addEventListener('DOMContentLoaded', function() {
        // Load favoriteSongs array from local storage
        const storedFavorites = localStorage.getItem('favoriteSongs');
        if (storedFavorites) {
            favoriteSongs = JSON.parse(storedFavorites);
        }
    
        // Display all songs initially
        displaySongs(songs);
    });

    // Function to play selected song
    function playSong(song) {
        const videoId = getYouTubeVideoId(song.youtubeLink);
        const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    
        // Update video player
        videoContainer.innerHTML = `
            <iframe class="embed-responsive-item" src="${embedUrl}" frameborder="0" allowfullscreen></iframe>
        `;
    
        // Update song info
        songInfo.innerHTML = `
            <strong>Title:</strong> ${song.title}<br>
            <strong>Artist:</strong> ${song.artist}<br>
            <strong>Description:</strong> ${song.description}<br>
            <strong>Tags:</strong> ${song.tags}
        `;
    
        // Add song ID as a query parameter to the URL
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('id', song.id); // Set 'id' query parameter with song ID
        const newUrl = `${window.location.origin}${window.location.pathname}?${urlParams.toString()}`;
        window.history.pushState({ path: newUrl }, '', newUrl);
    }
    

    // Helper function to extract YouTube video ID from URL
    function getYouTubeVideoId(url) {
        const regExp = /^.*(youtu\.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/;
        const match = url.match(regExp);

        if (match && match[2].length === 11) {
            return match[2];
        } else {
            return 'Invalid video URL';
        }
    }

// Function to filter songs by tag
window.filterByTag = function(tag) {
    const filterButton = document.querySelector(`button[data-tag="${tag}"]`);
    const isActive = filterButton.classList.contains('active');

    if (isActive) {
        // If button is already active, remove the filter
        displaySongs(songs); // Display all songs
        filterButton.classList.remove('active'); // Remove 'active' class from the button
    } else {
        // Filter songs based on the selected tag
        const filteredSongs = songs.filter(song => {
            return song.tags.toLowerCase().includes(tag.toLowerCase());
        });
        displaySongs(filteredSongs); // Display filtered songs
        filterButton.classList.add('active'); // Add 'active' class to the button
    }

    // Remove 'active' class from other filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        if (button !== filterButton) {
            button.classList.remove('active');
        }
    });
};

// Check if there is a song ID in the URL query string onload
const urlParams = new URLSearchParams(window.location.search);
const songId = urlParams.get('id');
if (songId) {
    // Find the song with the matching ID
    const selectedSong = songs.find(song => song.id.toString() === songId);
    if (selectedSong) {
        // Play the selected song
        playSong(selectedSong);
    }
}

});




document.addEventListener('DOMContentLoaded', function() {
    const shareButton = document.getElementById('shareButton');
    //const url = window.location.href;
    const baseUrl = window.location.origin + window.location.pathname; // Get base URL without query parameters
    const queryParams = window.location.search; // Get query parameters if they exist

    const shareMessage = `Check out this cigar box guitar lesson: ${baseUrl}${queryParams}`;

    shareButton.addEventListener('click', function() {
        //const url = window.location.href;
        const baseUrl = window.location.origin + window.location.pathname; // Get base URL without query parameters
        const queryParams = window.location.search; // Get query parameters if they exist
        const shareMessage = `Check out this cigar box guitar lesson: ${baseUrl}${queryParams}`;
        if (navigator.share) {
            // Share using Web Share API (mobile)
            navigator.share({
                title: document.title,
                text: `Check out this cigar box guitar lesson: ${baseUrl}${queryParams}`
            })
        } else {
            // Copy URL to clipboard (non-mobile)
            copyToClipboard(shareMessage);
        }
    });

    // Function to display a message on the webpage
    function displayMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messageElement.style.backgroundColor = 'rgba(0, 123, 255, 1)';
        messageElement.style.color = '#fff';
        messageElement.style.padding = '10px';
        messageElement.style.position = 'fixed';
        messageElement.style.top = '70px';
        messageElement.style.left = '50%';
        messageElement.style.transform = 'translate(-50%, -50%)';
        messageElement.style.zIndex = '9999';
        document.body.appendChild(messageElement);

        // Remove the message after a few seconds (e.g., 3 seconds)
        setTimeout(() => {
            messageElement.remove();
        }, 3000); // Remove after 3 seconds
    }

    // Function to copy text to clipboard
    function copyToClipboard(text) {
        const textField = document.createElement('textarea');
        textField.value = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        document.body.removeChild(textField);
        displayMessage("Link copied to clipboard!");
    }
});