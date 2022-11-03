import { createStore } from "vuex";
import contactModule from "./contactsModule.js";
import toastModule from "./toastModule.js";
// Create a new store instance.
const store = createStore({
    modules: { contactModule, toastModule },
    state() {
        return {
            resultSearch: [],
            showFavorites: false,
            showFormConfirm: false,
            isTyping: false,
        };
    },
    getters: {
        getShowFavorites(state) {
            return state.showFavorites;
        },

        getShowFormConfirm(state) {
            return state.showFormConfirm;
        },
        getResultSearch(state) {
            return state.resultSearch;
        },
        getIsTyping(state) {
            return state.isTyping;
        },
    },
    mutations: {
        SHOW_FORM_CONFIRM(state) {
            state.showFormConfirm = true;
        },
        CLOSE_FORM_CONFIRM(state) {
            state.showFormConfirm = false;
        },

        SHOW_FAVORITES(state) {
            state.showFavorites = true;
        },
        CLOSE_FAVORITES(state) {
            state.showFavorites = false;
        },

        SET_RESULT_SEARCH(state, newResult) {
            state.resultSearch = newResult;
        },
        NO_TYPING(state) {
            state.isTyping = false;
        },
        TYPING(state) {
            state.isTyping = true;
        },
    },
    actions: {},
});

export default store;
