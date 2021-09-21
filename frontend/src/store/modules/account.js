const account = {
    namespaced: true,
    state: {
        user: localStorage.getItem('user') ? localStorage.getItem('user') : false
    },
    mutations: {
        setUser: (state, payload) => state.user = payload,
        removeUser: state => state.user = false
    },
    actions: {
        login(state, payload) {
            payload.rememberUser ? localStorage.setItem('user', payload.user) : localStorage.removeItem('user');
            state.commit('setUser', payload.user);
        },
        logout(state) {
            localStorage.removeItem('user');
            state.commit('removeUser');
        }
    },
    getters: {
        getUser: state => state.user
    }
}

export default account;