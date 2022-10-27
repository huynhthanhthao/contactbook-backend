<template>
    <form
        @submit="handleDeleteAllContacts"
        class="form-confirm position-fixed top-50 start-50 translate-middle rounded-4 p-4 px-5 text-center shadow-lg animate__fadeIn animate__animated"
    >
        <img
            src="@/assets/ask.png"
            alt=""
            style="width: 200px"
            class="mb-3"
        />
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label text-white"
                >Are you sure delete all contacts?</label
            >
        </div>

        <input type="submit" class="btn btn btn-danger me-3 px-4" value="YES" />
        <input
            type="submit"
            class="btn btn-light px-4"
            value="NO"
            @click="CLOSE_FORM_CONFIRM"
        />
    </form>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
    name: "FormConfirm",
    methods: {
        ...mapActions(["deleteAllContacts"]),
        ...mapMutations(["CLOSE_FORM_CONFIRM"]),

        handleDeleteAllContacts() {
            this.CLOSE_FORM_CONFIRM();
            this.deleteAllContacts();
        },
    },
};
</script>

<style>
.form-confirm {
    background-color: #7633fa;
}
</style>
