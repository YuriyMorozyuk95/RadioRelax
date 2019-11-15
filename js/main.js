// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
// Option 2 -
$(".navbar a").on("click", function (e) {
  if (this.hash != "") {
      e.preventDefault();

      const hash = this.hash;

      $("html, body").animate({
          scrollTop: $(hash).offset().top
      }, 800);
  }
});

function myMap() {

  var map = new google.maps.Map(document.getElementById('googleMap'), {
      center: new google.maps.LatLng(59.405650, 24.734890),
      zoom: 18
  });
  var radioRelax = new google.maps.LatLng(59.405650, 24.734890);

  var homeMarker = new google.maps.Marker({
      map: map,
      position: radioRelax,
      animation: google.maps.Animation.DROP,
      title: 'Radio Relax'
  });
}

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
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active-dot";
}

function playOrPause() {
  if (aud.paused) {
      aud.play();
      $('.play-pause').removeClass('fa-play');
      $('.play-pause').addClass('fa-pause');
  }
  else {
      aud.pause();
      $('.play-pause').removeClass('fa-pause');
      $('.play-pause').addClass('fa-play');
  }
}

function setupPlayer() {
}

function soundUpDown() {
  if (aud.muted) {
      aud.muted = false;
      $('.sound-up-down').removeClass('fa-volume-down');
      $('.sound-up-down').addClass('fa-volume-up');
  }
  else {
      aud.muted = true;
      $('.sound-up-down').removeClass('fa-volume-up');
      $('.sound-up-down').addClass('fa-volume-down');
  }
}


$('#RadioRelaxStream').on('click', function () {
  aud.src = 'http://37.0.31.66:8000/relax';
  $('#currentRadio').text("Relax Radio");
  playOrPause();
})

$('#RadioRelaxInternationalStream').on('click', function () {
  aud.src = 'http://37.0.31.66:8000/international';
  $('#currentRadio').text("Relax International");
  playOrPause();
})

$('#RadioRelaxIndoorStream').on('click', function () {
  aud.src = 'http://37.0.31.66:8000/instrumental';
  $('#currentRadio').text("Relax Indoor");
  playOrPause();
})

$('#RadioRelaxCafeStream').on('click', function () {
  aud.src = 'http://37.0.31.66:8000/cafe';
  $('#currentRadio').text("Relax Cafe");
  playOrPause();
})

$('#RadioRelaxVeneStream').on('click', function () {
  aud.src = 'http://37.0.31.66:8000/vene';
  $('#currentRadio').text("Русский Relax");
  playOrPause();
})

function SetVolume(val) {
  var player = document.getElementById('audioplayer');
  player.volume = val / 100;
}

var aud = $('audio')[0];
var slideIndex = 1;
showSlides(slideIndex);
$('.play-pause').on('click', playOrPause);
$('.sound-up-down').on('click', soundUpDown);
myMap();
$('.carousel').carousel('pause');

//function getSongInfo() {

//    var stream = $('#artist').attr("data-id");

//    var streamUrl = "/api/SongNameApi/" + stream;

//    $.ajax({
//        type: "GET",
//        url: streamUrl,
//        contentType: "application/json; charset=utf-8",
//        dataType: "json",
//        success: function (data) {

//            $('#artist').text(data.artist);
//            $('#title').text(data.title);

//            console.log(data);
//        }, //End of AJAX Success function  

//        failure: function (data) {
//            console.log(data.responseText); //alert(data.responseText);
//        }, //End of AJAX failure function  
//        error: function (data) {
//            console.log(data.responseText); //alert(data.responseText);
//        } //End of AJAX error function  

//    });
//};

//getSongInfo();
//setInterval(getSongInfo, 10000);