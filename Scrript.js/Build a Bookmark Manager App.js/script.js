// =================================================================
// 1. DOM Element References
// =================================================================

const mainSection = document.getElementById('main-section');
const formSection = document.getElementById('form-section');
const bookmarkListSection = document.getElementById('bookmark-list-section');
const categoryDropdown = document.getElementById('category-dropdown');
const categoryNameSpans = document.querySelectorAll('.category-name');
const nameInput = document.getElementById('name');
const urlInput = document.getElementById('url');
const categoryList = document.getElementById('category-list');

const addBookmarkButton = document.getElementById('add-bookmark-button');
const closeFormButton = document.getElementById('close-form-button');
const addBookmarkFormButton = document.getElementById('add-bookmark-button-form');
const viewCategoryButton = document.getElementById('view-category-button');
const closeListButton = document.getElementById('close-list-button');
const deleteBookmarkButton = document.getElementById('delete-bookmark-button');


// =================================================================
// 2. CORE UTILITY FUNCTIONS
// =================================================================

/**
 * @description Retrieves the bookmarks array from local storage.
 * Ensures the data is a valid array of bookmark objects (with name, url, category strings).
 * Returns an empty array if the key is missing, corrupted, or contains invalid data structure.
 * @returns {Array<Object>} The validated bookmarks array.
 */
const getBookmarks = () => {
    const bookmarks = localStorage.getItem('bookmarks');
    if (!bookmarks) return [];
    
    try {
        const parsedBookmarks = JSON.parse(bookmarks);
        if (Array.isArray(parsedBookmarks)) {
            // Filter to ensure every object has the required structure (name, url, category as strings)
            return parsedBookmarks.filter(b => 
                typeof b.name === 'string' && 
                typeof b.url === 'string' && 
                typeof b.category === 'string'
            );
        } else {
            return [];
        }
    } catch (e) {
        // Return empty array if JSON parsing fails
        return [];
    }
}

/**
 * @description Saves the given bookmarks array to local storage.
 * @param {Array<Object>} bookmarks The array of bookmark objects to save.
 */
const saveBookmarks = (bookmarks) => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
};

/**
 * @description Toggles visibility between the main section and the form section.
 */
const displayOrCloseForm = () => {
    mainSection.classList.toggle('hidden');
    formSection.classList.toggle('hidden');
};

/**
 * @description Toggles visibility between the main section and the bookmark list section.
 */
const displayOrHideCategory = () => {
    mainSection.classList.toggle('hidden');
    bookmarkListSection.classList.toggle('hidden');
};


// =================================================================
// 3. EVENT HANDLERS
// =================================================================

/**
 * @description Prepares the form for adding a new bookmark by setting the category name.
 */
const handleAddBookmark = () => {
    const selectedCategory = categoryDropdown.value;
    categoryNameSpans.forEach(span => {
        span.innerText = selectedCategory;
    });
    displayOrCloseForm();
};

/**
 * @description Closes the bookmark creation form.
 */
const handleCloseForm = () => {
    displayOrCloseForm();
};

/**
 * @description Handles form submission: validates inputs, creates a new bookmark object,
 * updates local storage, and resets the form.
 * @param {Event} e The submit event.
 */
const handleAddBookmarkForm = (e) => {
    e.preventDefault(); 

    const name = nameInput.value.trim();
    const url = urlInput.value.trim();
    const category = categoryDropdown.value;

    if (!name || !url) {
        alert("Please provide both a name and a URL.");
        return;
    }

    const newBookmark = { name, category, url };
    const bookmarks = getBookmarks();
    bookmarks.push(newBookmark);
    saveBookmarks(bookmarks);

    // Reset inputs
    nameInput.value = '';
    urlInput.value = '';

    displayOrCloseForm();
};

/**
 * @description Renders the list of bookmarks for the selected category, creating
 * radio buttons and anchor links for each entry.
 */
const handleViewCategory = () => {
    const selectedCategory = categoryDropdown.value;
    const bookmarks = getBookmarks();

    categoryNameSpans.forEach(span => {
        span.innerText = selectedCategory;
    });

    const filteredBookmarks = bookmarks.filter(b => b.category === selectedCategory);

    let listHTML = '';

    if (filteredBookmarks.length === 0) {
        listHTML = '<p>No Bookmarks Found</p>';
    } else {
        const radioGroupName = 'selected-bookmark'; 

        filteredBookmarks.forEach(bookmark => {
            // Set ID and Value to the raw bookmark name as required
            const radioId = bookmark.name; 
            
            listHTML += `
                <div>
                    <input type="radio" 
                           id="${radioId}" 
                           name="${radioGroupName}" 
                           value="${bookmark.name}">
                    <label for="${radioId}">
                        <a href="${bookmark.url}" target="_blank">${bookmark.name}</a>
                    </label>
                </div>
            `;
        });
    }

    // Overwrite inner HTML to ensure the list is refreshed completely
    categoryList.innerHTML = listHTML;

    displayOrHideCategory();
};

/**
 * @description Closes the bookmark list view.
 */
const handleCloseList = () => {
    displayOrHideCategory();
};

/**
 * @description Deletes the selected bookmark (matching both name and category)
 * from local storage and updates the displayed list.
 */
const handleDeleteBookmark = () => {
    const selectedRadio = document.querySelector('input[name="selected-bookmark"]:checked');

    if (!selectedRadio) {
        alert("Please select a bookmark to delete.");
        return;
    }

    const bookmarkNameToDelete = selectedRadio.value;
    const categoryToDeleteFrom = categoryDropdown.value; 

    let bookmarks = getBookmarks();

    // Find the index of the exact matching bookmark
    const indexToDelete = bookmarks.findIndex(b => 
        b.name === bookmarkNameToDelete && b.category === categoryToDeleteFrom
    );

    if (indexToDelete !== -1) {
        // Remove the item from the array
        bookmarks.splice(indexToDelete, 1);
        saveBookmarks(bookmarks);

        // Re-render the list immediately
        handleViewCategory(); 
    } else {
        alert("Could not find the selected bookmark.");
    }
};


// =================================================================
// 4. ATTACH LISTENERS
// =================================================================

addBookmarkButton.addEventListener('click', handleAddBookmark);
closeFormButton.addEventListener('click', handleCloseForm);
viewCategoryButton.addEventListener('click', handleViewCategory);
closeListButton.addEventListener('click', handleCloseList);
deleteBookmarkButton.addEventListener('click', handleDeleteBookmark);

// Attach form submission listener to the form element
document.querySelector('form').addEventListener('submit', handleAddBookmarkForm);

// Also attach the listener to the form button directly 
addBookmarkFormButton.addEventListener('click', handleAddBookmarkForm);