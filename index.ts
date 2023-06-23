//  1.- Create a function tha returns an array of n unique numbers, from 0 to N - 1, where N is the length of the array.
//  i: 5
//  o: [0, 1, 2, 3, 4]

// YOUR
// CODE
// HERE
const getUniqueNumbersArray = (n: number): number[] => {
  const arr: number[] = [];
  for (let i = 0; i < n; i++) {
    arr.push(i);
  }
  return arr;
};

console.log('uniqueNumbersArray =>',getUniqueNumbersArray(5));
//  given a result of the previous method, generate an array of n numbers, then alternate them between positive and negative using a new function.

// i: [0,1,2,3,4]
// o: [-3,-1,0,2,4]

// YOUR
// CODE
// HERE

const sortAlternatingNumbers = (arr: number[]): number[] => {
  const sortedArr: number[] = [];
  arr.forEach((index) => {
    if (index % 2 === 0) {
      sortedArr.push(index * -1);
    } else {
      sortedArr.push(index);
    }
  });
  return sortedArr;
};
// Consider the following code:

const randomValues  = [
  'Hello',
  0,
  true,
  { name: 'John Doe' },
  [3,2],
  () => 'Hello World'
]

//  create a function that infer parameters type, then return it ramdomly using the infered type.
//  from the parameter type

// YOUR
// CODE
// HERE
function getRandomValue<T>(values: T[]): T {
  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
}

const randomValue = getRandomValue(randomValues);

// consider the following code:

const z = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const r = Math.ceil(Math.random() * 10);

//  once you notice the posible error on it, make it visible using type checking. DONT FIX IT, just make it visible using a typescript error.

// YOUR
// CODE
// HERE
const z2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const r2: number = Math.ceil(Math.random() * 10); // Error: Type 'number' is not assignable to type 'number[]'.
// EXTRA:
//  consider the following code:
const numbers = [5,2,3,4,1,6,7,8,9,10] as const

//  create a function that infer the parameter and return a TYPECHECK of the elements SORTED.
function sortAndCheckType<T extends readonly number[]>(numbers: T): typeof numbers {
  const sortedNumbers = [...numbers].sort((a, b) => a - b);
  return sortedNumbers as unknown as typeof numbers;
}

const sortedNumbers = sortAndCheckType(numbers);
