document.addEventListener('DOMContentLoaded', function () {
    const viewDetailsLinks = document.querySelectorAll('.view-details');
    const artworkDetails = document.querySelector('.artwork-details');

    viewDetailsLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Get details for the clicked exhibition
            const exhibition = this.closest('.exhibition');
            const imageSrc = exhibition.querySelector('img').src;
            const title = exhibition.querySelector('h2').textContent;
            const artist = exhibition.getAttribute('data-artist');
            const medium = exhibition.getAttribute('data-medium');
            const description = exhibition.getAttribute('data-description');
            const price = exhibition.getAttribute('data-price');

            // Update the artwork details section with the exhibition data
            artworkDetails.style.display = 'block';
            artworkDetails.querySelector('.artwork-image').src;
            artworkDetails.querySelector('.artwork-title').textContent = title;
            artworkDetails.querySelector('.artist').textContent = "Van Gogh";
            artworkDetails.querySelector('.medium').textContent = medium;
            artworkDetails.querySelector('.description').textContent = description;
            artworkDetails.querySelector('.price').textContent = price;
        });
    });
});
