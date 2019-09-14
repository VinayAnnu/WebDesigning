$(document).ready(() => {

    // handle the click of the button

    $("#performSomeAction").click(() => {

        $(".paragraph").addClass('big-font');

    }) // end button click	

    //handle the double click of the <a> tag 

    $("#newElement").dblclick(() => {

        $(".paragraph").css("color", "red");


    }) // end button click	


    $("#some-image").hover(() => {

        $(".my-image").hide("100000");


    }) // end button click	







}) // end doc ready