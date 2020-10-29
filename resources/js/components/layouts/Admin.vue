<template>
      <div id="pcoded" class="pcoded">
        <div class="pcoded-overlay-box"></div>
        <div class="pcoded-container navbar-wrapper">

            <!-- nav hera  -->
                <Header></Header>
            <!-- nav hera  -->

            <div class="pcoded-main-container">
                <div class="pcoded-wrapper">

               <!-- sidebar here  -->
                <Sidebar></Sidebar>
               <!-- sidebar here  -->

                    <div class="pcoded-content">
                        <router-view></router-view>
                    </div>

                    <div id="styleSelector"></div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Header from '../Backend/Dashboard/Header.vue';
import Sidebar from '../Backend/Dashboard/Sidebar.vue';

export default {
    components:{
        Header:Header,
        Sidebar:Sidebar,
    },
}
</script>
