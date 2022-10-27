<template>
    <div class="contacts-list row h4 pt-4 pb-3">
        <ContactListHeader />
        <div v-if="isTyping" style="overflow-y: scroll; max-height: 400px">
            <div
                v-for="contact in resultSearch"
                :key="contact._id"
                class="col-12 px-4 mt-2"
            >
                <div v-if="getShowFavorites">
                    <ContactItem v-if="contact.favorite" :contact="contact" />
                </div>
                <div v-else>
                    <ContactItem :contact="contact" />
                </div>
            </div>
        </div>
        <div
            v-else-if="contacts != ''"
            style="overflow-y: scroll; max-height: 400px"
        >
            <div
                v-for="contact in contacts"
                :key="contact._id"
                class="col-12 px-4 mt-2"
            >
                <div v-if="getShowFavorites">
                    <ContactItem v-if="contact.favorite" :contact="contact" />
                </div>
                <div v-else>
                    <ContactItem :contact="contact" />
                </div>
            </div>
        </div>
        <div v-else>
            <NoContact />
        </div>
        <ContactListFooter />
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ContactItem from "./ContactItem.vue";
import ContactListHeader from "./ContactsListHeader.vue";
import ContactListFooter from "./ContactsListFooter.vue";
import NoContact from "./NoContact.vue";

export default {
    name: "ContactsList",
    components: {
        ContactItem,
        ContactListHeader,
        ContactListFooter,
        NoContact,
    },
    async created() {
        this.getContacts();
    },
    methods: {
        ...mapActions(["getContacts"]),
    },
    computed: mapGetters({
        contacts: "contacts",
        getShowFavorites: "getShowFavorites",
        resultSearch: "getResultSearch",
        isTyping: "getIsTyping",
    }),
};
</script>

<style>
.accordion-button::after {
    content: none !important;
}
</style>
