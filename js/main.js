let nombre = prompt("Bienvenido a Estacion LG, donde realizamos los mejores cortes de pelo! Cual es tu nombre?");
alert(nombre + ", porfavor selecciona un dia de la semana, de martes a sabado, para solicitar un turno!");
let dia = "";
let horario = 0;
let solicitarOtroTurno = false;

do{
    dia = prompt("Que dia queres cortarte?");
    switch (dia){
        case "martes":
        alert("Los horarios disponibles para el dia martes son: 11:00, 14:30, 17:00 y 19:30");
        horario = prompt("Selecciona uno de los horarios indicacos");
            break;
        case "miercoles":
        alert("Los horarios disponibles para el dia miercoles son: 11:30, 15:00, 17:30 y 19:00");
        horario = prompt("Selecciona uno de los horarios indicacos");
            break;
        case "jueves":
        alert("Los horarios disponibles para el dia jueves son: 11:00, 14:30, 17:00 y 19:30");
        horario = prompt("Selecciona uno de los horarios indicacos");
            break;
        case "viernes":
        alert("Los horarios disponibles para el dia viernes son: 11:30, 15:00, 17:30 y 19:00");
        horario = prompt("Selecciona uno de los horarios indicacos");
            break;
        case "sabado":
        alert("Los horarios disponibles para el dia sabado son: 11:00, 14:30, 17:00 y 19:30");
        horario = prompt("Selecciona uno de los horarios indicacos");
            break;
        default: 
        alert("Ingresaste mal algun dato")
            break;
    }
    solicitarOtroTurno = confirm ("Queres reservar otro turno?")
} while (solicitarOtroTurno);

alert(nombre+ ", solicitaste turno para el dia "+dia+" a las "+horario+ " hs!");
alert("Tambien contamos con productos para que te puedas peinar en casa!");

const ordenarMenorMayor = () => {
    productos.sort((a, b) => a.precio - b.precio)
    mostrarListaOrdenada()
};

const carrito = [];

const mostrarListaOrdenada = () => {
    const listaOrdenada = productos.map(producto => {
        return "-" + producto.nombre + " $" + producto.precio
    });
    alert("Lista de precios: " + "\n\n" + listaOrdenada.join("\n"))
    comprarProductos(listaOrdenada)
};

const comprarProductos = (listaDeProductos) => {
    let otroPorducto = false;
    let productoNombre = "";
    let productoCantidad = 0;

    do {
        productoNombre = prompt("¿Que producto queres comprar? " + "\n\n" + listaDeProductos.join("\n"));
        productoCantidad = parseInt(prompt("¿Cuántos querés comprar?"))

        const producto = productos.find(producto => producto.nombre.toLowerCase() === productoNombre.toLowerCase())

        if (producto) {
            agregarAlCarrito(producto, producto.id, productoCantidad)
        } else {
            alert("No tenemos el producto que estas buscando.")
        }


        otroPorducto = confirm("¿Deseas comprar otro producto?")
    } while (otroPorducto);

    confirmarCompra()
};

const agregarAlCarrito = (producto, productoId, productoCantidad) => {
    const productoRepedito = carrito.find(producto => producto.id === productoId);
    if (productoRepedito) {
        productoRepedito.cantidad += productoCantidad
    } else {
        producto.cantidad += productoCantidad
        carrito.push(producto)
    }
};

function eliminarProductoCarrito(productoNombre) {
    carrito.forEach((producto, index) => {
        if (producto.nombre.toLowerCase() === productoNombre.toLowerCase()) {
            if (producto.cantidad > 1) {
                producto.cantidad--
            } else {
                carrito.splice(index, 1)
            }
        }
    });
    confirmarCompra()
};

function confirmarCompra() {
    const listaProductos = carrito.map(producto => {
        return "-" + producto.nombre + " | Cantidad:" + producto.cantidad
    });
    const confirmar = confirm("Productos seleccionados: "
        + "\n\n" + listaProductos.join("\n")
        + "\n\nPara continuar presione 'Aceptar' sino 'Cancelar' para eliminar un producto"
    );
    if (confirmar) {
        finalizarCompra(listaProductos)
    } else {
        const productoAEliminar = prompt("Ingrese el nombre del producto que no quiere comprar:");
        eliminarProductoCarrito(productoAEliminar);
    }
}

function finalizarCompra(listaDeProductos) {
    const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0)
    const precioTotal = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
    alert("Detalle de su compra: "
    +"\n\n" + listaProductos.join("\n")
    +"\n\nTotal de productos: "+cantidadTotal
    +"\n\nEl total de la compra es: $"+precioTotal
    +"\n\n Gracias por su compra!")
};

ordenarMenorMayor()