// bootstrap
require('./bootstrap');

window.Vue = require('vue');
// Vue.component('website-component', require('./components/Frontend/Main/Index.vue').default);

// component
import Index from './components/Frontend/Main/Index.vue';

// router
import router from './router';

// vuex
// import Vuex from 'vuex'

// Vue.use(Vuex)
// import vuex from './vuex';
// const store = new Vuex.Store(vuex);



        //----------- Moment js Start----------------
        //   import {moment} from './moment'
        //----------- Moment js End----------------

        //----------- Ck Editor Start----------------
            // import CKEditor from '@ckeditor/ckeditor5-vue';

            // Vue.use( CKEditor );
        //----------- Ck Editor End----------------

        //----------- Bootstrap Vue Dropdown Start----------------
            // import Vue from 'vue'
            // import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

            // Install BootstrapVue
            // Vue.use(BootstrapVue)
            // Optionally install the BootstrapVue icon components plugin
            // Vue.use(IconsPlugin)
        //----------- Bootstrap Vue End----------------

        //----------- Vue Dropdown Start----------------

        //----------- Vue Dropdown End----------------



        //----------- vue Vform Start----------------

            // import { Form, HasError, AlertError } from 'vform'

            // window.Form = Form;

            // Vue.component(HasError.name, HasError)
            // Vue.component(AlertError.name, AlertError)

        //----------- vue Vform End----------------

        //----------- vue Progressbar Start----------------

        // import VueProgressBar from 'vue-progressbar'

        //     Vue.use(VueProgressBar, {
        //         color: '#2ecc71',
        //         failedColor: '#874b4b',
        //         thickness: '10px',
        //         transition: {
        //             speed: '0.2s',
        //             opacity: '0.6s',
        //             termination: 300
        //         },
        //         autoRevert: true,
        //         location: 'top',
        //         inverse: false
        //     })

        //----------- vue Progressbar end----------------

        //-------- sweet alert  start----------
        // import Swal from 'sweetalert2'
        // window.Swal = Swal;

        // const Toast = Swal.mixin({
        //     toast: true,
        //     position: 'top-end',
        //     showConfirmButton: false,
        //     timer: 3000,
        //     timerProgressBar: true,
        //     didOpen: (toast) => {
        //     toast.addEventListener('mouseenter', Swal.stopTimer)
        //     toast.addEventListener('mouseleave', Swal.resumeTimer)
        //     }
        // })

        // window.Toast = Toast;

        //--------------- sweet alert  end -------------


// vue pagination
// Vue.component('pagination', require('laravel-vue-pagination'));

const app = new Vue({
    el: '#app',
    router,
    // store,

    components: {
        'website-component': Index,
    }
});
