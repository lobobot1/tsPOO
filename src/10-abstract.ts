import { Animal, Dog } from './07-protected';

const animal = new Animal("Fifi", 2, 5);
animal.greeting();

const cheis = new Dog("Cheis", 3, 10);

cheis.woof();