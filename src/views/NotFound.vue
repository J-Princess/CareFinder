<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import { RouterLink } from 'vue-router';
</script>


<template>
    <NavBar />
    <div class="about container-fluid text-center">
        <div class="four_zero_four_bg">
            <h1 class="text-center text-light">404</h1>
        </div>
        <div class="contant_box_404 ml-5">
            <h3 class="h2">Coming Soon</h3>

            <p>the page you are looking for not avaible!</p>

            <router-link to="/" class="link_404">Go to Home</router-link>
        </div>
    </div>
    <Footer></Footer>
</template>



<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
        place-content: center;
    }
}
</style>