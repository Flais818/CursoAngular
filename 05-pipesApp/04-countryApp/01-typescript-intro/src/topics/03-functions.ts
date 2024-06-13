                                        // Se puede definir el tipo de dato que regresa
function addNumbers (a: number, b: number): number {
    return a + b;
}

// Funciones de flecha o Funciones Lambda
const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;  // Esto regresa el producto de a + b y es una inyeccion de una expresion de JS
    // Se llaman batiks ``
}

function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
}

// const result: number = addNumbers(1, 2)
// const result2: string = addNumbersArrow(1, 2)
// const multiplyResult: number = multiply(5)

// // Con las llaves {} se imprime un objeto
// console.log({result})
// // Sin las llaves solo imprime, en este caso, el numero 
// console.log(result)
// console.log({result2})
// console.log({multiplyResult})

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${ this.hp }`)
    }
}

healCharacter(strider, 10);
healCharacter(strider, 20);

strider.showHp();

export {};