import React, { useEffect } from 'react'
import TopBar from '../../../component/navbarLayout'
import SideBar from '../../../component/SidebarLayout'
import { Stack } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { getAllExam } from '../../../features/exam/examAction';
import ExamCard from '../../../component/examCard';
const AdminDashboard = () => {
  const user = useSelector((state) => state?.auth?.userInfo);
  const token = useSelector((state)=>state?.auth?.userToken)
  console.log(token)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllExam({token}));
     // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [dispatch]);
  const userName = user.name
  const exam = useSelector((state)=>state.exam.exam.Exam)
  console.log(exam)


  return (
    <>
     <TopBar />
     <Stack >
      <Stack width={"100%"} alignItems={"center"} sx={{mt:3}}> 

      <h1>Welcome {userName}</h1>
      </Stack>
      <Stack sx={{m:5}} direction={"row"} justifyContent={"space-evenly"} flexWrap={"wrap"} gap={"20px"}>
      {exam?.map((exam) => (
                  <>
                    <ExamCard key={exam._id} exam={exam} />
                  </>
                ))}
      </Stack>
      
     </Stack>
     
    </>
  )
}

export default AdminDashboard
