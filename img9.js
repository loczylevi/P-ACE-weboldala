var slideIndex = 1;
showSlides9(slideIndex);
function currentSlide9(n){
    showSlides9(slideIndex = n);
}
function plusSlides9(n){
    showSlides9(slideIndex += n);
}
function showSlides9(n){
    var i;
    var slides = document.getElementsByClassName("mySlides9");
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