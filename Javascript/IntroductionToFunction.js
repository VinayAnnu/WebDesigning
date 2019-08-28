function multiply(x,y){ //or, var multiply=function(x,y){}// both are same
    return x*y
}
//var store=multiply(5,6,2)// not showing error if passing more than specified parameter in function
//var store=multiply(5)//print NaN
var store=multiply(5,8)
console.log(store)
//another way
var multiply2=function(x,y){
    return x*y
}
var m=multiply2(7,90)
console.log(m)