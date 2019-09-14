// defining a class
class AnimalGen {

    constructor(public limbs: number, public typeOfAnimal: string, public diet: string) {
        this.limbs = limbs;
        this.typeOfAnimal = typeOfAnimal;
        this.diet = diet;

    }// end constructor

    getDietType = () => {
        return this.diet
    }
    


}// end class 

class Dog extends AnimalGen{
    constructor(public limbs: number, public typeOfAnimal: string, public diet: string){
        super(limbs,typeOfAnimal,diet)
    }
    
    canBark=() =>{
        return true;
    }


}

let germanShephard= new Dog(4,"mammal","omnivore")
console.log(germanShephard.getDietType())
console.log(germanShephard.canBark())


