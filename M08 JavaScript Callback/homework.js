/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   // Verificar si la cadena no está vacía
  if (nombre.length === 0) {
   return "El nombre está vacío";
 }

 // Obtener la primera letra en mayúscula y concatenar con el resto del nombre
 return nombre.charAt(0).toUpperCase() + nombre.slice(1);
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   // Verificar si se proporcionó una función como callback
  if (typeof cb === 'function') {
   // Invocar/ejecutar el callback
   cb();
 } else {
   console.error('Error: Se espera una función como callback.');
 }
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   // Verificar si cb es una función
  if (typeof cb === 'function') {
   // Llamar al callback con los dos números como parámetros
   return cb(num1, num2);
 } else {
   console.error('Error: Se espera una función como callback.');
 }
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   // Verificar si cb es una función
  if (typeof cb === 'function') {
   // Calcular la suma de los números en el arreglo
   const suma = arrayOfNumbers.reduce((acc, num) => acc + num, 0);
   
   // Llamar al callback con el resultado de la suma
   cb(suma);
 } else {
   console.error('Error: Se espera una función como callback.');
 }
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   // Verificar si cb es una función
  if (typeof cb === 'function') {
   // Iterar sobre el arreglo y llamar al callback por cada elemento
   for (let i = 0; i < array.length; i++) {
     cb(array[i]);
   }
 } else {
   console.error('Error: Se espera una función como callback.');
 }
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   // Verificar si cb es una función
  if (typeof cb === 'function') {
   // Crear un nuevo arreglo para almacenar los resultados
   const nuevoArray = [];

   // Iterar sobre el arreglo y llamar al callback por cada elemento
   for (let i = 0; i < array.length; i++) {
     // Guardar el resultado devuelto por el callback en el nuevo arreglo
     nuevoArray.push(cb(array[i]));
   }

   // Retornar el nuevo arreglo
   return nuevoArray;
 } else {
   console.error('Error: Se espera una función como callback.');
   // En caso de error, puedes decidir retornar un valor específico o lanzar una excepción, según tu preferencia.
   return [];
 }
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   // Filtrar los elementos que comienzan con la letra "a"
  const resultadosFiltrados = arrayOfStrings.filter(elemento => elemento.toLowerCase().startsWith('a'));

  // Retornar el nuevo arreglo
  return resultadosFiltrados;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
