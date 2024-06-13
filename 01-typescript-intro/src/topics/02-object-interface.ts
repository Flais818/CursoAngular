
// Esto es un arreglo y se define que es un arreglo de strings
const skills: string[] = ['Bash', 'Counter', 'Healing']

// Las interfaces nos ayudan a defenir como queremos que sean los objetos
interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

// Esto es codigo de JavaScript y es un objeto que hereda de la interface
const Strider: Character = {
    name: 'Strider' ,
    hp: 100 ,
    skills: ['Bash', 'Counter']
}

Strider.hometown = 'Rivendell'

console.table(Strider)

export {};