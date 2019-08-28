//The sort() method sorts the elements of an array in place and returns the sorted array. The 
//default sort order is built upon converting the elements into strings, then comparing their 
//sequences of UTF-16 code units values.
var months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

var array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]
//To compare numbers instead of strings, the compare function can simply subtract b from a. 
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

// [1, 2, 3, 4, 5]
//Objects can be sorted, given the value of one of their properties.
var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
  ];
  
  // sort by value
  items.sort(function (a, b) {
    return a.value - b.value;
  });
  console.log(items)
  // sort by name
  items.sort(function(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });
  console.log(items)
  //The toString() method returns a string representing the specified array and its elements.
  var array1 = [1, 2, 'a', '1a'];

console.log(array1.toString());
// expected output: "1,2,a,1a"
//The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array. The original array will not be modified.
var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]
//The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];

console.log(array1.concat(array2));
// expected output: Array ["a", "b", "c", "d", "e", "f"]
//The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
var array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

var pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false
//The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1

//The join() method creates and returns a new string by concatenating all of the elements in 
//an array (or an array-like object), separated by commas or a specified separator string. If the 
//array has only one item, then that item will be returned without using the separator.
var elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

//The lastIndexOf() method returns the last index at which a given element can be found in 
//the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
var numbers = [2, 5, 9, 2];
console.log(numbers.lastIndexOf(2))     // 3
console.log(numbers.lastIndexOf(7)) 
console.log(numbers.lastIndexOf(2,3)) 
console.log(numbers.lastIndexOf(2,2)) 
console.log(numbers.lastIndexOf(2,-2)) 
console.log(numbers.lastIndexOf(2,-1)) 