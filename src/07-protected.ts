export abstract class Animal {
    constructor(
        protected name: string,
        protected age: number,
        protected weight: number
    ){}

    move() {
        console.log(`${this.name} is moving`);
    }

    greeting() {
        return `Hello, I'm ${this.name}`;
    }
}

export class Dog extends Animal {
    constructor(
        name: string,
        age: number,
        weight: number
    ){
        super(name, age, weight);
    }

    woof() {
        console.log("Woof!");
    }
}

//const fifi = new Animal("Fifi", 2, 5);

const max = new Dog("Max", 3, 10);