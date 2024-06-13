
export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Fabio',
}

const passenger2: Passenger = {
    name: 'Marian',
    children: ['Samantha', 'Leyla'],
}

const returnChildrenNumber = ( passenger: Passenger) => {

    // Todo esto es un if-else
    const howMannyChildren = passenger.children?.length || 0;
    // El ? se llama 'optional chining'
    // Si es ! se llama 'non null assertional operator'
    // es una una manera de decir que nunca sera null 

    console.log(passenger.name, howMannyChildren);

}

returnChildrenNumber(passenger1);
returnChildrenNumber(passenger2);