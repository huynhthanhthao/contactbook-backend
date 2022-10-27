<template>
    <div class="d-flex mt-3 justify-content-center">
        <router-link
            to="/create"
            class="btn my-1 btn-outline-success me-3"
            @click="handleNew"
        >
            <i class="bi bi-plus-circle-fill"></i> New
        </router-link>
        <button
            v-if="contacts != ''"
            class="btn my-1 btn-outline-danger"
            @click="SHOW_FORM_CONFIRM"
        >
            <i class="bi bi-archive-fill"></i> Delete All
        </button>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
    name: "ContactsListFooter",
    methods: {
        ...mapMutations(["SHOW_FORM_CONFIRM"]),
        handleNew() {
            this.$store.commit('NO_TYPING')
        },
    },
    computed: mapGetters(["contacts"]),
};
</script>

<style>
.form-confirm {
    z-index: 2;
}
</style>
