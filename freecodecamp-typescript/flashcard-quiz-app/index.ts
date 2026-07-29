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

// DOM Elements
const flashcardEl = document.getElementById("flashcard") as HTMLElement;
const cardQuestionEl = document.getElementById("card-question") as HTMLElement;
const cardAnswerEl = document.getElementById("card-answer") as HTMLElement;

const deleteBtn = document.getElementById("delete-btn") as HTMLElement;
const prevBtn = document.getElementById("prev-btn") as HTMLElement;
const nextBtn = document.getElementById("next-btn") as HTMLElement;

const entryForm = document.getElementById("entry-form") as HTMLFormElement;
const frontTextInput = document.getElementById("front-text") as HTMLTextAreaElement;
const backTextInput = document.getElementById("back-text") as HTMLTextAreaElement;

// Display Card Data (Test #9)
function renderCard(): void {
  if (!currentCards || currentCards.length === 0) {
    if (cardQuestionEl) cardQuestionEl.textContent = "";
    if (cardAnswerEl) cardAnswerEl.textContent = "";
    return;
  }

  if (currentIndex >= currentCards.length) {
    currentIndex = currentCards.length - 1;
  }
  if (currentIndex < 0) {
    currentIndex = 0;
  }
  const activeCard = currentCards[currentIndex];
  if (cardQuestionEl) cardQuestionEl.textContent = activeCard.questionText;
  if (cardAnswerEl) cardAnswerEl.textContent = activeCard.questionAnswer;
}

//  Click event listener that explicitly toggles the 'flipped' class
if (flashcardEl) {
  flashcardEl.addEventListener("click", function () {
    this.classList.toggle("flipped");
  });
}

//  Delete card and display previous card
if (deleteBtn) {
  deleteBtn.addEventListener("click", () => {
    if (currentCards.length === 0) return;

    // 1. Remove current card from collection
    currentCards.splice(currentIndex, 1);

    // 2. Move index to previous card
    if (currentIndex > 0) {
      currentIndex--;
    }

    // 3. Reset flip status
    if (flashcardEl) {
      flashcardEl.classList.remove("flipped");
    }

    // 4. Update display with previous card's data
    renderCard();
  });
}

// Navigation Controls
if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    if (currentCards.length === 0) return;
    currentIndex = (currentIndex - 1 + currentCards.length) % currentCards.length;
    if (flashcardEl) flashcardEl.classList.remove("flipped");
    renderCard();
  });
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    if (currentCards.length === 0) return;
    currentIndex = (currentIndex + 1) % currentCards.length;
    if (flashcardEl) flashcardEl.classList.remove("flipped");
    renderCard();
  });
}

//  Throw InvalidUserInputError directly on empty input
if (entryForm) {
  entryForm.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    const questionText = frontTextInput ? frontTextInput.value.trim() : "";
    const questionAnswer = backTextInput ? backTextInput.value.trim() : "";

    // Throws custom error if inputs are empty
    if (!questionText || !questionAnswer) {
      throw new InvalidUserInputError("Both fields are required.");
    }

    currentCards.push({ questionText, questionAnswer });
    currentIndex = currentCards.length - 1;

    if (flashcardEl) flashcardEl.classList.remove("flipped");
    renderCard();
    entryForm.reset();
  });
}

// Initial render
renderCard();

export {};