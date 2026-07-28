// Get DOM elements for author container and load more button
const authorContainer = document.getElementById('author-container');
const loadMoreBtn = document.getElementById('load-more-btn');

// Track pagination range for displaying authors
let startingIndex = 0;
let endingIndex = 8;
let authorDataArr = [];

// Fetch author data from API
fetch('https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json')
  .then((res) => res.json())
  .then((data) => {
    authorDataArr = data;
    displayAuthors(authorDataArr.slice(startingIndex, endingIndex));  
  })
  .catch((err) => {
    // Show error message if fetch fails
   authorContainer.innerHTML = '<p class="error-msg">There was an error loading the authors</p>';
  });

  // Load next batch of 8 authors
const fetchMoreAuthors = () => {
  startingIndex += 8;
  endingIndex += 8;

  displayAuthors(authorDataArr.slice(startingIndex, endingIndex));
  // Disable button if no more data to load
  if (authorDataArr.length <= endingIndex) {
    loadMoreBtn.disabled = true;
  loadMoreBtn.style.cursor = "not-allowed";
    loadMoreBtn.textContent = 'No more data to load';
  }
};

// Render author cards in the container
const displayAuthors = (authors) => {
  authors.forEach(({ author, image, url, bio }, index) => {
    authorContainer.innerHTML += `
    <div id="${index}" class="user-card">
      <h2 class="author-name">${author}</h2>
      <img class="user-img" src="${image}" alt="${author} avatar">
      <div class="purple-divider"></div>
      <p class="bio">${bio.length > 50 ? bio.slice(0, 50) + '...' : bio}</p>
      <a class="author-link" href="${url}" target="_blank">${author} author page</a>
    </div>
  `;
  });
};
// Event listener for load more button
loadMoreBtn.addEventListener('click', fetchMoreAuthors);