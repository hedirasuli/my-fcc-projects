const { useState, useEffect } = React;

/**
 * FruitsSearch Component
 * A functional component that implements a live search feature with debouncing.
 */
export function FruitsSearch() {
  // State for the user's search input
  const [query, setQuery] = useState('');
  
  // State for the list of fruit names fetched from the API
  const [results, setResults] = useState([]);

  /**
   * Prevents the default form submission (page refresh)
   * @param {Event} e - The form submission event
   */
  function handleSubmit(e) {
    e.preventDefault();
  }

  /**
   * useEffect Hook: Triggered every time 'query' changes.
   * Implements a debounce to limit API calls for performance.
   */
  useEffect(() => {
    // 1. Guard Clause: If input is empty, clear results and stop
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    // 2. Debounce: Set a timer to delay the API request by 700ms
    const timeoutId = setTimeout(async () => {
      try {
        // Fetching data based on the current query
        const response = await fetch(`https://fruit-search.freecodecamp.rocks/api/fruits?q=${query}`);
        
        // Parsing the JSON response
        const data = await response.json();
        
        // Extracting only the names and updating the results state
        setResults(data.map(fruit => fruit.name));
      } catch (error) {
        // Logging any network or parsing errors
        console.error("Error fetching data:", error);
      }
    }, 700);

    /**
     * Cleanup: Clears the timeout if the user types again before 700ms,
     * or if the component unmounts.
     */
    return () => clearTimeout(timeoutId);
    
  }, [query]);

  // JSX Structure
  return (
    <div id="search-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search-input">Search for fruits:</label>
        <input
          id="search-input"
          type="search"
          value={query}
          /* Updates the query state on every keystroke */
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>

      <div id="results">
        {/* Ternary Operator: Renders the list if results exist, else shows a message */}
        {results.length > 0 ? (
          results.map(item => (
            <p key={item} className="result-item">
              {item}
            </p>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}