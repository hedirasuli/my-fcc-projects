const inventory = [];

/**
 * findProductIndex
 * Searches the inventory array for a product name (case-insensitive)
 * and returns its index, or -1 if not found.
 *
 * @param {string} productName The name of the product to search for.
 * @returns {number} The index of the product or -1.
 */
function findProductIndex(productName) {
  const searchName = productName.toLowerCase();

  return inventory.findIndex(product => product.name === searchName);
}


function addProduct(product) {
  
  const normalizedName = product.name.toLowerCase();
  const index = findProductIndex(normalizedName);

  if (index !== -1) {
   
    inventory[index].quantity += product.quantity;

   
    console.log(normalizedName + " quantity updated");
  } 
  else {
  
    product.name = normalizedName;

  
    inventory.push(product);

   
    console.log(normalizedName + " added to inventory");
  }
}

function removeProduct(productName, quantity) {
  const normalizedName = productName.toLowerCase();
  const index = findProductIndex(normalizedName);

  
  if (index === -1) {
   
    console.log(normalizedName + " not found");
    return; 
  }

  
  const currentProduct = inventory[index];
  

  if (currentProduct.quantity >= quantity) {
    
    
    currentProduct.quantity -= quantity;

    
    if (currentProduct.quantity === 0) {
   
      inventory.splice(index, 1);
    } 
    else {
     
      console.log("Remaining " + currentProduct.name + " pieces: " + currentProduct.quantity);
    }
  } 
  else {
   
    console.log("Not enough " + currentProduct.name + " available, remaining pieces: " + currentProduct.quantity);
  }
}