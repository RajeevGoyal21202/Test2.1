import './style/app.css';
import { Routes, Route } from 'react-router-dom';
import AddQuiz from './pages/Admin/AddQuiz';
import AdminDashboard from './pages/Admin/Dashboard';
import AddQuestion from './pages/Admin/AddQuestion';
import HomePage from './pages/common/Home';
import Signup from './pages/common/signup';
import Login from './pages/common/login';
import AdminRoute from "./component/AdminRoute"
import ViewQuestion from './pages/Admin/ViewQuestions';
import PrivateRoutes from './component/PrivateRoute';
import Dashboard from './pages/User/UserDashboard';
import Instruction from './pages/User/Instructions';
function App() {
  return (
    <>
      <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route element={<AdminRoute/>}>
        <Route path='/addQuiz' element={<AddQuiz />} />
        <Route path='/adminDashboard' element={<AdminDashboard />} />
        <Route path='/addQuestion' element={<AddQuestion />} />
        <Route path='/viewQues' element={<ViewQuestion />} />
      </Route>
      <Route element={<PrivateRoutes/>}>

        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/instruction' element ={<Instruction/>}/>
      </Route>


    </Routes>
    
    </>
  
  );
}

export default App;
