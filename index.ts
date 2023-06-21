//  1.- Create a function tha returns an array of n unique numbers, from 0 to N - 1, where N is the length of the array.
//  i: 5
//  o: [0, 1, 2, 3, 4]

const uniqueNumbers = (n : number) : number[] => [...Array(n).keys()];

const u = uniqueNumbers(5);
console.log(u);

//  given a result of the previous method, generate an array of n numbers, then alternate them between positive and negative using a new function.

// i: [0,1,2,3,4]
// o: [-3,-1,0,2,4]

const alternateNumbers = (numbers : number[]) =>{
  numbers.map((num : number, i) =>{
      numbers[i] = (num % 2 == 0)? num : -num;
  });
  return numbers.sort((a,b) => a - b);
}

console.log(alternateNumbers(u));

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

const randomizeValues = <T>(values: T[]) : T[] => {
  for (let i = values.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [values[i], values[j]] = [values[j], values[i]];
  }
  return values;
}

console.log(randomizeValues(randomValues));

// consider the following code:

const z = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const r = Math.ceil(Math.random() * 10);

//  once you notice the posible error on it, make it visible using type checking. DONT FIX IT, just make it visible using a typescript error.

/* const z : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   const r : number = Math.ceil(Math.random() * 10); */

const tryError = (z: number[], r : number): number => {
  try{
    console.log(`%cI assumed that the error was that r can obtain 10 as a posible value, an index that does not exist in the array z 🤔. r = ${r}`, "color: red");

    if(z[r] === undefined) {
      throw new Error(`Index ${r} does not exist within z = [${z}]`);
    }
    return r;
  }catch(error){
    console.log(error);
    return r;
  }
}

tryError(z,r) /* when r==10 error is triggered */

// EXTRA:
//  consider the following code:
const numbers = [5,2,3,4,1,6,7,8,9,10] as const

//  create a function that infer the parameter and return a TYPECHECK of the elements SORTED.

const typeCheckAndSort = <T extends ReadonlyArray<number>>(numbers:T): number[] =>{
  return [...numbers].sort((a,b) => a - b);
}

console.log(typeCheckAndSort(numbers));