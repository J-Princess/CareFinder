

<template>
    <NavBar />
    <div class="container mt-5 pt-3">
        <div class="page-banner2">
            <div class="row justify-content-center align-items-center h-100">
                <div class="col-md-6">
                    <!-- <nav aria-label="Breadcrumb"></nav> -->
                    <h1 class="text-center text-secondary my-5">Registration</h1>

                    <div class="input-group flex-nowrap mt-3">
                        <span class="input-group-text px-3" id="addon-wrapping"
                            style=" border-radius:  2px 0 0 2px;">#</span>
                        <input type="email" class="form-control p-4" placeholder="Email" aria-label="Email" v-model="email"
                            aria-describedby="addon-wrapping" name="email" autocomplete="on" required />
                    </div>

                    <div class="input-group flex-nowrap mt-4">
                        <span class="input-group-text px-3" id="addon-wrapping"
                            style=" border-radius:  2px 0 0 2px;">*</span>
                        <input class="form-control p-4" :type="showPassword ? 'text' : 'password'" placeholder="Password"
                            aria-label="Password" v-model="password" aria-describedby="addon-wrapping" />
                        <button @click="togglePasswordVisibility"
                            style="border: none; border-radius: 0 2px 2px 0; padding: 0 14px;">
                            <i :class="['fas', showPassword ? 'fa-eye-slash' : 'fa-eye']"></i>
                        </button>
                    </div>

                    <div class="text-center">
                        <button type="button" class="btn btn-primary btn-lg align-items-center mt-5 px-5 fw-md"
                            @click="signIn">
                            Sign Up
                        </button>
                    </div>
                    <div class="text-center mt-4">
                        <p class="px-4" style="color: antiquewhite;">
                            Already have an account?
                            <router-link to="/login">Login!</router-link>
                        </p>
                    </div>



                </div>


            </div>
        </div>
    </div>
    <Footer></Footer>
</template>
  
<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';



import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import router from '@/router';


const email = ref("");
const password = ref("");
const showPassword = ref(false);



const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
};

const auth = getAuth();
const signIn = () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            alert('Signup Successful ')
            const user = userCredential.user;
            router.push('/profile');
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode);
            // ..
        });

}

</script>

  