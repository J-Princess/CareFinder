<template>
    <footer class="footer_area pt-5">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-6 col-xl-3 col-lg-3 col-md-3 col-sm-6">
                    <div class="footer-widget">
                        <div class="footer-title">
                            <h1 class="mb-5">CareFinder</h1>

                            <p class="ml-3 display-5">Plot 42, Akinza Street, Victoria island, Lagos<br> +2348159096125</p>
                        </div>

                    </div>
                </div>

                <div class="col-3 col-xl-2 col-lg-3 col-md-3 col-sm-3">
                    <div class="footer-widget">
                        <div class="footer-title">About Us</div>
                        <ul class="list-unstyled">
                            <router-link to="/products">
                                <li>News & Media</li>
                            </router-link>
                            <router-link to="/products">
                                <li>Contact Us</li>
                            </router-link>
                        </ul>
                    </div>
                </div>

                <div class="col-6 col-xl-3 col-lg-3 col-md-3 col-sm-6">
                    <div class="footer-widget">
                        <div class="footer-title">Quick Links</div>
                        <ul class="list-unstyled">
                            <router-link to="/login">
                                <li>My account </li>
                            </router-link>
                            <router-link to="/products">
                                <li>Book an appointment </li>
                            </router-link>
                            <router-link to="/products">
                                <li> Library</li>
                            </router-link>
                        </ul>
                    </div>
                </div>


            </div>

            <div class="row justify-content-between">
                <div class="col-xl-7 col-lg-6 col-md-6 col-sm-6 col-6">
                    <div class="tiny-footer">
                        <p>Copyright © All Rights Reserved 2023 </p>
                    </div>
                </div>
                <!--        <div class="col-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 text-right">-->
                <!--          <div class="social-info">-->
                <!--            <strong>Get social</strong>-->
                <!--            <img class="twitter" src="@/assets/twitter.png">-->
                <!--            <img class="pinterest" src="@/assets/pinterest.png">-->
                <!--            <img class="facebook" src="@/assets/facebook.png">-->
                <!--            <img class="instagram" src="@/assets/insta.png">-->
                <!--          </div>-->
                <!--        </div>-->
            </div>
        </div>
    </footer>
</template>
  

  
<style scoped>
.footer_area {
    position: relative;
    z-index: 1;
    color: #2c3539;
    background-color: #E0E4EC;
    margin-top: 100px;
}

.footer-widget {
    padding-top: 60px;
}

.footer-title {
    padding-bottom: 20px;
    font-weight: bold;
}

.list-unstyled a {
    text-decoration: none;
}

.list-unstyled a li {
    color: #2c3e50;
    margin-bottom: 10px;
}

.social-info>img {
    padding-left: 10px;
}

.social-info>img:hover {
    opacity: 0.7;
}
</style>