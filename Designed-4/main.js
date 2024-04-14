// main.js
document.addEventListener("DOMContentLoaded", function() {
    // Mock data for content
    const contentData = [
        { title: "Movie 1", image: "https://m.media-amazon.com/images/I/91zTlD7AY1L.jpg" },
        { title: "Movie 2", image: "https://rukminim2.flixcart.com/image/850/1000/jy4q3680/poster/s/z/k/large-kabir-singh-movie-jumbo-poster-for-room-office-kabir-singh-original-imafgej6t5ny9ezt.jpeg?q=90&crop=false" },
        // Add more content items as needed
    ];

    // Function to display content
    function displayContent(sectionId, data) {
        const section = document.getElementById(sectionId);
        const contentDiv = section.querySelector(".content");

        contentDiv.innerHTML = "";

        data.forEach(item => {
            const contentItem = document.createElement("div");
            contentItem.classList.add("content-item");

            const image = document.createElement("img");
            image.src = item.image;
            image.alt = item.title;

            contentItem.appendChild(image);
            contentDiv.appendChild(contentItem);
        });
    }

    // Display content on homepage
    displayContent("trending-movies", contentData);
    displayContent("series", contentData);
    displayContent("recommended-content", contentData);
});
