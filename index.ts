
console.group("Cargando los resultados...");
//  1.- Create an array of n unique numbers, from 0 to N - 1, where N is the length of the array.
//  i: 5
//  o: [0, 1, 2, 3, 4]
const crearCajaInicial = (n: number): number[] => {
  return Array.from({ length: n }, (_, x) => x);
}

const miCajaPrimera: number[] = crearCajaInicial(5);
console.log(miCajaPrimera);



//  using this previous method, generate an array of n numbers alternating them positive and negative starting with positive,
//  then save it in a new variable and sort it.
// i: [0,1,2,3,4]
// o: [-3,-1,0,2,4]
const crearCajaSecundaria = (ca: number[]): number[] => {
  const altMat = ca.map((num: number, y: number) => (y % 2 === 0 ? num : -num));
  return altMat.sort((a: number, b: number ) => a - b);
}

const cajaAbierta: number[] = miCajaPrimera;
const resFinal: number[] = crearCajaSecundaria(cajaAbierta);
console.log(resFinal);






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
type Customer = {
  customer: string;
  balance: number;
  id: string;
}


const obtener_saldo = (() => {
  const cache = new Map<string, number>();
  
  return (name: string): string => {
    if (cache.has(name)) {
      return cache.get(name)!.toString();
    }

    const customer = CUSTOMERS.find((c) => c.customer === name);
    if (customer) {
      cache.set(name, customer.balance);
      return customer.balance.toString();
    } else {
      return "cliente no encontrado";
    }
  };
})();

console.log(obtener_saldo("John")); 
console.log(obtener_saldo("Juan")); 
console.log(obtener_saldo("John") + " cache"); 
console.log(obtener_saldo("Jim")); 
console.log(obtener_saldo("Jack"));



//var z = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//var r = Math.ceil(Math.random() * 10);
//  do you find any problem with this code? if so, what is the possible solution to prevent it?

const zeta: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const erre: number = Math.floor(Math.random() * zeta.length);
console.log(`El elemento aleatorio de la matriz zeta es: ${zeta[erre]}`);

console.log("Fin de los resultados...")
