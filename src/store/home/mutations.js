export default { //这里要注意不要在mutations里面进行异步操作
    ADD_BOOK(state, book) {
        state.bookList.push(book);
        return true;
    },
    DELETE_BOOK(state, id) {},
    SET_OID(state, oid) {
        state.oid += oid;
    },
    Init_DataList(state, data) {
        state.tableData = state.tableData.concat(data);
    },
}