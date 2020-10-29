<template>
    <div class="modal fade" id="addCategoryModal" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style="display: none;">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">Add Category</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <br>
                <alert-error :form="form" message="There were some problems with your input."></alert-error>
                <form role="form" @submit.prevent="addCategory">
                    <div class="modal-body">
                        <div class="form-group">
                            <label>Category Name</label>
                            <input v-model="form.category_name" type="text" class="form-control" :class="{ 'is-invalid': form.errors.has('category_name') }" placeholder="Enter Category Name">
                            <has-error :form="form" field="category_name"></has-error>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal"> Close</button>
                        <button :disabled="form.busy" type="submit" class="btn btn-primary"><span v-show="form.add_loading" class="fa fa-spinner fa-spin"></span> Add</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
     data() {
        return {
            form: new Form({
               category_name: null,
                add_loading : false,
            }),
        }
    },
    methods: {
        //======Category Add Start ======
        addCategory(){
            this.form.add_loading = true,
            this.form.post('/category')
            .then(response => {
                this.form.add_loading = false,
                this.form.category_name = null
                $('#addCategoryModal').modal('hide');
                this.$store.dispatch("get_categoriess");
                this.$toast.success(response.data.message);
            })
            .catch(error => {
                 this.form.add_loading = false
            })
        },
        //======Category Add End ======
    },
}
</script>
