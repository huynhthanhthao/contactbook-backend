import router from "../router/index.js";
import axios from "axios";
const contactModule = {
    state() {
        return { contacts: [] };
    },
    getters: {
        contacts(state) {
            return state.contacts;
        },
    },
    mutations: {
        SET_CONTACTS(state, contacts) {
            state.contacts = contacts;
        },
        CREATE_CONTACT(state, contact) {
            state.contacts.unshift(contact);
        },
        DELETE_CONTACT(state, contactId) {
            state.contacts = state.contacts.filter(
                (contact) => contact._id != contactId
            );
        },
        DELETE_ALL_CONTACTS(state) {
            state.contacts = [];
        },
        UPDATE_CONTACT(state, contactUpdate) {
            state.contacts.forEach((contact) => {
                if (contact._id == contactUpdate._id) {
                    contact.name = contactUpdate.name;
                    contact.phone = contactUpdate.phone;
                    contact.email = contactUpdate.email;
                    contact.address = contactUpdate.address;
                    contact.favorite = contactUpdate.favorite;
                    contact.urlFacebook = contactUpdate.urlFacebook;
                    contact.urlTwitter = contactUpdate.urlTwitter;
                    contact.urlInstagram = contactUpdate.urlInstagram;
                    return;
                }
            });
        },
    },
    actions: {
        async getContacts({ commit }) {
            try {
                const response = await axios.get(
                    "http://localhost:3000/api/contacts/"
                );
                commit("SET_CONTACTS", response.data.result);
            } catch (error) {
                console.log(error);
            }
        },
        async createContact({ commit }, newContact) {
            const response = await axios.post(
                "http://localhost:3000/api/contacts/",
                newContact
            );
            if (response.data.success) {
                commit("CREATE_CONTACT", response.data.result);
                router.push("/");
            }
            commit("SET_TOAST_STATE", response.data.success);

            commit("SHOW_AND_CLOSE_TOAST", response.data.message);
        },
        async deleteContact({ commit }, idContact) {
            const response = await axios.delete(
                `http://localhost:3000/api/contacts/${idContact}`
            );
            commit("DELETE_CONTACT", response.data.result._id);

            commit("SET_TOAST_STATE", response.data.success);

            commit("SHOW_AND_CLOSE_TOAST", response.data.message);
        },
        async updateContact({ commit }, contact) {
            const response = await axios.put(
                `http://localhost:3000/api/contacts/${contact._id}`,
                contact
            );

            if (response.data.success) {
                commit("UPDATE_CONTACT", response.data.result);
                router.push("/");
            }
            commit("SET_TOAST_STATE", response.data.success);

            commit("SHOW_AND_CLOSE_TOAST", response.data.message);
        },
        async deleteAllContacts({ commit }) {
            const response = await axios.delete(
                `http://localhost:3000/api/contacts/`
            );

            commit("DELETE_ALL_CONTACTS");

            commit("SET_TOAST_STATE", response.data.success);

            commit("SHOW_AND_CLOSE_TOAST", response.data.message);
        },
        async searchContact({ commit }, query) {
            const response = await axios.get(
                `http://localhost:3000/api/contacts/`
            );

            const contacts = response.data.result;
            const resultSearch = [];
            for (let i = 0; i < contacts.length; i++) {
                const temp =
                    contacts[i].name +
                    contacts[i].email +
                    contacts[i].address +
                    contacts[i].phone;

                if (temp.toLowerCase().includes(query.toLowerCase())) {
                    resultSearch.push(contacts[i]);
                }
            }
            commit("SET_RESULT_SEARCH", resultSearch);
        },
    },
};

export default contactModule;
