
<template>
  <div class="container-fluid sect1 ">
    <div class="content">
      <div class="row pt-5 ">
        <div class="col-sm-5 mt-5 ">
          <blockquote class="blockquote text-center">
            <h3 class="find text-primary">Find the nearest hospital to you and make an appointment</h3>
            <p class="pt-2">Discover Your Perfect Care: Find Your Hospital, Anytime, Anywhere!</p>
            <button type="button" class="btn btn-primary btn-lg mt-3">
              <RouterLink to="/sign" style="text-decoration: none; color: #fff;">GET STARTED</RouterLink>
            </button>
            <p class="mt-4">
              <RouterLink to="/about"> Learn more</RouterLink>
            </p>
          </blockquote>
        </div>
        <div class=" col-sm-7">
          <img src="../assets/images/cdc-uN8TV9Pw2ik-unsplash.jpg" class="car img-fluid float-right" alt="...">
        </div>

      </div>
      <div class="bar container-fluid h-100" style="min-vh: 50; max-vh: 100;">
        <h4>Find a nearby hospital</h4>

        <div class=" row justify-content-center align-items-center h-100">
          <div class="col-md-6">
            <div class="input-group flex-nowrap">
              <div id="map"></div>
              <input type="text" placeholder="Enter location..." v-model="searchQuery" id="search-box" class="w-100"
                name="address">
              <button @click="search"
                style="padding: 13px 40px; margin-left: 10px; border-radius: 10px; border: none;">Search</button>
            </div>
          </div>
        </div>

        <div class="container row mt-3 h-100" style="margin: auto;">
          <div class="col-sm-4 lg-12 md-12 sm-12 xs-12" id="providerList" v-if="loading">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>


          </div>
          <div v-else style="height: fit-content; " class="content">
            <ul>
              <div v-for="hospital in hospitals" :key="hospital.place_id" class="list-group-item">
                <p>{{ hospital.name }}.</p>
                <p>{{ hospital.vicinity }}</p>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid sect2">
    <div class="card-deck">
      <div class=" post col-sm-4 h-100">
        <img src="../assets/images/alexandr-podvalny-tE7_jvK-_YU-unsplash.jpg" class="card-img-top " alt="..."
          style="border-radius: 40px;">
      </div>
      <div class=" post vost col-sm-4 h-100">
        <img src="../assets/images/pexels-antoni-shkraba-5215017.jpg" class="card-img-top" alt="..."
          style="border-radius: 40px;">
      </div>
      <div class="card post bost h-100">
        <div class="card-body">
          <blockquote class="blockquote text-center">
            <h5 class="card-title">Welcome to</h5>
            <h3 class="card-title text-primary">CareFinder</h3>
            <p class="card-text">Carefinder is a platform where users can search for hosiptals in their areas, export
              hospital details for your records and enhance your healthcare experience by connecting with others and
              sharing
              valuable resources.</p>
            <button type="button" class="btn btn-primary btn-md mt-2">
              <RouterLink to="/about" style="text-decoration: none; color: #fff;">OUR SERVICES</RouterLink>
            </button>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid sect3 mt-5">

    <div class="row mt-5 pt-5">
      <div class="col-sm-3 mb-4">
        <div class="card text-center" style="background: #E0E4EC;  height: 225px;">
          <div class="yard"><img src="../assets/images/hospital.png" style="width: 50px; height: 50px; margin-top: 10px;"
              alt=" ..."></div>
          <div class="card-body">
            <h5 class="card-title">Search Doctors</h5>
            <p class="card-text">Effortlessly Find the Best Hospitals Near You</p>
          </div>
        </div>
      </div>
      <div class="col-sm-3 mb-4">
        <div class="card text-center" style="background: #E0E4EC; height: 225px;">
          <div class="yard"><img src="../assets/images/fontisto_doctor.png"
              style="width: 50px; height: 50px; margin-top: 10px;" alt=" ..."></div>
          <div class="card-body">
            <h5 class="card-title">Search Hospitals</h5>
            <p class="card-text">Effortlessly Find the Best Doctors Near You</p>
          </div>
        </div>
      </div>
      <div class="col-sm-3 mb-4">
        <div class="card text-center" style="background: #E0E4EC;  height: 225px;">
          <div class="yard"><img src="../assets/images/line.png" style="width: 50px; height: 50px; margin-top: 10px;"
              alt=" ..."></div>
          <div class="card-body">
            <h5 class="card-title">Export Hospitals</h5>
            <p class="card-text">Save list of hospitals.</p>
          </div>
        </div>
      </div>
      <div class="col-sm-3 mb-4 ">
        <div class="card text-center" style="background: #E0E4EC;  height: 225px;">
          <div class="yard"><img src="../assets/images/Vector.png" style="width: 50px; height: 50px; margin-top: 10px;"
              alt=" ..."></div>
          <div class="card-body">
            <h5 class="card-title">Share Hospitals</h5>
            <p class="card-text">Share the list of hospitals with others. </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
// import google from '@fawmi/vue-google-maps';

export default defineComponent({
  name: 'SearchMap',
  data() {
    return {
      loading: false,
    }

  },

  setup() {

    let map: google.maps.Map;
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

      // Rest of the code...



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

    const search = (): void => {
      // Rest of the code...
      if (searchQuery.value) {
        const request: google.maps.places.PlaceSearchRequest = {
          location: map.getCenter() as google.maps.LatLng,
          radius: 5000, // Set the radius as per your requirement
          keyword: 'hospital',
        };

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

    onMounted(() => {
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

    return {
      searchQuery,
      search,
      hospitals, // Add hospitals to the return object
    };
  },
});
</script>


<style>
.sect1 {
  background: #E0E4EC;
  float: left;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.content {
  flex-grow: 1;
  overflow-y: auto;
}

.find {
  font-size: 40px;
  line-height: 70px;
}

.car {
  /* position: absolute; */
  width: 916px;
  height: 603px;
  left: 24px;
  top: 10px;
  border-radius: 50px;
}

.bar {
  width: 100%;
  height: 50px;
  margin: auto;
  margin-top: 4%;
  padding-bottom: 130px;
  text-align: center;
}


input {
  width: 50%;
  /*width: 500px;*/
  height: var(--hieght);
  padding: 10px 20px;
  font-size: 22px;
  color: #FFFFFF;

  border: 2px solid #FFFFFF;
  outline: #FFFFFF;
  border-radius: 25px;
  font-family: 'Poppins', sans-serif;
  /* text-shadow: 0 0 10px #3498db; */
  background: #FFFFFF;
}

.input::placeholder {
  color: #C1C1C1;
  background: #C1C1C1;

}

.sect2 {
  margin-top: 30px;
  height: 100%;
  float: left;
}


.post {
  height: 402px;
  width: 388px;
  left: 1px;
  top: 21px;
  border-radius: 50px;
  border: none;
}

.vost {
  /* left: 412px; */
  top: 76px;
  border-radius: 50px;

}

.bost {
  top: 106px;
  text-align: center;
  height: 302px;
  line-height: 40px;
}

.sect3 {
  margin-top: 30px;
  width: 100%;
  height: 100%;
  float: left;
}

.yard {
  width: 80px;
  height: 80px;
  background-color: #007bff;
  align-self: center;
  margin-top: 20px;
  border-radius: 50%;
}
</style>