import { createReducer } from "@reduxjs/toolkit";

export const serviceReducer = createReducer(
  {
    services: [],
    service: {},
  },
  (builder) => {
    builder
      .addCase("getAllServicesRequest", (state) => {
        state.loading = true;
      })
      .addCase("getAdminServicesRequest", (state) => {
        state.loading = true;
      })
      .addCase("getServiceDetailsRequest", (state) => {
        state.loading = true;
      })
      .addCase("getAllServicesSuccess", (state, action) => {
        state.loading = false;
        state.services = action.payload;
      })
      .addCase("getAdminServicesSuccess", (state, action) => {
        state.loading = false;
        state.services = action.payload.services;
        state.inStock = action.payload.inStock;
        state.outOfStock = action.payload.outOfStock;
      })
      .addCase("getServiceDetailsSuccess", (state, action) => {
        state.loading = false;
        state.service = action.payload;
      })

      .addCase("getAllServicesFail", (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase("getAdminServicesFail", (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase("getServiceDetailsFail", (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder.addCase("clearError", (state) => {
      state.error = null;
    });
    builder.addCase("clearMessage", (state) => {
      state.message = null;
    });
  }
);