
export class Person {
    // public name: string;
    // public address: string;

    constructor (public name: string, 
        private address: string = 'No Addres') {
        this.name = name
        this.address = address
    }
}

// export class Hero extends Person {

//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string,
//     ){
//         super( realName, 'New York') // Esto es cuando se extiende de una clase donde el constructor espera parametros
//     }
// }

// Esto seria la manera de hacerlo con composicion en lugar de extender
export class Hero {

    // public person: Person;
    
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ){
        // this.person = new Person(realName);
    }
}

const tony = new Person('Tony Stark', 'New York')

const person1 = new Hero('Iron Man', 45 ,'Tony', tony);

console.log(person1);