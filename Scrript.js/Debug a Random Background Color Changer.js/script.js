const darkColorsArr = [ 
  "#4CAF50",
  "#2196F3",
  "#9C27B0",
  "#FFC107",
  "#00BCD4",
  "#3F51B5",
  "#673AB7",
  "#FFEB3B",
  "#8BC34A",
  "#03A9F4",
 ];
 
 function getRandomIndex() {
    // 2. Fix capitalization: Math.random()
    // 3. Round down to the nearest whole number: Math.floor()
    // The existing Math.floor(darkColorsArr.length * Math.random()) is the correct formula
    // for getting a random, valid array index.
  const randomIndex = Math.floor(darkColorsArr.length * Math.random());
   return randomIndex;
 }
  console.log(getRandomIndex())
 
    // 4. Fix querySelector capitalization to camelCase: querySelector
 const body = document.querySelector("body");
 
    document.  querySelector("body");
    // 5. Fix ID selector by adding a hash symbol (#)
 const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");
 console.log(bgHexCodeSpanElement) 
 function changeBackgroundColor() {
    // 6. Call the function: getRandomIndex()
 const color = darkColorsArr[getRandomIndex()]; 
 bgHexCodeSpanElement.innerText = color;
 body.style.backgroundColor = color;
 }
    // 7. Fix ID name to match the expected ID: "#btn"
 const btn = document.querySelector("#btn");
 console.log(btn)
 
 btn.addEventListener("click", changeBackgroundColor);