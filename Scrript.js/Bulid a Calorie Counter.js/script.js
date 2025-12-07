// Variable declarations: Querying necessary DOM elements
const calorieCounter = document.getElementById('calorie-counter'); // The main form element
const budgetNumberInput = document.getElementById('budget'); // Input for daily calorie budget
const entryDropdown = document.getElementById('entry-dropdown'); // Dropdown to select meal/exercise category

const addEntryButton = document.getElementById('add-entry'); // Button to add a new entry field
const clearButton = document.getElementById('clear'); // Button to clear the form
const output = document.getElementById('output'); // Element to display final calculation results

let isError = false; // Global flag to track if an invalid input has been detected

// --------------------------------------------------------------------------------------
// Core Helper Functions
// --------------------------------------------------------------------------------------

/**
 * Cleans the input string by removing common scientific notation and calculation symbols (+, -, space).
 * This ensures the remaining string can be reliably checked for validity and converted to a number.
 * @param {string} str - The raw input string from the user.
 * @returns {string} The cleaned string.
 */
function cleanInputString(str) {
  const regex = /[+-\s]/g;
  return str.replace(regex, "");
}

/**
 * Checks if the cleaned input string contains invalid scientific notation (e.g., "1e3" or "2E-5").
 * @param {string} str - The cleaned input string.
 * @returns {Array | null} An array of matches if invalid notation is found, otherwise null.
 */
function isInvalidInput(str) {
  // Regular expression to match scientific notation format (digit followed by 'e' or 'E' followed by digit)
  const regex = /\d+e\d+/i;
  return str.match(regex);
}

// --------------------------------------------------------------------------------------
// Form Entry Management
// --------------------------------------------------------------------------------------

/**
 * Adds a new set of input fields (Name and Calories) for the currently selected meal/exercise category.
 * This function is called when the 'Add Entry' button is clicked.
 */
function addEntry() {
  const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
  
  // Calculate the next entry number (starting from 1) based on existing name input fields.
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
  
  const HTMLString = `
    <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
    <input 
      type="text" 
      id="${entryDropdown.value}-${entryNumber}-name" 
      placeholder="Name"
    />
    <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
    <input
      type="number"
      min="0"
      id="${entryDropdown.value}-${entryNumber}-calories"
      placeholder="Calories"
    />
  `;

  // Use insertAdjacentHTML to append new elements without wiping out data in existing inputs.
  targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
}

// --------------------------------------------------------------------------------------
// Calorie Calculation Logic
// --------------------------------------------------------------------------------------

/**
 * Iterates through a list of input elements (NodeList or Array), validates their values,
 * and sums the valid calorie numbers.
 * @param {NodeList | Array<Element>} list - The list of input elements to process.
 * @returns {number | null} The total sum of valid calories, or null if an invalid input is found.
 */
function getCaloriesFromInputs(list) {
  let calories = 0;

  for (const item of list) {
    // 1. Clean and validate input
    const currVal = cleanInputString(item.value);
    const invalidInputMatch = isInvalidInput(currVal);

    if (invalidInputMatch) {
      // 2. Handle invalid input: Alert user, set error flag, and stop calculation
      alert(`Invalid Input: ${invalidInputMatch[0]}`); 
      isError = true;
      return null;
    }
    
    // 3. Add valid, converted number value to the total
    calories += Number(currVal);
  }
  
  return calories;
}

/**
 * Primary function to calculate the final calorie balance and display results.
 * This function is the callback for the form's 'submit' event.
 * @param {Event} e - The submit event object.
 */
function calculateCalories(e) {
  // Prevent the default form submission behavior (page reload)
  e.preventDefault();
  // Reset the global error flag for the new calculation attempt
  isError = false;

  // Query all number inputs for each category
  const breakfastNumberInputs = document.querySelectorAll('#breakfast input[type="number"]');
  const lunchNumberInputs = document.querySelectorAll('#lunch input[type="number"]');
  const dinnerNumberInputs = document.querySelectorAll('#dinner input[type="number"]');
  const snacksNumberInputs = document.querySelectorAll('#snacks input[type="number"]');
  const exerciseNumberInputs = document.querySelectorAll('#exercise input[type="number"]');
  
  // Get calorie totals for each category
  const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
  const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
  const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
  const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
  const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs); // Calories burned (to be added to budget)
  const budgetCalories = getCaloriesFromInputs([budgetNumberInput]); // Budget input (passed as array)
  
  // If an error was detected in any input, stop execution
  if (isError) {
    return;
  }

  // Calculate totals
  const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
  const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
  
  // Determine if the result is a surplus (remaining < 0) or deficit (remaining >= 0)
  const surplusOrDeficit = remainingCalories < 0 ? "Surplus" : "Deficit";
  
  // Construct the final HTML output string
  output.innerHTML = `
    <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
    <hr>
    <p>${budgetCalories} Calories Budgeted</p>
    <p>${consumedCalories} Calories Consumed</p>
    <p>${exerciseCalories} Calories Burned</p>
  `;

  // Make the output element visible
  output.classList.remove('hide');
}

// --------------------------------------------------------------------------------------
// Form Clear Logic
// --------------------------------------------------------------------------------------

/**
 * Clears all dynamically added entry fields, resets the budget input, and hides the output area.
 */
function clearForm() {
  // Get all dynamic input containers and convert the NodeList to an array
  const inputContainers = Array.from(document.querySelectorAll('.input-container'));

  // Loop through the array and clear the inner HTML of each container
  for (const container of inputContainers) {
    container.innerHTML = "";
  }
  
  // Clear the budget input field
  budgetNumberInput.value = "";
  
  // Clear the output text and hide the output element
  output.innerText = "";
  output.classList.add('hide');
}

// --------------------------------------------------------------------------------------
// Event Listeners
// --------------------------------------------------------------------------------------

// 1. Event listener for adding new entry fields
addEntryButton.addEventListener('click', addEntry);

// 2. Event listener for calculating calories (triggered by form submission)
calorieCounter.addEventListener('submit', calculateCalories);

// 3. Event listener for clearing the entire form
clearButton.addEventListener('click', clearForm);