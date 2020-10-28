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

                       <!-- page header & breadcrumbs here  -->
                            <PageHeader></PageHeader>
                       <!-- page header & breadcrumbs here  -->

                        <div class="pcoded-inner-content">
                            <div class="main-body">
                                <div class="page-wrapper">
                                    <div class="page-body">

                                        <router-view></router-view>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="styleSelector">
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Header from './Header.vue';
import Sidebar from './Sidebar.vue';
import PageHeader from './PageHeader.vue';
// import Footer from './Footer';

export default {
    components:{
        // HomeContent:HomeContent,
        // Header:Header,
        Header:Header,
        Sidebar:Sidebar,
        PageHeader:PageHeader,
        // Footer:Footer,
    },
    data() {
        return {

        }
    },
}
</script>
