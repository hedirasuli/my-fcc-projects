/**
 * Quiz Game Logic
 * This file contains the data structure and functions necessary to run a simple quiz round
 * based on the provided user stories.
 */

// --- 1. Data Structure: The questions array ---
const questions = [
    {
        category: "Programming",
        question: "Which keyword is used to declare a constant in JavaScript?",
        choices: ["var", "let", "const"],
        answer: "const"
    },
    {
        category: "History",
        question: "When did the first moon landing occur?",
        choices: ["1965", "1969", "1972"],
        answer: "1969"
    },
    {
        category: "Science",
        question: "What is the chemical symbol for water?",
        choices: ["O2", "H2O", "CO2"],
        answer: "H2O"
    },
    {
        category: "Geography",
        question: "What is the capital city of Japan?",
        choices: ["Kyoto", "Osaka", "Tokyo"],
        answer: "Tokyo"
    },
    {
        category: "Programming",
        question: "Which method adds an element to the end of an array?",
        choices: ["shift()", "push()", "pop()"],
        answer: "push()"
    },
    {
        category: "Sports",
        question: "Which sport uses a shuttlecock?",
        choices: ["Tennis", "Badminton", "Squash"],
        answer: "Badminton"
    }
];

// --- 2. Function: Get a random question ---
/**
 * Takes an array of questions and returns a random question object.
 * @param {Array<Object>} questionsArray - The array of question objects.
 * @returns {Object} A randomly selected question object.
 */
function getRandomQuestion(questionsArray) {
    const randomIndex = Math.floor(Math.random() * questionsArray.length);
    return questionsArray[randomIndex];
}

// --- 3. Function: Get a random computer choice ---
/**
 * Takes an array of choices and returns a random choice from that array.
 * @param {Array<string>} choicesArray - The array containing the possible answers.
 * @returns {string} A randomly selected choice.
 */
function getRandomComputerChoice(choicesArray) {
    const randomIndex = Math.floor(Math.random() * choicesArray.length);
    return choicesArray[randomIndex];
}

// --- 4. Function: Determine results ---
/**
 * Compares the computer's choice to the correct answer and returns a result string.
 * @param {Object} questionObject - The selected question object.
 * @param {string} computerChoice - The answer selected by the computer.
 * @returns {string} The result message.
 */
function getResults(questionObject, computerChoice) {
    const correctAnswer = questionObject.answer;

    if (computerChoice === correctAnswer) {
        return "The computer's choice is correct!";
    } else {
        return `The computer's choice is wrong. The correct answer is: ${correctAnswer}`;
    }
}


// --- Demonstration of a Quiz Round ---
console.log("--- Quiz Game Simulation ---");

// Helper function to run and display one round
function runQuizRound(roundNumber) {
    // 1. Select a random question
    const selectedQuestion = getRandomQuestion(questions);
    
    // 2. The computer makes a random choice from the available options
    const computerChoice = getRandomComputerChoice(selectedQuestion.choices);
    
    // 3. Get the results
    const result = getResults(selectedQuestion, computerChoice);
    
    // Log the process
    console.log(`\n[ROUND ${roundNumber}]`);
    console.log(`Category: ${selectedQuestion.category}`);
    console.log(`Question: ${selectedQuestion.question}`);
    console.log(`Available Choices: [${selectedQuestion.choices.join(', ')}]`);
    console.log(`Computer's Choice: ${computerChoice}`);
    console.log(`-> Result: ${result}`);
}

// Run two rounds to demonstrate functionality
runQuizRound(1);
runQuizRound(2);

console.log("\n----------------------------");