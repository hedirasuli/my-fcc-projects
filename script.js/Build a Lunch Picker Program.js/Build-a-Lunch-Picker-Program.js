const lunches = [];

function addLunchToEnd(menuArray, lunchItem) {
    menuArray.push(lunchItem);
    console.log(`${lunchItem} added to the end of the lunch menu.`);
    return menuArray;
}

function addLunchToStart(menuArray, lunchItem) {
    menuArray.unshift(lunchItem);
    console.log(`${lunchItem} added to the start of the lunch menu.`);
    return menuArray;
}

function removeLastLunch(menuArray) {
    if (menuArray.length === 0) {
        console.log("No lunches to remove.");
    } else {
        const removedItem = menuArray.pop();
        console.log(`${removedItem} removed from the end of the lunch menu.`);
    }
    return menuArray;
}

function removeFirstLunch(menuArray) {
    if (menuArray.length === 0) {
        console.log("No lunches to remove.");
    } else {
        const removedItem = menuArray.shift();
        console.log(`${removedItem} removed from the start of the lunch menu.`);
    }
    return menuArray;
}

function getRandomLunch(menuArray) {
    if (menuArray.length === 0) {
        console.log("No lunches available.");
    } else {
        const randomIndex = Math.floor(Math.random() * menuArray.length);
        const randomLunch = menuArray[randomIndex];
        console.log(`Randomly selected lunch: ${randomLunch}`);
    }
}

function showLunchMenu(menuArray) {
    if (menuArray.length === 0) {
        console.log("The menu is empty.");
    } else {
        const menuString = menuArray.join(', ');
        console.log(`Menu items: ${menuString}`);
    }
}

showLunchMenu(lunches);

addLunchToEnd(lunches, "Tacos");
addLunchToStart(lunches, "Sushi");
addLunchToEnd(lunches, "Burger");
showLunchMenu(lunches);

getRandomLunch(lunches);

removeLastLunch(lunches);
removeFirstLunch(lunches);
showLunchMenu(lunches);

removeLastLunch(lunches);
removeLastLunch(lunches);
getRandomLunch(lunches);
showLunchMenu(lunches);
