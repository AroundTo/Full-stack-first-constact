const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const raices = Array.from(numeros, (num) => Math.floor(Math.sqrt(num)));

console.log(raices);

let n = [76, 654, 86, 34, 38, 9, 23, 43];

function altCaja(n) {
  const altMat = n.map((num, y) => (y % 2 === 0 ? num : -num));
  return altMat;
}
console.log(altCaja(n));

let caja = [
  "vaso",
  "camisa",
  "pantalon",
  "sueter",
  "arbol",
  "juguetes",
  "hilos",
  "sacapuntas",
  "pesos",
  "coches",
  "parques",
  "ciudades",
];

console.log(caja.sort());
console.log(caja.reverse());

let COCHES = [
  {
    coche: "Chevy",
    modelo: 1999,
    color: "Rojo",
    transmicion: "manual",
  },
  {
    coche: "Toyota",
    modelo: 1991,
    color: "Gris",
    transmicion: "manual",
  },
  {
    coche: "Honda",
    modelo: 2001,
    color: "verde",
    transmicion: "manual",
  },
  {
    coche: "Cadillag",
    modelo: 1995,
    color: "crema",
    transmicion: "automatico",
  },
  {
    coche: "Volkswagen",
    modelo: 2017,
    color: "azul",
    transmicion: "automatico",
  },
  {
    coche: "Mazda",
    modelo: 2009,
    color: "crema",
    transmicion: "manual",
  },
  {
    coche: "Kia",
    modelo: 2018,
    color: "rojo",
    transmicion: "automatico",
  },
];

const mostrarCocheRojos = COCHES.find(
  (mostrarCocheRojos) => mostrarCocheRojos.color === "rojo"
);
console.log(mostrarCocheRojos);

function buscarPorTransmicion(transmicion) {
  let memoria = {};

  return function (transmicion) {
    if (transmicion in memoria) {
      return memoria[transmicion];
    } else {
      let resultados = [];

      resultados = COCHES.filter((coche) => coche.transmicion === transmicion);

      memoria[transmicion] = resultados;

      console.log("");
      console.log(`Añadir ${transmicion} en la cache...`);
      return resultados;
    }
  };
}

let buscarPorTransmicionMemo = buscarPorTransmicion();

console.log(buscarPorTransmicionMemo("manual"));
console.log(buscarPorTransmicionMemo("automatico"));

console.log("");
console.group("diferencia entre ceil() y floor()");
let e = 2.71828;
let ru = Math.ceil(e);
console.log("");
console.log(`El valor de e: ${e} con un ceil redondea a ${ru}`);
console.log(ru);

let calif = 6.81;
let prom = Math.floor(calif);
console.log(`El valor de e: ${calif} con un floor redondea a ${prom}`);

console.log(prom);
console.log("");
let ran = Math.random();
console.log(ran);

var z = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//console.log(z.length)
var r = Math.ceil(Math.random() * z.length);
var j = Math.random();
var m = j * z.length;
console.log(m);

let coche = ["llanta", "chasis", "motor", "bateria"];
let coche1 = coche.pop();

console.log(coche);
console.log(coche.pop(0));
console.log("");

let numero = 21;
let numLetra = numero.toString();
let numCaja = numLetra.split("");
let numReversa = numCaja.reverse();
let numUnido = numReversa.join("");
let numGirado = Number(numUnido);
console.log(numGirado);
