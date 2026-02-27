const { useState, useMemo, useCallback } = React;

// Static list of items to be displayed
const items = [
  "Apples",
  "Bananas",
  "Strawberries",
  "Blueberries",
  "Mangoes",
  "Pineapple",
  "Lettuce",
  "Broccoli",
  "Paper Towels",
  "Dish Soap",
];

// Variable to track the function reference across renders
let prevToggleItem = null;

export const ShoppingList = () => {
  // State for the search input and selected items
  const [query, setQuery] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  // Memoize the filtering logic to avoid unnecessary recalculations
  const filteredItems = useMemo(() => {
    console.log("Filtering items...");
    return items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  // Memoize the toggle function to maintain the same reference between renders
  const toggleItem = useCallback((item) => {
    setSelectedItems((prev) => {
      return prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item];
    });
  }, [setSelectedItems]);

  // Log whether the function reference has changed or remained the same
  if (prevToggleItem !== toggleItem) {
    console.log("New toggleItem function");
    prevToggleItem = toggleItem;
  } else {
    console.log("Current toggleItem function");
  }

  return (
    <div className="container">
      <h1>Shopping List</h1>
      <form>
        <label htmlFor="search">Search for an item:</label>
        <input
          id="search"
          type="search"
          placeholder="Search..."
          aria-describedby="search-description"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        /> 
        <p id="search-description">Type to filter the list below:</p>
        
        <ul>
          {filteredItems.map((item) => {
            // Check if the current item is in the selected list
            const isChecked = selectedItems.includes(item);
            
            return (
              <li
                key={item}
                // Apply conditional styling based on selection state
                style={{ textDecoration: isChecked ? "line-through" : "none" }}
              >
                <label>
                  <input
                    type="checkbox"
                    onChange={() => toggleItem(item)}
                    checked={isChecked}
                  />
                  {item}
                </label>
              </li>
            );
          })}
        </ul>
      </form>
    </div>
  );
};