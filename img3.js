var slideIndex = 1;
showSlides3(slideIndex);
function currentSlide3(n){
    showSlides3(slideIndex = n);
}
function plusSlides3(n){
    showSlides3(slideIndex += n);
}
function showSlides3(n){
    var i;
    var slides = document.getElementsByClassName("mySlides3");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");

    if(n > slides.length) {slideIndex = 1}
    if(n < 1) {slideIndex = slides.length;}
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className =  dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    captionText.innerHTML = dots[slideIndex-1].alt;
    dots[slideIndex-1].className += " active";
}