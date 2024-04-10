import { createSlice } from "@reduxjs/toolkit";
import { createExam, getAllExam } from "./examAction";


const initalState = {
  loading: false,
  exam: [],
  error: null,
  success: false,
};

const examSlice = createSlice({
  name: "exam",
  initialState: initalState,
  reducers: {},
  extraReducers: (builder) => {
    //register user
    builder.addCase(getAllExam.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllExam.fulfilled, (state, action) => {
      state.loading = false;
      state.exam = action.payload.data
      state.success = true;
    });
    builder.addCase(getAllExam.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      console.log("slice", action)
      state.error = action.payload;
    });
    //
  


    // builder.addCase(updateUser.pending, (state) => {
    //   state.loading = true;
    // });
    // builder.addCase(updateUser.fulfilled, (state, action) => {
    //   console.log("slice", action.payload.data.user);
    //   state.loading = false;
    //   state.success = true;
    //   state.userInfo = action.payload.data.user;
    // });
    // builder.addCase(updateUser.rejected, (state, action) => {
    //   state.loading = true;
    //   state.success = false;
    //   state.error = action.error.message;
    // });



  },
});

export default examSlice.reducer;