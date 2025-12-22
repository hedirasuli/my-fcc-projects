class BankAccount {
    constructor() {
        this.balance = 0;
        this.transactions = [];
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            this.transactions.push({ type: 'deposit', amount: amount });
            return `Successfully deposited $${amount}.`;
        }
        return "Deposit amount must be greater than zero.";
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.transactions.push({ type: 'withdraw', amount: amount });
            return `Successfully withdrew $${amount}.`;
        }
        return "Insufficient balance or invalid amount.";
    }

    listAllDeposits() {
        const d = this.transactions.filter(t => t.type === 'deposit').map(t => t.amount);
        return `Deposits: ${d.join(', ')}`;
    }

    listAllWithdrawals() {
        const w = this.transactions.filter(t => t.type === 'withdraw').map(t => t.amount);
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