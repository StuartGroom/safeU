$(document).ready(function() {

    $('.colourChoose input').on('click', function() {
        var productColour = $(this).attr('data-image');
        
        $('.active').removeClass('active');
        $('.leftColumn img[data-image = ' + productColour + ']').addClass('active');
        $(this).addClass('active');
    });

});

function hideAll(){
    document.getElementById('hiddenText').style.display = "none";
    document.getElementById('hiddenText2').style.display = "none";
    document.getElementById('hiddenText3').style.display = "none";
    document.getElementById('hiddenText4').style.display = "none";
    document.getElementById('hiddenText5').style.display = "none";
    document.getElementById('hiddenText6').style.display = "none";
}

function show() {; 
    document.getElementById('discreteButton').style.background = "pink";
    /*handles the card transformation*/
    document.getElementById("cardCircle").style.backgroundColor = "blue";
    document.getElementById("cardProductImage").style.marginLeft = "200px";
    document.getElementById("cardContent").style.left = "0";
    document.getElementById("cardContent").style.visibility = "visible";
    document.getElementById("cardContent").style.opacity = "1";
    document.querySelector(".content .discreteInfo").style.visibility = "visible";
    document.querySelector(".content .discreteInfo").style.display = "inline-block";
    document.getElementById("cardCircle").style.backgroundColor = "pink";
    document.getElementById("cardCircle").style.transition= "0.5s ease";
    document.getElementById("cardCircle").style.clipPath("circle(400px at center)")

}

function hide(){
    document.getElementById('discreteButton').style.background = "white";
    /*handles the card transformation*/
    document.getElementById("cardCircle").style.backgroundColor = "#ECF7F8";
    document.getElementById("cardProductImage").style.marginLeft = "0px";
    document.getElementById("cardContent").style.left = "0";
    document.getElementById("cardContent").style.visibility = "hidden";
    document.getElementById("cardContent").style.opacity = "0";
    document.querySelector(".content .discreteInfo").style.visibility = "hidden";
    document.querySelector(".content .discreteInfo").style.display = "none";
}

function show2() {  
    document.getElementById('attachButton').style.background = "pink";

    /*handles the card transformation*/
    document.getElementById("cardCircle").style.backgroundColor = "blue";
    document.getElementById("cardProductImage").style.marginLeft = "200px";
    document.getElementById("cardContent").style.left = "0";
    document.getElementById("cardContent").style.visibility = "visible";
    document.getElementById("cardContent").style.opacity = "1";
    document.querySelector(".content .attachInfo").style.visibility = "visible";
    document.querySelector(".content .attachInfo").style.display = "inline-block";
    document.getElementById("cardCircle").style.backgroundColor = "pink";
    document.getElementById("cardCircle").style.transition= "0.5s ease";
    document.getElementById("cardCircle").style.clipPath("circle(400px at center)")
}


function hide2(){
    document.getElementById('attachButton').style.background = "white";
    /*handles the card transformation*/
    document.getElementById("cardCircle").style.backgroundColor = "#ECF7F8";
    document.getElementById("cardProductImage").style.marginLeft = "0px";
    document.getElementById("cardContent").style.left = "0";
    document.getElementById("cardContent").style.visibility = "hidden";
    document.getElementById("cardContent").style.opacity = "0";
    document.querySelector(".content .attachInfo").style.visibility = "hidden";
    document.querySelector(".content .attachInfo").style.display = "none";
}

function show3() {
    document.getElementById('batteryButton').style.background = "pink";
    /*handles the card transformation*/
    document.getElementById("cardCircle").style.backgroundColor = "blue";
    document.getElementById("cardProductImage").style.marginLeft = "200px";
    document.getElementById("cardContent").style.left = "0";
    document.getElementById("cardContent").style.visibility = "visible";
    document.getElementById("cardContent").style.opacity = "1";
    document.querySelector(".content .batteryInfo").style.visibility = "visible";
    document.querySelector(".content .batteryInfo").style.display = "inline-block";
    document.getElementById("cardCircle").style.backgroundColor = "pink";
    document.getElementById("cardCircle").style.transition= "0.5s ease";
    document.getElementById("cardCircle").style.clipPath("circle(400px at center)")


}

function hide3(){
    document.getElementById('batteryButton').style.background = "white";
    /*handles the card transformation*/
    document.getElementById("cardCircle").style.backgroundColor = "#ECF7F8";
    document.getElementById("cardProductImage").style.marginLeft = "0px";
    document.getElementById("cardContent").style.left = "0";
    document.getElementById("cardContent").style.visibility = "hidden";
    document.getElementById("cardContent").style.opacity = "0";
    document.querySelector(".content .batteryInfo").style.visibility = "hidden";
    document.querySelector(".content .batteryInfo").style.display = "none";

}

function show4() {
    document.getElementById('buildButton').style.background = "pink";
    /*handles the card transformation*/
    document.getElementById("cardCircle").style.backgroundColor = "blue";
    document.getElementById("cardProductImage").style.marginLeft = "200px";
    document.getElementById("cardContent").style.left = "0";
    document.getElementById("cardContent").style.visibility = "visible";
    document.getElementById("cardContent").style.opacity = "1";
    document.querySelector(".content .buildInfo").style.visibility = "visible";
    document.querySelector(".content .buildInfo").style.display = "inline-block";
    document.getElementById("cardCircle").style.backgroundColor = "pink";
    document.getElementById("cardCircle").style.transition= "0.5s ease";
    document.getElementById("cardCircle").style.clipPath("circle(400px at center)")
}

function hide4(){
    document.getElementById('buildButton').style.background = "white";
    /*handles the card transformation*/
    document.getElementById("cardCircle").style.backgroundColor = "#ECF7F8";
    document.getElementById("cardProductImage").style.marginLeft = "0px";
    document.getElementById("cardContent").style.left = "0";
    document.getElementById("cardContent").style.visibility = "hidden";
    document.getElementById("cardContent").style.opacity = "0";
    document.querySelector(".content .buildInfo").style.visibility = "hidden";
    document.querySelector(".content .buildInfo").style.display = "none";

}

function show5() {
    document.getElementById('useButton').style.background = "pink";
    /*handles the card transformation*/
    document.getElementById("cardCircle").style.backgroundColor = "blue";
    document.getElementById("cardProductImage").style.marginLeft = "200px";
    document.getElementById("cardContent").style.left = "0";
    document.getElementById("cardContent").style.visibility = "visible";
    document.getElementById("cardContent").style.opacity = "1";
    document.querySelector(".content .useInfo").style.visibility = "visible";
    document.querySelector(".content .useInfo").style.display = "inline-block";
    document.getElementById("cardCircle").style.backgroundColor = "pink";
    document.getElementById("cardCircle").style.transition= "0.5s ease";
    document.getElementById("cardCircle").style.clipPath("circle(400px at center)")
}

function hide5(){
    document.getElementById('useButton').style.background = "white";
    /*handles the card transformation*/
    document.getElementById("cardCircle").style.backgroundColor = "#ECF7F8";
    document.getElementById("cardProductImage").style.marginLeft = "0px";
    document.getElementById("cardContent").style.left = "0";
    document.getElementById("cardContent").style.visibility = "hidden";
    document.getElementById("cardContent").style.opacity = "0";
    document.querySelector(".content .useInfo").style.visibility = "hidden";
    document.querySelector(".content .useInfo").style.display = "none";

}

function show6() {
    document.getElementById('alarmButton').style.background = "pink";
    /*handles the card transformation*/
    document.getElementById("cardCircle").style.backgroundColor = "blue";
    document.getElementById("cardProductImage").style.marginLeft = "200px";
    document.getElementById("cardContent").style.left = "0";
    document.getElementById("cardContent").style.visibility = "visible";
    document.getElementById("cardContent").style.opacity = "1";
    document.querySelector(".content .alarmInfo").style.visibility = "visible";
    document.querySelector(".content .alarmInfo").style.display = "inline-block";
    document.getElementById("cardCircle").style.backgroundColor = "pink";
    document.getElementById("cardCircle").style.transition= "0.5s ease";
    document.getElementById("cardCircle").style.clipPath("circle(400px at center)")

}

function hide6(){
    document.getElementById('alarmButton').style.background = "white";
    /*handles the card transformation*/
    document.getElementById("cardCircle").style.backgroundColor = "#ECF7F8";
    document.getElementById("cardProductImage").style.marginLeft = "0px";
    document.getElementById("cardContent").style.left = "0";
    document.getElementById("cardContent").style.visibility = "hidden";
    document.getElementById("cardContent").style.opacity = "0";
    document.querySelector(".content .alarmInfo").style.visibility = "hidden";
    document.querySelector(".content .alarmInfo").style.display = "none";
}



  