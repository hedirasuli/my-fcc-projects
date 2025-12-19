// 1 & 2. Generate a random integer between 1 and 100
function generateElement() {
  return Math.floor(Math.random() * 100) + 1;
}

// 3, 4 & 5. Generate an array of 5 random integers
function generateArray() {
  const arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(generateElement());
  }
  return arr;
}

// 6 & 7. Create and return an empty div element
function generateContainer() {
  return document.createElement('div');
}

// 8 & 9. Fill a container with 5 spans representing array values
function fillArrContainer(element, array) {
  element.innerHTML = ''; // Clear previous content
  array.forEach(num => {
    const span = document.createElement('span');
    span.textContent = num;
    element.appendChild(span);
  });
}

// 10 & 11. Check if two numbers are in the correct order
function isOrdered(num1, num2) {
  return num1 <= num2;
}

// 12 & 13. Swap elements in the array if they are out of order
function swapElements(array, index) {
  if (!isOrdered(array[index], array[index + 1])) {
    let temp = array[index];
    array[index] = array[index + 1];
    array[index + 1] = temp;
  }
  return array;
}

// 14 & 15. Highlight the two elements currently being compared
function highlightCurrentEls(element, index) {
  const children = element.children;
  if (children[index] && children[index + 1]) {
    children[index].style.border = "2px dashed red";
    children[index + 1].style.border = "2px dashed red";
  }
}

// --- Event Listeners and Main Logic ---

const generateBtn = document.getElementById('generate-btn');
const sortBtn = document.getElementById('sort-btn');
const startingArrayDiv = document.getElementById('starting-array');
const arrayContainer = document.getElementById('array-container');

let currentArray = [];

// 16 & 17. Logic for the Generate Button
generateBtn.addEventListener('click', () => {
  // Clear the container (except for the starting-array div itself)
  arrayContainer.innerHTML = '';
  arrayContainer.appendChild(startingArrayDiv);
  
  // Generate and display new data
  currentArray = generateArray();
  fillArrContainer(startingArrayDiv, currentArray);
});

// ... (keep your existing helper functions: generateElement, generateArray, etc.)

sortBtn.addEventListener('click', () => {
  // 1. Reset the container to only show the starting array
  arrayContainer.innerHTML = '';
  arrayContainer.appendChild(startingArrayDiv);

  // 2. Initial state: Highlight the first two elements of the starting array
  highlightCurrentEls(startingArrayDiv, 0);

  let tempArr = [...currentArray];
  let swapped;
  
  // We use a nested loop to mirror the Bubble Sort passes
  for (let i = 0; i < tempArr.length; i++) {
    swapped = false;
    for (let j = 0; j < tempArr.length - 1; j++) {
      
      // Perform the swap logic in the background array
      if (!isOrdered(tempArr[j], tempArr[j + 1])) {
        swapElements(tempArr, j);
        swapped = true;
      }

      // 3. Create a NEW div for this step
      const stepDiv = generateContainer();
      fillArrContainer(stepDiv, [...tempArr]);
      
      // 4. Highlight the elements that will be compared in the NEXT step
      // The test expects the "current" comparison to be highlighted
      if (j < tempArr.length - 2) {
        highlightCurrentEls(stepDiv, j + 1);
      } else if (i < tempArr.length - 1) {
        // If we are at the end of a pass, highlight the start of the next pass
        highlightCurrentEls(stepDiv, 0);
      }

      arrayContainer.appendChild(stepDiv);
    }
    // If no elements were swapped in a whole pass, the array is sorted
    if (!swapped) break;
  }
});