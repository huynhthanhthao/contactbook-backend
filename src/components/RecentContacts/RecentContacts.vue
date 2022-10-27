<template>
    <div class="recent-contact mt-3">
        <div class="h4 py-4 border-bottom" style="color: #7633fa !important">
            <i class="bi bi-stopwatch-fill"></i>
            <span class="fw-bold"> Recent Contacts </span>
        </div>
        <div class="d-flex justify-content-center">
            <swiper
                :slidesPerView="5"
                :spaceBetween="30"
                :freeMode="true"
                :pagination="{
                    clickable: true,
                }"
                :modules="modules"
                class="rounded-4"
                style="background-color: #fff; width: 90%"
            >
                <swiper-slide v-for="contact in contacts" :key="contact._id"
                    ><RecentContactItem :contact="contact"
                /></swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
import RecentContactItem from "./RecentContactItem.vue";

import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import { mapActions, mapGetters } from "vuex";

export default {
    name: "RecentContact",
    components: {
        RecentContactItem,
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [FreeMode, Pagination],
        };
    },
    async created() {
        this.getContacts();
    },
    methods: {
        ...mapActions(["getContacts"]),
    },
    computed: mapGetters(["contacts", "getShowFavorites"]),
};
</script>

<style></style>
