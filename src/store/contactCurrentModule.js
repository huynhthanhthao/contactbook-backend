import axios from "axios";
const contactCurrentModule = {
    state() {
        return { contactCurrent: {} };
    },
    getters: {
        getContactCurrent(state) {
            return state.contactCurrent;
        },
    },
    mutations: {
        SET_CONTACT_UPDATE(state, contactCurrent) {
            state.contactCurrent = contactCurrent;
        },
    },
    actions: {
        async getContactId({ commit }, contactId) {
            try {
                const response = await axios.get(
                    `http://localhost:3000/api/contacts/${contactId}`
                );

                commit("SET_CONTACT_UPDATE", response.data.result);
            } catch (error) {
                console.log(error);
            }
        },
    },
};

export default contactCurrentModule;
