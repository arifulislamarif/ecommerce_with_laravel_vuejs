window.Vue = require('vue');
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window._ = require('lodash');

// Frontend component
// import Website from './components/layouts/Website.vue';

// Backend component
import Admin from './components/layouts/Admin.vue';

// router
import router from './router';

// vuex
import Vuex from 'vuex'
Vue.use(Vuex)
import vuex from './vuex';
const store = new Vuex.Store(vuex);

// Vform
import { Form, HasError, AlertError } from 'vform'
window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

// Moment js
import {moment} from './moment'

// Sweet alert
import Swal from 'sweetalert2'
window.Swal = Swal;

// vue Tostification
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
const options = {
    position: "top-right",
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: false,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: "button",
    icon: true,
    transition: "Vue-Toastification__slideBlurred",
    maxToasts: 10,
    newestOnTop: true
};
Vue.use(Toast, options);
window.Toast = Toast;

// CK Editor
// import CKEditor from '@ckeditor/ckeditor5-vue';
// Vue.use( CKEditor );

        //----------- Bootstrap Vue Dropdown Start----------------
            // import Vue from 'vue'
            // import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

            // Install BootstrapVue
            // Vue.use(BootstrapVue)
            // Optionally install the BootstrapVue icon components plugin
            // Vue.use(IconsPlugin)
        //----------- Bootstrap Vue End----------------



        // vue pagination
        // Vue.component('pagination', require('laravel-vue-pagination'));

const app = new Vue({
    el: '#app',
    router,
    store,
    components: {
        // 'website-component': Website,
        'backend-component': Admin,
    }
});
