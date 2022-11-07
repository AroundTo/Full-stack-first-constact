//  1.- Create an array of n unique numbers, from 0 to N - 1, where N is the length of the array.
//  i: 5
//  o: [0, 1, 2, 3, 4]

const arrayOfUniqueNumbers = (n: number) => [...Array(n).keys()];


//  using this previous method, generate an array of n numbers alternating them positive and negative starting with positive,
//  then save it in a new variable and sort it.

// i: [0,1,2,3,4]
// o: [-3,-1,0,2,4]

const alternateValues = (n: number) => {
  const setArrayOfNumbers = arrayOfUniqueNumbers(n);
  setArrayOfNumbers.forEach((item: number, index: number) => {
    if (item % 2 !== 0) {
      setArrayOfNumbers[index] = -Math.abs(item);
    }
  });
  const sortValues = setArrayOfNumbers.sort((a: number, b: number) => a - b);
  return sortValues
};

// Consider the following code:

const CUSTOMERS = [
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


const findCustomer = (name: string) => {
  return CUSTOMERS.find((item: { customer: string; balance: number }) => {
    return item.customer === name;
  });
};

const memoize = (
  callback: (name: string) =>
    | {
        customer: string;
        balance: number;
      }
    | undefined
) => {
  let cache = {};
  return (...args: any[]): any => {
    const customer = args[0];
    return cache[customer]
      ? cache[customer]
      : (cache[customer] =
          callback(customer)?.balance ||
          `ERROR: ${customer} does not exist on DB`);
  };
};

const getBalance = memoize(findCustomer);
getBalance("Jim");



// consider the following code:

const z = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const r = Math.ceil(Math.random() * 10);

//  do you find any problem with this code? if so, what is the possible solution to prevent it?

// Math.random() generates a number >= 0 and < 1. It has a tiny chance to land on 0
// 0 * 10 = 0 so the number won't round up to 1 ( If we are using ceil we have the purpose of rounding up )
// We can change the assignment to Math.floor(Math.random() * 10 + 1)
// adding “+1” makes sure the random number falls within the number set [1…10]

const s = Math.floor(Math.random() * 10 + 1); // random numbers from 1 to 10

// or we can get a random item from a given array

const t = z[Math.floor(Math.random() * z.length)];

