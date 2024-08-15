// Estilos generales para el body
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.alignItems = 'center';
document.body.style.backgroundImage = 'url("fon.jfif")';
document.body.style.backgroundPosition = 'center center';
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundAttachment = 'fixed';
document.body.style.backgroundSize = 'cover';
document.body.style.margin = '0';
document.body.style.padding = '0';

// Estilo para centrar elementos
const centeredElements = document.querySelectorAll('.centered');
centeredElements.forEach(element => {
    element.style.margin = '0 auto';
    element.style.textAlign = 'center';
});

// Estilos para ul
const ul = document.querySelector('ul');
if (ul) {
    ul.style.display = 'flex';
    ul.style.justifyContent = 'center';
    ul.style.listStyleType = 'none';
    ul.style.margin = '0';
    ul.style.padding = '0';
}

// Estilos para li
const lis = document.querySelectorAll('li');
lis.forEach(li => {
    li.style.padding = '15px';
    li.addEventListener('mouseover', () => {
        li.style.backgroundColor = 'rgb(236, 231, 231)';
        li.style.color = 'rgb(255, 255, 255)';
    });
    li.addEventListener('mouseout', () => {
        li.style.backgroundColor = '';
        li.style.color = '';
    });
});

// Estilos para el nav
const nav = document.querySelector('nav');
if (nav) {
    nav.style.backgroundColor = 'rgb(0, 0, 0)';
}

// Estilos para li a
const liLinks = document.querySelectorAll('li a');
liLinks.forEach(link => {
    link.style.color = 'white';
});

// Estilos para .conte
const contes = document.querySelectorAll('.conte');
contes.forEach(conte => {
    conte.style.height = '510px';
    conte.style.width = '25%';
    conte.style.boxShadow = '0 0 7px #111';
    conte.style.margin = '30px 30px';
    conte.style.flexBasis = '25%'; // Para que los contenedores ocupen un 25% del espacio y se adapten mejor
});

// Estilos para .conte .card
const cards = document.querySelectorAll('.conte .card');
cards.forEach(card => {
    card.style.height = '200px';
    card.style.width = '100%';
    card.style.marginBottom = '170px';
});

// Estilos para .card img
const cardImages = document.querySelectorAll('.card img');
cardImages.forEach(img => {
    img.style.width = '100%';
    img.style.height = 'auto';
    img.style.maxWidth = '300px';
    img.style.maxHeight = '350px';
});

// Estilos para .informacion
const informacions = document.querySelectorAll('.informacion');
informacions.forEach(informacion => {
    informacion.style.height = '80px';
    informacion.style.width = '100%';
});

// Estilos para .informacion h1
const infoH1 = document.querySelectorAll('.informacion h1');
infoH1.forEach(h1 => {
    h1.style.fontFamily = 'sans-serif';
    h1.style.fontSize = '1.2em';
    h1.style.textAlign = 'center';
    h1.style.color = '#333';
    h1.style.marginBottom = '-10px';
});

// Estilos para .informacion p
const infoPs = document.querySelectorAll('.informacion p');
infoPs.forEach(p => {
    p.style.textAlign = 'center';
    p.style.fontFamily = 'sans-serif';
    p.style.fontSize = '.9em';
    p.style.color = '#555';
});

// Estilos para .precio
const precios = document.querySelectorAll('.precio');
precios.forEach(precio => {
    precio.style.height = '50px';
    precio.style.width = '85%';
    precio.style.margin = 'auto';
    precio.style.fontFamily = 'sans-serif';
    precio.style.display = 'flex';
    precio.style.justifyContent = 'space-between';
    precio.style.alignItems = 'center';
});

// Estilos para .box-precio
const boxPrecios = document.querySelectorAll('.box-precio');
boxPrecios.forEach(box => {
    box.style.width = '80px';
});

// Estilos para .precio1
const precio1s = document.querySelectorAll('.precio1');
precio1s.forEach(precio1 => {
    precio1.style.color = 'red';
    precio1.style.fontSize = '.8em';
});

// Estilos para .precio2
const precio2s = document.querySelectorAll('.precio .precio2');
precio2s.forEach(precio2 => {
    precio2.style.fontSize = '1.5em';
});

// Estilos para .shoping
const shopings = document.querySelectorAll('.shoping');
shopings.forEach(shoping => {
    shoping.style.fontSize = '1.5em';
    shoping.style.color = '#555';
});

// Media Queries
function applyMediaQueries() {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 320) {
        contes.forEach(conte => {
            conte.style.width = '100%';
            conte.style.margin = '30px 0';
        });
    } else if (windowWidth <= 600) {
        contes.forEach(conte => {
            conte.style.width = '100%';
            conte.style.margin = '30px 0';
        });
    } else if (windowWidth <= 900) {
        contes.forEach(conte => {
            conte.style.width = '50%';
            conte.style.margin = '30px 10px';
        });
    } else {
        contes.forEach(conte => {
            conte.style.width = '25%';
            conte.style.margin = '30px 15px';
        });
    }
}

// Apply media queries on load and resize
applyMediaQueries();
window.addEventListener('resize', applyMediaQueries);

document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submitButton');
    const emailInput = document.getElementById('emailInput');

    submitButton.addEventListener('click', () => {
        const email = emailInput.value;
        if (email) {
            alert(`Correo electrónico ingresado: ${email}`);
            // Aquí se puede agregar la lógica para enviar el correo a un servidor o almacenarlo
        } else {
            alert('Por favor, ingresa un correo electrónico.');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Centrar elementos de texto
    const centerText = document.querySelectorAll('#contactHeader, #contactHeaderEn, #contactInfo, #contactEmail, #contactAddress');
    centerText.forEach(element => {
        element.style.textAlign = 'center';
    });
    // Centrar el formulario
    const newsletterDiv = document.getElementById('newsletter');
    newsletterDiv.style.textAlign = 'center';
    newsletterDiv.style.marginTop = '20px';
    newsletterDiv.style.marginLeft = 'auto';
    newsletterDiv.style.marginRight = 'auto';
    newsletterDiv.style.width = 'fit-content';
});

// Constructor de función para crear objetos Usuario
function Usuario(nombre, correo, telefono) {
    this.nombre = nombre;
    this.correo = correo;
    this.telefono = telefono;

    // Método para mostrar información del usuario
    this.mostrarInfo = function() {
        return `Nombre: ${this.nombre}\nCorreo: ${this.correo}\nTeléfono: ${this.telefono}`;
    };
}
var usuario1 = new Usuario('Ana Pérez', 'ana.perez@example.com', '555-1234');
var usuario2 = new Usuario('Luis Gómez', 'luis.gomez@example.com', '555-5678');

// Mostrar información de los usuarios en la consola
console.log(usuario1.mostrarInfo());
console.log(usuario2.mostrarInfo());