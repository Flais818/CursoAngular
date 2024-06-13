

const name: string = 'Fabio';
let hpPoints: number | 'Full' = 95;
// Con el pipe/tuberia => | puedes asignar 2 tipos posibles de tipo de dato 
const isAlive: boolean = true;

hpPoints = 'Full'
hpPoints = 10;

console.log({
    name, hpPoints, isAlive
})

export {};
// Al hacear el export se entiende que este archivo es un modulo