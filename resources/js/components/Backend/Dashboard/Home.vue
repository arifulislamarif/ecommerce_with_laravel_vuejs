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

                                        <div class="row">
                                            <div class="col-md-6 col-xl-4">
                                                <div class="card comp-card">
                                                    <div class="card-body">
                                                        <div class="row align-items-center">
                                                            <div class="col">
                                                                <h6 class="m-b-25">Impressions</h6>
                                                                <h3 class="f-w-700 text-c-blue">1,563</h3>
                                                                <p class="m-b-0">May 23 - June 01 (2017)</p>
                                                            </div>
                                                            <div class="col-auto">
                                                                <i class="fas fa-eye bg-c-blue"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-xl-4">
                                                <div class="card comp-card">
                                                    <div class="card-body">
                                                        <div class="row align-items-center">
                                                            <div class="col">
                                                                <h6 class="m-b-25">Goal</h6>
                                                                <h3 class="f-w-700 text-c-green">30,564</h3>
                                                                <p class="m-b-0">May 23 - June 01 (2017)</p>
                                                            </div>
                                                            <div class="col-auto">
                                                                <i class="fas fa-bullseye bg-c-green"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-xl-4">
                                                <div class="card comp-card">
                                                    <div class="card-body">
                                                        <div class="row align-items-center">
                                                            <div class="col">
                                                                <h6 class="m-b-25">Impact</h6>
                                                                <h3 class="f-w-700 text-c-yellow">42.6%</h3>
                                                                <p class="m-b-0">May 23 - June 01 (2017)</p>
                                                            </div>
                                                            <div class="col-auto">
                                                                <i class="fas fa-hand-paper bg-c-yellow"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

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

// import HomeContent from './HomeContent';
// import Header from './Header';
import Sidebar from './Sidebar.vue';
import Header from './Header.vue';
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
