import { createReducer } from "@reduxjs/toolkit"
const initialState = {};

export const TodoReducer = createReducer(initialState, {
   TodoRequest: (state) => {
      state.loading = true;
   },
   TodoSuccess: (state, action) => {
      state.loading = false;
      state.todos = action.payload;
   },
   TodoFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
   },
   clearErrors: (state) => {
      state.error = null;
   },


   userDetailsRequest: (state) => {
      state.loading = true;
   },
   userDetailsSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
   },
   userDetailsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
   },

})