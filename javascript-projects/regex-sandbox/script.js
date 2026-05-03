// script.js

// 1. DOM Element Selection
const regexPattern = document.getElementById('pattern');
const stringToTest = document.getElementById('test-string'); // This is a <div> with contenteditable="true"
const testButton = document.getElementById('test-btn');
const testResult = document.getElementById('result');

const caseInsensitiveFlag = document.getElementById('i');
const globalFlag = document.getElementById('g');

const flagCheckboxes = [caseInsensitiveFlag, globalFlag];

// 2. Helper Function: getFlags
const getFlags = () => {
    return flagCheckboxes.reduce((flags, checkbox) => {
        if (checkbox.checked) {
            return flags + checkbox.id;
        }
        return flags;
    }, '');
};

// 3. Main Logic: testRegex
const testRegex = () => {
    const patternValue = regexPattern.value;
    
   
    const testStringValue = stringToTest.textContent; 

    if (!patternValue || !testStringValue) {
        testResult.textContent = 'Please enter both a pattern and a test string.';
        stringToTest.innerHTML = testStringValue;
        return;
    }

    const flags = getFlags();
    
    try {
        // Test if the regex and flags combination is valid
        new RegExp(patternValue, flags); 
    } catch (e) {
        testResult.textContent = `Invalid Regex: ${e.message}`; 
        stringToTest.innerHTML = testStringValue;
        return;
    }
    
    // --- 1. Match Finding Logic (Determines content of #result) ---
    
    // We use the user's flags for the match() call.
    const userDefinedRegex = new RegExp(patternValue, flags);
    // .match() returns an array of matched strings if 'g' is set, or a match object if not.
    const matchesForDisplay = testStringValue.match(userDefinedRegex);
    
    let matchedTexts = [];

    if (matchesForDisplay && flags.includes('g')) {
        // Global ON: array of all matched strings
        matchedTexts = matchesForDisplay;
    } else if (matchesForDisplay) {
        // Global OFF: just the first matched string (index 0 of the match object)
        matchedTexts.push(matchesForDisplay[0]);
    }

    // --- 2. Display Results & Highlighting ---
    
    if (matchedTexts.length === 0) {
        
        testResult.textContent = 'no match';
        stringToTest.innerHTML = testStringValue; 
    } else {
       
        testResult.textContent = matchedTexts.join(', ');

      
        
        // We use the user's flags for replacement. 
        // String.prototype.replace() naturally replaces only the first match when 'g' is absent.
        const highlightRegex = new RegExp(patternValue, flags); 
        
        const highlightedHTML = testStringValue.replace(highlightRegex, (match) => {
           
            return `<span class="highlight">${match}</span>`;
        });
        
       
        stringToTest.innerHTML = highlightedHTML;
    }
};

// 4. Event Binding
testButton.addEventListener('click', testRegex);