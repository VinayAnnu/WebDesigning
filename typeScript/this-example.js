var _this = this;
function hello(thing) {
    console.log(this);
    console.log(this + " says hello " + thing);
}
hello("world");
var helloArrow = function (thing) {
    console.log(_this);
    console.log(_this + " says hello " + thing);
};
helloArrow("Aditya");
// lexical binding 
var myName = {
    firstName: 'Aditya',
    lastName: 'Kumar',
    calculateFullName: function () {
        console.log(this);
        return this.firstName + ' ' + this.lastName;
    }
};
var myFullName = {
    firstName: 'Aditya',
    lastName: 'Kumar',
    calculateFullName: function () {
        return function () {
            console.log(this);
            return this.firstName + ' ' + this.lastName;
        };
    }
};
var someName = myName.calculateFullName();
console.log(someName);
var someOtherName = myFullName.calculateFullName();
console.log(someOtherName());
