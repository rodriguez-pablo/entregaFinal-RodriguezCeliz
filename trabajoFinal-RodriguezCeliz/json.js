class Libro {
    constructor(nombre, autor, editorial, genero, precio, imagen, cantidad) {
        this.nombre = nombre;
        this.autor = autor;
        this.editorial = editorial;
        this.genero = genero;
        this.precio = precio;
        this.imagen = imagen;
        this.cantidad = cantidad;
    }
}
const libros = [{nombre: "It", autor: "Stephen King", editorial: "Debolsillo", genero: "Terror", precio: 6000, imagen: "./recursos/terror/it.webp", cantidad: 1},
                {nombre: "Cuentos De Terror", autor: "Edgar Allan Poe", editorial: "Susaeta", genero: "Terror", precio: 1300, imagen: "./recursos/terror/cuentos de terror.webp", cantidad: 1},
                {nombre: "El Resplandor", autor: "Stephen King", editorial: "Debolsillo", genero: "Terror", precio: 6400, imagen: "./recursos/terror/el resplandor.webp", cantidad: 1},
                {nombre: "Orgullo y Prejuicio", autor: "Austen Jane", editorial: "Continente", genero: "Romance", precio: 2550, imagen: "./recursos/romance/orgullo y prejuicio.webp", cantidad: 1},
                {nombre: "Posdata: Te Quiero", autor: "Cecelia Ahern", editorial: "B", genero: "Romance", precio: 9000, imagen: "./recursos/romance/posdata te quiero.webp", cantidad: 1},
                {nombre: "La Tregua", autor: "Mario Benedetti", editorial: "Booket", genero: "Romance", precio: 2400, imagen: "./recursos/romance/la tregua.webp", cantidad: 1},
                {nombre: "Mr Mercedes", autor: "Stephen King", editorial: "Debolsillo", genero: "Policial", precio: 5300, imagen: "./recursos/policiales/mr mercedes.webp", cantidad: 1},
                {nombre: "Cuentos Policiales", autor: "Edgar Allan Poe", editorial: "Lea", genero: "Policial", precio: 3600, imagen: "./recursos/policiales/cuentos policiales.webp", cantidad: 1},
                {nombre: "Las Aventuras De Sherlock Holmes", autor: "Arthur Conan Doyle", editorial: "Alma", genero: "Policial", precio: 5100, imagen: "./recursos/policiales/las aventurras de sherlock holmes.webp", cantidad: 1},
                {nombre: "El Señor de los Anillos", autor: "J. R. R. Tolkien", editorial: "Booket", genero: "Fantasia", precio: 4600, imagen: "./recursos/fantasia/el señor de los anillos.webp", cantidad: 1},
                {nombre: "Nacidos de la Bruma", autor: "Brandon Sanderson", editorial: "B de Bolsillo", genero: "Fantasia", precio: 9000, imagen: "./recursos/fantasia/nacidos de la bruma.webp", cantidad: 1},
                {nombre: "Harry Potter", autor: "J. K. Rowling", editorial: "Salamandra", genero: "Fantasia", precio: 4500, imagen: "./recursos/fantasia/harry potter.webp", cantidad: 1}]

const guardarLocal = (clave, valor) => {(localStorage.setItem(clave, valor))}
guardarLocal("listaLibros", JSON.stringify(libros));
