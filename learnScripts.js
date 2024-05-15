// Array of video data
const videos = [
    {
        id: 1,
        title: "Introduction to JavaScript",
        description: "Learn the basics of JavaScript programming.",
        youtubeLink: "https://www.youtube.com/watch?v=PkZNo7MFNFg"
    },
    {
        id: 2,
        title: "CSS Flexbox Tutorial",
        description: "A comprehensive guide to CSS Flexbox layout.",
        youtubeLink: "https://www.youtube.com/watch?v=JJSoEo8JSnc"
    },
    {
        id: 3,
        title: "React.js Crash Course",
        description: "Build a React.js application from scratch.",
        youtubeLink: "https://www.youtube.com/watch?v=Ke90Tje7VS0"
    },
    {
        id: 4,
        title: "HTML in 5 Minutes",
        description: "Learn the fundamentals of HTML5.",
        youtubeLink: "https://youtu.be/salY_Sm6mv4?si=-8crvTZbBPw8Az26"
    },
    {
        id: 5,
        title: "Responsive Web Design",
        description: "Create responsive websites using CSS media queries.",
        youtubeLink: "https://www.youtube.com/watch?v=2KL-z9A56SQ"
    },
    {
        id: 6,
        title: "Node.js Tutorial for Beginners",
        description: "Get started with Node.js and build server-side applications.",
        youtubeLink: "https://www.youtube.com/watch?v=TlB_eWDSMt4"
    }
];

// Array of courses
const courses = [
    {
        title: "Web Development Basics",
        videoIds: [1, 2, 4]
    },
    {
        title: "Advanced CSS",
        videoIds: [1, 2, 3, 4, 5, 6]
    },
    {
        title: "Node.js Development",
        videoIds: [5, 3, 6]
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
        });
        coursesList.appendChild(courseItem);

        // Display the first course on page load
        if (index === 0) {
            updateVideoList(course.videoIds); // Populate video list for the first course
            courseTitleElement.textContent = course.title; // Set course title
        }
    });
}

// Function to update video list based on selected course
function updateVideoList(videoIds) {
    const videoList = document.getElementById("videoList");
    videoList.innerHTML = ''; // Clear existing video list

    videoIds.forEach(videoId => {
        const video = videos.find(v => v.id === videoId);
        if (video) {
            const listItem = document.createElement("li");
            listItem.textContent = video.title;
            listItem.classList.add('list-group-item');
            listItem.setAttribute("data-id", video.id);
            listItem.addEventListener("click", () => playVideo(video));
            videoList.appendChild(listItem);
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

// Function to play selected video
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

// Display initial list of courses and populate the first course on load
displayCourses();
