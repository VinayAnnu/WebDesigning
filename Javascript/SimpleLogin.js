var user=[
    {
        "email":"vinay@gmail.com",
        "password":"12345",
        "mobileNo":999999999,
        "isVerified":true
    },
    {
        "email":"kumar@gmail.com",
        "password":"23456",
        "mobileNo":999999998,
        "isVerified":false
    },
    {
        "email":"ranjan@gmail.com",
        "password":"34567",
        "mobileNo":999999997,
        "isVerified":true
    }
]

var checkLogin=function(email,password,allUsers){
    var isUserFound=false
    var isPasswordCorrect=false
    for(x in allUsers){
        if(allUsers[x]['email']==email){
            if(allUsers[x]['password']==password){
                isUserFound=true
                isPasswordCorrect=true
                break
            }
            else{
                isUserFound=true
                isPasswordCorrect=false
                break
            }
        }
        else{
            isUserFound=false
            //isPasswordCorrect=false
        }
    }
    if(isUserFound==false){
        console.log("Enter correct email")
    }
    else if(isUserFound==true&&isPasswordCorrect==false){
        console.log("Enter correct password")
    }
    else{
        console.log("Successfully login")
    }
}

var email=window.prompt("enter email Id")//i think window.prompt() and only prompt() both are same
var password=prompt("enter password")
checkLogin(email,password,user)
