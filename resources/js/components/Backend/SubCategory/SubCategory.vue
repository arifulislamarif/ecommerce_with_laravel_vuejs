<template>
    <div>
        <!-- breadcrumbs here start-->
        <div class="page-header card">
            <div class="row align-items-end">
                <div class="col-lg-8">
                    <div class="page-header-title">
                        <i class="feather icon-home bg-c-blue"></i>
                        <div class="d-inline">
                            <h5>SubCategory</h5>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="page-header-breadcrumb">
                        <ul class=" breadcrumb breadcrumb-title">
                            <li class="breadcrumb-item">
                                <router-link to="/"><i class="feather icon-home"></i></router-link>
                            </li>
                            <li class="breadcrumb-item"><a href="javascript:void(0)">CSubategory</a> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- breadcrumbs here end-->
        <!-- page content start  -->
        <div class="pcoded-inner-content">
            <div class="main-body">
                <div class="page-wrapper">
                    <div class="page-body">
                        <div class="row">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-header">
                                        <h5>SubCategory</h5>
                                        <button @click="ModalShow" class="fa fa-plus btn btn-primary float-right"></button>
                                    </div>
                                    <div class="card-block table-border-style">
                                        <div class="table-responsive">
                                            <table class="table table-bordered">
                                                <thead class="text-center">
                                                    <tr>
                                                        <th>SL. No.</th>
                                                        <td>Category Name</td>
                                                        <td>SubCategory Name</td>
                                                        <td>SubCategory Slug</td>
                                                        <td>Status</td>
                                                        <td>Active / Inactive</td>
                                                        <td>Action</td>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <!-- <tr v-for="(category,index) in get_categories" :key="index">
                                                        <td class="text-center pt-4">{{ index+1 }}</td>
                                                        <td class="text-center pt-4">{{category.category_name}}</td>
                                                        <td class="text-center pt-4">{{category.category_slug | subString(10)}}</td>
                                                        <td class="text-center pt-4" v-if="category.status == 1">
                                                            <span class="badge badge-success">Active</span>
                                                        </td>
                                                        <td class="text-center pt-4" v-else>
                                                            <span class="badge badge-danger">Inctive</span>
                                                        </td>
                                                        <td class="text-center pt-4">
                                                            <button @click="category_inactive(category.id)" class="fa fa-arrow-down btn btn-danger" v-show="category.status == 1"></button>
                                                            <button @click="category_active(category.id)" class="fa fa-arrow-up btn btn-success" v-show="category.status != 1"></button>
                                                        </td>
                                                        <td class="text-center pt-4">
                                                            <button @click="category_edit(category.id)" class="fa fa-edit btn btn-warning"></button>
                                                            <button @click="category_destroy(category.id)" class="fa fa-trash btn btn-danger"></button>
                                                        </td>
                                                    </tr>
                                                    <tr v-if="empty_data()">
                                                        <td colspan="20">
                                                            <h6 class="text-center text-danger">Data not found!</h6>
                                                        </td>
                                                    </tr> -->
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- page content end -->

        <!-- Adding Modal Start  -->
        <!-- <AddCategoryModal></AddCategoryModal> -->
        <!-- Adding Modal End  -->

        <!-- Editing Modal Start  -->
        <div class="modal fade" id="editCategoryModal" tabindex="-1" role="dialog"
            aria-labelledby="exampleModal3Label" aria-hidden="true">
            <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">Edit Category</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <br>
                    <!-- <alert-error :form="form" message="There were some problems with your input."></alert-error>
                    <form role="form" @submit.prevent="update_Category">
                        <div class="modal-body">
                            <div class="form-group">
                                <label>Category Name</label>
                                <input v-model="form.category_name" type="text" class="form-control" :class="{ 'is-invalid': form.errors.has('category_name') }" placeholder="Enter Category Name">
                                <has-error :form="form" field="category_name"></has-error>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal"> Close</button>
                            <button :disabled="form.busy" type="submit" class="btn btn-primary"><span v-show="form.update_loading" class="fa fa-spinner fa-spin"></span> Update</button>
                        </div>
                    </form> -->
                </div>
            </div>
        </div>
        <!-- Editing Modal End  -->
    </div>
</template>


<script>
// import AddCategoryModal from './AddCategoryModal';

export default {
    // components:{
    //     AddCategoryModal:AddCategoryModal,
    // },
    // mounted() {
    //     this.$store.dispatch("get_categoriess");
    // },
    // computed:{
    //     get_categories(){
    //         return this.$store.getters.categories;
    //     }
    // },
    data() {
        return {
            // form: new Form({
            //     id: null,
            //     category_name: null,
            //     update_loading : false,
            // }),
        }
    },
    methods: {

        // //======Modal Show Start ======
        // ModalShow(){
        //     $('#addCategoryModal').modal('show');
        // },
        // //======Modal Show End ======

        // //======Edit Category Start ======
        // category_edit(id){
        //     $('#editCategoryModal').modal('show');
        //     axios.get("/category/"+id+"/edit")
        //     .then(response => {
        //         this.form.id = response.data.edit_categories.id;
        //         this.form.category_name = response.data.edit_categories.category_name;
        //     })
        // },
        // //======Edit Category End ======

        // //======Update Category Start ======
        // update_Category(){
        //     this.form.update_loading = true,
        //     this.form.put("category/"+this.form.id)
        //     .then(response => {
        //         this.form.update_loading = false,
        //         $('#editCategoryModal').modal('hide');
        //         this.$store.dispatch("get_categoriess");
        //         this.$toast.success(response.data.message);
        //     })
        //     .catch(error => {
        //         this.form.update_loading = false
        //     })
        // },
        // //======Update Category End ======

        // //======Category Detele Start ======
        //     category_destroy(id){
        //         Swal.fire({
        //             title: 'Are you sure?',
        //             text: "You won't be able to revert this!",
        //             icon: 'warning',
        //             showCancelButton: true,
        //             confirmButtonColor: '#3085d6',
        //             cancelButtonColor: '#d33',
        //             confirmButtonText: 'Yes, delete it!',
        //         })
        //         .then((result) => {
        //             if (result.value) {
        //                 axios.delete("/category/"+id)
        //                 .then(response => {
        //                     this.$toast.success(response.data.message);
        //                     this.$store.dispatch("get_categoriess");
        //                 })
        //             }
        //         })
        //     },
        // //======Category Detele End ======

        // //======Category Inactive Start ======
        // category_inactive(id){
        //     axios.post("/category/inactive/" + id)
        //     .then(response=> {
        //         this.$store.dispatch("get_categoriess");
        //         this.$toast.success(response.data.message);
        //     });
        // },
        // //======Category Inactive End ======

        // //======Category Active Start ======
        // category_active(id){
        //     axios.post("/category/active/" + id)
        //     .then(response=> {
        //         this.$toast.success(response.data.message);
        //         this.$store.dispatch("get_categoriess");
        //     });
        // },
        // //======Category Active End ======

        // empty_data(){
        //     return (this.get_categories.length < 1);
        // }
    },
}
</script>

