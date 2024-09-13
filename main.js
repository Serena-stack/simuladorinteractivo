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
do {
        producto = prompt("Queres comprar pinceles,lapices o ambos?");
        cantidad = parseInt(prompt("Cuantos queres llevar?"));
        console.log(isNaN(cantidad));

    while(isNaN(cantidad)) {
                alert("Debe agragar un numero valido");
            cantidad = parseInt( prompt("Queres comprar pinceles,lapices o amboss?"));

            return cantidad;
    }

    

    switch (producto) {
            case "pinceles":
                    precio = 1000;
                break;
            case "lapices":
                        precio = 1500;
                        break;
            case "ambos":
                    precio = 2500;
            
            default :
        
                        alert("El producto no se encuentra en el catalago");
                break;
            }

            precioTotal += precio * cantidad;
    cantidadTotal += cantidad;

    seguirComprando = confirm("Desea seguir comprando?");
        } while (seguirComprando);

            return precioTotal;

    }

    const subTotal = comprarProductos();
    const precioFinal = aplicarDescuento(subTotal);
    
    console.log(precioFinal);


    alert("Esta llevando"+cantidadTotal+"productos y el total a pagar es: $"+precioTotal)
    alert("Gracias por su compra!");