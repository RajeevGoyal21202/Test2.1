import { createAsyncThunk } from "@reduxjs/toolkit";
import { ACTION_TYPE } from "./examActionType";
import axios from 'axios'
export const createExam = createAsyncThunk(
ACTION_TYPE.ADD_EXAM,
  async ({ name,duration,category,totalMarks,passingMarks }, {getState, rejectWithValue }) => {
    try {
      let state = getState();
      const config = {
        headers: {
          Authorization: state.auth.userToken,
        },
      };

      const response = await axios.post("http://localhost:8000/exam/addExam",{ name,duration,category,totalMarks,passingMarks},config);
      console.log("message",response)
      return response
    } catch (error) {
      console.log(error);
    }
  }
);
export const getAllExam = createAsyncThunk(
  ACTION_TYPE.GET_ALL_EXAM,
    async ( {token},{ rejectWithValue }) => {
      try {
        console.log("sdddd",token)
        const config = {
          headers: {
            Authorization: token,
          },
        };
  
        const response = await axios.get("http://localhost:8000/exam/getAllExams",config);
        console.log("message",response)
        return response
      } catch (error) {
        console.log(error);
      }
    }
  );
