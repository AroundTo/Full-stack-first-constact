//  1.- Create an array of n unique numbers, from 0 to N - 1, where N is the length of the array.
//  i: 5
//  o: [0, 1, 2, 3, 4]

const generateUniqueNumbersArray  = (length: number): number[] => {
  let counter =  0;
  const uniqueNumbersArray: number[] = [];
  while(counter < length) {
    uniqueNumbersArray.push(counter);
    counter++;
  }
  return uniqueNumbersArray;
}

console.info('UNIQUE NUMBERS ARRAY =>', generateUniqueNumbersArray(5));

//  using this previous method, generate an array of n numbers alternating them positive and negative starting with positive,
//  then save it in a new variable and sort it.

// i: [0,1,2,3,4]
// o: [-3,-1,0,2,4]

const generateSortedAlternatingNumbers = (uniqueNumbers: number[]) : number[] => {
  let counter = 0;
  const alternatedNumbers = uniqueNumbers.map(number => {
    let returnedNumber: number;
    if (counter % 2 === 0){
      returnedNumber = number;
    } else {
      returnedNumber = number * -1;
    }
    counter++;
    return returnedNumber;
  })
  return alternatedNumbers.sort((a: number, b: number) => a - b);
}

const uniqueNumbersArray = generateUniqueNumbersArray(5);
console.info('GENERATE SORTED ALTERNATING NUMBERS =>', generateSortedAlternatingNumbers(uniqueNumbersArray))


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

const getBalanceCustomer  = (name: string) : number | undefined => {
  const customerFound = CUSTOMERS.find(({customer}) => customer === name);
  return customerFound?.balance;
}

console.info('GET BALANCE CUSTOMER =>', getBalanceCustomer('John'));

// EXTRA: optimize this fucnction to decrease the time complexity.
// EXTRA 2 : optimize this function to be able to memorize the results of previous calls.

//EXTRAS: 
const storedValues: number[] = [];
const getBalanceCustomerMemoized  = (name: string) : number | undefined => {
  if(storedValues[name]) return storedValues[name];
  const customerFound = CUSTOMERS.find(({customer}) => customer === name);
  if (customerFound) storedValues[name] = customerFound.balance;
  return customerFound?.balance;
}

console.info('GET BALANCE CUSTOMER MEMOIZED =>', getBalanceCustomerMemoized('Jim'));

// i: getBalance('John')
// o: 125

// consider the following code:

const z = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const r = Math.ceil(Math.random() * 10);

//  do you find any problem with this code? if so, what is the possible solution to prevent it?

/* 
If you're trying to get a random value from inside the "z" array, then you can get a 10 (and never 0)
That would mean that you can try to get a value that is not in the "z" array. 
So, the random number should be from 0 to 9
*/

const res = z[Math.floor(Math.random() * 10)];
// Or based on the length of the given array
const resFromArray = z[Math.floor(Math.random() * z.length)];

console.info('RANDOM NUMBER FROM Z ARRAY =>', resFromArray);