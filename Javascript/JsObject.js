var foodItem={
     "item type":"coffee",
     "itemName":"Esperso",
     "cost":40
}

var foodItem2={
     itemtype:"coffee", //key does not have double quoted, but it should be single word if e do not give quote
     itemName:"Esperso",
     cost:40
}
var costOfTheItem=foodItem.cost;
console.log(costOfTheItem);
//or
var costOfTheItem=foodItem["cost"];
console.log(costOfTheItem);

console.log(foodItem2.itemName)
