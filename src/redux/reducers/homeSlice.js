import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    ieData: [],
  },
  reducers: {
    insertRecord: (state, action) => {
      let preData = state.ieData;
      state.ieData = [...preData, action.payload];
    },
    updateRecord: (state, action) => {
      let preData = state.ieData;
      const index = preData?.findIndex((item) => item.id === action.payload.id);
      preData[index] = { ...preData[index], ...action.payload };
      state.ieData = [...preData];
    },
    deleteRecord: (state, action) => {
      let preData = state.ieData;
      preData = preData.filter((item) => item.id !== action.payload.id);
      state.ieData = [...preData];
    },
  },
});

export const { insertRecord, increment, updateRecord, deleteRecord } =
  homeSlice.actions;

export default homeSlice.reducer;
