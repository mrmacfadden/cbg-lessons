document.addEventListener('DOMContentLoaded', function() {
    const songs = [
        {
            title: "Hey Joe",
            artist: "Jimi Hendrix",
            youtubeLink: "https://youtu.be/E_vQaZ3Dr20?si=9Acuj4WdsZ_yB8GT",
            description: "Jimi Hendrix tune in D.",
            tags: "#rock, #cbg, #3string, #unclemark"
        },
        {
            title: "Honkey Tonk Woman",
            artist: "The Rolling Stones",
            youtubeLink: "https://youtu.be/9FX1vPTwrwo?si=2XuBZdIlj-aiW5h2",
            description: "The Rolling Stones on a three string guitar.",
            tags: "#mikesnowden, #3StringThursday"
        },
        {
            title: "Can't You See",
            artist: "Marshall Tucker Band",
            youtubeLink: "https://youtu.be/ETrinUfkGfk?si=WO415nzEalPz4byF",
            description: "3 String Cigar Box Guitar Lesson. Cigar box guitar tuned to an open G (GDG)",
            tags: "#southernfireguitars"
        }
    ];

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

    // Function to display songs in the list
    function displaySongs(songsToDisplay) {
        songList.innerHTML = ''; // Clear existing list

        songsToDisplay.forEach(song => {
            const listItem = document.createElement('li');
            listItem.classList.add('list-group-item');
            
            // Create a div to hold title and artist
            const titleArtistDiv = document.createElement('div');
            titleArtistDiv.style.display = 'inline-block'; // Display inline-block
            titleArtistDiv.textContent = `${song.title} - ${song.artist}`; // Display title and artist
            
            // Create a span for tags
            const tagsSpan = document.createElement('span');
            tagsSpan.style.display = 'inline'; // Display inline
            tagsSpan.style.fontSize = '80%'; // Smaller font size for tags
            tagsSpan.style.fontWeight = 'lighter'; // Lighter font weight for tags
            tagsSpan.textContent = song.tags; // Display tags
            
            // Append title, artist, and tags to the list item
            listItem.appendChild(titleArtistDiv);
            //listItem.appendChild(document.createElement('br')); // Add line break
            listItem.appendChild(tagsSpan);

            // Click event listener to play the song
            listItem.addEventListener('click', () => {
                playSong(song);
            });

            // Append the list item to the song list
            songList.appendChild(listItem);
        });
    }



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

});


