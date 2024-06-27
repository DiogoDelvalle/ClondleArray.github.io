let intentos = 6;
const CANTLETRAS = 5;
const BUTTON = document.getElementById("guess-button");


BUTTON.addEventListener("click", intentar);

let diccionario = ["COMER", "CORRE", "ROMPE", "CARRO", "DANTE", "COLOR", "OSITO", "COMPU", "ARBOL", "BICHO", "PERRO"];
const PALABRA = diccionario[Math.floor(Math.random() * diccionario.length)].toUpperCase();

function intentar() {
  console.log(PALABRA);
  const INTENTO = leerIntento();

  const GRID = document.getElementById("grid");
  const ROW = document.createElement("div");
  ROW.className = "contenedor";
  for (let i in PALABRA) {
    const SPAN = document.createElement("span");
    SPAN.className = "letter";
    if (PALABRA[i] === INTENTO[i]) {
      SPAN.innerHTML = INTENTO[i];
      SPAN.style.backgroundColor = "green";
    }
    else if (PALABRA.includes(INTENTO[i])) {
      SPAN.innerHTML = INTENTO[i];
      SPAN.style.backgroundColor = "yellow";
    }
    else {
      SPAN.innerHTML = INTENTO[i];
      SPAN.style.backgroundColor = "grey";
    }
    ROW.appendChild(SPAN)
  }
  GRID.appendChild(ROW);
  intentos--
  if (intentos === 0) {
    terminar("<h2>Lo lamento perdiste</h2>")
  }
}


function leerIntento() {
  let valor = document.getElementById("guess-input").value;
  valor = valor.toUpperCase();
  return valor;
}

function terminar(mensaje) {
  const INPUT = document.getElementById("guess-input");
  INPUT.disabled = true;
  BUTTON.disabled = true;
  let contenedor = document.getElementById("guesses");
  contenedor.innerHTML = mensaje;
}