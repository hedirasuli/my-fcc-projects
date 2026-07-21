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