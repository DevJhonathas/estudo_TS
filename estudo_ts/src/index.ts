const x: string = "valor de x";
const numero: number = 2;
let number_or_boolean_value: string | boolean = "teste";


// inferencia x annotation
let y = 12;
//y = "teste"

let z: number = 12;


//tipos básicos
let firstName: string = "Jhonathas";
let age: number = 30;
const isAdmin: boolean = true;

firstName = "kase";


// object
const myNumbers: number[] = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);

//tuplas
let myTuple: [number, string, string[]];

myTuple = [5, "teste", ["a", "b"]];


//object literals -> {prop: value}
const user: { name: string, age: number } = {
    name: "Jhonathas",
    age: 19
}

console.log(user);

// any = não utilizar pois é usado em casos especificos
let any: any = "teste";
any = 2;
any = true;


// union type
let id: string | number = "10";
id = 10;

//type alias
type myIdType = number | string
const userID: myIdType = 10;
const productID: myIdType = "10";

// enum
// tamanho de roupas (size: MediaSource, size: pequeno)
enum Size {
    G = "Grande",
    M = "medio",
    P = "pequeno"
};

const camisa = {
    name: "Camisa gola V",
    size: Size.P
};

console.log(camisa);


// literals types
let teste: "Autenticado" | null;
teste = null;


//Function
const sum = (a: number, b: number) => {
    return a + b;
}

console.log(sum(10, 2));


const sayHello = (name: string): string => {
    return `Hello ${name}`
}

console.log(sayHello("Jhonathas"));


//retorno vazio
const logger = (msg: string): void => {
    console.log(msg);
}

logger("teste!");


// Como informar que um parametro não é sempre necssário
const greeting = (name: string, greet?: string): void => {
    console.log(`Olá  ${greet} ${name}. Gera erro de lógica`);

    if (greet) {
        console.log(`Olá  ${greet} ${name}.Sem erro de lógica`);
        return;
    }
    console.log(`Olá ${name}`);
}

greeting("José");
greeting("José", "sir");


// interface
interface IMathFunciontParams {
    n1: number,
    n2: number
}

const sumNuber = (nums: IMathFunciontParams) => {
    return nums.n1 + nums.n2;
};

const multiplyNumbers = (nums: IMathFunciontParams) => {
    return nums.n1 * nums.n2;
};

console.log(sumNuber({ n1: 1, n2: 2 }));
console.log(multiplyNumbers({ n1: 6, n2: 2 }));

const someNumbers: IMathFunciontParams = {
    n1: 5,
    n2: 10
}
console.log(multiplyNumbers(someNumbers));


// narrowing
// checagem de tipos
const doSomething = (info: number | boolean) => {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}

doSomething(5);
doSomething(true);

// generics
// passa qualquer tipo de dados, exemplos: Array com varios tipos de string, booleans
const showArraysItems = <T>(arr: T[]) => {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`)
    })
}

const a1 = [1, 2, 3];
const a2 = ["1", "testando", true];

showArraysItems(a1);
showArraysItems(a2);

// classes
class User {
    name
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }

    showUserName(): void {
        console.log(`O nome do usuário é ${this.name}`);
    }

    showUserRole(canShow: boolean): void {
        if (canShow) {
            console.log(`Idade do usuário: ${this.role}`);
            return
        }
        console.log("Informação restrita");
    }
}

const zeca = new User("Zéca", "Admin", true);
console.log(zeca)

zeca.showUserName();


// interface em classes
interface IVehicle {
    brand: string,
    showBrand(): void
}

class Car implements IVehicle {
    brand
    wheels

    constructor(brand: string, wheels: number) {
        this.brand = brand;
        this.wheels = wheels;
    }

    showBrand(): void {
        console.log(`A marca do carro é: ${this.brand}`)
    }
}

const fusca = new Car("VW", 4);
fusca.showBrand();


// herança
class SuperCar extends Car {
    engine

    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
a4.showBrand();


// decorators
// Evento observado em algum ponto determinado em uma função ou classe
// Exemplo, vamos criar o id de um novo usuário inserdiro

function BaseParamters() {
    return function <T extends { new(...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        }
    }
}

@BaseParamters()

class Person {
    name

    constructor(name: string) {
        this.name = name;
    }
}

const sam = new Person("Sam")