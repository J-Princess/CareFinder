
<template>
    <NavBar />
    <div class="container-fluid" style="color: burlywood;">
        <div class="row">
            <SideBar />
            <div class="col-7">
                <div class="container-fluid">
                    <div class="container">
                        <div class="page-banner2">
                            <div class="row justify-content-center align-items-center h-100">
                                <div class="col-md-8 mt-5 ">

                                    <input type="search" id="search-box" placeholder="Search hospital"
                                        class="form-control p-4">
                                    <div>
                                        <h5 class="text-center mt-5">PROFILE DETAILS</h5>
                                        <form class="mt-3" @submit="saveInfo">
                                            <div class="mt-1">
                                                <label for="lname">Name</label>
                                                <input type="text" id="name" name="lastname" placeholder="Enter Name"
                                                    class="form-control p-4" v-model="name" required>
                                            </div>
                                            <div class="mt-5">
                                                <label for="email">Email Address</label>
                                                <input type="email" id="email" placeholder="Enter Email Address"
                                                    v-model="email" required class="form-control p-4" autocomplete="on">
                                            </div>
                                            <div class="mt-5">
                                                <label for="address">Address</label>
                                                <input type="text" id="address" name="address" placeholder="Enter Address"
                                                    v-model="address" required class="form-control p-4">
                                            </div>

                                            <div class="text-center">
                                                <button type="submit"
                                                    class="btn btn-primary btn-lg align-items-center mt-5 px-5 fw-md ">
                                                    Save
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <h5 class="text-center mt-5">Connect to Social Media Accounts</h5>
                                    <div class="text-center my-4 pb-4">
                                        <a href="https://facebook.com" target="_blank" class="mx-4">
                                            <img src="../assets/images/facebook.png" alt=""
                                                style="width: 60px; height: 60px;">
                                        </a>
                                        <a href="https://instagram.com" target="_blank" class="mx-4">
                                            <img src="../assets/images/instagram.png" alt=""
                                                style="width: 55px; height: 55px;">
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-1 ">
                <div class="row">
                    <img src="../assets/images/pexels-godisable-jacob-718978-fotor-2023062243215.png" alt="" srcset=""
                        class="rounded-circle mt-3" style="width: 150px; height: 150px;">
                </div>
                <div class="row justify-content-center align-items-center h-25 mt-3">

                    <div v-if="isLoggedIn">
                        <h5>{{ user?.email }}</h5>
                        <div v-if="savedInfo">
                            <p>Name: {{ savedInfo.name }}</p>
                            <p>Email: {{ savedInfo.email }}</p>
                            <p>Address: {{ savedInfo.address }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>




<script setup lang="ts">
import SideBar from './SideBar.vue';
import NavBar from '@/components/NavBar.vue';
import { getAuth } from '@firebase/auth';
import { ref, onMounted } from 'vue';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';

const isLoggedIn = ref(true);
const auth = getAuth();
const user = auth.currentUser;

if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
}



interface UserInfo {
    id?: string;
    name: string;
    email: string;
    address: string;
}

const name = ref('');
const email = ref('');
const address = ref('');
const savedInfo = ref<UserInfo | null>(null);

const db = getFirestore();

const saveInfo = async (event: Event) => {
    event.preventDefault();
    alert('Profile saved');
    const info: UserInfo = {
        name: name.value,
        email: email.value,
        address: address.value,
    };

    try {
        const docRef = await addDoc(collection(db, 'user-info'), info);
        savedInfo.value = { ...info, id: docRef.id };

        // Clear input fields
        name.value = '';
        email.value = '';
        address.value = '';
    } catch (error) {
        console.error('Error saving info:', error);
        alert(error)
    }

};

const fetchSavedInfo = async () => {
    const querySnapshot = await getDocs(collection(db, 'user-info'));
    querySnapshot.forEach((doc) => {
        savedInfo.value = doc.data() as UserInfo;
    });
};

onMounted(() => {
    fetchSavedInfo();
});
</script>  


  


  