//Added a comment
var arr=[1,2,3,4]
var str=["vinay","kumar","Ranjan"]
console.log(arr[2])//The 2 in arr[2] is coerced into a string by the JavaScript engine through an implicit toString conversion.
console.log(arr['2'])
arr[6]=12 //When setting a property on a JavaScript array when the property is a valid array index and that 
//index is outside the current bounds of the array, the engine will update the array's length property accordingly:
console.log(arr[6])
console.log(arr.length)
console.log(arr[5])
console.log(arr[6])
console.log(arr[7])
console.log(arr)
console.log(Object.keys(arr))
console.log(str[1])
//find length of array
var len=arr.length
console.log(len)
//Array of object

var users=[
    {
        "email":"vkranjan@gmail.com",
        "password":"Vinay@123"
    },
    {
        "email":"Annu@123.com",
        "password":"Ram@123"
    }
]

var firstEmail= users[0].email
console.log(firstEmail)

//The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
var x=Array.from('foo') //Array from a String
console.log(x)
var x=Array.from('vinay')//only checking with same variable x as above declared
console.log(x)
//Array from a Set
const set = new Set(['foo', 'bar', 'baz', 'foo']);
console.log(Array.from(set));
//Array from a Map
const map = new Map([[1, 2], [2, 4], [4, 8]]);
console.log(Array.from(map));
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([['1', 'a'], ['2', 'b']]);
console.log(Array.from(mapper.values()));
// ['a', 'b'];

console.log(Array.from(mapper.keys()));
// ['1', '2'];
//Shortening an array
//The following example shortens the array numbers to a length of 3 if the current length is greater than 3.
var numbers = [1, 2, 3, 4, 5];

if (numbers.length > 3) {
  numbers.length = 3;
}

console.log(numbers); // [1, 2, 3]
console.log(numbers.length); // 3
//The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
var array1 = ['one', 'two', 'three'];
console.log('array1: ', array1);
// expected output: Array ['one', 'two', 'three']

var reversed = array1.reverse(); 
console.log('reversed: ', reversed);
// expected output: Array ['three', 'two', 'one']

/* Careful: reverse is destructive. It also changes
the original array */ 
console.log('array1: ', array1);
// expected output: Array ['three', 'two', 'one']
//The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
var array1 = [1, 2, 3];

var firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1
