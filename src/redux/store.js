import { configureStore } from "@reduxjs/toolkit";


const store= configureStore({
    reducer:{
        todos: todosReduser,
    }
});

export default store;