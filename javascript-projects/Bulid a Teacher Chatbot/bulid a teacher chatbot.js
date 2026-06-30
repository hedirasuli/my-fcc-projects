/**
 * Lesson: JavaScript Strings - Template Literals, Length Property,
 * Index Access, and indexOf() Method
 */

// Display a welcome message to the console
console.log("Hi there!");

// Declare a constant variable for the bot's name
const botName = "teacherBot";
// Use a template literal to create a greeting string
const greeting = `My name is ${botName}.`;
console.log(greeting);
// Declare variables for the lesson subject and topic
const subject = "JavaScript";
const topic = "strings";
// Create a sentence using template literals
const sentence = `Today, you will learn about ${topic} in ${subject}.`;
console.log(sentence);
// Introduction to the .length property
const strLengthIntro = `Here is an example of using the length property on the word ${subject}.`;
console.log(strLengthIntro);
// Log the length of the "subject" string (JavaScript → 10 characters)
console.log(subject.length);
// Log a message and the length of the "topic" string (strings → 7 characters)
console.log(`Here is an example of using the length property on the word ${topic}.`);
console.log(topic.length);
// Introduction to accessing characters by index (zero-based)
console.log(`Here is an example of accessing the first letter in the word ${subject}.`);
// Log the first character of "subject" (index 0 → 'J')
console.log(subject[0]);

console.log(`Here is an example of accessing the second letter in the word ${subject}.`);
console.log(subject[1]);

console.log(`Here is an example of accessing the last letter in the word ${subject}.`);

const lastCharacter = subject[subject.length - 1];
console.log(lastCharacter);

const learningIsFunSentence = "Learning is fun.";

console.log("Here are examples of finding the positions of substrings in the sentence.");

console.log(learningIsFunSentence.indexOf("Learning"));

console.log(learningIsFunSentence.indexOf("fun"));
console.log(learningIsFunSentence.indexOf("learning"));

console.log("I hope you enjoyed learning today.");