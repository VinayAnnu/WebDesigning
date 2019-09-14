var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// defining a class
var AnimalGen = /** @class */ (function () {
    function AnimalGen(limbs, typeOfAnimal, diet) {
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
    return AnimalGen;
}()); // end class 
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(limbs, typeOfAnimal, diet) {
        var _this = _super.call(this, limbs, typeOfAnimal, diet) || this;
        _this.limbs = limbs;
        _this.typeOfAnimal = typeOfAnimal;
        _this.diet = diet;
        _this.canBark = function () {
            return true;
        };
        return _this;
    }
    return Dog;
}(AnimalGen));
var germanShephard = new Dog(4, "mammal", "omnivore");
console.log(germanShephard.getDietType());
console.log(germanShephard.canBark());
