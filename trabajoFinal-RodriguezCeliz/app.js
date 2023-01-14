const libroContent = document.getElementById("libroContent");
const verCarrito = document.getElementById("carrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito")

let carrito = []

const almacenados = JSON.parse(localStorage.getItem("listaLibros"))



almacenados.forEach((libro) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${libro.imagen}">
    <h3>${libro.nombre}</h3>
    <p>Autor: ${libro.autor}</p>
    <p>Editorial: ${libro.editorial}</p>
    <p>Genero: ${libro.genero}</p>
    <p class = "precio"> Precio: $${libro.precio}</p>
    `
    libroContent.append(content)

    let comprar = document.createElement("button")
    comprar.innerText = "comprar";
    comprar.className = "comprar"

    content.append(comprar);

    comprar.addEventListener("click", () => {
        
        const repetido = carrito.some((libroRepetido) => libroRepetido.nombre === libro.nombre);

        if (repetido){
            carrito.map((lib) => {
                if (lib.nombre === libro.nombre){
                    lib.cantidad++
                }
            })
        }else{
            carrito.push({
                imagen: libro.imagen,
                nombre: libro.nombre,
                precio: libro.precio,
                cantidad: libro.cantidad});
                }
            console.log(carrito)
            contador()
    });
});


// CARRITO
const pintarCarrito = () => {
    modalContainer.innerHTML =  "";
    const modalHeader = document.createElement("div");
    modalHeader.className="modal-header"
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">CARRITO</h1>
    `;
    modalContainer.append(modalHeader);
    
    const modalButton = document.createElement("h1");
    modalButton.innerText = "X";
    modalButton.className = "modal-header-button";

    modalButton.addEventListener("click", ()=>{
        modalContainer.style.display = "none"
    })

    modalHeader.append(modalButton);

    carrito.forEach((libro) => {
        let carritoContent = document.createElement("section");
        carrito.className = "modal-content";
        carritoContent.innerHTML = `
        <img src="${libro.imagen}">
        <h3>${libro.nombre}</h3>
        <p>$${libro.precio}</p>
        <p>Cantidad ${libro.cantidad}</p>
        <p>Total: ${libro.cantidad * libro.precio}</p>
        `;

        modalContainer.append(carritoContent);

        let eliminar = document.createElement("span");
        eliminar.innerText = "❌ Eliminar Libro";
        eliminar.className = "eliminarLibro";
        carritoContent.append(eliminar);
        
        let separador = document.createElement("hr")
        carritoContent.append(separador)

        eliminar.addEventListener("click", eliminarLibro)
    });

    const total = carrito.reduce((acc, el)=> acc + el.precio * el.cantidad, 0)
    
    const totalBuyin = document.createElement("div")
    totalBuyin.className = "total-content"
    totalBuyin.innerHTML = `total a pagar: $${total}`;
    modalContainer.append(totalBuyin);
}

verCarrito.addEventListener("click", pintarCarrito);

const eliminarLibro = ()=>{
    const foundName = carrito.find((element) => element.nombre);

    carrito = carrito.filter((carritoName) => {
        return carritoName !== foundName;
    });
    contador()
    pintarCarrito()
}

const contador = () => {
    cantidadCarrito.style.display = "block";
    cantidadCarrito.innerText = carrito.length
}


// SCRIPT SUJERENCIAS

let email = document.querySelector("#correo");
email.addEventListener("input", (e)=>{
    if(e.target.value === ""){
        console.log("El email no puede tener espacios en blanco")
    }
})

let formulario = document.querySelector("#formulario");
const correo = document.querySelector("#correo");
const sugerencias = document.querySelector("#sugerencias");


formulario.addEventListener("submit", enviarSugerencias);
function enviarSugerencias(e){
    e.preventDefault();
    swal("Muchas Gracias", `sus sugerencias ha sido recibidas, recibira una respuesta al correo ${correo.value}` , "success");
}