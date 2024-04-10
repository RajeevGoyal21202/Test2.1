import React, { useState } from 'react'
import { Stack, Typography, Card, CardContent, TextField, Button } from '@mui/material'
import TopBar from '../../../component/navbarLayout'
import Box from '@mui/material/Box';
import { useForm } from "react-hook-form";
import Grid from '@mui/material/Grid';
import axios from 'axios'
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from 'react-router-dom';

import { useDispatch,useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { createExam } from '../../../features/exam/examAction';
const AddQuestion = () => {
  const {state} = useLocation()
  const [data,setData]= useState("")
  console.log(state)
  const notify = () => toast("Sign Up succesful!");
  const navigate = useNavigate();
  
  const token = useSelector((state)=>state?.auth?.userToken)

  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();


  const onSubmit = async (data) => {

    const {title,description,answer,option1,option2,option3,option4,weightage} = data

    console.log(data)

    try {
      const {data: response} = await axios.post(`http://localhost:8000/question/addQuestion/${state.id}`,{title,description,answer,option1,option2,option3,option4,weightage},{ 'headers': { 'Authorization': token  } });
      setData(response);
      console.log(data)
    } catch (error) {
      console.error(error.message);
    }

  };
  return (
    <div>
      <TopBar />
      <Stack height={"65vh"}>

        <Stack sx={{ m: 5 }}>
          <Typography fontSize={"25px"} fontWeight={"600"} color="#03103F" >New Question</Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
          <Card sx={{ width: "100%", height: "75vh", border: "1px solid black" }}>
            <CardContent sx={{ m: 4 }}>
              <Box sx={{ flexGrow: 1 }}>

                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <label>Tittle</label>
                      <TextField size='small' type='text' {...register("title", {
                        required: "tittle is requried",
                      })} sx={{ width: "100%", mt: 1,mb:1 }} />
                      {errors.title && (
                        <p style={{ color: "red" }}>{`${errors.title.message}`}</p>
                      )}

                      <Grid item xs={12}>
                        <label>Question Category</label>
                        <TextField size='small' {...register("question", {
                          required: "question is requried", 
                        })} sx={{ width: "100%", mt: 1,mb:1 }} />
                        {errors.question && (
                          <p style={{ color: "red" }}>{`${errors.question.message}`}</p>
                        )}
                      </Grid>
                    </Grid>
                    <Grid item xs={6}>
                      <label>Slug</label>
                      <TextField size='small'  {...register("slug", {
                        required: "slug is requried",
                      })} sx={{ width: "100%", mt: 1,mb:1 }} />
                       {errors.slug && (
                          <p style={{ color: "red" }}>{`${errors.slug.message}`}</p>
                        )}
                   

                      <Grid item xs={12}>
                        <label>Status</label>
                        <TextField  {...register("status", {
                          required: "status is requried",
                        })}
                          size='small' sx={{ width: "100%", mt: 1,mb:1 }} />
                            {errors.status && (
                          <p style={{ color: "red" }}>{`${errors.status.message}`}</p>
                        )}
                      </Grid>
                    </Grid>


                  </Grid>
                  <Grid item xs={12}>
                    <label>Descriptions</label>
                    <TextField multiline={true}
                      rows={6} {...register("description", {
                        required: "description is requried",
                      })} sx={{ width: "100%", mt: 1,mb:1 }} />
                      {errors.description && (
                          <p style={{ color: "red" }}>{`${errors.description.message}`}</p>
                        )}

                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <label>Options 1</label>
                      <TextField size='small' type='number' {...register("option1", {
                        required: "option1 is requried",
                      })} sx={{ width: "100%", mt: 1,mb:1 }} />
                      {errors.option1 && (
                          <p style={{ color: "red" }}>{`${errors.option1.message}`}</p>
                        )}
                      <Grid item xs={12}>
                        <label>Option 2 </label>
                        <TextField size='small' type='number' {...register("option2", {
                          required: "option2 is requried",
                        })} sx={{ width: "100%", mt: 1,mb:1 }} />
                         {errors.option2 && (
                          <p style={{ color: "red" }}>{`${errors.option2.message}`}</p>
                        )}
                       
                      </Grid>
                    </Grid>
                    <Grid item xs={6}>
                      <label>option3</label>
                      <TextField size='small' type='number'  {...register("option3", {
                        required: "option3 is requried",
                      })} sx={{ width: "100%", mt: 1,mb:1 }} />
                       {errors.option3 && (
                          <p style={{ color: "red" }}>{`${errors.option3.message}`}</p>
                        )}
                     
                      <Grid item xs={12}>
                        <label>option 4</label>
                        <TextField size='small' type='number' {...register("option4", {
                          required: "option4 is requried",
                        })} sx={{ width: "100%", mt: 1 }} />
                       {errors.option4 && (
                          <p style={{ color: "red" }}>{`${errors.option4.message}`}</p>
                        )}
                      </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <label>Answer</label>
                        <TextField size='small' type='number' {...register("answer", {
                          required: "answer is requried",
                        })} sx={{ width: "100%", mt: 1 }} />
                       {errors.answer && (
                          <p style={{ color: "red" }}>{`${errors.answer.message}`}</p>
                        )}
                      </Grid>
                      <Grid item xs={6}>
                        <label>Weightage</label>
                        <TextField size='small' type='number' {...register("weightage", {
                          required: "weightage is requried",
                        })} sx={{ width: "100%", mt: 1 }} />
                       {errors.weightage && (
                          <p style={{ color: "red" }}>{`${errors.weightage.message}`}</p>
                        )}
                      </Grid>

                  </Grid>

              </Box>



            </CardContent>

          </Card>
          <Button  disabled={isSubmitting} type="submit" sx={{
            width: "200px", bgcolor: "#03103F", color: "white", mt: 3, "&:hover": {
              bgcolor: "#03103F", color: "white"
            },
          }} >Add</Button>
          </form>
        </Stack>
      </Stack>


    </div>
  )
}

export default AddQuestion
