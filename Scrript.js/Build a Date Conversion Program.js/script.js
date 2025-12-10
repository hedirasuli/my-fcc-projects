/**
 * Converts a Date object into the MM/DD/YYYY format.
 *
 * @param {Date} dateObj - The Date object to format.
 * @returns {string} The formatted date string (e.g., "12/25/2025").
 */
function formatDateMMDDYYYY(dateObj) {
    // Get month, day, and year. Add 1 to month because it is 0-indexed (0=January).
    // Use padStart(2, '0') to ensure two digits (e.g., '05' instead of '5').
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    return `${month}/${day}/${year}`;
}

/**
 * Converts a Date object into a long, readable format (e.g., "Wednesday, December 10, 2025").
 *
 * @param {Date} dateObj - The Date object to format.
 * @returns {string} The long-formatted date string.
 */
function formatDateLong(dateObj) {
    // Use the native toLocaleDateString method for reliable long-format conversion.
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return dateObj.toLocaleDateString('en-US', options);
}

// ----------------------------------------------------------------------
// STEP 1: Calculate the output variables
// ----------------------------------------------------------------------

const currentDate = new Date();

// Default output: using the built-in toString() method of the Date object
const defaultOutput = `Current Date and Time: ${currentDate.toString()}`;

// Use the newly defined functions to get the formatted dates
const mmddyyyyOutput = formatDateMMDDYYYY(currentDate);
const longOutput = formatDateLong(currentDate);

// ----------------------------------------------------------------------
// STEP 2: Write the output to the HTML using the correct IDs
// ----------------------------------------------------------------------

// Output for the default date string
document.getElementById("current-date-output").textContent = defaultOutput;

// Output for the MM/DD/YYYY format
document.getElementById("mmddyyyy-output").textContent = `MM/DD/YYYY Format: ${mmddyyyyOutput}`;

// Output for the long format
document.getElementById("long-format-output").textContent = `Long Format: ${longOutput}`;