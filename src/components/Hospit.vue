<template>
    <div class="container-fluid">
        <div class="row">

            <SideBar />

            <div class="col">


                <div class="row justify-content-center align-items-center">
                    <div class="col-md-8 mt-5 ">

                        <nav aria-label="Breadcrumb"></nav>


                        <div class="input-group flex-nowrap mt-5">
                            <span class="input-group-text px-3" id="addon-wrapping" style=" border-radius:  2px 0 0 2px;"><i
                                    :class="['fal', 'fa-search-location']"></i></span>
                            <input type="search" class="form-control p-4" placeholder="Search hospital" id="search-box"
                                name="address" v-model="searchQuery" aria-describedby="addon-wrapping" autocomplete="on"
                                required style="border-radius: 0 2px   2px 0;" />
                            <button @click="search"
                                style="padding: 13px 40px; margin-left: 10px; border-radius: 10px; border: none;">Search</button>
                        </div>

                        <div id="map"></div>

                    </div>
                </div>
                <div class="container pl-5 mt-5">
                    <h2 class="text-gray">Nearby Hospitals:</h2>
                    <ul class="row">

                        <li v-for="hospital in hospitals" :key="hospital.place_id" class="card col-sm-3 m-4 border-0 "
                            style="width: 600px; " @submit="hospitals">
                            <div class="card-body pt-5 ">
                                <img :src="getPhotoUrl(hospital)" alt="Hospital Photo"
                                    style="border-radius:10px; width: 10rem; height: 10rem; " />
                                <h5 class="card-title mt-2">{{ hospital.name }}</h5>
                                <p class="card-text"> {{ hospital.vicinity }} </p>
                                <p class="card-text"> {{ hospital.place_id }} </p>
                                <p class="card-text"> Hospital Rating: {{ hospital.rating || 'No ratings yet' }} </p>
                                <p class="card-text">Phone Number: {{ hospital.formatted_phone_number || 'Not Available'
                                }}</p>
                                <p class="card-text">Opening Hours: {{ isOpen(hospital.opening_hours) ? 'Open' : 'Closed' }}
                                </p>
                                <p class="card-text">Website: <a :href="hospital.website" target="_blank">{{
                                    hospital.website ||
                                    'Not Available' }}</a>
                                </p>
                                <img src="../assets/images/Vector2.png" @click="exportToCSV"
                                    style="width: 25px; height: 25px;">


                            </div>
                        </li>



                        <CustomAlert v-if="showAlert" @close="showAlert = false">
                            Hospitals data saved successfully!
                        </CustomAlert>

                    </ul>
                    <div class="text-center">
                        <button @click="saveHospitals" class="btn btn-primary p-3 btn-lg">Save Hospitals</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>


<script setup lang="ts">
import SideBar from '@/components/SideBar.vue';
import CustomAlert from '@/components/CustomAlert.vue'
import { ref, onMounted } from 'vue';

import { getFirestore, collection, addDoc, doc, writeBatch } from 'firebase/firestore';


let map: google.maps.Map;
let infoWindow: google.maps.InfoWindow;
let searchBox: google.maps.places.SearchBox;
const markers: google.maps.Marker[] = [];
const searchQuery = ref('');
const hospitals = ref<google.maps.places.PlaceResult[]>([]);

const saveHospitalsToFirebase = async (hospitals: any[]): Promise<void> => {
    try {
        const filteredHospitals = hospitals.filter((hospital) => hospital !== undefined);
        if (filteredHospitals.length > 0) {
            const db = getFirestore();
            const batch = writeBatch(db);

            filteredHospitals.forEach((hospital) => {
                const { name, vicinity } = hospital;
                const docRef = doc(collection(db, 'hospitals'));
                const data = { name, vicinity };
                batch.set(docRef, data);
            });

            await batch.commit();
            console.log('Hospitals saved to Firebase:', filteredHospitals);
            window.alert('Hospitals data saved successfully! YAY');
            showAlert.value = true;
        } else {
            console.warn('No valid hospitals data to save.');
            window.alert('No valid hospitals data to save.');
        }
    } catch (error) {
        console.error('Error saving hospitals:', error);
        alert(error);
    }

};
const showAlert = ref(false);

const saveHospitals = async (): Promise<void> => {
    try {
        await saveHospitalsToFirebase(hospitals.value);


    } catch (error) {
        console.error('Error saving hospitals:', error);
        alert(error);
    }
};


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

      
        markers.forEach((marker) => marker.setMap(null));
        markers.length = 0;


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
            radius: 5000,
            keyword: 'hospital',

        };
        const placeId = 'ChIJDY2kfa8LThARyAvFaEH-qJkNigeria';
        const service = new google.maps.places.PlacesService(map);



        service.nearbySearch(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK && results) {
                hospitals.value = results;



       
                markers.forEach((marker) => marker.setMap(null));
                markers.length = 0;
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


const exportToCSV = (): void => {
    const convertToCSV = (data: any[]): string => {
        const header = Object.keys(data[0]).join(',') + '\n';
        const rows = data.map((item) => Object.values(item).join(',') + '\n');
        return header + rows.join('');
    };

    const csvContent = convertToCSV(hospitals.value);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'hospitals.csv');
    link.click();
    alert('Download Successful');
};



const searchNearbyHospitals = (location: google.maps.LatLngLiteral): void => {
    const request: google.maps.places.PlaceSearchRequest = {
        location,
        radius: 1000,
        type: 'hospital',
        fields: ['formatted_phone_number', 'opening_hours', 'website'],
    };

    const service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            const placeIds = results.map((hospital) => hospital.place_id);

            const promises = placeIds.map((placeId) =>
                new Promise<google.maps.places.PlaceResult>((resolve) => {
                    service.getDetails({ placeId, fields: ['opening_hours'] }, (result, status) => {
                        if (status === google.maps.places.PlacesServiceStatus.OK) {
                            resolve(result);
                        } else {
                            resolve(null);
                        }
                    });
                })
            );

            Promise.all(promises).then((details) => {

                hospitals.value = results.map((hospital, index) => ({
                    place_id: hospital.place_id,
                    name: hospital.name,
                    vicinity: hospital.vicinity,
                    formatted_phone_number: hospital.formatted_phone_number,
                    opening_hours: details[index]?.opening_hours,
                    website: hospital.website,
                    photoUrl: getPhotoUrl(hospital),
                }));
                saveHospitalsToFirebase(hospitals.value);



                clearMarkers();
                addMarkers(results);

            });

        }
    });

};
const isOpen = (openingHours: google.maps.places.OpeningHours): boolean => {
    if (openingHours && openingHours.isOpen()) {
        return true;
    }
    return false;
};

const getPhotoUrl = (hospital: google.maps.places.PlaceResult): string => {
    if (hospital.photos && hospital.photos.length > 0) {
        const photo = hospital.photos[0];
        return photo.getUrl({ maxWidth: 300, maxHeight: 300 });
    }
    return ''; 
};

const addMarkers = (places: google.maps.places.PlaceResult[]): void => {
    for (const place of places) {
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

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=?&libraries=places&callback=initMap`;
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

<style>
#map {
    height: 300px;
}
</style>
