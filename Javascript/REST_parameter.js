let peopleToInvite=[]

let pushToPartyList=(check,...people)=>{
    console.log(check)
    console.log(people)//automatically REST parameter converted to array
    let newPeopleArray=people
    peopleToInvite=peopleToInvite.concat(newPeopleArray)
    console.log(peopleToInvite)
}
pushToPartyList("anu","rohit")
pushToPartyList("vinay","ram","sid")