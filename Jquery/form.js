$(document).ready(() => {

    $("#email-input").trigger("focus")

    //handle the focus 

    $("input").focus(function(){
        console.log(this)
        $(this).addClass("colored-border")

    });//end focus

     $("input").focusout(function(){

        $(this).removeClass("colored-border")

    });//end focus

    $("form").submit((e)=>{

        e.preventDefault();

        alert("user logged in successfully")

    })






}) // end doc ready