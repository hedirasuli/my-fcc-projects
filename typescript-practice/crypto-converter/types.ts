/**
 * Interface for the Exchange Rate API response
 */
export interface ExchangeRateResponse {
    result: string;
    base_code: string;
    rates: {
        [key: string]: number; // Dynamic keys for currency symbols (e.g., USD, IRR)
                              // Changed from conversion_rates to rates
    };
}

/**
 * Supported currencies for our converter
 */
export type CurrencyCode = 'USD' | 'EUR' | 'IRR' | 'GBP';