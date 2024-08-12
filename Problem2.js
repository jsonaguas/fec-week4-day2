let balance = 0;

function deposit(amount) {
    balance += amount;
    console.log(`Deposited: $${amount}`);
}

function withdraw(amount) {
    if (amount > this.balance) {
        console.log('Insufficient funds');
        return;
    } else {
        balance -= amount;
        console.log(`Withdrew: $${amount}`);
    }
}

function getBalance() {
    console.log(`Current balance: $${balance}`);
    return balance;
}

deposit(100);
withdraw(50);
getBalance();
