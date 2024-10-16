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

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
actualizarCarrito();


productosLibreriaArtesanal.sort((a, b) => a.precio - b.precio);
    

function agregarAlCarrito(productoId, cantidad) {
    const producto = productosLibreriaArtesanal.find(p => p.id === productoId);
    
    if (producto) {
        if (cantidad > producto.cantidadDisponible) {
            console.log(`No hay suficiente stock de ${producto.nombre}.`);
        } else {
            carrito.push({ ...producto, cantidad });
            localStorage.setItem('carrito', JSON.stringify(carrito));
            actualizarCarrito();
            console.log(`${cantidad} de ${producto.nombre} agregado(s) al carrito.`);
            producto.cantidadDisponible -= cantidad; 
        }
    } else {
        console.log("Producto no encontrado.");
    }
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById('carrito');
    carrito.innerHTML = '';
    let total = 0;
    carrito.forEach((producto, index) => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - $${producto.precio}`;
        listaCarrito.appendChild(li);
        total += producto.precio;
    });

    document.getElementById('total').textContent = `Total: $${total}`;

    document.getElementById('vaciarCarrito').addEventListener('click', () => {
        carrito = [];
        localStorage.removeItem('carrito');
        actualizarCarrito();
    });
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
        alert("Producto no encontrado en el carrito.");
    }
};

    alert("Carrito de compras:", carrito);


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
function mostrarCarrito() {
    const carrito = document.getElementById('carrito');
    carrito.innerHTML = ' '

    carrito.forEach((producto, index) => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - $${producto.precio}`;
        carrito.appendChild(li);
    });

    document.getElementById('total').textContent = `Total: $${total}`;
}

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
        
        carrito.length = 0

    } else {
        alert("La compra ha sido cancelada.");
    }
};
    
comprarProductos();

    