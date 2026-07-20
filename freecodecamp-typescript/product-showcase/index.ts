// Define the base Item interface
interface Item {
  type: "book" | "electronics" | "clothing";
  id: string;
  price: number;
}

// Define the Book interface extending Item
interface Book extends Item {
  type: "book";
  title: string;
  author: string;
}

// Define the Electronics interface extending Item
interface Electronics extends Item {
  type: "electronics";
  item: string;
  model: string;
  warranty?: number;
}

// Define the Clothing interface extending Item
interface Clothing extends Item {
  type: "clothing";
  item: string;
  brand: string;
  size?: "S" | "M" | "L";
}

// Create a union type of all product interfaces
type Product = Book | Electronics | Clothing;

// Generic Collection class to handle items of type T
class Collection<T> {
  items: T[];

  constructor(items: T[]) {
    this.items = items;
  }

  // Returns all items in the collection
  getAll(): T[] {
    return this.items;
  }

  // Filters items based on a callback condition
  filter(callback: (item: T) => boolean): T[] {
    return this.items.filter(callback);
  }
}