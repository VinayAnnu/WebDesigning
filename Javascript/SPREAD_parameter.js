function sum(x,y,z){
    console.log(x)
    console.log(y)
    console.log(z)
    return x+y+z
}

const arr=[2,6,4]
console.log(sum(...arr))
//console.log(sum(arr[0],arr[1],arr[2]))

//concatenate two array without using concat function
var a=[67,98]
var b=[23,11]
var c=[...a,...b]
console.log(c)