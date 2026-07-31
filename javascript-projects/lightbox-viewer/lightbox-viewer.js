// Select all gallery items and lightbox elements
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeBtn = document.getElementById('close-btn');
// Add click event to each gallery item
galleryItems.forEach(item => {
    item.addEventListener('click', (e) => {
        // Show lightbox
        lightbox.style.display = 'flex';
        
        // Get the thumbnail image source
        const thumbnailSrc = e.target.src; 
        
        // Convert thumbnail to full-size image (remove '-thumbnail')
        const fullSizeSrc = thumbnailSrc.replace('-thumbnail', ''); 
        // Set the lightbox image source
        lightboxImage.src = fullSizeSrc;
    });
});
// Close lightbox when close button is clicked
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});
// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});