// defining a class
class Animal {

    constructor(public limbs: number, public typeOfAnimal: string, public diet: string) {
        this.limbs = limbs;
        this.typeOfAnimal = typeOfAnimal;
        this.diet = diet;

    }// end constructor

    getDietType = () => {
        return this.diet
    }

}// end class 


let tiger = new Animal(4, "mammal", "carnivore")
let snake = new Animal(0, "reptile", "carnivore")
console.log(tiger.getDietType())