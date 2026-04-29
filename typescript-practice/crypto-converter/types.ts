/**
 * Interface for the Exchange Rate API response
 */
export interface ExchangeRateResponse {
    result: string;
    base_code: string;
    conversion_rates: {
        [key: string]: number; // Dynamic keys for currency symbols (e.g., USD, IRR)
    };
}

/**
 * Supported currencies for our converter
 */
export type CurrencyCode = 'USD' | 'EUR' | 'IRR' | 'GBP';