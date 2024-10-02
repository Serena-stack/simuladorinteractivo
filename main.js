let nombreIngresado = prompt ("Ingrese su nombre");

if (nombreIngresado == "") {
    alert("No ingresaste el nombre de usuario");

}

else {
    alert("Nombre ingresado"+nombreIngresado);
}

let producto = "";
let cantidad = 0;
let precio = 0;
let cantidadTotal = 0;
let precioTotal = 0;
let seguirComprando = false;





const comprarProductos = () => {
    console.log("Bienvenido a la librería artesanal.");
    console.log("Productos disponibles:");
    
    productosLibreriaArtesanal.forEach(producto => {
        console.log(`${producto.id}: ${producto.nombre} - $${producto.precio.toFixed(2)} (Disponibles: ${producto.cantidadDisponible})`);
    });}

    const carrito = [];

productosLibreriaArtesanal.sort((a, b) => a.precio - b.precio);
    


function agregarAlCarrito(productoId, cantidad) {
    const producto = productosLibreriaArtesanal.find(p => p.id === productoId);
    
    if (producto) {
        if (cantidad > producto.cantidadDisponible) {
            console.log(`No hay suficiente stock de ${producto.nombre}.`);
        } else {
            carrito.push({ ...producto, cantidad });
            console.log(`${cantidad} de ${producto.nombre} agregado(s) al carrito.`);
            producto.cantidadDisponible -= cantidad; 
        }
    } else {
        console.log("Producto no encontrado.");
    }
}


agregarAlCarrito(1, 2); 
agregarAlCarrito(2, 1); 
agregarAlCarrito(3, 5); 


const eliminarDelCarrito = (productoId) => {
    const indice = carrito.findIndex(item => item.id === productoId);
    
    if (indice !== -1) {
        const productoEliminado = carrito[indice];
        carrito.splice(indice, 1); 
        console.log(`${productoEliminado.cantidad} de ${productoEliminado.nombre} eliminado(s) del carrito.`);
        
        
        const productoOriginal = productosLibreriaArtesanal.find(p => p.id === productoId);
        if (productoOriginal) {
            productoOriginal.cantidadDisponible += productoEliminado.cantidad;
        }
    } else {
        console.log("Producto no encontrado en el carrito.");
    }
};

console.log("Carrito de compras:", carrito);


const mostrarCarrito = () => {
    console.log("Carrito de compras:");
    if (carrito.length === 0) {
        console.log("El carrito está vacío.");
        return;
    }
    
    carrito.forEach(item => {
        console.log(`${item.cantidad} x ${item.nombre} - $${item.precio.toFixed(2)} cada uno`);
    });
};


const calcularTotal = () => {
    return carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
};


const confirmarCompra = () => {
    mostrarCarrito();
    const total = calcularTotal();
    console.log(`Total a pagar: $${total.toFixed(2)}`);

    const confirmacion = prompt("¿Deseas confirmar la compra? (sí/no)").toLowerCase();
    if (confirmacion === 'sí') {
        console.log("¡Gracias por tu compra!");
        
        carrito = [];
    } else {
        console.log("La compra ha sido cancelada.");
    }
};
    
comprarProductos();

    