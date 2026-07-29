// 1. Custom Error Class (Test #12)
class InvalidUserInputError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = "InvalidUserInputError";
  }
}

(window as any).InvalidUserInputError = InvalidUserInputError;

// 2. FlashCard Interface (Tests #2, #3, #4)
interface FlashCard {
  questionText: string;
  questionAnswer: string;
}

// 3. Global Collection (Test #5)
var currentCards: FlashCard[] = [
  {
    questionText: "What is TypeScript?",
    questionAnswer: "A superset of JavaScript that adds static typing.",
  },
  {
    questionText: "What is the primary purpose of an interface?",
    questionAnswer: "To define the structure of an object.",
  }
];

(window as any).currentCards = currentCards;

let currentIndex: number = 0;
