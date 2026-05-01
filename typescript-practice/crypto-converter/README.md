# Crypto & Fiat Currency Converter

A real-time currency converter built with **TypeScript**, focusing on clean code, type safety, and seamless API integration.

## 🚀 Features
* **Live Exchange Rates**: Fetches real-time data from the ExchangeRate-API.
* **TypeScript Powered**: Fully typed components for better maintainability and error catching.
* **Smart IRR Formatting**: Special logic to display Iranian Rial (IRR) with localized formatting and market-rate considerations.
* **Instant Conversion**: Real-time updates using `input` and `change` event listeners.
* **Responsive UI**: Clean and modern design that works on both desktop and mobile.

## 🛠️ Tech Stack
* **Language**: TypeScript
* **Frontend**: HTML5, CSS3
* **API**: [ExchangeRate-API](https://www.exchangerate-api.com/)
* **Bundling/Compilation**: TSC (TypeScript Compiler)

## 📦 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/hedirasuli/crypto-converter.git
   
2. **Install dependencies**:
Ensure TypeScript is installed globally:

````Bash
npm install -g typescript

````
3. **Compile TypeScript**:
Run the compiler to generate JavaScript files:

````Bash
tsc
````

4. **Run the project**:
Open index.html using a local server (like Live Server in VS Code).

🔧 Project Structure
. app.ts: Main logic and DOM manipulation.

. api-client.ts: Dedicated class for handling API requests.

. types.ts: Custom interfaces and types for API responses.

. dist/: Contains the compiled JavaScript files.

📝 License
This project is open-source and available under the MIT License.