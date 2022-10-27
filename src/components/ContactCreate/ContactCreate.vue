<template>
    <form
        class="row contact-create rounded-4 animate__animated animate__fadeIn shadow-lg px-3 my-5 text-dark"
        @submit="handleCreate"
    >
        <header class="d-flex align-items-center">
            <h1 class="fw-bold flex-grow-1 text-dark">New Contact</h1>
            <button
                type="button"
                class="btn-close btn-close-white"
                aria-label="Close"
            ></button>
        </header>
        <div class="mb-3 col-6">
            <label for="formGroup" class="form-label">Name</label>
            <input
                type="text"
                class="form-control"
                id="formGroup"
                placeholder="Input name"
                v-model="name"
            />
        </div>
        <div class="mb-3 col-6">
            <label for="formGroup2" class="form-label">Phone</label>
            <input
                type="text"
                class="form-control"
                id="formGroup2"
                placeholder="Input phone"
                v-model="phone"
            />
        </div>
        <div class="mb-3 col-6">
            <label for="formGroup3" class="form-label">Email</label>
            <input
                type="text"
                class="form-control"
                id="formGroup3"
                placeholder="Input email"
                v-model="email"
            />
        </div>
        <div class="mb-3 col-6">
            <label for="formGroup4" class="form-label">Address</label>
            <input
                type="text"
                class="form-control"
                id="formGroup4"
                placeholder="Input address"
                v-model="address"
            />
        </div>
        <div class="col-6">
            <label for="formGroup2" class="form-label">Favorite</label>
            <select
                v-model="favorite"
                class="form-select"
                aria-label="Default select example"
            >
                <option selected value="">Is favorite?</option>
                <option value="true">True</option>
                <option value="false">False</option>
            </select>
        </div>

        <div class="d-flex justify-content-center" style="height: 40px">
            <input type="submit" class="btn btn-success" value="Create" />
        </div>
    </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "NewContact",
    data() {
        return {
            name: "",
            phone: "",
            email: "",
            address: "",
            favorite: false,
        };
    },
    methods: {
        ...mapActions(["createContact"]),

        handleCreate(event) {
            const contact = {
                name: this.name,
                phone: this.phone,
                email: this.email,
                address: this.address,
                favorite: this.favorite,
                urlFacebook: this.urlFacebook,
                urlTwitter: this.urlTwitter,
                urlInstagram: this.urlInstagram,
            };
            event.preventDefault();
            this.createContact(contact);
        },
    },
    computed: {},
};
</script>

<style>
.contact-create {
    background-color: #fff;
    width: 800px;
}
</style>
