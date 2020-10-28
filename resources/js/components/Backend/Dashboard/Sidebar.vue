<template>
       <nav class="pcoded-navbar">
            <div class="nav-list">
                <div class="pcoded-inner-navbar main-menu">
                    <div class="pcoded-navigation-label">Dashboard</div>
                    <ul class="pcoded-item pcoded-left-item">
                        <li class="">
                            <router-link to="/" class="waves-effect waves-dark">
                                <span class="pcoded-micon">
                                    <i class="feather icon-menu"></i>
                                </span>
                                <span class="pcoded-mtext">Dashboard</span>
                            </router-link>
                        </li>
                        <li class="">
                            <router-link to="/about" class="waves-effect waves-dark">
                                <span class="pcoded-micon">
                                    <i class="feather icon-menu"></i>
                                </span>
                                <span class="pcoded-mtext">Dashboard</span>
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
