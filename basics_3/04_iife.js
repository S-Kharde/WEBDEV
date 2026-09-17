//Imediately Invoked Function Expression(IIFE)
// toh fir yaha par  syatax jara aise hi ki
// ( )( )
// double parenthesis 
// means 1st mai we write function and in second is so that we
// execute the function imediately

(function chai(){
    console.log(`DB CONNECTED`);
})();

// #### IMPORTANT IIFE ke end pe ";" is very important
// the compiler should know the scopes of the block

((name) => {
    console.log(`DB CONNECTED`);
})("depak");

//we give the input in the immediate next parenthesis to the fucntion






