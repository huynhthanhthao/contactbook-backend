<template>
    <div>
        <div class="d-flex align-items-center py-3" style="width: 1200px;">
            <div class="container rounded-4" style="background-color: #fff">
                <RecentContact />
                <ContactsList />
            </div>
        </div>
    </div>
</template>

<script>
import RecentContact from "../RecentContacts/RecentContacts.vue";
import ContactsList from "../ContactsList/ContactsList.vue";

export default {
    name: "HomeComponent",
    components: {
        RecentContact,
        ContactsList,
    },
};
</script>

<style></style>
