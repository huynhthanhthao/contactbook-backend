<template>
    <form
        class="row contact-update rounded-4 animate__animated animate__fadeIn shadow-lg px-3 my-5 text-dark"
        @submit="handleUpdate"
    >
        <header class="d-flex align-items-center">
            <h1 class="fw-bold flex-grow-1 text-dark">Update Contact</h1>
        </header>
        <div class="mb-3 col-6">
            <label for="formGroup" class="form-label">Name </label>
            <input
                type="text"
                class="form-control"
                id="formGroup"
                placeholder="Input name"
                v-model="contact.name"
            />
        </div>
        <div class="mb-3 col-6">
            <label for="formGroup2" class="form-label">Phone</label>
            <input
                type="text"
                class="form-control"
                id="formGroup2"
                placeholder="Input phone"
                v-model="contact.phone"
            />
        </div>
        <div class="mb-3 col-6">
            <label for="formGroup3" class="form-label"> Email </label>
            <input
                type="text"
                class="form-control"
                id="formGroup3"
                placeholder="Input email"
                v-model="contact.email"
            />
        </div>
        <div class="mb-3 col-6">
            <label for="formGroup4" class="form-label">Address</label>
            <input
                type="text"
                class="form-control"
                id="formGroup4"
                placeholder="Input address"
                v-model="contact.address"
            />
        </div>
        <div class="col-6">
            <label for="formGroup2" class="form-label">Favorite</label>
            <div v-if="contact.favorite">
                <select
                    class="form-select"
                    aria-label="Default select example"
                    v-model="contact.favorite"
                >
                    <option selected value="true">True</option>
                    <option value="false">False</option>
                </select>
            </div>

            <div v-else>
                <select
                    class="form-select"
                    aria-label="Default select example"
                    v-model="contact.favorite"
                >
                    <option value="true">True</option>
                    <option selected value="false">False</option>
                </select>
            </div>
        </div>

        <div class="d-flex justify-content-center" style="height: 40px">
            <input
                type="submit"
                class="btn btn-warning col-3 py-0"
                value="Update"
            />
        </div>
    </form>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
    name: "COntactUpdate",
    data() {
        return {
            contact: {},
        };
    },
    methods: {
        ...mapActions(["updateContact"]),
        handleUpdate(event) {
            event.preventDefault();
            this.updateContact(this.contact);
        },
    },

    async created() {
        try {
            const contactId = this.$route.params.contactId;
            const res = await axios.get(
                `http://localhost:3000/api/contacts/${contactId}`
            );
            this.contact = res.data.result;
        } catch (error) {
            console.log(error);
        }
    },
};
</script>

<style scoped>
.detail-contact {
    z-index: 2;
}
.contact-update {
    background-color: #fff;
    width: 800px;
}
</style>
