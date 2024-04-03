// Ejercicio 1

var calificacion = parseFloat(prompt("Ingresa tu calificación:"));
var cantidadClases = parseFloat(prompt("Ingresa la cantidad de clases:"));
var asistenciasUsuario = parseFloat(prompt("Ingresa la cantidad de clases asistidas:"));

porcentajeAsistencias = (asistenciasUsuario / cantidadClases) * 100

if (calificacion >= 3.0 && porcentajeAsistencias >= 80) {
    alert("¡Felicidades! Estás aprobado.");

} else {
    alert("Lo siento, estás reprobado.");
}






// Ejercicio 2
/*
var monto = parseInt(prompt("Ingrese el monto:"))
const descuento1 = 0.1, descuento2 = 0.02

if (monto >= 100) {
    totalDescuento = monto * descuento1
    totalMonto = monto - totalDescuento
    alert("El descuento es de: " + totalDescuento)
    alert("El monto final es de: " + totalMonto)
} else {
    totalDescuento = monto * descuento2
    totalMonto = monto - totalDescuento
    alert("El descuento es de: " + totalDescuento)
    alert("El monto final es de: " + totalMonto)
}
*/







//Ejercio 3
/*
var primerNumero = parseInt(prompt("Ingresa el primer numero:"));
var segundoNumero = parseInt(prompt("Ingresa el segundo numero:"));

if (primerNumero < segundoNumero) {
    suma = Math.pow(primerNumero,2)+Math.pow(segundoNumero,2)
    alert("La suma es: "+ suma)
} else if (primerNumero>segundoNumero) {
    suma= primerNumero+segundoNumero
    alert("La suma es: "+ suma)
} else {
    resta = primerNumero-segundoNumero
    alert("Los numeros son iguales")
}
*/