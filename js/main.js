
class Zapatilla {
    constructor(nombre, marca, precio, stock) {
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }

    vender() {
        if (this.stock > 0) {
            this.stock--
            console.log("Venta realizada: " + this.nombre)
        } else {
            console.log("No hay stock de " + this.nombre)
        }
    }
}


const nike = new Zapatilla("Nike Air Force", "Nike", 120000, 5)

const adidas = new Zapatilla("Adidas Campus", "Adidas", 150000, 8)

const jordan = new Zapatilla("Jordan Retro 4", "Jordan", 250000, 3)


const zapatillas = [nike, adidas, jordan]

let total = 0

const calcularTotal = (total, precio) => total + precio

const buscarZapatilla = () => {
    const nombreBuscado = prompt("¿Qué zapatilla querés buscar?")

    const resultadoBusqueda = zapatillas.find(
        zapatilla => zapatilla.nombre.toLowerCase() === nombreBuscado.trim().toLowerCase()
    )

    if (resultadoBusqueda !== undefined) {
        console.log("Zapatilla encontrada:", resultadoBusqueda)
    } else {
        console.log("No encontramos esa zapatilla")
    }
}


const buscarPorPresupuesto = () => {
    const presupuesto = Number(prompt("¿Cuánto dinero tenés para gastar?"))

    const zapatillasPorPresupuesto = zapatillas.filter(
        zapatilla => zapatilla.precio <= presupuesto && zapatilla.stock > 0
    )

    console.log("Zapatillas dentro de tu presupuesto:", zapatillasPorPresupuesto)
}


const mostrarPreciosTransferencia = () => {
    const preciosTransferencia = zapatillas.map(zapatilla => ({
        nombre: zapatilla.nombre,
        precioOriginal: zapatilla.precio,
        precioTransferencia: zapatilla.precio * 0.80
    }))

    console.log("Precios con descuento:", preciosTransferencia)
}

const venderProducto = (zapatilla) => {
    if (zapatilla.stock > 0) {
        zapatilla.vender()
        total = calcularTotal(total, zapatilla.precio)
        console.log(zapatilla.nombre + " agregada al carrito")
    } else {
        console.log("No hay stock disponible")
    }
}


const comprarZapatillas = () => {
    
let continuar = "si"
while (continuar === "si") {

    let opcion = prompt (
    "Elegi una zapatilla:\n" +
    "1 - Nike Air Force\n" + 
    "2 - Adidas Campus\n" +
    "3- Jordan Retro 4"
)

switch (opcion) {
    case "1":
        venderProducto(nike)
        break

    case "2":
        venderProducto(adidas)
        break

    case "3":
        venderProducto(jordan)
        break

    default:
        console.log("Producto no disponible")
}


continuar = prompt ("desea continuar comprando? si/no")
if (continuar === "si") {
    console.log ("Continuemos comprando")
}
else {
    console.log("El total de tu compra es: $" + total)
    console.log("Stock final de Nike: " + nike.stock)
    console.log("Stock final de Adidas: " + adidas.stock)
    console.log("Stock final de Jordan: " + jordan.stock)
    console.log("Gracias por tu compra " + nombre)
}
}
}


const nombre = prompt("¿Cuál es tu nombre?")
console.log("Bienvenido " + nombre)


const opcionMenu = prompt(
    "BIENVENIDO A NUEVE MUNDOS\n" +
    "¿Qué querés hacer?\n" +
    "1 - Buscar una zapatilla\n" +
    "2 - Buscar por presupuesto\n" +
    "3 - Ver precios con descuento\n" +
    "4 - Comprar zapatillas\n" +
    "5 - Salir"
)

switch (opcionMenu) {

    case "1":
        buscarZapatilla()
        break

    case "2":
        buscarPorPresupuesto()
        break

    case "3":
        mostrarPreciosTransferencia()
        break

    case "4":
        comprarZapatillas()
        break

    case "5":
        console.log("Gracias por visitar Nueve Mundos")
        break

    default:
        console.log("Opción incorrecta")
}


