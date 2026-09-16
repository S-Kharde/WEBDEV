
let myarr = [1,2,3,4,5]
//we can put any data type in same array , mixed dataypes
//arrays are resizable
//copy operation in arrays in js is shallow copy

const myHeros = ["Ironman","Thor","Spiderman"]

const myarr2 = new Array(1,2,3,4,5)

console.log(myarr[1])
console.log(myarr2[4])

myarr.push(6)
console.log(myarr)
myarr.pop()
console.log(myarr)
myarr.unshift(0) // add elemnt to start of array , basically shift all elemnts
console.log(myarr)
myarr.shift() // removes 1st element of array i.e. 0 idx
console.log(myarr)

const newarr = myarr.join() // this converts a array to string
console.log(newarr)

const myn1 = myarr.slice(1,3)
console.log(myn1);
console.log("B ", myarr);

const myn2 = myarr.splice(1, 3)
console.log(myn2);
console. log("C ", myarr);

 