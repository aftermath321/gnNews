import {createSlice} from '@reduxjs/toolkit'

export interface Layout {
  layoutState: string;
}

const layout: Layout = {
  layoutState: "list",
};

export const layoutSlice = createSlice({
  name: "layoutState",
  initialState: layout,
  reducers: {
    setList: (layoutState) => {
      layoutState.layoutState = "list";
    },
    setGrid: (layoutState) => {
      layoutState.layoutState = "grid";
    },
  },
});

export const {setList, setGrid} = layoutSlice.actions;
export default layoutSlice.reducer;
