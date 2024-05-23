let opcion;
const carrito = [];
const catalogo = [
    { nombre: "Alienware m15 R7", precio: 2000, categoria: "laptops"},
    { nombre: "ASUS ROG Zephyrus G14", precio: 1500, categoria: "laptops"},
    { nombre: "MSI Stealth GS77", precio: 1800, categoria: "laptops"},
    { nombre: "Razer Blade 15", precio: 2200, categoria: "laptops"}
];

function mostrarCatalogo() {
    console.log("Laptops disponibles:");
    catalogo.forEach((laptop, index) => {
        console.log(`${index + 1}. ${laptop.nombre} - Precio: ${laptop.precio}`);
    });
}

function comprarLaptop() {
    let producto = prompt("Ingrese el número de la laptop que desea comprar:");
    if (producto !== null && producto.trim() !== "") {
        let productoSeleccionado = parseInt(producto);
        if (!isNaN(productoSeleccionado) && productoSeleccionado >= 1 && productoSeleccionado <= catalogo.length) {
            let laptopAComprar = catalogo[productoSeleccionado - 1];
            alert(`Usted ha elegido comprar ${laptopAComprar.nombre} con el precio de: ${laptopAComprar.precio} Soles.`);
            carrito.push(laptopAComprar);
            console.log("Laptops en el carrito:");
            console.log(carrito);
        } else {
            alert("Número de laptop no válido. Por favor, ingrese un número válido.");
        }
    } else {
        alert("Operación cancelada.");
            }
}

do {
    let input = prompt("Bienvenido a nuestra tienda de laptops gamers.\nIngrese la opción:\n1. Ver catálogo\n2. Comprar laptop\n0. Salir");
    if (input !== null && input.trim() !== "") {
        opcion = parseInt(input);
        if (!isNaN(opcion)) {
            switch(opcion) {
                case 1:
                    mostrarCatalogo();
                    break;
                case 2:
                    comprarLaptop();
                    break;
                case 0:
                    alert("Gracias por visitar nuestra tienda. ¡Hasta luego!");
                    break;
                default:
                    alert("Opción no válida. Por favor, ingrese una opción válida.");
                    break;
            }
        } else {
            alert("Por favor, ingrese un número válido.");
        }
    } else {
        alert("Operación cancelada. ¡Hasta luego!");
        opcion = 0;
    }
} while (opcion !== 0);
