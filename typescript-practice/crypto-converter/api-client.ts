// api-client.ts

/**
 * Generic API Client optimized for fetching exchange rates
 */
export class ApiClient<T> {
    private baseUrl: string;

    constructor(url: string) {
        this.baseUrl = url;
    }

    /**
     * Fetches live data from the exchange rate service
     * @param baseCurrency - The starting currency (e.g., 'USDT' or 'USD')
     * @returns A promise with the exchange rate data
     */
    async getLatestRates(baseCurrency: string): Promise<T | null> {
        try {
            // I use the 'latest' endpoint of the API
            const response = await fetch(`${this.baseUrl}/latest/${baseCurrency}`);

            if (!response.ok) {
                throw new Error(`API Error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            return data as T;
        } catch (error) {
            console.error("Could not fetch exchange rates:", error);
            return null; // Return null so the UI can handle the error state
        }
    }
}

