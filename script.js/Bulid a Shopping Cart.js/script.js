/* Shopping Cart Project
  This script manages a product list, a shopping cart class, 
  and UI updates for a web store.
*/

const productsContainer = document.getElementById("products-container");
const cartSubTotal = document.getElementById("cart-subtotal");
const cartTaxes = document.getElementById("cart-taxes");
const cartTotal = document.getElementById("cart-total");
const totalNumberOfItems = document.getElementById("total-items");
const clearCartBtn = document.getElementById("clear-cart-btn");
const addToCartBtns = document.getElementsByClassName("add-to-cart-btn");

// 1. Data Structure: The list of available products
const products = [
  { id: 1, name: "Vanilla Cupcakes (6 Pack)", price: 12.99, category: "Cupcake" },
  { id: 2, name: "French Macaroons", price: 3.99, category: "Macaroon" },
  { id: 3, name: "Pumpkin Cupcake", price: 3.99, category: "Cupcake" },
  { id: 4, name: "Chocolate Cupcake", price: 5.99, category: "Cupcake" },
  { id: 5, name: "Chocolate Pretzels (4 Pack)", price: 10.99, category: "Pretzel" },
  { id: 6, name: "Strawberry Ice Cream", price: 2.99, category: "Ice Cream" },
  { id: 7, name: "Chocolate Macaroons", price: 9.99, category: "Macaroon" },
  { id: 8, name: "Strawberry Macaroons", price: 11.99, category: "Macaroon" },
  { id: 9, name: "Peach Glazed Donut", price: 1.99, category: "Donut" },
  { id: 10, name: "Sugar Glazed Donut", price: 1.49, category: "Donut" },
  { id: 11, name: "Chocolate Glazed Donut", price: 1.99, category: "Donut" },
  { id: 12, name: "Vanilla Glazed Donut", price: 1.49, category: "Donut" },
];

// 5. UI Logic: Function to display products on the page
const displayProducts = () => {
  /* Loop through the products array and create HTML for each */
  products.forEach(({ id, name, price, category }) => {
    productsContainer.innerHTML += `
      <div class="product-card">
        <div class="product-info">
          <h3>${name}</h3>
          <p class="category">Category: ${category}</p>
          <p class="price">$${price}</p>
        </div>
        <button id="${id}" class="add-to-cart-btn">Add to Cart</button>
      </div>
    `;
  });
};

// Call the function to render products when the script loads
displayProducts();

// 2. Class Definition: Handles the logic of the shopping cart
class ShoppingCart {
  constructor() {
    this.items = [];
    this.total = 0;
    this.taxRate = 8.25;
  }

  // Adds a product to the items array
  addItem(id, products) {
    const product = products.find((item) => item.id === id);
    this.items.push(product);
  }

  // Returns total count of items in the cart
  getCounts() {
    return this.items.length;
  }

  // Helper: Calculates tax based on a given amount
  calculateTaxes(amount) {
    return parseFloat(((this.taxRate / 100) * amount).toFixed(2));
  }

  // Core Logic: Calculates totals and updates the UI elements
  calculateTotal() {
    const subTotal = this.items.reduce((total, item) => total + item.price, 0);
    const tax = this.calculateTaxes(subTotal);
    this.total = subTotal + tax;

    // Update the HTML display
    cartSubTotal.textContent = `$${subTotal.toFixed(2)}`;
    cartTaxes.textContent = `$${tax.toFixed(2)}`;
    cartTotal.textContent = `$${this.total.toFixed(2)}`;

    return this.total;
  }

  // Resets the cart and UI after user confirmation
  clearCart() {
    if (!this.items.length) {
      alert("Your shopping cart is already empty");
      return;
    }

    const isCartCleared = confirm("Are you sure you want to clear all items from your shopping cart?");

    if (isCartCleared) {
      this.items = [];
      this.total = 0;
      productsContainer.innerHTML = "";
      totalNumberOfItems.textContent = 0;
      cartSubTotal.textContent = 0;
      cartTaxes.textContent = 0;
      cartTotal.textContent = 0;
    }
  }
}

// 3. Initialization: Create a new instance of the cart
const cart = new ShoppingCart();

// 4. Event Listeners: Logic for user interaction
[...addToCartBtns].forEach((btn) => {
  btn.addEventListener("click", (event) => {
    // Add item, update count display, and recalculate financial totals
    cart.addItem(Number(event.target.id), products);
    totalNumberOfItems.textContent = cart.getCounts();
    cart.calculateTotal();
  });
});

// Attach the clearCart method, binding 'this' to the cart instance
clearCartBtn.addEventListener("click", cart.clearCart.bind(cart));