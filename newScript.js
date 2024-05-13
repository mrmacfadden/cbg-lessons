document.addEventListener('DOMContentLoaded', function() {
    const songs = [
        {
            title: "Still Havent Found What I'm Looking For",
            artist: "U2",
            youtubeLink: "https://youtu.be/vEKcKkoRKtU?si=UaNwQ-aSPGbNIuiR",
            description: "U2 on a four string? Yup!",
            tags: "#Rock, #4string, #ThatBeardedGuitarGuy",
            id:7,
            favorite: false
        },
        {
            title: "Tennessee Whiskey",
            artist: "Chris Stapleton",
            youtubeLink: "https://youtu.be/Nc2ehWOBNTA?si=kZ75a7OgV12KCab5",
            description: "Fast Car by Tracy Chapman on a four string",
            tags: "#Country, #3string, #BluesboyJag",
            id:6,
            favorite: false
        },
        {
            title: "Fast Car",
            artist: "Tracy Chapman",
            youtubeLink: "https://youtu.be/ps9cBeZ43r8?si=oMle8jjQmnF_YSF2",
            description: "Fast Car by Tracy Chapman on a four string",
            tags: "#Rock, #4string,#fingerpicking, #ThatBeardedGuitarGuy",
            id:5,
            favorite: false
        },
        {
            title: "Radioactive",
            artist: "Imagine Dragons",
            youtubeLink: "https://youtu.be/Z9VlFHHb7vk?si=8xt3Pdo8R_0SxzoD",
            description: "Radio active by Imagine Dragons.",
            tags: "#pop, #4string,#fingerpicking, #ThatBeardedGuitarGuy",
            id:4,
            favorite: false
        },
        {
            title: "Hey Joe",
            artist: "Jimi Hendrix",
            youtubeLink: "https://youtu.be/E_vQaZ3Dr20?si=9Acuj4WdsZ_yB8GT",
            description: "Jimi Hendrix tune in D.",
            tags: "#rock, #cbg, #3string, #unclemark",
            id:3,
            favorite: false
        },
        {
            title: "Honkey Tonk Woman",
            artist: "The Rolling Stones",
            youtubeLink: "https://youtu.be/9FX1vPTwrwo?si=2XuBZdIlj-aiW5h2",
            description: "The Rolling Stones on a three string guitar.",
            tags: "#mikesnowden, #3StringThursday",
            id:2,
            favorite: false
        },
        {
            title: "Can't You See",
            artist: "Marshall Tucker Band",
            youtubeLink: "https://youtu.be/ETrinUfkGfk?si=WO415nzEalPz4byF",
            description: "3 String Cigar Box Guitar Lesson. Cigar box guitar tuned to an open G (GDG)",
            tags: "#southernfireguitars",
            id:1,
            favorite: false
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

    // Function to display songs in the list
    function displaySongs(songsToDisplay) {
        songList.innerHTML = ''; // Clear existing list

        // Retrieve favorited songs from localStorage or initialize an empty array
        let favoritedSongs = JSON.parse(localStorage.getItem('favoritedSongs')) || [];

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

            // Create a span for the favorite icon
            const favoriteIconSpan = document.createElement('span');
            favoriteIconSpan.style.float = 'right'; // Float to the right for alignment

            // Check if the song is favorited to display the appropriate star icon
            if (favoritedSongs.includes(song.id)) {
                // Song is favorited, display filled star icon
                favoriteIconSpan.innerHTML = '<i class="bi bi-star-fill text-warning"></i>';
            } else {
                // Song is not favorited, display empty star icon
                favoriteIconSpan.innerHTML = '<i class="bi bi-star text-secondary"></i>';
            }

            // Append title, artist, tags, and favorite icon to the list item
            listItem.appendChild(titleArtistDiv);
            listItem.appendChild(favoriteIconSpan);
            listItem.appendChild(document.createElement('br')); // Add line break
            listItem.appendChild(tagsSpan);

            // Click event listener for the list item
            listItem.addEventListener('click', (event) => {
                // Check if the click target is the favorite icon
                if (!event.target.closest('.bi-star')) {
                    // Play the song only if the click target is not the favorite icon
                    playSong(song);
                }
            });

            // Click event listener to toggle favorite status
            favoriteIconSpan.addEventListener('click', (event) => {
                event.stopPropagation(); // Prevent list item click event when the star icon is clicked

                // Toggle the favorite status of the song
                const index = favoritedSongs.indexOf(song.id);
                if (index !== -1) {
                    // Song is currently favorited, unfavorite it
                    favoritedSongs.splice(index, 1); // Remove song ID from favoritedSongs
                } else {
                    // Song is currently not favorited, favorite it
                    favoritedSongs.push(song.id); // Add song ID to favoritedSongs
                }

                // Update local storage with updated favoritedSongs array
                localStorage.setItem('favoritedSongs', JSON.stringify(favoritedSongs));

                // Toggle the icon to reflect the updated favorite status
                if (favoritedSongs.includes(song.id)) {
                    // Song is favorited, display filled star icon
                    favoriteIconSpan.innerHTML = '<i class="bi bi-star-fill text-warning"></i>';
                } else {
                    // Song is not favorited, display empty star icon
                    favoriteIconSpan.innerHTML = '<i class="bi bi-star text-secondary"></i>';
                }
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

        // Add song ID as a query parameter to the URL
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('id', song.id); // Set 'id' query parameter with song ID
        const newUrl = `${window.location.origin}${window.location.pathname}?${urlParams.toString()}`;
        window.history.pushState({ path: newUrl }, '', newUrl); // Update URL without reloading
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

        if (tag === 'favorited') {
            // Toggle favorited filter
            if (isActive) {
                // If "Favorited" button is active, remove the filter
                displaySongs(songs); // Display all songs
                filterButton.classList.remove('active'); // Remove 'active' class from the button
            } else {
                // Filter songs to show only favorited songs
                const favoritedSongs = JSON.parse(localStorage.getItem('favoritedSongs')) || [];
                const filteredSongs = songs.filter(song => favoritedSongs.includes(song.id));
                displaySongs(filteredSongs); // Display filtered songs
                filterButton.classList.add('active'); // Add 'active' class to the button
            }
        } else {
            // Filter songs based on other tags
            const filteredSongs = songs.filter(song => {
                return song.tags.toLowerCase().includes(tag.toLowerCase());
            });
            displaySongs(filteredSongs); // Display filtered songs
            filterButton.classList.toggle('active'); // Toggle 'active' class on the button
        }

        // Remove 'active' class from other filter buttons
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            if (button !== filterButton && button.dataset.tag !== 'favorited') {
                button.classList.remove('active');
            }
        });
    };

    // Event listener for filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tag = button.dataset.tag;
            filterByTag(tag);
        });
    });


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