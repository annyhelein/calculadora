// Función para sumar dos números
function sumar(num1, num2) {
  return num1 + num2;
}
// Función para restar dos números
function restar(num1, num2) {
  return num1 - num2;
}
// Función para multiplicar dos números
function multiplicar(num1, num2) {
  return num1 * num2;
}
// Función para dividir dos números
function dividir(num1, num2) {
  return num1 / num2;
}
// Función para sacar factorial de un numero
function factorial(num1) {
  if (num1 < 0) 
  return -1;
else if (num1 == 0) 
return 1;
else {
return (num1 * factorial(num1- 1));
}
}
<<<<<<< HEAD

=======
// Función para sacar exponente de un numero
function exponente(base, exponente) {
  return base ** exponente
}
// Función para sacar la raiz cuadrada de un numero
function raizCuadrada(num) {
  return Math.sqrt (num)
}
>>>>>>> feature/opcion-menu-operacion-raizcuadrada
  // Función principal del programa
function calculadora() {
    var opcion = prompt(
    "Elija una opción:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División\n5. Factorial\n6. Exponente\n7. Raíz cuadrada"
    );
    var num1 = parseFloat(prompt("Ingrese el primer número:"));
    var num2, resultado;

    if (opcion !== "5" && opcion !== "7") {
    num2 = parseFloat(prompt("Ingrese el segundo número:"));
    }

    switch (opcion) {
    case "1":
    resultado = sumar(num1, num2);
    break;
    case "2":
    resultado = restar(num1, num2);
    break;
    case "3":
    resultado = multiplicar(num1, num2);
    break;
    case "4":
    resultado = dividir(num1, num2);
    break;
    case "5":
    resultado = factorial(num1);
    break;
    case "6":
    var exponenteNum = parseFloat(prompt("Ingrese el exponente:"));
    resultado = exponente(num1, exponenteNum);
    break;
    case "7":
    resultado = raizCuadrada(num1);
    break;
    default:
    resultado = "Opción no válida";
    break;
}

alert("El resultado es: " + resultado);
}

// Llamar a la función principal
calculadora();