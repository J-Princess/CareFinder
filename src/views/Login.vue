
<template>
    <NavBar />
    <div class="container mt-5">
        <div class="page-banner2">
            <div class="row justify-content-center align-items-center h-100">
                <div class="col-md-6" @submit.prevent="onSubmit">
                    <nav aria-label="Breadcrumb"></nav>
                    <h1 class="text-center text-secondary">Login Page</h1>
                    <div class="input-group flex-nowrap mt-5">
                        <span class="input-group-text px-3" style=" border-radius:  2px 0 0 2px;">#</span>
                        <input type="email" class="form-control p-4" placeholder="Email" aria-label="Username" name="email"
                            v-model="email" aria-describedby="addon-wrapping" autocomplete="on" required />
                    </div>

                    <div class="input-group flex-nowrap mt-3">
                        <span class="input-group-text px-3" id="addon-wrapping"
                            style=" border-radius:  2px 0 0 2px;">*</span>
                        <input :type="showPassword ? 'text' : 'password'" class="form-control p-4" placeholder="Password"
                            v-model="password" aria-label="password" aria-describedby="addon-wrapping" />
                        <button @click="togglePasswordVisibility"
                            style="border: none; border-radius: 0 2px 2px 0; padding: 0 14px;">
                            <i :class="['fas', showPassword ? 'fa-eye-slash' : 'fa-eye']"></i>
                        </button>
                    </div>
                    <div class="input-group flex-nowrap mt-5">
                        <input type="checkbox" id="rememberMe" v-model="rememberMe" class="py-5">
                        <span for="rememberMe" style="margin-left: -30px; color: blanchedalmond; margin-top: 10px;">Remember
                            Me</span>

                    </div>
                    <div class="text-center mt-3">
                        <button type="button" class="btn btn-primary btn-lg align-items-center mt-5 px-5 fw-md "
                            @click="logIn">
                            Login
                        </button>
                    </div>

                    <div class="text-center mt-4">
                        <p class="px-4" style="color: antiquewhite;">
                            Don't have an account?<router-link to="/sign">
                                Signup</router-link>
                        </p>
                    </div>
                    <div class="google text-center mt-5 ">
                        <h3>OR</h3>
                        <div class="google-button pt-4">

                            <button class="google-word" @click="signInWithGoogle"
                                style="padding: 10px; font-size: larger; background-color: #fff; box-shadow: 4px 8px orangered;">
                                <img class="google-icon mx-2" href="#" src="../assets/images/search.png" alt="Image alt"
                                    style="width: 25px; height: 25px" />
                                Sign In with Google
                            </button>
                        </div>
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
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import router from "@/router";



const email = ref(localStorage.getItem('email') || "");
const password = ref(localStorage.getItem('password') || "");
const rememberMe = ref(false)
const showPassword = ref(false);

const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
};

const auth = getAuth();
const user = auth.currentUser;

const logIn = () => {
    if (email.value && password.value) {
        signInWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                alert('Login Successful');
                console.log(router.push('/profile'))
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                alert(errorCode)
            });
    } else {
        alert('Please enter both email and password.');
    }
}




const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            router.push('/profile');
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode)
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });


}

const onSubmit = () => {
    if (rememberMe.value) {
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', password.value);
    }
    logIn();
}

</script> 



















<style scoped>
#map {
    height: 400px;
}

.results {
    margin-top: 20px;
}
</style>
  