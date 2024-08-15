// Botón Click me!!
var but1 = document.getElementById("but1");

function once() {
    console.log("Me dieron click por primera vez");
    but1.removeEventListener("click", once);
}

but1.addEventListener("click", once);

// Cambiar color del título
var titulo = document.getElementById("titulo");
var rojo = document.getElementById("rojo");
var azul = document.getElementById("azul");
var verde = document.getElementById("verde");

function cambiaColor(color) {
    return () => titulo.style.color = color;
}

rojo.addEventListener("click", cambiaColor("red"));
azul.addEventListener("click", cambiaColor("blue"));
verde.addEventListener("click", cambiaColor("green"));

// Event object
var evObj = document.getElementById("evObj");
evObj.addEventListener("mousedown", function(event) {
    console.log(event);
    if (event.button == 0)
        console.log("click izquierdo");
    if (event.button == 2)
        console.log("click derecho");
});

// Input y cambio de texto
var input = document.getElementById("input");
var texto = document.getElementById("texto");

input.addEventListener("input", (event) => {
    texto.textContent = event.target.value;
});

// Cambiar color de fondo con teclado
window.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        document.body.style.background = "lightblue";
    }
    if (event.key == "Enter" && event.ctrlKey) {
        document.body.style.background = "yellow";
    }
});

window.addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
        document.body.style.background = "";
    }
});

// Reto No. 1: Inflar y desinflar el globo
const balloon = document.getElementById("globo");
let balloonSize = 20;

function handleKeyPress(event) {
    event.preventDefault();
    
    if (event.key === "ArrowUp") {
        balloonSize *= 1.1;
    } else if (event.key === "ArrowDown") {
        balloonSize *= 0.9;
    }

    balloon.style.fontSize = `${balloonSize}px`;

    if (balloonSize > 80) {
        balloon.textContent = "💥";
        document.removeEventListener("keydown", handleKeyPress);
    }
}

document.addEventListener("keydown", handleKeyPress);

// Reto No. 2: Abrir y cerrar modal
var modal = document.getElementById("modal");
var openButton = document.getElementById("openModal");
var modalImage = document.getElementById("modal-image");
var close = document.getElementsByClassName("close")[0];

openButton.addEventListener('click', function() {
    modal.style.display = "block";
    modalImage.src = 'https://picsum.photos/300/200';
});

close.addEventListener('click', function() {
    modal.style.display = "none";
});












