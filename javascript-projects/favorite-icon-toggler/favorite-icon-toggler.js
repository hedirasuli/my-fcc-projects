/**
 * Favorite Icon Toggler
 * 
 * This script allows users to click on heart icons to toggle between
 * empty heart (♡) and filled heart (♥) states.
 * 
 * Features:
 * - Toggles CSS class 'filled' for styling
 * - Changes innerHTML between empty and filled heart HTML entities
 * - Applies to all elements with class 'favorite-icon'
 */

// Step 1: Select all favorite icon buttons using class selector
// querySelectorAll returns a NodeList of all elements with class "favorite-icon"
const favoriteButtons = document.querySelectorAll('.favorite-icon');

// Step 2: Iterate through each button and add a click event listener
// forEach loops through all buttons in the NodeList
favoriteButtons.forEach(button => {
        // Add click event listener to each button
        // When clicked, the arrow function executes the toggle logic
    button.addEventListener('click', () => {
      
        // Check if the button currently has the 'filled' class
        // contains() returns true if the class exists, false otherwise
        if (button.classList.contains('filled')) {
           
            // --- CASE 1: Button is currently filled (active) ---
            // Remove the 'filled' class to change styling back to empty
            button.classList.remove('filled');

            // Change the inner HTML to empty heart HTML entity
            // &#9825; is the HTML entity for empty heart (♡)
            // This visually changes the heart from filled to empty
            button.innerHTML = '&#9825;'; 
        } else {
            // --- CASE 2: Button is currently empty (inactive) ---
            // Add the 'filled' class to change styling to filled/active
            button.classList.add('filled');

            // Change the inner HTML to filled heart HTML entity
            // &#10084; is the HTML entity for filled heart (♥)
            // This visually changes the heart from empty to filled
            button.innerHTML = '&#10084;'; 
        }
    });
});