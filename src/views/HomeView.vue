<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import WelcomeItem from '@/components/WelcomeItem.vue';
import HelloWorld from '@/components/HelloWorld.vue';
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <NavBar />
  <div>
    <main>
      <TheWelcome />
      <WelcomeItem />
      <HelloWorld />
    </main>
    <p>⚕️</p>
  </div>
  <Footer></Footer>
</template>
