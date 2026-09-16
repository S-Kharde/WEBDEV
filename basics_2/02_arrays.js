const marvel_heros = ["Thor" , "Ironman" , "Spiderman"]
const dc_heros = ["Superman" , "Batman" , "GreenLantern"]

// marvel_heros.push(dc_heros)

// console. log(marvel_heros);
// console.log(marvel_heros[3])

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(marvel_heros);

const all_new_heros = [...marvel_heros , ...dc_heros]
console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array. flat(infinity)//here we have to give the depth

console. log(Array.isArray("Hitesh"))
console. log(Array.from("Hitesh"))
console. log(Array. from({name: "hitesh"})) // good for interview
//we need to specify if we want array of ketys or values
let val1 = 100
let val2 = 200
let val3 = 300
console.log(Array.of(val1,val2,val3))