// Get references to the essential HTML elements
const messageInput = document.getElementById("message-input");
const result = document.getElementById("result-message");
const checkMessageButton = document.getElementById("check-message-btn");

// --- REGULAR EXPRESSION DEFINITIONS (THE SPAM DETECTION LOGIC) ---

//  Matches "please help" or "assist me" (case-insensitive)
const helpRegex = /please help|assist me/i; 

//  Matches dollar amounts (e.g., "500 dollars", "1 million dollars").
// It handles multiple digits, optional place values (hundred, thousand, etc.), 
// optional whitespace (\s*), and required whitespace (\s+).
const dollarRegex = /[0-9]+\s*(?:hundred|thousand|million|billion)?\s+dollars/i;

//  Matches "free money" while accounting for leetspeak (e.g., "fr33 m0n3y").
// It also enforces whole-word matching using anchors (^/$) and whitespace (\s).
// [e3] -> e or 3; [o0] -> o or 0
const freeRegex = /(?:\s|^)fr[e3][e3] m[o0]n[e3]y(?:\s|$)/i;

//  Matches "stock alert" using extensive leetspeak substitutions.
// [s5], [t7], [o0], [a@4], [e3], [c{[(], and enforces whole-word matching.
const stockRegex = /(?:\s|^)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:\s|$)/i;

//  Matches "dear friend" using leetspeak and enforces whole-word matching.
// [i1|] -> i or 1 or pipe symbol
const dearRegex = /(?:\s|^)d[e3][a@4]r fr[i1|][e3]nd(?:\s|$)/i;

//  Array containing all defined spam regular expressions.
const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex];

// --- CORE FUNCTIONALITY ---

/**
 * Checks if the given message matches any of the spam patterns in the denyList.
 * @param {string} msg - The message input by the user.
 * @returns {boolean} - True if the message is spam, false otherwise.
 */
const isSpam = (msg) => {
  //  Uses the .some() array method. This returns true if the callback function
  // (regex.test(msg)) returns true for at least one element in the array.
  return denyList.some(regex => regex.test(msg)); 
};

// --- EVENT LISTENER ---

checkMessageButton.addEventListener("click", () => {
  if (messageInput.value === "") {
    alert("Please enter a message.");
    return;
  }

  // Check the message and update the result display
  result.textContent = isSpam(messageInput.value)
    ? "Oh no! This looks like a spam message."
    : "This message does not seem to contain any spam.";
    
  // Clear the input box after checking
  messageInput.value = "";
});