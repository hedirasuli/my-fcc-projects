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

// Function to convert a Product into an HTML string
function renderProduct(product: Product): string {
  let info = "";

  // Use type narrowing to determine the specific properties
  switch (product.type) {
    case "book":
      info = `Book: ${product.title} by ${product.author}`;
      break;
    case "electronics":
      info = `Electronics: ${product.item} - ${product.model}`;
      if (product.warranty !== undefined) {
        info += ` - Warranty: ${product.warranty} year(s)`;
      }
      break;
    case "clothing":
      info = `Clothing: ${product.item} by ${product.brand}`;
      if (product.size !== undefined) {
        info += ` - Size ${product.size}`;
      }
      break;
    default:
      // Fallback for an invalid product type
      throw new Error(`Unknown product type: ${JSON.stringify(product)}`);
  }

  return `
    <div class="item" id="${product.id}">
      <p class="price">${product.price}</p>
      <p class="info">${info}</p>
    </div>
  `;
}

// Instantiate the Collection with at least one item of each type
const products = new Collection<Product>([
  {
    type: "book",
    id: "b1",
    price: 19.99,
    title: "Clean Code",
    author: "Robert C. Martin",
  },
  {
    type: "electronics",
    id: "e1",
    price: 899.99,
    item: "Laptop",
    model: "XPS 13",
    warranty: 2,
  },
  {
    type: "clothing",
    id: "c1",
    price: 29.99,
    item: "T-Shirt",
    brand: "Nike",
    size: "M",
  },
  {
    type: "clothing",
    id: "c2",
    price: 45.0,
    item: "Jeans",
    brand: "Levi's",
  } // No size provided to test the optional property
]);

// Function to render products to the DOM, filtered by type if provided
function showProducts(type?: string): void {
  const outputDiv = document.getElementById("output");
  
  if (!outputDiv) return;

  const filteredItems = type
    ? products.filter((p) => p.type === type)
    : products.getAll();

  outputDiv.innerHTML = filteredItems.map(renderProduct).join("");
}

// Set up event listeners once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Show all products by default
  showProducts();

  // Attach click events to the category buttons
  document.getElementById("all")?.addEventListener("click", () => showProducts());
  document.getElementById("books")?.addEventListener("click", () => showProducts("book"));
  document.getElementById("electronics")?.addEventListener("click", () => showProducts("electronics"));
  document.getElementById("clothing")?.addEventListener("click", () => showProducts("clothing"));
});