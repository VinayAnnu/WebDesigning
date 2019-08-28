var grade= window.prompt('Enter your grade')
var result
switch(grade){
    case 'A':
        result='very good'
        break
    case 'B':
        result='good'
        break
    case 'C':
        result='require improvement'
        break
    case 'D':
        result='Fail'
        break
    default:
        result='This is not a valid input'
}

alert(result)