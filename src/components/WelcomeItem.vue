
<template>
  <div class="container-fluid sect3">
    <div class="container-fluid text-center" style="width: 80%;">
      <h2>How It Works</h2>
      <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active" data-interval="10000">
            <img src="../assets/images/pexels-karolina-grabowska-4021775.jpg" class="d-block w-100"
              style=" border-radius: 35px;" alt="...">
            <div class="carousel-caption d-none d-md-block text-light">
              <h3>Find Hospital</h3>
              <p>Find the best hospitals and doctors near you, our efficient search engine provides you
                with the best results.</p>
            </div>
          </div>
          <div class="carousel-item" data-interval="10000">
            <img src="../assets/images/pexels-picjumbocom-225232.jpg" class="d-block w-100" alt="..."
              style="height: 80vh; border-radius: 35px;">
            <div class="carousel-caption d-none d-md-block text-white">
              <h3>Save or share hospital</h3>
              <p>Carefinder allows users to save and share the list of hospitals with others.
                Users
                can share the information via email or by generating a shareable link</p>
            </div>
          </div>
          <div class="carousel-item" data-interval="10000">
            <img src="../assets/images/nordwood-themes-kRNZiGKtz48-unsplash.jpg" class="d-block w-100" alt="..."
              style="height: 80vh; border-radius: 35px;">
            <div class="carousel-caption d-none d-md-block text-body">
              <h3>Book Appointment</h3>
              <p>Book appointments easily by inputting correct details</p>
            </div>
          </div>
          <div class="carousel-item" data-interval="10000">
            <img src="../assets/images/national-cancer-institute-SMxzEaidR20-unsplash.jpg" class="d-block w-100" alt="..."
              style="height: 80vh; border-radius: 35px;">
            <div class="carousel-caption d-none d-md-block text-white">
              <h3>Make a visit</h3>
              <p>Appointment confirmed, then make a visit to your selected hospital or doctor</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </button>
      </div>
    </div>
  </div>
  <div class="container-fluid sect4 mt-5">
    <div class="row ">
      <div class="col">
        <h3 class="ml-5 pl-5 mt-5">QUALIFIED DOCTORS</h3>
        <div class="container mt-5">
          <div class="row">
            <div class="col-sm">
              <div class="card text-center" style="background: transparent; border: none;">
                <div class=""><img src="../assets/images/pexels-laura-james-6098068-fotor-20230613183134.png"
                    style="width: 200px; height: 200px; margin-top: 10px;" alt=" ..." class="rounded-circle"></div>
                <div class="card-body">
                  <h5 class="card-title host">Dr Nneoma Obi</h5>
                  <p class="card-text host">Pediatrician</p>
                  <p class="card-text host">Divine Grace Specialist Hospital</p>
                </div>
              </div>
            </div>
            <div class="col-sm">
              <div class="card text-center" style="background: transparent; border: none; ">
                <div class="rounded-circle"><img
                    src="../assets/images/pexels-tima-miroshnichenko-5452201-fotor-20230613183424.png"
                    style="width: 200px; height: 200px; margin-top: 10px; " alt=" ..." class="rounded-circle"></div>
                <div class="card-body">
                  <h5 class="card-title host">Dr Anne Bakare</h5>
                  <p class="card-text host">Oncologist</p>
                  <p class="card-text host">First City Hospital</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-sm">
              <div class="card text-center" style="background: transparent; border: none;">
                <div class=""><img src="../assets/images/pexels-thirdman-5327656-fotor-2023061318392.png"
                    style="width: 200px; height: 200px; margin-top: 10px;" alt=" ..." class="rounded-circle"></div>
                <div class="card-body">
                  <h5 class="card-title host">Dr Chike Agu</h5>
                  <p class="card-text host">Dentist</p>
                  <p class="card-text host">R-Jolad Hospital</p>
                </div>
              </div>
            </div>
            <div class="col-sm">
              <div class="card text-center" style="background: transparent; border: none;">
                <div class=""><img src="../assets/images/pexels-klaus-nielsen-6303564-fotor-20230613182749.png"
                    style="width: 200px; height: 200px; margin-top: 10px;" alt=" ..." class="rounded-circle"></div>
                <div class="card-body">
                  <h5 class="card-title host">Dr Cole Ben</h5>
                  <p class="card-text host">Surgeon</p>
                  <p class="card-text host">Ayodele Medical Centre</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm pt-5 mt-5 text-center">
        <button type="button" class="btn btn-primary btn-lg w-50 rounded-pill p-3">Book An Appointment</button>
        <div style="margin: auto;  width: 70%; ">
          <div class="pt-4 mt-2 input-group" style="">

            <input type="text" placeholder="Address" id="demo" name="address"
              style="border-radius: 2px 0 0 2px; padding: 8px; width: 400px;">
            <div class="input-group-append">
              <span class="input-group-text px-4" style="border-radius: 0 2px 2px 0;"><img
                  src="../assets/images/location.png" style="width: 25px; height: 25px;"></span>
            </div>

          </div>
          <div class="pt-4 input-group " style="">

            <select class=" w-100 py-3" id="sel1" name="country" required>
              <option value="" disabled selected hidden> Choose Hospital</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
          <div class="pt-4 mt-2 input-group" style="">

            <select class="w-100 py-3" id="sel1" placeholder="Choose Department" required>
              <option value="" disabled selected hidden>Choose Department</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
          <div class="pt-4 mt-2 input-group " style="">
            <input type="text" name="name" placeholder="Full Name" class="w-100 p-1 text-dark"
              style="border-radius: 2px ;" required>
          </div>
          <div class="pt-4 mt-2" style="">
            <input type="email" name="email" class="w-100 p-1 text-dark" style="border-radius: 2px ;"
              placeholder="Enter Email" required>
          </div>
          <div class="pt-4  mt-2 input-group " style="">
            <input type="date" placeholder="Choose date" class="w-100 p-1 text-dark" style="border-radius: 2px ;"
              required>
          </div>
          <div class="pt-4 mt-2 input-group " style="">
            <input type="time" class="w-100 p-1 text-dark" style="border-radius: 2px ;" required>
          </div>

        </div>

        <button type="button" class="btn btn-primary btn-lg w-50 rounded-pill p-3 mt-5">Book An Appointment</button>


      </div>
    </div>
  </div>
</template>
<style scoped>
.sect3 {
  width: 100%;
  height: 100%;
  float: left;
  font-size: 25px;
  margin-bottom: 150px;
}

.sect4 {
  width: 100%;
  height: 100%;
  float: left;
  color: #fff;
  margin-bottom: 150px;
}

.host {
  line-height: 10px;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
}

select {
  width: 100%;
}

select:required:invalid {
  color: gray;
}

option[value=""][disabled] {
  display: none;
}

option {
  color: black;
}

@media (min-width: 1024px) {
  .ecll2 {
    margin-top: -58px;
  }

  .ecll3 {
    top: 100px;
  }
}
</style>
