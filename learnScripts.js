// Array of video data
const videos = [
    {
        id: 1,
        title: "Ultra Beginners Lesson",
        description: "This video is tailored for absolute beginners. Dell Puckett offers a basic introduction intended for those new to the subject.",
        youtubeLink: "https://youtu.be/wvZnjpXQRdQ?si=MR2Xl_C9HqWCPaKg",
        complete: false
    },
    {
        id: 2,
        title: "The Basics",
        description: "Dell Puckett teaches about open tuning, power chords, drone strings with melody, and blues progressions with turnaround.",
        youtubeLink: "https://youtu.be/rYZF9OlnvqM?si=mLTUUzjXC_NpVuXv",
        complete: false
    },
    {
        id: 3,
        title: "Learn Chords in Minutes",
        description: "In this beginner lesson Michael Bianconi, from Souther Fire Guitars, shows how to play some popular chords in a few different ways.",
        youtubeLink: "https://youtu.be/2FWETe3QU3w?si=jPyR1z4DF92CoxPi",
        complete: false
    },
    {
        id: 4,
        title: "1-4-5 Blues",
        description: "Mike Snowden teaches the blues in this beginner friendly lesson. Although he's playing with a slide at the beginning of the video, you don't need one to follow this lesson.",
        youtubeLink: "https://youtu.be/fDF10p5nWxs?si=-r2l3-nfP0o3Xs-3",
        complete: false
    },
    {
        id: 5,
        title: "Sweet Home Alabama",
        description: "In this lesson, Uncle Mark teaches you how to play a one finger \"bar chord\" version of Sweet Home Alabama by Lynyrd Skynyrd.",
        youtubeLink: "https://youtu.be/nGz2thUzqSE?si=KdikN8WqVvy50p2W",
        complete: false
    },
    {
        id: 6,
        title: "Strumming Techniques",
        description: "In this beginnger cirgar box guitar lesson, Brent Robitaille teaches different strumming techniques.",
        youtubeLink: "https://youtu.be/vpx-VXjBFQw?si=YA1-4_ro_e1RUjOf",
        complete: false
    },
    {
        id: 7,
        title: "10 Major Chord Shapes",
        description: "In this beginnger cirgar box guitar lesson, Brent Robitaille teaches 10 major chord shapes you should know.",
        youtubeLink: "https://youtu.be/dTjBvnKqEXo?si=X_A-jSPbbrhBA3tQ",
        complete: false
    },
    {
        id: 8,
        title: "10 Minor Chord Shapes",
        description: "In this beginnger cirgar box guitar lesson, Brent Robitaille teaches 10 minor chord shapes you should know.",
        youtubeLink: "https://youtu.be/sSXzSAythE4?si=i8hbtjml-saFiegF",
        complete: false
    },
    {
        id: 9,
        title: "Take Me Home, Country Road",
        description: "In this Lesson, Glenn Watt teaches you hoe to play a one figer version \"bar chord\" version of Take Me Home, Country Road by John Denver.",
        youtubeLink: "https://youtu.be/4SllWzPwXF4?si=d5pfXdqfhLd_L5-_",
        complete: false
    },
    {
        id: 10,
        title: "Bad Moon Rising",
        description: "In this Lesson, Glenn Watt teaches you hoe to play a one figer version \"bar chord\" version of Bad Moon Rising by Credence Clearwater Revival.",
        youtubeLink: "https://youtu.be/ydfH69uqJ9Q?si=TPhXbN3IzKy-K84S",
        complete: false
    },
    {
        id: 11,
        title: "La Grange",
        description: "In this lesson, Chickenbone John teaches a one chord favorite, based on John Lee Hooker's one chord boogie style - La Grange by ZZ Top",
        youtubeLink: "https://youtu.be/K3Q-Q2bDHlU?si=Wie384qj9G-cvBAq",
        complete: false
    },
    {
        id: 12,
        title: "Ring of Fire",
        description: "In this lesson, David Dempsey teaches you Ring of Fire by Johnny Cash.",
        youtubeLink: "https://youtu.be/Dm_gEJx6Dw8?si=yDxzg1FPjlTs_cRa",
        complete: false
    },
    {
        id: 13,
        title: "Travis Finger Picking",
        description: "In this beginnger cirgar box guitar lesson, Brent Robitaille teaches you how to fingerpick on your 3 cigar box guitar.",
        youtubeLink: "https://youtu.be/U0oNDbegpSo?si=ZVoM3PKdM9oghOei",
        complete: false
    },
    {
        id: 14,
        title: "Right Hand Figer Picking for Blues",
        description: "In this lesson, Shane Speal teaches you to develop a deep blues fingerpicking style on a 3-string cigar box guitar.",
        youtubeLink: "https://youtu.be/x99u46oZFJI?si=svg4xfDHUBhGpmHY",
        complete: false
    },
    {
        id: 15,
        title: "Introduction to Music Theory",
        description: "In this lesson, Dell Puckett teaches the basics for understanding the major scale, the chord sequence (numbers), and what makes a chord a major or a minor.",
        youtubeLink: "https://youtu.be/MQz2alrPCx4?si=NaU_E8VaPC-mkR3j",
        complete: false
    },
    {
        id: 16,
        title: "Understanding Intervals",
        description: "In this lesson, Dell Puckett teaches intervals AKA the \"distance\" between two notes.",
        youtubeLink: "https://youtu.be/CF6YKTr1PQo?si=kx5povsnSIHajzJz",
        complete: false
    },
    {
        id: 17,
        title: "The Universal Chord Progression",
        description: "In this lesson, Dell Puckett demonstrates the 1, 5, 6, 4 chord progression adapted for the 3 String Cigar Box Guitar.",
        youtubeLink: "https://youtu.be/uEVwUufs86Q?si=2pFQhyn9CAU6xUmu",
        complete: false
    },
    {
        id: 18,
        title: "Time, Meter, and Rhythm",
        description: "In this lesson, Pat Curley teaches music theory fundamentals including Time, Meter, and Rythm.",
        youtubeLink: "https://youtu.be/7gIJy7jE7z8?si=c8TINLEO6aRG4ex2",
        complete: false
    },
    {
        id: 19,
        title: "How To Use a Pick",
        description: "In this lesson, Pat Curley teaches proper picking technique on a cigar box guitar.",
        youtubeLink: "https://youtu.be/4MoxQ6IomNE?si=r-3jOaH5xG8OdKwe",
        complete: false
    },
    {
        id: 20,
        title: "3 String Country Blues",
        description: "In this lesson, Michael Bianconi teaches a three string cigar box guitar country blues tune.",
        youtubeLink: "https://youtu.be/pC8sfg9QfW0?si=QAenfsFPb8o0CF6t",
        complete: false
    },
    {
        id: 21,
        title: "Play The 12 Bar Blues",
        description: "In this lesson, Geoff Saunders of Crazy Possum Guitars teaches the 12 bar blues.",
        youtubeLink: "https://youtu.be/GtHdYKJT60I?si=YVPzrxrooC-qL7zT",
        complete: false
    },
    {
        id: 22,
        title: "The 12 Bar Blues Box",
        description: "In this lesson, Dell Puckett breaks down and explains the 12 bar blues progression using a simple box diagram.",
        youtubeLink: "https://youtu.be/fIzUhmhjV-Y?si=43wm0Kbw-Jf0iWn-",
        complete: false
    }
    /*
    {
        id: ,
        title: "",
        description: "",
        youtubeLink: "",
        complete: false
    }
    */
];

// Array of courses
const courses = [
    {
        title: "Getting Started",
        videoIds: [1, 2, 19, 3, 6, 7, 8, 4]
    },
    {
        title: "Songs for Beginners",
        videoIds: [5, 9, 10, 11, 12]
    },
    {
        title: "Finger Picking",
        videoIds: [13, 14]
    },
    {
        title: "Music Theory",
        videoIds: [15, 16, 17, 18, 22]
    },
    {
        title: "Learn The Blues",
        videoIds: [4, 20, 21, 14, 22]
    }
];
// Function to display courses and populate the first course on load
function displayCourses() {
    const coursesList = document.getElementById("courses");
    const courseTitleElement = document.getElementById("course");

    // Populate courses list
    courses.forEach((course, index) => {
        const courseItem = document.createElement("li");
        courseItem.textContent = course.title;
        courseItem.classList.add('list-group-item', 'course-item');
        courseItem.setAttribute("data-video-ids", course.videoIds.join(','));
        courseItem.addEventListener("click", () => {
            updateVideoList(course.videoIds);
            courseTitleElement.textContent = course.title;
            updateURLWithCourseAndVideo(course.title, course.videoIds[0]); // Update URL with course title and first video ID
        });
        coursesList.appendChild(courseItem);

        // Display the first course on page load if no URL params are present
        if (index === 0 && !window.location.search) {
            updateVideoList(course.videoIds); // Populate video list for the first course
            courseTitleElement.textContent = course.title; // Set course title
            updateURLWithCourseAndVideo(course.title, course.videoIds[0]); // Update URL with course title and first video ID
        }
    });

    // Check URL parameters and display appropriate course and video on page load
    const urlParams = new URLSearchParams(window.location.search);
    const courseTitle = urlParams.get('course');
    const videoId = parseInt(urlParams.get('video'), 10);

    if (courseTitle && videoId) {
        const course = courses.find(c => c.title === courseTitle);
        if (course) {
            updateVideoList(course.videoIds);
            courseTitleElement.textContent = course.title;
            const video = videos.find(v => v.id === videoId);
            if (video) {
                playVideo(video);
            }
        }
    }
}

// Function to update video list based on selected course
function updateVideoList(videoIds) {
    const videoList = document.getElementById("videoList");
    videoList.innerHTML = ''; // Clear existing video list

    videoIds.forEach(videoId => {
        const video = videos.find(v => v.id === videoId);
        if (video) {
            const listItem = document.createElement("li");
            const completionIcon = document.createElement("i");

            // Retrieve completion status from local storage
            const completionStatus = localStorage.getItem(`video_${videoId}_completed`);
            video.complete = completionStatus === 'true'; // Set video's completion status

            // Determine icon and color based on completion status
            if (video.complete) {
                completionIcon.classList.add('bi', 'bi-check-circle-fill');
                completionIcon.style.color = 'green';
            } else {
                completionIcon.classList.add('bi', 'bi-check-circle');
                completionIcon.style.color = 'inherit';
            }

            listItem.textContent = video.title;
            listItem.classList.add('list-group-item');
            listItem.setAttribute("data-id", video.id);

            // Add completion icon to the list item
            listItem.appendChild(completionIcon);
            videoList.appendChild(listItem);

            // Clicking on video list item should play the video and update the URL
            listItem.addEventListener("click", () => {
                playVideo(video); // Play the video
                updateURLWithCourseAndVideo(document.getElementById("course").textContent, video.id); // Update URL with current course and video ID
            });

            // Toggle completion status on icon click
            completionIcon.addEventListener("click", (event) => {
                event.stopPropagation(); // Prevent click event from propagating to the list item
                video.complete = !video.complete; // Toggle completion status
                saveVideoCompletionStatus(video.id, video.complete); // Save to local storage

                // Update the completion icon appearance based on the new completion status
                if (video.complete) {
                    completionIcon.classList.remove('bi-check-circle');
                    completionIcon.classList.add('bi-check-circle-fill');
                    completionIcon.style.color = 'green';
                } else {
                    completionIcon.classList.remove('bi-check-circle-fill');
                    completionIcon.classList.add('bi-check-circle');
                    completionIcon.style.color = 'inherit';
                }
            });
        }
    });

    // Load the first video from the updated video list into the video player
    if (videoIds.length > 0) {
        const firstVideoId = videoIds[0];
        const firstVideo = videos.find(v => v.id === firstVideoId);
        if (firstVideo) {
            playVideo(firstVideo);
        }
    }
}

// Function to save video completion status to local storage
function saveVideoCompletionStatus(videoId, completed) {
    localStorage.setItem(`video_${videoId}_completed`, completed);
}

// Function to play selected video and update the URL
function playVideo(video) {
    const videoId = getYouTubeVideoId(video.youtubeLink);
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    const videoData = document.getElementById("videoData");
    videoData.innerHTML = `
        <h2>${video.title}</h2>
        <p>${video.description}</p>
    `;

    const videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.innerHTML = `
        <iframe width="560" height="315" src="${embedUrl}" frameborder="0" allowfullscreen></iframe>
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

// Function to update URL with course and video ID
function updateURLWithCourseAndVideo(courseTitle, videoId) {
    const url = new URL(window.location);
    url.searchParams.set('course', courseTitle);
    url.searchParams.set('video', videoId);
    window.history.pushState({}, '', url);
}

// Display initial list of courses and populate the first course on load
displayCourses();



const shareButton = document.getElementById('learnShareButton');
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