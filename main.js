// ejercicio 1
const num = 4;
function numPar(num) {
  if (num % 2 === 0) {
    console.log(`el número ` + num + ` es par`);
  } else {
    console.log(`el número ` + num + ` es impar`);
  }
}
numPar(num);

console.log(`-`);

// ejercicio 2
const num1 = 2;
const num2 = 4;
function comparacion(num1, num2) {
  if (num1 > num2) {
    console.log("El n° " + num1 + " es mayor a " + num2);
  }
  if (num2 > num1) {
    console.log("El n° " + num2 + " es mayor a " + num1);
  }
  if (num1 == num2) {
    console.log("Los n° son iguales");
  }
}
comparacion(num1, num2);

console.log(`-`);

// ejercicio 3
let digito = 10;
function multiplo5(digito) {
  if (digito > 0 && digito % 5 == 0) {
    console.log("Si, el número " + digito + " es múltiplo de 5");
  } else {
    console.log("No, el número " + digito + " no es múltiplo de 5");
  }
}
multiplo5(digito);

console.log(`-`);

// ejercicio 4
contador = 0;
rep = 5;
function ciclos(contador, rep) {
  while (contador < rep) {
    console.log(contador);
    contador++;
  }
}
ciclos(contador, rep);

console.log(`-`);

// ejercicio 5
contador1 = 1;
palabra = "java";
nr = 5;
function palynum(palabra, nr, contador1) {
  while (contador1 < nr) {
    console.log(palabra);
    contador1++;
  }
}
palynum(palabra, nr, contador1);

console.log(`-`);

// ejercicio 6
let familia = ["Gino", "Tomi", "Teque"];
function array(familia) {
  console.log(familia);
}
array(familia);

console.log(`-`);

// ejercicio 7
function ejercicio7(arreglo) {
  for (let i = 0; i < arreglo.length; i++) {
    if (i !== 4) {
      console.log(arreglo[i]);
    }
  }
}

const arreglo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
ejercicio7(arreglo);

console.log(`-`);

//ejercicio 8
function multiplo(array1, numero) {
  for (let i = 0; i < array1.length; i++) {
    console.log(array1[i] * numero);
  }
}

const array1 = [5, 10, 15, 20, 25];
const numero = 2;
multiplo(array1, numero);