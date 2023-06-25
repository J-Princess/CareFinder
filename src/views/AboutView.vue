<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

</script>


<template>
  <NavBar />
  <section class="about-us text-light">
    <div class="row p-4">
      <div class="col-6">
        <img class="float-lg-right" src="">
      </div>
      <div class="col-12 col-sm-6">
        <h1>New minimalist<br>–components</h1>
        <h6>Gravity will force your feet to the ground. Don’t be afraid, your mind will find your freedom.
          You won’t miss a sunrise. You’ll rise with the sun.
          <br>You’ll never run away from the storm. You will flow with the wind.
          <br>Don’t hesitate to pause. Follow the flow of the moment.
          And then, take the first step towards the new you.
        </h6>
      </div>
    </div>
    <div class="row p-4">
      <div
        class="col-12 col-sm-6 text-sm-right text-md-right ml-sm-0 ml-md-5 ml-lg-5 ml-xl-5 text-lg-right order-sm-first order-12"
        style="margin-right: -8%; z-index:1;">
        <h1>Save Space<br>more freedom</h1>
        <h6>Gravity will force your feet to the ground. Don’t be afraid, your mind will find your freedom.
          You won’t miss a sunrise. You’ll rise with the sun.
          You’ll never run away from the storm. You will flow with the wind.
          Don’t hesitate to pause. Follow the flow of the moment.
          And then, take the first step towards the new you.
        </h6>
      </div>
      <div class="col-6">
        <img src="">
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>

<style scoped>
.about-us img {
  width: 90%;
  min-width: 380px;
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
