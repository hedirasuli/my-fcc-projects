// Array of fortune messages
const fortunes = [
  "Your cat will look very cuddly today.",
  "The weather will be nice tomorrow.",
  "Be cautious of your new neighbors.",
  "You will find a new hobby soon.",
  "It would be wise to avoid the color red today."
];

// Generate random index (0 to 4)
const randomIndex = Math.floor(Math.random() * fortunes.length);

// Select a random fortune
const selectedFortune = fortunes[randomIndex];

// Display the fortune
console.log(selectedFortune);