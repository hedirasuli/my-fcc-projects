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
