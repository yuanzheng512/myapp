import Vue from 'vue';
const vue = Vue.prototype;
export default { //在action中可以进行异步操作。
    add_book({ commit }, book) {
        commit('ADD_BOOK', book);
    },
    delete_book({ commit }, book) {
        commit('DELETE_BOOK', id);
    },
    setoid({ commit }, oid) {
        commit('SET_OID', oid);
    },
    initDataList({ commit }) {

        vue.get('/getUsers').then(res => {
            commit("Init_DataList", res);
        });
    },
}