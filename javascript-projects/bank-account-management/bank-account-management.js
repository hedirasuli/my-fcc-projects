/**
 * BankAccount Class - Manages a bank account with deposit/withdraw functionality
 * and transaction history tracking.
 * 
 * @property {number} balance - The current account balance.
 * @property {Array<{type: string, amount: number}>} transactions - History of all transactions.
 */

class BankAccount {
    /**
     * Constructor initializes the account with zero balance and empty transaction list.
     * Note: In JavaScript, properties should be declared in the constructor.
     */
    constructor() {
        this.balance = 0;
        this.transactions = [];
    }
    /**
     * deposit - Adds a positive amount to the account balance.
     * @param {number} amount - The amount to deposit (must be > 0).
     * @returns {string} - Success or error message.
     */
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            this.transactions.push({ type: 'deposit', amount: amount });
            return `Successfully deposited $${amount}.`;
        }
        return "Deposit amount must be greater than zero.";
    }

    /**
     * withdraw - Subtracts a positive amount from the account balance if sufficient funds exist.
     * @param {number} amount - The amount to withdraw (must be > 0 and <= balance).
     * @returns {string} - Success or error message.
     */
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.transactions.push({ type: 'withdraw', amount: amount });
            return `Successfully withdrew $${amount}.`;
        }
        return "Insufficient balance or invalid amount.";
    }

    /**
     * listAllDeposits - Returns a comma-separated string of all deposit amounts.
     * @returns {string} - Formatted list of deposits.
     */
    listAllDeposits() {
        const deposits = this.transactions.filter(t => t.type === 'deposit').map(t => t.amount);
        return `Deposits: ${d.join(', ')}`;
    }

    /**
     * listAllWithdrawals - Returns a comma-separated string of all withdrawal amounts.
     * @returns {string} - Formatted list of withdrawals.
     */
    listAllWithdrawals() {
        const withdrawals = this.transactions.filter(t => t.type === 'withdraw').map(t => t.amount);
        return `Withdrawals: ${w.join(', ')}`;
    }
}

const myAccount = new BankAccount();

function updateUI(msg) {
    document.getElementById('balance-display').innerText = `Current balance: $${myAccount.balance}`;
    document.getElementById('message-log').innerText = msg;
    document.getElementById('deposit-list').innerText = myAccount.listAllDeposits();
    document.getElementById('withdraw-list').innerText = myAccount.listAllWithdrawals();
    document.getElementById('amount-input').value = "";
}

function handleDeposit() {
    const val = parseFloat(document.getElementById('amount-input').value);
    const res = myAccount.deposit(val);
    updateUI(res);
}

function handleWithdraw() {
    const val = parseFloat(document.getElementById('amount-input').value);
    const res = myAccount.withdraw(val);
    updateUI(res);
}