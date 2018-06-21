//CLOSEURES

//function that returns a function.

function count(num) {
  return function() {
    return (num += 1);
  };
}

//this creates a snapshot.
const myCount = count(1);

//the curly braces define scope.
function newScope() {
  return function() {
    if (true) {
    } else {
    }
  };
}

//
function add() {
  return 2 + 2;
}

const four = add();
//returns 4.

function add() {
  var num = 2;
  return function() {
    return num + 2;
  };
}

const toAdd = add();
// returns function. have to invoke toAdd to return value.
toAdd();

//closures keep track of inner state. It will remember previous values.

//bank account example

function bankAccount(balance) {
  return function(type, amt) {
    if (type === "deposit") {
      return (balance += amt);
    } else if (type === "withdraw") {
      return (balance -= amt);
    } else {
      return balance;
    }
  };
}

//this returns the inner function only. must call variable.
const stevensAccount = bankAccount(10);

// this prints 60.
stevensAccount = ("deposit", 50);

//create calc that can add mult divide subtract.

function calculator(num) {
  return function(type, secNum) {
    if (type === "add") {
      return num + secNum;
    } else if (type === "subtract") {
      return num - secNum;
    } else if (type === "multiply") {
      return num * secNum;
    } else if (type === "divide") {
      return num / secNum;
    } else {
      return num;
    }
  };
}

// CONTEXT LECTURE

const user = {
  name: "Steven",
  age: 25,
  sayName: noContext
};

function noContext() {
  return this.name;
}

user.sayName();
//returns 'Steven';

//explicit binding;

const car = {
  make: "Ford",
  model: "Mustang",
  year: 2007,
  miles: 0
};

function drive() {
  return (this.miles += 1);
}

const driveFord = drive.bind(car);

//

const user = {
  name: "Steven",
  age: 25,
  sayName() {
    setInterval(function() {
      console.log(this.name);
    }, 1000);
  }
};

user.sayName();

//

function carBuilder(make, model) {
  return {
    make: make,
    model: model
  };
}

// two ways to add a meathod. In line (bad for memory)

function Car(make, model, year, miles) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.miles = miles;
  this.drive = function() {
    return (this.miles += 1);
  };
}

const ford = new Car("ford", "mustang", 2005, 10);

// on a prototype
Car.prototype.drive = function() {
  return (this.miles += 1);
};

ford.drive();

//extending

class Animal {
  constructor(animalType, sound) {
    this.type = animalType;
    this.sound = sound;
  }
  makeSound() {
    console.log(this.sound);
  }
}

class Zebra extends Animal {
  toTheThing() {
    console.log("Some other thing");
  }
}

const myZebra = newZebra("Zebra", "neeeeeyyyy");
