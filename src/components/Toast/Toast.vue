<template>
    <div
        class="toast d-block animate__fadeInRight animate__animated"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
    >
        <div class="toast-header">
            <i
                :class="
                    getToast.isSuccess
                        ? 'bi bi-check-square-fill text-success'
                        : 'bi bi-check-square-fill text-danger'
                "
            ></i>
            <strong class="me-auto ms-2">Notify</strong>
            <button
                type="button"
                class="btn-close"
                data-bs-dismiss="toast"
                aria-label="Close"
                @click="CLOSE_TOAST"
            ></button>
        </div>
        <div
            :class="
                getToast.isSuccess
                    ? 'toast-body text-success fw-bold'
                    : 'toast-body text-danger fw-bold'
            "
        >
            {{ getToast.message }}
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
    name: "ToastComponent",
    computed: mapGetters(["getToast"]),
    methods: { ...mapMutations(["CLOSE_TOAST"]) },
};
</script>

<style>
.toast {
    z-index: 2;
    position: fixed;
    bottom: 10px;
    right: 10px;
}
</style>
