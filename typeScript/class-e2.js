// defining a class
var Animal = /** @class */ (function () {
    function Animal(limbs, typeOfAnimal, diet) {
        var _this = this;
        this.limbs = limbs;
        this.typeOfAnimal = typeOfAnimal;
        this.diet = diet;
        this.getDietType = function () {
            return _this.diet;
        };
        this.limbs = limbs;
        this.typeOfAnimal = typeOfAnimal;
        this.diet = diet;
    } // end constructor
    return Animal;
}()); // end class 
var tiger = new Animal(4, "mammal", "carnivore");
var snake = new Animal(0, "reptile", "carnivore");
console.log(tiger.getDietType());
