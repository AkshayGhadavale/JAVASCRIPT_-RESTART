// //slice
 /*The slice()  method is used to return a new array containing a portion of that array. It does not modify 
 the original array rather returns a new array. Here is the syntax of the method:*/

let myarr =[1,2,3,4]
console.log("A ", myarr)
const myn1 =myarr.slice(1,3);
console.log(myn1)
console.log("B ",myarr)


// splice
/*The splice() method is used to remove or replace existing elements in the array. 
This method modifies the original array and returns the removed elements as a new array. Here is the syntax for it:*/

const myn2 =myarr.splice(1,3);
console.log("c ", myarr)
console.log(myn2)

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
g