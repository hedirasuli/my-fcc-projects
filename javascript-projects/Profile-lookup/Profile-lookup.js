let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Loop through each contact in the contacts array
  for (let i = 0; i < contacts.length; i++) {
    // Store the current contact object for easier access
    const contact = contacts[i]; 
    
    // Check if the current contact's firstName matches the provided name
    if (contact.firstName === name) {
      
      // Check if the contact has the property being searched for
      if (contact.hasOwnProperty(prop)) {
        // If the property exists, return its value
        return contact[prop]; 
      } else {
        // If the property doesn't exist, return an error message
        return "No such property"; 
      }
    }
  }
  // If the loop finishes without finding a matching contact, return an error message
  return "No such contact"; 
}