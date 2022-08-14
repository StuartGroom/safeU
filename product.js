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
    document.getElementById('discreteButton').style.background = "rgb(255,240,245)";
    document.getElementById('hoverText').style.display = "none"; 
    document.getElementById('hiddenText').style.display = "inherit"; 
}

function hide(){
    /* Access image by id and change
    the display property to block*/
    document.getElementById('discreteButton').style.background = "rgba(224,255,251,255)";
    document.getElementById('hoverText').style.display = "inherit"; 
    document.getElementById('hiddenText').style.display = "none"; 
}

function show2() {
    document.getElementById('attachButton').style.background = "rgb(255,240,245)";
    document.getElementById('hoverText').style.display = "none"; 
    document.getElementById('hiddenText2').style.display = "inherit"; 
}

function hide2(){
    document.getElementById('attachButton').style.background = "rgba(224,255,251,255)";
    document.getElementById('hoverText').style.display = "inherit"; 
    document.getElementById('hiddenText2').style.display = "none"; 
}

function show3() {
    document.getElementById('batteryButton').style.background = "rgb(255,240,245)";
    document.getElementById('hoverText').style.display = "none"; 
    document.getElementById('hiddenText3').style.display = "inherit"; 
}

function hide3(){
    document.getElementById('batteryButton').style.background = "rgba(224,255,251,255)";
    document.getElementById('hoverText').style.display = "inherit"; 
    document.getElementById('hiddenText3').style.display = "none"; 
}

function show4() {
    document.getElementById('buildButton').style.background = "rgb(255,240,245)";
    document.getElementById('hoverText').style.display = "none"; 
    document.getElementById('hiddenText4').style.display = "inherit"; 
}

function hide4(){
    document.getElementById('buildButton').style.background = "rgba(224,255,251,255)";
    document.getElementById('hoverText').style.display = "inherit"; 
    document.getElementById('hiddenText4').style.display = "none"; 
}

function show5() {
    document.getElementById('useButton').style.background = "rgb(255,240,245)";
    document.getElementById('hoverText').style.display = "none"; 
    document.getElementById('hiddenText5').style.display = "inherit"; 
}

function hide5(){
    document.getElementById('useButton').style.background = "rgba(224,255,251,255)";
    document.getElementById('hoverText').style.display = "inherit"; 
    document.getElementById('hiddenText5').style.display = "none"; 
}

function show6() {
    document.getElementById('alarmButton').style.background = "rgb(255,240,245)";
    document.getElementById('hoverText').style.display = "none"; 
    document.getElementById('hiddenText6').style.display = "inherit"; 
}

function hide6(){
    document.getElementById('alarmButton').style.background = "rgba(224,255,251,255)";
    document.getElementById('hoverText').style.display = "inherit"; 
    document.getElementById('hiddenText6').style.display = "none"; 
}
