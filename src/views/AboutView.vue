<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

</script>


<template>
  <NavBar />
  <section class="about-us mt-5">
    <div class="row m-2">
      <div class="col-6">
        <img class="float-lg-right mb-5 " src="../assets/images/pexels-bich-tran-669986.jpg"
          style="width:300px; height: 300px; margin-right: 25%; border-radius: 5px;">

      </div>
      <div class="col-12 col-sm-6">
        <h1>Our Mission</h1>
        <h6>Our mission is to provide convenient and accessible care solutions to empower individuals and families to live
          healthier and happier lives.</h6>
        <p>We are dedicated to delivering a seamless and user-friendly experience. We continually update and enhance our
          app to incorporate the latest advancements in technology and healthcare practices, so you can trust that
          you're getting the best care possible.</p>
        <p> Our app helps you find hospitals, their locations, contact details and lets you schedule appointments, all
          within the app. We prioritize the security and privacy of your personal health information. Our app utilizes
          robust
          encryption and adheres to industry-leading privacy standards to ensure your data remains confidential and
          protected.</p>


      </div>
    </div>
    <div class="row m-2">
      <div
        class="col-12 col-sm-6 text-sm-right text-md-right ml-sm-0 ml-md-5 ml-lg-5 ml-xl-5 text-lg-right order-sm-first order-12"
        style="margin-right: -15%; z-index:1;">
        <h1>About<br>Us</h1>
        <h6>
          Welcome to CareFinder, your trusted companion for personalized care and well-being.
        </h6>
        <p>At CareFinder, we understand the importance of holistic care that addresses physical, mental, and emotional
          well-being. We believe that everyone deserves personalized attention and support on their journey to wellness.
          Whether you are seeking self-care resources or looking to connect with healthcare professionals, our app is
          designed to meet your unique needs.</p>
      </div>
      <div class="col-6">
        <img src="../assets/images/carefinder-fotor-2023062820243.png" style="width:340px; height: 300px; margin: auto;"
          class="float-lg-right mb-3">
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>

<style scoped>
.about-us img {
  width: 90%;
  /* min-width: 380px; */
}
</style>
<!-- <style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style> -->
