/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:
  // Crear un nuevo objeto con las propiedades "nombre" y "edad"
  var gato = {
    nombre: nombre,
    edad: edad,
  };

  // Agregar la propiedad "meow" como una función que retorna "Meow!"
  gato.meow = function() {
    return "Meow!";
  };

  // Retornar el objeto creado
  return gato;
}


function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código:
   // Crear un nuevo objeto con las propiedades "nombre", "email" y "password"
  var usuario = {
   nombre: nombre,
   email: email,
   password: password
 };

 // Retornar el objeto creado
 return usuario;
}

function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:
    // Agregar la propiedad con el nombre recibido y asignarle el valor null
  objeto[propiedad] = null;

  // Retornar el objeto modificado
  return objeto;
}

function invocarMetodo(objeto, metodo) {
   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:
   // Verificar si el método existe en el objeto y es una función
  if (objeto.hasOwnProperty(metodo) && typeof objeto[metodo] === 'function') {
   // Invocar la función
   objeto[metodo]();
 }
}


function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:
   // Verificar si la propiedad "numeroMisterioso" existe en el objeto
  if (objetoMisterioso.hasOwnProperty("numeroMisterioso")) {
   // Multiplicar el número por 5 y retornar el resultado
   return objetoMisterioso.numeroMisterioso * 5;
 } else {
   // Retornar null si la propiedad no existe
   return null;
 }
}

function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código:
   // Verificar si la propiedad existe en el objeto
  if (objeto.hasOwnProperty(propiedad)) {
   // Eliminar la propiedad del objeto
   delete objeto[propiedad];
 }

 // Retornar el objeto modificado
 return objeto;
}

function tieneEmail(objetoUsuario) {
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   // Verificar si el objetoUsuario tiene la propiedad "email" y su valor es definido
  return objetoUsuario.hasOwnProperty("email") && objetoUsuario.email !== undefined && objetoUsuario.email !== null;
}


function tienePropiedad(objeto, propiedad) {
   // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   // Verificar si el objeto tiene la propiedad con el nombre proporcionado
  return objeto.hasOwnProperty(propiedad);
}

function verificarPassword(objetoUsuario, password) {
   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   // Verificar si la propiedad "password" del objetoUsuario coincide con el parámetro "password"
  return objetoUsuario.hasOwnProperty("password") && objetoUsuario.password === password;
}

function actualizarPassword(objetoUsuario, nuevaPassword) {
   // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:
   // Verificar si el objetoUsuario tiene la propiedad "password"
  if (objetoUsuario.hasOwnProperty("password")) {
   // Actualizar la contraseña con la nuevaPassword
   objetoUsuario.password = nuevaPassword;
 } else {
   // Si no tiene la propiedad, agregarla con la nuevaPassword
   objetoUsuario.password = nuevaPassword;
 }

 // Retornar el objeto actualizado
 return objetoUsuario;
}

function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:
   // Verificar si el objetoUsuario tiene la propiedad "amigos"
  if (objetoUsuario.hasOwnProperty("amigos") && Array.isArray(objetoUsuario.amigos)) {
   // Agregar el nuevoAmigo al final del arreglo de amigos
   objetoUsuario.amigos.push(nuevoAmigo);
 } else {
   // Si no tiene la propiedad "amigos", o si no es un arreglo, crearla con el nuevoAmigo
   objetoUsuario.amigos = [nuevoAmigo];
 }

 // Retornar el objeto actualizado
 return objetoUsuario;
}

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como true.
   // Retornar el arreglo.
   // Tu código:
   // Verificar si el parámetro es un arreglo
  if (Array.isArray(objetoMuchosUsuarios)) {
   // Iterar sobre cada usuario y definir la propiedad "esPremium" como true
   for (var i = 0; i < objetoMuchosUsuarios.length; i++) {
     // Verificar si el usuario tiene la propiedad "esPremium"
     if (objetoMuchosUsuarios[i].hasOwnProperty("esPremium")) {
       objetoMuchosUsuarios[i].esPremium = true;
     } else {
       // Si no tiene la propiedad "esPremium", crearla y definirla como true
       objetoMuchosUsuarios[i].esPremium = true;
     }
   }

   // Retornar el arreglo de usuarios actualizado
   return objetoMuchosUsuarios;
 } else {
   // Si el parámetro no es un arreglo, retornar null o realizar alguna acción adicional si es necesario
   return null;
 }
}

function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:
   // Verificar si el objetoUsuario tiene la propiedad "posts" y es un arreglo
  if (objetoUsuario.hasOwnProperty("posts") && Array.isArray(objetoUsuario.posts)) {
   // Inicializar la variable para almacenar la suma de likes
   var sumaLikes = 0;

   // Iterar sobre cada post y sumar los likes
   for (var i = 0; i < objetoUsuario.posts.length; i++) {
     // Verificar si el post tiene la propiedad "likes" y si es un número
     if (objetoUsuario.posts[i].hasOwnProperty("likes") && typeof objetoUsuario.posts[i].likes === "number") {
       sumaLikes += objetoUsuario.posts[i].likes;
     }
   }

   // Retornar la suma total de likes
   return sumaLikes;
 } else {
   // Si no tiene la propiedad "posts" o no es un arreglo, retornar null o realizar alguna acción adicional
   return null;
 }
}

function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:
   // Verificar si el objetoProducto tiene las propiedades "precio" y "porcentajeDeDescuento"
  if (objetoProducto.hasOwnProperty("precio") && objetoProducto.hasOwnProperty("porcentajeDeDescuento")) {
   // Agregar la propiedad "calcularPrecioDescuento" como una función
   objetoProducto.calcularPrecioDescuento = function() {
     // Calcular el valor de descuento
     var descuento = objetoProducto.precio * objetoProducto.porcentajeDeDescuento;

     // Restar el valor de descuento del precio total del producto
     var precioFinal = objetoProducto.precio - descuento;

     // Retornar el precio final después del descuento
     return precioFinal;
   };

   // Llamar a la función para obtener y retornar el precio final después del descuento
   return objetoProducto;
 } else {
   // Si no tiene las propiedades requeridas, retornar null o realizar alguna acción adicional
   return null;
 }
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};
