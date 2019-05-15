// Using a class constructor function, assign and declare a function of bank account, where lets you credit, withdraw to the account and you will declare a balance function where it will tell you the amount

class BankAccount {
    constructor() {
        this.amount = 0;
    }

    withdraw(amount) {
        if (this.amount > amount && (this.amount - amount) > 1000) {
            this.amount -= amount;
        }
    }

    credit(amount) {
        if (amount > -1) {
            this.amount += amount;
        }
    }

    balance() {
        console.log(this.amount)
        // return this.amount;
    }
}


const fcmb = new BankAccount();
fcmb.credit(3000);
fcmb.balance();
fcmb.withdraw(2800);
fcmb.balance();
