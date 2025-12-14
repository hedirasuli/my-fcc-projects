// Drum data array containing information for all nine drum pads.
// This structure makes it easy to generate the HTML and manage the logic.
const drumPads = [
  {
    key: 'Q',
    clipName: 'Heater 1',
    url: 'https://cdn.freecodecamp.org/curriculum/drum/Heater-1.mp3'
  },
  {
    key: 'W',
    clipName: 'Heater 2',
    url: 'https://cdn.freecodecamp.org/curriculum/drum/Heater-2.mp3'
  },
  {
    key: 'E',
    clipName: 'Heater 3',
    url: 'https://cdn.freecodecamp.org/curriculum/drum/Heater-3.mp3'
  },
  {
    key: 'A',
    clipName: 'Heater 4',
    url: 'https://cdn.freecodecamp.org/curriculum/drum/Heater-4_1.mp3'
  },
  {
    key: 'S',
    clipName: 'Clap',
    url: 'https://cdn.freecodecamp.org/curriculum/drum/Heater-6.mp3'
  },
  {
    key: 'D',
    clipName: 'Open-HH',
    url: 'https://cdn.freecodecamp.org/curriculum/drum/Dsc_Oh.mp3'
  },
  {
    key: 'Z',
    clipName: 'Kick-n-Hat',
    url: 'https://cdn.freecodecamp.org/curriculum/drum/Kick_n_Hat.mp3'
  },
  {
    key: 'X',
    clipName: 'Kick',
    url: 'https://cdn.freecodecamp.org/curriculum/drum/RP4_KICK_1.mp3'
  },
  {
    key: 'C',
    clipName: 'Closed-HH',
    url: 'https://cdn.freecodecamp.org/curriculum/drum/Cev_H2.mp3'
  }
];

// Function to generate the drum pads and append them to the #pad-bank
const generateDrumPads = () => {
  const padBank = document.getElementById('pad-bank');
  
  // Iterate through the drumPads data array
  drumPads.forEach(pad => {
    // 1. Create the clickable drum pad element (User Story 4 & 6)
    const drumPad = document.createElement('div');
    drumPad.className = 'drum-pad'; // Mandatory class
    drumPad.id = pad.clipName.replace(/\s/g, '-'); // Unique ID describing the clip
    drumPad.innerText = pad.key; // The key corresponding to the keyboard
    
    // Set a data attribute to easily access the clip name
    drumPad.setAttribute('data-clip-name', pad.clipName);

    // 2. Create the audio element (User Story 5)
    const audioElement = document.createElement('audio');
    audioElement.className = 'clip'; // Mandatory class
    audioElement.id = pad.key; // ID corresponding to the parent's inner text
    audioElement.src = pad.url; // Source of the audio clip

    // Append the audio element to the drum pad
    drumPad.appendChild(audioElement);

    // Append the drum pad to the pad bank
    padBank.appendChild(drumPad);
  });
};

// Call the function to set up the pads when the script runs
generateDrumPads();


// Get the display element for updating the clip name (User Story 8)
const display = document.getElementById('display');

/**
 * Plays the audio clip and updates the display.
 * @param {string} key - The key associated with the pad (e.g., 'Q').
 */
const playClip = (key) => {
  // Find the audio element by its ID (which is the key itself)
  const audio = document.getElementById(key);
  
  if (audio) {
    // Reset the audio time to the beginning before playing
    audio.currentTime = 0; 
    audio.play();

    // Get the parent .drum-pad element to retrieve the clip name
    const drumPad = audio.parentNode;
    const clipName = drumPad.getAttribute('data-clip-name');
    
    // Update the display text (User Story 8)
    display.innerText = clipName;

    // Add visual feedback class
    drumPad.classList.add('active');
    
    // Remove the visual feedback class after a short delay
    setTimeout(() => {
      drumPad.classList.remove('active');
    }, 100); // 100 milliseconds for a quick flash
  }
};

/**
 * Handles the click event on a drum pad (User Story 6).
 * @param {Event} event - The click event object.
 */
const handlePadClick = (event) => {
  // Get the inner text of the clicked drum pad, which is the key (Q, W, E, etc.)
  // The innerText of the drumPad is the same as the ID of its child audio element.
  const key = event.currentTarget.innerText;
  playClip(key);
};

// 1. Attach the click event listener to all drum pads
const allDrumPads = document.querySelectorAll('.drum-pad');
allDrumPads.forEach(pad => {
  pad.addEventListener('click', handlePadClick);
});


// 2. Attach the keydown event listener to the entire document (User Story 7)
document.addEventListener('keydown', (event) => {
  // Convert the pressed key to uppercase to match the drum pad keys (Q, W, E, etc.)
  const pressedKey = event.key.toUpperCase();
  
  // Find the drum pad element associated with the pressed key
  // We use the pressedKey to find the audio element ID, which is then passed to playClip
  const audioElement = document.getElementById(pressedKey);
  
  if (audioElement) {
    // Prevent default action (like scrolling if the key is spacebar, though not critical here)
    event.preventDefault(); 
    
    // Trigger the play function
    playClip(pressedKey);
  }
});