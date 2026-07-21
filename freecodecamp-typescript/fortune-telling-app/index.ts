// Interface representing the structure of a single tarot card object
interface Card {
  name: string;
  value: string | number;
  name_short: string;
  value_int: number;
  suit: string;
  type: string;
  img: string;
  meaning_up: string;
  meaning_rev: string;
  desc: string;
}

// Interface representing the overall deck structure fetched from the API
interface Deck {
  cards: Card[];
}

// Base URL for fetching card data and image assets
const CDN_URL = "https://cdn.freecodecamp.org/curriculum/typescript/tarot-app";
const defaultImg = new URL("default.svg", CDN_URL + "/");
const LOCAL_DEFAULT_IMG = defaultImg;

/**
 * Utility function to query an HTML element and ensure it exists in the DOM.
 * @template T - Type extending HTMLElement
 * @param selector - CSS selector string
 * @returns The requested HTMLElement cast to type T
 */
const getElement = <T extends HTMLElement>(selector: string): T => {
  const el = document.querySelector<T>(selector);
  if (!el) throw new Error(`Element not found: ${selector}`);
  return el;
};

/**
 * Utility function to hide multiple HTML elements by adding the 'hidden' class.
 * @param elements - Variadic list of HTMLElements to hide
 */
const hideElements = (...elements: HTMLElement[]) =>
  elements.forEach((el) => el.classList.add("hidden"));

/**
 * Utility function to display multiple HTML elements by removing the 'hidden' class.
 * @param elements - Variadic list of HTMLElements to show
 */
const showElements = (...elements: HTMLElement[]) =>
  elements.forEach((el) => el.classList.remove("hidden"));

/**
 * Helper function to select a random item from a generic array.
 * @template T - Type of elements inside the array
 * @param items - Array of items to select from
 * @returns A randomly selected item from the array
 */
const getRandomItem = <T,>(items: T[]): T => {
  const index = Math.floor(Math.random() * items.length);
  return items[index];
};

/**
 * Renders the HTML template string for a tarot card container.
 * @param drawingType - Title or label for the card position (e.g., Past, Present, Future)
 * @param isReversed - Boolean flag indicating if the card should be displayed upside down
 * @param shortName - Short identifier for the card used as data-id
 * @param img - Relative image file path
 * @returns Formatted HTML template string
 */
const renderCard = (drawingType: string, isReversed: boolean, shortName: string, img: string): string => `
  <div>
    <h2>${drawingType}</h2>
    <figure class="card_container ${isReversed ? "reversed-card" : ""}" data-id="${shortName}">
      <div class="img-loader"></div>
      <img
        src="${img ? `${CDN_URL}/${img}` : LOCAL_DEFAULT_IMG}"
        class="card-img hidden"
        onload="this.classList.remove('hidden');this.previousElementSibling.style.display='none';"
        onerror="
          if (!this.dataset.failed) {
            this.dataset.failed = '1';
            this.src='${LOCAL_DEFAULT_IMG}';
          } else {
            this.classList.remove('hidden');
            this.previousElementSibling.style.display='none';
          }
        "
      />
    </figure>
  </div>
`;
// Enum representing the three time horizons for a multi-card reading
enum DrawingType {
  Past = "past",
  Present = "present",
  Future = "future",
}

// Main application class managing game state and DOM interactions
class Game {
  cards: Card[] = [];

  // Cached object holding references to all required DOM elements
  private elements: {
    singleCardBtn: HTMLElement;
    singleCard: HTMLElement;
    multipleCardsBtn: HTMLElement;
    multipleCard: HTMLElement;
    title: HTMLElement;
    newReadingBtn: HTMLElement;
    fortuneContainer: HTMLElement;
    fortuneDescription: HTMLElement;
    headerTitle: HTMLElement;
    subTitle: HTMLElement;
    cardTitle: HTMLElement;
    description: HTMLElement;
    text: HTMLElement;
  };

  constructor() {
    // Cache DOM element references during instantiation
    this.elements = {
      singleCardBtn: getElement("#btn-single-card"),
      singleCard: getElement(".single_card"),
      multipleCardsBtn: getElement("#btn-multiple-cards"),
      multipleCard: getElement(".multiple_card"),
      title: getElement(".title"),
      newReadingBtn: getElement(".btn_reveal"),
      fortuneContainer: getElement(".fortune_container"),
      fortuneDescription: getElement(".fortune_description"),
      headerTitle: getElement(".header_title"),
      subTitle: getElement(".sub_title"),
      cardTitle: getElement(".desc_title"),
      description: getElement(".description"),
      text: getElement(".text"),
    };

    // Initialize application data and event listeners
    this.fetchCardsData();
    this.initializeEventListeners();
  }

  /**
   * Fetches tarot card data from the remote CDN JSON file.
   */
  private async fetchCardsData() {
    try {
      const response = await fetch(`${CDN_URL}/card_data.json`);
      const data: Deck = await response.json();
      this.cards = data.cards;
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  }

  /**
   * Registers DOM event listeners for user interactions.
   */
  private initializeEventListeners(): void {
    this.elements.singleCardBtn.addEventListener("click", () =>
      this.singleCardSelected(),
    );
    this.elements.multipleCardsBtn.addEventListener("click", () =>
      this.multipleCardSelected(),
    );
    this.elements.newReadingBtn.addEventListener("click", () =>
      this.newReading(),
    );

    document.addEventListener("click", (e: Event) => this.showFortune(e));
  }

  /**
   * Handles the single card reading mode.
   */
  singleCardSelected() {
    hideElements(
      this.elements.singleCardBtn,
      this.elements.multipleCardsBtn,
      this.elements.multipleCard,
      this.elements.text,
      this.elements.headerTitle,
    );

    const isReversed = Math.random() < 0.5;
    const chosenCard = getRandomItem(this.cards);
    this.elements.singleCard.innerHTML = renderCard(
      "Click the card and reveal the fortune",
      isReversed,
      chosenCard.name_short,
      chosenCard.img,
    );
    this.elements.multipleCard.innerHTML = "";
    showElements(this.elements.singleCard, this.elements.fortuneContainer);
  }

  /**
   * Handles the three-card reading mode (Past, Present, Future).
   */
  multipleCardSelected() {
    hideElements(
      this.elements.singleCard,
      this.elements.singleCardBtn,
      this.elements.multipleCardsBtn,
      this.elements.headerTitle,
    );

    showElements(
      this.elements.multipleCard,
      this.elements.fortuneContainer,
      this.elements.text,
    );

    this.elements.multipleCard.innerHTML = Object.values(DrawingType)
      .map((type) => {
        const isReversed = Math.random() < 0.5;
        const card = getRandomItem(this.cards);
        return renderCard(type, isReversed, card.name_short, card.img);
      })
      .join("");
  }

  /**
   * Event handler triggered when a user clicks on a card to reveal its fortune.
   * @param e - The click Event object
   */
  showFortune(e: Event) {
    const target = e.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const cardElement = target?.closest(".card_container");

    if (!cardElement) {
      return;
    }

    const cardId = cardElement.getAttribute("data-id");
    const foundCard = this.cards.find((card) => card.name_short === cardId);

    if (foundCard) {
      this.elements.cardTitle.textContent = foundCard.name;
      this.elements.description.textContent = foundCard.desc;
      this.elements.subTitle.textContent = foundCard.meaning_up;
      this.elements.title.textContent = foundCard.name;
      showElements(this.elements.fortuneDescription);
    }
  }

  /**
   * Resets the UI layout to allow starting a new reading.
   */
  newReading() {
    showElements(
      this.elements.singleCardBtn,
      this.elements.multipleCardsBtn,
      this.elements.headerTitle,
    );

    hideElements(
      this.elements.singleCard,
      this.elements.multipleCard,
      this.elements.fortuneContainer,
      this.elements.fortuneDescription,
    );
  }
}

// Instantiate the game instance to start the application
const game = new Game();