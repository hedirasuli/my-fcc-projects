/**
 * Currency Converter Component
 * 
 * A React component that allows users to convert between multiple currencies.
 * Uses real-time conversion rates (hardcoded for this example) and memoization
 * for performance optimization.
 */

// Import React hooks
const { useState, useMemo } = React;

/**
 * Currency exchange rates relative to USD
 * Each value represents how much 1 unit of that currency is worth in USD
 */
const fxToUSD = {
  USD: 1.0,
  NGN: 0.000688,  // Nigerian Naira
  EUR: 1.1,       // Euro
  GBP: 1.25,      // British Pound
  JPY: 0.007,     // Japanese Yen
  CAD: 0.75,      // Canadian Dollar
};

/**
 * CurrencyConverter Component
 * 
 * Main component that provides currency conversion functionality
 * Features:
 * - Convert between multiple currencies
 * - Real-time calculation as user inputs change
 * - Performance optimized with memoization
 * 
 * @returns {JSX.Element} Rendered currency converter UI
 */
export function CurrencyConverter() {
  // Extract available currency codes from the exchange rates object
  const currencies = Object.keys(fxToUSD);

  // State for the amount to convert (default: 1)
  const [amount, setAmount] = useState(1);
  
  // State for the source currency (default: first currency in list)
  const [fromCurrency, setFromCurrency] = useState(currencies[0]);
  
  // State for the target currency (default: second currency in list)
  const [toCurrency, setToCurrency] = useState(currencies[1]);

  /**
   * Memoized currency conversion calculations
   * 
   * This function calculates conversions from the source currency to ALL
   * available currencies. It's memoized to prevent unnecessary recalculations
   * when only the target currency changes.
   * 
   * Algorithm:
   * 1. Convert source amount to USD equivalent
   * 2. Calculate value in all other currencies using their USD rates
   * 
   * @dependencies amount, fromCurrency - Only recalculates when these change
   * @returns {Object} Map of currency codes to converted values (formatted to 2 decimals)
   */
  const allConversions = useMemo(() => {
    // Convert the input amount from source currency to USD
    const fromValInUsd = amount * fxToUSD[fromCurrency];
    
    // Initialize results object to store all conversions
    const results = {};
    
    // Calculate conversion to each available currency
    currencies.forEach(curr => {
      // Convert from USD to target currency, format to 2 decimal places
      results[curr] = (fromValInUsd / fxToUSD[curr]).toFixed(2);
    });
    
    return results;
  }, [amount, fromCurrency]); // Only recalculate when amount or source currency changes

  /**
   * Handle currency selection changes
   * 
   * Updates the appropriate state based on which dropdown changed
   * 
   * @param {Event} e - The change event from select elements
   */
  const handleChange = (e) => {
    if (e.target.name === "from") setFromCurrency(e.target.value);
    if (e.target.name === "to") setToCurrency(e.target.value);
  };

  return (
    <div className="converter-container">
      <h1>Currency Converter</h1>
      
      {/* Amount input field */}
      <label>
        Enter amount
        <input
          onChange={(e) => setAmount(Number(e.target.value))}
          value={amount}
          type="number"
          name="amount"
          min="0"
          step="0.01"
        />
      </label>

      {/* Source currency selector */}
      <label>
        From
        <select
          name="from"
          value={fromCurrency}
          onChange={handleChange}
        >
          {currencies.map((curr) => (
            <option key={curr} value={curr}>
              {curr}
            </option>
          ))}
        </select>
      </label>

      {/* Target currency selector */}
      <label>
        To
        <select
          name="to"
          onChange={handleChange}
          value={toCurrency}
        >
          {currencies.map((curr) => (
            <option key={curr} value={curr}>
              {curr}
            </option>
          ))}
        </select>
      </label>

      {/* Display conversion result */}
      {/* 
        Note: Uses the pre-calculated value from allConversions object
        This avoids recalculating when only the target currency changes
      */}
      <p id="conversion-result">
        {allConversions[toCurrency]} {toCurrency}
      </p>
    </div>
  );
}

/**
 * Performance Notes:
 * 1. useMemo prevents expensive recalculations when only the target currency changes
 * 2. All conversions are calculated once and stored for quick access
 * 3. Re-renders are minimized through smart dependency array [amount, fromCurrency]
 * 
 * Currency Conversion Formula:
 * targetValue = (amount * sourceToUSD) / targetToUSD
 * 
 * Example: Converting 100 EUR to GBP
 * 1. 100 EUR * 1.1 (EUR→USD rate) = 110 USD
 * 2. 110 USD / 1.25 (GBP→USD rate) = 88 GBP
 */ 