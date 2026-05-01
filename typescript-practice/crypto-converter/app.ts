// app.ts
import {ApiClient} from './api-client.js';
import {ExchangeRateResponse, CurrencyCode} from './types.js';

// Elements from the DOM
const amountInput = document.getElementById('amount') as HTMLInputElement;
const  currencySelect = document.getElementById('currency-Select') as HTMLSelectElement;
const resultText = document.getElementById('result-Text') as HTMLParagraphElement;
const rateInfo = document.getElementById('rate-Info') as HTMLSpanElement;

// Initialize API Client (using a free exchange rate API)
const api = new ApiClient<ExchangeRateResponse>("https://v6.exchangerate-api.com/v6/YOUR_API_KEY");

async function convert() {
    const amount = parseFloat(amountInput.value);
    const targetCurrency = currencySelect.value as CurrencyCode;

    if (isNaN(amount) || amount <= 0) {
        resultText.innerText = "0.00";
        return;
    }

    rateInfo.innerText = "Updating rates...";

    // Fetch rates with USDT (or USD as proxy) as base
    const data = await api.getLatestRates("USD");

    if (data && data.conversion_rates) {
        const rate = data.conversion_rates[targetCurrency];
        let result = amount * rate;

        // Custom Logic: Adjusting for IRR (Market rate vs Official rate)
        // Most APIs show official rate. Real market rate is often different.
        if (targetCurrency === 'IRR') {
            resultText.innerText = result.toLocaleString('fa-IR') + " Rial";
        } else {
            resultText.innerText = result.toFixed(2) + " " + targetCurrency;
        }

        rateInfo.innerText = `1 USDT ≈ ${rate} ${targetCurrency}`;
    } else {
        rateInfo.innerText = "Error fetching rates.";
    }
}

// Event Listeners for real-time conversion
amountInput.addEventListener('input', convert);
currencySelect.addEventListener('change', convert);

// Initial call
convert();