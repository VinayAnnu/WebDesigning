//for loop
//while loop
//for/in loop
var vegetables=["carrot","potatao","tomato","brocolli"]

for(i=0;i<vegetables.length;i++){
    console.log(vegetables[i])
}

var j=5
while(j>0 && j<=5){
    console.log(j)
    if(j==2)
       break
    j--
}

//for/in loop is a special loop
//it meant to iterate over objects or arrays
//it mostly used when we do not know the name of key
var foodItem={
    "item type":"coffee",
    "itemName":"Esperso",
    "cost":40
}
for(x in foodItem){
    console.log(x)  //it print keys only
}
for(x in foodItem){
    console.log(foodItem.x) //do not use dot
}
for(x in foodItem){
    console.log(foodItem[x])
}
//array of object
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

for(x in users){
    console.log(x) //it print index
    console.log(users[x])
    console.log(users[x].email)
    console.log(users[x]['email'])
}

