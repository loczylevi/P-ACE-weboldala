var slideIndex = 1;
showSlides6(slideIndex);
function currentSlide6(n){
    showSlides6(slideIndex = n);
}
function plusSlides6(n){
    showSlides6(slideIndex += n);
}
function showSlides6(n){
    var i;
    var slides = document.getElementsByClassName("mySlides6");
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