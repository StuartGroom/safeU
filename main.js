
var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}

//product 
document.querySelectorAll( '.productCircle' ).forEach( ( productCircle )=>{
    let circles = productCircle.querySelectorAll( '.circle' )
    let angle = 360-90, dangle = 360 / circles.length
    for( let i = 0; i < circles.length; ++i ){
      let circle = circles[i]
      angle += dangle
      circle.style.transform = `rotate(${angle}deg) translate(${productCircle.clientWidth/1.1}px) rotate(-${angle}deg)`
    }
})

document.getElementsByClassName('circle')[0]
        .addEventListener('click', function (event) {
            window.alert("0");
});
document.getElementsByClassName('circle')[1]
        .addEventListener('click', function (event) {
            window.alert("1");
});
document.getElementsByClassName('circle')[2]
        .addEventListener('click', function (event) {
            window.alert("2");
});
document.getElementsByClassName('circle')[3]
        .addEventListener('click', function (event) {
            window.alert("3");
});
document.getElementsByClassName('circle')[4]
        .addEventListener('click', function (event) {
            window.alert("4");
});
document.getElementsByClassName('circle')[5]
        .addEventListener('click', function (event) {
            window.alert("5");
});