import { axiosApi } from "../config";

const PATHS = {
  addExam: "/exam/addExam",
  signin: "/users/login",
};

export const createExam = async (payload) => await axiosApi.post(PATHS.addExam, payload);
export const login = async (payload) => await axiosApi.post(PATHS.signin, payload);