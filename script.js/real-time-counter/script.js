       const textInput = document.getElementById('text-input');
        const charCountElement = document.getElementById('char-count');
        const MAX_CHARS = 50;


        function updateCounter() {
            let text = textInput.value;

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