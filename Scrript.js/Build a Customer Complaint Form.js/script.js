// script.js

// === 1. DOM Element Selection ===

// Select the main form element by its ID.
const form = document.getElementById('form');

// Select all individual input fields required for validation.
const fullNameInput = document.getElementById('full-name');
const emailInput = document.getElementById('email');
const orderNoInput = document.getElementById('order-no');
const productCodeInput = document.getElementById('product-code');
const quantityInput = document.getElementById('quantity');

// Select group elements (fieldsets) and their dependent textareas/checkboxes.
const complaintsGroup = document.getElementById('complaints-group'); 
const complaintDescriptionInput = document.getElementById('complaint-description');
// Checkbox for "Other" complaint reason (used for conditional validation).
const otherComplaintCheckbox = document.getElementById('other-complaint'); 

const solutionsGroup = document.getElementById('solutions-group'); 
const solutionDescriptionInput = document.getElementById('solution-description');
// Radio button for "Other" solution (used for conditional validation).
const otherSolutionRadio = document.getElementById('other-solution'); 

// Array of all single input fields (for easy event listener attachment).
const inputFields = [
    fullNameInput, emailInput, orderNoInput, productCodeInput, quantityInput,
    complaintDescriptionInput, solutionDescriptionInput
];

// Array of all fieldset groups (for easy event listener attachment).
const fieldGroups = [
    complaintsGroup, solutionsGroup
];


// === 2. Utility Function: setFieldBorder ===

/**
 * Sets the border color of an element to green or red based on validity.
 * @param {HTMLElement} element - The DOM element (input, textarea, or fieldset) to style.
 * @param {boolean} isValid - True if the field is valid, false otherwise.
 */
function setFieldBorder(element, isValid) {
    if (element) {
        if (isValid) {
            // Set border color to green for valid fields/groups.
            element.style.borderColor = 'green';
        } else {
            // Set border color to red for invalid fields/groups.
            element.style.borderColor = 'red';
        }
    }
}


// === 3. Core Validation Function: validateForm ===

/**
 * Validates all form fields against their respective constraints.
 * Returns an object with field names as keys and boolean validity as values.
 */
function validateForm() {
    // --- Define Regular Expressions (Regex) ---
    // Standard email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    // Ten numbers, starting with 2024
    const orderNoRegex = /^2024\d{6}$/; 
    // Pattern: XX##-X###-XX# (X=letter, #=number)
    const productCodeRegex = /^[a-zA-Z]{2}\d{2}-[a-zA-Z]\d{3}-[a-zA-Z]{2}\d{1}$/; 

    // --- Validation Checks ---

    // a. #full-name: not empty.
    const isFullNameValid = fullNameInput.value.trim() !== ''; 

    // b. #email: must match the email regex pattern.
    const isEmailValid = emailRegex.test(emailInput.value.trim()); 

    // c. #order-no: must match the 2024###### regex pattern.
    const isOrderNoValid = orderNoRegex.test(orderNoInput.value.trim()); 

    // d. #product-code: must match the XX##-X###-XX# regex pattern.
    const isProductCodeValid = productCodeRegex.test(productCodeInput.value.trim()); 

    // e. #quantity: must be a positive integer.
    const quantityValue = parseInt(quantityInput.value, 10);
    const isQuantityValid = 
        !isNaN(quantityValue) && // Is a number
        quantityValue > 0 && // Is positive
        Number.isInteger(quantityValue); // Is an integer

    // f. #complaints-group: at least one checkbox must be checked.
    const checkedComplaints = complaintsGroup.querySelectorAll('input[type="checkbox"]:checked');
    const isComplaintsGroupValid = checkedComplaints.length > 0;

    // g. #complaint-description: min 20 chars ONLY if "Other" checkbox is checked.
    const isComplaintDescriptionValid = 
        // If "Other" is NOT checked, the field is valid (no length check required).
        !otherComplaintCheckbox.checked || 
        // OR (If "Other" IS checked) length must be >= 20.
        (otherComplaintCheckbox.checked && complaintDescriptionInput.value.trim().length >= 20);

    // h. #solutions-group: one radio button must be selected.
    const selectedSolution = solutionsGroup.querySelector('input[type="radio"]:checked');
    const isSolutionsGroupValid = selectedSolution !== null;

    // i. #solution-description: min 20 chars ONLY if "Other" radio button is selected.
    const isSolutionDescriptionValid = 
        // If "Other" is NOT selected, the field is valid.
        !otherSolutionRadio.checked || 
        // OR (If "Other" IS selected) length must be >= 20.
        (otherSolutionRadio.checked && solutionDescriptionInput.value.trim().length >= 20);

    // Return the object containing all validation results.
    return {
        'full-name': isFullNameValid,
        'email': isEmailValid,
        'order-no': isOrderNoValid,
        'product-code': isProductCodeValid,
        'quantity': isQuantityValid,
        'complaints-group': isComplaintsGroupValid,
        'complaint-description': isComplaintDescriptionValid,
        'solutions-group': isSolutionsGroupValid,
        'solution-description': isSolutionDescriptionValid
    };
}


// === 4. Overall Validity Check: isValid ===

/**
 * Checks if the entire form is valid based on the results from validateForm.
 * @param {object} validationResults - The object returned by validateForm().
 * @returns {boolean} True if all fields are valid, false otherwise.
 */
function isValid(validationResults) {
    // Checks if ALL values in the validationResults object are strictly true.
    return Object.values(validationResults).every(result => result === true);
}


// === 5. Event Listeners (Real-time and Submission) ===

// --- A. Change Events for Real-Time Validation and Highlighting ---

// Attach 'change' event listeners to all single input fields.
inputFields.forEach(input => {
    input.addEventListener('change', () => {
        const results = validateForm();
        const fieldName = input.id;
        
        // Highlight the current input based on its validity result.
        if (results[fieldName] !== undefined) {
            setFieldBorder(input, results[fieldName]);
        }
    });
});

// Attach 'change' event listeners to fieldset groups (checkboxes/radio buttons).
fieldGroups.forEach(group => {
    group.addEventListener('change', () => {
        const results = validateForm();
        const groupName = group.id; 

        // 1. Highlight the fieldset border itself.
        const isValidGroup = results[groupName];
        setFieldBorder(group, isValidGroup);
        
        // 2. Handle dependencies: Re-evaluate and highlight the corresponding description field.
        if (groupName === 'complaints-group') {
            setFieldBorder(complaintDescriptionInput, results['complaint-description']);
        } else if (groupName === 'solutions-group') {
            setFieldBorder(solutionDescriptionInput, results['solution-description']);
        }
    });
});


// --- B. Submit Event for Final Validation ---

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission/page reload.

    const validationResults = validateForm();
    
    // Check overall form validity using the isValid function.
    if (isValid(validationResults)) {
        // If valid, show success message (or proceed with actual form submission).
        alert('Form submitted successfully!');
        // Optionally: form.submit();
    } else {
        // If invalid, highlight all invalid fields/groups in red.

        // Map of field names to their respective DOM elements for highlighting.
        const allHighlightableElements = {
            'full-name': fullNameInput,
            'email': emailInput,
            'order-no': orderNoInput,
            'product-code': productCodeInput,
            'quantity': quantityInput,
            'complaints-group': complaintsGroup,
            'complaint-description': complaintDescriptionInput,
            'solutions-group': solutionsGroup,
            'solution-description': solutionDescriptionInput
        };

        // Loop through validation results to apply styling to all fields/groups.
        for (const fieldName in validationResults) {
            const isValidField = validationResults[fieldName];
            const elementToHighlight = allHighlightableElements[fieldName];

            // Highlight border (red for false, green for true).
            setFieldBorder(elementToHighlight, isValidField);
        }

        alert('Please correct the highlighted fields before submission.');
    }
});