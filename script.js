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

// ==================================================================================

// the new keyword
// - creates a new empty object {}
// - sets the value of this to be the new empty object
// - calls the constructor method

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

let userOne = new User('David Kel', 'daviddev@gmail.com');
let userTwo = new User('Jerry Maed', 'maeddev@gmail.com');

console.log(userOne);
console.log(userTwo);

/*
-------ES6----

write me a function called person 
give it the parameter name 
give it the parameter age 
make the age have a default value of 26
*/

function Person(name, age=26){
 this.name = name;
 this.age = age;
}

let moya = new Person("moya", 37);
let michael = new Person("michael");
let tony = new Person();

console.log("--------function constructtor -------")
console.log(moya);
console.log(michael);
console.log(tony);


//-------------------------------------------
//function constructtor rewritten as a class

class P{
  constructor(name, age=26){
    this.name = name;
    this.age = age;
  }
}

const mo = new P("moya", 37);
let mi = new P("michael");
let to = new P();

console.log("--------function constructtor rewritten as a class-------")
console.log(mo);
console.log(mi);
console.log(to);
