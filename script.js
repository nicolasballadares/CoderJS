//while //break

// let continuar = true

// while(continuar) {
//     let numero = parseInt(prompt("Bienvenido: ¿Qué tabla de multiplicar desea?"))
//     for (let i=1; i<=10; i++) {
//     let resultado = numero*i
//     console.log(numero+"x"+i+": "+resultado)
//     }
//     let confirmacion = prompt("¿Desea ver otra tabla?").toLowerCase()
//     if (confirmacion == "no") {
//         continuar == false
//         console.log("Gracias!")
//         break
//     }
// }

//switch..case

// let menu = parseInt(prompt("Ingrese 1 para ver su cuenta, ingrese 2 para extracción, ingrese 3 para depósito y cualquier otro número para salir.")) 

// switch(menu) {
//     case 1: 
//         console.log("Total de la cuenta = $3000")
//         break
//     case 2: 
//         console.log("Límite de extracción: $1000")
//         break
//     case 3:
//         console.log("Límite de depósito: $15000")
//         break
//     default:
//         console.log("Hasta luego!")
//         break
// }

//switch..case& //while //break

// let continuar = true
// let total = 3000
// let limite = 1000
// let deposito = 15000

// while(continuar) {
//     menu = parseInt(prompt("Ingrese 1 para ver su cuenta, ingrese 2 para extracción, ingrese 3 para depósito y cualquier otro número para salir.")) 

//     switch(menu) {
//         case 1:
//             console.log("Total de la cuenta = $"+total)
//             break
//         case 2: 
//             console.log("Límite de extracción: $"+limite)
//             break
//         case 3:
//             console.log("Límite de depósito: $"+deposito)
//             break
//         default:
//             console.log("Entendido. Retire su tarjeta.")
//             break
//     }

//     let confirmacion = prompt("¿Desea hacer otra consulta?").toLowerCase()
//     if (confirmacion == "no") {
//         continuar == false
//         console.log("No olvide retirar su tarjeta.")
//         break
//     }
// }


// Functions

// function sumar () {
//     let numeroA = 15
//     let numeroB = 30
    
//     let resultado = numeroA + numeroB
    
//     return resultado
// }

// let calculo = sumar() + 45
// console.log("El resultado de la suma es: " +calculo)

// let precioEnPesos = calculo*1070
// console.log = ("El precio en pesos es "+precioEnPesos)

// const restar = function() {
//     let variable1 = 15
//     let variable2 = 32

//     let resultado = variable1 - variable2

//     return resultado
// }

// console.log(restar())

// function suma(numeroA,numeroB) {
//     let resultado = numeroA + numeroB

//     return resultado
// }

// console.log(suma(4,5))

// function sumar () {
//     let numeroA = parseInt(prompt("Ingrese el primer número"))
//     let numeroB = parseInt(prompt("Ingrese el segundo número"))

//     let resultado = numeroA + numeroB

//     alert(numeroA+ " + " +numeroB+" = "+resultado)
// }

// sumar()

// function sumar() {
//     let numero1 = 5;
//     let resultado = numero1 + 5;

//     return resultado
// }

// console.log(sumar());

// const sumar = (numero1,numero2) => numero1 + numero2;

// console.log(sumar(3,5));

//Operaciones
const sumar = (numA,numB) => numA + numB
const restar = (numA,numB) => numA - numB
const multiplicar = (numA,numB) => numA * numB
const dividir = (numA,numB) => numA / numB
const iva = (precioProducto) => precioProducto * 0.21

// Calculadora

let continuar = true

while(continuar) {
    menu = parseInt(prompt("Ingrese 1 para sumar, \ningrese 2 para restar \ningrese 3 para multiplicar \ningrese 4 para dividir \ningrese 5 para calcular IVA \no cualquier otro número para salir.")) 

    switch(menu) {
        case 1:
            alert('El resultado de la suma es: ' +sumar(
                parseInt(prompt("Ingrese el primer número")),
                parseInt(prompt("Ingrese el segundo número"))))
            break
        case 2: 
            alert('El resultado de la resta es: ' +restar(
                parseInt(prompt("Ingrese el primer número")),
                parseInt(prompt("Ingrese el segundo número"))))
            break
        case 3:
            alert('El resultado de la multiplicación es: ' +multiplicar(
                parseInt(prompt("Ingrese el primer número")),
                parseInt(prompt("Ingrese el segundo número"))))
            break
        case 4:
            alert('El resultado de la división es: ' +dividir(
                parseInt(prompt("Ingrese el primer número")),
                parseInt(prompt("Ingrese el segundo número"))))
            break
        case 5: 
            alert('El IVA es: ' +iva(
                parseInt(prompt('¿Cuál es el precio del producto?'))));
        default:
            alert("Debe seleccionar una opción!")
            break
    }
    
    let confirmacion = prompt("¿Desea hacer otra consulta?").toLowerCase()
        if (confirmacion == "no") {
                continuar == false
                alert("Entendido. Gracias!")
                break
        }
}