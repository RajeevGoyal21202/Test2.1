import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser, updateUser } from "./authAction";

const initalState = {
  loading: false,
  userInfo: {},
  userToken: null,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initalState,
  reducers: {},
  extraReducers: (builder) => {
    //register user
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      console.log("slice", action)
      state.error = action.payload;
    });
    //
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.userInfo = action.payload.data.user;
      console.log(state.userInfo)
      state.userToken = action.payload.data.token;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = true;
      state.success = false;
      state.error = action.error.message;
    });
    builder.addCase(updateUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      console.log("slice", action.payload.data.user);
      state.loading = false;
      state.success = true;
      state.userInfo = action.payload.data.user;
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.loading = true;
      state.success = false;
      state.error = action.error.message;
    });



  },
});

export default authSlice.reducer;