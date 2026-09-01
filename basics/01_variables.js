console.clear()
const accountId = 142313
let accountEmail = "khardesahil7@gmail.com"
var accountPaassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 1  // This is not possible

accountEmail = "newmail@gamil.com"
accountPaassword = "31313131"
accountCity = "Dubai"

console.log(accountId);

console.table([accountEmail,accountId,accountPaassword,accountCity,accountState])

/*
    prefer not to use var
    because of issues in block scope and fucntional scope 
*/