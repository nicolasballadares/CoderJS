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