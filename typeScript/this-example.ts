function hello(thing) {
    console.log(this)
    console.log(this + " says hello " + thing);

}

hello("world")

let helloArrow = (thing)=>{
    console.log(this)
    console.log(this + " says hello " + thing);

}

helloArrow("Aditya")

// lexical binding 
let myName = {
    firstName: 'Aditya',
    lastName: 'Kumar',
    calculateFullName(){
        console.log(this)
        return this.firstName+' '+this.lastName;
    }
}

let myFullName = {
    firstName: 'Aditya',
    lastName: 'Kumar',
    calculateFullName(){
        return function(){
            console.log(this)
            return this.firstName+' '+this.lastName;

        }
    }
}

let someName = myName.calculateFullName()
console.log(someName)
let someOtherName = myFullName.calculateFullName()
console.log(someOtherName())




