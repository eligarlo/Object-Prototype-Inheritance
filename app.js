// Person constructor
function Person(name, surName) {
    this.name = name;
    this.surName = surName;
}
// Insteed of writing a method inside the Person constructor I can do it in its prototype
// Greeting
Person.prototype.greeting = function() {
    return `Hello there ${this.name} ${this.surName}`
}

const person1 = new Person('Eliahu', 'Garcia Lozano');
// Check for __proto__ in the console I can see the greeting()
console.log(person1);
// I can call to greeting the same way as if it was inside the constructor
console.log(person1.greeting());

// WHY TO DO ALL OF THIS??????
// Customer constructor
function Customer(firstName, LastName, phone, membership) {
    // Let's call the Person constructor here
    // Let's pass the arguments of the Customer also as the arguments of Person (the ones they share)
    Person.call(this, firstName, LastName);
    
    // The other arguments I buil them as a regular constructor
    this.phone = phone;
    this.membership = membership;
}

const customer1 = new Customer('Yehuda', 'Sinai', '054-123456', 'Standard');
console.log(customer1);

/* 
    Even though I pass a few arguments of the Person constructor inside the Customer constructor,
    what I see in the console is that the constructor (inside __proto__) is Customer, that say, I
    can't call to the methods build in the prototype of Person
*/ 
// This will throw an error
// console.log(customer1.greeting());


// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

const customer2 = new Customer('Shirel', 'Garcia', '053-123456', 'VIP');
console.log(customer2);
/*
    Two things happend with the inheritance of Person:

        1- I can access to the Person methods
*/
    console.log(customer2.greeting());
/*
        2- If I check my constructor in the console inside __proto__ I see that is Person and not Customer
*/

// Make Customer.prototype return Customer()
                    // Uncomment the line of code below to see the difference 
// Customer.prototype.constructor = Customer;