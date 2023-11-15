/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   if(array && array.length > 0){
      return array[0];
   }else{
      return undefined;
   }
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   if(array.length === 0){
      return undefined;
   }else{
      return array[array.length - 1];
   }
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;

}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   const result = [];
   for (let i = 0; i < array.length; i++){
      result.push(array[i] +1);
   }
   return result;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift (elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(' ');
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return array.includes(elemento);
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   let suma= 0;
   for (let i = 0; i < arrayOfNums.length; i++){
      suma += arrayOfNums[i];
   }
   return suma;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   // Verificamos si el arreglo no está vacío
   if (resultadosTest.length === 0) {
      return 0; // Devolvemos 0 si el arreglo está vacío para evitar divisiones por cero.
 }

   let suma = 0;

 // Iteramos los elementos del arreglo y sumamos sus valores.
   for (let i = 0; i < resultadosTest.length; i++) {
      suma += resultadosTest[i];
 }

 // Calculamos el promedio dividiendo la suma por la cantidad de elementos.
   const promedio = suma / resultadosTest.length;

   return promedio;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   // Verificamos si el arreglo no está vacío
   if (arrayOfNums.length === 0) {
      return undefined; // Devolvemos undefined si el arreglo está vacío.
 }

 // Utilizamos el método Math.max para encontrar el número más grande en el arreglo.
   const maximo = Math.max(...arrayOfNums);

   return maximo;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   // Verificamos si no se pasaron argumentos
   if (arguments.length === 0) {
      return 0;
 }

 // Si se pasa un solo argumento, simplemente lo retornamos
   if (arguments.length === 1) {
      return arguments[0];
 }

 // Inicializamos el producto en 1 y multiplicamos cada argumento
   let producto = 1;
   for (let i = 0; i < arguments.length; i++) {
      producto *= arguments[i];
 }

 // Retornamos el producto
   return producto;
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   // Filtrar los elementos que son mayores que 18
   var cuentoElementos = array.filter(function(elemento) {
      return elemento > 18;
 });

   // Obtener la longitud del nuevo arreglo filtrado
   var cuentoElementos = cuentoElementos.length;

   // Retornar la cantidad
   return cuentoElementos;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
    // Verificar si el número del día de la semana es válido (entre 1 y 7)
    if (numeroDeDia >= 1 && numeroDeDia <= 7) {
      // Verificar si el día es Sábado (6) o Domingo (1)
      if (numeroDeDia === 1 || numeroDeDia === 7) {
          return "Es fin de semana";
      } return "Es dia laboral";
  }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   // Convertir el número a cadena para facilitar la comparación
   const numStr = num.toString();

   // Verificar si la primera cifra de la cadena es '9'
   return numStr.charAt(0) === '9';
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
    // Verificar si el arreglo tiene al menos un elemento
    if (array.length > 0) {
      // Comparar todos los elementos con el primer elemento
      return array.every(function(elemento) {
          return elemento === array[0];
      });
  } else {
      // Devolver true si el arreglo está vacío
      return true;
  }
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   // Crear un nuevo arreglo para almacenar los meses encontrados
   const mesesEncontrados = [];

   // Iterar sobre el arreglo proporcionado
   for (let i = 0; i < array.length; i++) {
       const mes = array[i];

       // Verificar si el mes es "Enero", "Marzo" o "Noviembre"
       if (mes === "Enero" || mes === "Marzo" || mes === "Noviembre") {
           mesesEncontrados.push(mes);
       }
   }

   // Verificar si se encontraron todos los meses pedidos
   if (mesesEncontrados.length === 3) {
       return mesesEncontrados;
   } else {
       return "No se encontraron los meses pedidos";
   }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   const tabla = [];

    for (let i = 0; i <= 10; i++) {
        const resultado = 6 * i;
        tabla.push(resultado);
    }

    return tabla;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   const mayoresACien = [];

    for (let i = 0; i < array.length; i++) {
        const valor = array[i];

        // Verificar si el valor es mayor a 100
        if (valor > 100) {
            mayoresACien.push(valor);
        }
    }

    return mayoresACien;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   const resultados = [];

    for (let i = 0; i < 10; i++) {
        num += 2;

        // Verificar si el valor de la suma es igual a la cantidad de iteraciones
        if (num === i) {
            return "Se interrumpió la ejecución";
        }

        resultados.push(num);
    }

    return resultados;
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   const resultados = [];

    for (let i = 0; i < 10; i++) {
        // Verificar si el número de iteraciones es 5
        if (i === 5) {
            // Utilizar 'continue' para saltar la iteración actual
            continue;
        }

        // Aumentar en 2 el número recibido en cada iteración (excepto cuando i es 5)
        num += 2;
        resultados.push(num);
    }

    return resultados;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
