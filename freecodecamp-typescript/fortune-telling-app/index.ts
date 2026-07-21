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