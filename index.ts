//  1.- Create a function tha returns an array of n unique numbers, from 0 to N - 1, where N is the length of the array.
//  i: 5
//  o: [0, 1, 2, 3, 4]
export function getUniqueArr(length: number): number[] {
  return Array.from({ length }, (_, i) => i)
}
console.log(getUniqueArr(5))

//  given a result of the previous method, generate an array of n numbers, then alternate them between positive and negative using a new function.
// i: [0,1,2,3,4]
// o: [-3,-1,0,2,4]
export function alternateNumbers(length: number): number[] {
  const numbers = getUniqueArr(length)
  
  return numbers.map((number, i) => (i + 1) % 2 === 0 ? number * -1 : number).sort((a, b) => a - b)
}
console.log(alternateNumbers(5))

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
const inferArrTypeAndRandomized = <T,>(a: T[]) => a.sort(() => 0.5 - Math.random())
console.log(inferArrTypeAndRandomized(randomValues))


// consider the following code:
const z = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const r = Math.ceil(Math.random() * 10);
//  once you notice the posible error on it, make it visible using type checking. DONT FIX IT, just make it visible using a typescript error.

z.push(1000)
/*
  In this example, we declare z as a constant with the const keyword, but then we modify its contents by calling the push method.
  This is allowed by JavaScript, but it goes against the intended use of const in TypeScript.
  We should use readonly
  const z: readonly number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  And for the case of:
  const r = Math.ceil(Math.random() * 10)
  we also need to convert into a readonly type for preventing type changes and mantaining the immutable type
*/


// EXTRA:
//  consider the following code:
const numbers = [5,2,3,4,1,6,7,8,9,10] as const

//  create a function that infer the parameter and return a TYPECHECK of the elements SORTED.
function inferReadOnlyArr<T>(arr: readonly T[]) {
  return [...arr].sort((a, b) => Number(a) - Number(b))
}
console.log(inferReadOnlyArr(numbers))