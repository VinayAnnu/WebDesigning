var par=`i am good \ngo to hail buddy.
boy.how about you.`
console.log(par)

var a="this is simple."
var b="this is another line"
var c="go ahead. new line"
var combine=`${a} and ${b}\n${c}`
console.log(combine)
//evaluating an expression inside the curly braces
let generateEmail=function(firstName,lastName,message){

    // it will print as it is.here we have used expression in curly braces.
    //in curly braces, we can do integer manipulation such as multiplication,additon etc
    var email=`Hi ${firstName+" "+lastName}\n 
    This is the message we have for you\n 
    ${message}\n 
    copyright edwisor.com`
    return email
}
console.log(generateEmail("vinay","kumar","Welcome to edwisor"))

//Evaluating expression in curly braces
let multiply=(x,y)=>{
    var mul=`${x*y}`
    return mul
}
console.log(multiply(5,9))

//Escaping or ignoring the dollar and curl braces by applying backslash
var text=`this is some code with curly braces.
\${Here is text}`
console.log(text)
