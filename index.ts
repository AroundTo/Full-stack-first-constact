//  1.- Create a function tha returns an array of n unique numbers, from 0 to N - 1, where N is the length of the array.
//  i: 5
//  o: [0, 1, 2, 3, 4]

// YOUR
// CODE
// HERE

//  given a result of the previous method, generate an array of n numbers, then alternate them between positive and negative using a new function.

// i: [0,1,2,3,4]
// o: [-3,-1,0,2,4]

// YOUR
// CODE
// HERE

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


// consider the following code:

const z = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const r = Math.ceil(Math.random() * 10);

//  once you notice the posible error on it, make it visible using type checking. DONT FIX IT, just make it visible using a typescript error.

// YOUR
// CODE
// HERE

// EXTRA:
//  consider the following code:
const numbers = [5,2,3,4,1,6,7,8,9,10] as const

//  create a function that infer the parameter and return a TYPECHECK of the elements SORTED.
