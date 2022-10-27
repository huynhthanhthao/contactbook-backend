<template>
    <div>
        <div
            class="col-12 contacts-header d-flex justify-content-between align-items-center"
        >
            <div class="h4" style="color: #7633fa !important">
                <i class="bi bi-person-lines-fill"></i>
                <span class="fw-bold"> Contacts List</span>
            </div>
        </div>
        <nav
            class="navbar navbar-expand-lg bg-light px-3 py-0 w-100 d-flex justify-content-between"
        >
            <div class="fs-6 p-2">
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <button
                                :class="
                                    getShowFavorites
                                        ? 'btn border-0 border-dark me-2 '
                                        : 'btn border-0 border-dark me-2 text-danger'
                                "
                                @click="CLOSE_FAVORITES"
                                aria-current="page"
                            >
                                All Contacts
                            </button>
                        </li>
                        <li class="nav-item">
                            <button
                                :class="
                                    getShowFavorites
                                        ? 'btn border-0 border-danger me-2 text-danger '
                                        : 'btn border-0 border-danger me-2 '
                                "
                                @click="SHOW_FAVORITES"
                            >
                                Favorite
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <form class="d-flex align-items-center" role="search">
                <img src="@/assets/search.png" style="width:30px; height: 30px">
                <input
                    class="form-control mx-2 my-1"
                    type="search"
                    placeholder="Enter information... "
                    aria-label="Search"
                    v-model="searchQuery"
                />
            </form>
        </nav>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import _ from "lodash";

export default {
    data() {
        return { searchQuery: "" };
    },
    name: "ContactListHeader",
    computed: mapGetters({
        getShowFavorites: "getShowFavorites",
    }),
    methods: {
        ...mapMutations(["SHOW_FAVORITES", "CLOSE_FAVORITES"]),
    },
    watch: {
        searchQuery: _.debounce(function () {
            if (this.searchQuery.trim() == "") {
                this.$store.commit("NO_TYPING");
            } else {
                this.$store.commit("TYPING");

                this.$store.dispatch("searchContact", this.searchQuery.trim());
            }
        }, 1000),
    },
};
</script>

<style></style>
