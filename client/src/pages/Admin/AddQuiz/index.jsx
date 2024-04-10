import React from 'react'
import { Stack, Typography, Card, CardContent, TextField, Button } from '@mui/material'
import TopBar from '../../../component/navbarLayout'
import Box from '@mui/material/Box';
import { useForm } from "react-hook-form";
import Grid from '@mui/material/Grid';

import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createExam } from '../../../features/exam/examAction';
const AddQuiz = () => {
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
    console.log(data)

    try {
      const res = await dispatch(createExam(data))
      if(res.payload.data.success === true){
        notify();
        setTimeout(() => {
          navigate("/adminDashboard");
        }, 3500);
      }

      console.log("reassss",res.payload)
      return res

    }
    catch (error) {

      alert(error)
    }

    reset();
  };
  return (
    <div>
      <TopBar />
      <Stack height={"65vh"}>

        <Stack sx={{ m: 5 }}>
          <Typography fontSize={"25px"} fontWeight={"600"} color="#03103F" >New Quiz</Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
          <Card sx={{ width: "100%", height: "65vh", border: "1px solid black" }}>
            <CardContent sx={{ m: 4 }}>
              <Box sx={{ flexGrow: 1 }}>

                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <label>Tittle</label>
                      <TextField size='small' type='text' {...register("name", {
                        required: "tittle is requried",
                      })} sx={{ width: "100%", mt: 1 }} />
                      {errors.name && (
                        <p style={{ color: "red" }}>{`${errors.name.message}`}</p>
                      )}

                      <Grid item xs={12}>
                        <label>Category</label>
                        <TextField size='small' {...register("category", {
                          required: "category is requried",
                        })} sx={{ width: "100%", mt: 1 }} />
                        {errors.category && (
                          <p style={{ color: "red" }}>{`${errors.category.message}`}</p>
                        )}
                      </Grid>
                    </Grid>
                    <Grid item xs={6}>
                      <label>Slug</label>
                      <TextField size='small'  {...register("slug", {
                        required: "slug is requried",
                      })} sx={{ width: "100%", mt: 1 }} />
                       {errors.slug && (
                          <p style={{ color: "red" }}>{`${errors.slug.message}`}</p>
                        )}
                   

                      <Grid item xs={12}>
                        <label>Question Category</label>
                        <TextField  {...register("question", {
                          required: "question is requried",
                        })}
                          size='small' sx={{ width: "100%", mt: 1 }} />
                            {errors.question && (
                          <p style={{ color: "red" }}>{`${errors.question.message}`}</p>
                        )}
                      </Grid>
                    </Grid>


                  </Grid>
                  <Grid item xs={12}>
                    <label>Instructions</label>
                    <TextField multiline={true}
                      rows={6} {...register("instructions", {
                        required: "instructions is requried",
                      })} sx={{ width: "100%", mt: 1 }} />
                      {errors.instructions && (
                          <p style={{ color: "red" }}>{`${errors.instructions.message}`}</p>
                        )}

                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <label>Time</label>
                      <TextField size='small' type='number' {...register("duration", {
                        required: "duration is requried",
                      })} sx={{ width: "100%", mt: 1 }} />
                      {errors.duration && (
                          <p style={{ color: "red" }}>{`${errors.duration.message}`}</p>
                        )}
                      <Grid item xs={12}>
                        <label>Retry After</label>
                        <TextField size='small' type='number' {...register("retry", {
                          required: "Retry is requried",
                        })} sx={{ width: "100%", mt: 1 }} />
                         {errors.retry && (
                          <p style={{ color: "red" }}>{`${errors.retry.message}`}</p>
                        )}
                       
                      </Grid>
                    </Grid>
                    <Grid item xs={6}>
                      <label>Passing Marks</label>
                      <TextField size='small' type='number'  {...register("passingMarks", {
                        required: "passingMarks is requried",
                      })} sx={{ width: "100%", mt: 1 }} />
                       {errors.passingMarks && (
                          <p style={{ color: "red" }}>{`${errors.passingMarks.message}`}</p>
                        )}
                     
                      <Grid item xs={12}>
                        <label>Total Marks</label>
                        <TextField size='small' type='number' {...register("totalMarks", {
                          required: "totalMarks is requried",
                        })} sx={{ width: "100%", mt: 1 }} />
                       {errors.totalMarks && (
                          <p style={{ color: "red" }}>{`${errors.totalMarks.message}`}</p>
                        )}
                      </Grid>
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

export default AddQuiz
