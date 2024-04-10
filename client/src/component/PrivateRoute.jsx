import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from "react-redux";
const PrivateRoutes = () => {
    const token = useSelector((state)=>state.auth.userToken)

    return(
        token ? <Outlet/> : <Navigate to="/"/>
    )
}

export default PrivateRoutes