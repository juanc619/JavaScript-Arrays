// Declarando nuestros primeros array 

// const numeros = [1, 2, 3, 4, 5];
// const booleanos = [true, true, false];
// const mezcla = ["sillon", 1, 2, true];
// const usuarios = [ {nombre: "jc", edad : 28},{nombre : "carlos",edad : 20}];






// Accedienco a nuestro Array

// console.log(productos);
// console.log(productos[2]);

//  Recorriendo nuestro Array

// for(let i = 0; i < 4; i++) {
//     console.log(productos[i]);
// }

/********* Metodos */

/**Length */

// console.log(productos.length);
// for(let i = 0; i < productos.length; i++) {
//     console.log(productos[i]);
// }


/***push : agregar un elemento al final del Array*/

// const productos = ["sillon", "silla", "mesa", "ropero"];

// productos.push("cama");
// console.log(productos);

/** unshift : agregar un elemento al comienzo del array */
// const productos = ["sillon", "silla", "mesa", "ropero"];
// productos.unshift("puerta");

// console.log(productos);

/** shift : eliminar un elemento al comienzo del array */
// const productos = ["sillon", "silla", "mesa", "ropero"];
// productos.shift();

// console.log(productos);

/** pop : eliminar un elemento al final del array */
// const productos = ["sillon", "silla", "mesa", "ropero"];
// productos.pop();

// console.log(productos);

/** splice : eliminar uno o varios elementos del array */

// const productos = ["sillon", "silla", "mesa", "ropero"];
// productos.splice(1, 2);
// console.log(productos);

/**Join : genera un string con los elementos del array */

// const productos = ["sillon", "silla", "mesa", "ropero"];

// console.log(productos.join(", "));
// console.log(productos.join("/"));

/**concat : unir dos array en uno*/

// const productos = ["sillon", "silla", "mesa", "ropero"];
// const productos2 = ["puertas", "ventana", "cama"];

// const productoFinal = productos.concat(productos2);
// console.log(productoFinal);

/* slice : generar un copia de una parte de nuestro array */

// const productos = ["sillon", "silla", "mesa", "ropero"];
// const productoComedor = productos.slice(1, 3);
// console.log(productoComedor);

// /* index of : saber el numero de indice de nuestro elemento */
// const productos = ["sillon", "silla", "mesa", "ropero"];
// console.log(productos.indexOf("ropero"));

/* include : saber si un elemento existe en nuestro array */
// const productos = ["sillon", "silla", "mesa", "ropero"];
// // console.log(productos.includes("silla"));

// if(productos.includes("silla")) {
//     console.log(productos.indexOf("silla"));
// }else {
//     console.log("cama no se encuentra en el array");
// }

/* reverse : invertir el orden de nuestro array */
// const productos = ["sillon", "silla", "mesa", "ropero"];
// console.log(productos.reverse());