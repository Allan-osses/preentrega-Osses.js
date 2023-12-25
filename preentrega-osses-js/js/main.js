function calcularTotal(carrito) {
    let total = 0;
    for (let producto in carrito) {
        total += carrito[producto].precio * carrito[producto].cantidad;
    }
    return total;
}

let carritoCompras = {};

while (true) {
    alert("Bienvenido a la tienda en línea");
    let opcion = prompt("Seleccione una opción:\n1. Agregar producto al carrito\n2. Ver carrito\n3. Calcular total\n4. Salir");

    switch (opcion) {
        case "1":
            let producto = prompt("Ingrese el nombre del producto (cafe, te, pan):").toLowerCase();
            let cantidad = parseInt(prompt(`Ingrese la cantidad de ${producto}s:`));

            if (isNaN(cantidad) || cantidad <= 0) {
                alert("Por favor, ingrese una cantidad válida.");
                continue; 
            }

            let precio;

            switch (producto) {
                case "cafe":
                    precio = 300;
                    break;
                case "te":
                    precio = 200;
                    break;
                case "pan":
                    precio = 400;
                    break;
                default:
                    alert("Producto no válido. Selecciona cafe, te o pan.");
                    continue;  
            }

            if (carritoCompras[producto]) {
                carritoCompras[producto].cantidad += cantidad;  
            } else {
                carritoCompras[producto] = { precio, cantidad };
            }

            if (isNaN(carritoCompras[producto].cantidad)) {
                alert("Error al calcular la cantidad. Por favor, verifique las entradas.");
                continue;  
            }

            alert(`${cantidad} ${producto}(s) ha(n) sido agregado(s) al carrito.`);
            break;

        case "2":
            if (Object.keys(carritoCompras).length === 0) {
                alert("El carrito está vacío.");
            } else {
                let productosEnCarrito = "Productos en el carrito:\n";
                for (let producto in carritoCompras) {
                    productosEnCarrito += `${producto}: $${carritoCompras[producto].precio} (Cantidad: ${carritoCompras[producto].cantidad})\n`;
                }
                alert(productosEnCarrito);
            }
            break;

        case "3":
            if (Object.keys(carritoCompras).length === 0) {
                alert("El carrito está vacío. No se puede calcular el total.");
            } else {
                let totalCompra = calcularTotal(carritoCompras);
                alert(`El total de la compra es: $${totalCompra}`);
            }
            break;

        case "4":
            alert("Gracias por usar nuestra tiendita virtual . ¡Hasta luego!");
            break;

        default:
            alert("Opción no válida. Por favor, seleccione una opción válida.");
            break;
    }

    if (opcion === "4") {
        break;
    }
}

