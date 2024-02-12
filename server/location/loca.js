let lat, long;
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function (position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;
  });
} else {
}
