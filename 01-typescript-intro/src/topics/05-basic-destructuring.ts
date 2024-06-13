
interface AudioPlayer {
    audioVolum: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}


const audioPlayer: AudioPlayer = {
    audioVolum: 110,
    songDuration: 123,
    song: "Bored",
    details: {
        author: 'Deftones',
        year: 1995
    }
}

// // Se esta desestrucutrando el objeto audioPlayer 
// // y se esta obteniendo solo una propiedad
// const { song } = audioPlayer;

// // Si se quiere renombrar una propiedad
// const { songDuration: duration } = audioPlayer;

// const { details } = audioPlayer;
// const { author:authorSong } = details;

// console.log('Song: ', song)
// console.log('Duration: ', duration)
// console.log('Author: ', authorSong)

/* Desestructurar arreglos */

// const [ p1, p2, p3 ]: string[] = ['Goku', 'Vegeta', 'Trunks'];
// Aqui se esta desestructurando
const [ p1, p2, p3 ]: string[] = ['Goku', 'Vegeta', 'Trunks'];

console.log('Personaje 3: ', p3 || 'Personaje no encontrado');

export {}