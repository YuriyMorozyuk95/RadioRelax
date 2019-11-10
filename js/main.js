// Option 2 -
$(".navbar a").on("click", function(e) {
    if(this.hash != "") {
        e.preventDefault();

        const hash = this.hash;

        $("html, body").animate({
            scrollTop: $(hash).offset().top
        }, 800);
    }
});

function myMap() {

    let map = new google.maps.Map(document.getElementById('googleMap'), {
        center: new google.maps.LatLng(59.40941370085305, 24.738637332411827),
        zoom: 18
      });

    let radioRelax = new google.maps.LatLng(59.40941370085305, 24.738637332411827);

    let homeMarker = new google.maps.Marker({
        map: map,
        position: radioRelax,
        animation: google.maps.Animation.DROP,
        title: 'Radio Relax'
      });
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}





var slideProgramIndex = 1;
showProgramSlides(slideProgramIndex);

function plusProgramSlides(n) {
  showProgramSlides(slideProgramIndex += n);
}

function showProgramSlides(n) {
  var i;
  var slides = document.getElementsByClassName("programSlides");
  if (n > slides.length) {slideProgramIndex = 1}    
  if (n < 1) {slideProgramIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideProgramIndex-1].style.display = "block";
}