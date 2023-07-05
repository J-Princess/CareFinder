
<template>
    <div class="col-sm-3" style="width: 300px;">
        <div class="container-fluid ">

            <div class="row mb-5 mt-4">
                <RouterLink to="/" class="navbar-brand p-2 mt-2">
                    <h3><b>CareFinder</b></h3>
                </RouterLink>
            </div>

            <div class="ml-4" style="border-right:2px solid slategray;">
                <!-- <div class=" collapse navbar-collapse" id="navbarSupportedContent"> -->
                <ul class="navbar-nav row ">
                    <li class="nav-item active py-3" style="font-size: large;">
                        <RouterLink to="/profile" class="nav-link">Profile</RouterLink>
                    </li>
                    <li class="nav-item active ">
                        <RouterLink to="/hospit" class="nav-link">Find Hospital</RouterLink>
                    </li>
                    <li class="nav-item mt-2">
                        <RouterLink to="" class="nav-link">Book An Appointment</RouterLink>
                    </li>
                    <li class="nav-item  mt-2">
                        <RouterLink to="/enter" class="nav-link">Hospital Entries</RouterLink>
                    </li>
                    <li class="nav-item  mt-2">
                        <RouterLink to="/hospit" class="nav-link ">Search
                        </RouterLink>
                    </li>
                    <li class="nav-item mt-2">
                        <RouterLink to="/lib" class="nav-link">Library
                        </RouterLink>
                    </li>

                </ul>
                <div class=" ml-3 mt-5 pt-4">
                    <button type="submit" @click="handleSignOut" class="p-2 px-4"
                        style="border: none; background-color: coral; border-radius: 5px;" v-if="isLoggedIn">Sign
                        Out</button>
                </div>
            </div>

        </div>

    </div>
</template>
  

<script setup lang="ts">
import router from '@/router';
import { getAuth, signOut, onAuthStateChanged } from '@firebase/auth';
import { ref, onMounted } from 'vue';

const auth = getAuth();
const isLoggedIn = ref(false)

const handleSignOut = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        alert('Sign Out Successful');
        router.push('/');
    }).catch((error) => {
        // An error happened.
        alert('Try Again')
    });

}

onMounted(() => {
    onAuthStateChanged(auth, (user) => {

        if (user) {
            isLoggedIn.value = true;
        } else {
            isLoggedIn.value = false;
        }

    });
});



</script>
  
<style>
.nav-item:active {
    color: blue;

}
</style>
  