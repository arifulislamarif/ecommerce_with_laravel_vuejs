<template>
    <header>
            <div class="header-container">
                <!--Header Top Area Start-->
                <div class="header-top-area">
                    <div class="container">
                        <div class="row">
                            <!--Header Top Left Area Start-->
                            <div class="col-lg-4 col-md-4 col-12">
                                <div class="header-top-menu">
                                    <ul>
                                        <li><span>Language:</span><a href="#">English <i class="fa fa-angle-down"></i></a>
                                            <ul class="ht-dropdown">
                                                <li><a href="#">Deutsch</a></li>
                                                <li><a href="#">Français</a></li>
                                                <li><a href="#">Português</a></li>
                                            </ul>
                                        </li>
                                        <li><span>Currency:</span><a href="#" class="text-uppercase">Usd<i class="fa fa-angle-down"></i></a>
                                            <ul class="ht-dropdown">
                                                <li><a href="#">EUR</a></li>
                                                <li><a href="#">BRL</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!--Header Top Left Area End-->
                            <!--Header Top Right Area Start-->
                            <div class="col-lg-8 col-md-8 d-lg-block d-md-block d-none text-right">
                                <div class="header-top-menu">
                                    <ul>
                                        <li class="support"><span>Ordered before 17:30, shipped today  - Support: (012) 800 456 789</span></li>
                                        <li class="account"><a href="#">My Account <i class="fa fa-angle-down"></i></a>
                                            <ul class="ht-dropdown">
                                                <li><a href="checkout.html">Checkout</a></li>
                                                <li><a href="my-account.html">My Account</a></li>
                                                <li><a href="shopping-cart.html">Shopping Cart</a></li>
                                                <li><a href="wishlist.html">Wishlist</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!--Header Top Right Area End-->
                        </div>
                    </div>
                </div>
                <!--Header Top Area End-->
                <!--Header Middel Area Start-->
                <div class="header-middel-area">
                    <div class="container">
                        <div class="row">
                            <!--Logo Start-->
                            <div class="col-lg-3 col-md-3 col-12">
                                <div class="logo">
                                    <a href="index.html"><img src="../../../../../public/frontend/img/logo/logo2.png" alt=""></a>
                                </div>
                            </div>
                            <!--Logo End-->
                            <!--Search Box Start-->
                            <div class="col-lg-6 col-md-5 col-12">
                                <div class="search-box-area">
                                    <form action="#">
                                       <div class="select-area">
                                            <select data-placeholder="Choose a Country..." class="select" tabindex="1">
                                                <option value="">All Categories</option>
                                                <optgroup label="NFC EAST">
                                                  <option>Dallas Cowboys</option>
                                                  <option>New York Giants</option>
                                                  <option>Philadelphia Eagles</option>
                                                  <option>Washington Redskins</option>
                                                </optgroup>
                                                <optgroup label="NFC NORTH">
                                                  <option>Chicago Bears</option>
                                                  <option>Detroit Lions</option>
                                                  <option>Green Bay Packers</option>
                                                  <option>Minnesota Vikings</option>
                                                </optgroup>
                                                <optgroup label="NFC SOUTH">
                                                  <option>Atlanta Falcons</option>
                                                  <option>Carolina Panthers</option>
                                                  <option>New Orleans Saints</option>
                                                  <option>Tampa Bay Buccaneers</option>
                                                </optgroup>
                                                <optgroup label="NFC WEST">
                                                  <option>Arizona Cardinals</option>
                                                  <option>St. Louis Rams</option>
                                                  <option>San Francisco 49ers</option>
                                                  <option>Seattle Seahawks</option>
                                                </optgroup>
                                                <optgroup label="AFC EAST">
                                                  <option>Buffalo Bills</option>
                                                  <option>Miami Dolphins</option>
                                                  <option>New England Patriots</option>
                                                  <option>New York Jets</option>
                                                </optgroup>
                                                <optgroup label="AFC NORTH">
                                                  <option>Baltimore Ravens</option>
                                                  <option>Cincinnati Bengals</option>
                                                  <option>Cleveland Browns</option>
                                                  <option>Pittsburgh Steelers</option>
                                                </optgroup>
                                                <optgroup label="AFC SOUTH">
                                                  <option>Houston Texans</option>
                                                  <option>Indianapolis Colts</option>
                                                  <option>Jacksonville Jaguars</option>
                                                  <option>Tennessee Titans</option>
                                                </optgroup>
                                                <optgroup label="AFC WEST">
                                                  <option>Denver Broncos</option>
                                                  <option>Kansas City Chiefs</option>
                                                  <option>Oakland Raiders</option>
                                                  <option>San Diego Chargers</option>
                                                </optgroup>
                                           </select>
                                        </div>
                                        <div class="search-box">
                                            <input type="text" name="search" id="search" placeholder="" value='Search product...' onblur="if(this.value==''){this.value='Search product...'}" onfocus="if(this.value=='Search product...'){this.value=''}">
                                            <button type="submit"><i class="ion-ios-search-strong"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <!--Search Box End-->
                            <!--Mini Cart Start-->
                            <div class="col-lg-3 col-md-4 col-12">
                               <div class="mini-cart-area">
                                   <ul>
                                       <li><a href="#"><i class="ion-android-star"></i></a></li>
                                       <li><a href="#"><i class="ion-android-cart"></i><span class="cart-add">2</span><span class="cart-total">$215.00 <i class="fa fa-angle-down"></i></span></a>
                                           <ul class="cart-dropdown">
                                               <!--Single Cart Item Start-->
                                               <li class="cart-item">
                                                   <div class="cart-img">
                                                       <a href="shopping-cart.html"><img  src="../../../../../public/frontend/img/cart/1.jpg" alt=""></a>
                                                   </div>
                                                   <div class="cart-content">
                                                       <h4><a href="shopping-cart.html">natural typesetting</a></h4>
                                                       <p class="cart-quantity">Qty:1</p>
                                                       <p class="cart-price">$160.00</p>
                                                   </div>
                                                   <div class="cart-close">
                                                       <a href="#" title="Remove"><i class="ion-android-close"></i></a>
                                                   </div>
                                               </li>
                                               <!--Single Cart Item Start-->
                                               <!--Single Cart Item Start-->
                                               <li class="cart-item">
                                                   <div class="cart-img">
                                                       <a href="shopping-cart.html"><img  src="../../../../../public/frontend/img/cart/2.jpg" alt=""></a>
                                                   </div>
                                                   <div class="cart-content">
                                                       <h4><a href="shopping-cart.html">Natural simply random</a></h4>
                                                       <p class="cart-quantity">Qty:2</p>
                                                       <p class="cart-price">$180.00</p>
                                                   </div>
                                                   <div class="cart-close">
                                                       <a href="shopping-cart.html" title="Remove"><i class="ion-android-close"></i></a>
                                                   </div>
                                               </li>
                                               <!--Single Cart Item Start-->
                                               <!--Cart Total Start-->
                                               <li class="cart-total-amount mtb-20">
                                                   <h4>SubTotal : <span class="pull-right">$215.00</span></h4>
                                               </li>
                                               <!--Cart Total End-->
                                               <!--Cart Button Start-->
                                               <li class="cart-button">
                                                   <a href="shopping-cart.html" class="button2">View cart</a>
                                                   <a href="checkout.html" class="button2">Check out</a>
                                               </li>
                                               <!--Cart Button End-->
                                           </ul>
                                       </li>
                                   </ul>
                               </div>
                           </div>
                            <!--Mini Cart End-->
                        </div>
                    </div>
                </div>
                <!--Header Middel Area End-->
                <!--Header bottom Area Start-->
                <div class="header-bottom-area header-sticky">
                   <div class="container">
                       <div class="row">
                           <div class="col-lg-12">
                               <!--Logo Sticky Start-->
                               <div class="logo-sticky">
                                 <a href="index.html"><img  src="../../../../../public/frontend/img/logo/logo.png" alt=""></a>
                               </div>
                               <!--Logo Sticky End-->
                               <!--Main Menu Area Start-->
                               <div class="main-menu-area">
                                   <nav>
                                       <ul class="main-menu">
                                           <li class="active"><a href="index.html">Home</a>
                                               <!--Dropdown Menu Start-->
                                               <ul class="dropdown">
                                                   <li><a href="index.html">Home Shop 1</a></li>
                                                   <li><a href="index-2.html">Home Shop 2</a></li>
                                                   <li><a href="index-3.html">Home Shop 3</a></li>
                                                   <li><a href="index-4.html">Home Shop 4</a></li>
                                                   <li><a href="index-5.html">Home Shop 5</a></li>
                                                   <li><a href="index-6.html">Home Shop 6</a></li>
                                                   <li><a href="index-7.html">Home Shop 7</a></li>
                                               </ul>
                                               <!--Dropdown Menu End-->
                                           </li>
                                           <li class="new"><a href="#">Features</a>
                                               <!--Mega Menu Start-->
                                               <ul class="mega-menu">
                                                   <li>
                                                       <ul>
                                                           <li class="mega-title"><a href="#">pages</a></li>
                                                           <li><a href="about.html">About Us</a></li>
                                                           <li><a href="services.html">Services</a></li>
                                                           <li><a href="frequently-questions.html">Frequently Questions</a></li>
                                                           <li><a href="404.html">Error 404</a></li>
                                                           <li><a href="portfolio.html">Portfolio</a></li>
                                                       </ul>
                                                   </li>
                                                   <li>
                                                       <ul>
                                                           <li class="mega-title"><a href="#">blog</a></li>
                                                           <li><a href="blog-nosidebar.html">None Sidebar</a></li>
                                                           <li><a href="blog-left-sidebar.html">Sidebar Left</a></li>
                                                           <li><a href="blog-post-gallery.html">Gallery Format</a></li>
                                                           <li><a href="blog-post-audio.html">Audio Format</a></li>
                                                           <li><a href="blog-post-video.html">Video Format</a></li>
                                                       </ul>
                                                   </li>
                                                   <li>
                                                       <ul>
                                                           <li class="mega-title"><a href="#">shop</a></li>
                                                           <li><a href="shop-full-width.html">Full Width</a></li>
                                                           <li><a href="shop-right-sidebar.html">Sidebar Right</a></li>
                                                           <li><a href="shop-list-view.html">List View</a></li>
                                                       </ul>
                                                   </li>
                                                   <li class="menu-img">
                                                       <ul>
                                                           <li><a href="#"><img  src="../../../../../public/frontend/img/menu/1.jpg" alt=""></a></li>
                                                       </ul>
                                                   </li>
                                               </ul>
                                               <!--Mega Menu End-->
                                           </li>
                                           <li class="hot"><a href="shop.html">Shop</a></li>
                                           <li><a href="blog.html">Blog</a></li>
                                           <li><a href="contact.html">Contact Us</a></li>
                                           <li><a href="wishlist.html">My Wishlist</a></li>
                                           <li><a href="#">Pages</a>
                                               <ul class="dropdown">
                                                   <li><a href="shopping-cart.html">Shopping Cart</a></li>
                                                   <li><a href="wishlist.html">Wishlist</a></li>
                                                   <li><a href="checkout.html">Checkout</a></li>
                                                   <li><a href="my-account.html">My Account</a></li>
                                                   <li><a href="single-product.html">Product Details</a></li>
                                                   <li><a href="shop.html">Shop</a></li>
                                                   <li><a href="shop-full-width.html">Shop Full Width</a></li>
                                                   <li><a href="shop-list-view.html">Shop List View</a></li>
                                                   <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                                   <li><a href="blog-post-img.html">Blog Image Post</a></li>
                                                   <li><a href="blog-post-video.html">Blog Video Post</a></li>
                                                   <li><a href="blog-nosidebar.html">Blog no Sidebar</a></li>
                                               </ul>
                                           </li>
                                       </ul>
                                   </nav>
                               </div>
                               <!--Main Menu Area End-->
                           </div>
                       </div>
                   </div>
               </div>
                <!--Header bottom Area End-->
                <!--Mobile Menu Area Start-->
                <div class="mobile-menu-area d-lg-none d-md-none d-block">
                   <div class="container">
                       <div class="row">
                           <div class="col-12">
                               <div class="mobile-menu">
                                   <nav>
                                       <ul>
                                           <li><a href="index.html">home</a>
                                               <ul>
                                                   <li><a href="index.html">Home Shop 1</a></li>
                                                   <li><a href="index-2.html">Home Shop 2</a></li>
                                                   <li><a href="index-3.html">Home Shop 3</a></li>
                                                   <li><a href="index-4.html">Home Shop 4</a></li>
                                                   <li><a href="index-5.html">Home Shop 5</a></li>
                                                   <li><a href="index-6.html">Home Shop 6</a></li>
                                                   <li><a href="index-7.html">Home Shop 7</a></li>
                                               </ul>
                                           </li>
                                           <li><a href="#">Features</a>
                                               <ul>
                                                   <li><a href="#">pages</a>
                                                       <ul>
                                                          <li><a href="about.html">About Us</a></li>
                                                          <li><a href="services.html">Services</a></li>
                                                          <li><a href="frequently-questions.html">Frequently Questions</a></li>
                                                          <li><a href="404.html">Error 404</a></li>
                                                          <li><a href="portfolio.html">Portfolio</a></li>
                                                       </ul>
                                                   </li>
                                                   <li><a href="#">blog</a>
                                                       <ul>
                                                          <li><a href="blog-nosidebar.html">None Sidebar</a></li>
                                                          <li><a href="blog-left-sidebar.html">Sidebar Left</a></li>
                                                          <li><a href="blog-post-gallery.html">Gallery Format</a></li>
                                                          <li><a href="blog-post-audio.html">Audio Format</a></li>
                                                          <li><a href="blog-post-video.html">Video Format</a></li>
                                                       </ul>
                                                   </li>
                                                   <li><a href="#">shop</a>
                                                       <ul>
                                                          <li><a href="shop-full-width.html">Full Width</a></li>
                                                          <li><a href="shop-right-sidebar.html">Sidebar Right</a></li>
                                                          <li><a href="shop-list-view.html">List View</a></li>
                                                       </ul>
                                                   </li>
                                               </ul>
                                           </li>
                                           <li><a href="shop.html">Shop</a></li>
                                           <li><a href="blog.html">Blog</a></li>
                                           <li><a href="contact.html">Contact Us</a></li>
                                           <li><a href="wishlist.html">My Wishlist</a></li>
                                           <li><a href="#">Pages</a>
                                               <ul>
                                                   <li><a href="shopping-cart.html">Shopping Cart</a></li>
                                                   <li><a href="wishlist.html">Wishlist</a></li>
                                                   <li><a href="checkout.html">Checkout</a></li>
                                                   <li><a href="my-account.html">My Account</a></li>
                                                   <li><a href="single-product.html">Product Details</a></li>
                                                   <li><a href="shop.html">Shop</a></li>
                                                   <li><a href="shop-full-width.html">Shop Full Width</a></li>
                                                   <li><a href="shop-list-view.html">Shop List View</a></li>
                                                   <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                                   <li><a href="blog-post-img.html">Blog Image Post</a></li>
                                                   <li><a href="blog-post-video.html">Blog Video Post</a></li>
                                                   <li><a href="blog-nosidebar.html">Blog no Sidebar</a></li>
                                               </ul>
                                           </li>
                                       </ul>
                                   </nav>
                               </div>
                           </div>
                       </div>
                   </div>
                </div>
                <!--Mobile Menu Area End-->
            </div>
        </header>
</template>
