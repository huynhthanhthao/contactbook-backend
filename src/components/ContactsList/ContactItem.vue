<template>
    <div class="row accordion animate__fadeIn animate__animated">
        <div class="accordion-item px-0">
            <h2 class="accordion-header" :id="`flush-heading-${contact._id}`">
                <div class="accordion-button collapsed py-1" type="button">
                    <div class="left d-flex align-items-center flex-grow-1">
                        <div class="position-relative">
                            <img
                                src="@/assets/avatar.png"
                                style="width: 60px; height: 60px"
                                class="rounded-circle"
                            />
                            <i
                                v-if="contact.favorite"
                                class="bi bi-suit-heart-fill position-absolute bottom-0 end-0 text-danger"
                            ></i>
                        </div>
                        <div class="d-flex flex-column m-0 ms-3">
                            <p class="m-0 fw-bold">
                                {{ contact.name }}
                            </p>
                            <p class="m-0">{{ contact.phone }}</p>
                        </div>
                    </div>
                    <div class="right fs-5">
                        <router-link
                            to="/update"
                            class="btn me-1"
                            @click="getContactId(contact._id)"
                        >
                            <i class="bi bi-pencil-fill"></i>
                        </router-link>
                        <button
                            class="btn me-1"
                            @click="deleteContact(contact._id)"
                        >
                            <i class="bi bi-archive-fill"></i>
                        </button>
                        <button
                            class="btn me-1"
                            type="button"
                            :data-bs-target="`#flush-collapse-${contact._id}`"
                            data-bs-toggle="collapse"
                            aria-expanded="false"
                        >
                            <i class="bi bi-chevron-down"></i>
                        </button>
                    </div>
                </div>
            </h2>
            <div
                :id="`flush-collapse-${contact._id}`"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlush"
            >
                <div class="accordion-body fs-6 row">
                    <p class="col-6">
                        <strong>Full name:</strong>
                        {{ contact.name }}
                    </p>
                    <p class="col-6">
                        <strong>Email:</strong> {{ contact.email }}
                    </p>
                    <p class="col-6">
                        <strong>Address:</strong> {{ contact.address }}
                    </p>
                    <p class="col-6">
                        <strong>Isfavorite:</strong>
                        {{ contact.favorite ? "YES" : "NO" }}
                    </p>
                    <div class="col-6">
                        <div class="contact-other">
                            <strong>Other Contact:</strong>

                            <a href="https://facebook.com" target="_blank"
                                ><i class="bi bi-facebook text-dark ms-2"></i
                            ></a>
                            <a href="https://twitter.com" target="_blank"
                                ><i class="bi bi-twitter text-dark ms-2"></i
                            ></a>
                            <a href="https://instagram.com" target="_blank"
                                ><i class="bi bi-instagram text-dark ms-2"></i
                            ></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "ContactItem",
    props: ["contact"],

    methods: {
        ...mapActions(["deleteContact", "getContactId"]),
    },
    computed: mapGetters(["getShowFavorites"]),
};
</script>

<style>
.accordion-button {
    background-color: #e5efff !important;
}
</style>
