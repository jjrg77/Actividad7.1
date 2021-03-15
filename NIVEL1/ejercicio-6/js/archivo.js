let cadena = 'Tengo un coche de color verde';
console.log(cadena);

let cadena2 = cadena.replace('verde', 'azul');
console.log(cadena2);

let buscar = 'o';
cadena2 = cadena2.replace(new RegExp(buscar,'g'), 'u');
console.log(cadena2);