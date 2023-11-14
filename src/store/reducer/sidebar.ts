import { createSlice } from "@reduxjs/toolkit";

import { SidebarTypes } from "./types";
import type { RootState } from "..";
import {
  capacityDefault,
  currentDate,
  ratingDefault,
  zoningDefault,
} from "@/dependencies/instance";

const initialState = {
  date: currentDate,
  price: 2000,
  square: 2000,
  capacity: capacityDefault,
  zoning: zoningDefault,
  rating: ratingDefault,
  areas: [],
  time: {
    from: "15:30",
    to: "15:30",
  },
};

export const Sidebar = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setDate: (state, { payload }) => {
      state.date = payload;
    },
    setPrice: (state, { payload }) => {
      state.price = payload;
    },
    setSquare: (state, { payload }) => {
      state.square = payload;
    },
    setCapacity: (state, { payload }) => {
      state.capacity = payload;
    },
    setZoning: (state, { payload }) => {
      state.zoning = payload;
    },
    setRating: (state, { payload }) => {
      state.rating = payload;
    },
    setAreas: (state, { payload }) => {
      state.areas = payload
        .filter(({ isChecked }: { isChecked: boolean }) => isChecked)
        .map(({ title }: { title: string }) => title);
    },
    setTime: (state, { payload }) => {
      state.time = payload;
    },
  },
});
export const {
  setDate,
  setPrice,
  setSquare,
  setCapacity,
  setZoning,
  setRating,
  setAreas,
  setTime,
} = Sidebar.actions;
export const SidebarSate = (state: RootState): SidebarTypes => state.sidebar;
export default Sidebar.reducer;
