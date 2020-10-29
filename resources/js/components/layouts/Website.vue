<template>
    <div class="wrapper home-2">
        <!--Header Area Start-->
            <Header></Header>
        <!--Header Area End-->

        <router-view></router-view>

        <!--Footer Area Start-->
            <Footer></Footer>
        <!--Footer Area End-->

        <!--Modal Start-->
        <div id="myModal" class="modal fade" role="dialog">
            <div class="modal-dialog">
            <!-- Modal Content Strat-->
            <div class="modal-content">
                <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                <div class="modal-details">
                    <div class="row">
                        <!--Product Img Strat-->

                        <!--Product Img End-->
                        <!-- Product Content Start-->
                        <div class="col-xl-7 col-lg-7">
                            <div class="product-info">
                                <h2>Natural passages</h2>
                                <div class="product-price">
                                    <span class="old-price">$74.00</span>
                                    <span class="new-price">$69.00</span>
                                </div>
                                <a href="#" class="see-all">See all features</a>
                                <div class="add-to-cart quantity">
                                    <form class="add-quantity" action="#">
                                            <div class="quantity modal-quantity">
                                                <label>Quantity</label>
                                                <input type="number">
                                            </div>
                                        <div class="add-to-link">
                                            <button class="form-button" data-text="add to cart">add to cart</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="cart-description">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco,Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus.</p>
                                </div>
                                <div class="social-share">
                                    <h3>Share this product</h3>
                                    <ul class="socil-icon2">
                                        <li><a href=""><i class="fa fa-facebook"></i></a></li>
                                        <li><a href=""><i class="fa fa-twitter"></i></a></li>
                                        <li><a href=""><i class="fa fa-pinterest"></i></a></li>
                                        <li><a href=""><i class="fa fa-google-plus"></i></a></li>
                                        <li><a href=""><i class="fa fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!--Product Content End-->
                    </div>
                </div>
                </div>
            </div>
            <!--Modal Content Strat-->
            </div>
        </div>
        <!--Modal End-->
    </div>
</template>

<script>

import Header from '../Frontend/Main/Header';
import Footer from '../Frontend/Main/Footer.vue';
// import Sidebar from './Sidebar.vue';
// import PageHeader from './PageHeader.vue';

export default {
    components:{
        Header:Header,
        Footer:Footer,
        // Sidebar:Sidebar,
        // PageHeader:PageHeader,
    },
}
</script>
