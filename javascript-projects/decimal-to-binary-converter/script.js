/**
 * Project: Decimal to Binary Converter
 * Feature: Visual Call Stack Animation for input '5'
 * 
 * This script converts decimal numbers to binary with a special
 * visual animation showing the call stack when the input is 5.
 */

// DOM element references
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
// Ensure this ID matches your HTML (it might be 'show-animation' or 'animation-container')
const animationContainer = document.getElementById("show-animation") || document.getElementById("animation-container");

/**
 * Animation data for the call stack visualization
 * Each object represents a step in the recursive decimalToBinary(5) process
 */
const animationData = [
  {
    inputVal: 5,
    addElDelay: 1000,  // Delay before adding to DOM (1s)
    msg: 'decimalToBinary(5) returns "10" + 1 (5 % 2). Then it pops off the stack.',
    showMsgDelay: 15000, // Delay before updating with message (15s)
    removeElDelay: 20000, // Delay before removing from DOM (20s)
  },
  {
    inputVal: 2,
    addElDelay: 1500,  // Added 1.5s after start
    msg: 'decimalToBinary(2) returns "1" + 0 (2 % 2) and gives that value to the stack below. Then it pops off the stack.',
    showMsgDelay: 10000, // 10s after being added
    removeElDelay: 15000, // 15s after being added
  },
  {
    inputVal: 1,
    addElDelay: 2000, // Added 2s after start
    msg: "decimalToBinary(1) returns '1' (base case) and gives that value to the stack below. Then it pops off the stack.",
    showMsgDelay: 5000,  // 5s after being added
    removeElDelay: 10000, // 10s after being added
  }
];

const decimalToBinary = (input) => {
  if (input === 0 || input === 1) {
    return String(input);
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
};

const showAnimation = () => {
  result.innerText = "Call Stack Animation In Progress...";

  animationData.forEach((obj) => {
    // 1. Add element to DOM
    setTimeout(() => {
      animationContainer.innerHTML += `
        <p id="stack-${obj.inputVal}" class="animation-frame">
          decimalToBinary(${obj.inputVal})
        </p>
      `;
    }, obj.addElDelay);

    // 2. Update text content
    setTimeout(() => {
      const el = document.getElementById(`stack-${obj.inputVal}`);
      if (el) el.textContent = obj.msg;
    }, obj.showMsgDelay);

    // 3. Remove element from DOM
    setTimeout(() => {
      const el = document.getElementById(`stack-${obj.inputVal}`);
      if (el) el.remove();
    }, obj.removeElDelay);
  });

  // Final Result display
  setTimeout(() => {
    result.textContent = decimalToBinary(5);
  }, 20000);
};

const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);

  if (!numberInput.value || isNaN(inputInt) || inputInt < 0) {
    alert("Please provide a decimal number greater than or equal to 0");
    return;
  }

  if (inputInt === 5) {
    showAnimation();
  } else {
    result.textContent = decimalToBinary(inputInt);
  }
  
  numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});