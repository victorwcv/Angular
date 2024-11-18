function classDecorator<T extends {new (...args:any[]): {}}>(
    constructor: T
) {
    return class extends constructor {
        newProperty = "New Property";
        hello = 'overryde';
    }
}


@classDecorator
class SuperClass {

    public myProperty: string = "abcde";

    print() {
        console.log("Hola Mundo");
    }
}

console.log(SuperClass);

const myClass = new SuperClass();

console.log(myClass)