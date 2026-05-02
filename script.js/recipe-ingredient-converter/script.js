/**
 * Project: Professional Ingredient Converter
 * Logic: Functional Programming with Currying and Closures
 * * Documentation:
 * - This script manages unit conversion and recipe scaling.
 * - Uses curried functions to pre-load conversion factors and servings.
 * - Handles DOM manipulation to provide real-time feedback to the user.
 */

// Table of conversion factors relative to a base unit (e.g., cups)
const conversionTable = {
  cup: 1,
  gram: 240,
  ounce: 8,
  teaspoon: 48
};

/**
 * Curried function to convert quantities between units.
 * Usage: convertQuantity(fromUnit)(toUnit)(amount)
 */
const convertQuantity = (fromUnit) => (toUnit) => (quantity) => {
  const baseValue = quantity / conversionTable[fromUnit];
  return baseValue * conversionTable[toUnit];
};

/**
 * Curried function to scale quantities based on servings.
 * Usage: adjustForServings(baseQuantity)(newServings)
 */
const adjustForServings = (baseQuantity) => (newServings) => {
  return baseQuantity * newServings;
};

/**
 * Orchestrator function: Scales the ingredient and then converts the unit.
 * Returns a string formatted to two decimal places.
 */
const processIngredient = (baseQuantity, baseUnit, newUnit, newServings) => {
  const adjustedQuantity = adjustForServings(baseQuantity)(newServings);
  const convertedQuantity = convertQuantity(baseUnit)(newUnit)(adjustedQuantity);
  return convertedQuantity.toFixed(2);
};

// --- DOM Elements Selection ---
const ingredientName = document.getElementById("ingredient");
const ingredientQuantity = document.getElementById("quantity");
const unitToConvert = document.getElementById("unit");
const numberOfServings = document.getElementById("servings");
const recipeForm = document.getElementById("recipe-form");
const resultList = document.getElementById("result-list");

// Supported units array for iteration
const units = ["cup", "gram", "ounce", "teaspoon"];

/**
 * Updates the UI with the calculated results.
 * Clears previous results and iterates through supported units.
 */
const updateResultsList = () => {
  // Clear the existing list items
  resultList.innerHTML = "";

  units.forEach((unit) => {
    // Only convert to units different from the input unit
    if (unit !== unitToConvert.value) {
      const convertedValue = processIngredient(
        ingredientQuantity.value,
        unitToConvert.value,
        unit,
        numberOfServings.value
      );

      // Create and append the new list item to the DOM
      const listItem = document.createElement("li");
      listItem.textContent = `${ingredientName.value}: ${convertedValue} ${unit}`;
      resultList.appendChild(listItem);
    }
  });
};

/**
 * Event Listener for Form Submission
 * Prevents page refresh and triggers the calculation logic.
 */
recipeForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Stop default form reload
  updateResultsList();
});