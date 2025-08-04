import {configureStore} from '@reduxjs/toolkit';
import TodoReducer from '../features/TodoSlice.js';
 export const Store=configureStore({
    reducer: TodoReducer
 })