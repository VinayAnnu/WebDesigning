let  multiply = function(x, y) {
  return x * y
}

let multiplyTs = function(x:number,y:number):number{
  return x * y
}

let divide =(x, y)=>{
  return x/y;
}

let divideTs = (x:number,y:number):number=>{
  return x/y;
}

// only function definition
let divideTs2 :(x:number,y:number)=> number;

divideTs2 = (x:number,y:number)=>{
  return x/y
}

//optional parameter 
let multiplyOrSquare = (x:number,y?:number) =>{
  if(y){
    return x*y;
  }
  else{
    return x*x;
  }
}

// rest parameter 
let allPeopleIWantToInvite :string[] = []
let pushToPartyList = (...people:string[]) =>{
	console.log(people)
	let newPeopleArray = people
	allPeopleIWantToInvite= allPeopleIWantToInvite.concat(newPeopleArray)	
	console.log(allPeopleIWantToInvite)
	return allPeopleIWantToInvite;
}


pushToPartyList("Aditya","sid","rohit")

pushToPartyList("Shikha","Kavita","Aarohi")



let numberOfFriends = (friends:any)=>{

  if(typeof friends == 'string'){
      return 'you have 1 friend'
  }
  else{
      let message = `you have ${friends.length} friends`
      return message
  }


}


console.log(numberOfFriends("Aditya"));
console.log(numberOfFriends(["Aditya","Ajay"]))
