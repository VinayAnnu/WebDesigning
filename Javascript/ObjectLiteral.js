//Exampe-1
let firstName="vinay"
let lastName="kumar"
let nameOfPerson1={firstName:firstName,lastName:lastName}//this is normal as we earlier did
console.log(nameOfPerson1)
let nameOfPerson2={firstName,lastName}//Here we applied Object Literal
console.log(nameOfPerson2)
//Example-2
let actualPrice=9000
let discount=10
let priceOfProduct={
    actualPrice,
    discount,
    calculateFinalPrice() {
        return actualPrice-((actualPrice*discount)/100)
    }
}
console.log(priceOfProduct)
console.log(priceOfProduct.calculateFinalPrice())
//Example-3
let firstName2="Annu"
let lastName2="Raj"
let nameOfPerson3={ firstName2,
                    lastName2,
                    calculateFullName(){
                        return firstName2+" "+lastName2
                    }
                }//Here we applied Object Litera
console.log(nameOfPerson3.calculateFullName())
//Example-4
let keyIamStoring="some key"
let valueIamStoring="some value"
let finalObject={
    //keyIamStoring:valueIamStoring
    [keyIamStoring]:valueIamStoring
}
console.log(finalObject)