import { createSlice } from "@reduxjs/toolkit";

import { SidebarTypes } from "./types";
import type { RootState } from "..";

const initialState = {};

export const Sidebar = createSlice({
  name: "sidebar",
  initialState,
  reducers: {},
});
export const {} = Sidebar.actions;
export const SidebarSate = (state: RootState): SidebarTypes => state.sidebar;
export default Sidebar.reducer;
