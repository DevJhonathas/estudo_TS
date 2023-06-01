"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const x = "valor de x";
const numero = 2;
let number_or_boolean_value = "teste";
let y = 12;
let z = 12;
let firstName = "Jhonathas";
let age = 30;
const isAdmin = true;
firstName = "kase";
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
const user = {
    name: "Jhonathas",
    age: 19
};
console.log(user);
let any = "teste";
any = 2;
any = true;
let id = "10";
id = 10;
const userID = 10;
const productID = "10";
var Size;
(function (Size) {
    Size["G"] = "Grande";
    Size["M"] = "medio";
    Size["P"] = "pequeno";
})(Size || (Size = {}));
;
const camisa = {
    name: "Camisa gola V",
    size: Size.P
};
console.log(camisa);
let teste;
teste = null;
const sum = (a, b) => {
    return a + b;
};
console.log(sum(10, 2));
const sayHello = (name) => {
    return `Hello ${name}`;
};
console.log(sayHello("Jhonathas"));
const logger = (msg) => {
    console.log(msg);
};
logger("teste!");
const greeting = (name, greet) => {
    console.log(`Olá  ${greet} ${name}. Gera erro de lógica`);
    if (greet) {
        console.log(`Olá  ${greet} ${name}.Sem erro de lógica`);
        return;
    }
    console.log(`Olá ${name}`);
};
greeting("José");
greeting("José", "sir");
const sumNuber = (nums) => {
    return nums.n1 + nums.n2;
};
const multiplyNumbers = (nums) => {
    return nums.n1 * nums.n2;
};
console.log(sumNuber({ n1: 1, n2: 2 }));
console.log(multiplyNumbers({ n1: 6, n2: 2 }));
const someNumbers = {
    n1: 5,
    n2: 10
};
console.log(multiplyNumbers(someNumbers));
const doSomething = (info) => {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
};
doSomething(5);
doSomething(true);
const showArraysItems = (arr) => {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
};
const a1 = [1, 2, 3];
const a2 = ["1", "testando", true];
showArraysItems(a1);
showArraysItems(a2);
class User {
    name;
    role;
    isApproved;
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`Idade do usuário: ${this.role}`);
            return;
        }
        console.log("Informação restrita");
    }
}
const zeca = new User("Zéca", "Admin", true);
console.log(zeca);
zeca.showUserName();
class Car {
    brand;
    wheels;
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é: ${this.brand}`);
    }
}
const fusca = new Car("VW", 4);
fusca.showBrand();
class SuperCar extends Car {
    engine;
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
a4.showBrand();
function BaseParamters() {
    return function (constructor) {
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        };
    };
}
let Person = class Person {
    name;
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParamters()
], Person);
const sam = new Person("Sam");
