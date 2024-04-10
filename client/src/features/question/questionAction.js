import { createAsyncThunk } from "@reduxjs/toolkit";
import { register,login} from "../../services/auth.service";
import { ACTION_TYPE } from "./authActionType";
import axios from 'axios'
export const registerUser = createAsyncThunk(
ACTION_TYPE.ADD_USER,
  async ({ name,email, password,role }, { rejectWithValue }) => {
    try {
      console.log(email,password)
      const res = await register({name,email,password,role})
      return res
    } catch (error) {
      console.log(error)
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const loginUser = createAsyncThunk(
 ACTION_TYPE.SIGN_IN,
  async ({ email, password }, { rejectWithValue }) => {
    try {
      console.log("action", email, password);
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await login({email,password})
      console.log("action res", res);
      return res;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const updateUser = createAsyncThunk(
 ACTION_TYPE.UPDATE_USER, 
  async ({data,token}, { rejectWithValue }) => {
    try {
      console.log("action", data);
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization:token
        },
      };

      const res = await axios.post(
        `http://localhost:8080/users/profile`,
        {data},
        config
      );
      console.log("action res", res);
      return res;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);