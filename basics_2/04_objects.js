// const tinderUser = new Object() // this is constructor method
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname:{
        userfullname : {
            firstname : "Sahil",
            lastname : "Kharde"
        }
    }
}

console.log(regularUser.fullname.userfullname.lastname);
// console.log(regularUser.fullname?.userfullname.lastname); 
// the question mark in syntax is needed for when we get file by api file
// we need it for conformation
 
const obj1 = { 1: "a" , 2 : "b"}
const obj2 = { 3: "c" , 4 : "d"}

// const obj3 = {obj1 , obj2}
// console.log(obj3)

// const obj3 = Object.assign({},obj1,obj2)
// here the {} is target and next items are sources
// and if it is not used then obj1 is used to store value and its
// address is used for storage
// console.log(obj3)

const obj3 = {...obj1, ...obj2}
console.log(obj3)




//when we get values from a database it is in format of a aaray

const users = [
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    }
]

//to get data we can use loop or
// users[1].email

console. log(tinderUser);

console. log(Object.keys(tinderUser) ) ;
console. log(Object. values(tinderUser) ) ;
console. log(Object. entries(tinderUser) ) ;
console.log(tinderUser.hasOwnProperty('isLoggedIn'))