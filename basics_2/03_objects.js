//singleton
// jab bhi object constructor ke through banega toh it will be singleton
// if it is made like an instance then not a singleton
// singleton is when an object has only one instance throughout entire life cycle of application

const mySym = Symbol("key1")
const JsUser= {
    name : "Sahil",
    age : 21,
    [mySym]: "mykey1",
    location : "Pune",
    email : "super@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]

}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) // used to lock the values , cannot make further changes
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
 

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());