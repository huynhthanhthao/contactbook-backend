<template>
    <div>
        <div style="background-color: #7633fa" class="container-fluid">
            <Nav />
            <div class="contain d-flex justify-content-center">
                <router-view></router-view>
            </div>
        </div>

        <Toast v-if="getToast.show" />
        <FormConfirm v-if="getShowFormConfirm" />
    </div>
</template>

<script>
import Nav from "./components/Nav/Nav.vue";
import Toast from "./components/Toast/Toast.vue";
import FormConfirm from "./components/FormConfirm/FormConfirm.vue";
import { mapGetters } from "vuex";
export default {
    name: "App",
    components: {
        Nav,
        Toast,
        FormConfirm,
    },
    computed: mapGetters([
        "getShowUpdate",
        "getShowCreate",
        "getToast",
        "getShowFormConfirm",
    ]),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik+Dirt&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap");

#app {
    font-family: "Noto Sans", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.contain {
    min-height: 655px;
}
</style>
