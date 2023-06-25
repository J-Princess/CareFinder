<template>
    <NavBar />
    <div class="container-fluid mt-3">
        <div class="container my-4" style=" width: 90%; margin: auto;">
            <input type="text" v-model="searchQuery" id="search-box" placeholder="Enter location"
                style="background-color: black; border-radius: 10px; width: 80%;" name="address">
            <button @click="search"
                style="padding: 13px 40px; margin-left: 10px; border-radius: 10px; border: none;">Search</button>
            <button class="custom-map-control-button" @click="panToCurrentLocation">Go to my Location</button>
        </div>

        <div id="map"></div>
        <div class="container-fluid mt-5 " style="margin: auto;">
            <h2 class="text-light">Nearby Hospitals:</h2>
            <ul>
                <div class=" ml-5 row ">
                    <li v-for="hospital in hospitals" :key="hospital.place_id" class="card col-sm-3 m-4 border-0 mx-4"
                        style="width: 600px; height: 400px;">
                        <div class="card-body pt-5 px-2 ">
                            <img :src="getPhotoUrl(hospital)" alt="Hospital Photo"
                                style="border-radius:10px width: 18rem; height: 10rem; " />
                            <h5 class="card-title mt-2">{{ hospital.name }}</h5>
                            <p class="card-text"> {{ hospital.vicinity }} </p>
                            <p>
                                <RouterLink to="/sign">See More</RouterLink>
                            </p>
                        </div>
                    </li>
                </div>
            </ul>
        </div>
    </div>
    <Footer></Footer>
</template>



<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import { ref, onMounted } from 'vue';

let map: google.maps.Map;
let infoWindow: google.maps.InfoWindow;
let searchBox: google.maps.places.SearchBox;
const markers: google.maps.Marker[] = [];
const searchQuery = ref('');
const hospitals = ref<google.maps.places.PlaceResult[]>([]);

const initMap = (): void => {
    map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
        center: { lat: 9.0778, lng: 8.6775 },
        zoom: 6,
    });

    searchBox = new google.maps.places.SearchBox(document.getElementById('search-box') as HTMLInputElement);
    const locationButton = document.createElement('button');
    locationButton.textContent = 'Pan to Current Location';
    locationButton.classList.add('custom-map-control-button');
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);

    locationButton.addEventListener('click', () => {
        panToCurrentLocation();
    });
    infoWindow = new google.maps.InfoWindow();

    map.addListener('bounds_changed', () => {
        searchBox.setBounds(map.getBounds() as google.maps.LatLngBounds);
    });

    searchBox.addListener('places_changed', () => {
        const places = searchBox.getPlaces();

        if (places.length === 0) {
            return;
        }

        // Clear existing markers
        markers.forEach((marker) => marker.setMap(null));
        markers.length = 0;

        // Set the map bounds to fit the search results
        const bounds = new google.maps.LatLngBounds();
        places.forEach((place) => {
            if (!place.geometry) {
                console.log('Returned place contains no geometry');
                return;
            }


            const marker = new google.maps.Marker({
                map,
                position: place.geometry.location,
                title: place.name,
            });

            markers.push(marker);

            bounds.extend(place.geometry.location);
        });

        map.fitBounds(bounds);
    });
};


const handleLocationError = (
    browserHasGeolocation: boolean,
    infoWindow: google.maps.InfoWindow,
    pos: google.maps.LatLng
): void => {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
        browserHasGeolocation
            ? 'Error: The Geolocation service failed.'
            : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
};

const search = (): void => {
    if (searchQuery.value) {
        const request: google.maps.places.PlaceSearchRequest = {
            location: map.getCenter() as google.maps.LatLng,
            radius: 5000, // Set the radius as per your requirement
            keyword: 'hospital',
        };
        // const placeId = 'ChIJDY2kfa8LThARyAvFaEH-qJkNigeria';

        const service = new google.maps.places.PlacesService(map);


        service.nearbySearch(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK && results) {
                hospitals.value = results;

                // Clear existing markers
                markers.forEach((marker) => marker.setMap(null));
                markers.length = 0;

                // Create markers for each hospital
                results.forEach((hospital) => {
                    if (hospital.geometry && hospital.geometry.location) {
                        const marker = new google.maps.Marker({
                            map,
                            position: hospital.geometry.location,
                            title: hospital.name,
                        });

                        markers.push(marker);
                    }
                });
            }
        });
    }
};




const panToCurrentLocation = (): void => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position: GeolocationPosition) => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };

                infoWindow.setPosition(pos);
                infoWindow.setContent('Location found.');
                infoWindow.open(map);
                map.setCenter(pos);

                searchNearbyHospitals(pos);
            },
            () => {
                handleLocationError(true, infoWindow, map.getCenter()!);
            }
        );
    } else {
        handleLocationError(false, infoWindow, map.getCenter()!);
    }
};

const searchNearbyHospitals = (location: google.maps.LatLngLiteral): void => {
    const request: google.maps.places.PlaceSearchRequest = {
        location,
        radius: 1000,
        type: 'hospital',
    };

    const service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            hospitals.value = results;
            clearMarkers();
            addMarkers(results);
            markers.push(
                new google.maps.Marker({
                    map,
                    icon,
                    title: place.name,
                    position: place.geometry.location,
                })
            );


        }
    });
};

const getPhotoUrl = (hospital: google.maps.places.PlaceResult): string => {
    if (hospital.photos && hospital.photos.length > 0) {
        const photo = hospital.photos[0];
        return photo.getUrl({ maxWidth: 300, maxHeight: 300 });
    }
    return 'https://unsplash.com/photos/sbu3lTahl-o'; // Return a placeholder image URL if no photo available
};

const addMarkers = (hospital: google.maps.places.PlaceResult[]): void => {
    for (const place of hospital) {
        if (place.geometry && place.geometry.location) {
            const marker = new google.maps.Marker({
                position: place.geometry.location,
                map,
            });
            markers.push(marker);
        }
    }
};

onMounted(() => {
    // Load Google Maps script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAY2ez0sDkoi-3VjuLN98e1EZRsHHX2RqM&libraries=places&callback=initMap`;
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);

    declare global {
        interface Window {
            initMap: () => void;
        }
    }
    window.initMap = initMap;
});
</script>
<style scoped>
#map {
    height: 400px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin-bottom: 10px;
}

img {
    object-fit: cover;
    margin-bottom: 5px;
}
</style>
  