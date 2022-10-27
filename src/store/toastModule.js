const toastModule = {
    state() {
        return {
            toast: {
                show: false,
                isSuccess: true,
                message: "",
            },
        };
    },
    getters: {
        getToast(state) {
            return state.toast;
        },
    },
    mutations: {
        SHOW_AND_CLOSE_TOAST(state, message) {
            state.toast.show = true;
            state.toast.message = message;

            setTimeout(() => {
                state.toast.show = false;
            }, 3500);
        },
        CLOSE_TOAST(state) {
            state.toast.show = false;
        },
        SET_TOAST_STATE(state, isSuccess) {
            state.toast.isSuccess = isSuccess;
        },
    },
    actions: {},
};

export default toastModule;
