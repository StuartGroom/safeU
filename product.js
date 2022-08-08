$(document).ready(function() {

    $('.colourChoose input').on('click', function() {
        var productColour = $(this).attr('data-image');
        
        $('.active').removeClass('active');
        $('.leftColumn img[data-image = ' + productColour + ']').addClass('active');
        $(this).addClass('active');
    });

});


function show() {
 
    /* Access image by id and change
    the display property to block*/
    // document.getElementById('discrete').style.display = "block";

    document.getElementById('discreteButton').style.background = "rgb(255,240,245)";
    // document.getElementById('discreteButton').style.border = "black";
    document.getElementById('hoverText').style.visibility = "hidden"; 

    document.getElementById('hiddenText').style.visibility = "inherit"; 
}

function hide(){
    /* Access image by id and change
    the display property to block*/
    document.getElementById('discrete').style.display = "none";

    document.getElementById('discreteButton').style.background = "rgba(224,255,251,255)";
    document.getElementById('hoverText').style.visibility = "inherit"; 

    document.getElementById('hiddenText').style.visibility = "hidden"; 
}




