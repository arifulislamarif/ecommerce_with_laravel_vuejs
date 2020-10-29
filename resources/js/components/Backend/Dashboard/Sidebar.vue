<template>
       <nav class="pcoded-navbar">
            <div class="nav-list">
                <div class="pcoded-inner-navbar main-menu">
                    <div class="pcoded-navigation-label">Website</div>
                    <ul class="pcoded-item pcoded-left-item">
                        <li class="">
                            <router-link to="/admin" class="waves-effect waves-dark">
                                <span class="pcoded-micon">
                                    <i class="feather icon-menu"></i>
                                </span>
                                <span class="pcoded-mtext">Dashboard</span>
                            </router-link>
                        </li>
                        <li class="">
                            <router-link to="/admin/category" class="waves-effect waves-dark">
                                <span class="pcoded-micon">
                                    <i class="feather icon-menu"></i>
                                </span>
                                <span class="pcoded-mtext">Category</span>
                            </router-link>
                        </li>
                        <li class="">
                            <router-link to="/admin/subcategory" class="waves-effect waves-dark">
                                <span class="pcoded-micon">
                                    <i class="feather icon-menu"></i>
                                </span>
                                <span class="pcoded-mtext">SubCategory</span>
                            </router-link>
                        </li>
                        <li class="pcoded-hasmenu">
                            <a href="javascript:void(0)" class="waves-effect waves-dark">
                                <span class="pcoded-micon">
                                    <i class="feather icon-layers"></i>
                                </span>
                                <span class="pcoded-mtext">Widget</span>
                            </a>
                            <ul class="pcoded-submenu">
                                <li class="">
                                    <a href="widget-statistic.html" class="waves-effect waves-dark">
                                        <span class="pcoded-mtext">Statistic</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
</template>

<style>
.light-sidebar-nav ul.sidebar-menu > li > .router-link-exact-active, .light-sidebar-nav ul.sidebar-menu > li > .router-link-exact-active:hover,
.light-sidebar-nav ul.sidebar-menu > li > .router-link-exact-active:focus {
    /* background: rgba(237, 77, 83, .06);
    border-left: 3px solid #ff6c60;
    color: #ff6c60;
    border-radius: 0 40px 40px 0;
    font-weight: bold;
    font-size: 15px; */
        background: #1d2531;
    color: #b7c0cd;
}

</style>
