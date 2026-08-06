// DOM element references
const textInput = document.getElementById('text-input');
const charCountElement = document.getElementById('char-count');
const MAX_CHARS = 50;

/**
 * Update the character counter and enforce character limit
 */
function updateCounter() {
// Get current input value
let text = textInput.value;
// If text exceeds max length, truncate it
if (text.length > MAX_CHARS) {
    text = text.substring(0, MAX_CHARS);
    textInput.value = text;
}

    const currentLength = text.length;
charCountElement.textContent = `Character Count: ${currentLength}/${MAX_CHARS}`;

    if (currentLength === MAX_CHARS) {
    charCountElement.classList.add('char-limit-reached');
} else {
    charCountElement.classList.remove('char-limit-reached');
}
}

textInput.addEventListener('input', updateCounter);
updateCounter();