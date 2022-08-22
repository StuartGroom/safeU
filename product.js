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

function show() {
    /* Access image by id and change
    the display property to block*/
    document.getElementById('discreteButton').style.background = "pink";
    document.getElementById('hoverText').style.display = "none"; 
    document.getElementById('hiddenText').style.display = "inherit"; 

    document.getElementById('discreteButton').style.borderWidth = "1px";
    document.getElementById('infoHolder').style.background = "pink";

}

function hide(){
    /* Access image by id and change
    the display property to block*/
    document.getElementById('discreteButton').style.background = "white";
    document.getElementById('hoverText').style.display = "inherit"; 
    document.getElementById('hiddenText').style.display = "none"; 
}

function show2() {  
    document.getElementById('attachButton').style.background = "pink";
    document.getElementById('hoverText').style.display = "none"; 
    document.getElementById('hiddenText2').style.display = "inherit"; 

    document.getElementById('infoHolder').style.background = "pink";
}

function hide2(){
    document.getElementById('attachButton').style.background = "white";
    document.getElementById('hoverText').style.display = "inherit"; 
    document.getElementById('hiddenText2').style.display = "none"; 
}

function show3() {
    document.getElementById('batteryButton').style.background = "pink";
    document.getElementById('hoverText').style.display = "none"; 
    document.getElementById('hiddenText3').style.display = "inherit"; 
}

function hide3(){
    document.getElementById('batteryButton').style.background = "white";
    document.getElementById('hoverText').style.display = "inherit"; 
    document.getElementById('hiddenText3').style.display = "none"; 
}

function show4() {
    document.getElementById('buildButton').style.background = "pink";
    document.getElementById('hoverText').style.display = "none"; 
    document.getElementById('hiddenText4').style.display = "inherit"; 
}

function hide4(){
    document.getElementById('buildButton').style.background = "white";
    document.getElementById('hoverText').style.display = "inherit"; 
    document.getElementById('hiddenText4').style.display = "none"; 
}

function show5() {
    document.getElementById('useButton').style.background = "pink";
    document.getElementById('hoverText').style.display = "none"; 
    document.getElementById('hiddenText5').style.display = "inherit"; 
}

function hide5(){
    document.getElementById('useButton').style.background = "white";
    document.getElementById('hoverText').style.display = "inherit"; 
    document.getElementById('hiddenText5').style.display = "none"; 
}

function show6() {
    document.getElementById('alarmButton').style.background = "pink";
    document.getElementById('hoverText').style.display = "none"; 
    document.getElementById('hiddenText6').style.display = "inherit"; 

    /*handles the card transformation*/
    document.getElementById("cardCircle").style.backgroundColor = "blue";
    document.getElementById("cardProductImage").style.marginLeft = "200px";
    document.getElementById("cardContent").style.left = "0";
    document.getElementById("cardContent").style.visibility = "visible";
    document.getElementById("cardContent").style.opacity = "1";

    document.getElementById("alarmText").style.visibility = "visible";
    document.getElementById("discreteText").style.display = "none";
    document.getElementById("alarmTitle").style.visibility = "visible";
    document.getElementById("discreteTitle").style.display = "none";
    /*need to optimise this so it doesnt need to set all to being not visible- check style?*/ 
}

function hide6(){
    document.getElementById('alarmButton').style.background = "white";
    document.getElementById('hoverText').style.display = "inherit"; 
    document.getElementById('hiddenText6').style.display = "none"; 

    /*handles the card transformation*/
    document.getElementById("cardCircle").style.backgroundColor = "pink";
    document.getElementById("cardProductImage").style.marginLeft = "0px";
    document.getElementById("cardContent").style.left = "0";
    document.getElementById("cardContent").style.visibility = "hidden";
    document.getElementById("cardContent").style.opacity = "0";
}


$('.alarmButton').mouseover(hoverOne);
var hoverOne = function(){
    document.getElementById('.alarmText').style.visibility = "visible";
    document.getElementById('cardCircle').style.backgroundColor = "blue";
    window.alert("sometext");
}
$('.discreteButton').mouseover(hoverOne);
var hoverOne = function(){
    document.getElementById('.discreteText').style.visibility = "visible";
}

  