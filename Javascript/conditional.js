var store=window.prompt('inut number')
if(store==undefined||store==null||store==''){
    alert('Invalid number')
}else if(store>=100 && store<=1000){
    alert('not eligible')
}
else{
    alert('eligible')
}
//ternary operator
var check=(store>100)?"try one more chance":"you are done"  //condition must be in bracket 
alert(check)