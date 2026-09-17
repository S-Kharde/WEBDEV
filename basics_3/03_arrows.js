// const user= {
//     username: "Sahil",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username}, Welcome to THis`)
//         console.log(this)
//     }
// }


// user.welcomeMessage()
// user.username = "Superman"
// user.welcomeMessage()
// console.log(this)


function chai1 ()
{
    console.log(this)
}

// chai()

// const chai = function(){
//     let username = 'Hitesh'
//     console.log(this.username)
// }

const chai = () => {
    let username = "histesh"
    console.log(this)
}
// chai1()
// chai()


// const addtwo = (num1, num2) => {
//     return num1+num2
// }
// console.log (addtwo(4,5))

// const addtwo = (num1, num2) => (num1 + num2)

//this is implicite return style here we dont have to return any thing 
// the code understands you are having only one statement which
// will be returned
//curly braces use kre to return is needed , parenthesis use then return not needed

// console.log (addtwo(4,5))

