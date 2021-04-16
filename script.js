mapboxgl.accessToken = 'pk.eyJ1Ijoicm9kLXJpdmEiLCJhIjoiY2tsdHFvczFkMXVzNTJvbGJxZGhvMzQ3NiJ9.iz9ksQTrP5Vt0UglezfxJg';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

function successLocation(position) {
    console.log(position)
    setUpMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {

}

function setUpMap(center) {
    const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 18
    });
    
    map.addControl(new mapboxgl.NavigationControl());
}

