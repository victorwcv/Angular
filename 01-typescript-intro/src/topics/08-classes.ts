export class Person {
    public name: string;
    public address: string;

    constructor() {
        this.name = "Victor",
        this.address = "Lima"
    }
}

const ironman = new Person();

console.log(ironman.name);

export class Person2 {
    constructor(
        public name: string,
        public address: string = "No Address"
    ) {}
}

export class Hero extends Person2 {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
    ) {
        super(realName, "New York")
    }
}

const ironman2 = new Hero('Ironman', 45, "Tony")
console.log(ironman2);
