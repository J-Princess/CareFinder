<script setup lang="ts">
// defineProps<{
//   msg: string
// }>()
</script>

<template>
  <div class="container-fluid mt-5 text-dark sect5">
    <div class="container-fluid w-75 " style="margin: auto;">
      <div style="margin: auto;  width: 50%; text-align: center;">
        <h2 class="lead pb-2 pt-3 px-2" style="width: 71px; border-left: 5px #88B3DB solid; height: 51px; margin: auto; ">
          Testimonials
        </h2>
        <p class="display-4 mt-5" style="color: 
                          #08299B;">What Our Users Say</p>
      </div>

      <div class="content">
        <div class="card-deck mt-5">
          <div class="card col-sm-4" style="background: #E0E4EC;">

            <div class="card-body pt-5 px-3 ">
              <p class="card-text">Finding the right hospital has never been easier! With this website, I was able to
                locate
                a nearby hospital quickly and efficiently. The search feature is user-friendly, and it provided me with
                all
                the essential information I needed. Highly recommended</p>
              <p class="card-text"><small class="text-muted">⭐ ⭐ ⭐ ⭐ ⭐</small></p>
              <div>
                <img class="card-img-top"
                  src="../assets/images/lashawn-dobbs-wOe_VGJe3TE-unsplash-fotor-20230613232357.png" alt="Card image cap"
                  style="width: 65px; height: 65px;"><span class="ml-2">
                  <b>Sarah Mase</b>
                </span>
              </div>
            </div>
          </div>
          <div class="card col-sm-4" style="background: #E0E4EC;">

            <div class="card-body pt-5 px-3">
              <p class="card-text">I can’t express how grateful i am for carefinder website. When i needed urgent medical
                care while travelling, it helped me locate the nearest hospital in a matter of seconds. The accurate
                results
                and detailed directions saved me valuable time and ensured i received the care i needed</p>
              <p class="card-text"><small class="text-muted">⭐ ⭐ ⭐ ⭐ ⭐</small></p>
              <div>
                <img class="card-img-bottom" style="width: 65px; height: 65px;"
                  src="../assets/images/joshua-oluwagbemiga-8qFarlWZY-U-unsplash-fotor-20230613232318.png"
                  alt="Card image cap"><span class="ml-2">
                  <b>Joshua Oluwagbemiga</b>
                </span>
              </div>
            </div>
          </div>
          <div class="card col-sm-4" style="background: #E0E4EC;">

            <div class="card-body pt-5 px-3">
              <p class="card-text">I recently moved to a new city and had no idea where to go for medical assistance, my
                friend shared me some hospital details using the carefinder website. It made my life easier, i was able to
                fine reputable hospitals near me effortlessly. The website’s is user friendly interface and comprehnsive
                search gave me peace of mind. I highly recommend.</p>
              <p class="card-text"><small class="text-muted">⭐ ⭐ ⭐ ⭐ ⭐</small></p>
              <div>
                <img class="card-img-top"
                  src="../assets/images/alex-robinson-rrI02QQ9GSQ-unsplash-fotor-20230613232219.png" alt="Card image cap"
                  style="width: 65px; height: 65px;"><span class="ml-2">
                  <b>Tolani Oladele</b>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sect5 {
  width: 100%;
  height: 100%;
  float: left;
  padding-top: 140px;
  margin-bottom: 80px;
}

.content {
  flex-grow: 1;
  overflow-y: auto;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
