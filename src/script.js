var nombres = "Danilo Alejandro";
var apellidos = "Ochoa Hidalgo";
var nombreCompleto = nombres + " " + apellidos;

// alert("Bienvenido: " + nombreCompleto);
console.log(nombreCompleto);

/* Contenidos */

var datos1 = document.getElementById("contenidos1");
var datos2 = document.getElementById("contenidos2");
var datos3 = document.getElementById("contenidos3");
datos3.innerHTML = `<h2>Nombre del Cliente: ${nombres} ${apellidos}</h2>`;

var subtotal = 300;
var descuento = 0;
const iva = 0.12;

if (subtotal > 200) {
    datos3.innerHTML += `<p>Su monto es mayor a $200. <p/>`;
    descuento = 0.10;
} else {
    datos3.innerHTML += `<p>Su monto es menor a $199. <p/>`;
    descuento = 0.05;
}

for (let i = 0; i < 10; i++) {
    datos2.innerHTML += `<p>${i} debo poner atención en clase.</p>`;
}

function calcularIVA (subtotal) {
    var calculoIVA = subtotal * iva;
    return calculoIVA;
}

function imprimir () {
    var iva = calcularIVA(subtotal);
    var total = subtotal + iva;
    datos3.innerHTML += "<p>Su valor de IVA a pagar es: " + iva + "</p>";
    datos3.innerHTML += "<p>Su valor total a pagar es: " + total + "</p>";
}

imprimir();

var productos = ["Arroz", "Azucar", "Atun", "Harina", "Sal"];
datos1.innerHTML += "<h3>Detalles del Producto</h3>";
datos1.innerHTML += "<ul>";
for (let i = 0; i < productos.length; i++) {
    datos1.innerHTML += "<li>" + productos[i] + "</li>";
}
datos1.innerHTML += "</ul>";

datos3.innerHTML += "<ul>";
productos.forEach(producto => {
    datos3.innerHTML += "<li>" + producto + "</li>";
});
datos3.innerHTML += "</ul>";