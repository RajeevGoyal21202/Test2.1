import React, { useState } from 'react'
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
  import {useNavigate} from "react-router-dom"
  import DeleteIcon from '@mui/icons-material/Delete';
  import EditIcon from '@mui/icons-material/Edit';
  import { IconButton } from '@mui/material';
  import { useDispatch, useSelector } from "react-redux";
  import axios from "axios"
const ExamCard = ({exam}) => {
    const [data,setData]= useState("")


    const token = useSelector((state)=>state?.auth?.userToken)
    const user =  useSelector((state)=>state?.auth?.userInfo)
    
    const navigate = useNavigate()

const handleAdd = ()=>{
    
    navigate(
        '/addQuestion',
        {
          state: {
           id:exam._id
          }
        }
      )
    

}
const handleView = ()=>{
    navigate(
        '/viewQues',
        {
          state: {
           id:exam._id
          }
        }
      )
    
}
const handleDelete = async()=>{
    try {
        console.log("stsssart",exam._id)
        const {data: response} = await axios.delete(`http://localhost:8000/exam/deleteExam/${exam._id}`,{ 'headers': { 'Authorization': token  } });
        setData(response);
        console.log(data)
      } catch (error) {
        console.error(error.message);
      }
}
const handleEdit = async()=>{
  try {
      console.log("stsssart",exam._id)
      const {data: response} = await axios.delete(`http://localhost:8000/exam/deleteExam/${exam._id}`,{ 'headers': { 'Authorization': token  } });
      setData(response);
      console.log(data)
    } catch (error) {
      console.error(error.message);
    }
}
const handleStart = async()=>{
  try {
   navigate("/instruction")
  } catch (error) {
    console.error(error.message);
  }

}


  return (
    
        <Card  sx={{width:"300px",height:"300px",border:"1px solid black"}}>
            <CardContent>
                <Stack gap="20px">

                <Stack direction={"row"} justifyContent={"space-between"}>
                    <Stack direction={"row"}>

                <Typography  fontSize={"15"} fontWeight={"600"}>Quiz Name: </Typography>
                <Typography fontSize={"15"}>{exam?.name}</Typography>
                    </Stack>
                <Stack direction="row" gap="10px">
                    <IconButton onClick={handleDelete}> 
                    <DeleteIcon/>
                    </IconButton>   
                    <IconButton onClick={handleEdit}>
                    <EditIcon/>
                    </IconButton>
                </Stack>
                </Stack>
                <Stack direction={"row"}>
                <Typography  fontSize={"15"} fontWeight={"600"}>Category: </Typography>
                <Typography>{exam?.category}</Typography>
                </Stack>
                <Stack direction={"row"}>
                <Typography  fontSize={"15"} fontWeight={"600"}>Duration :   </Typography>
                <Typography>{exam?.duration} minutes</Typography>
                </Stack>
                <Stack direction={"row"}>
                <Typography  fontSize={"15"} fontWeight={"600"}>Total Marks: </Typography>
                <Typography>{exam?.totalMarks}</Typography>
                </Stack>
                <Stack direction={"row"}>
                <Typography  fontSize={"15"} fontWeight={"600"}>Passing Marks: </Typography>
                <Typography>{exam?.passingMarks}</Typography>
                </Stack>
                </Stack>
                {
                  (user.role === "admin") ?

                <Stack direction={"row"}>
                <Button variant='contained' sx={{m:2}} onClick={handleAdd}>Add Ques</Button>
                <Button variant='contained' sx={{m:2}} onClick={handleView}>View Ques</Button>
                </Stack>
                :
                <Stack direction={"row"}>
                <Button variant='contained' sx={{m:2}} onClick={handleStart}>Start Quiz</Button>
                </Stack>

        

                }
                
                
                
            </CardContent>
        </Card>
      
    
  )
}

export default ExamCard
