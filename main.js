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

// var mapProp= {
//   center:new google.maps.LatLng(51.508742,-0.120850),
//   zoom:5,
// };
// var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
