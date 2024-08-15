console.log(document)
console.log(document.body.getElementsByTagName("p"))
console.log(document.getElementById("salud"))
console.log(document.body.getElementsByClassName("titulo"))

var h2s = document.body.getElementsByTagName("h2")

document.body.insertBefore(h2s[2], h2s[0])
h2s[1].remove()

var h1 = document.createElement("h1")
var text = document.createTextNode("Hola mundo")

h1.appendChild(text)

console.log(h1)

document.body.appendChild(h1)

var img = document.getElementById("imagen")
console.log(img.id)

img.src = "https://placedog.net/250/250/b"

h2s[0].style = "color: red"
console.log(h2s[0])
console.log(img.className)

console.log("----------Reto No.1----------")
var images = document.getElementsByTagName("img");

for (var i = 0; i < images.length; i++) {
    var altText = images[i].getAttribute("alt");

    var textNode = document.createTextNode(altText);

    images[i].parentNode.replaceChild(textNode, images[i]);
}
console.log("Todas las imagenes han sido reemplazadas.")

console.log("----------Reto No.2----------")

function generateTable(data) {
    const table = document.createElement("table");

    const headers = Object.keys(data[0]);
    const headerRow = document.createElement("tr");

    headers.forEach(header => {
        const th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
    });

    table.appendChild(headerRow);

    data.forEach(item => {
        const row = document.createElement("tr");

        headers.forEach(header => {
            const td = document.createElement("td");
            td.textContent = item[header];
            if (typeof item[header] === "number") {
                td.style.textAlign = "right";
            }
            row.appendChild(td);
        });

        table.appendChild(row);
    });

    return table;
}

const targetElement = document.getElementById("mountains");
targetElement.appendChild(generateTable(data));
console.log("Se a creado la tabla.")
