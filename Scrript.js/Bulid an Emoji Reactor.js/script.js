const btns = document.querySelectorAll(".emoji-btn"); 

function updateCount(button) {
  const countEl = button.querySelector(".count"); 
  const currentText = countEl.textContent; 
  const parts = currentText.split('/'); 
  let currCount = Number(parts[0]); 

  if (currCount < 10) {
    currCount += 1; 
    countEl.textContent = `${currCount}/10`; 
  }
}


btns.forEach(btn => {
 
  btn.addEventListener("click", () => {
  
    updateCount(btn); 
  });
});