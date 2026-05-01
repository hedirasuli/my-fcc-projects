// app.ts
import {ApiClient} from './api-client.js';
import type {ExchangeRateResponse, CurrencyCode} from './types.js';

// Elements from the DOM
const amountInput = document.getElementById('amount') as HTMLInputElement;
const  currencySelect = document.getElementById('currency-select') as HTMLSelectElement;
const resultText = document.getElementById('result-text') as HTMLParagraphElement;
const rateInfo = document.getElementById('rate-info') as HTMLSpanElement;

// Initialize API Client (using a free exchange rate API)
const api = new ApiClient<ExchangeRateResponse>("https://open.er-api.com/v6");

async function convert() {
    console.log("Conversion started..."); 

    const amount = parseFloat(amountInput.value);
    const targetCurrency = currencySelect.value as CurrencyCode;

    if (isNaN(amount) || amount <= 0) {
        resultText.innerText = "0.00";
        return;
    }

    rateInfo.innerText = "Updating rates...";

    try {
        const data = await api.getLatestRates("USD");
        console.log("Data received:", data);

        // Changed 'conversion_rates' to 'rates' to match your API response
        if (data && data.rates) {
            const rate = (data.rates as any)[targetCurrency] ?? 0;
            let result = amount * rate;

            if (targetCurrency === 'IRR') {
                resultText.innerText = result.toLocaleString('fa-IR') + " Rial";
            } else {
                resultText.innerText = result.toFixed(2) + " " + targetCurrency;
            }

            rateInfo.innerText = `1 USDT ≈ ${rate} ${targetCurrency}`;
        }
    } catch (error) {
        console.error("Fetch error details:", error);
        rateInfo.innerText = "Error fetching real-time rates.";
    }
}

// Event Listeners for real-time conversion
amountInput.addEventListener('input', convert);
currencySelect.addEventListener('change', convert);

// Initial call
convert();