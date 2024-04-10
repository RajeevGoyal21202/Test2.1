import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerUser } from "../features/auth/authAction";

const SignupComponent = () => {
  const notify = () => toast("Sign Up succesful!");
  const navigate = useNavigate();

  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();
  const onSubmit = async (data) => {
    const {name,email,password,role} = data

    try {
      const res = await dispatch(registerUser({name,email,password,role}))
      if(res.payload.data.success === true){
        notify();
        setTimeout(() => {
          navigate("/");
        }, 3500);
      }
      
      console.log("reassss",res.payload)
      return res

    }
    catch(error){
      
      alert(error)
    }
    
    reset();
  };

  return (
    <Stack sx={{ width: "30%", justifyContent: "center" }}>
      <Card>
        <CardContent sx={{ mb: 6 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack gap={"20px"}>
              <Stack width={"100%"} alignItems={"center"}>
                <h1>Sign up</h1>
              </Stack>
              <Stack width={"100%"} alignItems={"center"}>
                <TextField
                  label="Name"
                  type="text"
                  {...register("name", {
                    required: "Name is requried",
                  })}
                  sx={{ width: "80%" }}
                />
                {errors.email && (
                  <p style={{ color: "red" }}>{`${errors.email.message}`}</p>
                )}
              </Stack>
              <Stack width={"100%"} alignItems={"center"}>
                <TextField
                  label="Email"
                  type="email"
                  {...register("email", {
                    required: "Email is requried",
                  })}
                  sx={{ width: "80%" }}
                />
                {errors.email && (
                  <p style={{ color: "red" }}>{`${errors.email.message}`}</p>
                )}
              </Stack>
              <Stack width={"100%"} alignItems={"center"}>
                <TextField
                  label="Password"
                  type="password"
                  {...register("password", {
                    required: "Password is requried",
                    minLength: {
                      value: 10,
                      message: "Password must atleast 10 character",
                    },
                  })}
                  sx={{ width: "80%" }}
                />
                {errors.password && (
                  <p style={{ color: "red" }}>{`${errors.password.message}`}</p>
                )}
              </Stack>
              <Stack width={"100%"} alignItems={"center"}>
                <TextField
                  {...register("confirmPassword", {
                    required: "Confirm password is required",
                    validate: (value) =>
                      value === getValues("password") || "Passwords must match",
                  })}
                  label="Confirm Password"
                  type="password"
                  required
                  sx={{ width: "80%" }}
                />
                {errors.confirmPassword && (
                  <p
                    style={{ color: "red" }}
                  >{`${errors.confirmPassword.message}`}</p>
                )}
              </Stack>
             <Stack alignItems={"center"}>

              <FormControl sx={{width:"80%" }} >
        <InputLabel variant='outlined' size="small" id="demo-simple-select-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          {...register("role", {
            required: "Role is requried",
          })}
          label="Role"
        >
          <MenuItem value={"user"}>User</MenuItem>
          <MenuItem value={"admin"}>Admin</MenuItem>
        </Select>
      </FormControl>
             </Stack>
              <Stack width={"100%"} alignItems={"center"}>
                <Button
                  type="submit"
                  sx={{ width: "80%" }}
                  disabled={isSubmitting}
                  variant="contained"
                >
                  Submit
                </Button>
                
              </Stack>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
              />
              <Link to={"/"}>
                <Typography sx={{ ml: 6 }}>Already User</Typography>
              </Link>
            </Stack>
          </form>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default SignupComponent;
