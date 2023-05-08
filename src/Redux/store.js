import {configureStore} from "@reduxjs/toolkit"
import { TodoReducer } from "./Reducers/todo"

const store = configureStore({
   reducer: {
        todo: TodoReducer,
    }
})

export default store;