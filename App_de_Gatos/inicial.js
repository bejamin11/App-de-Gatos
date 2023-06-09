//console.log() --> Como un print
//Tipo de Dato: undefined, null, symbol, number, string y objet.
var miVariable = 16;
console.log(miVariable);
miVariable = "freeCodeCamp";
console.log(miVariable+"\n");


/*suma,div,resta,mult, %(resto) es lo mismo que otros lenguajes
\e retorno de carro
\b retroceso
\f salto de pagina
*/
console.log("longitud: " + miVariable.length)
console.log("Primera letra: " + miVariable[0])
//Esto es invalido --> miVariable[0]="M", por inmutabilidad
console.log("Ultima letra: " + miVariable[miVariable.length-1])

