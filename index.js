console.log("");
console.group("Cargando los resultados...");
//  1.- Create an array of n unique numbers, from 0 to N - 1, where N is the length of the array.
//  i: 5
//  o: [0, 1, 2, 3, 4]

const u = 5;
let c = Array.from({ length: u }, (_, x) => x);
console.log("");
console.log(c);
console.log("");

//  using this previous method, generate an array of n numbers alternating them positive and negative starting with positive,
//  then save it in a new variable and sort it.
// i: [0,1,2,3,4]
// o: [-3,-1,0,2,4]

function altCaja(ca) {
  const altMat = ca.map((num, y) => (y % 2 === 0 ? num : -num));
  return altMat.sort((a, b) => a - b);
}

const ca = c;
const re = altCaja(ca);
console.log(re);
console.log("");
// Consider the following code:
var CUSTOMERS = [
  {
    customer: "John",
    balance: 125,
    id: "0x0001",
  },
  {
    customer: "Jane",
    balance: 100,
    id: "0x0002",
  },
  {
    customer: "Jim",
    balance: 175,
    id: "0x0003",
  },
  {
    customer: "Jill",
    balance: 200,
    id: "0x0004",
  },
];
// create a function that receives a name of a customer, and returns the balance of that customer.
// if type of this function is not infered, type it.
// EXTRA: optimize this fucnction to decrease the time complexity.
// EXTRA 2 : optimize this function to be able to memorize the results of previous calls.
// i: getBalance('John')
// o: 125
function obtenerSaldo(clienteNombre) {
  const customer = CUSTOMERS.find((c) => c.customer === clienteNombre);
  return customer ? customer.balance : "No se encontró al cliente";
}

console.log("");
console.log(obtenerSaldo("John"));

console.log("");

console.log(
  "El codigo no presenta ninguna funcion, solo es un array con objetos"
);
console.log(
  "The code does not present any function, it is only an array with objects"
);

var customerMap = {};
CUSTOMERS.forEach((customer) => {
  customerMap[customer.customer] = customer.balance;
});

console.log("");
console.log("");
console.log(customerMap);
console.log("");

function obtenerSaldoCliente(customers) {
  var saldoCache = {};

  return function adquirirSaldo(nombre) {
    if (saldoCache[nombre]) {
      console.log("");
      console.log("Devolver saldo de la cache...");
      return saldoCache[nombre];
    }

    const customer = customers.find((c) => c.customer === nombre);

    if (!customer) {
      console.log("");
      console.log(`Cliente: ${nombre} no tiene fondos`);
      return null;
    }

    const balance = customer.balance;
    saldoCache[nombre] = balance;
    console.log("");
    console.log("Añadir saldo en la cache...");

    return balance;
  };
}

const adquirirSaldo = obtenerSaldoCliente(CUSTOMERS);
console.log("");
console.log(adquirirSaldo("John"));
console.log(adquirirSaldo("John"));
console.log(adquirirSaldo("Jim"));
console.log(adquirirSaldo("Jim"));
console.log("");
// consider the following code:
var z = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var r = Math.ceil(Math.random() * 10);
//  do you find any problem with this code? if so, what is the possible solution to prevent it?
console.log(r);
console.log("");
console.log(
  "Solucion: la variable z contiene un array con 9 posiciones, para evitar problemas  tenemos que vincular el array con el metodo y lo realizamos de la siguiente manera:"
);
console.log(
  "Solution: the variable z contains an array with 9 positions, to avoid problems we have to link the array with the method and we do it as follows:"
);
console.log("");
console.log("var w = Math.floor(Math.random() * z.length)");
console.log("");
var w = Math.floor(Math.random() * z.length);
console.log("");
console.log(
  "Por lo tanto el metodo Math.ceil() nos retorna un numero entero que se aproxima hacia la derecha, el metodo Math.floor() nos acerca al entero de la izquierda."
);
console.log(
  "So the Math.ceil() method returns an integer that approaches to the right, the Math.floor() method returns an integer to the left."
);
console.log("");
console.log(w);

console.groupEnd();
