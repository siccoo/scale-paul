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

// Assigning and Declaring a class of Bank Account object, assign and declare a constructor function that carry two or three parameters. What we wanna achieve is this whenever someone credits/deposits or withdraw it will display the current balance.

class AccountStatement {
    constructor(balance) {
        this.balance = 0;
    }

    deposit(depositAmount) {

    }

    withdraw(withdrawalAmount) {

    }

    get balance() {
        return this.balance;
    }
}





/*
;moyarich (moyarich.com) | (created with carbon.now.sh -settings-: Night Owl - Closure)
  

;--------------------------------------------------------------------------------------------------------------------
Exercise - Tell your own JavaScript story!!
;--------------------------------------------------------------------------------------------------------------------

  
Story Time - now that’s how prototype works - tell your own JavaScript story


Moya's Story - 


Omg guys, I have a story. I have this friend name John. he is 
really broke, he has no money. But he doesn't care, he likes to pretend that he is rich.

So, 3 days ago, John met this girl that he wanted to impress.
He told this girl that he would pick her up at 7:30pm sharp and take her to a restaurant.

When John told me this, I started laughing because I know that John doesn't have a car.

So anyways, fast forward to Friday, I am at John's house helping him pick out his outfit, why? because i am an awesome friend.


Anyways i digress, back to the story, so John and I walked into the garage attached to his house. You won't believe this, but I saw a car. 
I was like "wow john, where did that car come from, did you rob somebody?" he was like "no, that's my father's car"

Then I said, "John that's a really expensive car, you are not going to get in trouble if you use it?", 
John smiled at me and said "nope, I can use it any time I want!"

Guys, I was shocked, my friend wasn't as broke as I thought, that man is rich adjacent
Anyways long story short, John drove to the girl's house, and picked her up at 7:30 on the dot.

Listen, that girl had no clue, she really thinks that the car belongs to John .... 

--- That’s how prototype works---

;If the main object does not have a property or a method, but another object along it's prototype chain has it, the main object can use it.

"----For example----------
 John does not have a car property, but his father does, so John gets to the use the car as if it belongs to him




https://alanstorm.com/tracing-javascripts-prototype-chain/

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain


https://bytearcher.com/articles/understanding-prototype-property-in-javascript/

https://dev.to/codesmith_staff/explain-javascripts-prototype-chain-like-im-five-51p


*/

//John is rich adjacent, not everything own by his father belongs to him, he sure cant use the helicopter



//---ES5
/*
var Father = function () { };

Father.prototype.car = 'I have a car';

Father.helicopter = 'I have a helicopter,sorry not sharing this';

*/

//---ES6
class Father {
    static helicopter = 'I have a helicopter,sorry not sharing this';
  }
  //prototype data properties must be defined outside of the ClassBody declaration
  Father.prototype.car = 'I have a car';
  
  
  
  var john = new Father();
  //Is there a 'car' own property on john? No, check its prototype.
  console.log("John: ", john.car); // John: I have a car
  
  console.log("Father: ", Father.prototype.car); // Father: I have a car
  console.log("Father.helicopter: ", Father.helicopter); //Father: I have a helicopter,sorry not sharing this
  
  //Is there a 'helicopter' own property on john? No, check its prototype,no helicopter found.
  console.log("john.helicopter: ", john.helicopter);  //undefined
  
  
  
  if (typeof john.helicopter === "undefined") {
    console.log("John can't use his father's helicopter"); //John can't use his father's helicopter
  }
  
  console.log("Father object", Father)
  console.log("John: object", john);
  
  //John's prototype
  console.log("----",Object.getPrototypeOf(john));
  
  
  
  //access to static property via constructor, not recommended, use Father.helicopter
  console.log("john stealing the helicopter:  ",john.__proto__.constructor.helicopter)
  
  //------------------------------------------------
  /**
   * Misleading "prototype" property name
   * 
  https://bytearcher.com/articles/understanding-prototype-property-in-javascript/#misleading-prototype-property-name
  
  There is something misleading in JavaScript regarding prototypes. 
  
  The prototype of an object is not the same thing as the "prototype" property of the object. 
  The "prototype of an object" is used when looking up non-existent properties in the prototype chain. 
  The the "prototype" property is used for objects created using new, it will be the prototype of the newly created object.
  
  Understanding this difference allows you to fully understand the prototype property in JavaScript.
  
  In our example, Father.prototype will be the the prototype value used for objects created with new Father()
  and the prototype of Father itself is actually JavaScript's internal Function.prototype.
  
  The value holding the prototype of an object is sometimes called the internal prototype link.
  It's also been historically called __proto__, a name that has some controversy. 
  To be politically correct, it can be called the value that's returned from Object.getPrototypeOf(...)
  
   */