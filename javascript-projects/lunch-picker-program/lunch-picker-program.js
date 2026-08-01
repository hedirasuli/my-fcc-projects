// Array to store lunch menu items
const lunches = [];

/**
 * Add an item to the end of the menu
 * @param {Array} menuArray - The menu array
 * @param {string} lunchItem - Item to add
 * @returns {Array} - Updated menu array
 */
function addLunchToEnd(menuArray, lunchItem) {
    menuArray.push(lunchItem);
    console.log(`${lunchItem} added to the end of the lunch menu.`);
    return menuArray;
}

/**
 * Add an item to the start of the menu
 * @param {Array} menuArray - The menu array
 * @param {string} lunchItem - Item to add
 * @returns {Array} - Updated menu array
 */
function addLunchToStart(menuArray, lunchItem) {
    menuArray.unshift(lunchItem);
    console.log(`${lunchItem} added to the start of the lunch menu.`);
    return menuArray;
}

/**
 * Remove the last item from the menu
 * @param {Array} menuArray - The menu array
 * @returns {Array} - Updated menu array
 */
function removeLastLunch(menuArray) {
    if (menuArray.length === 0) {
        console.log("No lunches to remove.");
    } else {
        const removedItem = menuArray.pop();
        console.log(`${removedItem} removed from the end of the lunch menu.`);
    }
    return menuArray;
}

/**
 * Remove the first item from the menu
 * @param {Array} menuArray - The menu array
 * @returns {Array} - Updated menu array
 */
function removeFirstLunch(menuArray) {
    if (menuArray.length === 0) {
        console.log("No lunches to remove.");
    } else {
        const removedItem = menuArray.shift();
        console.log(`${removedItem} removed from the start of the lunch menu.`);
    }
    return menuArray;
}

/**
 * Select and display a random lunch item
 * @param {Array} menuArray - The menu array
 */
function getRandomLunch(menuArray) {
    if (menuArray.length === 0) {
        console.log("No lunches available.");
    } else {
        const randomIndex = Math.floor(Math.random() * menuArray.length);
        const randomLunch = menuArray[randomIndex];
        console.log(`Randomly selected lunch: ${randomLunch}`);
    }
}

/**
 * Display all menu items as a comma-separated list
 * @param {Array} menuArray - The menu array
 */
function showLunchMenu(menuArray) {
    if (menuArray.length === 0) {
        console.log("The menu is empty.");
    } else {
        const menuString = menuArray.join(', ');
        console.log(`Menu items: ${menuString}`);
    }
}
// Show initial empty menu
showLunchMenu(lunches);

addLunchToEnd(lunches, "Tacos");
addLunchToStart(lunches, "Sushi");
addLunchToEnd(lunches, "Burger");
// Display current menu
showLunchMenu(lunches);
// Get a random lunch
getRandomLunch(lunches);
// Remove from end and start
removeLastLunch(lunches);
removeFirstLunch(lunches);
showLunchMenu(lunches);
// Try removing more items than available
removeLastLunch(lunches);
removeLastLunch(lunches);
getRandomLunch(lunches);
showLunchMenu(lunches);