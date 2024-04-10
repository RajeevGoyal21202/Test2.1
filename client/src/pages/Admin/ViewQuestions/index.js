import React, { useEffect,useState } from 'react'
import QuestionCard from '../../../component/QuestionCard'
import TopBar from '../../../component/navbarLayout'
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
const ViewQuestion = () => {
  const {state} = useLocation()
  const [data,setData]= useState([])
  const [loading, setLoading] = useState(true);
  const token = useSelector((state)=>state?.auth?.userToken)


  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get(`http://localhost:8000/question/getQuestion/${state.id}`,{ 'headers': { 'Authorization': token  } });
        setData(response);
        console.log(data)
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  console.log(state)
  console.log(data)
  return (
    <div>
      <TopBar/>
      {data  && data?.question?.map((item) => (
                  <>
                    <QuestionCard key={item._id} item={item} />
                  </>
                ))}

      
      
      
    </div>
  )
}

export default ViewQuestion
